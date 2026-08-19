# PersonaIMG 人工审核文件登记

本目录存放 PersonaIMG 视觉维度的人工审核页面和已收集的审核结果。本文件专门登记
每个 HTML 与 JSON 的审核轮次、用途和语义，避免将不同轮次的结果混用。

## HTML 页面

### `html/round1_dimension_selection.html`

- **审核轮次：** 第一轮
- **用途：** 从候选维度目录中，为每个大类和子类选择有效维度。
- **审核者操作：** 选择维度、建议将父类维度下放至子类、新增遗漏维度并导出结果。
- **导出结果的含义：** 某位审核者对候选维度的选择和补充，不等同于最终维度集合。
- **导出文件命名：**
  `personaimg_round1_dimension_selection_result_<reviewer>.json`

### `html/index.html`

- **审核轮次：** 第二轮
- **用途：** 只复核页面生成时已经被标为 final 的 499 个维度。
- **审核者操作：** 将某个 final 维度标为“有疑问”，并必须填写评论，说明其定义、
  命名、值域、重复、冲突或层级问题。
- **未标记维度的含义：** 该审核者在本轮没有报告这个维度存在疑问。
- **导出结果的含义：** 被质疑的 final 维度及审核者评论；该结果不会自动覆盖最终目录。
- **导出 schema：** `personaimg_dimension_round2_question_review_v1`
- **导出文件命名：**
  `personaimg_round2_final_dimension_questions_<reviewer>.json`

两个 HTML 都是自包含页面，审核数据已嵌入 HTML，不依赖相邻的目录 JSON 或 API 服务。

## 已收集结果

### `results/round1_dimension_selection_result_JTY.json`

- **审核轮次：** 第一轮
- **审核者：** JTY
- **结果类型：** 候选维度选择、父类维度下放建议和审核者新增维度。
- **源 schema：** `personaimg_dimension_review_selection_v3`
- **导出时间：** `2026-08-12T05:54:50.789Z`

### `results/round1_dimension_selection_result_ZJW.json`

- **审核轮次：** 第一轮
- **审核者：** ZJW
- **结果类型：** 候选维度选择、父类维度下放建议和审核者新增维度。
- **源 schema：** `personaimg_dimension_review_selection_v3`
- **导出时间：** `2026-08-10T06:34:39.597Z`

本目录暂未收集第二轮审核结果。收集后必须保留导出文件名中的审核者英文姓名，不能覆盖
其他审核者的结果。

## 目录规则

- `html/` 只存放人工审核页面。
- `results/` 只存放审核者导出的 JSON 结果。
- 根目录的 `README.md` 是上述文件的用途和来源登记表。
- 中间目录、可写服务、迁移记录和工作备份不进入本公开审核目录。
