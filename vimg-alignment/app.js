(() => {
  const P = JSON.parse(document.getElementById("payload").textContent);
  const ITEMS = P.items;
  let participant = "", STORE = "", consentAt = "";
  const $ = (id) => document.getElementById(id);
  const totalQ = ITEMS.reduce((n, it) => n + it.questions.length, 0);

  // state: answers[qid] = {a: 1|0, t: ISO time}; notes[item_id] = text
  let S = { answers: {}, notes: {}, pos: 0, seenHelp: false, exportedAt: null };
  let storageOK = true;
  let qi = 0;

  function save() {
    if (!participant) return;
    try { localStorage.setItem(STORE, JSON.stringify(S)); storageOK = true; }
    catch (e) { storageOK = false; }
    renderSaveState();
  }
  function renderSaveState() {
    const t = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    $("savestate").textContent = storageOK
      ? `Saved in this browser · ${t}` + (S.exportedAt ? ` · last export ${new Date(S.exportedAt).toLocaleString()}` : "")
      : "Autosave is unavailable in this browser — export before you close the page.";
    renderBanners();
  }

  const answeredIn = (it) => it.questions.filter((q) => S.answers[q.qid]).length;
  const answeredAll = () => Object.keys(S.answers).length;
  const firstUnanswered = (it) => it.questions.findIndex((q) => !S.answers[q.qid]);

  function renderBanners() {
    const b = $("banners");
    b.innerHTML = "";
    if (!storageOK) b.insertAdjacentHTML("beforeend", `<div class="banner warn">Autosave is not available (private window or blocked storage). Your answers will be lost when you close this page — click <b>Export JSON</b> before leaving.</div>`);
    if (answeredAll() === totalQ) b.insertAdjacentHTML("beforeend", `<div class="banner done">All ${totalQ} questions answered — thank you! Click <b>Export JSON</b> and send the file back.</div>`);
  }

  function splitQuestion(text) {
    const m = text.match(/^(.*?visual preference:\s*)(.+?)\s=\s(.+?)\??$/);
    return m ? { lead: m[1], dim: m[2], val: m[3] } : null;
  }
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function renderGrid() {
    const g = $("grid");
    if (!g.children.length) {
      ITEMS.forEach((it, i) => {
        const btn = document.createElement("button");
        btn.type = "button"; btn.textContent = i + 1;
        btn.addEventListener("click", () => go(i));
        g.appendChild(btn);
      });
    }
    ITEMS.forEach((it, i) => {
      const btn = g.children[i], n = answeredIn(it);
      btn.className = (n === it.questions.length ? "done" : n ? "partial" : "") + (i === S.pos ? " here" : "");
      btn.title = `Image ${i + 1}: ${n}/${it.questions.length} answered`;
    });
  }

  function renderProgress() {
    const n = answeredAll();
    const doneImgs = ITEMS.filter((it) => answeredIn(it) === it.questions.length).length;
    $("barfill").style.width = `${(100 * n) / totalQ}%`;
    $("progtext").textContent = `${doneImgs}/${ITEMS.length} images · ${n}/${totalQ} questions`;
  }

  function renderItem() {
    const it = ITEMS[S.pos];
    $("img").src = it.img;
    $("pos").textContent = `Image ${S.pos + 1} of ${ITEMS.length}`;
    $("itemid").textContent = it.id;
    $("note").value = S.notes[it.id] || "";
    const ol = $("qs");
    ol.innerHTML = "";
    it.questions.forEach((q, j) => {
      const a = S.answers[q.qid], parts = splitQuestion(q.text);
      const li = document.createElement("li");
      li.className = "q" + (j === qi ? " current" : "");
      li.innerHTML = `<div><span class="num">Q${j + 1}</span> ` +
        (parts ? `<span class="lead">${esc(parts.lead)}</span><span class="pref">${esc(parts.dim)} = <span class="val">${esc(parts.val)}</span>?</span>`
               : esc(q.text)) + `</div>` +
        `<div class="yn" role="group" aria-label="Answer to question ${j + 1}">` +
        `<button type="button" class="yes" aria-pressed="${a && a.a === 1}">1 · Yes<kbd>Y</kbd></button>` +
        `<button type="button" class="no" aria-pressed="${a && a.a === 0}">0 · No<kbd>N</kbd></button></div>`;
      li.querySelector(".yes").addEventListener("click", () => answer(j, 1));
      li.querySelector(".no").addEventListener("click", () => answer(j, 0));
      li.addEventListener("click", (e) => { if (!e.target.closest("button")) { qi = j; renderQuestionsFocus(); } });
      ol.appendChild(li);
    });
    const n = answeredIn(it);
    $("qcount").textContent = `${n}/${it.questions.length} answered`;
    $("prevBtn").disabled = S.pos === 0;
    $("nextBtn").disabled = S.pos === ITEMS.length - 1;
    $("nextBtn").classList.toggle("ready", n === it.questions.length && S.pos < ITEMS.length - 1);
    renderGrid(); renderProgress();
    if (S.pos + 1 < ITEMS.length) new Image().src = ITEMS[S.pos + 1].img;
  }
  function renderQuestionsFocus() {
    [...$("qs").children].forEach((li, j) => li.classList.toggle("current", j === qi));
    const cur = $("qs").children[qi];
    if (cur) cur.scrollIntoView({ block: "nearest" });
  }

  function answer(j, a) {
    if(!participant || !$("img").complete || !$("img").naturalWidth) return alert("图片尚未加载成功，请稍后重试，不要把加载失败记为 0。");
    const it = ITEMS[S.pos], q = it.questions[j];
    S.answers[q.qid] = { a, t: new Date().toISOString() };
    const next = firstUnanswered(it);
    qi = next === -1 ? j : next;
    save(); renderItem(); renderQuestionsFocus();
  }

  function go(i) {
    if (i < 0 || i >= ITEMS.length) return;
    S.pos = i;
    const f = firstUnanswered(ITEMS[i]);
    qi = f === -1 ? 0 : f;
    save(); renderItem();
    window.scrollTo({ top: 0 });
  }
  function nextUnanswered() {
    for (let k = 1; k <= ITEMS.length; k++) {
      const i = (S.pos + k) % ITEMS.length;
      if (answeredIn(ITEMS[i]) < ITEMS[i].questions.length) return go(i);
    }
    go(S.pos);
  }

  function exportJSONL() {
    const complete = answeredAll() === totalQ;
    if (!complete && !confirm(`还有 ${totalQ-answeredAll()} 题未完成。导出草稿用于备份？未答题保留 null，不算 0。`)) return;
    const rows = ITEMS.flatMap((it,i)=>it.questions.map(q=>{
      const a=S.answers[q.qid];
      return {item_id:it.id,position:i+1,qid:q.qid,question:q.text,label:a?a.a:null,answered_at:a?a.t:null,note:S.notes[it.id]||""};
    }));
    const exported_at=new Date().toISOString();
    const data={schema_version:"vimg-alignment-human-v1",study:P.study,build:P.build,participant_name:participant,consent:{version:"named-v1",accepted_at:consentAt},exported_at,complete,total_images:ITEMS.length,total_questions:totalQ,answered_questions:answeredAll(),responses:rows};
    const safe=participant.normalize('NFC').replace(/[<>:"/\\|?*\x00-\x1f]/g,'_').replace(/[. ]+$/g,'').slice(0,80)||'participant';
    const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download=`vimg_alignment_${safe}_${complete?'complete':'draft'}_${exported_at.replace(/[:.]/g,'-')}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
    S.exportedAt=exported_at;save();
  }
  function importJSONL(text) {
    let data;
    try { data=JSON.parse(text); } catch { return alert('请选择本页面导出的 JSON 文件。'); }
    if(data.schema_version!=='vimg-alignment-human-v1'||data.study!==P.study||data.build!==P.build||data.participant_name!==participant||!Array.isArray(data.responses))return alert('姓名或任务版本不匹配，未导入。');
    const known=new Map(ITEMS.flatMap(it=>it.questions.map(q=>[q.qid,{item:it.id,text:q.text}])));
    const seen=new Set();
    for(const r of data.responses){
      const q=known.get(r.qid);
      if(!q||seen.has(r.qid)||r.item_id!==q.item||r.question!==q.text||![null,0,1].includes(r.label))return alert('题号、问题或评分格式无效，未导入。');
      seen.add(r.qid);
    }
    if(data.responses.length!==totalQ)return alert('题目数量不匹配，未导入。');
    if(answeredAll() && !confirm('用导入文件替换当前姓名的本地进度？'))return;
    S.answers={};S.notes={};
    for(const r of data.responses){if(r.label!==null)S.answers[r.qid]={a:r.label,t:r.answered_at||new Date().toISOString()};if(r.note)S.notes[r.item_id]=r.note;}
    save();go(S.pos);alert(`已导入 ${answeredAll()} 个评分。`);
  }

  function openZoom() { $("zoomImg").src = ITEMS[S.pos].img; $("zoom").classList.add("open"); }
  function closeZoom() { $("zoom").classList.remove("open"); }

  // wiring
  
  $("nImages").textContent = ITEMS.length;
  $("nQuestions").textContent = totalQ;
  $("prevBtn").addEventListener("click", () => go(S.pos - 1));
  $("nextBtn").addEventListener("click", () => go(S.pos + 1));
  $("skipBtn").addEventListener("click", nextUnanswered);
  $("exportBtn").addEventListener("click", exportJSONL);
  $("helpBtn").addEventListener("click", () => $("help").showModal());
  $("startBtn").addEventListener("click", () => $("help").close());
  $("help").addEventListener("close", () => { S.seenHelp = true; save(); });
  $("imgwrap").addEventListener("click", openZoom);
  $("zoom").addEventListener("click", closeZoom);
  $("importBtn").addEventListener("click", () => $("importFile").click());
  $("importFile").addEventListener("change", (e) => {
    const f = e.target.files[0];
    if (f) f.text().then(importJSONL);
    e.target.value = "";
  });
  $("note").addEventListener("input", (e) => {
    const id = ITEMS[S.pos].id, v = e.target.value;
    if (v) S.notes[id] = v; else delete S.notes[id];
    save();
  });
  document.addEventListener("keydown", (e) => {
    if (!participant) return;
    if (e.target.closest("textarea, input") || e.metaKey || e.ctrlKey || e.altKey) return;
    if ($("help").open) return;
    if ($("zoom").classList.contains("open")) { if (e.key === "Escape" || e.key.toLowerCase() === "z") closeZoom(); return; }
    const it = ITEMS[S.pos], k = e.key;
    if (k === "y" || k === "Y") answer(qi, 1);
    else if (k === "n" || k === "N") answer(qi, 0);
    else if (k === "ArrowDown") { qi = Math.min(qi + 1, it.questions.length - 1); renderQuestionsFocus(); }
    else if (k === "ArrowUp") { qi = Math.max(qi - 1, 0); renderQuestionsFocus(); }
    else if (k === "ArrowRight" || k === "Enter") { if (e.target.closest("button") && k === "Enter") return; go(S.pos + 1); }
    else if (k === "ArrowLeft") go(S.pos - 1);
    else if (k === "z" || k === "Z") openZoom();
    else return;
    e.preventDefault();
  });
  window.addEventListener("beforeunload", (e) => { if (!storageOK && answeredAll()) { e.preventDefault(); e.returnValue = ""; } });

  $("enterBtn").addEventListener("click",()=>{
    const name=$("participantName").value.trim().normalize('NFC');
    if(!name||!$("consent").checked){$("entryError").textContent='请填写姓名并勾选自愿参与确认。';return;}
    participant=name;STORE=`vimg-human/${P.study}/${P.build}/named-v1/${encodeURIComponent(name)}`;
    S={answers:{},notes:{},pos:0,seenHelp:false,exportedAt:null};
    try{const raw=localStorage.getItem(STORE);if(raw)Object.assign(S,JSON.parse(raw));}catch{storageOK=false;}
    const valid=new Set(ITEMS.flatMap(it=>it.questions.map(q=>q.qid)));
    S.answers=Object.fromEntries(Object.entries(S.answers||{}).filter(([id,a])=>valid.has(id)&&a&&[0,1].includes(a.a)));
    S.notes=S.notes||{};consentAt=S.consentAt||new Date().toISOString();S.consentAt=consentAt;
    S.pos=Math.min(Math.max(0,S.pos|0),ITEMS.length-1);qi=Math.max(0,firstUnanswered(ITEMS[S.pos]));
    $("who").textContent=participant;$("entry").hidden=true;$("workspace").hidden=false;
    renderItem();save();if(!S.seenHelp)$("help").showModal();
  });
})();
