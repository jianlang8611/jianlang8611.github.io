const searchInput = document.querySelector("#benchmark-search");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const benchmarks = [...document.querySelectorAll(".benchmark")];
const matrixRows = [...document.querySelectorAll(".comparison-table tbody tr")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector(".empty-state");

let activeFilter = "all";

function normalize(value) {
  return value.toLocaleLowerCase("zh-CN").replaceAll(/\s+/g, " ").trim();
}

function matchesFilter(element, query) {
  const tags = normalize(element.dataset.tags || element.dataset.rowTags || "");
  const content = normalize(element.textContent);
  const typeMatch = activeFilter === "all" || tags.includes(activeFilter);
  const queryMatch = !query || `${tags} ${content}`.includes(query);
  return typeMatch && queryMatch;
}

function applyFilters() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  benchmarks.forEach((benchmark) => {
    const isVisible = matchesFilter(benchmark, query);
    benchmark.hidden = !isVisible;
    visibleCount += Number(isVisible);
  });

  matrixRows.forEach((row) => {
    const targetId = row.querySelector("a")?.hash;
    const benchmark = targetId ? document.querySelector(targetId) : null;
    row.hidden = !matchesFilter(benchmark || row, query);
  });

  resultCount.textContent = `显示 ${visibleCount} / ${benchmarks.length}`;
  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((candidate) => {
      const isActive = candidate === button;
      candidate.classList.toggle("is-active", isActive);
      candidate.setAttribute("aria-pressed", String(isActive));
    });
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);
filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
});

applyFilters();
