# Human evaluation

Open [the online review index](https://jianlang.org/personaedit/human-evaluation/) or [index.html](index.html) locally. All source images and visual references are included, so the review pages work without external image hosts.

1. Choose a persona and inspect its basic information and editing profile.
2. Review each source image, explicit instruction and personalized instruction. Record unnatural language, contradictory facts, ambiguous parameters, unsuitable edits or weak visual grounding.
3. Add overall comments near the profile. A name or nickname is optional.
4. Click “导出意见 JSON”. Send the downloaded JSON as an attachment to [jian_lang@std.uestc.edu.cn](mailto:jian_lang@std.uestc.edu.cn). Keep a copy if desired.

Comments are saved in the current browser, separately for each persona. They are not automatically uploaded. Returned files are stored under `results/`; no volunteer submissions have been received in this release.

Exports include `persona_id`, `dataset_revision`, an optional `reviewer_name`, a browser-generated `reviewer_id`, `exported_at` and `feedback`. Feedback keys are `T01`–`T10` and `profile`. Filenames include the persona, time and a reviewer identifier to avoid overwriting another volunteer's file. Only returned reviews belong in `results/`; draft examples and internal exploratory feedback are not submissions.
