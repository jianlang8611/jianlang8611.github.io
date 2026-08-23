(() => {
  "use strict";

  const DATA_PATH = "./personaimg_dimension_final.json";
  const STORAGE_KEY = "personaimg_dimension_value_editor_draft_v1";
  const categoryTabs = document.querySelector("#category-tabs");
  const groupTabs = document.querySelector("#group-tabs");
  const sectionHead = document.querySelector("#section-head");
  const dimensionList = document.querySelector("#dimension-list");
  const searchInput = document.querySelector("#search");
  const changedOnlyInput = document.querySelector("#changed-only");
  const saveState = document.querySelector("#save-state");
  const changeSummary = document.querySelector("#change-summary");
  const scope = document.querySelector("#scope");
  const statusStrip = document.querySelector("#status-strip");
  const importButton = document.querySelector("#import-button");
  const importFile = document.querySelector("#import-file");
  const exportButton = document.querySelector("#export-button");
  const resetButton = document.querySelector("#reset-button");
  const dialog = document.querySelector("#dimension-dialog");
  const dimensionForm = document.querySelector("#dimension-form");
  const dialogTitle = document.querySelector("#dialog-title");
  const dialogKicker = document.querySelector("#dialog-kicker");
  const dimensionIdInput = document.querySelector("#dimension-id");
  const dimensionGroupInput = document.querySelector("#dimension-group");
  const dimensionEnInput = document.querySelector("#dimension-en");
  const dimensionZhInput = document.querySelector("#dimension-zh");
  const dimensionExplanationInput = document.querySelector("#dimension-explanation");
  const dimensionRationaleInput = document.querySelector("#dimension-rationale");
  const toast = document.querySelector("#toast");

  let baseline;
  let working;
  let activeCategoryId = "";
  let activeGroupId = "";
  let searchQuery = "";
  let persistTimer;
  let toastTimer;
  let staleDraft = false;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    })[character]);
  }

  function sourceFingerprint(documentValue) {
    return [
      documentValue.schema_version || "unknown",
      documentValue.value_domain_revision || 0,
      documentValue.final_selection_count || 0,
    ].join("|");
  }

  function categoryRecords(documentValue = working) {
    const records = [];
    const seen = new Set();
    documentValue.groups.forEach(group => {
      if (seen.has(group.category_id)) return;
      seen.add(group.category_id);
      records.push({
        category_id: group.category_id,
        category: group.category,
        category_zh: group.category_zh,
      });
    });
    return records;
  }

  function groupsForCategory(categoryId, documentValue = working) {
    return documentValue.groups.filter(group => group.category_id === categoryId);
  }

  function findGroup(groupId, documentValue = working) {
    return documentValue.groups.find(group => group.group_id === groupId);
  }

  function findDimension(dimensionId, documentValue = working) {
    for (const group of documentValue.groups) {
      const index = group.final_dimensions.findIndex(dimension => dimension.id === dimensionId);
      if (index !== -1) return { group, dimension: group.final_dimensions[index], index };
    }
    return null;
  }

  function dimensionSnapshot(dimension) {
    return {
      dimension: dimension.dimension,
      dimension_zh: dimension.dimension_zh,
      explanation_zh: dimension.explanation_zh,
      interaction_rationale_zh: dimension.interaction_rationale_zh,
      value_domain: dimension.value_domain,
      value_domain_zh: dimension.value_domain_zh,
    };
  }

  function dimensionIndex(documentValue) {
    const result = new Map();
    documentValue.groups.forEach(group => group.final_dimensions.forEach(dimension => {
      result.set(dimension.id, { group_id: group.group_id, dimension });
    }));
    return result;
  }

  function calculateChanges() {
    const before = dimensionIndex(baseline);
    const after = dimensionIndex(working);
    const added = [];
    const deleted = [];
    const modified = [];

    after.forEach((record, id) => {
      const previous = before.get(id);
      if (!previous) {
        added.push({ id, group_id: record.group_id, dimension: clone(record.dimension) });
        return;
      }
      const changedGroup = previous.group_id !== record.group_id;
      const changedContent = JSON.stringify(dimensionSnapshot(previous.dimension)) !== JSON.stringify(dimensionSnapshot(record.dimension));
      if (changedGroup || changedContent) {
        modified.push({
          id,
          from_group_id: previous.group_id,
          to_group_id: record.group_id,
          before: clone(previous.dimension),
          after: clone(record.dimension),
        });
      }
    });

    before.forEach((record, id) => {
      if (!after.has(id)) deleted.push({ id, group_id: record.group_id, dimension: clone(record.dimension) });
    });
    return { added, deleted, modified };
  }

  function dimensionChangeState(dimensionId) {
    const before = findDimension(dimensionId, baseline);
    const after = findDimension(dimensionId, working);
    if (!before && after) return "added";
    if (!before || !after) return "modified";
    const moved = before.group.group_id !== after.group.group_id;
    const changed = JSON.stringify(dimensionSnapshot(before.dimension)) !== JSON.stringify(dimensionSnapshot(after.dimension));
    return moved || changed ? "modified" : "";
  }

  function documentCounts(documentValue = working) {
    const dimensions = documentValue.groups.reduce((sum, group) => sum + group.final_dimensions.length, 0);
    const values = documentValue.groups.reduce((sum, group) => sum + group.final_dimensions.reduce((groupSum, dimension) => groupSum + dimension.value_domain.length, 0), 0);
    return { dimensions, values };
  }

  function setStatus(message, state = "ok") {
    statusStrip.textContent = message;
    statusStrip.className = `status-strip ${state === "ok" ? "" : state}`.trim();
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2600);
  }

  function refreshSummary() {
    const changes = calculateChanges();
    const counts = documentCounts();
    const totalChanges = changes.added.length + changes.deleted.length + changes.modified.length;
    scope.textContent = `${counts.dimensions} 个属性 · ${counts.values} 个双语取值 · 浏览器本地草稿`;
    saveState.textContent = totalChanges ? "草稿已自动保存" : "当前为发布版本";
    changeSummary.textContent = `${changes.added.length} 新增 · ${changes.modified.length} 修改 · ${changes.deleted.length} 删除`;
    if (staleDraft) setStatus("本地草稿基于较早的发布版本；导出或恢复发布版本前请确认内容", "warn");
    else if (totalChanges) setStatus("所有改动已自动保存在当前浏览器，可随时导出 results JSON");
    else setStatus("当前内容与发布版本一致");
  }

  function persistNow() {
    clearTimeout(persistTimer);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        saved_at: new Date().toISOString(),
        source_fingerprint: sourceFingerprint(baseline),
        document: working,
      }));
      refreshSummary();
    } catch (error) {
      saveState.textContent = "浏览器保存失败";
      setStatus(`本地草稿保存失败：${error.message}`, "error");
    }
  }

  function schedulePersist() {
    saveState.textContent = "正在保存草稿";
    clearTimeout(persistTimer);
    persistTimer = setTimeout(persistNow, 350);
  }

  function renderCategoryTabs() {
    categoryTabs.innerHTML = categoryRecords().map(category => {
      const groups = groupsForCategory(category.category_id);
      const count = groups.reduce((sum, group) => sum + group.final_dimensions.length, 0);
      return `<button class="category-tab" type="button" data-category-id="${escapeHtml(category.category_id)}" aria-selected="${category.category_id === activeCategoryId}">
        <span class="category-name">${escapeHtml(category.category_zh)} · ${escapeHtml(category.category)}</span>
        <span class="category-meta">${count} 个属性</span>
      </button>`;
    }).join("");
  }

  function renderGroupTabs() {
    groupTabs.innerHTML = groupsForCategory(activeCategoryId).map(group => {
      const valueCount = group.final_dimensions.reduce((sum, dimension) => sum + dimension.value_domain.length, 0);
      return `<button class="group-tab" type="button" data-group-id="${escapeHtml(group.group_id)}" aria-selected="${group.group_id === activeGroupId}">
        <span class="group-title">${escapeHtml(group.group_zh)} · ${escapeHtml(group.group)}</span>
        <span class="group-meta">${group.final_dimensions.length} 属性 · ${valueCount} 值</span>
      </button>`;
    }).join("");
  }

  function matchesSearch(dimension, group) {
    if (!searchQuery) return true;
    const searchable = [
      group.category,
      group.category_zh,
      group.group,
      group.group_zh,
      dimension.dimension,
      dimension.dimension_zh,
      dimension.explanation_zh,
      dimension.interaction_rationale_zh,
      ...dimension.value_domain,
      ...dimension.value_domain_zh,
    ].join(" ").toLowerCase();
    return searchable.includes(searchQuery);
  }

  function visibleRecords() {
    const groups = searchQuery ? working.groups : [findGroup(activeGroupId)].filter(Boolean);
    const records = [];
    groups.forEach(group => group.final_dimensions.forEach(dimension => {
      const changed = dimensionChangeState(dimension.id);
      if (!matchesSearch(dimension, group)) return;
      if (changedOnlyInput.checked && !changed) return;
      records.push({ group, dimension, changed });
    }));
    return records;
  }

  function valueRows(dimension) {
    return dimension.value_domain.map((value, index) => `<div class="value-row">
      <span class="value-index">${index + 1}</span>
      <input class="value-input" data-dimension-id="${escapeHtml(dimension.id)}" data-index="${index}" data-language="en" value="${escapeHtml(value)}" aria-label="${escapeHtml(dimension.dimension)} English value ${index + 1}">
      <input class="value-input" data-dimension-id="${escapeHtml(dimension.id)}" data-index="${index}" data-language="zh" value="${escapeHtml(dimension.value_domain_zh[index] || "")}" aria-label="${escapeHtml(dimension.dimension_zh)} 中文取值 ${index + 1}">
      <span class="row-actions">
        <button class="icon-button" type="button" data-action="move-value-up" data-dimension-id="${escapeHtml(dimension.id)}" data-index="${index}" title="上移" aria-label="上移" ${index === 0 ? "disabled" : ""}>↑</button>
        <button class="icon-button" type="button" data-action="move-value-down" data-dimension-id="${escapeHtml(dimension.id)}" data-index="${index}" title="下移" aria-label="下移" ${index === dimension.value_domain.length - 1 ? "disabled" : ""}>↓</button>
        <button class="icon-button danger" type="button" data-action="delete-value" data-dimension-id="${escapeHtml(dimension.id)}" data-index="${index}" title="删除取值" aria-label="删除取值">×</button>
      </span>
    </div>`).join("");
  }

  function dimensionCard(record) {
    const { group, dimension, changed } = record;
    const badge = changed === "added" ? '<span class="badge added">新增</span>' : changed ? '<span class="badge">已修改</span>' : "";
    const groupBadge = searchQuery ? `<span class="badge added">${escapeHtml(group.category_zh)} / ${escapeHtml(group.group_zh)}</span>` : "";
    return `<article class="dimension-card ${changed}" data-card-id="${escapeHtml(dimension.id)}">
      <header class="card-head">
        <h3 class="dimension-title">${escapeHtml(dimension.dimension)}<span>${escapeHtml(dimension.dimension_zh)}</span></h3>
        <p class="dimension-copy">${escapeHtml(dimension.explanation_zh)}</p>
        <div class="card-actions">
          ${groupBadge}${badge}
          <button class="icon-button" type="button" data-action="edit-dimension" data-dimension-id="${escapeHtml(dimension.id)}" title="编辑属性" aria-label="编辑属性">✎</button>
          <button class="icon-button" type="button" data-action="add-dimension" data-group-id="${escapeHtml(group.group_id)}" title="在此属性后新增" aria-label="在此属性后新增">＋</button>
          <button class="icon-button danger" type="button" data-action="delete-dimension" data-dimension-id="${escapeHtml(dimension.id)}" title="删除属性" aria-label="删除属性">×</button>
        </div>
      </header>
      <div class="values">
        <div class="value-columns"><span>#</span><span>English</span><span>中文</span><span>排序 / 删除</span></div>
        <div>${valueRows(dimension)}</div>
        <button class="add-value" type="button" data-action="add-value" data-dimension-id="${escapeHtml(dimension.id)}">＋ 添加取值</button>
      </div>
    </article>`;
  }

  function renderWorkspace() {
    const records = visibleRecords();
    const activeGroup = findGroup(activeGroupId);
    if (searchQuery) {
      sectionHead.innerHTML = `<h2 class="section-title">全局搜索 <span>${records.length} 个匹配属性</span></h2>
        <div class="section-actions"><button class="button" type="button" data-action="add-dimension" data-group-id="${escapeHtml(activeGroupId)}">＋ 新增属性</button></div>`;
    } else if (activeGroup) {
      sectionHead.innerHTML = `<h2 class="section-title">${escapeHtml(activeGroup.group_zh)} <span>${escapeHtml(activeGroup.group)}</span></h2>
        <div class="section-actions"><span class="section-count">${records.length} / ${activeGroup.final_dimensions.length} 个属性</span><button class="button" type="button" data-action="add-dimension" data-group-id="${escapeHtml(activeGroup.group_id)}">＋ 新增属性</button></div>`;
    } else {
      sectionHead.innerHTML = "";
    }
    dimensionList.innerHTML = records.length ? records.map(dimensionCard).join("") : '<div class="empty">当前视图没有属性</div>';
  }

  function render() {
    renderCategoryTabs();
    renderGroupTabs();
    renderWorkspace();
    refreshSummary();
  }

  function populateGroupSelect(selectedGroupId) {
    dimensionGroupInput.innerHTML = working.groups.map(group => `<option value="${escapeHtml(group.group_id)}" ${group.group_id === selectedGroupId ? "selected" : ""}>${escapeHtml(group.category_zh)} / ${escapeHtml(group.group_zh)} · ${escapeHtml(group.category)} / ${escapeHtml(group.group)}</option>`).join("");
  }

  function openDimensionDialog(dimensionId = "", groupId = activeGroupId) {
    const found = dimensionId ? findDimension(dimensionId) : null;
    const targetGroupId = found ? found.group.group_id : groupId;
    populateGroupSelect(targetGroupId);
    dimensionIdInput.value = found ? found.dimension.id : "";
    dimensionEnInput.value = found ? found.dimension.dimension : "";
    dimensionZhInput.value = found ? found.dimension.dimension_zh : "";
    dimensionExplanationInput.value = found ? found.dimension.explanation_zh : "";
    dimensionRationaleInput.value = found ? found.dimension.interaction_rationale_zh : "";
    dialogKicker.textContent = found ? `${found.group.category_zh} / ${found.group.group_zh}` : "新增属性";
    dialogTitle.textContent = found ? "编辑属性" : "新增属性";
    dialog.showModal();
    setTimeout(() => dimensionEnInput.focus(), 0);
  }

  function createDimensionId(groupId) {
    const suffix = globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `${groupId}/custom-${suffix}`;
  }

  function saveDimensionForm() {
    const sourceId = dimensionIdInput.value;
    const targetGroup = findGroup(dimensionGroupInput.value);
    if (!targetGroup) throw new Error("目标分组不存在");
    const values = {
      dimension: dimensionEnInput.value.trim(),
      dimension_zh: dimensionZhInput.value.trim(),
      explanation_zh: dimensionExplanationInput.value.trim(),
      interaction_rationale_zh: dimensionRationaleInput.value.trim(),
    };
    if (Object.values(values).some(value => !value)) throw new Error("请完整填写属性信息");

    if (sourceId) {
      const found = findDimension(sourceId);
      if (!found) throw new Error("待编辑属性不存在");
      Object.assign(found.dimension, values);
      if (found.group.group_id !== targetGroup.group_id) {
        found.group.final_dimensions.splice(found.index, 1);
        targetGroup.final_dimensions.push(found.dimension);
        showToast(`属性已移动到 ${targetGroup.group_zh}`);
      } else {
        showToast("属性已更新");
      }
    } else {
      const dimension = {
        id: createDimensionId(targetGroup.group_id),
        ...values,
        value_domain: [""],
        value_domain_zh: [""],
      };
      targetGroup.final_dimensions.push(dimension);
      showToast("属性已新增，请填写首个双语取值");
    }
    dialog.close();
    schedulePersist();
    render();
  }

  function moveValue(dimension, from, to) {
    if (to < 0 || to >= dimension.value_domain.length) return;
    [dimension.value_domain[from], dimension.value_domain[to]] = [dimension.value_domain[to], dimension.value_domain[from]];
    [dimension.value_domain_zh[from], dimension.value_domain_zh[to]] = [dimension.value_domain_zh[to], dimension.value_domain_zh[from]];
    schedulePersist();
    renderWorkspace();
  }

  function validateDocument(documentValue) {
    if (!documentValue || !Array.isArray(documentValue.groups) || !documentValue.groups.length) throw new Error("JSON 缺少 groups");
    const ids = new Set();
    for (const group of documentValue.groups) {
      if (!group.group_id || !Array.isArray(group.final_dimensions)) throw new Error("存在无效分组");
      const names = new Set();
      for (const dimension of group.final_dimensions) {
        if (!dimension.id || ids.has(dimension.id)) throw new Error(`属性 ID 缺失或重复：${dimension.id || "unknown"}`);
        ids.add(dimension.id);
        const nameKey = `${dimension.dimension}\u0000${dimension.dimension_zh}`;
        if (!dimension.dimension || !dimension.dimension_zh || names.has(nameKey)) throw new Error(`属性名缺失或重复：${dimension.dimension || "unknown"}`);
        names.add(nameKey);
        if (!dimension.explanation_zh || !dimension.interaction_rationale_zh) throw new Error(`属性说明不完整：${dimension.dimension}`);
        if (!Array.isArray(dimension.value_domain) || !Array.isArray(dimension.value_domain_zh) || !dimension.value_domain.length) throw new Error(`值域为空：${dimension.dimension}`);
        if (dimension.value_domain.length !== dimension.value_domain_zh.length) throw new Error(`中英文值域数量不一致：${dimension.dimension}`);
        if (dimension.value_domain.some(value => typeof value !== "string" || !value.trim()) || dimension.value_domain_zh.some(value => typeof value !== "string" || !value.trim())) throw new Error(`存在空白取值：${dimension.dimension}`);
        if (new Set(dimension.value_domain).size !== dimension.value_domain.length || new Set(dimension.value_domain_zh).size !== dimension.value_domain_zh.length) throw new Error(`存在重复取值：${dimension.dimension}`);
      }
    }
    return true;
  }

  function exportResults() {
    try {
      persistNow();
      validateDocument(working);
      const changes = calculateChanges();
      const counts = documentCounts();
      const payload = {
        schema_version: "personaimg_dimension_value_editor_result_v1",
        exported_at: new Date().toISOString(),
        source_schema_version: baseline.schema_version,
        source_value_domain_revision: baseline.value_domain_revision || 0,
        summary: {
          dimension_count: counts.dimensions,
          bilingual_value_count: counts.values,
          added_dimension_count: changes.added.length,
          modified_dimension_count: changes.modified.length,
          deleted_dimension_count: changes.deleted.length,
        },
        changes,
        result_document: working,
      };
      const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const stamp = new Date().toISOString().replace(/[:.]/g, "-");
      link.href = url;
      link.download = `personaimg_dimension_value_editor_result_${stamp}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      showToast("results JSON 已导出");
    } catch (error) {
      setStatus(`无法导出：${error.message}`, "error");
      showToast("请先修正不完整的属性或值域");
    }
  }

  async function importResults(file) {
    const parsed = JSON.parse(await file.text());
    const candidate = parsed.result_document || parsed.document || parsed;
    validateDocument(candidate);
    working = clone(candidate);
    staleDraft = sourceFingerprint(candidate) !== sourceFingerprint(baseline);
    const categories = categoryRecords();
    if (!categories.some(category => category.category_id === activeCategoryId)) activeCategoryId = categories[0].category_id;
    const groups = groupsForCategory(activeCategoryId);
    if (!groups.some(group => group.group_id === activeGroupId)) activeGroupId = groups[0].group_id;
    persistNow();
    render();
    showToast("JSON 已导入并保存为浏览器草稿");
  }

  async function initialize() {
    try {
      const response = await fetch(DATA_PATH, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      baseline = await response.json();
      validateDocument(baseline);
      working = clone(baseline);
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const draft = JSON.parse(stored);
          validateDocument(draft.document);
          working = draft.document;
          staleDraft = draft.source_fingerprint !== sourceFingerprint(baseline);
        } catch (error) {
          localStorage.removeItem(STORAGE_KEY);
          setStatus(`已忽略损坏的浏览器草稿：${error.message}`, "warn");
        }
      }
      const categories = categoryRecords();
      activeCategoryId = categories[0].category_id;
      activeGroupId = groupsForCategory(activeCategoryId)[0].group_id;
      render();
    } catch (error) {
      saveState.textContent = "载入失败";
      setStatus(`发布数据载入失败：${error.message}`, "error");
      dimensionList.innerHTML = '<div class="empty">无法读取发布数据</div>';
    }
  }

  categoryTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-category-id]");
    if (!button) return;
    activeCategoryId = button.dataset.categoryId;
    activeGroupId = groupsForCategory(activeCategoryId)[0].group_id;
    searchQuery = "";
    searchInput.value = "";
    render();
  });

  groupTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-group-id]");
    if (!button) return;
    activeGroupId = button.dataset.groupId;
    searchQuery = "";
    searchInput.value = "";
    render();
  });

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "add-dimension") {
      openDimensionDialog("", button.dataset.groupId || activeGroupId);
      return;
    }
    const found = button.dataset.dimensionId ? findDimension(button.dataset.dimensionId) : null;
    if (action === "edit-dimension" && found) {
      openDimensionDialog(found.dimension.id, found.group.group_id);
    } else if (action === "delete-dimension" && found) {
      if (!confirm(`确定删除属性“${found.dimension.dimension_zh} / ${found.dimension.dimension}”及其全部值域吗？`)) return;
      found.group.final_dimensions.splice(found.index, 1);
      schedulePersist();
      render();
      showToast("属性已删除，可通过恢复发布版本撤销全部草稿");
    } else if (action === "add-value" && found) {
      found.dimension.value_domain.push("");
      found.dimension.value_domain_zh.push("");
      schedulePersist();
      renderWorkspace();
      const inputs = document.querySelectorAll(`[data-card-id="${CSS.escape(found.dimension.id)}"] .value-input[data-language="en"]`);
      inputs[inputs.length - 1]?.focus();
    } else if (action === "delete-value" && found) {
      if (found.dimension.value_domain.length === 1) {
        showToast("每个属性至少保留一个双语取值");
        return;
      }
      const index = Number(button.dataset.index);
      found.dimension.value_domain.splice(index, 1);
      found.dimension.value_domain_zh.splice(index, 1);
      schedulePersist();
      renderWorkspace();
    } else if (action === "move-value-up" && found) {
      moveValue(found.dimension, Number(button.dataset.index), Number(button.dataset.index) - 1);
    } else if (action === "move-value-down" && found) {
      moveValue(found.dimension, Number(button.dataset.index), Number(button.dataset.index) + 1);
    }
  });

  dimensionList.addEventListener("input", event => {
    const input = event.target.closest(".value-input");
    if (!input) return;
    const found = findDimension(input.dataset.dimensionId);
    if (!found) return;
    const index = Number(input.dataset.index);
    if (input.dataset.language === "en") found.dimension.value_domain[index] = input.value;
    else found.dimension.value_domain_zh[index] = input.value;
    found.dimension.value_domain[index] ??= "";
    found.dimension.value_domain_zh[index] ??= "";
    schedulePersist();
    const card = input.closest(".dimension-card");
    if (card && !card.classList.contains("added")) card.classList.add("modified");
  });

  dimensionList.addEventListener("focusout", event => {
    const input = event.target.closest(".value-input");
    if (!input) return;
    input.value = input.value.trim();
    const found = findDimension(input.dataset.dimensionId);
    if (!found) return;
    const index = Number(input.dataset.index);
    if (input.dataset.language === "en") found.dimension.value_domain[index] = input.value;
    else found.dimension.value_domain_zh[index] = input.value;
    schedulePersist();
  });

  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderWorkspace();
  });
  changedOnlyInput.addEventListener("change", renderWorkspace);
  importButton.addEventListener("click", () => importFile.click());
  importFile.addEventListener("change", async () => {
    const [file] = importFile.files;
    importFile.value = "";
    if (!file) return;
    try { await importResults(file); }
    catch (error) { setStatus(`导入失败：${error.message}`, "error"); }
  });
  exportButton.addEventListener("click", exportResults);
  resetButton.addEventListener("click", () => {
    if (!confirm("确定清除当前浏览器中的全部改动并恢复发布版本吗？")) return;
    working = clone(baseline);
    staleDraft = false;
    localStorage.removeItem(STORAGE_KEY);
    render();
    showToast("已恢复发布版本");
  });
  dimensionForm.addEventListener("submit", event => {
    event.preventDefault();
    try { saveDimensionForm(); }
    catch (error) { showToast(error.message); }
  });
  document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
  document.querySelector("#dialog-cancel").addEventListener("click", () => dialog.close());
  initialize();
})();
