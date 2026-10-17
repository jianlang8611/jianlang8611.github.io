# Benchmark data

The two instruction JSON files contain a `personas` array with one block per persona. Join explicit and personalized tasks using `persona_id` and `task_id`. Each persona has exactly ten image/instruction pairs. `image_path` and visual reference paths are relative to `benchmark/data/`.

| File | Contents |
| --- | --- |
| `data/personas/basic_persona_profile.json` | 100 basic personas adapted from PersonaMem-v3; medical content removed; adulthood inferred from occupation/education where numeric age is absent |
| `data/personas/complete_persona_profile.json` | Editing knowledge for persona_001–005 |
| `data/instructions/basic_instruction.json` | Explicit instructions, original source instructions, operation/argument answers, provenance and review notes |
| `data/instructions/persona_instruction.json` | Corresponding personalized evaluation instructions, without resolved answers |
| `data/manifests/assets.json` | Published file hashes and dataset revision |

Profiles use five consistent sections: `personalized_entities`, `general_entity_preferences`, `global_preferences`, `position_preferences`, and `contextual_facts`. Attribute changes resolve category or global preferences. Position entries record an owner, a meaningful everyday key, context, normalized destination and grounding in the current image. Ordinary entities can become personalized arguments through a preference or contextual fact.

The eight operation classes are Add, Remove, Replace, Attribute Modification, Move, Retouch, Background and Restyle. Commands contain one to three atomic operations; this draft has 53 operations across 50 commands. An aggregated expression can call multiple preference fragments within a single operation; it is not required for every persona.

| Persona | Name | Source images |
| --- | --- | --- |
| persona_001 | Khoa Bui | 10 |
| persona_002 | Azusa Bessho | 10 |
| persona_003 | Hayes Jorgensen | 10 |
| persona_004 | Folarin Ezeani | 10 |
| persona_005 | Xandro Panganiban | 10 |

The 50 source images are distinct. They come from ImgEdit-Bench Basic (22), GEdit-Bench (13) and Complex-Edit (15), with no fixed source ratio. Selected Complex-Edit steps use objects already present in the original image; preceding sequence steps are not applied. Profile reference crops are additional identity knowledge, not extra evaluation tasks.

[Review the five task groups](../human-evaluation/index.html). Small regions, narrow placement spaces, qualitative enhancement strength and aggregated-expression evidence remain subject to human review. No long-term histories or generated editing results are included.
