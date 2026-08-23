#!/usr/bin/env python3
"""Local writable server for PersonaIMG value-domain review."""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import threading
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


ROOT = Path(__file__).resolve().parents[2]
FINAL_PATH = ROOT / "tmp_local" / "current_personaimg_dimension_final.json"
ROUND2_BUILDER = ROOT / "tmp_local" / "tmp" / "build_current_round2_page.py"
WRITE_LOCK = threading.Lock()
CATEGORY_CONFIG = {
    "animal": {
        "category": "Animal",
        "category_zh": "动物",
        "benchmark_path": ROOT / "benchmark" / "dimension" / "animal.json",
        "mapping_dir": ROOT / "tmp_local" / "tmp" / "animal_value_domains",
    },
    "fashion": {
        "category": "Fashion",
        "category_zh": "时尚",
        "benchmark_path": ROOT / "benchmark" / "dimension" / "fashion.json",
        "mapping_dir": ROOT / "tmp_local" / "tmp" / "fashion_value_domains",
    },
    "food": {
        "category": "Food",
        "category_zh": "食物",
        "benchmark_path": ROOT / "benchmark" / "dimension" / "food.json",
        "mapping_dir": ROOT / "tmp_local" / "tmp" / "food_value_domains",
    },
}


class ValidationError(ValueError):
    """Raised when browser data must not be persisted."""


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")


def read_json(path: Path) -> object:
    return json.loads(path.read_text(encoding="utf-8"))


def atomic_write_json(path: Path, value: object) -> None:
    temporary = path.with_name(f".{path.name}.tmp")
    temporary.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    os.replace(temporary, path)


def normalized_values(value: object, label: str) -> list[str]:
    if not isinstance(value, list) or not value:
        raise ValidationError(f"{label} must contain at least one value")
    result: list[str] = []
    for index, item in enumerate(value, start=1):
        if not isinstance(item, str) or not item.strip():
            raise ValidationError(f"{label}[{index}] cannot be empty")
        result.append(item.strip())
    if len(set(result)) != len(result):
        raise ValidationError(f"{label} contains duplicate values")
    return result


def available_categories() -> list[dict[str, str]]:
    return [
        {
            "category_id": category_id,
            "category": config["category"],
            "category_zh": config["category_zh"],
        }
        for category_id, config in CATEGORY_CONFIG.items()
    ]


def current_category_payload(category_id: str) -> dict[str, object]:
    config = CATEGORY_CONFIG[category_id]
    final = read_json(FINAL_PATH)
    groups = [group for group in final["groups"] if group["category_id"] == category_id]
    return {
        "schema_version": final["schema_version"],
        "revision": final.get("value_domain_revision", 0),
        "last_edited_at": final.get("value_domain_last_edited_at"),
        "category_id": category_id,
        "category": config["category"],
        "category_zh": config["category_zh"],
        "available_categories": available_categories(),
        "dimension_count": sum(len(group["final_dimensions"]) for group in groups),
        "value_count": sum(
            len(dimension["value_domain"])
            for group in groups
            for dimension in group["final_dimensions"]
        ),
        "groups": groups,
    }


def find_final_dimension(
    final: dict[str, object], category_id: str, dimension_id: str
) -> tuple[dict[str, object], dict[str, object]]:
    for group in final["groups"]:
        if group["category_id"] != category_id:
            continue
        for dimension in group["final_dimensions"]:
            if dimension["id"] == dimension_id:
                return group, dimension
    raise ValidationError(f"Unknown {category_id} dimension ID")


