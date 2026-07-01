---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

I am a first-year PhD student in a combined master's–PhD program in Software Engineering at the University of Electronic Science and Technology of China (UESTC), under the supervision of Prof [Fan Zhou](https://scholar.google.com/citations?user=Ihj2Rw8AAAAJ). Previously, I received Bachelor of Engineering degree from Fuzhou University. 

My research mainly focuses on <strong>Robust & Personalized Multimodal Intelligence</strong> for <strong>non-ideal</strong> and <strong>dynamic</strong> real-world environments. I am enthusiastic about designing multimodal systems that remain robust under <strong>(1) non-ideal inputs and environments</strong> (e.g., missing modalities, distribution shifts) and adaptive to <strong>(2) user-specific dynamics</strong> (e.g., MLLM personalization).
I am also interested in understanding, detecting, and moderating <strong>user-generated multimodal content and videos</strong> on online platforms, with a focus on improving the <strong>generalization, robustness, and interpretability</strong> of detection models in dynamic real-world scenarios, while leveraging MLLMs and intelligent agents.
  
Feel free to contact me if you have any questions about my research or potential collaboration opportunities.


# 🔥 News
- *2026.06*: &nbsp;🎉🎉 Get SIGKDD-supported KDD 2026 Student Travel Award!
- *2026.05*: &nbsp;💦💦 3 Paper are submitted to NeurIPS 2026. Hope a wonderful result.
- *2026.05*: &nbsp;🎉🎉 1 Paper is accepted by ICML 2026! See you in Seoul!
- *2026.04*: &nbsp;💦💦 We release the <strong>first comprehensive repository</strong> of resources on <strong>modality-missing learning</strong> at [awesome-modality-missing-learning
](https://github.com/Jian-Lang/awesome-modality-missing-learning).
- *2026.04*: &nbsp;🎉🎉 1 Paper is accepted by ACL 2026 Findings!
- *2026.02*: &nbsp;🎉🎉 1 Paper is accepted by TCSVT 2026. 
- *2026.02*: &nbsp;🎉🎉 1 Paper is accepted by CVPR 2026 Findings. 
- *2025.11*: &nbsp;🎉🎉 3 Papers are accepted by KDD 2026! See you in Jeju!
- *2025.10*: &nbsp;🎉🎉 Get Postgraduate National Scholarship again.



# 📝 Selected Publications (\*=Equal Contribution, †=Conresponding Author)

## 🛡 Robust Multimodal Learning

<div style="margin-top: 32px;"></div>

### 🧩 Robust Against Missing Modalities

<div class='paper-box'><div class='paper-box-image'><div class="badge">ICML 2026</div><img src='images/aoept.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[AOEPT: Breaking the Implicit Modality-Reduction Bottleneck in Modality Missing Prompt Tuning](https://arxiv.org/abs/2605.24816)

**Jian Lang**, Rongpei Hong, Ting Zhong, Fan Zhou†

**ICML 2026** \| **CCF A** \| [**PDF**](https://arxiv.org/pdf/2605.24816) \| [**Project**](https://jianlang.org/projects/aoept) \| [**Github**](https://github.com/Jian-Lang/AOEPT) 

- The **Implicit Modality-Reduction (IMR) bottleneck** in existing modality-missing prompt-tuning methods, and a new metric **Normalized Missing-modality Mutual Information (NM2I)** quantifies IMR.
- A minimalist **Modal-Contextualized Prompting** method (**AOEPT**) breaks IMR.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div class="badge">KDD 2025</div><img src='images/redeem.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[REDEEMing Modality Information Loss: Retrieval-Guided Conditional Generation for Severely Modality Missing Learning](https://dl.acm.org/doi/10.1145/3711896.3737101)

**Jian Lang**, Rongpei Hong, Zhangtao Cheng, Ting Zhong, Fan Zhou†

**KDD 2025** \| **CCF A** \| [**PDF**](/papers/REDEEM.pdf) \| [**Github**](https://github.com/Jian-Lang/REDEEM) 

- REDEEM, the extension work of our RAGPT.
- Proposing a **retrieval-guided conditional generation** paradigm for enhancing the **modality-missing robustness** of pre-trained Multimodal Transformer.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div class="badge">AAAI 2025</div><img src='images/ragpt.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Retrieval-Augmented Dynamic Prompt Tuning for Incomplete Multimodal Learning](https://doi.org/10.1609/aaai.v39i17.33984)

**Jian Lang**\*, Zhangtao Cheng\*, Ting Zhong, Fan Zhou†

**AAAI 2025** \| **CCF A** \| [**PDF**](/papers/RAGPT.pdf) \| [**Github**](https://github.com/Jian-Lang/RAGPT) \|
[![](https://img.shields.io/github/stars/Jian-Lang/RAGPT?style=social&label=RAGPT%20Stars)](https://github.com/Jian-Lang/RAGPT) 


- RAGPT, a novel **retrieval-augmented dynamic prompt-tuning** framework for enhancing the **modality-missing robustness** of pre-trained Multimodal Transformer.
</div>
</div>

<div style="margin-top: 32px;"></div>

### ⚓ Robust Against Domain (Distribution) Shift

<div class='paper-box'><div class='paper-box-image'><div class="badge">KDD 2026</div><img src='images/radar.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Nip Rumors in the Bud: Retrieval-Guided Topic-Level Adaptation for Test-Time Fake News Video Detection](https://arxiv.org/abs/2601.11981)

**Jian Lang**, Rongpei Hong, Ting Zhong, Yong Wang, Fan Zhou†

**KDD 2026** \| **CCF A** \| [**PDF**](https://arxiv.org/pdf/2601.11981) \| [**Github**](https://github.com/Jian-Lang/RADAR) 

- RADAR, the first work to achieves the **test-time adaptation** of the Fake News Video Detection, 
- Enabling fast adaptation to evolving news videos with **shifting topic-level distributions** in the dynamic world.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div class="badge">AAAI 2026</div><img src='images/scanner.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Shedding the Facades, Connecting the Domains: Detecting Shifting Multimodal Hate Video with Test-Time Adaptation](https://www.arxiv.org/abs/2602.00132)

Jiao Li, **Jian Lang**, Xikai Tang†, Ting Zhong, Fan Zhou

**AAAI 2026** \| **CCF A** \| [**PDF**](https://www.arxiv.org/abs/2602.00132) \| [**Github**](https://github.com/Jolieresearch/SCANNER) \| <span style="color:red;"><strong>Oral</strong></span>

- SCANNER, the first **test-time adaptation** framework tailored for distribution shifting hate video detection.
</div>
</div>

<div style="margin-top: 32px;"></div>


### 🪙 Robust Against Data / Label Scarcity

<div class='paper-box'><div class='paper-box-image'><div class="badge">KDD 2026</div><img src='images/alarm.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[From Shallow Humor to Metaphor: Towards Label-Free Harmful Meme Detection via LMM Agent Self-Improvement](https://www.arxiv.org/abs/2512.21598) 

**Jian Lang**, Rongpei Hong, Ting Zhong, Leiting Chen, Qiang Gao, Fan Zhou†


**KDD 2026** \| **CCF A** \| [**PDF**](https://www.arxiv.org/abs/2512.21598) \| [**Github**](https://github.com/Jian-Lang/ALARM) \| <span style="color:red;"><strong>Oral</strong></span>

- ALARM, the first **label-free** harmful meme detection framework powered by LMM self-improvement
- Enabling **prompt and robust adaptation** to **evolving topics and themes** of harmful web memes.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'> <div class="badge">ICCV 2025</div><img src='images/crave.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">
[Borrowing Eyes for the Blind Spot: Overcoming Data Scarcity in Malicious Video Detection via Cross-Domain Retrieval Augmentation](https://openaccess.thecvf.com/content/ICCV2025/html/Hong_Borrowing_Eyes_for_the_Blind_Spot_Overcoming_Data_Scarcity_in_ICCV_2025_paper.html)

Rongpei Hong\*, **Jian Lang**\*, Ting Zhong, Fan Zhou†

**ICCV 2025** \| **CCF A** \| [**PDF**](/papers/CRAVE.pdf) \| [**Github**](https://github.com/ronpay/CRAVE)

- CRAVE, a novel **cross-domain retrieval augmentation** framework that transfers knowledge from resource-rich image-text domain to enhance malicious video detection with scarce training data.
</div>
</div>

<div style="margin-top: 32px;"></div>


## 🧑‍🦱 Personalized Multimodal Learning

<div style="margin-top: 32px;"></div>

### 🧏 MLLM Personalized Understanding

<div class='paper-box'><div class='paper-box-image'><div class="badge">KDD 2026</div><img src='images/tame.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[TAMEing Long Contexts in Personalization: Towards Training-Free and State-Aware MLLM Personalized Assistant](https://www.arxiv.org/abs/2512.21616)

Rongpei Hong, **Jian Lang**, Ting Zhong†, Yong Wang, Fan Zhou

**KDD 2026** \| **CCF A** \| [**PDF**](https://www.arxiv.org/pdf/2512.21616) \| [**Github**](https://github.com/ronpay/TAME) 

- TAME, the first training-free and **state-aware** personalized Multimodal Large Multimodal Model assistant powered by double memories.
</div>
</div>

<div style="margin-top: 32px;"></div>

## 🎥 Video Analysis & Detection

<div class='paper-box'><div class='paper-box-image'> <div class="badge">ACL 2026</div><img src='images/leaf.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[LEAF: Towards Lightweight Explainable Hateful Video Detection via Self-Grounding CoT Guided Stage-Wise Distillation]()

**Jian Lang**, Rongpei Hong, Meihui Zhong, Kaiju Li, Ting Zhong, Qiang Gao, Fan Zhou† 

**ACL 2026 Findings** \| [**PDF**](/papers/LEAF.pdf) \| [**Github**](https://github.com/Jian-Lang/LEAF) 

- LEAF, the first lightweight while explainable hateful video detection framework powered by SG-CoT guided MLLM distillation.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'> <div class="badge">TCSVT 2026</div><img src='images/match.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[MATCH: Multi-Agentic Evidence Grounding for Explainable Hate Video Detection](https://jianlang.org/papers/MATCH.pdf)

Kaiju Li, Rongpei Hong, **Jian Lang**, Jin Wu†, Fan Zhou†, Jingkuan Song


**TCSVT 2026** \| **CAS Q1 Top** \| [**PDF**](/papers/MATCH.pdf) 

- MATCH, a novel multiple LMM agent collaboration framework for interpretable hate video detection.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'> <div class="badge">WWW 2025</div><img src='images/more.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Biting Off More Than You Can Detect: Retrieval-Augmented Multimodal Experts for Short Video Hate Detection](https://dl.acm.org/doi/10.1145/3696410.3714560)

**Jian Lang**, Rongpei Hong, Jin Xu, Xovee Xu, Yili Li, Fan Zhou†


**WWW 2025** \| **CCF A** \| [**PDF**](/papers/MoRE.pdf) \| [**Github**](https://github.com/Jian-Lang/MoRE) 

- MoRE, a novel **mixture of retrieval-augmented multimodal experts** framework to enhance hate video detection.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div class="badge">WWW 2025</div><img src='images/exmrd.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Following Clues, Approaching the Truth: Explainable Micro-Video Rumor Detection via Chain-of-Thought Reasoning](https://dl.acm.org/doi/10.1145/3696410.3714559)

Rongpei Hong, **Jian Lang**, Jin Xu, Zhangtao Cheng, Ting Zhong†, Fan Zhou

**WWW 2025** \| **CCF A** \| [**PDF**](/papers/ExMRD.pdf) \| [**Github**](https://github.com/ronpay/ExMRD) 

- ExMRD, the first **explainable fake news video detection** framework powered by the Chain-of-Thought Reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div class="badge">ICME 2025</div><img src='images/real.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[REAL: Retrieval-Augmented Prototype Alignment for Improved Fake News Video Detection](https://doi.org/10.1109/ICME59968.2025.11209008)

Yili Li, **Jian Lang**, Rongpei Hong, Qing Chen, Zhangtao Cheng, Jia Chen, Ting Zhong, Fan Zhou†

**ICME 2025** \| **CCF B** \| [**PDF**](/papers/REAL.pdf) \| [**Github**](https://github.com/Jian-Lang/REAL) \| [![](https://img.shields.io/github/stars/Jian-Lang/REAL?style=social&label=REAL%20Stars)](https://github.com/Jian-Lang/REAL)

- REAL, a novel model-agnostic framework that generates **manipulation-aware representations** to enhance existing methods in detecting fake news videos with only subtle modifications to the original authentic ones.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div class="badge">SIGIR 2024</div><img src='images/mmra.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

[Predicting Micro-video Popularity via Multi-modal Retrieval Augmentation](https://dl.acm.org/doi/10.1145/3626772.3657929)

Ting Zhong, **Jian Lang**, Yifan Zhang, Zhangtao Cheng, Kunpeng Zhang, Fan Zhou†

**SIGIR 2024 Short** \| [**PDF**](/papers/MMRA.pdf) \|  [**Github**](https://github.com/ICDM-UESTC/MMRA) \|
[![](https://img.shields.io/github/stars/ICDM-UESTC/MMRA?style=social&label=MMRA%20Stars)](https://github.com/ICDM-UESTC/MMRA)


- MMRA, a **multi-modal retrieval-augmented popularity prediction** model that enhances prediction accuracy using relevant retrieved information.
</div>
</div>


# 🎖 Honors and Awards
- *2026.06* KDD 2026 Student Travel Award
- *2025.10* National Scholarship (Top 1%)
- *2025.10* Master's Student Academic Scholarship (1st Division, Ranked 1st)
- *2024.10* National Scholarship (Top 1%)
- *2024.10* Master's Student Academic Scholarship (1st Division, Ranked 1st)
- *2023.12* Artificial Intelligence Algorithm Challenge Runner-up (2nd), hosted by People's Daily Online


# 📖 Educations
- *2023.09 -*, PhD Student, University of Electronic Science and Technology of China
- *2019.09 - 2023.06*, Undergraduate, Fuzhou University


# 📝 Peer Review

<!-- ## Conference Review -->
- **Conference Review**: NeurIPS 2026 Reviewer, KDD 2026 Reviewer, ICML 2026 (Emergency) Reviewer, AAAI 2026 Reviewer

<!-- ## Journal Review -->
- **Journal Review**: IJCV Reviewer, TPAMI Reviewer, TCSVT Reviewer, KBS Reviewer, ESWA Reviewer


# 💻 Internships
- *2022.03 - 2022.06*, [Ruijie Networks](https://www.ruijie.com.cn/), Software Development Intern.
