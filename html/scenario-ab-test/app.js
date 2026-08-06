(function () {
  "use strict";

  const data = window.SCENARIO_AB_DATA;
  if (!data || !Array.isArray(data.questions)) {
    throw new Error("Scenario AB test data is missing or invalid.");
  }

  const storageKey = `scenario-ab-test:${data.datasetId}`;
  const categoryLabels = {
    tops: "上装",
    bottom: "下装",
    shoes: "鞋履",
    bags: "包袋",
    jewelry: "首饰",
    glasses: "眼镜",
    shared: "跨类目",
  };
  const attributeLabels = {
    capacity: { zh: "容量", en: "Capacity" },
    closure_type: { zh: "闭合方式", en: "Closure Type" },
    color: { zh: "颜色", en: "Color" },
    fabric_type: { zh: "面料类型", en: "Fabric Type" },
    fit_type: { zh: "版型", en: "Fit Type" },
    frame_color: { zh: "镜框颜色", en: "Frame Color" },
    frame_material: { zh: "镜框材质", en: "Frame Material" },
    frame_pattern: { zh: "镜框图案", en: "Frame Pattern" },
    frame_rim_type: { zh: "镜框边型", en: "Frame Rim Type" },
    frame_shape: { zh: "镜框形状", en: "Frame Shape" },
    frame_size: { zh: "镜框尺寸", en: "Frame Size" },
    has_hood: { zh: "是否带帽", en: "Has Hood" },
    has_pockets: { zh: "是否有口袋", en: "Has Pockets" },
    height_increasing: { zh: "增高功能", en: "Height Increasing" },
    lens_color: { zh: "镜片颜色", en: "Lens Color" },
    lens_feature: { zh: "镜片功能", en: "Lens Feature" },
    lens_material: { zh: "镜片材质", en: "Lens Material" },
    material: { zh: "材质", en: "Material" },
    motif: { zh: "主题纹样", en: "Motif" },
    neck_style: { zh: "领型", en: "Neck Style" },
    occasion: { zh: "适用场合", en: "Occasion" },
    pattern: { zh: "图案", en: "Pattern" },
    price: { zh: "价格", en: "Price" },
    rise: { zh: "腰高", en: "Rise" },
    season: { zh: "适用季节", en: "Season" },
    sleeve_length: { zh: "袖长", en: "Sleeve Length" },
    sleeve_style: { zh: "袖型", en: "Sleeve Style" },
    sport: { zh: "运动类型", en: "Sport" },
    stretch_level: { zh: "弹性等级", en: "Stretch Level" },
    style: { zh: "风格", en: "Style" },
    uv_protection: { zh: "紫外线防护", en: "UV Protection" },
    water_resistance: { zh: "防水性能", en: "Water Resistance" },
    weight_class: { zh: "重量等级", en: "Weight Class" },
  };
  const questionMap = new Map(data.questions.map((question) => [question.id, question]));
  const elements = {
    comparisonList: document.querySelector("#comparisonList"),
    progressText: document.querySelector("#progressText"),
    progressBar: document.querySelector("#progressBar"),
    finishButton: document.querySelector("#finishButton"),
    results: document.querySelector("#results"),
    resultTitle: document.querySelector("#resultTitle"),
    resultSummary: document.querySelector("#resultSummary"),
    resultACount: document.querySelector("#resultACount"),
    resultBCount: document.querySelector("#resultBCount"),
    resultAPercentage: document.querySelector("#resultAPercentage"),
    resultBPercentage: document.querySelector("#resultBPercentage"),
    resultABar: document.querySelector("#resultABar"),
    resultBBar: document.querySelector("#resultBBar"),
    continueButton: document.querySelector("#continueButton"),
    exportButton: document.querySelector("#exportButton"),
    restartButton: document.querySelector("#restartButton"),
  };

  function randomInteger(maximum) {
    if (maximum <= 0) {
      return 0;
    }

    const limit = Math.floor(0x100000000 / maximum) * maximum;
    const value = new Uint32Array(1);
    do {
      crypto.getRandomValues(value);
    } while (value[0] >= limit);
    return value[0] % maximum;
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = randomInteger(index + 1);
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function sampleIds(pool, count) {
    return shuffle(pool)
      .slice(0, count)
      .map((scenario) => scenario.id);
  }

  function createSession() {
    const comparisons = shuffle(
      data.questions.flatMap((question) => {
        const aScenarioIds = sampleIds(question.pools.A, question.sampleSize);
        const bScenarioIds = sampleIds(question.pools.B, question.sampleSize);
        return aScenarioIds.map((aScenarioId, index) => ({
          comparisonId: `${question.id}#${index + 1}`,
          questionId: question.id,
          sampleIndex: index + 1,
          sampleCount: question.sampleSize,
          aScenarioId,
          bScenarioId: bScenarioIds[index],
          leftGroup: randomInteger(2) === 0 ? "A" : "B",
          vote: null,
        }));
      }),
    );

    return {
      schemaVersion: "2.0",
      datasetId: data.datasetId,
      sessionId: crypto.randomUUID(),
      startedAt: new Date().toISOString(),
      completedAt: null,
      comparisons,
    };
  }

  function isValidSession(candidate) {
    const expectedCount = data.questions.reduce(
      (total, question) => total + question.sampleSize,
      0,
    );
    if (
      !candidate ||
      candidate.schemaVersion !== "2.0" ||
      candidate.datasetId !== data.datasetId ||
      !Array.isArray(candidate.comparisons) ||
      candidate.comparisons.length !== expectedCount
    ) {
      return false;
    }

    const comparisonIds = new Set();
    const entriesByQuestion = new Map();
    for (const entry of candidate.comparisons) {
      const question = questionMap.get(entry.questionId);
      if (
        !question ||
        comparisonIds.has(entry.comparisonId) ||
        !["A", "B"].includes(entry.leftGroup) ||
        ![null, "left", "right"].includes(entry.vote)
      ) {
        return false;
      }
      comparisonIds.add(entry.comparisonId);

      const aIds = new Set(question.pools.A.map((scenario) => scenario.id));
      const bIds = new Set(question.pools.B.map((scenario) => scenario.id));
      if (
        !aIds.has(entry.aScenarioId) ||
        !bIds.has(entry.bScenarioId) ||
        entry.sampleCount !== question.sampleSize ||
        !Number.isInteger(entry.sampleIndex) ||
        entry.sampleIndex < 1 ||
        entry.sampleIndex > question.sampleSize
      ) {
        return false;
      }

      const entries = entriesByQuestion.get(entry.questionId) || [];
      entries.push(entry);
      entriesByQuestion.set(entry.questionId, entries);
    }

    return data.questions.every((question) => {
      const entries = entriesByQuestion.get(question.id) || [];
      return (
        entries.length === question.sampleSize &&
        new Set(entries.map((entry) => entry.sampleIndex)).size === question.sampleSize &&
        new Set(entries.map((entry) => entry.aScenarioId)).size === question.sampleSize &&
        new Set(entries.map((entry) => entry.bScenarioId)).size === question.sampleSize
      );
    });
  }

  function loadSession() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (isValidSession(saved)) {
        return saved;
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
    return createSession();
  }

  let session = loadSession();

  function saveSession() {
    localStorage.setItem(storageKey, JSON.stringify(session));
  }

  function scenarioLookup(question, group) {
    return new Map(question.pools[group].map((scenario) => [scenario.id, scenario]));
  }

  function selectedId(entry, group) {
    return group === "A" ? entry.aScenarioId : entry.bScenarioId;
  }

  function createOption(entry, question, side, positionLabel) {
    const group = side === "left" ? entry.leftGroup : entry.leftGroup === "A" ? "B" : "A";
    const lookup = scenarioLookup(question, group);
    const scenario = lookup.get(selectedId(entry, group));
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-card${entry.vote === side ? " selected" : ""}`;
    button.dataset.side = side;
    button.dataset.comparisonId = entry.comparisonId;
    button.setAttribute("aria-pressed", entry.vote === side ? "true" : "false");

    const header = document.createElement("span");
    header.className = "option-header";
    const title = document.createElement("span");
    title.className = "option-title";
    title.textContent = positionLabel;
    const state = document.createElement("span");
    state.className = "selection-state";
    state.textContent = entry.vote === side ? "已选择" : "选择此方案";
    header.append(title, state);

    const stack = document.createElement("span");
    stack.className = "scenario-stack";
    const item = document.createElement("span");
    item.className = "scenario-item";
    const text = document.createElement("span");
    text.className = "scenario-text";
    text.textContent = scenario.text;
    item.append(text);
    stack.append(item);

    button.append(header, stack);
    return button;
  }

  function renderComparisons() {
    const fragment = document.createDocumentFragment();
    session.comparisons.forEach((entry, index) => {
      const question = questionMap.get(entry.questionId);
      const row = document.createElement("section");
      row.className = "comparison-row";
      row.id = `question-${index + 1}`;

      const heading = document.createElement("div");
      heading.className = "comparison-heading";
      const title = document.createElement("h2");
      const number = document.createElement("span");
      number.className = "comparison-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const category = document.createElement("span");
      category.className = "category-name";
      category.textContent = categoryLabels[question.category] || question.category;
      const attributeLabel = attributeLabels[question.attribute] || {
        zh: question.attribute,
        en: question.attribute,
      };
      const attribute = document.createElement("mark");
      attribute.className = "attribute-highlight";
      const attributeZh = document.createElement("span");
      attributeZh.textContent = attributeLabel.zh;
      const attributeEn = document.createElement("span");
      attributeEn.className = "attribute-english";
      attributeEn.textContent = attributeLabel.en;
      attribute.append(attributeZh, attributeEn);
      const sampleLabel = entry.sampleCount > 1
        ? ` · 样本 ${entry.sampleIndex}/${entry.sampleCount}`
        : "";
      title.append(number, " · ", category, " · ", attribute, sampleLabel);
      const meta = document.createElement("p");
      meta.className = "comparison-meta";
      meta.textContent = question.binding === "product_bound" ? "绑定商品 · 单场景对比" : "不绑定商品 · 单场景对比";
      heading.append(title, meta);

      const grid = document.createElement("div");
      grid.className = "option-grid";
      grid.append(
        createOption(entry, question, "left", "方案 1"),
        createOption(entry, question, "right", "方案 2"),
      );
      row.append(heading, grid);
      fragment.append(row);
    });

    elements.comparisonList.replaceChildren(fragment);
    updateProgress();
  }

  function updateProgress() {
    const answered = session.comparisons.filter((entry) => entry.vote !== null).length;
    const total = session.comparisons.length;
    const percentage = total === 0 ? 0 : (answered / total) * 100;
    elements.progressText.textContent = `${answered} / ${total} 已完成`;
    elements.progressBar.style.width = `${percentage}%`;
    elements.finishButton.disabled = answered === 0;
  }

  function selectOption(button) {
    const entry = session.comparisons.find(
      (comparison) => comparison.comparisonId === button.dataset.comparisonId,
    );
    if (!entry) {
      return;
    }

    entry.vote = button.dataset.side;
    entry.completedAt = new Date().toISOString();
    saveSession();

    const row = button.closest(".comparison-row");
    row.querySelectorAll(".option-card").forEach((option) => {
      const selected = option.dataset.side === entry.vote;
      option.classList.toggle("selected", selected);
      option.setAttribute("aria-pressed", selected ? "true" : "false");
      option.querySelector(".selection-state").textContent = selected
        ? "已选择"
        : "选择此方案";
    });
    updateProgress();

    if (session.comparisons.every((comparison) => comparison.vote !== null)) {
      window.setTimeout(() => {
        if (session.comparisons.every((comparison) => comparison.vote !== null)) {
          showResults();
        }
      }, 180);
    }
  }

  function voteGroup(entry) {
    if (!entry.vote) {
      return null;
    }
    if (entry.vote === "left") {
      return entry.leftGroup;
    }
    return entry.leftGroup === "A" ? "B" : "A";
  }

  function calculateResults() {
    return session.comparisons.reduce(
      (result, entry) => {
        const group = voteGroup(entry);
        if (group) {
          result[group] += 1;
        }
        return result;
      },
      { A: 0, B: 0 },
    );
  }

  function showResults() {
    const votes = calculateResults();
    const total = votes.A + votes.B;
    if (total === 0) {
      return;
    }

    const isComplete = total === session.comparisons.length;
    if (isComplete) {
      session.completedAt = session.completedAt || new Date().toISOString();
    }
    saveSession();
    const percentageA = total === 0 ? 0 : (votes.A / total) * 100;
    const percentageB = total === 0 ? 0 : (votes.B / total) * 100;
    const winner = votes.A === votes.B ? null : votes.A > votes.B ? "A" : "B";

    elements.resultTitle.textContent = winner ? `${winner} 组获得更多选择` : "两组选择数持平";
    const resultScope = isComplete
      ? `${total} 个同属性比较中`
      : `当前已完成的 ${total} 个同属性比较中`;
    elements.resultSummary.textContent = winner
      ? `${resultScope}，${winner} 组被选择 ${votes[winner]} 次。`
      : `${resultScope}，两组获得了相同票数。`;
    elements.resultACount.textContent = `${votes.A} 次选择`;
    elements.resultBCount.textContent = `${votes.B} 次选择`;
    elements.resultAPercentage.textContent = `${percentageA.toFixed(1)}%`;
    elements.resultBPercentage.textContent = `${percentageB.toFixed(1)}%`;
    elements.resultABar.style.width = `${percentageA}%`;
    elements.resultBBar.style.width = `${percentageB}%`;
    elements.results.hidden = false;
    document.body.style.overflow = "hidden";
    elements.results.scrollTop = 0;
  }

  function hideResults() {
    elements.results.hidden = true;
    document.body.style.overflow = "";
  }

  function exportResults() {
    const comparisons = session.comparisons.map((entry) => {
      const question = questionMap.get(entry.questionId);
      return {
        comparisonId: entry.comparisonId,
        questionId: entry.questionId,
        binding: question.binding,
        category: question.category,
        attribute: question.attribute,
        sampleIndex: entry.sampleIndex,
        sampleCount: entry.sampleCount,
        leftGroup: entry.leftGroup,
        leftScenarioId: selectedId(entry, entry.leftGroup),
        rightGroup: entry.leftGroup === "A" ? "B" : "A",
        rightScenarioId: selectedId(entry, entry.leftGroup === "A" ? "B" : "A"),
        selectedSide: entry.vote,
        selectedGroup: voteGroup(entry),
        completedAt: entry.completedAt || null,
      };
    });
    const payload = {
      schemaVersion: "2.0",
      datasetId: data.datasetId,
      sessionId: session.sessionId,
      startedAt: session.startedAt,
      completedAt: session.completedAt,
      totals: calculateResults(),
      comparisons,
    };
    const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `scenario-ab-result-${session.sessionId}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function restart() {
    session = createSession();
    saveSession();
    elements.results.hidden = true;
    document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "auto" });
    renderComparisons();
  }

  elements.comparisonList.addEventListener("click", (event) => {
    const option = event.target.closest(".option-card");
    if (option) {
      selectOption(option);
    }
  });
  elements.finishButton.addEventListener("click", showResults);
  elements.continueButton.addEventListener("click", hideResults);
  elements.exportButton.addEventListener("click", exportResults);
  elements.restartButton.addEventListener("click", restart);

  saveSession();
  renderComparisons();
})();