def rebuild_round2_page() -> None:
    completed = subprocess.run(
        [sys.executable, str(ROUND2_BUILDER)],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    if completed.returncode:
        raise RuntimeError(completed.stderr.strip() or completed.stdout.strip() or "Page rebuild failed")


def save_value_domain(payload: dict[str, object]) -> dict[str, object]:
    dimension_id = payload.get("dimension_id")
    if not isinstance(dimension_id, str) or "/" not in dimension_id:
        raise ValidationError("A valid dimension ID is required")
    category_id = dimension_id.split("/", 1)[0]
    if category_id not in CATEGORY_CONFIG:
        raise ValidationError("This category is not available for value-domain editing")
    config = CATEGORY_CONFIG[category_id]
    english = normalized_values(payload.get("value_domain"), "English value domain")
    chinese = normalized_values(payload.get("value_domain_zh"), "Chinese value domain")
    if len(english) != len(chinese):
        raise ValidationError("English and Chinese value domains must have the same length")

    final = read_json(FINAL_PATH)
    benchmark_path = config["benchmark_path"]
    benchmark = read_json(benchmark_path)
    group, dimension = find_final_dimension(final, category_id, dimension_id)
    group_name = group["group_id"].split("/", 1)[1]
    mapping_path = config["mapping_dir"] / f"{group_name}.json"
    mapping = read_json(mapping_path)

    expected_english = payload.get("expected_value_domain")
    expected_chinese = payload.get("expected_value_domain_zh")
    if expected_english is not None and expected_english != dimension["value_domain"]:
        raise ValidationError("This value domain changed in another tab; reload before saving")
    if expected_chinese is not None and expected_chinese != dimension["value_domain_zh"]:
        raise ValidationError("This Chinese value domain changed in another tab; reload before saving")

    source_entry = next(
        (item for item in benchmark[group_name] if item.get("dimension") == dimension["dimension"]),
        None,
    )
    if source_entry is None or dimension["dimension"] not in mapping:
        raise RuntimeError("The dimension is missing from an Animal source file")

    originals = {
        FINAL_PATH: FINAL_PATH.read_text(encoding="utf-8"),
        benchmark_path: benchmark_path.read_text(encoding="utf-8"),
        mapping_path: mapping_path.read_text(encoding="utf-8"),
    }
    saved_at = now_iso()
    dimension["value_domain"] = english
    dimension["value_domain_zh"] = chinese
    source_entry["value_domain"] = english
    mapping[dimension["dimension"]] = [[en, zh] for en, zh in zip(english, chinese)]
    final["value_domain_revision"] = int(final.get("value_domain_revision", 0)) + 1
    final["value_domain_last_edited_at"] = saved_at
    total_value_count = sum(
        len(item["value_domain"])
        for final_group in final["groups"]
        if final_group["category_id"] == category_id
        for item in final_group["final_dimensions"]
    )
    if isinstance(final.get("applied_refinement_note"), str):
        category_name = config["category"]
        final["applied_refinement_note"] = re.sub(
            rf"({re.escape(category_name)} value-domain construction:.*?with )\d+( bilingual values)",
            rf"\g<1>{total_value_count}\2",
            final["applied_refinement_note"],
            count=1,
        )

    try:
        atomic_write_json(benchmark_path, benchmark)
        atomic_write_json(mapping_path, mapping)
        atomic_write_json(FINAL_PATH, final)
        rebuild_round2_page()
    except Exception:
        for path, original in originals.items():
            path.write_text(original, encoding="utf-8")
        rebuild_round2_page()
        raise

    return {
        "dimension_id": dimension_id,
        "category_id": category_id,
        "value_domain": english,
        "value_domain_zh": chinese,
        "revision": final["value_domain_revision"],
        "saved_at": saved_at,
        "total_value_count": total_value_count,
    }


class ValueDomainHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args: object, **kwargs: object) -> None:
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def send_json(self, status: HTTPStatus, payload: dict[str, object]) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/value-domains":
            category = parse_qs(parsed.query).get("category", ["food"])[0]
            if category not in CATEGORY_CONFIG:
                self.send_json(HTTPStatus.BAD_REQUEST, {"ok": False, "error": "Category is not available"})
                return
            self.send_json(HTTPStatus.OK, {"ok": True, **current_category_payload(category)})
            return
        if parsed.path == "/api/value-domain-health":
            self.send_json(HTTPStatus.OK, {"ok": True, "time": now_iso()})
            return
        super().do_GET()

    def do_POST(self) -> None:
        if urlparse(self.path).path != "/api/value-domain":
            self.send_json(HTTPStatus.NOT_FOUND, {"ok": False, "error": "Unknown API endpoint"})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length <= 0 or length > 1_000_000:
                raise ValidationError("Invalid request size")
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            if not isinstance(payload, dict):
                raise ValidationError("Request body must be a JSON object")
            with WRITE_LOCK:
                result = save_value_domain(payload)
            self.send_json(HTTPStatus.OK, {"ok": True, **result})
        except ValidationError as error:
            self.send_json(HTTPStatus.CONFLICT, {"ok": False, "error": str(error)})
        except Exception as error:  # pragma: no cover - local diagnostic endpoint
            self.log_error("%s", error)
            self.send_json(HTTPStatus.INTERNAL_SERVER_ERROR, {"ok": False, "error": str(error)})


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8783)
    arguments = parser.parse_args()
    server = ThreadingHTTPServer(("127.0.0.1", arguments.port), ValueDomainHandler)
    print(
        f"PersonaIMG value-domain editor: http://127.0.0.1:{arguments.port}/human-audit/html/value_domain_review.html",
        flush=True,
    )
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
