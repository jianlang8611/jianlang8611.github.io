window.PERSONAMIR_MOVIE_ATTRIBUTE_SCHEMA = {
  "schema": "personamir-movie-attribute-draft-v1",
  "version": "draft-v1",
  "updated_at": "2026-08-23T03:57:54.809Z",
  "domain": {
    "key": "movie",
    "zh": "电影"
  },
  "logical_subtypes": [
    {
      "key": "action",
      "zh": "动作",
      "source_genres": [
        "Action"
      ]
    },
    {
      "key": "comedy",
      "zh": "喜剧",
      "source_genres": [
        "Comedy"
      ]
    },
    {
      "key": "romance",
      "zh": "爱情",
      "source_genres": [
        "Romance"
      ]
    },
    {
      "key": "crime",
      "zh": "犯罪",
      "source_genres": [
        "Crime"
      ]
    },
    {
      "key": "horror",
      "zh": "恐怖",
      "source_genres": [
        "Horror"
      ]
    },
    {
      "key": "suspense",
      "zh": "悬疑惊悚",
      "source_genres": [
        "Mystery",
        "Thriller"
      ]
    },
    {
      "key": "animation",
      "zh": "动画",
      "source_genres": [
        "Animation"
      ]
    },
    {
      "key": "science_fiction",
      "zh": "科幻",
      "source_genres": [
        "Sci-Fi"
      ]
    },
    {
      "key": "documentary",
      "zh": "纪录片",
      "source_genres": [
        "Documentary"
      ]
    }
  ],
  "global_attributes": [
    {
      "id": "g-release-era",
      "key": "release_era",
      "zh": "上映年代",
      "cardinality": "single",
      "definition": "电影首次正式上映所处的年代区间。",
      "values": [
        {
          "value": "1990s",
          "zh": "1990年代"
        },
        {
          "value": "2010s",
          "zh": "2010年代"
        }
      ],
      "dialogue_example": "我最近更想看九十年代的电影。",
      "core": true,
      "evidence": "release_metadata",
      "deleted": false
    },
    {
      "id": "g-original-language",
      "key": "original_language",
      "zh": "原始语言",
      "cardinality": "single",
      "definition": "电影制作时采用的主要原始语言，不按配音版本判断。",
      "values": [
        {
          "value": "English",
          "zh": "英语"
        },
        {
          "value": "Mandarin Chinese",
          "zh": "普通话"
        }
      ],
      "dialogue_example": "我想看原声是普通话的电影。",
      "core": true,
      "evidence": "production_metadata",
      "deleted": false
    },
    {
      "id": "g-production-region",
      "key": "production_region",
      "zh": "制片地区",
      "cardinality": "multi_max_2",
      "definition": "承担主要制作责任的国家或地区，最多保留两个。",
      "values": [
        {
          "value": "United States",
          "zh": "美国"
        },
        {
          "value": "Mainland China",
          "zh": "中国大陆"
        }
      ],
      "dialogue_example": "这次想找中国大陆制作的电影。",
      "core": true,
      "evidence": "production_metadata",
      "deleted": false
    },
    {
      "id": "g-runtime-class",
      "key": "runtime_class",
      "zh": "片长等级",
      "cardinality": "single",
      "definition": "以统一分钟区间归一化的电影时长等级。",
      "values": [
        {
          "value": "Standard Length",
          "zh": "标准片长"
        },
        {
          "value": "Long",
          "zh": "长片"
        }
      ],
      "dialogue_example": "今晚时间够，长一点的电影也可以。",
      "core": true,
      "evidence": "runtime_metadata",
      "deleted": false
    },
    {
      "id": "g-content-rating",
      "key": "content_rating",
      "zh": "适龄等级",
      "cardinality": "single",
      "definition": "将来源地区的官方年龄分级映射到统一观看年龄层级。",
      "values": [
        {
          "value": "Family",
          "zh": "家庭适宜"
        },
        {
          "value": "Adults Only",
          "zh": "仅限成人"
        }
      ],
      "dialogue_example": "要和家里人一起看，分级别太高。",
      "core": true,
      "evidence": "certification_metadata",
      "deleted": false
    },
    {
      "id": "g-director",
      "key": "director",
      "zh": "导演",
      "cardinality": "multi_max_3",
      "definition": "电影正式署名的主要导演，底层使用稳定人物标识去重。",
      "values": [
        {
          "value": "Christopher Nolan",
          "zh": "克里斯托弗·诺兰"
        },
        {
          "value": "Greta Gerwig",
          "zh": "格蕾塔·葛韦格"
        }
      ],
      "dialogue_example": "我一直很喜欢诺兰导演的电影。",
      "core": true,
      "evidence": "credits_metadata",
      "deleted": false
    },
    {
      "id": "g-lead-cast",
      "key": "lead_cast",
      "zh": "主要演员",
      "cardinality": "multi_max_3",
      "definition": "电影正式演职员表中排序最靠前且承担主要角色的演员。",
      "values": [
        {
          "value": "Tom Hanks",
          "zh": "汤姆·汉克斯"
        },
        {
          "value": "Michelle Yeoh",
          "zh": "杨紫琼"
        }
      ],
      "dialogue_example": "有杨紫琼主演的话我会更愿意看。",
      "core": true,
      "evidence": "credits_metadata",
      "deleted": false
    },
    {
      "id": "g-source-material",
      "key": "source_material",
      "zh": "改编来源",
      "cardinality": "single",
      "definition": "电影故事最直接的创作来源；无可靠改编证据时不能自动判为原创。",
      "values": [
        {
          "value": "Original Screenplay",
          "zh": "原创剧本"
        },
        {
          "value": "Novel",
          "zh": "小说改编"
        }
      ],
      "dialogue_example": "我最近想看小说改编的电影。",
      "core": true,
      "evidence": "production_metadata",
      "deleted": false
    },
    {
      "id": "g-true-events",
      "key": "based_on_true_events",
      "zh": "基于真实事件",
      "cardinality": "single",
      "definition": "电影是否明确以真实人物或事件为叙事基础。",
      "values": [
        {
          "value": "Yes",
          "zh": "是"
        },
        {
          "value": "No",
          "zh": "否"
        }
      ],
      "dialogue_example": "这次想看基于真实事件的作品。",
      "core": true,
      "evidence": "synopsis_and_production_metadata",
      "deleted": false
    },
    {
      "id": "g-franchise-status",
      "key": "franchise_status",
      "zh": "系列属性",
      "cardinality": "single",
      "definition": "电影是独立作品还是已命名系列或共享宇宙的一部分。",
      "values": [
        {
          "value": "Standalone",
          "zh": "独立电影"
        },
        {
          "value": "Franchise Entry",
          "zh": "系列电影"
        }
      ],
      "dialogue_example": "我不想开新坑，找一部独立电影吧。",
      "core": false,
      "evidence": "collection_metadata",
      "deleted": false
    },
    {
      "id": "g-standalone-access",
      "key": "standalone_accessibility",
      "zh": "独立观看要求",
      "cardinality": "single",
      "definition": "理解本片是否依赖观看同系列前作。",
      "values": [
        {
          "value": "Self-Contained",
          "zh": "可独立观看"
        },
        {
          "value": "Prior Viewing Recommended",
          "zh": "建议先看前作"
        }
      ],
      "dialogue_example": "我没看过前作，希望这部能直接看懂。",
      "core": false,
      "evidence": "franchise_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-tone",
      "key": "tone",
      "zh": "整体基调",
      "cardinality": "multi_max_2",
      "definition": "电影在大部分观看过程中持续呈现的情绪与气质。",
      "values": [
        {
          "value": "Lighthearted",
          "zh": "轻松"
        },
        {
          "value": "Dark",
          "zh": "黑暗"
        }
      ],
      "dialogue_example": "最近状态一般，不想看基调太黑暗的。",
      "core": true,
      "evidence": "tag_genome_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-pace",
      "key": "pace",
      "zh": "叙事节奏",
      "cardinality": "single",
      "definition": "剧情推进和信息变化的总体速度。",
      "values": [
        {
          "value": "Slow",
          "zh": "慢节奏"
        },
        {
          "value": "Fast",
          "zh": "快节奏"
        }
      ],
      "dialogue_example": "今晚想看节奏快一点的。",
      "core": true,
      "evidence": "tag_genome_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-narrative-focus",
      "key": "narrative_focus",
      "zh": "叙事重心",
      "cardinality": "multi_max_2",
      "definition": "影片主要依靠人物、情节、对话或群像中的哪些元素推进。",
      "values": [
        {
          "value": "Character-Driven",
          "zh": "人物驱动"
        },
        {
          "value": "Plot-Driven",
          "zh": "情节驱动"
        }
      ],
      "dialogue_example": "我更喜欢人物驱动，而不是只靠事件推进。",
      "core": true,
      "evidence": "tag_genome_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-viewing-effort",
      "key": "viewing_effort",
      "zh": "观看理解负担",
      "cardinality": "single",
      "definition": "观众理解叙事结构和关键信息所需的注意力投入。",
      "values": [
        {
          "value": "Easy Watch",
          "zh": "轻松易懂"
        },
        {
          "value": "Demanding",
          "zh": "需要专注"
        }
      ],
      "dialogue_example": "今天不想烧脑，找一部轻松易懂的。",
      "core": true,
      "evidence": "tag_genome_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-content-intensity",
      "key": "content_intensity",
      "zh": "整体内容刺激强度",
      "cardinality": "single",
      "definition": "冲突、危险、压迫和成人内容共同形成的整体刺激程度，不替代具体安全属性。",
      "values": [
        {
          "value": "Low",
          "zh": "低"
        },
        {
          "value": "High",
          "zh": "高"
        }
      ],
      "dialogue_example": "今天想看刺激度低一点的。",
      "core": false,
      "evidence": "content_advisory_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-visual-style",
      "key": "visual_style",
      "zh": "视觉风格",
      "cardinality": "multi_max_2",
      "definition": "摄影、美术和后期共同形成的主要视觉表达方式。",
      "values": [
        {
          "value": "Realistic",
          "zh": "写实"
        },
        {
          "value": "Stylized",
          "zh": "风格化"
        }
      ],
      "dialogue_example": "我比较喜欢写实的画面，不要太风格化。",
      "core": true,
      "evidence": "tag_genome_and_visual_metadata",
      "deleted": false
    },
    {
      "id": "g-ending-tone",
      "key": "ending_tone",
      "zh": "结局基调",
      "cardinality": "single",
      "definition": "故事结束时留给观众的主要情绪方向。",
      "values": [
        {
          "value": "Uplifting",
          "zh": "振奋"
        },
        {
          "value": "Tragic",
          "zh": "悲剧"
        }
      ],
      "dialogue_example": "最近不想看悲剧结局。",
      "core": true,
      "evidence": "plot_and_tag_genome",
      "deleted": false
    },
    {
      "id": "g-central-theme",
      "key": "central_theme",
      "zh": "核心主题",
      "cardinality": "multi_max_3",
      "definition": "影片持续讨论的主要人类议题，而不是零散情节元素。",
      "values": [
        {
          "value": "Family",
          "zh": "家庭"
        },
        {
          "value": "Identity",
          "zh": "身份认同"
        }
      ],
      "dialogue_example": "我想找一部认真谈身份认同的电影。",
      "core": true,
      "evidence": "tag_genome_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-setting-period",
      "key": "setting_period",
      "zh": "故事时代",
      "cardinality": "multi_max_2",
      "definition": "故事主体发生的历史或未来时间范围。",
      "values": [
        {
          "value": "Contemporary",
          "zh": "当代"
        },
        {
          "value": "Future",
          "zh": "未来"
        }
      ],
      "dialogue_example": "我今天想看发生在未来的故事。",
      "core": false,
      "evidence": "synopsis_and_keywords",
      "deleted": false
    },
    {
      "id": "g-setting-environment",
      "key": "setting_environment",
      "zh": "故事环境",
      "cardinality": "multi_max_2",
      "definition": "大部分故事发生的主要空间环境。",
      "values": [
        {
          "value": "Urban",
          "zh": "城市"
        },
        {
          "value": "Rural",
          "zh": "乡村"
        }
      ],
      "dialogue_example": "想看城市背景的电影。",
      "core": false,
      "evidence": "synopsis_and_keywords",
      "deleted": false
    },
    {
      "id": "g-content-warning",
      "key": "content_warning",
      "zh": "内容警示",
      "cardinality": "multi_max_3",
      "definition": "对观看决定具有实质影响的明确敏感内容类型。",
      "values": [
        {
          "value": "Violence",
          "zh": "暴力"
        },
        {
          "value": "Sexual Content",
          "zh": "性内容"
        }
      ],
      "dialogue_example": "帮我避开有明显性内容的电影。",
      "core": false,
      "evidence": "content_advisory",
      "deleted": false
    },
    {
      "id": "g-viewing-companion",
      "key": "viewing_companion",
      "zh": "适合共同观看对象",
      "cardinality": "multi_max_2",
      "definition": "根据内容、分级和情绪体验，最自然的共同观看关系。",
      "values": [
        {
          "value": "Family",
          "zh": "家人"
        },
        {
          "value": "Partner",
          "zh": "伴侣"
        }
      ],
      "dialogue_example": "找一部适合和伴侣一起看的。",
      "core": false,
      "evidence": "rating_tone_and_content",
      "deleted": false
    },
    {
      "id": "g-streaming-platform",
      "key": "streaming_platform",
      "zh": "流媒体平台",
      "cardinality": "multi_max_5",
      "definition": "在指定地区和核验日期可合法观看本片的平台。",
      "values": [
        {
          "value": "Netflix",
          "zh": "奈飞"
        },
        {
          "value": "Amazon Prime Video",
          "zh": "亚马逊Prime Video"
        }
      ],
      "dialogue_example": "最好是奈飞现在能直接看的。",
      "core": true,
      "evidence": "dated_availability_metadata",
      "deleted": false
    },
    {
      "id": "g-video-quality",
      "key": "video_quality",
      "zh": "最高可用画质",
      "cardinality": "single",
      "definition": "当前可用数字播放版本中最高的分辨率等级。",
      "values": [
        {
          "value": "HD",
          "zh": "高清"
        },
        {
          "value": "4K",
          "zh": "超高清4K"
        }
      ],
      "dialogue_example": "家里电视比较大，最好有4K版本。",
      "core": true,
      "evidence": "dated_offer_metadata",
      "deleted": false
    },
    {
      "id": "g-presentation-dimension",
      "key": "presentation_dimension",
      "zh": "影像维度",
      "cardinality": "multi_max_2",
      "definition": "电影正式发行过的平面或立体观看版本，不表示动画制作技术。",
      "values": [
        {
          "value": "2D",
          "zh": "二维"
        },
        {
          "value": "3D",
          "zh": "立体"
        }
      ],
      "dialogue_example": "这次想找真正发行过3D版本的电影。",
      "core": true,
      "evidence": "release_format_metadata",
      "deleted": false
    },
    {
      "id": "g-gore-level",
      "key": "gore_level",
      "zh": "血腥程度",
      "cardinality": "single",
      "definition": "画面中可见血液、伤口、肢解或人体损伤的明确程度。",
      "values": [
        {
          "value": "None",
          "zh": "无"
        },
        {
          "value": "Graphic",
          "zh": "明显血腥"
        }
      ],
      "dialogue_example": "我可以看打斗，但不要有明显血腥镜头。",
      "core": true,
      "evidence": "content_advisory_and_visual_review",
      "deleted": false
    },
    {
      "id": "g-violence-level",
      "key": "violence_level",
      "zh": "暴力强度",
      "cardinality": "single",
      "definition": "身体冲突、伤害威胁和暴力行为的整体强度，与血腥程度独立。",
      "values": [
        {
          "value": "Low",
          "zh": "低"
        },
        {
          "value": "High",
          "zh": "高"
        }
      ],
      "dialogue_example": "想找暴力程度低一点的。",
      "core": true,
      "evidence": "content_advisory_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-color-format",
      "key": "color_format",
      "zh": "画面色彩形式",
      "cardinality": "single",
      "definition": "电影主体使用彩色、黑白或二者混合的形式。",
      "values": [
        {
          "value": "Color",
          "zh": "彩色"
        },
        {
          "value": "Black and White",
          "zh": "黑白"
        }
      ],
      "dialogue_example": "我最近想认真看一部黑白电影。",
      "core": false,
      "evidence": "technical_metadata_and_visual_review",
      "deleted": false
    },
    {
      "id": "g-ending-closure",
      "key": "ending_closure",
      "zh": "结局封闭程度",
      "cardinality": "single",
      "definition": "电影是否明确解决主要问题，或有意保留未解释空间。",
      "values": [
        {
          "value": "Closed",
          "zh": "明确结局"
        },
        {
          "value": "Open",
          "zh": "开放结局"
        }
      ],
      "dialogue_example": "我不太喜欢开放式结局。",
      "core": true,
      "evidence": "plot_and_tag_genome",
      "deleted": false
    },
    {
      "id": "g-emotional-intensity",
      "key": "emotional_intensity",
      "zh": "情绪强度",
      "cardinality": "single",
      "definition": "电影要求观众承受或投入的整体情绪重量。",
      "values": [
        {
          "value": "Light",
          "zh": "轻"
        },
        {
          "value": "Heavy",
          "zh": "沉重"
        }
      ],
      "dialogue_example": "今天只想看情绪负担轻一点的。",
      "core": true,
      "evidence": "tag_genome_and_synopsis",
      "deleted": false
    },
    {
      "id": "g-soundtrack-prominence",
      "key": "soundtrack_prominence",
      "zh": "配乐突出程度",
      "cardinality": "single",
      "definition": "音乐在观看体验和叙事表达中的显著程度。",
      "values": [
        {
          "value": "Background",
          "zh": "背景性"
        },
        {
          "value": "Prominent",
          "zh": "突出"
        }
      ],
      "dialogue_example": "我想看一部配乐特别突出的电影。",
      "core": false,
      "evidence": "tag_genome_and_soundtrack_metadata",
      "deleted": false
    },
    {
      "id": "g-sexual-content",
      "key": "sexual_content_level",
      "zh": "性内容程度",
      "cardinality": "single",
      "definition": "性行为、裸露和明确性暗示对观看体验的影响程度。",
      "values": [
        {
          "value": "None",
          "zh": "无"
        },
        {
          "value": "Explicit",
          "zh": "明显"
        }
      ],
      "dialogue_example": "和家人看，最好没有明显性内容。",
      "core": true,
      "evidence": "content_advisory",
      "deleted": false
    },
    {
      "id": "g-audio-format",
      "key": "audio_format",
      "zh": "最高可用音频格式",
      "cardinality": "multi_max_2",
      "definition": "当前正式数字版本能够提供的主要高阶声音格式。",
      "values": [
        {
          "value": "Stereo",
          "zh": "立体声"
        },
        {
          "value": "Dolby Atmos",
          "zh": "杜比全景声"
        }
      ],
      "dialogue_example": "我想找支持杜比全景声的电影。",
      "core": false,
      "evidence": "dated_offer_metadata",
      "deleted": false
    },
    {
      "id": "g-streaming-access",
      "key": "streaming_access_type",
      "zh": "流媒体获取方式",
      "cardinality": "multi_max_2",
      "definition": "在核验地区通过订阅、租赁或购买获得影片的方式。",
      "values": [
        {
          "value": "Subscription",
          "zh": "订阅内观看"
        },
        {
          "value": "Rental",
          "zh": "单片租赁"
        }
      ],
      "dialogue_example": "最好是订阅里直接能看，不想另外租。",
      "core": false,
      "evidence": "dated_availability_metadata",
      "deleted": false
    }
  ],
  "subtypes": [
    {
      "key": "action",
      "zh": "动作",
      "source_genres": [
        "Action"
      ],
      "attributes": [
        {
          "id": "a-action-type",
          "key": "action_type",
          "zh": "动作类型",
          "cardinality": "multi_max_2",
          "definition": "影片最主要的动作场面类别。",
          "values": [
            {
              "value": "Martial Arts",
              "zh": "武术格斗"
            },
            {
              "value": "Gun Combat",
              "zh": "枪战"
            }
          ],
          "dialogue_example": "我想看武打片，不想看枪战片。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-action-scale",
          "key": "action_scale",
          "zh": "动作场面规模",
          "cardinality": "single",
          "definition": "动作场面从局部冲突到大型奇观的总体规模。",
          "values": [
            {
              "value": "Localized",
              "zh": "局部规模"
            },
            {
              "value": "Large-Scale",
              "zh": "大规模"
            }
          ],
          "dialogue_example": "今晚想看大场面的动作电影。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-action-realism",
          "key": "action_realism",
          "zh": "动作写实程度",
          "cardinality": "single",
          "definition": "动作能力和物理后果接近现实还是高度夸张。",
          "values": [
            {
              "value": "Grounded",
              "zh": "写实"
            },
            {
              "value": "Exaggerated",
              "zh": "夸张"
            }
          ],
          "dialogue_example": "不要超能力，我想看写实一点的动作。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-action-density",
          "key": "action_density",
          "zh": "动作戏密度",
          "cardinality": "single",
          "definition": "动作段落在整部电影中的出现频率。",
          "values": [
            {
              "value": "Occasional",
              "zh": "较少"
            },
            {
              "value": "Frequent",
              "zh": "频繁"
            }
          ],
          "dialogue_example": "希望动作戏多一点，不要一直铺垫。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-stakes-scope",
          "key": "stakes_scope",
          "zh": "危机影响范围",
          "cardinality": "single",
          "definition": "核心冲突主要影响个人关系还是更广泛群体。",
          "values": [
            {
              "value": "Personal",
              "zh": "个人"
            },
            {
              "value": "Global",
              "zh": "全球"
            }
          ],
          "dialogue_example": "我想看个人层面的危机，不要拯救世界。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-protagonist-profile",
          "key": "protagonist_profile",
          "zh": "动作主角能力背景",
          "cardinality": "single",
          "definition": "主角进入冲突前是普通人还是受过专业训练的行动者。",
          "values": [
            {
              "value": "Ordinary Person",
              "zh": "普通人"
            },
            {
              "value": "Trained Operative",
              "zh": "专业行动人员"
            }
          ],
          "dialogue_example": "我更想看普通人被迫反击的故事。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-team-structure",
          "key": "team_structure",
          "zh": "行动团队结构",
          "cardinality": "single",
          "definition": "主要行动由单人还是协作团队完成。",
          "values": [
            {
              "value": "Lone Protagonist",
              "zh": "单人行动"
            },
            {
              "value": "Team-Based",
              "zh": "团队行动"
            }
          ],
          "dialogue_example": "我喜欢团队配合的动作片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-tactical-depth",
          "key": "tactical_depth",
          "zh": "战术规划程度",
          "cardinality": "single",
          "definition": "行动是否依赖明确计划、资源分配和协作策略。",
          "values": [
            {
              "value": "Direct",
              "zh": "直接行动"
            },
            {
              "value": "Strategy-Heavy",
              "zh": "重战术规划"
            }
          ],
          "dialogue_example": "想看有战术规划的，不要只靠硬打。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-stunt-style",
          "key": "stunt_style",
          "zh": "动作特技风格",
          "cardinality": "single",
          "definition": "主要动作奇观更依赖实拍特技还是数字效果。",
          "values": [
            {
              "value": "Practical",
              "zh": "实拍特技为主"
            },
            {
              "value": "Effects-Heavy",
              "zh": "数字特效为主"
            }
          ],
          "dialogue_example": "我更喜欢能看出实拍质感的动作戏。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "a-survival-pressure",
          "key": "survival_pressure",
          "zh": "生存压力",
          "cardinality": "single",
          "definition": "角色在动作冲突中持续面临死亡或资源耗尽的程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "Extreme",
              "zh": "极高"
            }
          ],
          "dialogue_example": "想看生存压力很强的动作片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "comedy",
      "zh": "喜剧",
      "source_genres": [
        "Comedy"
      ],
      "attributes": [
        {
          "id": "c-humor-style",
          "key": "humor_style",
          "zh": "幽默类型",
          "cardinality": "multi_max_2",
          "definition": "影片制造笑料时主要采用的幽默机制。",
          "values": [
            {
              "value": "Deadpan",
              "zh": "冷面幽默"
            },
            {
              "value": "Satire",
              "zh": "讽刺"
            }
          ],
          "dialogue_example": "我喜欢冷幽默和讽刺喜剧。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-humor-intensity",
          "key": "humor_intensity",
          "zh": "喜剧强度",
          "cardinality": "single",
          "definition": "幽默是轻微调剂还是持续主导观看体验。",
          "values": [
            {
              "value": "Light",
              "zh": "轻度幽默"
            },
            {
              "value": "Laugh-Focused",
              "zh": "强喜剧性"
            }
          ],
          "dialogue_example": "我想看真正好笑的，不只是略带幽默。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-humor-maturity",
          "key": "humor_maturity",
          "zh": "幽默成人程度",
          "cardinality": "single",
          "definition": "笑料是否依赖粗俗、性暗示或成人生活经验。",
          "values": [
            {
              "value": "Family-Friendly",
              "zh": "家庭友好"
            },
            {
              "value": "Adult",
              "zh": "成人向"
            }
          ],
          "dialogue_example": "不要低俗笑话，最好全家都能看。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-comedic-focus",
          "key": "comedic_focus",
          "zh": "喜剧焦点",
          "cardinality": "single",
          "definition": "笑料主要来自人物性格还是具体情境。",
          "values": [
            {
              "value": "Character-Based",
              "zh": "人物喜剧"
            },
            {
              "value": "Situation-Based",
              "zh": "情境喜剧"
            }
          ],
          "dialogue_example": "我更喜欢人物性格产生的笑料。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-absurdity",
          "key": "absurdity_level",
          "zh": "荒诞程度",
          "cardinality": "single",
          "definition": "喜剧世界是否遵循日常现实逻辑。",
          "values": [
            {
              "value": "Grounded",
              "zh": "贴近现实"
            },
            {
              "value": "Absurd",
              "zh": "高度荒诞"
            }
          ],
          "dialogue_example": "今天想看荒诞一点的喜剧。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-satire",
          "key": "satire_level",
          "zh": "讽刺程度",
          "cardinality": "single",
          "definition": "影片借幽默批评社会、制度或文化的强度。",
          "values": [
            {
              "value": "Minimal",
              "zh": "很少"
            },
            {
              "value": "Central",
              "zh": "核心"
            }
          ],
          "dialogue_example": "我想看讽刺意味更强的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-cringe",
          "key": "cringe_level",
          "zh": "尴尬喜剧程度",
          "cardinality": "single",
          "definition": "笑料依赖社交失误和替角色尴尬的程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "我不太能接受一直让人脚趾抓地的喜剧。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-physical",
          "key": "physical_comedy_level",
          "zh": "肢体喜剧程度",
          "cardinality": "single",
          "definition": "跌撞、动作和视觉笑料在喜剧中的占比。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "想看肢体喜剧多一点的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-verbal",
          "key": "verbal_humor_level",
          "zh": "语言幽默程度",
          "cardinality": "single",
          "definition": "笑料依赖对白、双关和语言节奏的程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "我喜欢靠对白和文字梗制造笑点的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "c-parody",
          "key": "parody_level",
          "zh": "戏仿程度",
          "cardinality": "single",
          "definition": "影片是否持续模仿并解构既有类型或作品。",
          "values": [
            {
              "value": "Minimal",
              "zh": "很少"
            },
            {
              "value": "Central",
              "zh": "核心"
            }
          ],
          "dialogue_example": "想找一部认真戏仿经典类型片的喜剧。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "romance",
      "zh": "爱情",
      "source_genres": [
        "Romance"
      ],
      "attributes": [
        {
          "id": "r-prominence",
          "key": "romance_prominence",
          "zh": "爱情线占比",
          "cardinality": "single",
          "definition": "爱情关系是主叙事还是辅助支线。",
          "values": [
            {
              "value": "Subplot",
              "zh": "爱情副线"
            },
            {
              "value": "Central",
              "zh": "爱情主线"
            }
          ],
          "dialogue_example": "爱情只能是副线，不要纯爱情片。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-trope",
          "key": "relationship_trope",
          "zh": "感情关系模式",
          "cardinality": "multi_max_2",
          "definition": "推动主要爱情关系形成或变化的可识别关系模式。",
          "values": [
            {
              "value": "Friends to Lovers",
              "zh": "朋友变恋人"
            },
            {
              "value": "Second Chance",
              "zh": "旧情复燃"
            }
          ],
          "dialogue_example": "想看久别重逢或者朋友变恋人。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-stage",
          "key": "relationship_stage",
          "zh": "关系阶段",
          "cardinality": "multi_max_2",
          "definition": "影片重点描绘的亲密关系发展阶段。",
          "values": [
            {
              "value": "First Love",
              "zh": "初恋"
            },
            {
              "value": "Marriage",
              "zh": "婚姻关系"
            }
          ],
          "dialogue_example": "更想看婚后关系，而不是初恋。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-outcome",
          "key": "relationship_outcome",
          "zh": "感情结局",
          "cardinality": "single",
          "definition": "主要爱情关系在结局时的状态。",
          "values": [
            {
              "value": "Together",
              "zh": "最终在一起"
            },
            {
              "value": "Separated",
              "zh": "最终分开"
            }
          ],
          "dialogue_example": "我只想看最后能在一起的爱情片。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-configuration",
          "key": "relationship_configuration",
          "zh": "感情关系结构",
          "cardinality": "single",
          "definition": "主要感情冲突涉及单一伴侣关系还是多方竞争。",
          "values": [
            {
              "value": "Single Couple",
              "zh": "单一情侣"
            },
            {
              "value": "Love Triangle",
              "zh": "三角关系"
            }
          ],
          "dialogue_example": "不想看三角恋，想看一对一的关系。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-romantic-tone",
          "key": "romantic_tone",
          "zh": "爱情表达基调",
          "cardinality": "single",
          "definition": "爱情关系主要呈现温柔甜蜜还是强烈激情。",
          "values": [
            {
              "value": "Tender",
              "zh": "温柔"
            },
            {
              "value": "Passionate",
              "zh": "热烈"
            }
          ],
          "dialogue_example": "我想看温柔一点的爱情，不要太激烈。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-pacing",
          "key": "romantic_pacing",
          "zh": "感情发展速度",
          "cardinality": "single",
          "definition": "主要关系从相识到确认或变化的推进速度。",
          "values": [
            {
              "value": "Slow Burn",
              "zh": "慢热"
            },
            {
              "value": "Fast",
              "zh": "快速发展"
            }
          ],
          "dialogue_example": "我比较喜欢慢热型感情。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-realism",
          "key": "relationship_realism",
          "zh": "感情写实程度",
          "cardinality": "single",
          "definition": "关系互动接近日常现实还是明显理想化。",
          "values": [
            {
              "value": "Realistic",
              "zh": "写实"
            },
            {
              "value": "Idealized",
              "zh": "理想化"
            }
          ],
          "dialogue_example": "想看现实一点的感情，不要童话式爱情。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-conflict",
          "key": "relationship_conflict",
          "zh": "感情冲突来源",
          "cardinality": "multi_max_2",
          "definition": "阻碍主要关系发展的核心因素类别。",
          "values": [
            {
              "value": "Internal",
              "zh": "双方内部矛盾"
            },
            {
              "value": "External",
              "zh": "外部阻碍"
            }
          ],
          "dialogue_example": "我更想看两个人自身的问题，不是家族强行阻拦。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "r-commitment",
          "key": "commitment_focus",
          "zh": "承诺关系重点",
          "cardinality": "single",
          "definition": "爱情叙事关注短期约会还是长期承诺。",
          "values": [
            {
              "value": "Dating",
              "zh": "约会关系"
            },
            {
              "value": "Long-Term Commitment",
              "zh": "长期承诺"
            }
          ],
          "dialogue_example": "我想看围绕长期承诺展开的关系。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "crime",
      "zh": "犯罪",
      "source_genres": [
        "Crime"
      ],
      "attributes": [
        {
          "id": "cr-type",
          "key": "crime_type",
          "zh": "犯罪类型",
          "cardinality": "multi_max_2",
          "definition": "推动主线的主要犯罪行为类别。",
          "values": [
            {
              "value": "Heist",
              "zh": "抢劫"
            },
            {
              "value": "Organized Crime",
              "zh": "有组织犯罪"
            }
          ],
          "dialogue_example": "我想看抢劫或者有组织犯罪。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-perspective",
          "key": "crime_perspective",
          "zh": "犯罪叙事视角",
          "cardinality": "multi_max_2",
          "definition": "观众主要跟随执法者、罪犯、受害者或调查者中的哪一方。",
          "values": [
            {
              "value": "Criminal",
              "zh": "罪犯视角"
            },
            {
              "value": "Law Enforcement",
              "zh": "执法者视角"
            }
          ],
          "dialogue_example": "想从罪犯视角展开，不要警方视角。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-procedural",
          "key": "procedural_detail",
          "zh": "侦办过程详细度",
          "cardinality": "single",
          "definition": "调查、取证和案件推进过程被展示的详细程度。",
          "values": [
            {
              "value": "Light",
              "zh": "简略"
            },
            {
              "value": "Detailed",
              "zh": "详细"
            }
          ],
          "dialogue_example": "我喜欢有完整调查和取证过程的。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-scale",
          "key": "crime_scale",
          "zh": "犯罪组织规模",
          "cardinality": "single",
          "definition": "犯罪主体是个人、小团体还是大型组织。",
          "values": [
            {
              "value": "Individual",
              "zh": "个人犯罪"
            },
            {
              "value": "Organized",
              "zh": "组织犯罪"
            }
          ],
          "dialogue_example": "不要黑帮大片，想看个人犯罪案件。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-investigator",
          "key": "investigation_lead",
          "zh": "主要调查者",
          "cardinality": "single",
          "definition": "承担案件调查主线的角色身份。",
          "values": [
            {
              "value": "Police",
              "zh": "警察"
            },
            {
              "value": "Private Investigator",
              "zh": "私家侦探"
            }
          ],
          "dialogue_example": "我想看私家侦探查案的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-forensics",
          "key": "forensic_emphasis",
          "zh": "法证技术比重",
          "cardinality": "single",
          "definition": "破案是否明显依赖法医、实验室和物证分析。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "希望法证和物证分析多一点。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-planning",
          "key": "criminal_planning_depth",
          "zh": "犯罪策划复杂度",
          "cardinality": "single",
          "definition": "犯罪行为依赖临时冲动还是周密计划。",
          "values": [
            {
              "value": "Impulsive",
              "zh": "冲动型"
            },
            {
              "value": "Elaborate",
              "zh": "周密策划"
            }
          ],
          "dialogue_example": "我更喜欢看计划周密的犯罪故事。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-morality",
          "key": "moral_ambiguity",
          "zh": "道德灰度",
          "cardinality": "single",
          "definition": "影片对犯罪者和执法者的善恶界线是否保持明确。",
          "values": [
            {
              "value": "Clear",
              "zh": "善恶明确"
            },
            {
              "value": "Morally Gray",
              "zh": "道德灰色"
            }
          ],
          "dialogue_example": "我喜欢人物立场比较灰的犯罪片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-underworld",
          "key": "underworld_emphasis",
          "zh": "地下社会比重",
          "cardinality": "single",
          "definition": "影片对黑市、帮派和犯罪生态的持续描绘程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "我想看对地下犯罪生态描写多一点的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "cr-legal-process",
          "key": "legal_process_emphasis",
          "zh": "司法程序比重",
          "cardinality": "single",
          "definition": "逮捕后的审判、辩护和司法程序在叙事中的占比。",
          "values": [
            {
              "value": "Minimal",
              "zh": "很少"
            },
            {
              "value": "Central",
              "zh": "核心"
            }
          ],
          "dialogue_example": "我想看案件进入法庭后的部分。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "horror",
      "zh": "恐怖",
      "source_genres": [
        "Horror"
      ],
      "attributes": [
        {
          "id": "h-type",
          "key": "horror_type",
          "zh": "恐怖类型",
          "cardinality": "multi_max_2",
          "definition": "影片制造恐惧时依赖的核心恐怖传统。",
          "values": [
            {
              "value": "Psychological Horror",
              "zh": "心理恐怖"
            },
            {
              "value": "Supernatural Horror",
              "zh": "超自然恐怖"
            }
          ],
          "dialogue_example": "想看心理恐怖，不要鬼怪片。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-scare-style",
          "key": "scare_style",
          "zh": "惊吓方式",
          "cardinality": "multi_max_2",
          "definition": "影片主要通过突然刺激还是持续压迫制造恐惧。",
          "values": [
            {
              "value": "Jump Scares",
              "zh": "突然惊吓"
            },
            {
              "value": "Atmospheric Dread",
              "zh": "氛围压迫"
            }
          ],
          "dialogue_example": "我喜欢持续压迫感，不喜欢突然惊吓。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-fear-intensity",
          "key": "fear_intensity",
          "zh": "恐怖强度",
          "cardinality": "single",
          "definition": "影片预期带来的主观恐惧强度。",
          "values": [
            {
              "value": "Mild",
              "zh": "轻度"
            },
            {
              "value": "Extreme",
              "zh": "极强"
            }
          ],
          "dialogue_example": "可以有点恐怖，但不要太吓人。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-jump-scare",
          "key": "jump_scare_level",
          "zh": "突然惊吓频率",
          "cardinality": "single",
          "definition": "突然声画刺激在整部影片中的出现频率。",
          "values": [
            {
              "value": "Rare",
              "zh": "很少"
            },
            {
              "value": "Frequent",
              "zh": "频繁"
            }
          ],
          "dialogue_example": "不要频繁出现 jump scare。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-threat-source",
          "key": "threat_source",
          "zh": "恐怖威胁来源",
          "cardinality": "multi_max_2",
          "definition": "持续制造危险的主要实体或力量。",
          "values": [
            {
              "value": "Human",
              "zh": "人类"
            },
            {
              "value": "Supernatural",
              "zh": "超自然力量"
            }
          ],
          "dialogue_example": "我想看人造成的恐怖，不想看鬼。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-threat-visibility",
          "key": "threat_visibility",
          "zh": "威胁显露程度",
          "cardinality": "single",
          "definition": "恐怖来源长期隐藏还是频繁清晰出现。",
          "values": [
            {
              "value": "Mostly Hidden",
              "zh": "大多隐藏"
            },
            {
              "value": "Frequently Shown",
              "zh": "频繁显露"
            }
          ],
          "dialogue_example": "我更喜欢怪物一直不完全露面的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-isolation",
          "key": "isolation_level",
          "zh": "孤立无援程度",
          "cardinality": "single",
          "definition": "角色与外部帮助、社会和安全环境隔绝的程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "想看那种角色被困住、完全孤立无援的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-psych-pressure",
          "key": "psychological_pressure",
          "zh": "心理压迫程度",
          "cardinality": "single",
          "definition": "影片对精神失控、怀疑和持续焦虑的强调程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "我喜欢心理压迫强的恐怖片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-survival-focus",
          "key": "survival_focus",
          "zh": "生存求生比重",
          "cardinality": "single",
          "definition": "故事是否主要围绕角色逃脱和活下来展开。",
          "values": [
            {
              "value": "Secondary",
              "zh": "次要"
            },
            {
              "value": "Central",
              "zh": "核心"
            }
          ],
          "dialogue_example": "想看以逃生求存为核心的恐怖片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "h-threat-resolution",
          "key": "threat_resolution",
          "zh": "恐怖威胁结局",
          "cardinality": "single",
          "definition": "结局时主要威胁是否被明确消除。",
          "values": [
            {
              "value": "Resolved",
              "zh": "威胁解除"
            },
            {
              "value": "Persists",
              "zh": "威胁延续"
            }
          ],
          "dialogue_example": "我不喜欢最后威胁还存在的结局。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "suspense",
      "zh": "悬疑惊悚",
      "source_genres": [
        "Mystery",
        "Thriller"
      ],
      "attributes": [
        {
          "id": "s-type",
          "key": "suspense_type",
          "zh": "悬疑惊悚类型",
          "cardinality": "multi_max_2",
          "definition": "影片建立悬念时采用的主要题材语境。",
          "values": [
            {
              "value": "Psychological",
              "zh": "心理惊悚"
            },
            {
              "value": "Espionage",
              "zh": "谍战悬疑"
            }
          ],
          "dialogue_example": "想看心理惊悚或者谍战悬疑。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-structure",
          "key": "mystery_structure",
          "zh": "谜题结构",
          "cardinality": "multi_max_2",
          "definition": "观众需要追踪的主要未知问题和调查结构。",
          "values": [
            {
              "value": "Whodunit",
              "zh": "本格查凶"
            },
            {
              "value": "Conspiracy",
              "zh": "阴谋追查"
            }
          ],
          "dialogue_example": "喜欢本格破案，不想看阴谋论。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-tension",
          "key": "tension_pattern",
          "zh": "紧张感推进方式",
          "cardinality": "single",
          "definition": "紧张感是缓慢累积还是持续高压。",
          "values": [
            {
              "value": "Slow Burn",
              "zh": "缓慢升温"
            },
            {
              "value": "Relentless",
              "zh": "全程高压"
            }
          ],
          "dialogue_example": "想看慢慢升温的，不要全程紧绷。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-twist",
          "key": "twist_dependence",
          "zh": "反转依赖程度",
          "cardinality": "single",
          "definition": "影片效果依赖关键反转而非持续调查和人物发展的程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "不要完全依赖最后反转的电影。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-audience-knowledge",
          "key": "audience_knowledge",
          "zh": "观众信息位置",
          "cardinality": "single",
          "definition": "观众相对主角是同步发现信息还是提前知道危险。",
          "values": [
            {
              "value": "Aligned with Protagonist",
              "zh": "与主角同步"
            },
            {
              "value": "Audience Knows More",
              "zh": "观众知道更多"
            }
          ],
          "dialogue_example": "我喜欢和主角一起发现真相。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-clue-fairness",
          "key": "clue_fairness",
          "zh": "线索公平程度",
          "cardinality": "single",
          "definition": "关键答案所需线索是否在揭晓前向观众充分呈现。",
          "values": [
            {
              "value": "Fair-Play",
              "zh": "线索充分"
            },
            {
              "value": "Withheld",
              "zh": "关键信息隐藏"
            }
          ],
          "dialogue_example": "我喜欢观众也有机会推理出来的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-investigation-complexity",
          "key": "investigation_complexity",
          "zh": "调查复杂度",
          "cardinality": "single",
          "definition": "调查线索和嫌疑关系的层次数量。",
          "values": [
            {
              "value": "Straightforward",
              "zh": "直接"
            },
            {
              "value": "Layered",
              "zh": "多层复杂"
            }
          ],
          "dialogue_example": "我想看调查线索层层展开的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-time-pressure",
          "key": "time_pressure",
          "zh": "时间压力",
          "cardinality": "single",
          "definition": "角色是否在明确截止时间或迫近危险下行动。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "Constant",
              "zh": "持续倒计时"
            }
          ],
          "dialogue_example": "想看有持续时间压力的悬疑片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-cat-mouse",
          "key": "cat_and_mouse_focus",
          "zh": "猫鼠对抗比重",
          "cardinality": "single",
          "definition": "对手之间互相试探、追踪和反制的叙事比重。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "Central",
              "zh": "核心"
            }
          ],
          "dialogue_example": "我喜欢双方互相算计的猫鼠游戏。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "s-narrator",
          "key": "narrator_reliability",
          "zh": "叙述者可靠性",
          "cardinality": "single",
          "definition": "主要叙述视角提供的信息是否值得信任。",
          "values": [
            {
              "value": "Reliable",
              "zh": "可靠"
            },
            {
              "value": "Unreliable",
              "zh": "不可靠"
            }
          ],
          "dialogue_example": "我想看不可靠叙述者的悬疑片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "animation",
      "zh": "动画",
      "source_genres": [
        "Animation"
      ],
      "attributes": [
        {
          "id": "an-technique",
          "key": "animation_technique",
          "zh": "动画制作技术",
          "cardinality": "multi_max_2",
          "definition": "生成主体动画画面的主要制作技术，不表示立体放映。",
          "values": [
            {
              "value": "Hand-Drawn 2D",
              "zh": "二维手绘"
            },
            {
              "value": "3D CGI",
              "zh": "三维计算机动画"
            }
          ],
          "dialogue_example": "想看手绘动画，不要 CGI 动画。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-tradition",
          "key": "animation_tradition",
          "zh": "动画文化传统",
          "cardinality": "single",
          "definition": "作品在生产体系和视觉叙事上所属的主要动画传统。",
          "values": [
            {
              "value": "Japanese Anime",
              "zh": "日本动画"
            },
            {
              "value": "Western Animation",
              "zh": "欧美动画"
            }
          ],
          "dialogue_example": "最近想看日本动画。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-audience",
          "key": "animation_audience",
          "zh": "动画目标观众",
          "cardinality": "single",
          "definition": "作品在叙事复杂度和内容尺度上主要面向的年龄群体。",
          "values": [
            {
              "value": "Children",
              "zh": "儿童"
            },
            {
              "value": "Adults",
              "zh": "成人"
            }
          ],
          "dialogue_example": "想看成人动画，不要低幼动画。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-story-maturity",
          "key": "story_maturity",
          "zh": "动画叙事成熟度",
          "cardinality": "single",
          "definition": "故事议题和人物冲突是否需要成年生活经验理解。",
          "values": [
            {
              "value": "Youthful",
              "zh": "青少年向"
            },
            {
              "value": "Mature",
              "zh": "成熟向"
            }
          ],
          "dialogue_example": "我想看议题成熟一点的动画。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-world-focus",
          "key": "character_world",
          "zh": "角色世界构成",
          "cardinality": "single",
          "definition": "故事角色体系主要由人类还是拟人化非人角色构成。",
          "values": [
            {
              "value": "Human-Centered",
              "zh": "人类角色为主"
            },
            {
              "value": "Anthropomorphic",
              "zh": "拟人角色为主"
            }
          ],
          "dialogue_example": "我想看以拟人动物为主角的动画。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-visual-detail",
          "key": "visual_detail_level",
          "zh": "画面细节密度",
          "cardinality": "single",
          "definition": "背景、材质和角色绘制的视觉信息密度。",
          "values": [
            {
              "value": "Minimalist",
              "zh": "简约"
            },
            {
              "value": "Highly Detailed",
              "zh": "高细节"
            }
          ],
          "dialogue_example": "我喜欢画面细节特别丰富的动画。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-motion",
          "key": "motion_style",
          "zh": "动作表现流畅度",
          "cardinality": "single",
          "definition": "动画运动采用有限关键帧表达还是持续流畅运动。",
          "values": [
            {
              "value": "Limited",
              "zh": "有限动画"
            },
            {
              "value": "Fluid",
              "zh": "流畅动画"
            }
          ],
          "dialogue_example": "我更想看动作非常流畅的动画。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-narrative-style",
          "key": "animation_narrative_style",
          "zh": "动画叙事取向",
          "cardinality": "single",
          "definition": "动画主要呈现日常生活还是目标明确的冒险旅程。",
          "values": [
            {
              "value": "Slice of Life",
              "zh": "日常生活"
            },
            {
              "value": "Adventure",
              "zh": "冒险"
            }
          ],
          "dialogue_example": "最近想看日常系动画，不想看冒险。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-dialogue",
          "key": "dialogue_dependence",
          "zh": "对白依赖程度",
          "cardinality": "single",
          "definition": "理解故事是否高度依赖语言对白而非视觉行动。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "想看对白少、主要靠画面讲故事的动画。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "an-musical",
          "key": "musical_integration",
          "zh": "歌舞融入程度",
          "cardinality": "single",
          "definition": "角色演唱和音乐段落是否直接承担叙事功能。",
          "values": [
            {
              "value": "Minimal",
              "zh": "很少"
            },
            {
              "value": "Central",
              "zh": "核心"
            }
          ],
          "dialogue_example": "我想看歌舞段落多、音乐推动剧情的动画。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "science_fiction",
      "zh": "科幻",
      "source_genres": [
        "Sci-Fi"
      ],
      "attributes": [
        {
          "id": "sf-theme",
          "key": "science_fiction_theme",
          "zh": "科幻主题",
          "cardinality": "multi_max_3",
          "definition": "影片主要探索的科学或技术想象议题。",
          "values": [
            {
              "value": "Artificial Intelligence",
              "zh": "人工智能"
            },
            {
              "value": "Time Travel",
              "zh": "时间旅行"
            }
          ],
          "dialogue_example": "想看人工智能或时间旅行题材。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-grounding",
          "key": "scientific_grounding",
          "zh": "科学设定硬度",
          "cardinality": "single",
          "definition": "核心设定受现实科学约束和解释的程度。",
          "values": [
            {
              "value": "Hard Science Fiction",
              "zh": "硬科幻"
            },
            {
              "value": "Science Fantasy",
              "zh": "科学幻想"
            }
          ],
          "dialogue_example": "想看硬科幻，不要太玄幻。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-world-scope",
          "key": "world_scope",
          "zh": "科幻世界范围",
          "cardinality": "single",
          "definition": "故事主要活动范围处于单一地球环境还是跨星际空间。",
          "values": [
            {
              "value": "Earthbound",
              "zh": "地球范围"
            },
            {
              "value": "Interstellar",
              "zh": "星际范围"
            }
          ],
          "dialogue_example": "想看太空尺度的，不要局限在地球。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-outlook",
          "key": "future_outlook",
          "zh": "未来社会倾向",
          "cardinality": "single",
          "definition": "作品对未来社会总体呈现乐观可能还是压迫性失序。",
          "values": [
            {
              "value": "Optimistic",
              "zh": "乐观未来"
            },
            {
              "value": "Dystopian",
              "zh": "反乌托邦"
            }
          ],
          "dialogue_example": "不要反乌托邦，想看乐观未来。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-distance",
          "key": "speculative_distance",
          "zh": "未来距离",
          "cardinality": "single",
          "definition": "推想世界与当代现实之间的时间和技术距离。",
          "values": [
            {
              "value": "Near Future",
              "zh": "近未来"
            },
            {
              "value": "Far Future",
              "zh": "遥远未来"
            }
          ],
          "dialogue_example": "我更喜欢离现实很近的近未来设定。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-tech-centrality",
          "key": "technology_centrality",
          "zh": "技术议题中心度",
          "cardinality": "single",
          "definition": "新技术是故事背景还是直接驱动主要冲突。",
          "values": [
            {
              "value": "Background",
              "zh": "背景设定"
            },
            {
              "value": "Central",
              "zh": "核心冲突"
            }
          ],
          "dialogue_example": "我希望科技本身就是故事核心。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-worldbuilding",
          "key": "world_building_depth",
          "zh": "世界构建深度",
          "cardinality": "single",
          "definition": "作品对制度、科技和生活规则的展开程度。",
          "values": [
            {
              "value": "Light",
              "zh": "简略"
            },
            {
              "value": "Deep",
              "zh": "深入"
            }
          ],
          "dialogue_example": "想看世界观构建很完整的科幻片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-explanation",
          "key": "science_explanation_level",
          "zh": "科学解释密度",
          "cardinality": "single",
          "definition": "影片花费多少叙事篇幅解释技术原理和规则。",
          "values": [
            {
              "value": "Minimal",
              "zh": "很少解释"
            },
            {
              "value": "Detailed",
              "zh": "详细解释"
            }
          ],
          "dialogue_example": "我喜欢把科学设定解释清楚的电影。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-philosophy",
          "key": "philosophical_focus",
          "zh": "哲学思辨比重",
          "cardinality": "single",
          "definition": "影片是否持续借科幻设定讨论意识、人性或存在问题。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "我想看有哲学思辨的科幻，而不是只有特效。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "sf-balance",
          "key": "ideas_spectacle_balance",
          "zh": "思想与奇观倾向",
          "cardinality": "single",
          "definition": "观看重心更偏概念讨论还是视觉奇观。",
          "values": [
            {
              "value": "Idea-Driven",
              "zh": "思想驱动"
            },
            {
              "value": "Spectacle-Driven",
              "zh": "奇观驱动"
            }
          ],
          "dialogue_example": "这次想看思想驱动的科幻片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    },
    {
      "key": "documentary",
      "zh": "纪录片",
      "source_genres": [
        "Documentary"
      ],
      "attributes": [
        {
          "id": "d-subject",
          "key": "documentary_subject",
          "zh": "纪录主题",
          "cardinality": "multi_max_2",
          "definition": "纪录片持续观察或调查的主要现实领域。",
          "values": [
            {
              "value": "Nature",
              "zh": "自然"
            },
            {
              "value": "Science and Technology",
              "zh": "科学技术"
            }
          ],
          "dialogue_example": "想看自然或科学纪录片。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-mode",
          "key": "documentary_mode",
          "zh": "纪录方式",
          "cardinality": "multi_max_2",
          "definition": "影片组织现实材料和建立论述的主要方法。",
          "values": [
            {
              "value": "Observational",
              "zh": "观察式"
            },
            {
              "value": "Investigative",
              "zh": "调查式"
            }
          ],
          "dialogue_example": "喜欢调查式纪录片，不喜欢只做表面介绍。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-timeframe",
          "key": "subject_timeframe",
          "zh": "纪录内容时间范围",
          "cardinality": "single",
          "definition": "纪录内容主要回顾历史还是记录当代现实。",
          "values": [
            {
              "value": "Historical",
              "zh": "历史回顾"
            },
            {
              "value": "Contemporary",
              "zh": "当代记录"
            }
          ],
          "dialogue_example": "想看当代事件，不想看历史回顾。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-reenactment",
          "key": "reenactment_level",
          "zh": "情景重演程度",
          "cardinality": "single",
          "definition": "影片使用演员和布景重现真实事件的程度。",
          "values": [
            {
              "value": "None",
              "zh": "无重演"
            },
            {
              "value": "Extensive",
              "zh": "大量重演"
            }
          ],
          "dialogue_example": "不喜欢大量演员重演的纪录片。",
          "core": true,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-narrator",
          "key": "narrator_presence",
          "zh": "旁白主导程度",
          "cardinality": "single",
          "definition": "叙事是否依靠持续旁白解释和引导。",
          "values": [
            {
              "value": "Minimal",
              "zh": "很少旁白"
            },
            {
              "value": "Presenter-Led",
              "zh": "主持人或旁白主导"
            }
          ],
          "dialogue_example": "我喜欢旁白少、让素材自己说话的。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-interviews",
          "key": "interview_reliance",
          "zh": "访谈依赖程度",
          "cardinality": "single",
          "definition": "影片论述对受访者口述材料的依赖程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "不要整部片都只是坐着采访。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-archive",
          "key": "archival_footage_level",
          "zh": "历史影像比重",
          "cardinality": "single",
          "definition": "影片使用历史照片、录音和档案影像的程度。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "High",
              "zh": "高"
            }
          ],
          "dialogue_example": "我想看历史档案影像丰富的纪录片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-depth",
          "key": "investigative_depth",
          "zh": "调查深入程度",
          "cardinality": "single",
          "definition": "影片是否交叉核验来源并追踪事件背后的结构性原因。",
          "values": [
            {
              "value": "Overview",
              "zh": "概览"
            },
            {
              "value": "In-Depth",
              "zh": "深入调查"
            }
          ],
          "dialogue_example": "我想看真正深入调查的，不要概览式介绍。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-personal",
          "key": "personal_story_focus",
          "zh": "个人故事比重",
          "cardinality": "single",
          "definition": "影片是否主要通过少数具体个人经历呈现主题。",
          "values": [
            {
              "value": "Low",
              "zh": "低"
            },
            {
              "value": "Central",
              "zh": "核心"
            }
          ],
          "dialogue_example": "我喜欢从一个人的经历切入的大主题纪录片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        },
        {
          "id": "d-scope",
          "key": "geographic_scope",
          "zh": "纪录地域范围",
          "cardinality": "single",
          "definition": "纪录对象集中在单一地方还是跨越多个国家地区。",
          "values": [
            {
              "value": "Local",
              "zh": "地方性"
            },
            {
              "value": "Global",
              "zh": "全球性"
            }
          ],
          "dialogue_example": "这次想看聚焦一个地方的纪录片。",
          "core": false,
          "evidence": "metadata_and_content",
          "deleted": false
        }
      ]
    }
  ],
  "audit_metadata": {
    "source": "MovieLens 25M with planned TMDB/IMDb enrichment",
    "value_domain_status": "Two bilingual seed values per attribute for human review",
    "availability_requires": [
      "availability_region",
      "availability_checked_at"
    ]
  }
};
