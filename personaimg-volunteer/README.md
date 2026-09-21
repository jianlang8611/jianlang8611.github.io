# PersonaIMG volunteer study

Open `index.html` through a static web server. The page contains the four ICLR 2027 human-study measures:

- Conversational Consistency and Interaction Realism: binary 0/1 judgments for two assigned interaction histories.
- Imagination Fidelity: a free-text guess of the preference expressed by each of ten assigned sessions.
- Revelation Naturalness: binary 0/1 judgment for each of those ten sessions.

The bundled `volunteer_tasks.json` contains text metadata only. Image paths are resolved lazily from the private Hugging Face dataset after a volunteer enters an access token; the token is held only in memory and is never written to downloaded responses. The answer key is kept outside this deployable folder at `../vimg_answer_key_local.json`.

Responses are downloaded from the completion screen as `personaimg-VN-responses.json`.
