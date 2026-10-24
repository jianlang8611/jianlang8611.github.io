(() => {
  'use strict';
  const contextElement = document.getElementById('review-context');
  if (!contextElement) return;
  const context = JSON.parse(contextElement.textContent);
  const verdicts = ['ok', 'issue', 'unsure'];
  const taskIds = Array.from({length: 10}, (_, i) => 'T' + String(i + 1).padStart(2, '0'));
  const normalize = value => String(value || '').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const keyFor = pid => `${context.protocol_version}:${context.dataset_revision}:${pid}`;
  const message = text => {
    const element = document.getElementById('review-message');
    if (element) { element.textContent = text; if (text) element.focus(); }
  };
  function readStorage(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return null; }
  }
  function taskErrors(row) {
    const errors = [];
    for (const name of ['leakage', 'solvability', 'naturalness']) {
      if (!verdicts.includes(row.checks?.[name])) errors.push({field: name, text: '请完成三项问题判断'});
    }
    const rewrite = String(row.human_instruction || '').trim();
    if (!rewrite) errors.push({field: 'rewrite', text: '请填写英文人类改写'});
    else if (normalize(rewrite) === normalize(row.original_instruction)) errors.push({field: 'rewrite', text: '请自行重写，不能原样复制当前命令'});
    else if ((rewrite.match(/[A-Za-z]+/g) || []).length < 2) errors.push({field: 'rewrite', text: '请提供英文编辑请求；问题解释请写在说明栏'});
    if (Object.values(row.checks || {}).some(value => value === 'issue' || value === 'unsure') && !String(row.issue_notes || '').trim()) {
      errors.push({field: 'notes', text: '有问题或不确定时，请说明具体原因'});
    }
    if (row.rewrite_faithfulness_confirmed !== true) errors.push({field: 'faithful', text: '请核对并确认改写的忠实性与模糊程度'});
    return errors;
  }
  function payloadErrors(payload) {
    const errors = [];
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

  if (context.page === 'persona') {
    const pid = context.persona_id;
    const specifications = new Map(context.tasks.map(task => [task.task_id, task]));
    let reviewer = readStorage('personaedit-volunteer-reviewer-v2') || {};
    if (!reviewer.id) reviewer.id = (globalThis.crypto?.randomUUID?.() || 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2)).slice(0, 36);
    let state = {profile: {profile_read: false, leakage: '', notes: ''}, tasks: {}};
    for (const id of taskIds) state.tasks[id] = {leakage: '', solvability: '', naturalness: '', rewrite: '', notes: '', faithful: false};
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
            checks: {leakage: row.leakage, solvability: row.solvability, naturalness: row.naturalness},
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
        naturalness: verdicts.includes(row.checks?.naturalness) ? row.checks.naturalness : '',
        rewrite: String(row.human_instruction || ''), notes: String(row.issue_notes || ''),
        faithful: row.rewrite_faithfulness_confirmed === true,
      };
      state = next;
      if (payload.reviewer_name) reviewerInput.value = String(payload.reviewer_name).slice(0, 100);
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
        document.getElementById(`notes-${row.task_id}`).required = Object.values(row.checks).some(value => value === 'issue' || value === 'unsure');
      }
      document.getElementById('profile-notes').required = ['issue', 'unsure'].includes(state.profile.leakage);
      document.getElementById('review-progress').textContent = `${complete} / 10 条填齐`;
      return payloadErrors(payload).length === 0;
    }
    function save() {
      const complete = updateProgress();
      reviewer.name = reviewerInput.value.trim();
      try {
        localStorage.setItem(keyFor(pid), JSON.stringify(buildPayload(complete ? 'complete' : 'draft')));
        localStorage.setItem('personaedit-volunteer-reviewer-v2', JSON.stringify(reviewer));
        storageFailed = false;
      } catch (_) { storageFailed = true; }
      status.textContent = storageFailed ? '浏览器保存不可用；请立即导出草稿保存。' : '已在此浏览器保存；导出并交回后才会收集。';
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
    document.getElementById('export-feedback').addEventListener('click', () => {
      const payload = buildPayload('complete');
      const errors = payloadErrors(payload);
      document.querySelectorAll('.review-invalid').forEach(element => element.classList.remove('review-invalid'));
      if (errors.length) {
        for (const error of errors) document.getElementById(error.id)?.classList.add('review-invalid');
        message(`还有 ${errors.length} 项未完成，暂不能导出完成审核。\n` + errors.slice(0, 10).map(error => error.text).join('\n') + '\n可以先导出草稿，下次继续。');
        document.getElementById(errors[0].id)?.focus();
        return;
      }
      save();
      download(payload, `${pid}_complete_${timestamp()}_${reviewer.id.slice(0, 8)}`);
      message('已导出完成审核JSON；请交回组织者。浏览器不会自动上传。');
    });
    document.getElementById('export-draft').addEventListener('click', () => {
      save();
      download(buildPayload('draft'), `${pid}_draft_${timestamp()}_${reviewer.id.slice(0, 8)}`);
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

  if (context.page === 'group') {
    const rows = [...document.querySelectorAll('[data-persona]')];
    function current(pid) {
      const payload = readStorage(keyFor(pid));
      return payload?.protocol_version === context.protocol_version && payload?.dataset_revision === context.dataset_revision && payload?.persona_id === pid ? payload : null;
    }
    function completed() {
      return context.persona_ids.map(current).filter(payload => payload && payload.review_status === 'complete' && payloadErrors(payload).length === 0);
    }
    function refresh() {
      for (const row of rows) {
        const payload = current(row.dataset.persona);
        const done = payload && payloadErrors(payload).length === 0;
        const n = payload ? payload.tasks.filter(task => taskErrors(task).length === 0).length : 0;
        row.dataset.complete = String(Boolean(done));
        row.querySelector('[data-persona-progress]').textContent = done ? '已填齐，记得交回' : n ? `${n} / 10 条填齐` : payload ? '已开始' : '未开始';
      }
      document.getElementById('group-progress').textContent = `${completed().length} / 50 位完成填写（当前浏览器）`;
    }
    document.getElementById('filter').addEventListener('input', event => {
      const query = event.target.value.trim().toLowerCase();
      let visible = 0;
      for (const row of rows) { row.hidden = !row.dataset.search.includes(query); if (!row.hidden) visible++; }
      document.getElementById('visible-count').textContent = `${visible} 位`;
    });
    document.getElementById('export-group').addEventListener('click', () => {
      const reviews = completed();
      if (!reviews.length) { message('当前浏览器还没有填齐的persona审核。请先进入人物页，完成10条改写与问题判断。'); return; }
      const payload = {schema_version: '2.0', protocol_version: context.protocol_version,
        dataset_revision: context.dataset_revision, review_ui_sha256: context.review_ui_sha256,
        group_id: context.group_id, group_start: context.group_start, group_end: context.group_end,
        review_status: 'complete_batch', exported_at: new Date().toISOString(),
        completed_personas: reviews.length, human_rewrites: reviews.length * 10, reviews};
      download(payload, `group_${context.group_id}_complete_${timestamp()}`);
      message(`已导出 ${reviews.length} 位persona、${reviews.length * 10} 条人类改写。未完成的草稿未计入，请将JSON交回组织者。`);
    });
    window.addEventListener('storage', refresh);
    window.addEventListener('pageshow', refresh);
    refresh();
  }
})();
