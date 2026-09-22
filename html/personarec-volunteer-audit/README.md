# PersonaRec volunteer audit

The page uses the complete PersonaRec text histories for four personas. Group 1 is shared by two volunteers and contains personas 109 and 11; Group 2 is shared by two volunteers and contains personas 124 and 141.

The four stages are N/C (1–3 ratings for each complete history), PC/PN (10 hidden-preference sessions), TI (five target-identification tasks), and R@1 (six product tasks per persona across Fashion, Food, and Movie). PC is free text; the other values are collected immediately.

`audit_data.json` contains text metadata and candidate products. Conversation images are fetched lazily from the private Hugging Face dataset after the volunteer enters a token. The local answer key is outside this deployable folder.
