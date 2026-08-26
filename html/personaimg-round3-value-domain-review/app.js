(() => {
  "use strict";

  const DATA_PATH = "./personaimg_dimension_final.json";
  const STORAGE_PREFIX = "personaimg_round3_value_domain_review_draft_v1";

  const categoryTabs = document.querySelector("#category-tabs");
  const groupTabs = document.querySelector("#group-tabs");
  const sectionHead = document.querySelector("#section-head");
  const dimensionList = document.querySelector("#dimension-list");
  const searchInput = document.querySelector("#search");
  const changedOnlyInput = document.querySelector("#changed-only");
  const commentedOnlyInput = document.querySelector("#commented-only");
  const saveState = document.querySelector("#save-state");
  const changeSummary = document.querySelector("#change-summary");
  const scope = document.querySelector("#scope");
  const statusStrip = document.querySelector("#status-strip");
  const exportButton = document.querySelector("#export-button");
  const resetButton = document.querySelector("#reset-button");
  const reviewerButton = document.querySelector("#reviewer-button");
  const reviewerDialog = document.querySelector("#reviewer-dialog");
  const reviewerForm = document.querySelector("#reviewer-form");
  const reviewerNameInput = document.querySelector("#reviewer-name");
  const toast = document.querySelector("#toast");

  let baseline;
  let working;
  let comments = {};
  let reviewerName = "";
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
      documentCounts(documentValue).values,
    ].join("|");
  }

  function safeReviewerName(value) {
    return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  }

  function validateReviewerName(value) {
    const trimmed = value.trim();
    if (!/^[A-Za-z][A-Za-z .'-]*$/.test(trimmed)) {
      throw new Error("请使用英文字母填写姓名，可包含空格、连字符、句点或撇号");
    }
    return trimmed;
  }

  function storageKey(name = reviewerName) {
    return `${STORAGE_PREFIX}::${safeReviewerName(name)}`;
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

  function valueSnapshot(dimension) {
    return {
      value_domain: dimension.value_domain,
      value_domain_zh: dimension.value_domain_zh,
    };
  }

  function dimensionIndex(documentValue) {
    const result = new Map();
    documentValue.groups.forEach(group => group.final_dimensions.forEach(dimension => {
      result.set(dimension.id, { group, dimension });
    }));
    return result;
  }

  function valuePairs(dimension) {
    return dimension.value_domain.map((english, index) => ({
      english,
      chinese: dimension.value_domain_zh[index] || "",
    }));
  }

  function pairKey(pair) {
    return `${pair.english}\u0000${pair.chinese}`;
  }

  function pairDiff(beforeDimension, afterDimension) {
    const before = valuePairs(beforeDimension).map((pair, index) => ({ ...pair, index }));
    const after = valuePairs(afterDimension).map((pair, index) => ({ ...pair, index }));
    const beforeMatched = new Set();
    const afterMatched = new Set();

    after.forEach(afterPair => {
      const match = before.find(beforePair => !beforeMatched.has(beforePair.index) && pairKey(beforePair) === pairKey(afterPair));
      if (!match) return;
      beforeMatched.add(match.index);
      afterMatched.add(afterPair.index);
    });

    const edits = [];
    after.filter(pair => !afterMatched.has(pair.index)).forEach(afterPair => {
      const match = before.find(beforePair => (
        !beforeMatched.has(beforePair.index)
        && (beforePair.english === afterPair.english || beforePair.chinese === afterPair.chinese)
      ));
      if (!match) return;
      beforeMatched.add(match.index);
      afterMatched.add(afterPair.index);
      edits.push({ before: match, after: afterPair });
    });

    const unmatchedBefore = before.filter(pair => !beforeMatched.has(pair.index));
    const unmatchedAfter = after.filter(pair => !afterMatched.has(pair.index));
    const pairedCount = Math.min(unmatchedBefore.length, unmatchedAfter.length);
    for (let index = 0; index < pairedCount; index += 1) {
      edits.push({ before: unmatchedBefore[index], after: unmatchedAfter[index] });
      beforeMatched.add(unmatchedBefore[index].index);
      afterMatched.add(unmatchedAfter[index].index);
    }

    return {
      added: after.filter(pair => !afterMatched.has(pair.index)),
      removed: before.filter(pair => !beforeMatched.has(pair.index)),
      edited: edits,
    };
  }

  function calculateChanges() {
    const before = dimensionIndex(baseline);
    const after = dimensionIndex(working);
    const changedDimensions = [];
    let addedValueCount = 0;
    let removedValueCount = 0;
    let editedValueCount = 0;

    after.forEach((record, id) => {
      const previous = before.get(id);
      if (!previous) return;
      if (JSON.stringify(valueSnapshot(previous.dimension)) === JSON.stringify(valueSnapshot(record.dimension))) return;
      const diff = pairDiff(previous.dimension, record.dimension);
      addedValueCount += diff.added.length;
      removedValueCount += diff.removed.length;
      editedValueCount += diff.edited.length;
      changedDimensions.push({
        id,
        category_id: record.group.category_id,
        category: record.group.category,
        category_zh: record.group.category_zh,
        group_id: record.group.group_id,
        group: record.group.group,
        group_zh: record.group.group_zh,
        dimension: record.dimension.dimension,
        dimension_zh: record.dimension.dimension_zh,
        before: valuePairs(previous.dimension),
        after: valuePairs(record.dimension),
        value_changes: diff,
      });
    });

    const commentRecords = Object.entries(comments)
      .map(([id, comment]) => ({ id, comment: String(comment).trim(), record: after.get(id) }))
      .filter(item => item.comment && item.record)
      .map(item => ({
        id: item.id,
        category_id: item.record.group.category_id,
        category: item.record.group.category,
        category_zh: item.record.group.category_zh,
        group_id: item.record.group.group_id,
        group: item.record.group.group,
        group_zh: item.record.group.group_zh,
        dimension: item.record.dimension.dimension,
        dimension_zh: item.record.dimension.dimension_zh,
        comment: item.comment,
      }));

    return {
      changedDimensions,
      comments: commentRecords,
      addedValueCount,
      removedValueCount,
      editedValueCount,
    };
  }

  function dimensionChangeState(dimensionId) {
    const before = findDimension(dimensionId, baseline);
    const after = findDimension(dimensionId, working);
    if (!before || !after) return false;
    return JSON.stringify(valueSnapshot(before.dimension)) !== JSON.stringify(valueSnapshot(after.dimension));
  }

  function hasComment(dimensionId) {
    return Boolean(String(comments[dimensionId] || "").trim());
  }

  function documentCounts(documentValue = working) {
    const dimensions = documentValue.groups.reduce((sum, group) => sum + group.final_dimensions.length, 0);
    const values = documentValue.groups.reduce((sum, group) => sum + group.final_dimensions.reduce(
      (groupSum, dimension) => groupSum + dimension.value_domain.length,
      0,
    ), 0);
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
    if (!baseline || !working) return;
    const changes = calculateChanges();
    const counts = documentCounts();
    const modifiedCount = changes.changedDimensions.length;
    scope.textContent = `${counts.dimensions} 个属性 · ${counts.values} 个双语取值 · Revision ${baseline.value_domain_revision}`;
    saveState.textContent = modifiedCount || changes.comments.length ? "审核草稿已自动保存" : "尚未修改或批注";
    changeSummary.textContent = `${modifiedCount} 个属性已改值域 · ${changes.comments.length} 个属性有批注`;
    if (staleDraft) {
      setStatus("当前姓名下的草稿基于较早版本；请核对后导出，或恢复本轮发布版本", "warn");
    } else if (modifiedCount || changes.comments.length) {
      setStatus("所有编辑和批注已保存在当前浏览器；完成后请导出审核 JSON");
    } else {
      setStatus("可直接修改任意中英文取值；不确定如何修改时，请在对应属性下填写批注");
    }
  }

  function persistNow() {
    clearTimeout(persistTimer);
    if (!reviewerName || !working) return;
    try {
      localStorage.setItem(storageKey(), JSON.stringify({
        saved_at: new Date().toISOString(),
        reviewer_name: reviewerName,
        source_fingerprint: sourceFingerprint(baseline),
        document: working,
        comments,
      }));
      refreshSummary();
    } catch (error) {
      saveState.textContent = "浏览器保存失败";
      setStatus(`本地草稿保存失败：${error.message}`, "error");
    }
  }

  function schedulePersist() {
    saveState.textContent = "正在保存审核草稿";
    clearTimeout(persistTimer);
    persistTimer = setTimeout(persistNow, 300);
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
    return [
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
      comments[dimension.id] || "",
    ].join(" ").toLowerCase().includes(searchQuery);
  }

  function visibleRecords() {
    const groups = searchQuery ? working.groups : [findGroup(activeGroupId)].filter(Boolean);
    const records = [];
    groups.forEach(group => group.final_dimensions.forEach(dimension => {
      const changed = dimensionChangeState(dimension.id);
      const commented = hasComment(dimension.id);
      if (!matchesSearch(dimension, group)) return;
      if (changedOnlyInput.checked && !changed) return;
      if (commentedOnlyInput.checked && !commented) return;
      records.push({ group, dimension, changed, commented });
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
    const { group, dimension, changed, commented } = record;
    const changedBadge = changed ? '<span class="badge">值域已修改</span>' : "";
    const commentBadge = commented ? '<span class="badge commented">有批注</span>' : "";
    const groupBadge = searchQuery ? `<span class="badge added">${escapeHtml(group.category_zh)} / ${escapeHtml(group.group_zh)}</span>` : "";
    return `<article class="dimension-card ${changed ? "modified" : ""} ${commented ? "commented" : ""}" data-card-id="${escapeHtml(dimension.id)}">
      <header class="card-head">
        <h3 class="dimension-title">${escapeHtml(dimension.dimension)}<span>${escapeHtml(dimension.dimension_zh)}</span></h3>
        <p class="dimension-copy">${escapeHtml(dimension.explanation_zh)}</p>
        <div class="card-actions">${groupBadge}${changedBadge}${commentBadge}</div>
      </header>
      <div class="values">
        <div class="value-columns"><span>#</span><span>English</span><span>中文</span><span>排序 / 删除</span></div>
        <div>${valueRows(dimension)}</div>
        <button class="add-value" type="button" data-action="add-value" data-dimension-id="${escapeHtml(dimension.id)}">＋ 添加双语取值</button>
      </div>
      <div class="comment-box">
        <label for="comment-${escapeHtml(dimension.id)}">审核批注（可选）<span>不确定如何直接修改时，请简要说明问题</span></label>
        <textarea class="comment-input" id="comment-${escapeHtml(dimension.id)}" data-dimension-id="${escapeHtml(dimension.id)}" placeholder="例如：这几个值不在同一级别，但我不确定如何改。">${escapeHtml(comments[dimension.id] || "")}</textarea>
      </div>
    </article>`;
  }

  function renderWorkspace() {
    const records = visibleRecords();
    const activeGroup = findGroup(activeGroupId);
    if (searchQuery) {
      sectionHead.innerHTML = `<h2 class="section-title">全局搜索 <span>${records.length} 个匹配属性</span></h2>`;
    } else if (activeGroup) {
      sectionHead.innerHTML = `<h2 class="section-title">${escapeHtml(activeGroup.group_zh)} <span>${escapeHtml(activeGroup.group)}</span></h2>
        <div class="section-actions"><span class="section-count">${records.length} / ${activeGroup.final_dimensions.length} 个属性</span></div>`;
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
      for (const dimension of group.final_dimensions) {
        if (!dimension.id || ids.has(dimension.id)) throw new Error(`属性 ID 缺失或重复：${dimension.id || "unknown"}`);
        ids.add(dimension.id);
        if (!Array.isArray(dimension.value_domain) || !Array.isArray(dimension.value_domain_zh) || !dimension.value_domain.length) throw new Error(`值域为空：${dimension.dimension}`);
        if (dimension.value_domain.length !== dimension.value_domain_zh.length) throw new Error(`中英文值域数量不一致：${dimension.dimension}`);
        if (dimension.value_domain.some(value => typeof value !== "string" || !value.trim()) || dimension.value_domain_zh.some(value => typeof value !== "string" || !value.trim())) throw new Error(`存在空白取值：${dimension.dimension_zh} / ${dimension.dimension}`);
        if (new Set(dimension.value_domain.map(value => value.trim().toLowerCase())).size !== dimension.value_domain.length) throw new Error(`存在重复英文取值：${dimension.dimension_zh} / ${dimension.dimension}`);
        if (new Set(dimension.value_domain_zh.map(value => value.trim())).size !== dimension.value_domain_zh.length) throw new Error(`存在重复中文取值：${dimension.dimension_zh} / ${dimension.dimension}`);
      }
    }
    return true;
  }

  function validateComments() {
    const validIds = new Set([...dimensionIndex(working).keys()]);
    Object.keys(comments).forEach(id => {
      if (!validIds.has(id)) delete comments[id];
    });
  }

  function exportResults() {
    try {
      reviewerName = validateReviewerName(reviewerName);
      persistNow();
      validateDocument(working);
      validateComments();
      const changes = calculateChanges();
      const counts = documentCounts();
      const payload = {
        schema_version: "personaimg_round3_value_domain_review_result_v1",
        review_round: 3,
        review_action: "value_domain_crud_and_comments",
        exported_at: new Date().toISOString(),
        reviewer: {
          name: reviewerName,
          normalized_name: safeReviewerName(reviewerName),
        },
        source: {
          schema_version: baseline.schema_version,
          value_domain_revision: baseline.value_domain_revision || 0,
          final_dimension_count: baseline.final_selection_count,
          bilingual_value_count: documentCounts(baseline).values,
          fingerprint: sourceFingerprint(baseline),
        },
        summary: {
          resulting_dimension_count: counts.dimensions,
          resulting_bilingual_value_count: counts.values,
          modified_dimension_count: changes.changedDimensions.length,
          added_value_count: changes.addedValueCount,
          removed_value_count: changes.removedValueCount,
          edited_value_count: changes.editedValueCount,
          commented_dimension_count: changes.comments.length,
        },
        value_domain_changes: changes.changedDimensions,
        comments: changes.comments,
        result_document: working,
      };
      const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `personaimg_round3_value_domain_review_result_${safeReviewerName(reviewerName)}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      showToast("第三轮值域审核 JSON 已导出");
    } catch (error) {
      setStatus(`无法导出：${error.message}`, "error");
      showToast("请修正空白、重复或不成对的中英文取值");
    }
  }

  function loadReviewerDraft(name) {
    reviewerName = name;
    working = clone(baseline);
    comments = {};
    staleDraft = false;
    const stored = localStorage.getItem(storageKey(name));
    if (stored) {
      try {
        const draft = JSON.parse(stored);
        validateDocument(draft.document);
        working = draft.document;
        comments = draft.comments && typeof draft.comments === "object" ? draft.comments : {};
        staleDraft = draft.source_fingerprint !== sourceFingerprint(baseline);
      } catch (error) {
        localStorage.removeItem(storageKey(name));
        setStatus(`已忽略损坏的浏览器草稿：${error.message}`, "warn");
      }
    }
    validateComments();
    const categories = categoryRecords();
    activeCategoryId = categories[0].category_id;
    activeGroupId = groupsForCategory(activeCategoryId)[0].group_id;
    searchQuery = "";
    searchInput.value = "";
    changedOnlyInput.checked = false;
    commentedOnlyInput.checked = false;
    reviewerButton.textContent = `审核者：${reviewerName}`;
    reviewerButton.hidden = false;
    render();
  }

  function openReviewerDialog() {
    reviewerNameInput.value = reviewerName;
    reviewerDialog.showModal();
    setTimeout(() => reviewerNameInput.focus(), 0);
  }

  async function initialize() {
    try {
      const response = await fetch(DATA_PATH, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      baseline = await response.json();
      validateDocument(baseline);
      working = clone(baseline);
      const categories = categoryRecords();
      activeCategoryId = categories[0].category_id;
      activeGroupId = groupsForCategory(activeCategoryId)[0].group_id;
      render();
      openReviewerDialog();
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

  dimensionList.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const found = findDimension(button.dataset.dimensionId);
    if (!found) return;
    const action = button.dataset.action;
    if (action === "add-value") {
      found.dimension.value_domain.push("");
      found.dimension.value_domain_zh.push("");
      schedulePersist();
      renderWorkspace();
      const inputs = document.querySelectorAll(`[data-card-id="${CSS.escape(found.dimension.id)}"] .value-input[data-language="en"]`);
      inputs[inputs.length - 1]?.focus();
    } else if (action === "delete-value") {
      if (found.dimension.value_domain.length === 1) {
        showToast("每个属性至少需要保留一个双语取值");
        return;
      }
      const index = Number(button.dataset.index);
      const label = `${found.dimension.value_domain[index]} / ${found.dimension.value_domain_zh[index]}`;
      if (!confirm(`确定删除取值“${label}”吗？`)) return;
      found.dimension.value_domain.splice(index, 1);
      found.dimension.value_domain_zh.splice(index, 1);
      schedulePersist();
      renderWorkspace();
    } else if (action === "move-value-up") {
      moveValue(found.dimension, Number(button.dataset.index), Number(button.dataset.index) - 1);
    } else if (action === "move-value-down") {
      moveValue(found.dimension, Number(button.dataset.index), Number(button.dataset.index) + 1);
    }
  });

  dimensionList.addEventListener("input", event => {
    const valueInput = event.target.closest(".value-input");
    if (valueInput) {
      const found = findDimension(valueInput.dataset.dimensionId);
      if (!found) return;
      const index = Number(valueInput.dataset.index);
      if (valueInput.dataset.language === "en") found.dimension.value_domain[index] = valueInput.value;
      else found.dimension.value_domain_zh[index] = valueInput.value;
      schedulePersist();
      valueInput.closest(".dimension-card")?.classList.add("modified");
      return;
    }
    const commentInput = event.target.closest(".comment-input");
    if (commentInput) {
      comments[commentInput.dataset.dimensionId] = commentInput.value;
      schedulePersist();
      commentInput.closest(".dimension-card")?.classList.toggle("commented", Boolean(commentInput.value.trim()));
    }
  });

  dimensionList.addEventListener("focusout", event => {
    const valueInput = event.target.closest(".value-input");
    if (valueInput) {
      valueInput.value = valueInput.value.trim();
      const found = findDimension(valueInput.dataset.dimensionId);
      if (!found) return;
      const index = Number(valueInput.dataset.index);
      if (valueInput.dataset.language === "en") found.dimension.value_domain[index] = valueInput.value;
      else found.dimension.value_domain_zh[index] = valueInput.value;
      schedulePersist();
      return;
    }
    const commentInput = event.target.closest(".comment-input");
    if (commentInput) {
      commentInput.value = commentInput.value.trim();
      comments[commentInput.dataset.dimensionId] = commentInput.value;
      schedulePersist();
    }
  });

  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderWorkspace();
  });
  changedOnlyInput.addEventListener("change", renderWorkspace);
  commentedOnlyInput.addEventListener("change", renderWorkspace);
  exportButton.addEventListener("click", exportResults);
  resetButton.addEventListener("click", () => {
    if (!reviewerName) return;
    if (!confirm(`确定清除 ${reviewerName} 的全部值域编辑和批注，并恢复本轮发布版本吗？`)) return;
    working = clone(baseline);
    comments = {};
    staleDraft = false;
    localStorage.removeItem(storageKey());
    render();
    showToast("已恢复本轮发布版本");
  });
  reviewerButton.addEventListener("click", () => {
    persistNow();
    openReviewerDialog();
  });
  reviewerDialog.addEventListener("cancel", event => {
    event.preventDefault();
    if (reviewerName) reviewerDialog.close();
  });
  reviewerForm.addEventListener("submit", event => {
    event.preventDefault();
    try {
      const name = validateReviewerName(reviewerNameInput.value);
      if (reviewerName && reviewerName !== name) persistNow();
      loadReviewerDraft(name);
      reviewerDialog.close();
      showToast(`已载入 ${name} 的审核草稿`);
    } catch (error) {
      reviewerNameInput.setCustomValidity(error.message);
      reviewerNameInput.reportValidity();
      reviewerNameInput.setCustomValidity("");
    }
  });

  initialize();
})();
