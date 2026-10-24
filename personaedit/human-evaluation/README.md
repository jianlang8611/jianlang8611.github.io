# Human evaluation

Open [the online review index](https://jianlang.org/personaedit/human-evaluation/) or [index.html](index.html) locally. All source images and visual references are included, so the review pages work without external image hosts.

1. Choose a persona and inspect its basic information and editing profile.
2. Read the first-page requirements, then use group A (001–050) or group B (051–100). Each persona has its own page with ten requests.
3. Read the persona and check for embedded editing intent. For every task, inspect leakage/shortcuts and irresolvable ambiguity/evidence gaps against the source, profile and underlying annotations.
4. Before rewriting, read the persona's basic information and relevant personal knowledge. Put yourself in that person's role and use the current image and request context to express the same editing intent as they naturally would. Natural expression is the goal; length follows the intent and context. Write a mandatory human-authored English rewrite for every request, including requests judged acceptable. Preserve personalization and hidden values/locations; do not copy the original verbatim, invent facts or use AI to write it. Confirm the rewrite's fidelity.
5. Click “导出完成审核” after all ten rewrites and judgments are filled. A reported issue or uncertainty requires an explanation. “导出草稿” works at any point; drafts can be imported to resume and are not complete submissions. A name or nickname is optional.
6. Send the downloaded JSON as an attachment to [jian_lang@std.uestc.edu.cn](mailto:jian_lang@std.uestc.edu.cn). A group directory can also export all completed reviews stored in the current browser. Keep a copy.

Comments are saved in the current browser, separately for each persona. They are not automatically uploaded. Returned files are stored under `results/`.

Schema 2.0 exports include `protocol_version`, `persona_id`, `group_id`, `dataset_revision`, UI provenance, optional reviewer name, reviewer ID and export time. Each of ten task rows stores source hashes, `human_instruction`, two judgments (`leakage`, `solvability`), an explanation and fidelity confirmation. `profile_review` records the persona-level check. `review_status` distinguishes complete reviews, drafts and complete batches. Complete means the required fields were filled, not that the sample passed all judgments. Earlier drafts remain importable; their removed naturalness field is not required or exported. Only returned files belong in `results/`; draft examples and internal exploratory feedback are not submissions.
