(() => {
  "use strict";

  const data = window.SCENARIO_AUDIT_DATA;
  if (!data || !Array.isArray(data.records)) {
    document.body.innerHTML = "<p style='padding:24px'>Scenario audit data failed to load.</p>";
    return;
  }

  const elements = {
    auditApp: document.getElementById("auditApp"),
    auditContent: document.getElementById("auditContent"),
    auditHeaderActions: document.getElementById("auditHeaderActions"),
    categoryNav: document.getElementById("categoryNav"),
    clearFiltersButton: document.getElementById("clearFiltersButton"),
    discardedCount: document.getElementById("discardedCount"),
    discardedOnlyInput: document.getElementById("discardedOnlyInput"),
    exportButton: document.getElementById("exportButton"),
    guideAcknowledgement: document.getElementById("guideAcknowledgement"),
    guideButton: document.getElementById("guideButton"),
    guidePage: document.getElementById("guidePage"),
    guideStatus: document.getElementById("guideStatus"),
    nameDialog: document.getElementById("nameDialog"),
    nameError: document.getElementById("nameError"),
    nameForm: document.getElementById("nameForm"),
    nameInput: document.getElementById("nameInput"),
    nonProductCount: document.getElementById("nonProductCount"),
    nonProductTab: document.getElementById("nonProductTab"),
    productBoundCount: document.getElementById("productBoundCount"),
    productBoundTab: document.getElementById("productBoundTab"),
    reviewerButton: document.getElementById("reviewerButton"),
    reviewerName: document.getElementById("reviewerName"),
    searchInput: document.getElementById("searchInput"),
    startAuditButton: document.getElementById("startAuditButton"),
    toast: document.getElementById("toast"),
    viewDescription: document.getElementById("viewDescription"),
    viewEyebrow: document.getElementById("viewEyebrow"),
    viewTitle: document.getElementById("viewTitle"),
    visibleCount: document.getElementById("visibleCount"),
  };

  const recordById = new Map(data.records.map((record) => [record.id, record]));
  const productRecords = data.records.filter((record) => record.binding === "product_bound");
  const nonProductRecords = data.records.filter((record) => record.binding === "non_product");
  const previewValueLimit = 12;

  let activeView = "product_bound";
  let reviewer = "";
  let auditState = emptyState();
  let toastTimer = null;

  function emptyState() {
    const quality = {};
    for (const category of data.categoryOrder) {
      quality[qualityKey("product_bound", category)] = {
        satisfaction: null,
        reason: "",
      };
    }
    quality[qualityKey("non_product", "shared")] = {
      satisfaction: null,
      reason: "",
    };
    return {
      discarded: new Set(),
      quality,
      updatedAt: null,
    };
  }

  function qualityKey(binding, category) {
    return `${binding}:${category}`;
  }

  function storageKey(name) {
    return `personamir-scenario-human-audit:${data.sourceVersion}:${slugify(name)}`;
  }

  function slugify(value) {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "reviewer";
  }

  function loadState(name) {
    const nextState = emptyState();
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey(name)) || "null");
      if (!stored) return nextState;
      nextState.discarded = new Set(
        Array.isArray(stored.discarded)
          ? stored.discarded.filter((id) => recordById.has(id))
          : []
      );
      for (const key of Object.keys(nextState.quality)) {
        const saved = stored.quality?.[key];
        if (!saved) continue;
        nextState.quality[key] = {
          satisfaction: saved.satisfaction === true
            ? true
            : saved.satisfaction === false
              ? false
              : null,
          reason: typeof saved.reason === "string" ? saved.reason : "",
        };
      }
      nextState.updatedAt = stored.updatedAt || null;
    } catch (error) {
      showToast("本地进度读取失败，已开启新的审计记录。", true);
    }
    return nextState;
  }

  function saveState() {
    if (!reviewer) return;
    auditState.updatedAt = new Date().toISOString();
    const serializable = {
      discarded: [...auditState.discarded],
      quality: auditState.quality,
      updatedAt: auditState.updatedAt,
    };
    try {
      localStorage.setItem(storageKey(reviewer), JSON.stringify(serializable));
    } catch (error) {
      showToast("浏览器无法保存本地进度，请及时导出 JSON。", true);
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatScenario(value) {
    return escapeHtml(value)
      .replace(/\[X\]/g, '<span class="placeholder-x">[X]</span>')
      .replace(/\[Y\]/g, '<span class="placeholder-y">[Y]</span>');
  }

  function formatAttribute(attribute) {
    return attribute.replace(/_/g, " ");
  }

  function displayCategory(category) {
    return data.categoryLabels[category] || category;
  }

  function showGuide() {
    if (elements.nameDialog.open) elements.nameDialog.close();
    elements.guidePage.hidden = false;
    elements.auditApp.hidden = true;
    elements.guideStatus.hidden = false;
    elements.auditHeaderActions.hidden = true;
    document.title = "PersonaMIR Scenario Human Audit Guide";
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function enterAudit() {
    if (!elements.guideAcknowledgement.checked) return;
    elements.guidePage.hidden = true;
    elements.auditApp.hidden = false;
    elements.guideStatus.hidden = true;
    elements.auditHeaderActions.hidden = false;
    document.title = "PersonaMIR Scenario Human Audit";
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
    if (!reviewer) window.setTimeout(showNameDialog, 0);
  }

  function recordsForActiveView() {
    return activeView === "product_bound" ? productRecords : nonProductRecords;
  }

  function filteredRecords() {
    const query = elements.searchInput.value.trim().toLowerCase();
    const discardedOnly = elements.discardedOnlyInput.checked;
    return recordsForActiveView().filter((record) => {
      if (discardedOnly && !auditState.discarded.has(record.id)) return false;
      if (!query) return true;
      return record.attribute.toLowerCase().includes(query)
        || record.scenario.toLowerCase().includes(query)
        || record.values.some((value) => value.toLowerCase().includes(query));
    });
  }

  function groupBy(records, keySelector) {
    const grouped = new Map();
    for (const record of records) {
      const key = keySelector(record);
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(record);
    }
    return grouped;
  }

  function render() {
    updateViewHeader();
    renderCategoryNav();

    const records = filteredRecords();
    elements.visibleCount.textContent = records.length.toLocaleString("en-US");

    if (!records.length) {
      elements.auditContent.innerHTML = `
        <div class="empty-state">
          当前筛选条件下没有 Scenario。可清除搜索或关闭“只看已标记丢弃”。
        </div>`;
      return;
    }

    if (activeView === "product_bound") {
      const byCategory = groupBy(records, (record) => record.category);
      elements.auditContent.innerHTML = data.categoryOrder
        .filter((category) => byCategory.has(category))
        .map((category) => renderCategorySection(category, byCategory.get(category)))
        .join("");
    } else {
      elements.auditContent.innerHTML = renderCategorySection("shared", records);
    }
  }

  function updateViewHeader() {
    const productActive = activeView === "product_bound";
    elements.productBoundTab.classList.toggle("is-active", productActive);
    elements.nonProductTab.classList.toggle("is-active", !productActive);
    elements.productBoundTab.setAttribute("aria-selected", String(productActive));
    elements.nonProductTab.setAttribute("aria-selected", String(!productActive));
    elements.productBoundCount.textContent = productRecords.length.toLocaleString("en-US");
    elements.nonProductCount.textContent = nonProductRecords.length.toLocaleString("en-US");
    elements.discardedCount.textContent = auditState.discarded.size.toLocaleString("en-US");

    if (productActive) {
      elements.viewEyebrow.textContent = "Product-bound";
      elements.viewTitle.textContent = "绑定商品 Scenario";
      elements.viewDescription.textContent = "按六个大类和属性从上到下审阅。只标记应当丢弃的场景。";
    } else {
      elements.viewEyebrow.textContent = "Non-product";
      elements.viewTitle.textContent = "不绑定商品 Scenario";
      elements.viewDescription.textContent = "所有不绑定商品的场景集中展示。只标记应当丢弃的场景。";
    }
  }

  function renderCategoryNav() {
    const categories = activeView === "product_bound" ? data.categoryOrder : ["shared"];
    elements.categoryNav.innerHTML = categories.map((category) => {
      const discarded = data.records.filter((record) => {
        return record.category === category && auditState.discarded.has(record.id);
      }).length;
      return `
        <a class="category-link" href="#category-${escapeHtml(category)}">
          <span>${escapeHtml(displayCategory(category))}</span>
          <span>${discarded ? `丢弃 ${discarded}` : ""}</span>
        </a>`;
    }).join("");
  }

  function renderCategorySection(category, records) {
    const byAttribute = groupBy(records, (record) => record.attribute);
    const totalForCategory = data.records.filter((record) => record.category === category).length;
    const discardedForCategory = data.records.filter((record) => {
      return record.category === category && auditState.discarded.has(record.id);
    }).length;
    const binding = category === "shared" ? "non_product" : "product_bound";

    return `
      <section class="category-section" id="category-${escapeHtml(category)}">
        <div class="category-heading">
          <div>
            <h2>${escapeHtml(displayCategory(category))}</h2>
            <p>${category === "shared" ? "不绑定具体商品大类" : "绑定该商品大类"}</p>
          </div>
          <div class="category-stats">
            当前显示 ${records.length} / ${totalForCategory}<br>
            <strong data-category-discard-count="${escapeHtml(category)}">已丢弃 ${discardedForCategory}</strong>
          </div>
        </div>
        ${[...byAttribute.entries()].map(([attribute, attributeRecords]) => {
          return renderAttributeSection(attribute, attributeRecords);
        }).join("")}
        ${renderQualityPanel(binding, category)}
      </section>`;
  }

  function renderAttributeSection(attribute, records) {
    return `
      <section class="attribute-section">
        <div class="attribute-heading">
          <h3>${escapeHtml(formatAttribute(attribute))}</h3>
          <span>${records.length} scenarios</span>
        </div>
        <div class="scenario-list">
          ${records.map(renderScenarioRow).join("")}
        </div>
      </section>`;
  }

  function renderScenarioRow(record) {
    const discarded = auditState.discarded.has(record.id);
    const bindingText = record.binding === "product_bound" ? "绑定商品" : "不绑定商品";
    const categoryMeta = record.binding === "product_bound"
      ? `<span class="category-label">${escapeHtml(displayCategory(record.category))}</span>`
      : "";
    return `
      <article class="scenario-row${discarded ? " is-discarded" : ""}" data-scenario-id="${escapeHtml(record.id)}">
        <div>
          <div class="scenario-meta">
            <span class="binding-label">${bindingText}</span>
            ${categoryMeta}
            <span>属性：${escapeHtml(formatAttribute(record.attribute))}</span>
          </div>
          <p class="scenario-text">${formatScenario(record.scenario)}</p>
          <div class="values-wrap" data-values-for="${escapeHtml(record.id)}">
            ${renderValues(record, false)}
          </div>
        </div>
        <div class="scenario-action">
          <button class="discard-button${discarded ? " is-active" : ""}" type="button" data-action="toggle-discard" data-id="${escapeHtml(record.id)}" aria-pressed="${discarded}">
            ${discarded ? "已标记丢弃" : "标记丢弃"}
          </button>
        </div>
      </article>`;
  }

  function renderValues(record, expanded) {
    const shown = expanded ? record.values : record.values.slice(0, previewValueLimit);
    const remaining = record.values.length - shown.length;
    return `
      <div class="coverage-label">覆盖的属性值 · ${record.values.length.toLocaleString("en-US")}</div>
      <div class="value-list">
        ${shown.map((value) => `<span class="value-chip">${escapeHtml(value)}</span>`).join("")}
        ${remaining > 0 ? `
          <button class="expand-values-button" type="button" data-action="expand-values" data-id="${escapeHtml(record.id)}">
            展开其余 ${remaining.toLocaleString("en-US")}
          </button>` : expanded && record.values.length > previewValueLimit ? `
          <button class="expand-values-button" type="button" data-action="collapse-values" data-id="${escapeHtml(record.id)}">
            收起
          </button>` : ""}
      </div>`;
  }

  function renderQualityPanel(binding, category) {
    const key = qualityKey(binding, category);
    const quality = auditState.quality[key] || { satisfaction: null, reason: "" };
    const title = binding === "product_bound"
      ? `${displayCategory(category)} 整体质量是否满意？`
      : "不绑定商品 Scenario 的整体质量是否满意？";
    const name = `quality-${binding}-${category}`;
    return `
      <section class="quality-panel" data-quality-panel="${escapeHtml(key)}">
        <h3>${escapeHtml(title)}</h3>
        <p>这是大类层面的整体判断，不代替单条 Scenario 的丢弃标记。</p>
        <div class="quality-options">
          <label class="quality-option">
            <input type="radio" name="${escapeHtml(name)}" value="satisfied" data-quality-key="${escapeHtml(key)}" ${quality.satisfaction === true ? "checked" : ""}>
            <span>满意</span>
          </label>
          <label class="quality-option is-negative">
            <input type="radio" name="${escapeHtml(name)}" value="dissatisfied" data-quality-key="${escapeHtml(key)}" ${quality.satisfaction === false ? "checked" : ""}>
            <span>不满意</span>
          </label>
        </div>
        <label class="reason-field${quality.satisfaction === false ? " is-visible" : ""}">
          <span>不满意原因（必填）</span>
          <textarea class="quality-reason" data-quality-reason="${escapeHtml(key)}" placeholder="请简要说明该大类 Scenario 的主要质量问题">${escapeHtml(quality.reason)}</textarea>
        </label>
      </section>`;
  }

  function toggleDiscard(id, button) {
    if (!recordById.has(id)) return;
    if (auditState.discarded.has(id)) auditState.discarded.delete(id);
    else auditState.discarded.add(id);
    saveState();

    if (elements.discardedOnlyInput.checked) {
      render();
      return;
    }

    const discarded = auditState.discarded.has(id);
    const row = button.closest(".scenario-row");
    row?.classList.toggle("is-discarded", discarded);
    button.classList.toggle("is-active", discarded);
    button.setAttribute("aria-pressed", String(discarded));
    button.textContent = discarded ? "已标记丢弃" : "标记丢弃";
    updateViewHeader();
    renderCategoryNav();
    updateCategoryDiscardCounts();
  }

  function updateCategoryDiscardCounts() {
    document.querySelectorAll("[data-category-discard-count]").forEach((node) => {
      const category = node.dataset.categoryDiscardCount;
      const count = data.records.filter((record) => {
        return record.category === category && auditState.discarded.has(record.id);
      }).length;
      node.textContent = `已丢弃 ${count}`;
    });
  }

  function updateQuality(input) {
    const key = input.dataset.qualityKey;
    if (!auditState.quality[key]) return;
    auditState.quality[key].satisfaction = input.value === "satisfied";
    const panel = input.closest(".quality-panel");
    panel?.classList.remove("has-error");
    panel?.querySelector(".reason-field")?.classList.toggle(
      "is-visible",
      auditState.quality[key].satisfaction === false
    );
    saveState();
  }

  function updateReason(textarea) {
    const key = textarea.dataset.qualityReason;
    if (!auditState.quality[key]) return;
    auditState.quality[key].reason = textarea.value;
    textarea.closest(".quality-panel")?.classList.remove("has-error");
    saveState();
  }

  function validateReviewer(value) {
    const trimmed = value.trim().replace(/\s+/g, " ");
    if (!trimmed) return { valid: false, message: "请输入英文名。" };
    if (!/^[A-Za-z][A-Za-z .'-]*$/.test(trimmed)) {
      return { valid: false, message: "请只使用英文字母、空格、点、连字符或撇号。" };
    }
    return { valid: true, value: trimmed };
  }

  function setReviewer(name) {
    reviewer = name;
    auditState = loadState(name);
    elements.reviewerName.textContent = name;
    render();
    elements.nameDialog.close();
    showToast(auditState.updatedAt ? `已载入 ${name} 的本地进度。` : `已为 ${name} 开始新的审计。`);
  }

  function showNameDialog() {
    elements.nameInput.value = reviewer;
    elements.nameError.textContent = "";
    if (!elements.nameDialog.open) elements.nameDialog.showModal();
    window.setTimeout(() => elements.nameInput.focus(), 50);
  }

  function firstInvalidQuality() {
    return Object.entries(auditState.quality).find(([, quality]) => {
      return quality.satisfaction === false && !quality.reason.trim();
    });
  }

  function exportAudit() {
    if (!reviewer) {
      showNameDialog();
      return;
    }

    const invalid = firstInvalidQuality();
    if (invalid) {
      const [key] = invalid;
      activeView = key.startsWith("non_product") ? "non_product" : "product_bound";
      elements.searchInput.value = "";
      elements.discardedOnlyInput.checked = false;
      render();
      window.setTimeout(() => {
        const panel = document.querySelector(`[data-quality-panel="${CSS.escape(key)}"]`);
        panel?.classList.add("has-error");
        panel?.scrollIntoView({ behavior: "smooth", block: "center" });
        panel?.querySelector("textarea")?.focus({ preventScroll: true });
      }, 0);
      showToast("已选择“不满意”的大类必须填写原因。", true);
      return;
    }

    const discardedRecords = data.records
      .filter((record) => auditState.discarded.has(record.id))
      .map((record) => ({
        scenario_id: record.id,
        product_binding: record.binding,
        ...(record.binding === "product_bound" ? { category: record.category } : {}),
        attribute: record.attribute,
        covered_attribute_values: record.values,
        scenario: record.scenario,
      }));

    const categoryQuality = {};
    for (const category of data.categoryOrder) {
      const quality = auditState.quality[qualityKey("product_bound", category)];
      categoryQuality[category] = exportQuality(quality);
    }
    categoryQuality.non_product = exportQuality(
      auditState.quality[qualityKey("non_product", "shared")]
    );

    const result = {
      audit_schema: "scenario-human-audit-v1",
      source_version: data.sourceVersion,
      source_path: data.sourcePath,
      reviewer,
      exported_at: new Date().toISOString(),
      decision_model: {
        scenario_level: "discard_only",
        unmarked_scenario_meaning: "No discard issue was marked; this is not a positive quality judgment.",
        category_level: "satisfied_or_dissatisfied_with_required_reason_for_dissatisfied",
      },
      summary: {
        source_scenarios: data.totalRecords,
        discarded_scenarios: discardedRecords.length,
        product_bound_discarded: discardedRecords.filter((record) => record.product_binding === "product_bound").length,
        non_product_discarded: discardedRecords.filter((record) => record.product_binding === "non_product").length,
      },
      category_quality: categoryQuality,
      discarded_scenarios: discardedRecords,
    };

    const now = new Date();
    const date = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
    ].join("");
    const time = [
      String(now.getHours()).padStart(2, "0"),
      String(now.getMinutes()).padStart(2, "0"),
    ].join("");
    const filename = `scenario-pub-v2-human-audit-${slugify(reviewer)}-${date}-${time}.json`;
    const blob = new Blob([`${JSON.stringify(result, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    saveState();
    showToast(`已导出 ${filename}`);
  }

  function exportQuality(quality) {
    return {
      satisfied: quality.satisfaction,
      reason: quality.satisfaction === false ? quality.reason.trim() : "",
    };
  }

  function showToast(message, isError = false) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.toggle("is-error", isError);
    elements.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      elements.toast.classList.remove("is-visible");
    }, 3200);
  }

  elements.nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const validation = validateReviewer(elements.nameInput.value);
    if (!validation.valid) {
      elements.nameError.textContent = validation.message;
      elements.nameInput.focus();
      return;
    }
    setReviewer(validation.value);
  });

  elements.nameInput.addEventListener("input", () => {
    elements.nameError.textContent = "";
  });

  elements.nameDialog.addEventListener("cancel", (event) => {
    if (!reviewer) event.preventDefault();
  });

  elements.reviewerButton.addEventListener("click", showNameDialog);
  elements.exportButton.addEventListener("click", exportAudit);
  elements.guideButton.addEventListener("click", showGuide);
  elements.guideAcknowledgement.addEventListener("change", () => {
    elements.startAuditButton.disabled = !elements.guideAcknowledgement.checked;
  });
  elements.startAuditButton.addEventListener("click", enterAudit);

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      elements.searchInput.value = "";
      elements.discardedOnlyInput.checked = false;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  let searchTimer = null;
  elements.searchInput.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(render, 120);
  });
  elements.discardedOnlyInput.addEventListener("change", render);
  elements.clearFiltersButton.addEventListener("click", () => {
    elements.searchInput.value = "";
    elements.discardedOnlyInput.checked = false;
    render();
  });

  elements.auditContent.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const id = actionButton.dataset.id;
    if (actionButton.dataset.action === "toggle-discard") {
      toggleDiscard(id, actionButton);
      return;
    }
    const record = recordById.get(id);
    const wrapper = actionButton.closest(".values-wrap");
    if (!record || !wrapper) return;
    wrapper.innerHTML = renderValues(record, actionButton.dataset.action === "expand-values");
  });

  elements.auditContent.addEventListener("change", (event) => {
    if (event.target.matches("[data-quality-key]")) updateQuality(event.target);
  });

  elements.auditContent.addEventListener("input", (event) => {
    if (event.target.matches("[data-quality-reason]")) updateReason(event.target);
  });

  elements.productBoundCount.textContent = productRecords.length.toLocaleString("en-US");
  elements.nonProductCount.textContent = nonProductRecords.length.toLocaleString("en-US");
  render();
  showGuide();
})();
