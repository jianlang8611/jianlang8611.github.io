(() => {
  "use strict";

  const data = window.FOOD_ATTRIBUTE_AUDIT_DATA;
  if (!data || !Array.isArray(data.records) || !Array.isArray(data.scopes)) {
    document.body.innerHTML = "<p style='padding:24px'>Food attribute audit data failed to load.</p>";
    return;
  }

  const elements = {
    attributeList: document.getElementById("attributeList"),
    emptyState: document.getElementById("emptyState"),
    exportButton: document.getElementById("exportButton"),
    nextPendingButton: document.getElementById("nextPendingButton"),
    progressBar: document.getElementById("progressBar"),
    progressLabel: document.getElementById("progressLabel"),
    reviewFilter: document.getElementById("reviewFilter"),
    reviewerButton: document.getElementById("reviewerButton"),
    reviewerName: document.getElementById("reviewerName"),
    scopeEyebrow: document.getElementById("scopeEyebrow"),
    scopeNav: document.getElementById("scopeNav"),
    scopeNote: document.getElementById("scopeNote"),
    scopeProgress: document.getElementById("scopeProgress"),
    scopeTitle: document.getElementById("scopeTitle"),
    searchInput: document.getElementById("searchInput"),
    signatureDialog: document.getElementById("signatureDialog"),
    signatureError: document.getElementById("signatureError"),
    signatureForm: document.getElementById("signatureForm"),
    signatureInput: document.getElementById("signatureInput"),
    toast: document.getElementById("toast"),
    versionLabel: document.getElementById("versionLabel"),
  };

  const recordById = new Map(data.records.map((record) => [record.id, record]));
  const scopeById = new Map(data.scopes.map((scope) => [scope.id, scope]));
  const state = {
    reviewer: "",
    startedAt: null,
    activeScopeId: data.scopes[0]?.id || "global",
    filter: "all",
    query: "",
    reviews: {},
  };
  let toastTimer = null;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function slugify(value) {
    return value.trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-").replace(/^-+|-+$/g, "") || "reviewer";
  }

  function storageKey(name) {
    return `personamir-food-attribute-volunteer:${data.sourceVersion}:${data.sourceSha256}:${slugify(name)}`;
  }

  function emptyReview() {
    return { decision: null, issue: "", reviewedAt: null };
  }

  function reviewFor(id) {
    return state.reviews[id] || emptyReview();
  }

  function isComplete(review) {
    return review.decision === "no_issue" || (review.decision === "issue" && review.issue.trim().length > 0);
  }

  function completedCount(ids = data.records.map((record) => record.id)) {
    return ids.filter((id) => isComplete(reviewFor(id))).length;
  }

  function saveState() {
    if (!state.reviewer) return;
    localStorage.setItem(storageKey(state.reviewer), JSON.stringify({
      reviewer: state.reviewer,
      startedAt: state.startedAt,
      activeScopeId: state.activeScopeId,
      reviews: state.reviews,
      updatedAt: new Date().toISOString(),
    }));
  }

  function loadState(name) {
    const fallback = { reviewer: name, startedAt: new Date().toISOString(), activeScopeId: "global", reviews: {} };
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey(name)) || "null");
      if (!stored) return fallback;
      const reviews = {};
      for (const [id, review] of Object.entries(stored.reviews || {})) {
        if (!recordById.has(id)) continue;
        const decision = review.decision === "no_issue" || review.decision === "issue" ? review.decision : null;
        reviews[id] = {
          decision,
          issue: typeof review.issue === "string" ? review.issue : "",
          reviewedAt: review.reviewedAt || null,
        };
      }
      return {
        reviewer: name,
        startedAt: stored.startedAt || fallback.startedAt,
        activeScopeId: scopeById.has(stored.activeScopeId) ? stored.activeScopeId : "global",
        reviews,
      };
    } catch {
      showToast("本地进度读取失败，已创建新的审核记录。", true);
      return fallback;
    }
  }

  function showToast(message, isError = false) {
    elements.toast.textContent = message;
    elements.toast.classList.toggle("error", isError);
    elements.toast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 2400);
  }

  function currentScope() {
    return scopeById.get(state.activeScopeId) || data.scopes[0];
  }

  function recordsInScope(scope = currentScope()) {
    return scope.recordIds.map((id) => recordById.get(id)).filter(Boolean);
  }

  function searchable(record) {
    return [record.key, record.zh, record.definition, record.dialogueExample]
      .join(" ").toLocaleLowerCase();
  }

  function visibleRecords() {
    return recordsInScope().filter((record) => {
      const review = reviewFor(record.id);
      if (state.filter === "pending" && isComplete(review)) return false;
      if (state.filter === "issue" && review.decision !== "issue") return false;
      if (state.query && !searchable(record).includes(state.query)) return false;
      return true;
    });
  }

  function cardinalityLabel(value) {
    if (value === "single") return "单值";
    const match = value.match(/^multi_max_(\d+)$/);
    return match ? `多值，最多 ${match[1]} 个` : value;
  }

  function renderReview(record) {
    const review = reviewFor(record.id);
    const issueSelected = review.decision === "issue";
    const missingIssue = issueSelected && !review.issue.trim();
    return `
      <div class="decision-block" data-review-id="${escapeHtml(record.id)}">
        <div class="decision-row" role="group" aria-label="${escapeHtml(record.zh)}是否有问题">
          <button type="button" data-decision="no_issue" class="decision-button no-issue ${review.decision === "no_issue" ? "selected" : ""}" aria-pressed="${review.decision === "no_issue"}">无问题</button>
          <button type="button" data-decision="issue" class="decision-button issue ${issueSelected ? "selected" : ""}" aria-pressed="${issueSelected}">有问题</button>
          <span class="decision-state ${isComplete(review) ? "complete" : ""}">${isComplete(review) ? "已完成" : "待判断"}</span>
        </div>
        <label class="issue-field ${issueSelected ? "visible" : ""}">
          <span>问题说明 <strong>必填</strong></span>
          <textarea data-issue-input rows="3" maxlength="1200" ${issueSelected ? "required" : ""} placeholder="请具体说明属性本身存在的问题；本轮不评论属性值">${escapeHtml(review.issue)}</textarea>
          <small class="${missingIssue ? "show" : ""}">选择“有问题”后必须填写说明。</small>
        </label>
      </div>`;
  }

  function renderRecord(record, index) {
    return `
      <article class="attribute-row" id="record-${escapeHtml(record.id)}" data-record-id="${escapeHtml(record.id)}">
        <div class="attribute-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="attribute-body">
          <header class="attribute-title">
            <div>
              <h2>${escapeHtml(record.zh)}</h2>
              <code>${escapeHtml(record.key)}</code>
            </div>
            <span class="cardinality">${escapeHtml(cardinalityLabel(record.cardinality))}</span>
          </header>
          <p class="definition">${escapeHtml(record.definition)}</p>
          <p class="dialogue-example"><strong>对话示例</strong>${escapeHtml(record.dialogueExample)}</p>
          ${renderReview(record)}
        </div>
      </article>`;
  }

  function renderNav() {
    const categoryGroups = [];
    for (const scope of data.scopes) {
      let group = categoryGroups.find((item) => item.key === scope.categoryKey);
      if (!group) {
        group = { key: scope.categoryKey, zh: scope.categoryZh, en: scope.categoryEn, scopes: [] };
        categoryGroups.push(group);
      }
      group.scopes.push(scope);
    }
    elements.scopeNav.innerHTML = categoryGroups.map((group) => `
      <section class="nav-group">
        <h2>${escapeHtml(group.zh)} <span>${escapeHtml(group.en)}</span></h2>
        ${group.scopes.map((scope) => {
          const complete = completedCount(scope.recordIds);
          return `<button type="button" data-scope-id="${escapeHtml(scope.id)}" class="scope-button ${scope.id === state.activeScopeId ? "active" : ""}">
            <span><strong>${escapeHtml(scope.subtypeZh)}</strong><small>${escapeHtml(scope.subtypeEn)}</small></span>
            <em class="${complete === scope.recordIds.length ? "done" : ""}">${complete}/${scope.recordIds.length}</em>
          </button>`;
        }).join("")}
      </section>`).join("");
  }

  function renderHeader() {
    const complete = completedCount();
    const percent = data.totalAttributes ? (complete / data.totalAttributes) * 100 : 0;
    const scope = currentScope();
    const scopeComplete = completedCount(scope.recordIds);
    elements.progressBar.style.width = `${percent}%`;
    elements.progressLabel.textContent = `${complete} / ${data.totalAttributes}`;
    elements.scopeProgress.textContent = `${scopeComplete} / ${scope.recordIds.length}`;
    elements.exportButton.disabled = complete !== data.totalAttributes;
    elements.exportButton.title = complete === data.totalAttributes ? "导出完整审核 JSON" : `还有 ${data.totalAttributes - complete} 项未完成`;
    elements.reviewerName.textContent = state.reviewer || "未署名";
    elements.versionLabel.textContent = data.sourceVersion;
  }

  function renderScope() {
    const scope = currentScope();
    elements.scopeEyebrow.textContent = scope.type === "global" ? "GLOBAL ATTRIBUTES" : `${scope.categoryEn} / ${scope.subtypeEn}`;
    elements.scopeTitle.textContent = scope.type === "global" ? "全局属性" : `${scope.subtypeZh} / ${scope.subtypeEn}`;
    elements.scopeNote.textContent = scope.note;
    const records = visibleRecords();
    elements.attributeList.innerHTML = records.map(renderRecord).join("");
    elements.emptyState.hidden = records.length !== 0;
  }

  function render() {
    renderHeader();
    renderNav();
    renderScope();
  }

  function setReviewer(name) {
    const loaded = loadState(name);
    state.reviewer = loaded.reviewer;
    state.startedAt = loaded.startedAt;
    state.activeScopeId = loaded.activeScopeId;
    state.reviews = loaded.reviews;
    saveState();
    render();
  }

  function updateReview(id, patch) {
    const current = reviewFor(id);
    state.reviews[id] = { ...current, ...patch, reviewedAt: new Date().toISOString() };
    saveState();
    renderHeader();
    renderNav();
  }

  elements.signatureForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = elements.signatureInput.value.trim();
    if (!name) {
      elements.signatureError.textContent = "请先填写审核人姓名。";
      elements.signatureInput.focus();
      return;
    }
    elements.signatureError.textContent = "";
    setReviewer(name);
    elements.signatureDialog.close();
  });

  elements.reviewerButton.addEventListener("click", () => {
    elements.signatureInput.value = state.reviewer;
    elements.signatureError.textContent = "";
    elements.signatureDialog.showModal();
    elements.signatureInput.focus();
  });

  elements.scopeNav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-scope-id]");
    if (!button) return;
    state.activeScopeId = button.dataset.scopeId;
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.reviewFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    elements.reviewFilter.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    renderScope();
  });

  elements.searchInput.addEventListener("input", () => {
    state.query = elements.searchInput.value.trim().toLocaleLowerCase();
    renderScope();
  });

  elements.attributeList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-decision]");
    if (!button) return;
    const block = button.closest("[data-review-id]");
    const id = block?.dataset.reviewId;
    if (!id) return;
    if (button.dataset.decision === "no_issue") {
      updateReview(id, { decision: "no_issue", issue: "" });
      renderScope();
      return;
    }
    updateReview(id, { decision: "issue" });
    renderScope();
    const input = document.querySelector(`[data-review-id="${CSS.escape(id)}"] [data-issue-input]`);
    input?.focus();
  });

  elements.attributeList.addEventListener("input", (event) => {
    const input = event.target.closest("[data-issue-input]");
    if (!input) return;
    const id = input.closest("[data-review-id]")?.dataset.reviewId;
    if (!id) return;
    updateReview(id, { decision: "issue", issue: input.value });
    input.closest(".issue-field")?.querySelector("small")?.classList.toggle("show", !input.value.trim());
    input.closest(".decision-block")?.querySelector(".decision-state")?.classList.toggle("complete", Boolean(input.value.trim()));
    input.closest(".decision-block")?.querySelector(".decision-state")?.replaceChildren(document.createTextNode(input.value.trim() ? "已完成" : "待判断"));
  });

  elements.nextPendingButton.addEventListener("click", () => {
    const pending = data.records.find((record) => !isComplete(reviewFor(record.id)));
    if (!pending) {
      showToast("全部属性已经完成审核。" );
      return;
    }
    state.activeScopeId = pending.scopeId;
    state.filter = "all";
    state.query = "";
    elements.searchInput.value = "";
    elements.reviewFilter.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
    saveState();
    render();
    document.getElementById(`record-${pending.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  elements.exportButton.addEventListener("click", () => {
    const incomplete = data.records.filter((record) => !isComplete(reviewFor(record.id)));
    if (incomplete.length) {
      showToast(`仍有 ${incomplete.length} 项未完成。`, true);
      return;
    }
    const reviews = data.records.map((record) => {
      const review = reviewFor(record.id);
      return {
        attribute_id: record.id,
        scope_type: record.scopeType,
        category: record.categoryKey,
        subtype: record.subtypeKey,
        attribute: record.key,
        decision: review.decision,
        issue: review.decision === "issue" ? review.issue.trim() : null,
        reviewed_at: review.reviewedAt,
      };
    });
    const result = {
      audit_type: data.auditType,
      source_version: data.sourceVersion,
      source_updated_at: data.sourceUpdatedAt,
      source_sha256: data.sourceSha256,
      reviewer: state.reviewer,
      started_at: state.startedAt,
      exported_at: new Date().toISOString(),
      completed: true,
      summary: {
        total: reviews.length,
        no_issue: reviews.filter((review) => review.decision === "no_issue").length,
        issue: reviews.filter((review) => review.decision === "issue").length,
      },
      reviews,
    };
    const blob = new Blob([`${JSON.stringify(result, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    link.href = url;
    link.download = `food-attribute-volunteer-audit-${slugify(state.reviewer)}-${stamp}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("审核 JSON 已导出。" );
  });

  elements.versionLabel.textContent = data.sourceVersion;
  elements.progressLabel.textContent = `0 / ${data.totalAttributes}`;
  elements.signatureDialog.addEventListener("cancel", (event) => {
    if (!state.reviewer) event.preventDefault();
  });
  elements.signatureDialog.showModal();
  elements.signatureInput.focus();
})();
