const papers = [
  {
    conference: "CVPR",
    status: "Highlight",
    priority: "must",
    priorityLabel: "Must read",
    title: "A Frame is Worth One Token: Efficient Generative World Modeling with Delta Tokens",
    summary: "DeltaWorld compresses the VFM feature difference between adjacent frames into one continuous delta token, reducing a 512×512 video by 1,024×. With 35× fewer parameters and 2,000× fewer FLOPs, one forward pass can produce diverse futures.",
    match: "world model · efficient rollout · delta token",
    authors: "Tommie Kerssies, Gabriele Berton, Ju He, Qihang Yu, Wufei Ma, et al.",
    url: "https://cvpr.thecvf.com/virtual/2026/poster/38021"
  },
  {
    conference: "ICML",
    status: "Spotlight",
    priority: "must",
    priorityLabel: "Must read",
    title: "DreamDojo: A Real-Time Robot World Model from Large-Scale Human Videos",
    summary: "The model learns continuous latent actions from 44,000 hours of first-person human video, then post-trains on a small amount of robot data. After distillation it reaches 10.93 FPS, supporting real-time teleoperation, policy evaluation, and model-based planning.",
    match: "robot world model · latent action · real-time simulation",
    authors: "Shenyuan Gao, William Liang, Kaiyuan Zheng, Ayaan Malik, Seonghyeon Ye, et al.",
    url: "https://icml.cc/virtual/2026/poster/65193"
  },
  {
    conference: "ACL",
    status: "Poster",
    priority: "must",
    priorityLabel: "Must read",
    title: "From Word to World: Can Large Language Models be Implicit Text-based World Models?",
    summary: "This work recasts language modeling as next-state prediction in interaction and evaluates LLM world models through fidelity, scaling, and agent utility. Action verification improves GPT-4o by 5.5% on WebShop.",
    match: "text world model · agent utility · next-state prediction",
    authors: "Yixia Li, Hongru Wang, Jiahao Qiu, Zhenfei Yin, Dongdong Zhang, et al.",
    url: "https://aclanthology.org/2026.acl-long.366/"
  },
  {
    conference: "CVPR",
    status: "Highlight",
    priority: "worth",
    priorityLabel: "Worth reading",
    title: "Physical Object Understanding with a Physically Controllable World Model",
    summary: "A probabilistic world model observes multiple possible futures from partial video. Motion correlations across those futures reveal objects and articulated parts, enabling both physical-structure discovery and direct 3D manipulation.",
    match: "physical control · object dynamics · probabilistic futures",
    authors: "Rahul Venkatesh, Klemen Kotar, Lilian Naing Chen, Wanhee Lee, Gia Ancone, et al.",
    url: "https://cvpr.thecvf.com/virtual/2026/poster/37466"
  },
  {
    conference: "ICML",
    status: "Poster",
    priority: "worth",
    priorityLabel: "Worth reading",
    title: "Causal-JEPA: Learning World Models through Object-Level Latent Interventions",
    summary: "Causal-JEPA lifts masked prediction from patches to objects and uses latent interventions to force interaction understanding instead of shortcuts. Counterfactual reasoning improves by roughly 20% absolute, while planning uses about 1% of a patch world model's latent features.",
    match: "causal world model · object interaction · JEPA",
    authors: "Heejeong Nam, Quentin Le Lidec, Lucas Maes, Yann LeCun, Randall Balestriero",
    url: "https://icml.cc/virtual/2026/poster/63623"
  },
  {
    conference: "ACL",
    status: "Poster",
    priority: "worth",
    priorityLabel: "Worth reading",
    title: "Current Agents Fail to Leverage World Model as Tool for Foresight",
    summary: "This paper tests whether agents can use a generative world model as an external simulator. Some agents call it less than 1% of the time, about 15% misuse rollouts, and forced simulation can reduce performance by 5%. The bottleneck is knowing when to simulate and how to interpret the future.",
    match: "agent foresight · simulation tool use · calibration",
    authors: "Cheng Qian, Emre Can Acikgoz, Bingxuan Li, Xiusi Chen, Yuji Zhang, et al.",
    url: "https://aclanthology.org/2026.acl-long.623/"
  }
];

const runConfigs = {
  daily: {
    mode: "DAILY PAPER DELIVERY",
    promptTitle: "Tell Claw what you want to explore today.",
    runningTitle: "Building your research briefing for today.",
    command: "Recommend today's World Model papers from CVPR, ICML, and ACL 2026",
    steps: [
      ["Read three 2026 acceptance lists", "3 sources"],
      ["Score the World Model topic and keywords", "6 matches"],
      ["Create the review, triage, and summary notes", "ready"]
    ]
  },
  gallery: {
    mode: "DOMAIN RESEARCH GALLERY",
    promptTitle: "Tell Claw which research field you want to browse.",
    runningTitle: "Connecting every work across the field.",
    command: "Build a browsable Domain Research Gallery for MLLM Personalization",
    steps: [
      ["Read detailed paper notes and categories", "23 notes"],
      ["Restore years, figures, and paper relationships", "2024—2026"],
      ["Export share-ready Gallery HTML", "ready"]
    ]
  }
};

