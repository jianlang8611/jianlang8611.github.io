(() => {
  'use strict';
  const contextElement = document.getElementById('review-context');
  if (!contextElement) return;
  const context = JSON.parse(contextElement.textContent);
  const verdicts = ['ok', 'issue', 'unsure'];
  const checkFields = ['leakage', 'solvability'];
  const taskIds = Array.from({length: 10}, (_, i) => 'T' + String(i + 1).padStart(2, '0'));
  const normalize = value => String(value || '').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const keyFor = pid => `${context.protocol_version}:${context.dataset_revision}:${pid}`;
  const reviewerKey = 'personaedit-volunteer-reviewer-v2';
  const sessionPrefix = 'personaedit-review-session-v1:';
  let tabValues = {};
  try { if (window.name.startsWith(sessionPrefix)) tabValues = JSON.parse(window.name.slice(sessionPrefix.length)); } catch (_) {}
  const message = text => {
    const element = document.getElementById('review-message');
    if (element) { element.textContent = text; if (text) element.focus(); }
  };
  function readStorage(key) {
    let disk = null;
    try { disk = JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) {}
    const tab = tabValues[key] || null;
    const time = value => Date.parse(value?.exported_at || value?.updated_at || '') || 0;
    return disk && (!tab || time(disk) > time(tab)) ? disk : tab || disk;
  }
  function writeStorage(key, value) {
    let persisted = true;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { persisted = false; }
    if (!persisted || key === reviewerKey) tabValues[key] = value; else delete tabValues[key];
    try { window.name = sessionPrefix + JSON.stringify(tabValues); } catch (_) {}
    return persisted;
  }
  function reviewerRecord() {
    const reviewer = readStorage(reviewerKey) || {};
    if (!reviewer.id) reviewer.id = (globalThis.crypto?.randomUUID?.() || 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2)).slice(0, 36);
    return reviewer;
  }
  const validName = name => /[\p{L}\p{N}]/u.test(String(name || '').trim());
  const filenameName = name => Array.from(String(name).normalize('NFKC').trim()
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '_').replace(/\s+/g, '_').replace(/^[. ]+|[. ]+$/g, '')).slice(0, 80).join('');
  function currentReview(pid) {
    const payload = readStorage(keyFor(pid));
    return payload?.protocol_version === context.protocol_version && payload?.dataset_revision === context.dataset_revision && payload?.persona_id === pid ? payload : null;
  }
  function taskErrors(row) {
    const errors = [];
    for (const name of checkFields) {
      if (!verdicts.includes(row.checks?.[name])) errors.push({field: name, text: '请完成泄露和不可解模糊性两项判断'});
    }
    const rewrite = String(row.human_instruction || '').trim();
    if (!rewrite) errors.push({field: 'rewrite', text: '请填写英文人类改写'});
    else if (normalize(rewrite) === normalize(row.original_instruction)) errors.push({field: 'rewrite', text: '请自行重写，不能原样复制当前命令'});
    else if ((rewrite.match(/[A-Za-z]+/g) || []).length < 2) errors.push({field: 'rewrite', text: '请提供英文编辑请求；问题解释请写在说明栏'});
    if (checkFields.some(name => ['issue', 'unsure'].includes(row.checks?.[name])) && !String(row.issue_notes || '').trim()) {
      errors.push({field: 'notes', text: '有问题或不确定时，请说明具体原因'});
    }
    if (row.rewrite_faithfulness_confirmed !== true) errors.push({field: 'faithful', text: '请核对并确认改写的忠实性与模糊程度'});
    return errors;
  }
  function payloadErrors(payload) {
    const errors = [];
    if (!validName(payload.reviewer_name)) errors.push({id: 'reviewer-name', text: '请先返回审核人须知页填写姓名，用于导出JSON文件名'});
    if (payload.profile_review?.profile_read !== true) errors.push({id: 'profile-read', text: '请先阅读并确认persona知识'});
    if (!verdicts.includes(payload.profile_review?.leakage)) errors.push({id: 'profile-leakage', text: '请判断persona中是否有编辑意图泄露'});
    if (['issue', 'unsure'].includes(payload.profile_review?.leakage) && !String(payload.profile_review?.notes || '').trim()) {
      errors.push({id: 'profile-notes', text: '请说明persona中的问题或疑点'});
    }
    const rows = Array.isArray(payload.tasks) ? payload.tasks : [];
    if (rows.length !== 10 || new Set(rows.map(row => row.task_id)).size !== 10 || !taskIds.every(id => rows.some(row => row.task_id === id))) {
      errors.push({id: 'profile-read', text: '审核必须包含该persona的全部10条任务'});
    }
    for (const row of rows) {
      for (const error of taskErrors(row)) {
        const id = ['rewrite', 'notes', 'faithful'].includes(error.field) ? `${error.field}-${row.task_id}` : `${row.task_id}-${error.field}`;
        errors.push({id, text: `${row.task_id}：${error.text}`});
      }
    }
    return errors;
  }
  function download(payload, basename) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], {type: 'application/json;charset=utf-8'}));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = basename + '.json';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const timestamp = () => new Date().toISOString().replace(/[:.]/g, '-');

  function completedReviews(ids) {
    return ids.map(currentReview)
      .filter(payload => payload && payload.review_status === 'complete' && payloadErrors(payload).length === 0)
      .map(payload => ({...payload, tasks: payload.tasks.map(row => ({...row,
        checks: Object.fromEntries(checkFields.map(name => [name, row.checks[name]]))}))}));
  }
  function exportBatch(ids, reviewer, requireAll = false) {
    if (!validName(reviewer.name)) { message('请先在审核人须知页填写姓名，用于导出JSON文件名。'); document.getElementById('reviewer-name')?.focus(); return false; }
    const reviews = completedReviews(ids);
    if (requireAll && reviews.length !== ids.length) {
      const firstMissing = ids.find(pid => !reviews.some(review => review.persona_id === pid));
      message(`本组还有 ${ids.length - reviews.length} 位persona未填齐，请先补齐 ${firstMissing}。已有改写已保存。`);
      const link = document.getElementById('resume-incomplete');
      if (link) { link.href = firstMissing + '.html'; link.textContent = '返回未完成的 ' + firstMissing + ' →'; link.hidden = false; }
      return false;
    }
    if (!reviews.length) { message('还没有填齐的persona审核。请从下一页开始，依次完成每人的10条改写与两项判断。'); return false; }
    const payload = {schema_version: '2.0', protocol_version: context.protocol_version,
      dataset_revision: context.dataset_revision, review_ui_sha256: context.review_ui_sha256,
      group_id: context.group_id, group_start: context.group_start, group_end: context.group_end,
      reviewer_id: reviewer.id, reviewer_name: reviewer.name.trim(),
      review_status: 'complete_batch', group_complete: reviews.length === ids.length,
      exported_at: new Date().toISOString(), completed_personas: reviews.length,
      human_rewrites: reviews.length * 10, reviews};
    download(payload, `${filenameName(reviewer.name)}_group_${context.group_id}_complete_${timestamp()}`);
    message(`已导出 ${reviews.length} 位persona、${reviews.length * 10} 条人类改写，文件名已包含你的姓名。请将JSON交回组织者。`);
    return true;
  }

  if (context.page === 'persona') {
    const pid = context.persona_id;
    const specifications = new Map(context.tasks.map(task => [task.task_id, task]));
    let reviewer = reviewerRecord();
    let state = {profile: {profile_read: false, leakage: '', notes: ''}, tasks: {}};
    for (const id of taskIds) state.tasks[id] = {leakage: '', solvability: '', rewrite: '', notes: '', faithful: false};
    const reviewerInput = document.getElementById('reviewer-name');
    reviewerInput.value = reviewer.name || '';
    const status = document.getElementById('save-status');
    let storageFailed = false;

    function buildPayload(reviewStatus = 'draft') {
      return {
        schema_version: '2.0', protocol_version: context.protocol_version,
        dataset_revision: context.dataset_revision, review_ui_sha256: context.review_ui_sha256,
        persona_id: pid, group_id: context.group_id,
        reviewer_id: reviewer.id, reviewer_name: reviewerInput.value.trim(),
        exported_at: new Date().toISOString(), review_status: reviewStatus,
        profile_review: {...state.profile},
        tasks: context.tasks.map(task => {
          const row = state.tasks[task.task_id];
          return {task_id: task.task_id, original_instruction: task.instruction,
            original_instruction_sha256: task.instruction_sha256,
            underlying_operations_sha256: task.underlying_sha256,
            human_instruction: row.rewrite.trim(),
            checks: {leakage: row.leakage, solvability: row.solvability},
            issue_notes: row.notes.trim(), rewrite_faithfulness_confirmed: row.faithful};
        }),
      };
    }
    function importPayload(payload) {
      if (!payload || payload.schema_version !== '2.0' || payload.protocol_version !== context.protocol_version ||
          payload.dataset_revision !== context.dataset_revision || payload.persona_id !== pid || !Array.isArray(payload.tasks) || payload.tasks.length !== 10) {
        throw new Error('此文件不是当前persona与数据版本的审核草稿。');
      }
      if (new Set(payload.tasks.map(row => row.task_id)).size !== 10) throw new Error('草稿中的任务编号重复。');
      for (const row of payload.tasks) {
        const original = specifications.get(row.task_id);
        if (!original || row.original_instruction_sha256 !== original.instruction_sha256 || row.underlying_operations_sha256 !== original.underlying_sha256) {
          throw new Error('草稿对应的原命令或操作版本不一致，未导入。');
        }
      }
      const next = {profile: {
        profile_read: payload.profile_review?.profile_read === true,
        leakage: verdicts.includes(payload.profile_review?.leakage) ? payload.profile_review.leakage : '',
        notes: String(payload.profile_review?.notes || ''),
      }, tasks: {}};
      for (const row of payload.tasks) next.tasks[row.task_id] = {
        leakage: verdicts.includes(row.checks?.leakage) ? row.checks.leakage : '',
        solvability: verdicts.includes(row.checks?.solvability) ? row.checks.solvability : '',
        rewrite: String(row.human_instruction || ''), notes: String(row.issue_notes || ''),
        faithful: row.rewrite_faithfulness_confirmed === true,
      };
      state = next;
      if (!reviewerInput.value.trim() && payload.reviewer_name) reviewerInput.value = String(payload.reviewer_name).slice(0, 100);
    }
    const saved = readStorage(keyFor(pid));
    if (saved) {
      try { importPayload(saved); } catch (error) { message(error.message + ' 原文件仍保留，请导出或另存备份。'); }
    }
    function applyStateToForm() {
      for (const element of document.querySelectorAll('[data-persona-field]')) {
        const value = state.profile[element.dataset.personaField];
        if (element.type === 'checkbox') element.checked = value === true; else element.value = value || '';
      }
      for (const element of document.querySelectorAll('[data-task][data-field]')) {
        const value = state.tasks[element.dataset.task][element.dataset.field];
        if (element.type === 'checkbox') element.checked = value === true; else element.value = value || '';
      }
    }
    function updateProgress() {
      const payload = buildPayload();
      let complete = 0;
      for (const row of payload.tasks) {
        const done = taskErrors(row).length === 0;
        if (done) complete++;
        const panel = document.querySelector(`[data-review-task="${row.task_id}"]`);
        panel.dataset.complete = String(done);
        document.getElementById(`completion-${row.task_id}`).textContent = done ? '本条已填齐；仍请确认语义与模糊程度' : '尚未完成';
        document.getElementById(`notes-${row.task_id}`).required = checkFields.some(name => ['issue', 'unsure'].includes(row.checks[name]));
      }
      document.getElementById('profile-notes').required = ['issue', 'unsure'].includes(state.profile.leakage);
      document.getElementById('review-progress').textContent = `${complete} / 10 条填齐`;
      return payloadErrors(payload).length === 0;
    }
    function save() {
      const complete = updateProgress();
      reviewer.name = reviewerInput.value.trim();
      reviewer.updated_at = new Date().toISOString();
      const reviewSaved = writeStorage(keyFor(pid), buildPayload(complete ? 'complete' : 'draft'));
      const nameSaved = writeStorage(reviewerKey, reviewer);
      storageFailed = !reviewSaved || !nameSaved;
      status.textContent = storageFailed ? '浏览器长期保存不可用；当前标签页暂存，请导出草稿备份。' : '已自动保存；填齐本页后点击下一页。导出并交回后才会收集。';
    }
    for (const element of document.querySelectorAll('[data-persona-field], [data-task][data-field]')) {
      element.addEventListener('input', () => {
        const value = element.type === 'checkbox' ? element.checked : element.value;
        if (element.dataset.personaField) state.profile[element.dataset.personaField] = value;
        else state.tasks[element.dataset.task][element.dataset.field] = value;
        element.classList.remove('review-invalid');
        save();
      });
    }
    reviewerInput.addEventListener('input', save);
    document.getElementById('review-form').addEventListener('submit', event => event.preventDefault());
    function validateCurrent() {
      const payload = buildPayload('complete');
      const errors = payloadErrors(payload);
      document.querySelectorAll('.review-invalid').forEach(element => element.classList.remove('review-invalid'));
      if (errors.length) {
        for (const error of errors) document.getElementById(error.id)?.classList.add('review-invalid');
        message(`还有 ${errors.length} 项未完成，暂不能进入下一页或导出完成审核。\n` + errors.slice(0, 10).map(error => error.text).join('\n') + '\n可以先导出草稿，下次继续。');
        document.getElementById(errors[0].id)?.focus();
        return false;
      }
      return true;
    }
    document.getElementById('export-feedback').addEventListener('click', () => {
      if (!validateCurrent()) return;
      save();
      const payload = buildPayload('complete');
      download(payload, `${filenameName(payload.reviewer_name)}_${pid}_complete_${timestamp()}_${reviewer.id.slice(0, 8)}`);
      message('已导出完成审核JSON；请交回组织者。浏览器不会自动上传。');
    });
    document.getElementById('export-draft').addEventListener('click', () => {
      if (!validName(reviewerInput.value)) { message('请先返回审核人须知页填写姓名，用于草稿JSON文件名。已有内容会保留。'); return; }
      save();
      download(buildPayload('draft'), `${filenameName(reviewerInput.value)}_${pid}_draft_${timestamp()}_${reviewer.id.slice(0, 8)}`);
      message('已导出未完成草稿，可通过“导入草稿”恢复；此文件不作为完成审核。');
    });
    document.getElementById('import-draft').addEventListener('click', () => document.getElementById('import-file').click());
    document.getElementById('import-file').addEventListener('change', async event => {
      const file = event.target.files[0];
      if (!file) return;
      try { importPayload(JSON.parse(await file.text())); applyStateToForm(); save(); message('已恢复当前persona的审核草稿。'); }
      catch (error) { message(error.message || '文件无法读取，未导入。'); }
      event.target.value = '';
    });
    document.getElementById('next-persona')?.addEventListener('click', () => {
      if (!validateCurrent()) return;
      save();
      location.href = context.next_persona + '.html';
    });
    document.getElementById('finish-group')?.addEventListener('click', () => {
      if (!validateCurrent()) return;
      save();
      exportBatch(context.persona_ids, reviewer, true);
    });
    document.getElementById('show-boxes').addEventListener('change', event => document.body.classList.toggle('show-boxes', event.target.checked));
    function revealHash() {
      const element = document.getElementById(location.hash.slice(1));
      if (!element) return;
      let parent = element.parentElement;
      while (parent) { if (parent.tagName === 'DETAILS') parent.open = true; parent = parent.parentElement; }
      element.scrollIntoView();
    }
    document.getElementById('task-jump').addEventListener('change', event => { if (event.target.value) location.hash = event.target.value; });
    window.addEventListener('hashchange', revealHash);
    if (typeof ResizeObserver !== 'undefined') {
      const nav = document.querySelector('nav.nav');
      new ResizeObserver(() => { document.documentElement.style.scrollPaddingTop = (getComputedStyle(nav).position === 'sticky' ? nav.getBoundingClientRect().height + 12 : 12) + 'px'; }).observe(nav);
    }
    applyStateToForm(); updateProgress();
    if (location.hash) requestAnimationFrame(revealHash);
  }

  if (context.page === 'group' || context.page === 'index') {
    let reviewer = reviewerRecord();
    const input = document.getElementById('reviewer-name');
    input.value = reviewer.name || '';
    function saveName() {
      reviewer.name = input.value.trim();
      reviewer.updated_at = new Date().toISOString();
      writeStorage(reviewerKey, reviewer);
    }
    input.addEventListener('input', saveName);
    for (const link of document.querySelectorAll('[data-start-persona]')) {
      link.addEventListener('click', event => {
        saveName();
        if (!validName(reviewer.name)) {
          event.preventDefault();
          message('请先填写审核人姓名或审核昵称；导出JSON时会使用这个名字。');
          input.focus();
        }
      });
    }
    if (context.page === 'group') {
      const requested = new URLSearchParams(location.search).get('return');
      function refresh() {
        const done = completedReviews(context.persona_ids);
        document.getElementById('group-progress').textContent = `${done.length} / 50 位完成填写（当前浏览器）`;
        const validReturn = context.persona_ids.includes(requested) ? requested : null;
        const firstMissing = context.persona_ids.find(pid => !done.some(review => review.persona_id === pid));
        const target = validReturn || firstMissing || context.persona_ids[0];
        const link = document.getElementById('start-review');
        link.href = target + '.html';
        link.dataset.startPersona = target;
        const pageNumber = Number(target.slice(-3)) - context.group_start + 2;
        link.textContent = validReturn || done.length ? `继续审核 → ${target}（第${pageNumber}页）` : `我已阅读，开始审核 → 第2页：${target}`;
      }
      document.getElementById('export-group').addEventListener('click', () => { saveName(); exportBatch(context.persona_ids, reviewer); });
      window.addEventListener('storage', refresh);
      window.addEventListener('pageshow', refresh);
      refresh();
    }
  }
})();
