(() => {
  "use strict";

  const apiUrl = "/api/movie-attribute-schema";
  const storageKey = "personamir-movie-attribute-review-draft-v2-20260825";
  const reviewerStorageKey = "personamir-movie-attribute-review-reviewer-v1";
  const clone = (value) => JSON.parse(JSON.stringify(value));

  const elements = {
    app: document.getElementById("app"),
    loading: document.getElementById("loadingState"),
    scopeNav: document.getElementById("scopeNav"),
    scopeEyebrow: document.getElementById("scopeEyebrow"),
    scopeTitle: document.getElementById("scopeTitle"),
    scopeDescription: document.getElementById("scopeDescription"),
    scopeRule: document.getElementById("scopeRule"),
    globalCount: document.getElementById("globalCount"),
    specificCount: document.getElementById("specificCount"),
    subtypeCount: document.getElementById("subtypeCount"),
    reviewerButton: document.getElementById("reviewerButton"),
    reviewerStatus: document.getElementById("reviewerStatus"),
    saveStatus: document.getElementById("saveStatus"),
    activeMetric: document.getElementById("activeMetric"),
    coreMetric: document.getElementById("coreMetric"),
    valueMetric: document.getElementById("valueMetric"),
    searchInput: document.getElementById("searchInput"),
    filterSelect: document.getElementById("filterSelect"),
    grid: document.getElementById("attributeGrid"),
    undoButton: document.getElementById("undoButton"),
    showDeletedButton: document.getElementById("showDeletedButton"),
    exportButton: document.getElementById("exportButton"),
    addButton: document.getElementById("addButton"),
    toast: document.getElementById("toast"),
    dialog: document.getElementById("attributeDialog"),
    form: document.getElementById("attributeForm"),
    dialogScope: document.getElementById("dialogScope"),
    dialogTitle: document.getElementById("dialogTitle"),
    closeDialogButton: document.getElementById("closeDialogButton"),
    cancelDialogButton: document.getElementById("cancelDialogButton"),
    attributeId: document.getElementById("attributeId"),
    attributeKey: document.getElementById("attributeKey"),
    attributeZh: document.getElementById("attributeZh"),
    attributeCardinality: document.getElementById("attributeCardinality"),
    attributeEvidence: document.getElementById("attributeEvidence"),
    attributeDefinition: document.getElementById("attributeDefinition"),
    attributeDialogue: document.getElementById("attributeDialogue"),
    attributeCore: document.getElementById("attributeCore"),
    addValueButton: document.getElementById("addValueButton"),
    valueRows: document.getElementById("valueRows"),
    reviewerDialog: document.getElementById("reviewerDialog"),
    reviewerForm: document.getElementById("reviewerForm"),
    reviewerNameInput: document.getElementById("reviewerNameInput"),
    annotationDialog: document.getElementById("annotationDialog"),
    annotationForm: document.getElementById("annotationForm"),
    annotationScope: document.getElementById("annotationScope"),
    annotationTitle: document.getElementById("annotationTitle"),
    annotationAttributeId: document.getElementById("annotationAttributeId"),
    annotationText: document.getElementById("annotationText"),
    closeAnnotationButton: document.getElementById("closeAnnotationButton"),
    cancelAnnotationButton: document.getElementById("cancelAnnotationButton"),
    clearAnnotationButton: document.getElementById("clearAnnotationButton"),
  };

  let state = null;
  let activeScope = "global";
  let serverMode = false;
  let showDeleted = false;
  let history = [];
  let saveTimer = null;
  let toastTimer = null;
  let reviewerName = localStorage.getItem(reviewerStorageKey)?.trim() ?? "";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function activeSubtype() {
    return state.subtypes.find((item) => item.key === activeScope) ?? null;
  }

  function activeAttributes() {
    return activeScope === "global" ? state.global_attributes : activeSubtype().attributes;
  }

  function activeScopeLabel() {
    if (activeScope === "global") return "电影通用属性 / Global";
    const subtype = activeSubtype();
    return `${subtype.zh} / ${subtype.key}`;
  }

  function totalActive(attributes) {
    return attributes.filter((item) => !item.deleted).length;
  }

  function makeId() {
    const suffix = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `custom-${activeScope}-${suffix}`;
  }

  function setStatus(message, error = false) {
    elements.saveStatus.textContent = message;
    elements.saveStatus.classList.toggle("error", error);
  }

  function showToast(message, error = false) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.className = `toast show${error ? " error" : ""}`;
    toastTimer = setTimeout(() => { elements.toast.className = "toast"; }, 2600);
  }

  function renderReviewer() {
    const label = reviewerName || "未填写";
    elements.reviewerButton.textContent = `审核人：${label}`;
    elements.reviewerStatus.textContent = label;
  }

  function openReviewerDialog() {
    elements.reviewerNameInput.value = reviewerName;
    elements.reviewerDialog.showModal();
    elements.reviewerNameInput.focus();
  }

  function saveLocal() {
    state.updated_at = new Date().toISOString();
    localStorage.setItem(storageKey, JSON.stringify(state));
    if (!serverMode) {
      setStatus("浏览器已保存");
      return;
    }
    setStatus("写回中...");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveRemote, 350);
  }

  async function saveRemote() {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error ?? `HTTP ${response.status}`);
      if (result.updated_at) state.updated_at = result.updated_at;
      setStatus("已实时写回");
    } catch (error) {
      setStatus("仅浏览器保存", true);
      showToast(`本地写回失败：${error.message}`, true);
    }
  }

  function mutate(callback, message) {
    history.push(clone(state));
    if (history.length > 80) history.shift();
    callback();
    elements.undoButton.disabled = history.length === 0;
    saveLocal();
    render();
    if (message) showToast(message);
  }

  function renderNav() {
    const scopes = [
      { key: "global", zh: "电影通用属性", en: "Global", count: totalActive(state.global_attributes) },
      ...state.subtypes.map((item) => ({ key: item.key, zh: item.zh, en: item.key.replaceAll("_", " "), count: totalActive(item.attributes) })),
    ];
    elements.scopeNav.innerHTML = scopes.map((scope) => `
      <button class="scope-button${scope.key === activeScope ? " active" : ""}" type="button" data-scope="${escapeHtml(scope.key)}">
        <span><strong>${escapeHtml(scope.zh)}</strong><small>${escapeHtml(scope.en)}</small></span>
        <b>${scope.count}</b>
      </button>
    `).join("");
  }

  function renderHeading() {
    const subtype = activeSubtype();
    if (!subtype) {
      elements.scopeEyebrow.textContent = "GLOBAL ATTRIBUTES";
      elements.scopeTitle.textContent = "电影通用属性";
      elements.scopeDescription.textContent = "所有电影共享，重点判断它是否会在自然交互中形成稳定偏好。";
      elements.scopeRule.textContent = "初始每项只放 2 个中英文值，方便快速判断值域层级，不代表最终值域只有两个值。";
    } else {
      elements.scopeEyebrow.textContent = `LOGICAL TYPE · ${subtype.key.toUpperCase().replaceAll("_", " ")}`;
      elements.scopeTitle.textContent = `${subtype.zh}电影专属属性`;
      elements.scopeDescription.textContent = `仅当电影命中 ${subtype.zh} 逻辑类型时启用；来源类型：${subtype.source_genres.join(" / ")}。`;
      elements.scopeRule.textContent = "本页先保留至少 10 个候选属性供删减；每项 2 个值只用于检查属性边界和值域层级。";
    }
  }

  function filteredAttributes() {
    const query = elements.searchInput.value.trim().toLocaleLowerCase();
    const filter = elements.filterSelect.value;
    return activeAttributes().filter((item) => {
      if (item.deleted && !showDeleted) return false;
      if (filter === "core" && !item.core) return false;
      if (filter === "single" && item.cardinality !== "single") return false;
      if (filter === "multi" && item.cardinality === "single") return false;
      if (filter === "annotated" && !item.review_annotation?.note) return false;
      if (!query) return true;
      return [item.key, item.zh, item.definition, item.dialogue_example, item.evidence,
        ...item.values.flatMap((entry) => [entry.value, entry.zh])]
        .join(" ").toLocaleLowerCase().includes(query);
    });
  }

  function cardinalityLabel(value) {
    if (value === "single") return "单值";
    return `多值 · 最多 ${value.slice(-1)} 个`;
  }

  function renderCards() {
    const attributes = activeAttributes();
    const visible = filteredAttributes();
    const active = attributes.filter((item) => !item.deleted);
    elements.activeMetric.textContent = active.length;
    elements.coreMetric.textContent = active.filter((item) => item.core).length;
    elements.valueMetric.textContent = active.reduce((total, item) => total + item.values.length, 0);
    if (!visible.length) {
      elements.grid.innerHTML = '<div class="empty">当前筛选条件下没有属性。</div>';
      return;
    }
    elements.grid.innerHTML = visible.map((item) => {
      const newlyAdded = item.review_marker === "added_after_human_review_2026_08_25";
      const annotation = item.review_annotation?.note ? item.review_annotation : null;
      return `
      <article class="attribute-card${item.deleted ? " deleted" : ""}${newlyAdded ? " newly-added" : ""}${annotation ? " annotated" : ""}">
        <header class="card-head">
          <div class="card-title"><h2>${escapeHtml(item.zh)}<span>${escapeHtml(item.key)}</span></h2><div class="key">${escapeHtml(item.id)}</div></div>
          <div class="card-actions">
            <button class="mini annotation-action" type="button" data-action="annotate" data-id="${escapeHtml(item.id)}" title="不确定如何直接修改时，在这里说明问题">${annotation ? "修改批注" : "批注问题"}</button>
            <button class="mini" type="button" data-action="edit" data-id="${escapeHtml(item.id)}">编辑</button>
            <button class="mini ${item.deleted ? "" : "danger"}" type="button" data-action="${item.deleted ? "restore" : "delete"}" data-id="${escapeHtml(item.id)}">${item.deleted ? "恢复" : "删除"}</button>
          </div>
        </header>
        <div class="card-body">
          <div class="badges"><span class="badge${item.cardinality === "single" ? "" : " multi"}">${cardinalityLabel(item.cardinality)}</span>${item.core ? '<span class="badge core">核心属性</span>' : ""}${newlyAdded ? '<span class="badge new">本轮新增</span>' : ""}${annotation ? '<span class="badge annotation">有问题批注</span>' : ""}${item.deleted ? '<span class="badge">已删除</span>' : ""}</div>
          <p class="definition">${escapeHtml(item.definition)}</p>
          <div class="values">${item.values.map((entry) => `<span class="value-chip">${escapeHtml(entry.value)} / ${escapeHtml(entry.zh)}</span>`).join("")}</div>
          <p class="dialogue">“${escapeHtml(item.dialogue_example)}”</p>
          <p class="evidence">evidence: ${escapeHtml(item.evidence)}</p>
          ${annotation ? `<div class="annotation-note">${escapeHtml(annotation.note)}<small>${escapeHtml(annotation.reviewer_name || "未署名")} · ${escapeHtml(annotation.updated_at || "")}</small></div>` : ""}
        </div>
      </article>
    `;
    }).join("");
  }

  function render() {
    renderNav();
    renderHeading();
    renderCards();
    elements.globalCount.textContent = totalActive(state.global_attributes);
    elements.specificCount.textContent = state.subtypes.reduce((total, item) => total + totalActive(item.attributes), 0);
    elements.subtypeCount.textContent = state.subtypes.length;
    elements.showDeletedButton.textContent = showDeleted ? "隐藏已删除" : "显示已删除";
    renderReviewer();
  }

  function addValueRow(entry = { value: "", zh: "" }) {
    const row = document.createElement("div");
    row.className = "value-row";
    row.innerHTML = `
      <input class="value-en" required placeholder="English value" value="${escapeHtml(entry.value)}">
      <input class="value-zh" required placeholder="中文值" value="${escapeHtml(entry.zh)}">
      <button class="remove-value" type="button" aria-label="删除属性值">×</button>
    `;
    elements.valueRows.append(row);
  }

  function openEditor(attribute = null) {
    elements.form.reset();
    elements.valueRows.innerHTML = "";
    elements.dialogScope.textContent = activeScopeLabel();
    elements.dialogTitle.textContent = attribute ? "编辑属性" : "新增属性";
    elements.attributeId.value = attribute?.id ?? "";
    elements.attributeKey.value = attribute?.key ?? "";
    elements.attributeZh.value = attribute?.zh ?? "";
    elements.attributeCardinality.value = attribute?.cardinality ?? "single";
    elements.attributeEvidence.value = attribute?.evidence ?? "metadata_and_content";
    elements.attributeDefinition.value = attribute?.definition ?? "";
    elements.attributeDialogue.value = attribute?.dialogue_example ?? "";
    elements.attributeCore.checked = Boolean(attribute?.core);
    const values = attribute?.values?.length ? attribute.values : [{ value: "", zh: "" }, { value: "", zh: "" }];
    values.forEach(addValueRow);
    elements.dialog.showModal();
    elements.attributeKey.focus();
  }

  function openAnnotation(attribute) {
    if (!reviewerName) {
      openReviewerDialog();
      return;
    }
    elements.annotationAttributeId.value = attribute.id;
    elements.annotationScope.textContent = activeScopeLabel();
    elements.annotationTitle.textContent = `批注：${attribute.zh} / ${attribute.key}`;
    elements.annotationText.value = attribute.review_annotation?.note ?? "";
    elements.clearAnnotationButton.hidden = !attribute.review_annotation?.note;
    elements.annotationDialog.showModal();
    elements.annotationText.focus();
  }

  function readEditor() {
    const values = [...elements.valueRows.querySelectorAll(".value-row")].map((row) => ({
      value: row.querySelector(".value-en").value.trim(),
      zh: row.querySelector(".value-zh").value.trim(),
    }));
    if (!values.length) throw new Error("至少保留一个属性值。 ");
    const normalized = values.map((entry) => entry.value.toLocaleLowerCase());
    if (new Set(normalized).size !== normalized.length) throw new Error("英文属性值不能重复。 ");
    const existing = activeAttributes().find((item) => item.id === elements.attributeId.value);
    return {
      id: elements.attributeId.value || makeId(),
      key: elements.attributeKey.value.trim(),
      zh: elements.attributeZh.value.trim(),
      cardinality: elements.attributeCardinality.value,
      definition: elements.attributeDefinition.value.trim(),
      values,
      dialogue_example: elements.attributeDialogue.value.trim(),
      core: elements.attributeCore.checked,
      evidence: elements.attributeEvidence.value.trim(),
      deleted: false,
      ...(existing?.review_marker ? { review_marker: existing.review_marker } : {}),
      ...(existing?.review_annotation ? { review_annotation: existing.review_annotation } : {}),
    };
  }

  function exportJson() {
    if (!reviewerName) {
      openReviewerDialog();
      return;
    }
    const payload = clone(state);
    payload.updated_at = new Date().toISOString();
    payload.review_export = {
      reviewer_name: reviewerName,
      exported_at: payload.updated_at,
      annotation_count: [
        ...payload.global_attributes,
        ...payload.subtypes.flatMap((item) => item.attributes),
      ].filter((item) => item.review_annotation?.note).length,
    };
    const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const filenameName = reviewerName
      .normalize("NFKC")
      .replace(/[^\p{Letter}\p{Number}_-]+/gu, "-")
      .replace(/^-+|-+$/g, "") || "reviewer";
    link.download = `personamir-movie-attribute-review-${filenameName}-${payload.updated_at.slice(0, 10)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 0);
    showToast("JSON 已导出。 ");
  }

  async function loadState() {
    try {
      const response = await fetch(apiUrl, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      state = await response.json();
      serverMode = true;
      localStorage.setItem(storageKey, JSON.stringify(state));
      setStatus("本地实时写回");
      return;
    } catch (_) {
      serverMode = false;
    }
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try { state = JSON.parse(saved); } catch (_) { localStorage.removeItem(storageKey); }
    }
    state ??= clone(window.PERSONAMIR_MOVIE_ATTRIBUTE_SCHEMA);
    if (!state) throw new Error("无法读取内置 schema-data.js。 ");
    setStatus("浏览器草稿");
  }

  elements.scopeNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-scope]");
    if (!button) return;
    activeScope = button.dataset.scope;
    elements.searchInput.value = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const attribute = activeAttributes().find((item) => item.id === button.dataset.id);
    if (!attribute) return;
    if (button.dataset.action === "annotate") return openAnnotation(attribute);
    if (button.dataset.action === "edit") return openEditor(attribute);
    if (button.dataset.action === "delete") {
      mutate(() => { attribute.deleted = true; }, `已删除 ${attribute.zh}。`);
    } else if (button.dataset.action === "restore") {
      mutate(() => { attribute.deleted = false; }, `已恢复 ${attribute.zh}。`);
    }
  });

  elements.addButton.addEventListener("click", () => openEditor());
  elements.searchInput.addEventListener("input", renderCards);
  elements.filterSelect.addEventListener("change", renderCards);
  elements.showDeletedButton.addEventListener("click", () => { showDeleted = !showDeleted; render(); });
  elements.exportButton.addEventListener("click", exportJson);
  elements.reviewerButton.addEventListener("click", openReviewerDialog);
  elements.reviewerDialog.addEventListener("cancel", (event) => {
    if (!reviewerName) event.preventDefault();
  });
  elements.reviewerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextName = elements.reviewerNameInput.value.trim();
    if (!nextName) return elements.reviewerNameInput.reportValidity();
    reviewerName = nextName;
    localStorage.setItem(reviewerStorageKey, reviewerName);
    renderReviewer();
    elements.reviewerDialog.close();
    showToast(`审核人已设置为 ${reviewerName}。`);
  });
  elements.undoButton.addEventListener("click", () => {
    if (!history.length) return;
    state = history.pop();
    elements.undoButton.disabled = history.length === 0;
    saveLocal();
    render();
    showToast("已撤销上一步。 ");
  });
  elements.closeDialogButton.addEventListener("click", () => elements.dialog.close());
  elements.cancelDialogButton.addEventListener("click", () => elements.dialog.close());
  elements.addValueButton.addEventListener("click", () => addValueRow());
  elements.valueRows.addEventListener("click", (event) => {
    const button = event.target.closest(".remove-value");
    if (!button) return;
    if (elements.valueRows.children.length <= 1) return showToast("至少保留一个属性值。", true);
    button.closest(".value-row").remove();
  });
  elements.closeAnnotationButton.addEventListener("click", () => elements.annotationDialog.close());
  elements.cancelAnnotationButton.addEventListener("click", () => elements.annotationDialog.close());
  elements.annotationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elements.annotationForm.reportValidity()) return;
    const attribute = activeAttributes().find((item) => item.id === elements.annotationAttributeId.value);
    if (!attribute) return showToast("找不到要批注的属性。", true);
    const note = elements.annotationText.value.trim();
    mutate(() => {
      attribute.review_annotation = {
        note,
        reviewer_name: reviewerName,
        updated_at: new Date().toISOString(),
      };
    }, `已批注 ${attribute.zh}。`);
    elements.annotationDialog.close();
  });
  elements.clearAnnotationButton.addEventListener("click", () => {
    const attribute = activeAttributes().find((item) => item.id === elements.annotationAttributeId.value);
    if (!attribute?.review_annotation) return elements.annotationDialog.close();
    mutate(() => { delete attribute.review_annotation; }, `已清除 ${attribute.zh} 的批注。`);
    elements.annotationDialog.close();
  });
  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elements.form.reportValidity()) return;
    try {
      const next = readEditor();
      const attributes = activeAttributes();
      const duplicate = attributes.find((item) => !item.deleted && item.key === next.key && item.id !== next.id);
      if (duplicate) throw new Error(`当前范围已有属性 ${next.key}。`);
      const index = attributes.findIndex((item) => item.id === next.id);
      mutate(() => {
        if (index >= 0) attributes.splice(index, 1, next);
        else attributes.push(next);
      }, `${index >= 0 ? "已更新" : "已新增"} ${next.zh}。`);
      elements.dialog.close();
    } catch (error) {
      showToast(error.message, true);
    }
  });

  loadState().then(() => {
    elements.loading.hidden = true;
    elements.app.hidden = false;
    render();
    if (!reviewerName) openReviewerDialog();
  }).catch((error) => {
    elements.loading.textContent = `加载失败：${error.message}`;
    showToast(error.message, true);
  });
})();