const views = [...document.querySelectorAll("[data-view]")];
const dialog = document.querySelector("#run-dialog");
const runMode = document.querySelector("#run-mode");
const runTitle = document.querySelector("#run-title");
const runCommand = document.querySelector("#run-command");
const runSteps = document.querySelector("#run-steps");
const progressBar = document.querySelector("#run-progress-bar");
const feed = document.querySelector("#paper-feed");
const filterSummary = document.querySelector("#filter-summary");
let running = false;
let runSequence = 0;

function activeRoute() {
  const route = window.location.hash.replace("#", "");
  return ["daily", "gallery"].includes(route) ? route : "home";
}

function showView(route) {
  views.forEach((view) => {
    const isActive = view.dataset.view === route;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });
  document.title = route === "daily"
    ? "Today's Paper Delivery · Research Paper Claw"
    : route === "gallery"
      ? "MLLM Personalization Gallery · Research Paper Claw"
      : "Personalized Research Paper Claw";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function paperMarkup(paper, index) {
  return `
    <article class="paper-card" data-paper-conference="${paper.conference}">
      <div class="paper-index">
        <span class="paper-rank">${String(index + 1).padStart(2, "0")}</span>
        <span class="conference-badge">${paper.conference} 26 · ${paper.status}</span>
      </div>
      <div class="paper-main">
        <h2>${paper.title}</h2>
        <p>${paper.summary}</p>
        <p class="authors">${paper.authors}</p>
      </div>
      <div class="paper-match">
        <span class="priority-badge ${paper.priority}">${paper.priorityLabel}</span>
        <p><strong>Why it matched</strong>${paper.match}</p>
        <a class="paper-link" href="${paper.url}" target="_blank" rel="noopener">View paper <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;
}

function renderPapers(conference = "all") {
  const selected = conference === "all"
    ? papers
    : papers.filter((paper) => paper.conference === conference);
  feed.innerHTML = selected.map(paperMarkup).join("");
  filterSummary.textContent = `Showing ${selected.length} World Model match${selected.length === 1 ? "" : "es"}`;
}

function delay(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

async function typeCommand(command, sequence) {
  runCommand.value = "";
  for (const character of Array.from(command)) {
    if (sequence !== runSequence) return false;
    runCommand.value += character;
    runCommand.scrollTop = runCommand.scrollHeight;
    await delay(character === " " ? 34 : 22);
  }
  return true;
}

function cancelRun() {
  runSequence += 1;
  running = false;
  dialog.dataset.phase = "";
  if (dialog.open) dialog.close();
}

async function runDemo(route) {
  if (running) return;
  running = true;
  const sequence = ++runSequence;
  const config = runConfigs[route];
  runMode.textContent = config.mode;
  runTitle.textContent = config.promptTitle;
  runCommand.value = "";
  runSteps.innerHTML = config.steps.map(([label, meta]) => `<li>${label}<span>${meta}</span></li>`).join("");
  progressBar.style.width = "0";
  dialog.dataset.phase = "opening";
  dialog.showModal();
  runCommand.focus({ preventScroll: true });

  await delay(280);
  if (sequence !== runSequence) return;
  dialog.dataset.phase = "typing";
  const completedTyping = await typeCommand(config.command, sequence);
  if (!completedTyping) return;
  await delay(260);
  if (sequence !== runSequence) return;
  if (new URLSearchParams(window.location.search).get("hold") === "typing") return;

  dialog.dataset.phase = "processing";
  runTitle.textContent = config.runningTitle;

  const steps = [...runSteps.children];
  for (let index = 0; index < steps.length; index += 1) {
    if (sequence !== runSequence) return;
    steps.forEach((step, stepIndex) => {
      step.classList.toggle("is-active", stepIndex === index);
      step.classList.toggle("is-done", stepIndex < index);
    });
    progressBar.style.width = `${(index + 1) * (100 / steps.length)}%`;
    await delay(index === 0 ? 520 : 620);
  }

  steps.forEach((step) => {
    step.classList.remove("is-active");
    step.classList.add("is-done");
  });
  await delay(360);
  if (sequence !== runSequence) return;
  dialog.close();
  dialog.dataset.phase = "";
  running = false;
  window.location.hash = route;
}

document.querySelectorAll("[data-run]").forEach((button) => {
  button.addEventListener("click", () => runDemo(button.dataset.run));
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.hash = "home";
  });
});

document.querySelectorAll("[data-conference]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-conference]").forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("is-selected", selected);
      candidate.setAttribute("aria-pressed", String(selected));
    });
    renderPapers(button.dataset.conference);
  });
});

document.querySelector("[data-dialog-close]").addEventListener("click", cancelRun);

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  cancelRun();
});

window.addEventListener("hashchange", () => showView(activeRoute()));
renderPapers();
showView(activeRoute());

const demoRoute = new URLSearchParams(window.location.search).get("demo");
if (["daily", "gallery"].includes(demoRoute) && activeRoute() === "home") {
  window.setTimeout(() => runDemo(demoRoute), 520);
}
