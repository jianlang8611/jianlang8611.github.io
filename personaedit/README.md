# PersonaEdit

PersonaEdit evaluates image editing that recovers personal entities, attribute preferences and placement habits from everyday interactions.

The current instruction version is **v3**: 100 personas, 1,000 distinct source images and 1,000 paired user requests and personalized underlying commands, containing 2116 operations. Each request has two or three operations. English is the task language; Chinese supports review.

Requests express personal goals using the existing person and scene context. The underlying layer records standard operations, personalized parameters, resolved values and evidence. Only the user request is evaluation wording; profiles and resolved annotations contain answers. Everyday histories and edited outputs have not yet been constructed.

- [Review the personas](human-evaluation/index.html)
- [Data and schema](benchmark/README.md)
- [Sources](benchmark/SOURCES.md)
- [Review instructions](human-evaluation/README.md)

Only the latest profiles, instructions and active images are published. Earlier versions remain in the internal archive. Basic biographies, non-global knowledge and source/reference images are preserved. All 125 global finishing options apply independently of image subject or scene; an explicit request selects the applicable option. Existing global reuse adds at most two tasks per persona.

Assistant semantic and structural checks are complete; independent human review remains pending. Dataset revision: `e5a959d8a4c9b869`. [Website entry](https://jianlang.org/personaedit/human-evaluation/).

Volunteer review has two cohort entries: [001–050](human-evaluation/group-001-050.html) and [051–100](human-evaluation/group-051-100.html). Page 1 contains reviewer instructions and a required name used in JSON filenames. Starting on page 2, each persona occupies one page with ten tasks; reviewers complete a page and click Next. Instructions can be revisited without losing progress. Reviewers check persona intent leakage and, for each request, leakage and irresolvable ambiguity. Before rewriting, reviewers read the person's basic information and relevant personal knowledge, adopt that person's perspective and consider the image and request context. The rewrite target is the upper personalized editing request, whose original text appears directly above the rewrite box; lower annotations only explain the intended edits. Every task requires a natural human-authored English rewrite preserving the edits, personalization and hidden preference values/locations; length follows the context. The final page exports all 50 complete persona reviews. Individual reviews and drafts can also be exported and resumed. Browser storage does not automatically submit feedback.
