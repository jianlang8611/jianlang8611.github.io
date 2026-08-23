# PersonaIMG local value-domain editor backup

Archived on 2026-08-23 from the PersonaIMG local workspace.

- `value_domain_review.html` is the local real-time value-domain editor.
- `value_domain_review_server.py` is its writable localhost server.
- The server must run from the original PersonaIMG repository layout because it writes
  the benchmark JSON, current final JSON, and per-category reviewed mappings.
- This archive is source backup only. The public browser editor lives under
  `html/personaimg-dimension-value-editor/` and exports results JSON instead of writing
  repository files directly.

At this snapshot, the local editor supports Animal, Fashion, and Food.
