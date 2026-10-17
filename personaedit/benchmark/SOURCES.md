# Sources and attribution

- Basic personas: [bowen-upenn/PersonaMem-v3](https://huggingface.co/datasets/bowen-upenn/PersonaMem-v3), revision `7b00a090b35b7293e6efeeb19494207f32b5a9ee`. The upstream dataset is marked CC-BY-NC-4.0. Only cleaned basic profile information is used here; raw dialogue histories and medical records are not included.
- Images and original instructions: [PKU-YuanGroup/ImgEdit](https://github.com/PKU-YuanGroup/ImgEdit), revision `b79848168744c8db8389086d01fe3def1758aa45`, Basic/singleturn.
- Images and original instructions: [stepfun-ai/GEdit-Bench](https://huggingface.co/datasets/stepfun-ai/GEdit-Bench), revision `50766778e2a737474c7e9bdf84cdce82c3ea3f4f`, train/input_image.
- Images and original atomic sequences: [UCSC-VLAA/Complex-Edit](https://huggingface.co/datasets/UCSC-VLAA/Complex-Edit), revision `b0b8a81d740ae413d52572281a23dc975c4b4b91`, test_real/image.

Every task retains its sample ID, source revision and original instruction. Existing image bytes are preserved; identity references are derived crops. Consult the linked upstream sources for their respective terms; this repository does not relicense upstream images or data under a blanket software license.
