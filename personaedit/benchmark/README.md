# PersonaEdit benchmark data

[Review all 100 personas](../human-evaluation/index.html). Current instruction version: **v3**. Join the two instruction layers on `persona_id` and `task_id`; image paths are relative to `benchmark/data/`.

| Item | Count |
| --- | ---: |
| Personas | 100 |
| Source images / requests | 1000 |
| Atomic operations | 2116 |
| Personalized parameters | 5458 |
| Three-operation requests | 116 |
| Adopted source modifications | 293 |
| Pending source modifications | 0 |

| File | Contents |
| --- | --- |
| `data/personas/basic_persona_profile.json` | Unchanged basic biographies and social connections |
| `data/personas/complete_persona_profile.json` | Current entities, preferences, placement habits and contextual facts |
| `data/instructions/persona_instruction.json` | Natural personal user requests, without resolved answers |
| `data/instructions/personalized_base_instruction.json` | Standard operations, personalized parameters, concrete resolved values and evidence |
| `data/manifests/instruction_layers.json` | Active two-layer contract |
| `data/manifests/instruction_review.json` | Semantic repair coverage, narrowly scoped global reuse and annotation corrections |
| `data/manifests/validation.json` | Current validation and assistant cross-review |
| `data/manifests/persona_knowledge.json` | Knowledge classification and global usage per persona |
| `data/manifests/attribute_parameters.json` | Separate attribute dimensions and original joint choices |
| `data/manifests/source_image_status.json` | Active source for every task |
| `data/manifests/assets.json` | Exported hashes and dataset revision |

There are three argument types: Entity, Attribute and Placement. Contextual facts are identity/event evidence, not a fourth argument type. Attribute preferences remain classified as entity, scene or global preferences. Scene preferences include settings, sky, light, walls, ground and support surfaces. All 125 global preferences describe image treatment independently of subject, scene or source image. A request must activate the corresponding treatment. When a person has two options in the same family, the usual and alternate options are explicitly distinguished in the knowledge and request; the depicted subject never chooses between them. The application region and task-specific preservation rules belong to the operation, not the reusable preference.

Each Attribute parameter records one property and one value. `attribute_groups` preserves joint choices, original category, context, stance and constraints. One operation may have multiple attribute parameters and visible effects; the number of properties does not redefine the operation count. Replace keeps its target and replacement entity distinct.

Requests combine the actual persona, scene and applicable preferences without exposing output colors, styles or lighting values. A named person or existing relationship/event must select the intended entity when several candidates are visible. Background and whole-image edits require their own meaningful cues; asking to keep or share a photo alone is insufficient. Everyday knowledge excludes instructions to preserve or remove objects and excludes source-construction traces. Evaluation constraints belong in the underlying/scoring annotations. Conditional retouch attributes are scored only where the specified condition is actually visible; natural skin detail must not be invented or removed to create a difference.

V3 preserves basic biographies, entity identities, non-global knowledge, source images and identity references. The 125 global options have been explicitly generalized across subjects, retaining their artistic and photographic choices. Source-specific descriptions and preservation clauses have moved to task annotations. Existing reuse remains capped at two additional tasks per persona, with zero allowed and two or three operations per task. Incompatible finishing options are not combined. Published files contain only the latest version; previous profiles and instructions are archived internally.

Source counts: ImgEdit-Bench Basic: 86, Complex-Edit: 414, GEdit-Bench: 194, AnyEdit-Test: 306. All decided source modifications have been generated and checked by an assistant; human review remains pending. Upstream sample IDs and fixed revisions remain attached to each task. Source preparation does not apply the target edits, and adapted tasks do not inherit upstream target images or scoring prompts automatically. Source attribution and terms appear in [SOURCES.md](SOURCES.md).

Assistant review covered all 100 personas and attribute representations, all 125 global options, and 1,000 command pairs. Structural validation checks frozen basic and non-global information, unchanged image assets, one-property attributes, evidence links, concrete resolutions and global limits. The active validation manifest records whether the instruction refresh is complete or follows the persona update. These checks do not establish performance on future everyday histories or edited outputs; those have not been generated. Independent human review remains pending.
