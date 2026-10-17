# PersonaEdit

PersonaEdit is a personalized image editing benchmark. It studies whether an image editing model can recover Entity, Attribute and Placement arguments from a user's long-term everyday interactions.

**Current release: a draft for human review.** There are 100 sparse basic persona profiles and 5 complete task groups. Each complete persona has 10 source images, 10 explicit instructions, 10 corresponding personalized instructions and an editing-related profile. All five currently cover eight operation classes. Daily interaction histories and edited outputs are pending.

- [Volunteer review website](https://jianlang.org/personaedit/human-evaluation/)
- [Local review index](human-evaluation/index.html)
- [Benchmark data and schema](benchmark/README.md)
- [Data sources and attribution](benchmark/SOURCES.md)
- [Review instructions and results](human-evaluation/README.md)

```text
benchmark/
  data/personas/          # 100 basic profiles; 5 complete profiles
  data/instructions/      # explicit and personalized versions, grouped by persona
  data/images/           # 50 source images and 5 contact sheets
  data/references/       # visual references for personalized entities
  data/manifests/         # public asset hashes and revision
human-evaluation/
  index.html             # five-persona review index
  persona_001.html ... persona_005.html
  results/               # returned review JSON files
```

The canonical task language is English; Chinese text supports human review. Explicit instructions and complete profiles contain answers and annotations, and are not evaluation-time interaction histories. Source images and original instructions retain upstream provenance. Source benchmark target images and scoring prompts are not assumed to remain applicable after changes.

Dataset revision: `59b4f06f3f61d703`. Feedback is saved in the reviewer's browser and exported as JSON; reviewers return the exported file to the organizer. This static website does not receive files automatically.
