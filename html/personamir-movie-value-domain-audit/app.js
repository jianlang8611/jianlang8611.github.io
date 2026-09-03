(() => {
  "use strict";

  const data = window.VALUE_DOMAIN_AUDIT_DATA || window.FOOD_VALUE_DOMAIN_AUDIT_DATA;
  const domainKey = data?.domainKey || "food";
  const domainLabel = data?.domainLabel || "Food";
  if (!data || !Array.isArray(data.scopes) || !data.sourceDocument) {
    document.body.innerHTML = `<p style='padding:24px'>${domainLabel} value-domain audit data failed to load.</p>`;
    return;
  }

  const elements = {
    app: document.getElementById("auditApp"),
    attributeList: document.getElementById("attributeList"),
    changedOnlyInput: document.getElementById("changedOnlyInput"),
    changeSummary: document.getElementById("changeSummary"),
    clearFiltersButton: document.getElementById("clearFiltersButton"),
    emptyState: document.getElementById("emptyState"),
    exportButton: document.getElementById("exportButton"),
    resetScopeButton: document.getElementById("resetScopeButton"),
    resultSummary: document.getElementById("resultSummary"),
    reviewerButton: document.getElementById("reviewerButton"),
    reviewerName: document.getElementById("reviewerName"),
    scopeCount: document.getElementById("scopeCount"),
    scopeEyebrow: document.getElementById("scopeEyebrow"),
    scopeMeta: document.getElementById("scopeMeta"),
    scopeNav: document.getElementById("scopeNav"),
    scopeTitle: document.getElementById("scopeTitle"),
    searchInput: document.getElementById("searchInput"),
    signatureDialog: document.getElementById("signatureDialog"),
    signatureError: document.getElementById("signatureError"),
    signatureForm: document.getElementById("signatureForm"),
    signatureInput: document.getElementById("signatureInput"),
    sourceSummary: document.getElementById("sourceSummary"),
    toast: document.getElementById("toast"),
    versionLabel: document.getElementById("versionLabel"),
  };

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const baselineScopes = clone(data.scopes);
  let workingScopes = clone(data.scopes);
  let annotations = { attributes: {}, values: {} };
  let reviewer = "";
  let startedAt = null;
  let activeScopeId = "global";
  let query = "";
  let persistTimer = null;
  let toastTimer = null;

  const baselineValueIndex = valueIndex(baselineScopes);

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function titleCase(value) {
    return value.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function slugify(value) {
    return value
      .normalize("NFKC")
      .trim()
      .toLocaleLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-+|-+$/g, "") || "reviewer";
  }

  function storageKey(name) {
    return `lip-rec-${domainKey}-value-domain-audit:${data.sourceSha256}:${slugify(name)}`;
  }

  function storedProgress(name) {
    const currentKey = storageKey(name);
    const current = localStorage.getItem(currentKey);
    if (current !== null) return current;

    const legacyPrefix = ["persona", "mir"].join("");
    const legacy = localStorage.getItem(legacyPrefix + currentKey.slice("lip-rec".length));
    if (legacy !== null) localStorage.setItem(currentKey, legacy);
    return legacy;
  }

  function attributeId(scopeId, attributeKey) {
    return `${scopeId}:${attributeKey}`;
  }

  function scopeById(scopeId, scopes = workingScopes) {
    return scopes.find((scope) => scope.id === scopeId);
  }

  function attributeById(scopeId, attributeKey, scopes = workingScopes) {
    return scopeById(scopeId, scopes)?.attributes.find((attribute) => attribute.key === attributeKey);
  }

  function valueIndex(scopes) {
    const index = new Map();
    for (const scope of scopes) {
      for (const attribute of scope.attributes) {
        for (const value of attribute.values) {
          index.set(value.id, { scopeId: scope.id, attributeKey: attribute.key, value });
        }
      }
    }
    return index;
  }

  function currentValueIndex() {
    return valueIndex(workingScopes);
  }

  function cleanAnnotations(candidate) {
    const clean = { attributes: {}, values: {} };
    for (const [key, value] of Object.entries(candidate?.attributes || {})) {
      if (typeof value === "string") clean.attributes[key] = value;
    }
    for (const [key, value] of Object.entries(candidate?.values || {})) {
      if (typeof value === "string") clean.values[key] = value;
    }
    return clean;
  }

  function validateStoredScopes(candidate) {
    if (!Array.isArray(candidate) || candidate.length !== baselineScopes.length) return false;
    const baselineIds = new Set(baselineScopes.map((scope) => scope.id));
    return candidate.every((scope) => baselineIds.has(scope.id) && Array.isArray(scope.attributes));
  }

  function loadReviewerState(name) {
    workingScopes = clone(baselineScopes);
    annotations = { attributes: {}, values: {} };
    startedAt = new Date().toISOString();
    try {
      const stored = JSON.parse(storedProgress(name) || "null");
      if (!stored) return false;
      if (validateStoredScopes(stored.workingScopes)) workingScopes = stored.workingScopes;
      annotations = cleanAnnotations(stored.annotations);
      startedAt = stored.startedAt || startedAt;
      if (scopeById(stored.activeScopeId)) activeScopeId = stored.activeScopeId;
      return true;
    } catch (error) {
      showToast("本地进度读取失败，已开始新的审核。", true);
      return false;
    }
  }

  function persistNow() {
    window.clearTimeout(persistTimer);
    if (!reviewer) return;
    try {
      localStorage.setItem(storageKey(reviewer), JSON.stringify({
        sourceSha256: data.sourceSha256,
        reviewer,
        startedAt,
        savedAt: new Date().toISOString(),
        activeScopeId,
        workingScopes,
        annotations,
      }));
      renderSummary();
    } catch (error) {
      showToast("浏览器本地保存失败，请尽快导出 JSON。", true);
    }
  }

  function schedulePersist() {
    window.clearTimeout(persistTimer);
    persistTimer = window.setTimeout(persistNow, 320);
  }

  function calculateChanges() {
    const current = currentValueIndex();
    const added = [];
    const modified = [];
    const deleted = [];

    for (const [id, record] of current) {
      const before = baselineValueIndex.get(id);
      if (!before) {
        added.push({
          value_id: id,
          scope_id: record.scopeId,
          attribute: record.attributeKey,
          value: record.value.value.trim(),
          usage_count: record.value.usageCount,
        });
      } else if (before.value.value !== record.value.value) {
        modified.push({
          value_id: id,
          scope_id: record.scopeId,
          attribute: record.attributeKey,
          before: before.value.value,
          after: record.value.value.trim(),
          usage_count: record.value.usageCount,
        });
      }
    }

    for (const [id, record] of baselineValueIndex) {
      if (!current.has(id)) {
        deleted.push({
          value_id: id,
          scope_id: record.scopeId,
          attribute: record.attributeKey,
          value: record.value.value,
          usage_count: record.value.usageCount,
        });
      }
    }
    return { added, modified, deleted };
  }

  function annotationCount() {
    return [...Object.values(annotations.attributes), ...Object.values(annotations.values)]
      .filter((note) => note.trim()).length;
  }

  function changesForAttribute(scopeId, attributeKey, changes = calculateChanges()) {
    const matches = (change) => change.scope_id === scopeId && change.attribute === attributeKey;
    return {
      added: changes.added.filter(matches),
      modified: changes.modified.filter(matches),
      deleted: changes.deleted.filter(matches),
    };
  }

  function attributeHasActivity(scopeId, attributeKey, changes = calculateChanges()) {
    const local = changesForAttribute(scopeId, attributeKey, changes);
    if (local.added.length || local.modified.length || local.deleted.length) return true;
    if ((annotations.attributes[attributeId(scopeId, attributeKey)] || "").trim()) return true;
    const relevantIds = new Set([
      ...(attributeById(scopeId, attributeKey, baselineScopes)?.values.map((value) => value.id) || []),
      ...(attributeById(scopeId, attributeKey)?.values.map((value) => value.id) || []),
    ]);
    return [...relevantIds].some((id) => (annotations.values[id] || "").trim());
  }

  function scopeActivityCount(scopeId, changes = calculateChanges()) {
    const scope = scopeById(scopeId);
    return scope ? scope.attributes.filter((attribute) => attributeHasActivity(scopeId, attribute.key, changes)).length : 0;
  }

  function renderSummary() {
    const changes = calculateChanges();
    const notes = annotationCount();
    elements.changeSummary.textContent = `${changes.added.length} 新增 · ${changes.modified.length} 修改 · ${changes.deleted.length} 删除 · ${notes} 批注`;
    elements.resultSummary.textContent = `当前结果：${changes.added.length + changes.modified.length + changes.deleted.length} 项值域改动，${notes} 条批注；草稿自动保存在本浏览器。`;
  }

  function categoryScopes(category) {
    return workingScopes.filter((scope) => scope.category === category);
  }

  function renderNav() {
    const changes = calculateChanges();
    elements.scopeNav.innerHTML = data.categoryOrder.map((category) => {
      const scopes = categoryScopes(category);
      if (!scopes.length) return "";
      return `<section class="nav-group">
        <h2>${escapeHtml(data.categoryLabels[category] || titleCase(category))}</h2>
        ${scopes.map((scope) => {
          const activity = scopeActivityCount(scope.id, changes);
          const valueCount = scope.attributes.reduce((sum, attribute) => sum + attribute.values.length, 0);
          const name = scope.id === "global" ? (data.globalScopeLabel || "全局属性") : titleCase(scope.subtype);
          return `<button class="scope-button ${scope.id === activeScopeId ? "active" : ""}" type="button" data-scope-id="${escapeHtml(scope.id)}">
            <span><strong>${escapeHtml(name)}</strong><small>${scope.attributes.length} 属性 · ${valueCount} 值</small></span>
            <em class="${activity ? "changed" : ""}">${activity ? `${activity} 有记录` : ""}</em>
          </button>`;
        }).join("")}
      </section>`;
    }).join("");
  }

  function searchableText(scope, attribute) {
    const notes = [annotations.attributes[attributeId(scope.id, attribute.key)] || ""];
    for (const value of attribute.values) notes.push(annotations.values[value.id] || "");
    return [
      scope.id,
      data.categoryLabels[scope.category] || scope.category,
      scope.subtype,
      attribute.key,
      attribute.zh,
      attribute.definition,
      attribute.valueLevel,
      ...attribute.values.map((value) => value.value),
      ...(attribute.observedPreview || []).map((value) => value.value),
      ...notes,
    ].join(" ").toLocaleLowerCase();
  }

  function visibleAttributes() {
    const changes = calculateChanges();
    const scopes = query ? workingScopes : [scopeById(activeScopeId)].filter(Boolean);
    const records = [];
    for (const scope of scopes) {
      for (const attribute of scope.attributes) {
        if (query && !searchableText(scope, attribute).includes(query)) continue;
        if (elements.changedOnlyInput.checked && !attributeHasActivity(scope.id, attribute.key, changes)) continue;
        records.push({ scope, attribute, changes: changesForAttribute(scope.id, attribute.key, changes) });
      }
    }
    return records;
  }

  function matchingValues(scope, attribute) {
    if (!query) return attribute.values;
    const metadata = [
      scope.id,
      data.categoryLabels[scope.category] || scope.category,
      scope.subtype,
      attribute.key,
      attribute.zh,
      attribute.definition,
      attribute.valueLevel,
      annotations.attributes[attributeId(scope.id, attribute.key)] || "",
    ].join(" ").toLocaleLowerCase();
    if (metadata.includes(query)) return attribute.values;
    return attribute.values.filter((value) => {
      return value.value.toLocaleLowerCase().includes(query)
        || (annotations.values[value.id] || "").toLocaleLowerCase().includes(query);
    });
  }

  function valueRow(scope, attribute, value, index) {
    const baseline = baselineValueIndex.get(value.id);
    const status = !baseline ? "is-added" : baseline.value.value !== value.value ? "is-modified" : "";
    const note = annotations.values[value.id] || "";
    const noteVisible = Boolean(note.trim());
    return `<div class="value-row ${status}" data-value-id="${escapeHtml(value.id)}">
      <span class="value-index">${index + 1}</span>
      <span class="value-cell">
        <input class="value-input" data-value-input value="${escapeHtml(value.value)}" maxlength="300" aria-label="${escapeHtml(attribute.key)} 取值 ${index + 1}">
        ${value.zh && value.zh !== value.value ? `<small>${escapeHtml(value.zh)}</small>` : ""}
      </span>
      <span class="usage-count">使用 ${Number(value.usageCount).toLocaleString("en-US")}</span>
      <span class="row-actions">
        <button class="icon-button ${noteVisible ? "has-note" : ""}" type="button" data-action="toggle-value-note" title="批注此取值" aria-label="批注此取值">✎</button>
        <button class="icon-button danger" type="button" data-action="delete-value" title="删除此取值" aria-label="删除此取值">×</button>
      </span>
      <label class="value-note ${noteVisible ? "visible" : ""}">
        <small>单值批注</small>
        <textarea data-value-note rows="2" maxlength="1600" placeholder="记录这个取值的问题或修改建议">${escapeHtml(note)}</textarea>
      </label>
    </div>`;
  }

  function attributeCard(record) {
    const { scope, attribute, changes } = record;
    const localChangeCount = changes.added.length + changes.modified.length + changes.deleted.length;
    const note = annotations.attributes[attributeId(scope.id, attribute.key)] || "";
    const hasActivity = attributeHasActivity(scope.id, attribute.key);
    const values = matchingValues(scope, attribute);
    const contextBadge = query ? `<span class="badge">${escapeHtml(scope.id)}</span>` : "";
    const domainBadge = attribute.domainKind
      ? `<span class="badge">${attribute.domainKind === "open_entity" ? "开放实体" : "封闭值域"}</span>`
      : "";
    const isOpenEntity = attribute.domainKind === "open_entity";
    const openEntitySummary = isOpenEntity ? `<div class="open-entity-summary">
      <strong>开放实体属性，仅审核定义与规范</strong>
      <span>池内观察到 ${Number(attribute.observedCount || 0).toLocaleString("en-US")} 个规范实体值；无需逐项增删。发现别名、命名或边界问题时，请写在属性批注中。</span>
      ${attribute.entityPolicy ? `<code>${escapeHtml(attribute.entityPolicy)}</code>` : ""}
      ${(attribute.observedPreview || []).length ? `<div class="entity-preview">${attribute.observedPreview.map((entry) => `<span>${escapeHtml(entry.value)} <small>${Number(entry.usageCount).toLocaleString("en-US")}</small></span>`).join("")}</div>` : ""}
    </div>` : "";
    return `<article class="attribute-card ${hasActivity ? "has-change" : ""}" data-scope-id="${escapeHtml(scope.id)}" data-attribute-key="${escapeHtml(attribute.key)}">
      <header class="attribute-head">
        <div>
          <h2>${escapeHtml(attribute.zh)} <code>${escapeHtml(attribute.key)}</code></h2>
          <p class="attribute-definition">${escapeHtml(attribute.definition)}</p>
          <p class="value-level">${escapeHtml(attribute.valueLevel)}</p>
        </div>
        <div class="attribute-meta">
          ${contextBadge}
          ${domainBadge}
          <span class="badge">${escapeHtml(attribute.cardinality)}</span>
          <span class="badge">${isOpenEntity ? `${Number(attribute.observedCount || 0).toLocaleString("en-US")} 个观察值` : `${attribute.values.length} 个值`}</span>
          ${localChangeCount ? `<span class="badge changed">${localChangeCount} 项改动</span>` : ""}
          ${isOpenEntity ? "" : '<button class="icon-button" type="button" data-action="reset-attribute" title="恢复此属性的原始值域" aria-label="恢复此属性的原始值域">↶</button>'}
        </div>
      </header>
      <label class="attribute-note">
        <span>属性批注</span>
        <textarea data-attribute-note rows="2" maxlength="2400" placeholder="可只记录问题，无需直接修改值域">${escapeHtml(note)}</textarea>
      </label>
      ${openEntitySummary}
      ${isOpenEntity ? "" : `<div class="values">
        <div class="value-columns"><span>#</span><span>取值</span><span>池内使用次数</span><span>批注 / 删除</span></div>
        <div class="value-list">
          ${values.length ? values.map((value) => valueRow(scope, attribute, value, attribute.values.indexOf(value))).join("") : '<div class="empty-values">没有匹配的取值；仍可在下方新增。</div>'}
        </div>
        <div class="add-value-row">
          <input class="new-value-input" data-new-value-input maxlength="300" placeholder="输入新的规范取值">
          <button class="text-button" type="button" data-action="add-value">+ 添加取值</button>
        </div>
      </div>`}
    </article>`;
  }

  function renderHeading() {
    const scope = scopeById(activeScopeId) || workingScopes[0];
    const valueCount = scope.attributes.reduce((sum, attribute) => sum + attribute.values.length, 0);
    elements.scopeEyebrow.textContent = scope.id === "global" ? "GLOBAL ATTRIBUTES" : `${scope.category} / ${scope.subtype}`;
    elements.scopeTitle.textContent = scope.id === "global" ? (data.globalScopeLabel || "全局属性") : `${titleCase(scope.subtype)} 值域`;
    elements.scopeMeta.textContent = `${data.categoryLabels[scope.category]} · ${scope.attributes.length} 个属性 · ${valueCount.toLocaleString("en-US")} 个当前取值`;
    elements.resetScopeButton.disabled = Boolean(query);
  }

  function renderWorkspace() {
    const records = visibleAttributes();
    elements.attributeList.innerHTML = records.map(attributeCard).join("");
    elements.emptyState.hidden = records.length !== 0;
    elements.resultSummary.textContent = query
      ? `全局搜索找到 ${records.length} 个属性。`
      : `当前显示 ${records.length} 个属性。`;
  }

  function render() {
    renderNav();
    renderHeading();
    renderWorkspace();
    renderSummary();
  }

  function validateAttributeValues(scope, attribute) {
    const normalized = attribute.values.map((value) => value.value.trim().toLocaleLowerCase());
    if (normalized.some((value) => !value)) throw new Error(`${scope.id}.${attribute.key} 存在空白取值`);
    if (new Set(normalized).size !== normalized.length) throw new Error(`${scope.id}.${attribute.key} 存在重复取值`);
  }

  function validateWorkingDocument() {
    for (const scope of workingScopes) {
      for (const attribute of scope.attributes) validateAttributeValues(scope, attribute);
    }
  }

  function reconstructDocument() {
    const result = clone(data.sourceDocument);
    if (data.documentShape === "movie_attribute_array") {
      for (const scope of workingScopes) {
        for (const attribute of scope.attributes) {
          if (attribute.domainKind === "open_entity") continue;
          const target = result.attributes.find((candidate) => {
            const candidateScope = candidate.scope === "global" ? "global" : candidate.subtype;
            return candidateScope === scope.id && candidate.key === attribute.key;
          });
          if (!target) throw new Error(`找不到源属性 ${scope.id}.${attribute.key}`);
          target.values = attribute.values.map((value) => {
            const entry = clone(value.sourceEntry || {});
            entry.value = value.value.trim();
            if (!entry.zh) entry.zh = value.zh || value.value.trim();
            return entry;
          });
        }
      }
      return result;
    }
    for (const scope of workingScopes) {
      const target = scope.id === "global"
        ? result.global_attributes
        : result.subtypes[scope.id].attributes;
      for (const attribute of scope.attributes) {
        target[attribute.key].values = attribute.values.map((value) => ({
          value: value.value.trim(),
          usage_count: value.usageCount,
        }));
      }
    }
    return result;
  }

  function exportedAnnotations() {
    const current = currentValueIndex();
    const attributeNotes = [];
    const valueNotes = [];
    for (const [id, note] of Object.entries(annotations.attributes)) {
      if (!note.trim()) continue;
      const separator = id.lastIndexOf(":");
      attributeNotes.push({
        scope_id: id.slice(0, separator),
        attribute: id.slice(separator + 1),
        note: note.trim(),
      });
    }
    for (const [id, note] of Object.entries(annotations.values)) {
      if (!note.trim()) continue;
      const before = baselineValueIndex.get(id);
      const after = current.get(id);
      const record = after || before;
      valueNotes.push({
        value_id: id,
        scope_id: record?.scopeId || null,
        attribute: record?.attributeKey || null,
        original_value: before?.value.value ?? null,
        current_value: after?.value.value.trim() ?? null,
        note: note.trim(),
      });
    }
    return { attribute_notes: attributeNotes, value_notes: valueNotes };
  }

  function downloadJson(payload, filename) {
    const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function timestamp() {
    const now = new Date();
    const date = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("");
    const time = [String(now.getHours()).padStart(2, "0"), String(now.getMinutes()).padStart(2, "0")].join("");
    return `${date}-${time}`;
  }

  function exportAudit() {
    if (!reviewer) return showSignatureDialog();
    try {
      validateWorkingDocument();
      persistNow();
      const changes = calculateChanges();
      const exportedNotes = exportedAnnotations();
      const result = {
        audit_schema: data.resultSchema || `lip-rec-${domainKey}-value-domain-audit-result-v1`,
        source_path: data.sourcePath,
        source_schema_version: data.sourceSchemaVersion,
        source_attribute_schema_version: data.sourceAttributeSchemaVersion,
        source_sha256: data.sourceSha256,
        source_manifest_path: data.manifestPath,
        source_manifest_sha256: data.manifestSha256,
        source_observed_values_path: data.observedSourcePath,
        source_observed_values_sha256: data.observedSourceSha256,
        reviewer,
        started_at: startedAt,
        exported_at: new Date().toISOString(),
        summary: {
          source_attribute_scopes: data.attributeCount,
          source_values: data.valueCount,
          source_pool_items: data.sourcePoolItemCount,
          added_values: changes.added.length,
          modified_values: changes.modified.length,
          deleted_values: changes.deleted.length,
          attribute_notes: exportedNotes.attribute_notes.length,
          value_notes: exportedNotes.value_notes.length,
        },
        changes,
        annotations: exportedNotes,
        result_value_domains: reconstructDocument(),
      };
      const filename = `${data.resultFilenamePrefix || `lip-rec-${domainKey}-value-domain-audit`}-${slugify(reviewer)}-${timestamp()}.json`;
      downloadJson(result, filename);
      showToast(`已导出 ${filename}`);
    } catch (error) {
      showToast(`无法导出：${error.message}`, true);
    }
  }

  function showToast(message, isError = false) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.toggle("error", isError);
    elements.toast.classList.add("visible");
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 3200);
  }

  function showSignatureDialog() {
    elements.signatureInput.value = reviewer;
    elements.signatureError.textContent = "";
    if (!elements.signatureDialog.open) elements.signatureDialog.showModal();
    window.setTimeout(() => elements.signatureInput.focus(), 30);
  }

  function setReviewer(name) {
    reviewer = name.trim().replace(/\s+/g, " ");
    const resumed = loadReviewerState(reviewer);
    elements.reviewerName.textContent = reviewer;
    elements.app.hidden = false;
    elements.signatureDialog.close();
    persistNow();
    render();
    showToast(resumed ? `已载入 ${reviewer} 的本地进度。` : `已为 ${reviewer} 开始新的审核。`);
  }

  function createValueId(scopeId, attributeKey) {
    const suffix = globalThis.crypto?.randomUUID
      ? globalThis.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `${scopeId}:${attributeKey}:custom-${suffix}`;
  }

  function cardContext(target) {
    const card = target.closest("[data-scope-id][data-attribute-key]");
    if (!card) return null;
    const scope = scopeById(card.dataset.scopeId);
    const attribute = attributeById(card.dataset.scopeId, card.dataset.attributeKey);
    return scope && attribute ? { card, scope, attribute } : null;
  }

  function addValue(card, scope, attribute) {
    const input = card.querySelector("[data-new-value-input]");
    const candidate = input.value.trim();
    input.classList.remove("invalid");
    if (!candidate) {
      input.classList.add("invalid");
      input.focus();
      return;
    }
    if (attribute.values.some((value) => value.value.trim().toLocaleLowerCase() === candidate.toLocaleLowerCase())) {
      input.classList.add("invalid");
      showToast("该属性中已经存在同名取值。", true);
      return;
    }
    attribute.values.push({ id: createValueId(scope.id, attribute.key), value: candidate, usageCount: 0 });
    schedulePersist();
    render();
    document.querySelector(`[data-scope-id="${CSS.escape(scope.id)}"][data-attribute-key="${CSS.escape(attribute.key)}"] .new-value-input`)?.focus();
  }

  function resetAttribute(scopeId, attributeKey) {
    const source = attributeById(scopeId, attributeKey, baselineScopes);
    const target = attributeById(scopeId, attributeKey);
    if (!source || !target) return;
    target.values = clone(source.values);
    schedulePersist();
    render();
    showToast(`已恢复 ${scopeId}.${attributeKey} 的原始值域；批注仍保留。`);
  }

  elements.signatureForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = elements.signatureInput.value.trim();
    if (!name) {
      elements.signatureError.textContent = "请填写审核人姓名。";
      elements.signatureInput.focus();
      return;
    }
    setReviewer(name);
  });

  elements.signatureDialog.addEventListener("cancel", (event) => {
    if (!reviewer) event.preventDefault();
  });
  elements.reviewerButton.addEventListener("click", showSignatureDialog);
  elements.exportButton.addEventListener("click", exportAudit);

  elements.scopeNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-scope-id]");
    if (!button) return;
    activeScopeId = button.dataset.scopeId;
    query = "";
    elements.searchInput.value = "";
    persistNow();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  let searchTimer = null;
  elements.searchInput.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      query = elements.searchInput.value.trim().toLocaleLowerCase();
      renderHeading();
      renderWorkspace();
    }, 120);
  });
  elements.changedOnlyInput.addEventListener("change", renderWorkspace);
  elements.clearFiltersButton.addEventListener("click", () => {
    query = "";
    elements.searchInput.value = "";
    elements.changedOnlyInput.checked = false;
    renderHeading();
    renderWorkspace();
  });

  elements.resetScopeButton.addEventListener("click", () => {
    const scope = scopeById(activeScopeId);
    const baseline = scopeById(activeScopeId, baselineScopes);
    if (!scope || !baseline) return;
    if (!window.confirm(`恢复 ${scope.id} 的全部原始取值？当前值域编辑会被覆盖，批注仍保留。`)) return;
    scope.attributes.forEach((attribute) => {
      const original = baseline.attributes.find((candidate) => candidate.key === attribute.key);
      attribute.values = clone(original.values);
    });
    schedulePersist();
    render();
    showToast(`已恢复 ${scope.id} 的原始值域；批注仍保留。`);
  });

  elements.attributeList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const context = cardContext(button);
    if (!context) return;
    const { card, scope, attribute } = context;
    const row = button.closest("[data-value-id]");

    if (button.dataset.action === "add-value") return addValue(card, scope, attribute);
    if (button.dataset.action === "reset-attribute") return resetAttribute(scope.id, attribute.key);
    if (!row) return;
    const valueId = row.dataset.valueId;
    if (button.dataset.action === "toggle-value-note") {
      const note = row.querySelector(".value-note");
      note.classList.toggle("visible");
      if (note.classList.contains("visible")) note.querySelector("textarea")?.focus();
      return;
    }
    if (button.dataset.action === "delete-value") {
      attribute.values = attribute.values.filter((value) => value.id !== valueId);
      schedulePersist();
      render();
    }
  });

  elements.attributeList.addEventListener("input", (event) => {
    const context = cardContext(event.target);
    if (!context) return;
    const { scope, attribute } = context;
    if (event.target.matches("[data-attribute-note]")) {
      annotations.attributes[attributeId(scope.id, attribute.key)] = event.target.value;
      schedulePersist();
      return;
    }
    const row = event.target.closest("[data-value-id]");
    const value = row && attribute.values.find((candidate) => candidate.id === row.dataset.valueId);
    if (!value) return;
    if (event.target.matches("[data-value-input]")) {
      value.value = event.target.value;
      event.target.classList.toggle("invalid", !event.target.value.trim());
      schedulePersist();
    } else if (event.target.matches("[data-value-note]")) {
      annotations.values[value.id] = event.target.value;
      row.querySelector("[data-action='toggle-value-note']")?.classList.toggle("has-note", Boolean(event.target.value.trim()));
      schedulePersist();
    }
  });

  elements.attributeList.addEventListener("change", (event) => {
    if (!event.target.matches("[data-value-input]")) return;
    const context = cardContext(event.target);
    if (!context) return;
    try {
      validateAttributeValues(context.scope, context.attribute);
      render();
    } catch (error) {
      event.target.classList.add("invalid");
      showToast(error.message, true);
    }
  });

  elements.attributeList.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || !event.target.matches("[data-new-value-input]")) return;
    event.preventDefault();
    const context = cardContext(event.target);
    if (context) addValue(context.card, context.scope, context.attribute);
  });

  elements.versionLabel.textContent = data.sourceSchemaVersion;
  elements.sourceSummary.textContent = data.sourceSummary || `${data.sourcePoolItemCount.toLocaleString("en-US")} 条${data.itemLabel || "商品"} · ${data.attributeCount} 个属性作用域 · ${data.valueCount.toLocaleString("en-US")} 个值 · SHA-256 ${data.sourceSha256.slice(0, 12)}`;
  elements.scopeCount.textContent = `${data.scopes.length} 个作用域`;
  showSignatureDialog();
})();
