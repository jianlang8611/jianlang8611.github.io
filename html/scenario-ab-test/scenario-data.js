window.SCENARIO_AB_DATA = {
  "schemaVersion": "1.1",
  "datasetId": "manual-v1__fashion-v10-20260805__paired-v2",
  "sources": {
    "A": "benchmark/dialogue_template/scenario/manual-v1",
    "B": "benchmark/dialogue_template/scenario/versions/fashion_v10_stable_preference_usable_20260805"
  },
  "counts": {
    "attributeGroups": 91,
    "comparisonsPerRound": 161,
    "productBound": 70,
    "nonProduct": 21,
    "excluded": 19
  },
  "excluded": [
    {
      "binding": "product_bound",
      "category": "tops",
      "attribute": "item_type",
      "aCount": 10,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "item_type",
      "aCount": 10,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "base_item_type",
      "aCount": 0,
      "bCount": 10,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "item_type",
      "aCount": 10,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "bags",
      "attribute": "item_type",
      "aCount": 10,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "bags",
      "attribute": "special_feature",
      "aCount": 0,
      "bCount": 10,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "item_type",
      "aCount": 10,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "item_type",
      "aCount": 10,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "polarization",
      "aCount": 0,
      "bCount": 10,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "tops",
      "attribute": "occasion",
      "aCount": 5,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "bottom",
      "attribute": "occasion",
      "aCount": 5,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "shoes",
      "attribute": "occasion",
      "aCount": 5,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "bags",
      "attribute": "occasion",
      "aCount": 5,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "bags",
      "attribute": "special_feature",
      "aCount": 0,
      "bCount": 10,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "jewelry",
      "attribute": "occasion",
      "aCount": 5,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "glasses",
      "attribute": "occasion",
      "aCount": 5,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "glasses",
      "attribute": "polarization",
      "aCount": 0,
      "bCount": 10,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "shared",
      "attribute": "price",
      "aCount": 5,
      "bCount": 0,
      "reason": "missing_comparable_scenarios"
    },
    {
      "binding": "non_product",
      "category": "shared",
      "attribute": "occasion",
      "aCount": 0,
      "bCount": 10,
      "reason": "missing_comparable_scenarios"
    }
  ],
  "questions": [
    {
      "id": "product_bound:tops:color",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "color",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_COLOR_PB_01",
            "text": "[X]发现一件袖口已经磨软的常穿T恤被晒得局部褪色，染衣师拿出几个修复方向时，[X]没有追求恢复如新，只想保住那个让自己穿到起毛仍舍不得换掉的颜色。"
          },
          {
            "id": "TOPS_COLOR_PB_02",
            "text": "[X]收到朋友送来的衬衫后，朋友先把退换单递给[X]，说自己后来想起[X]衣橱里这种颜色的上装总是吊牌还在；[X]试到镜前，也承认朋友记得比自己清楚。"
          },
          {
            "id": "TOPS_COLOR_PB_03",
            "text": "[X]演出散场后领回洗好的上装，工作人员误把两件同款不同色的夹克调换了；[X]穿上走到候场灯下立刻觉得不像自己，服装师也从以前的定装照中找回了原来那件。"
          },
          {
            "id": "TOPS_COLOR_PB_04",
            "text": "[X]公司换制服时允许每人从色卡中自选Polo颜色，负责登记的同事还没问就把一张色号推到[X]面前；旧制服领边已经洗白，正好说明这不是同事随便猜的。"
          },
          {
            "id": "TOPS_COLOR_PB_05",
            "text": "[X]在二手店遇到一件剪裁正合适的罩衫，却因为颜色迟迟没有拿下；同行朋友提醒[X]，上次两件“版型完美但颜色勉强”的上装后来都被转送了，[X]便把它放回衣架。"
          },
          {
            "id": "TOPS_COLOR_PB_06",
            "text": "[X]常穿的针织衫被咖啡留下无法处理的色斑，店员查到停产前还有几个颜色可调货；[X]宁愿多等一周，也不愿用现货颜色替代，手机里的洗衣提醒显示这件原色款几乎每周都在轮换。"
          },
          {
            "id": "TOPS_COLOR_PB_07",
            "text": "[X]回家参加聚会时临时向姐姐借上装，姐姐越过几件新衣，直接递来一件颜色更像[X]的开衫。衣架旁还挂着[X]前两次落在她家的旧上装，袖口虽已洗淡，几件放在一起仍落在相近色调里。"
          },
          {
            "id": "TOPS_COLOR_PB_08",
            "text": "[X]去取定制外套时，裁缝把历次剩下的边角料装成一小袋交给[X]；袋里虽然跨了几年和不同面料，颜色却像一套有意配好的样卡，连裁缝都笑着指出这一点。"
          },
          {
            "id": "TOPS_COLOR_PB_09",
            "text": "[X]和室友分拣公共洗衣机里的衣物时，室友几乎没看标签就把几件上装放到[X]那一边，因为那些颜色在晾衣架上反复出现；只有一件冲动买来的亮眼款被认错了主人。"
          },
          {
            "id": "TOPS_COLOR_PB_10",
            "text": "[X]为纪念活动取出一件多年前穿过的衬衫，发现颜色仍与自己现在最常穿的几件自然衔接；尽管尺码需要稍作修改，[X]只请裁缝动肩线，没有接受改色建议。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_COLOR_V7_001",
            "text": "连续一个月从深浅墙面不同的房间参加线上读书会时，[X]会用镜头测试 Black、White、Gray 和 Navy 上衣，选择无需频繁更换背景或曝光、又能保持上半身清晰分离的中性色。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_002",
            "text": "在把小衣橱精简为能搭配三条常穿下装的上衣时，[X]会在相同日光下比较 Brown、Tan、Beige 和 Khaki，偏好能够形成有意同色层次、或与下装明确拉开差异的土色，而不是看起来像无意间没配准的近似色。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_003",
            "text": "在蓝绿色光线不断扫过游客的水族馆隧道里，[X]会用短视频比较 Blue、Green、Mint、Teal 和 Sky Blue 上衣，并选择与流动水色协调，还是在集体影像中保持明显分离。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_004",
            "text": "参加会从山坡上航拍的社区风筝节时，[X]会把 Red、Orange、Yellow 与 Gold 上衣和已分配的风筝颜色比较，选择既便于家人在远处认出、又不会融入风筝队形的暖色。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_005",
            "text": "参加使用固定混合花束的插花午餐时，[X]会比较 Pink、Purple、Lavender、Fuchsia、Apricot 与 Ivory 上衣，并选择让服装呼应某一种花、连接冷暖花材，还是为成品合照提供安静底色。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_006",
            "text": "家里平时把衣物分成深色和浅色清洗，而且晾晒空间有限，[X]希望日常上衣能直接加入本来就会运行的洗衣批次。若深色衣物占多数，[X]会偏好黑色或海军蓝；若浅色批次总能装满，会偏好白色；若某种灰度能稳定遵循家里既有的分拣规则、不必另开半桶，则会偏好灰色。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_007",
            "text": "葡萄采收故事晚餐中，[X]先在庭院日光下整理带标签的篮子，之后在低照度酒窖灯下讲述一段采收记忆；如果红色成分需要与深色标签保持区别，[X]会偏好 Burgundy，若希望更深的紫红在讲述阶段成为安静背景，则偏好 Wine。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_008",
            "text": "经过一个晾晒季后，[X]会把已有 Blue、Sky Blue 与 Teal 上衣同旧室内照片比较，决定哪种褪色仍足够好看、值得再次选择，以及哪一种颜色以后应避开直射阳光晾干。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_009",
            "text": "[X]会通过一年的抓拍比较已有 Pink、Purple、Lavender 与 Fuchsia 上衣，把鲜明 Fuchsia 保留给主动高能量表达的日子，并按无需提前搭配时的真实取用频率排列较柔和颜色。"
          },
          {
            "id": "BND_TOPS_COLOR_V7_010",
            "text": "暖季结束时，[X]会检查已有 Apricot、Ivory、Yellow 与 Gold 上衣上的防晒痕、食物斑点和反光，并只为颜色后果仍可接受的用途保留各件。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:material",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "material",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_MATERIAL_PB_01",
            "text": "[X]连续几天颈侧发痒后，把最近穿过的上装带去复诊；医生问起以前的情况，[X]从手机旧记录里认出每次不适都发生在接触同类成分后，而几件被穿得柔软的常用款从未造成问题。"
          },
          {
            "id": "TOPS_MATERIAL_PB_02",
            "text": "[X]接孩子时发现自己身上的罩衫又沾满颜料和食物，回家直接按熟悉方式清洗，第二天仍能穿；同伴那件需要特殊护理的上装已连续几次只能留到周末处理，[X]由此更确定自己愿意让哪类材料进入日常轮换。"
          },
          {
            "id": "TOPS_MATERIAL_PB_03",
            "text": "[X]整理长辈留下的夹克时，修复师说明表层材料会越用越有变化，但护理成本不低；[X]摸着自己另一件已经穿出痕迹的同类外套，决定接着养护而不是改成更省事的材料。"
          },
          {
            "id": "TOPS_MATERIAL_PB_04",
            "text": "[X]旅馆停电后，手洗的几件上装只能自然晾干；第二天清晨，[X]直接穿上已经干爽的那件，把仍沉重潮湿的另几件留在房内，并向同行人说这种差别正是自己出门总带前者的原因。"
          },
          {
            "id": "TOPS_MATERIAL_PB_05",
            "text": "[X]打开换季箱时，两件上装被虫蛀，一件只剩小孔，另一件损伤严重；[X]先拿起自己每年都会送养护的那类材料去修，另一件则因过去总让自己嫌麻烦而放弃。"
          },
          {
            "id": "TOPS_MATERIAL_PB_06",
            "text": "[X]彩排中一件舞台上装让[X]很快闷热，服装师从备用架换来另一种成分；[X]活动几分钟便恢复自在，服装师翻记录发现前两次巡演也做过同样替换。"
          },
          {
            "id": "TOPS_MATERIAL_PB_07",
            "text": "[X]出门前用粘毛器清理上装，伴侣递来另一件并说那种表面对家里宠物掉毛更省心；衣架上前一类只剩两件，后一类却因反复补购占了大半空间。"
          },
          {
            "id": "TOPS_MATERIAL_PB_08",
            "text": "[X]常穿工作衫的肘部磨破后，修衣师只能提供不同成分的补片；[X]宁愿让补片颜色略有差异，也坚持选触感和原衣接近的材料，因为以前那块偏硬补片曾让另一件衣服从此闲置。"
          },
          {
            "id": "TOPS_MATERIAL_PB_09",
            "text": "[X]合租屋重新制定洗衣规则时，大家发现[X]的上装总被分进同一种护理程序；[X]解释不是怕麻烦，而是那些经得起这种处理的材料最后都会被自己穿到明显变软。"
          },
          {
            "id": "TOPS_MATERIAL_PB_10",
            "text": "[X]突然降温时快递延误，[X]只好从旧箱里翻出一件多年前的保暖上装；它虽然款式过时，材料带来的体感仍让[X]立刻取消了另一种成分的新订单，改订与旧件相近的版本。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_MATERIAL_V7_001",
            "text": "参加三天社区手织机课程时，[X]会让上衣相同部位反复接触光滑木质织机梁，旁边还有深色经线；[X]用匹配的 Cotton、Linen、Rayon、Lyocell 与 Modal 样片比较可见掉纤、接触折痕、皮肤潮湿感和每次课后恢复，再形成材料偏好。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_002",
            "text": "乘坐多风海岸渡轮并在潮湿环境步行返程时，[X]会按湿后重量、途中干燥、日用背包摩擦和对皮肤接触的合成纤维触感接受度，比较 Polyester 与 Nylon 上衣层。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_003",
            "text": "参加一周动作课程前，[X]会比较含 Spandex 的混纺与以 Polyester、Nylon 为主的上衣，测试反复伸展后的恢复、清洗后留味，以及无需过高弹性含量能否保持稳定支撑。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_004",
            "text": "参加室内温暖、返程寒冷的冬季室内乐晚会时，[X]会按室内温度调节、大衣下摩擦、褶皱恢复和活动后愿意承担的护理，比较 Silk 与 Wool 上衣。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_005",
            "text": "每年的邻里冬季故事巡游中，[X]都要在户外搬动布景道具、在便携取暖器旁停留，活动后还要参与清洁服装并储存到下一季。经历完整循环后：若能接受动物来源且看重可修复的表面磨损，[X]会偏好 Leather；若保暖与纤维护理可管理，则偏好 Wool；若避开动物材料更重要且能接受起球，则偏好 Acrylic Fiber。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_006",
            "text": "参加周末植物染工作坊时，[X]会让匹配的 Cotton 与 Linen 样布经历同一染浴、漂洗和晾干流程。对于计划在褪色后通过复染延长使用的上衣，[X]会偏好上色、漂洗掉色和干后手感都能让这一重复过程可接受的材料。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_007",
            "text": "参加为期三晚的河畔合唱聚会时，现场只有一个手洗盆和带遮棚的晾衣绳，[X]需要晚间清洗、早餐后再次穿着。若 Rayon 的湿态处理在现场可行，[X]会偏好 Rayon；若更看重形态恢复和可靠晾干，则偏好 Lyocell；若保留柔软感足以抵消更慢或更细致的护理，则偏好 Modal。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_008",
            "text": "在空气干燥的一周冬日里，[X]会在记录相同室内湿度的条件下，把已有 Polyester、Nylon 与含 Spandex 混纺上衣分别穿在同一件外套下，统计脱下外套后的贴身情况和触碰同一金属把手时的轻微静电放电，再偏好最少需要额外处理的成分。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_009",
            "text": "[X]存放的一件已有 Wool 毛衣出现小虫洞，另一件已有 Silk 女衫则在接缝处受力；[X]会测试相应修补并改变储存方式，再决定哪种精细材料仍值得维护。"
          },
          {
            "id": "BND_TOPS_MATERIAL_V7_010",
            "text": "[X]已有 Leather 夹克和 Acrylic Fiber 毛衣在同一次后院篝火旁等时长悬挂后，会以不同方式留下烟味；[X]分别按洗护标签处理一次并连续几天记录散味过程，再依据哪种恢复流程更可接受来选择未来材料，而不是只凭最初闻到的气味判断。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:fabric_type",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "fabric_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_FABRIC_TYPE_PB_01",
            "text": "[X]录音开始后，领夹麦不断收进上装表面的摩擦声；制作人换来另一种表面结构的备用衫，现场立刻安静下来，并说[X]以前录节目时留下的服装备注也是同一要求。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_02",
            "text": "[X]从拥挤车厢出来后发现上装被包扣勾出一根长丝，同事看了一眼便说[X]前一件相似表面的衣服也毁在同样位置；[X]没有再修补，而是换回那种经得住通勤摩擦的织物。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_03",
            "text": "[X]直播前试机时，一件上装的细密纹理在画面里不断闪动，导播从[X]的固定备用衣架上取来另一件；那件领口已有洗旧痕迹，却从不会在镜头里产生干扰。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_04",
            "text": "[X]学着修补外婆留下的针织上装时，发现某种纹理每次落针都能把修补痕迹藏进去；外婆以前补过的几处已经融进表面，[X]因此决定继续使用同样的织法，而不是拆掉重做。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_05",
            "text": "[X]办公室空调突然调低，邻座借给[X]一件表面轻薄却能挡住冷风的开衫；[X]穿上后发现和自己抽屉里常备的两件结构相似，午休便去问了具体织法。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_06",
            "text": "[X]烘焙课结束后，几位学员拍打沾满面粉的上装，只有[X]那件表面的粉末很快落净；老师认出[X]上几期课也穿过同类织物，问是不是专门为这种环境留下的。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_07",
            "text": "[X]抵达目的地后打开压缩袋，同行人的上装都留下明显折痕，[X]那件抖开便能穿；同伴这才明白为什么[X]每次短途只带这种表面结构，即使它在家中看起来并不特别。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_08",
            "text": "[X]给孩子读书时，孩子总把脸贴在[X]一件上装的袖子上，却躲开另一件表面；[X]想起孩子从婴儿期起就有这个反应，后来自己在家也越来越常拿前一种织物。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_09",
            "text": "[X]用餐时酱汁溅到上装，服务员递来湿布后，污渍却顺着表面纹理扩散；同行人提醒[X]，上次穿同类织物也发生过相同情况，[X]当场把以后聚餐的备用衫换成另一种结构。"
          },
          {
            "id": "TOPS_FABRIC_TYPE_PB_10",
            "text": "[X]试穿定制上装时，侧缝在身体转动后总会扭向前方；裁缝指出问题来自表面结构，并拿出[X]另一件已穿多年的定制衫作参照，那件织物即使洗旧仍保持平整。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_001",
            "text": "参加在坐谈与缓慢舞动间切换的晚间活动时，[X]会按动态垂坠、逆光透明度、与打底层的表面摩擦，以及装饰镂空是否需要频繁整理，比较 Chiffon、Georgette、Challis、Crepe 和 Lace 上衣。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_002",
            "text": "参加寒冷天气的志愿海滩清理、之后还要进室内用餐时，[X]会按保温、处理短时活动湿气、夹砂情况和纹理进室内后的舒适度，比较 Fleece、Waffle Knit 与 Terry 上衣。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_003",
            "text": "为少量个人上衣做丝网印刷前，[X]会按印刷边缘清晰度、拉伸变形、底布纹理显现和热固化后的恢复，比较 Jersey Knit、Rib Knit、Slub Jersey 与 Pique Knit 样布，并选择最能支撑预定图像的结构。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_004",
            "text": "参加有遮阴的夏季庭院参观时，[X]会在同一打底层外比较 Mesh、Crochet 与 Eyelet 上衣，检查通风、阴影图案、靠近粗糙墙面时的勾挂风险，以及开孔是否按预期呈现技术感、手作感或刺绣感。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_005",
            "text": "参加包含旅途、户外午餐和正式合照的夏季家庭团聚时，[X]会按起皱方式、久坐后的结构、照片中的可见纹理，以及在休闲和整洁阶段间切换的难易，比较 Seersucker、Poplin、Broadcloth、Oxford 与 Chambray 衬衫。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_006",
            "text": "参加社区柳条拱架维护日时，[X]要搬运潮湿枝条束、钻到编织拱架下方，并让绑带穿过粗糙切口。[X]会依据磨损落点、现场补片是否牢固、反复搬举需要多少挺度，以及哪些可见磨痕在以后维护中仍可接受，在 Flannel、Denim、Canvas、Twill 与 Herringbone Weave 之间形成偏好。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_007",
            "text": "烛光与闪光灯肖像接力中，[X]先在低光下坐着讲一小段故事，再起身拍摄短暂肖像，伙伴也会轮流使用同一把椅子；[X]会根据方向性光泽是否可控、绒面会不会被椅背压坏，或圈纱纹理能否可见且不在快速交接时勾挂，在 Satin、Velvet 和 Boucle 之间形成偏好。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_008",
            "text": "一件已有 Fleece 上衣在活动后容易留味，一件已有 Waffle Knit 上衣在凹格中干燥不均，另一件已有 Terry 上衣湿后变重；[X]会先改变一次清洗晾晒方式，再只为缺点可接受的使用情境保留各件。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_009",
            "text": "反复清洗后，[X]会比较已有 Jersey Knit、Rib Knit、Slub Jersey 与 Pique Knit 上衣的下摆扭转、罗纹恢复、纹理变平和领口形状，并为不同合体需求决定重复购买哪种针织结构。"
          },
          {
            "id": "BND_TOPS_FABRIC_TYPE_V7_010",
            "text": "已有 Mesh、Crochet 与 Eyelet 上衣分别在不同位置出现小破口；[X]会测试隐形补片、可见手工修补和加固刺绣边，并决定哪种镂空织物最适合自己愿意展示的修补方式。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:style",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_STYLE_PB_01",
            "text": "[X]试穿父母寄来的生日夹克时，发现他们特意避开了曾送过却几乎没见[X]穿的风格，改选每次视频里都常出现的气质；即使细节不是[X]自己挑的，穿上仍很自然。"
          },
          {
            "id": "TOPS_STYLE_PB_02",
            "text": "[X]取定制西装式上装时，裁缝加了一处当季流行细节，[X]站到镜前便请他拆掉；裁缝翻出几张旧订单草图，发现[X]每次都删过作用相似的装饰，只是这次换了形式。"
          },
          {
            "id": "TOPS_STYLE_PB_03",
            "text": "[X]换到新岗位后请朋友帮忙调整着装，朋友没有让[X]彻底换一种风格，只从常穿上装中挑出几件稍作组合；第一周结束，[X]真正反复穿的也正是这些，而不是另外买来的“标准答案”。"
          },
          {
            "id": "TOPS_STYLE_PB_04",
            "text": "[X]拍摄结束后可以带走一件角色上装，[X]没有选现场最受夸赞的夸张款，而是拿了那件回到日常也不会像借来身份的衣服。换装时，它和[X]来片场穿的起球旧上装并排挂在衣架上，两件气质自然接得起来；助理于是把新的一件装进了[X]的日常衣袋。"
          },
          {
            "id": "TOPS_STYLE_PB_05",
            "text": "[X]在朋友间交换闲置上装时，一件曾由[X]送出的衬衫又被递回来，大家都觉得它在别人身上不对、在[X]身上却像原本就该留下；衣服的洗旧程度也说明[X]以前确实常穿。"
          },
          {
            "id": "TOPS_STYLE_PB_06",
            "text": "[X]受邀试穿朋友的新系列时，设计师把一件样衣留到最后，说它不是最安全的款，却最接近[X]多年来会真正穿出门的风格；[X]没有对镜犹豫，直接穿着它离开工作室。"
          },
          {
            "id": "TOPS_STYLE_PB_07",
            "text": "[X]社区剧团征集旧上装时，[X]捐出一件当年为追潮流买的外套，负责人却从[X]留下的几件里挑出另一件询问是否愿意出借，因为那件更像[X]且有明显使用痕迹；[X]最终只同意短借。"
          },
          {
            "id": "TOPS_STYLE_PB_08",
            "text": "[X]伴侣去洗衣店代取上装，店员拿错了一件同尺码外套；伴侣只看轮廓和细节便说那绝不会是[X]的，随后从一排衣物中找到了真正那件。"
          },
          {
            "id": "TOPS_STYLE_PB_09",
            "text": "[X]为参加婚礼修改一件上装时，裁缝建议加入更符合场合的装饰，[X]接受了正式度调整，却把最改变个人气质的部分删掉；这件衣服随后也被[X]穿去了几个并不相同的活动。"
          },
          {
            "id": "TOPS_STYLE_PB_10",
            "text": "[X]常穿夹克的细节磨损后，修复师提出把外观改得更新、更流行；[X]只允许加固看不见的位置，宁愿保留旧痕迹，因为正是那些细节让它一直像自己的衣服。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_STYLE_V7_001",
            "text": "参加从喝咖啡过渡到正式经费讨论的邻里项目会议时，[X]会比较 Casual 的轻松、Classic 的稳定连续和 business 的明确商务呈现，并决定上衣应保持低调、依靠熟悉语汇，还是清楚标记结构化会谈阶段。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_002",
            "text": "参加民间乐器聚会时，[X]会比较通过个人多元素叠搭形成的 Bohemian 上衣，与植根于特定地域和骑乘语汇的 Western 上衣，并在混合自我表达与一致来源语言之间选择，而不把两者都笼统称为乡村风。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_003",
            "text": "参加设计博物馆夜间开放活动时，[X]会比较有意引用较早日常年代的 Vintage 上衣，与联系成熟现代主义设计框架的 Modern 上衣，并决定由历史熟悉感还是抽象功能清晰度引导造型。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_004",
            "text": "参加快闪轮滑舞会时，[X]会比较以运动设计语言支撑动作的 Sporty、主动引发俏皮互动的 Cute、联系当下活动审美的 Trendy，以及带来精致反差的 Elegant 上衣，并在动作需求满足后选择希望的社交效果。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_005",
            "text": "在社区“年度场景”影像日历项目中，[X]会先被分配一个篇章，而不是脱离叙事挑选外观。有些篇章需要 Casual 布置、Classic 代际合影、Bohemian 工艺交流、Sporty 动作接力、有在地资料依据的 Western 骑乘历史场景，或 Vintage 档案复现；另一些则需要 Modern 未来设计展陈、Cute 迎接、Elegant 晚餐画面、Trendy 街景，或 business 议事说明。满足动作与场地需求后，[X]会偏好能让所分配篇章在整体设计语言上成立的风格。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_006",
            "text": "社区档案交接日会从整理箱件开始，经过代际故事分享，最后进入正式移交会议。[X]会在低规划的布置阶段偏好 Casual；需要用稳定熟悉的语言连接不同代际时偏好 Classic；若被分配的环节需要明确标示结构化移交，则偏好 business。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_007",
            "text": "[X]固定参加社区中心的两类晚间活动：一类分享有记录的地域骑乘历史，另一类是开放织物交换，参与者会把来源不同的个人发现组合起来。若第一类活动需要清楚保留连贯的地域语汇，[X]会偏好西部风上衣；若第二类活动确实以混搭叠层和个人组合为核心，则会偏好波西米亚风。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_008",
            "text": "[X]已有 Vintage 上衣的肩背覆片损坏到无法局部修补时，[X]会比较两张整衣方案：一种用年代匹配的替换片保持较早设计语言，另一种在两肩重复使用刻意简化的面板，让整件上衣转向 Modern；[X]会在裁剪前选择复原还是转化。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_009",
            "text": "一件已有 Cute 上衣会持续引发友善互动，另一件已有 Trendy 上衣只在短暂高峰期受关注，之后便显得有时间印记；[X]把前者保留为表达角色，把后者视为时限角色，而不把两者都混称为新奇。"
          },
          {
            "id": "BND_TOPS_STYLE_V7_010",
            "text": "[X]有一件以可见运动语汇为特征的 Sporty 上衣，以及一件能提升简单服装精致度的 Elegant 上衣；两者各自成功进入对方常见场合后，[X]会扩展用途但保留风格标签，而不是按场合重新命名。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:pattern",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "pattern",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_PATTERN_PB_01",
            "text": "[X]带孩子去拥挤活动时，孩子走散几步后凭[X]上装的纹样迅速找了回来，还说以前郊游合照里也总能靠这种图案先找到[X]。"
          },
          {
            "id": "TOPS_PATTERN_PB_02",
            "text": "[X]修补一件常穿衬衫的侧缝时，裁缝问补片是隐藏、延续还是故意打断原纹样；[X]指着衣服上两处旧补丁，要求继续用以前那种处理，因为这些修痕从未妨碍复穿。"
          },
          {
            "id": "TOPS_PATTERN_PB_03",
            "text": "[X]活动报到时，透明名牌压在上装纹样上，姓名一度难以看清。[X]把名牌移到自己几件常穿图案都会留出的安静区域，工作人员说前几次见[X]也总能找到相似位置，旧衣那里已有别针浅痕。"
          },
          {
            "id": "TOPS_PATTERN_PB_04",
            "text": "[X]上传家庭录像后，一件上装的细小纹样被压缩成闪烁色块；家人建议以后别穿它拍视频，[X]却先换回那类在历次影像中都能保持清楚轮廓的图案。"
          },
          {
            "id": "TOPS_PATTERN_PB_05",
            "text": "[X]午餐洒到上装后直到回家才发现污点，伴侣笑说这类纹样又一次替[X]撑过了整天；另一件表面相反的衬衫则因小污渍早已很少被穿。"
          },
          {
            "id": "TOPS_PATTERN_PB_06",
            "text": "[X]午后百叶窗的影子落在上装上，新图案被切成让[X]分心的密集节奏。室友调开窗帘后指出，几件常穿上装在同一位置即使叠上光影仍保持清楚；[X]据此把新款移出居家工作轮换。"
          },
          {
            "id": "TOPS_PATTERN_PB_07",
            "text": "[X]朋友亲手印了一件图案上装送给[X]，几个月后发现它已经洗旧，十分高兴；朋友说自己当初没有照流行画，而是参考[X]常穿物品里反复出现的纹样逻辑。"
          },
          {
            "id": "TOPS_PATTERN_PB_08",
            "text": "[X]收到要求低调着装的邀请后，没有直接放弃带图案的上装，而是选了自己常穿纹样中视觉分量较轻的一件；活动结束后的照片里，它既没有抢眼，也仍像[X]本人。"
          },
          {
            "id": "TOPS_PATTERN_PB_09",
            "text": "[X]改衣时拆开一件旧上装，发现里侧藏着与正面不同的纹样；裁缝提议翻面重做，[X]却只保留一小处作为细节，因为整面呈现会越过自己多年能真正穿出门的分量。"
          },
          {
            "id": "TOPS_PATTERN_PB_10",
            "text": "[X]社团制作纪念上装时请成员投票图案，[X]提出的版本被朋友一眼认出，说它和[X]以前负责的几次纪念品虽主题不同，却总保留相似的纹样秩序。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_PATTERN_V7_001",
            "text": "在使用两台相机记录家庭档案数字化过程时，[X]会按摩尔纹、线条方向和对小幅历史照片的视觉干扰，比较 Solid、Striped、Plaid、Checkered、Herringbone 与 Chevron 上衣，并选择能支撑而非扰乱近景演示的表面。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_002",
            "text": "参加常有陌生人交流视觉引用的公共壁画步行活动时，[X]会比较 Graphic、Letter Print 与 Cartoon 上衣，判断预定信息是否可读、文字从背面是否可能被误解，以及熟悉角色是否会引发 [X]想要的互动。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_003",
            "text": "参加纺织故事分享活动时，[X]会把 Floral 与 Paisley 作为设计类别比较；只有制作者记录了具体社群、纹样含义和使用许可时，才考虑标为 Tribal 的上衣，从而表达视觉偏好而不把文化身份泛化成一种外观。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_004",
            "text": "为跨年龄家庭野餐制作欢迎上衣时，[X]会按重复尺度和社交语气比较 Polka Dot、Heart 与 Star 图案，在俏皮节奏、明确关爱或共同庆祝之间选择，而不把任何纹样限定给某年龄或性别。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_005",
            "text": "参加户外版画周末活动时，[X]会比较 Camouflage、Leopard Print、Tie Dye 与 Color Block 上衣，看表面是为了融入场地、引用动物、记录流动染色过程，还是组织大块视觉区域，并选择与表达意图诚实一致的逻辑。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_006",
            "text": "在从楼座观察的集体队形排练中，[X]要在多个方位标记之间转身，并穿过几排密集站位。若条纹方向能帮助动作引导者判断躯干朝向，[X]会偏好 Striped；若需要让自身轮廓保持视觉安静、不与相邻移动路线竞争，则偏好 Solid。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_007",
            "text": "参加黄昏邻里线索步行时，各队要在数米外接近引导者，并根据其衣服上的信息识别检查点。若精确文字在褶皱和局部遮挡下仍不含糊，[X]会偏好 Letter Print；若图像无需每个字符完整可见也能传达线索，则偏好 Graphic。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_008",
            "text": "一条宽冬季围巾会遮住 [X]已有 Floral 上衣的中央，使少数大花单元像被突然截断；同一条围巾覆盖已有 Paisley 上衣时，较小的重复纹样仍能在两侧保持连续；[X]会为这个反复出现的叠搭选择仍能按预期被读出的纹样。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_009",
            "text": "在已有的大型 Heart 与 Star 重复纹样上衣中，[X]发现前部开口和侧缝会把若干符号切成含混碎片，而较小的 Polka Dot 单元跨过相同结构分割后仍保持稳定节奏；[X]会先标出被切断的单元，再为下一件上衣选择纹样类型与尺度。"
          },
          {
            "id": "BND_TOPS_PATTERN_V7_010",
            "text": "在社区舞台某一场景使用的高饱和单色灯下，[X]已有 Tie Dye 上衣的渐变会压成一片不均匀色域，而已有 Color Block 上衣的大区域边界在排练视频中仍然可读；[X]会选择空间组织能经受实际灯光提示的纹样。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:occasion",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "occasion",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_OCCASION_PB_01",
            "text": "[X]临时得知下班后要直接参加另一项活动，没时间回家换衣；同事建议[X]继续穿身上的上装，因为它过去已经从白天安排自然过渡到不少不同场合，袖口的使用痕迹也比那些“专门准备”的衣服明显。"
          },
          {
            "id": "TOPS_OCCASION_PB_02",
            "text": "[X]收到一张邀请后，[X]没有去买新的上装，而是取出上次类似活动穿过的那件；口袋里还留着旧入场凭证，衣服也已经为同类日子改过一次尺寸。"
          },
          {
            "id": "TOPS_OCCASION_PB_03",
            "text": "[X]搬家时发现一件为“总有一天会参加”的活动买的上装仍带吊牌，而旁边几件普通衣服已经补过袖口；[X]把前者退到转售箱，把有限空间留给生活里真正发生的那些场合。"
          },
          {
            "id": "TOPS_OCCASION_PB_04",
            "text": "[X]朋友临时为某项活动借上装时，没有问[X]有什么，而是直接说“你每次去这种地方穿的那件”；[X]从衣架上拿下后，发现朋友说的确实是同一件。"
          },
          {
            "id": "TOPS_OCCASION_PB_05",
            "text": "[X]洗衣店从几件上装的缝隙里分别找出票根、草屑、沙粒和纸屑，店员按物品猜它们去过哪里；[X]发现其中一件总带回同类痕迹，也正是自己遇到那类安排时不用思考就会拿走的。"
          },
          {
            "id": "TOPS_OCCASION_PB_06",
            "text": "[X]家庭群商量活动准备时，长辈顺手提醒[X]别忘了那件“每到这种日子都会穿”的上装；[X]原本想换一种，试到镜前却还是觉得旧件更符合自己在这些日子里的状态。"
          },
          {
            "id": "TOPS_OCCASION_PB_07",
            "text": "[X]一件上装在活动中被磨破后，修衣师问是否值得补；[X]展示了同类场合里它留下的多处细小痕迹，决定加固后继续使用，而不是换成只在外观上更合适的新款。"
          },
          {
            "id": "TOPS_OCCASION_PB_08",
            "text": "[X]亲友暂住时把一件上装误放进普通洗衣篮，家人发现后立刻取出单独处理，因为第二天某类安排一开始，[X]通常就会拿这件或同用途的上装。晾干后它果然先于其他衣物被穿走。"
          },
          {
            "id": "TOPS_OCCASION_PB_09",
            "text": "[X]把一件自以为只适合特殊活动的上装借给朋友后，接连几次普通安排都想伸手去拿它；朋友归还时，[X]已经列出好几个会继续穿的时刻，才发现它真正适配的生活范围比购买时想得宽。"
          },
          {
            "id": "TOPS_OCCASION_PB_10",
            "text": "[X]一位多年合作的摄影师在活动前问[X]是否还会穿那件熟悉的上装，说每次拍到这种生活片段，它都能让[X]看起来最放松；[X]检查衣服后只处理了小磨损，仍把它带上。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_OCCASION_V7_001",
            "text": "改为混合式每周安排后，[X]会决定精简上衣轮换是否应同时覆盖 Daily 琐事、Office 会面和 Home 视频通话，还是根据各环境不同的呈现与磨损要求分开准备。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_002",
            "text": "只能准备两件活动上衣时，[X]会列出一个月的通用 Fitness 课程、户外 Running、室内 Yoga、通勤 Cycling 和社交 Dance，并决定哪些用途可以共享同一服装角色，哪些姿势、转身或接触模式值得专门分开。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_003",
            "text": "一次度假行程包含一般 Vacation 观光、Outdoor 午餐、一天 Hiking、两个 Beach 上午和一场已预约 Golf；[X]会决定携带多用途上衣，还是为规则和暴露确实形成边界的活动分别安排上衣。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_004",
            "text": "一个庆祝周末里，[X]要参加安静的 Dating 晚餐、深夜 Party 和白天 Wedding，并决定一件上衣能否跨越亲密相处、活跃社交和仪式性群体呈现，还是换装更能保留各自角色。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_005",
            "text": "规划精简年度节日收纳盒时，[X]会决定 Christmas、Halloween 和 Valentine's Day 上衣应明确专用于节日，还是足够克制、能在日期过去后回到 Daily 使用。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_006",
            "text": "参加可见修补活动时，[X]会观察撞色针脚在会议镜头、房间距离和近距离家居视角下分别呈现怎样的效果。只有当修补痕迹在所有必要视角中都显得有意时，[X]才偏好把这类上衣用于 Office；更醒目的修补则可自然用于 Daily 或 Home。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_007",
            "text": "参加黄昏邻里路线接力时，[X]会交替完成不背负装备的 Running 路段和必须背满载背包的 Cycling 路段，队友则从相同距离检查后方可见性。[X]会偏好把后部反光上衣用于 Running；只有常用背包不遮挡反光信号，或另加可见层时，才认为它也适合 Cycling。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_008",
            "text": "行李延误使 [X]只剩身上正在穿的一件已有 Vacation 上衣时，[X]不得不用一次冲洗和晾干间隔，让它从 Beach 早晨连续过渡到已预约的 Golf 报到；事后 [X]会记录它能否作为这两种场合的可信应急桥梁，但不会把一次例外直接改成常规打包角色。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_009",
            "text": "一件 [X]自己已不再用于 Dating 或 Wedding 的已有上衣，却被不同朋友反复借去参加主题 Party；[X]会回顾借出和归还情况，判断是否在约定护理方式后把它保留为共享 Party 资源，而不只按个人穿着次数评估。"
          },
          {
            "id": "BND_TOPS_OCCASION_V7_010",
            "text": "[X]继承了一件连续出现在两代家庭照片中的 Christmas 上衣，但日常穿着时并不自然；在穿着它加入一次新的年度合影后，[X]会判断延续这项单一仪式是否足以保留一个有意专属的节日角色。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:season",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "season",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_SEASON_PB_01",
            "text": "[X]降温后的早晨从柜里取出一件上装，家人闻到久放后的收纳气味便说“今年又到它上场的时候了”；衣服肘部的旧磨痕显示它过去每到这段天气都会被拿出来。"
          },
          {
            "id": "TOPS_SEASON_PB_02",
            "text": "[X]整理收纳时，其他人都建议把一件上装完全封箱，[X]却把它留在容易拿到的位置，因为家中某类环境即使在不对应的季节也常让自己需要它；衣服已经在几个全年月份留下穿洗记录。"
          },
          {
            "id": "TOPS_SEASON_PB_03",
            "text": "[X]一件夹克因天气变化不再常穿，裁缝建议拆掉可移除内层；改完后，[X]在之后几个月重新频繁使用它，原本只属于一段天气的商品因此进入了更多日常。"
          },
          {
            "id": "TOPS_SEASON_PB_04",
            "text": "[X]邻居归还借去的开衫时说，自己终于理解为什么每次这个时节都能在[X]椅背上看到它；[X]接过来顺手又披上，袖口已经留下多轮反复卷起的痕迹。"
          },
          {
            "id": "TOPS_SEASON_PB_05",
            "text": "[X]渡轮驶入风口后，同行人纷纷寻找额外遮挡，[X]所穿上装仍让肩背保持熟悉体感。朋友注意到领边有多次海风和盐雾留下的浅痕，才明白它为何每到这类天气都会被放进行李。"
          },
          {
            "id": "TOPS_SEASON_PB_06",
            "text": "[X]孩子长高后接过[X]以前在某个季节常穿的上装，家人发现这件衣服的厚薄仍被全家放在同一月份使用；[X]只需修好边缘，便让它继续留在那个季节的日常里。"
          },
          {
            "id": "TOPS_SEASON_PB_07",
            "text": "[X]到达目的地才发现当地季节感与出发地完全不同，借来的上装虽然足以应急，[X]仍更想念家中那类在自己熟悉气候里已被穿出形状的商品。"
          },
          {
            "id": "TOPS_SEASON_PB_08",
            "text": "[X]接到洗衣店询问一件上装是否继续寄存的电话，听到天气变化便让他们提前送回。店员没有重新确认柜位，直接从同一衣袋取出；袋柄上叠着几张日期接近的旧寄存签，衣服送到后当天就被[X]穿出门。"
          },
          {
            "id": "TOPS_SEASON_PB_09",
            "text": "[X]修补上装时发现内侧有几种不同材料留下的摩擦印，分别来自与轻薄层、保暖层和单穿时的接触；[X]因此只做局部加固，不愿把这件跨天气使用的商品改成单一季节版本。"
          },
          {
            "id": "TOPS_SEASON_PB_10",
            "text": "[X]入夏第一天就把一件上装穿得十分不适，[X]回家后没有再把它塞回柜里，而是想起过去两次换季都做过同样尝试，终于将它送走，留下那些无需说服自己就会穿的商品。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_SEASON_V7_001",
            "text": "一次行程从北半球 Fall 出发、抵达南半球 Spring 时，[X]会按实际温度、日照和降雨而非月份名称规划上衣，并决定哪些过渡单品确实能同时服务两个季节标签。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_002",
            "text": "在白天炎热、夜间凉爽的沙漠营地，[X]会决定一件上衣只属于 Summer 白天，还是能通过叠穿延伸到类似 Fall 的夜间条件，并按完整日温差分配季节角色。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_003",
            "text": "在 Spring 花粉季，[X]会为户外琐事准备易清洗外层，并在 Home 使用另一件干净层，同时决定花粉下降、气温升高后的初 Summer 是否继续使用同一过渡上衣。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_004",
            "text": "在室内暖气过强、街上寒冷的一周 Winter 生活中，[X]会比较冬季专用保暖上衣与作为可拆叠穿系统一部分的较轻 Fall 上衣，并按真实室内外切换选择季节专用或跨季叠穿。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_005",
            "text": "在分配衣橱空间前，[X]会设计四季上衣轮换：Spring 与 Fall 过渡位、Summer 高温位和 Winter 寒冷位；只有具体叠穿和护理方案能支持时，才允许一件上衣覆盖多个季节。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_006",
            "text": "[X]既参加社区花园的 Spring 开园，也参加 Fall 留种收尾；两次活动都从凉爽早晨开始，到较暖的下午结束。若温度、风和脱层节奏相近，[X]会偏好同一类过渡上衣同时服务 Spring 与 Fall；若条件并不重合，则保留分开的季节角色。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_007",
            "text": "多次在 Winter 参观有供暖的公共温室时，[X]要先走过寒冷街道、寄存外套，再在温暖潮湿的馆内停留数小时。[X]会在这一明确的室内阶段偏好 Summer 上衣，但在室外仍要求 Winter 外层系统，把它视为特定微气候例外，而非笼统的 Winter 适用。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_008",
            "text": "从寒冷内陆迁到气候温和的海岸后，[X]发现已有 Winter 上衣在当地普通冷天会过热，而已有 Fall 薄层仍然舒适；结合迁居后第一个季节里最低温几次出行，[X]会把 Fall 设为当地默认，把 Winter 只留给旅行或罕见寒冷预警。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_009",
            "text": "收纳后，[X]已有 Winter 毛衣在短暂使用期前需要通风和检查，而已有 Fall 层仍频繁轮换；[X]会决定冬季专用性是否仍值得其储存和护理负担。"
          },
          {
            "id": "BND_TOPS_SEASON_V7_010",
            "text": "一件已有过渡上衣被放在 Spring 收纳箱里，导致凉爽的 Summer 夜晚和温暖的 Fall 午后到来时，[X]反复想不起它；把它移到按温度带整理的挂区后，只有在接下来各次天气提醒中确实能找到并选中它，[X]才会记录 Spring、Summer 与 Fall 三季角色。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:sleeve_length",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "sleeve_length",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_01",
            "text": "[X]在家做饭时袖口再次靠近火源，家人没有提醒便递来另一件手臂覆盖更合适的上装；[X]换好后动作立刻顺畅，厨房挂钩上同类商品的袖边都已洗得发软。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_02",
            "text": "[X]临时接到接种通知，护士看到[X]的袖部后问是否方便露出上臂；[X]熟练地调整到合适位置，并说自己看诊时总会选这种不用整件脱下的上装。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_03",
            "text": "[X]修表时摘下手表，师傅注意到手腕附近的晒痕和袖口边界多年位置相近；[X]试戴修好的表时，也下意识拉到自己最习惯的覆盖位置。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_04",
            "text": "[X]陶艺课结束时，几件上装的袖部沾泥位置各不相同，[X]那件却只在熟悉的边缘留下一圈痕迹；老师说[X]上几期一直穿这种长度，连卷袖都不用停下来处理。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_05",
            "text": "[X]抱孩子时，孩子总抓住[X]上装手臂处同一位置，久而久之那里已经磨出浅痕；换上一件覆盖长度不同的衣服后，双方都不习惯，[X]很快又换了回来。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_06",
            "text": "[X]办公室洗手池旁又有水溅到袖边，同事笑着指出[X]宁愿每天做同一个调整，也从不选完全不同长度的上装；[X]看着袖口反复折出的压线，承认便利之外还喜欢这种覆盖感。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_07",
            "text": "[X]排练时琴弓再次擦到袖部，乐团伙伴从备用架拿来一件长度符合[X]习惯的上装；那件已经在多次演出节目单照片里出现，换上后不必重新适应动作。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_08",
            "text": "[X]户外活动结束后，同行人发现[X]手臂的晒痕总停在同一位置，便把一件袖长不同的备用上装收了回去；[X]仍穿着自己那件已被太阳晒出轻微色差的商品。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_09",
            "text": "[X]改短一件旧衬衫时，裁缝建议顺便改变袖长，[X]却只改衣身，保留手臂原来的覆盖位置；裁缝量到旧袖边已有多年形成的折痕，便不再劝说。"
          },
          {
            "id": "TOPS_SLEEVE_LENGTH_PB_10",
            "text": "[X]演讲录像回放时，[X]发现换穿的一件上装让手势看起来陌生，负责拍摄的同事也更喜欢[X]平时那种手臂露出比例；下一场[X]换回旧款，动作立刻恢复自然。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_001",
            "text": "参加有湿墨的凸版印刷工作坊时，[X]会比较 Sleeveless、Cap Sleeve、Short Sleeve 与 Elbow Sleeve 上衣，在希望的手臂覆盖与滚墨、放纸时所有布边避开墨台之间取舍。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_002",
            "text": "在预约接种后还要继续普通外出的一天里，[X]会比较 Sleeveless、Cap Sleeve 与 Short Sleeve 上衣，看能否无需脱衣就露出上臂，同时仍适合当天其余安排。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_003",
            "text": "在阳光下的社区菜园活动数小时，[X]会按手臂实际暴露区域、反复挖掘时的热感和与独立防晒方案的配合，比较 Elbow Sleeve、Three-Quarter Sleeve 与 Long Sleeve 上衣。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_004",
            "text": "在凉爽天气的岸线观察活动中使用及腕防护手套时，[X]会比较 Three-Quarter Sleeve 与 Long Sleeve 上衣，决定布料应停在手套上方，还是与手套重叠而不形成潮湿厚重的隆起。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_005",
            "text": "参加非正式弦乐演奏前，[X]会测试从 Sleeveless 到 Long Sleeve 的全部袖长，并在运弓、按弦、坐姿和与乐器接触都不受妨碍后，才选择偏好的手臂覆盖。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_006",
            "text": "参加邻里送书路线时，[X]要背着装满书的背包往返多个公寓门厅。若肩带不会刺激裸露肩缘，[X]会偏好 Sleeveless；若少量袖布能在同样负重下保持平整并形成稳定隔层，则偏好 Cap Sleeve。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_007",
            "text": "参加初学者射箭开放日时，[X]会佩戴护臂重复同一组拉弓动作。若护臂直接贴肤仍舒适稳定，[X]会偏好 Short Sleeve；若袖端能平整地位于上方绑带下且不堆积、不移位，则偏好 Elbow Sleeve。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_008",
            "text": "在入场和无现金摊位都要反复扫描同一腕带的多日艺术节上，[X]会交替穿已有 Three-Quarter Sleeve 与 Long Sleeve 上衣，记录腕带能否直接出示、还是每次都要推开袖子；[X]会选择既让扫码省事、又不造成其他不希望暴露的袖长终点。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_009",
            "text": "清洗后，[X]已有上衣的 Long Sleeve 不均匀缩短到接近 Three-Quarter Sleeve；[X]会测量两臂、测试有意修改能否形成稳定新用途，若意外端点仍不一致则更换。"
          },
          {
            "id": "BND_TOPS_SLEEVE_LENGTH_V7_010",
            "text": "一年的抓拍显示，[X]反复卷起 Long Sleeve、从不调整 Elbow Sleeve，并常在 Sleeveless 上衣外加层；[X]会依据这些真实调整行为，偏好本就符合日常习惯的袖长。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:sleeve_style",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "sleeve_style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_SLEEVE_STYLE_PB_01",
            "text": "[X]长途步行后脱下背包，发现一件上装的袖部接缝又被肩带磨红了皮肤；同行人从行李里拿出[X]常用的另一种袖部结构，肩上已经有多次背包留下的浅痕，却从不压到同一位置。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_02",
            "text": "[X]排练到一半，宽出的袖部再次扫到鼓面，[X]没有停下来卷扎，而是从后台换上那件动作时会自然离开手腕的上装；鼓手伙伴说它几乎成了[X]每次正式排练的标配。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_03",
            "text": "[X]降温后套外套时，一件上装的袖部在腋下堆成一团；伴侣顺手递来另一件结构，说去年整个冬天[X]最后总会换成它，内侧被外套磨亮的位置也说明了原因。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_04",
            "text": "[X]裁缝为新上装重新打版时，直接从抽屉取出一张标着[X]名字的袖部纸样；那是几年前反复调整抬臂和肩线后留下的版本，[X]活动几下便让他继续沿用。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_05",
            "text": "[X]帮孩子洗手时，上装袖部总能停在不沾水的位置，孩子也会熟练抓住同一处；换穿另一种结构那天，两人连续几次都把布料弄湿，[X]晚饭前便换回旧款。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_06",
            "text": "[X]灯光师在彩排画面里发现袖部投影抢过了手势，[X]换上另一件后，动作轮廓重新清楚；旧节目录像显示[X]在需要近距离手势的节目里一直采用后一种结构。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_07",
            "text": "[X]晾衣时发现一件上装的袖部又被自重拉得变形，而另一件虽穿得更多仍能恢复；家人指出前者已经连续几个洗衣日被[X]跳过，今天只是最后一次尝试。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_08",
            "text": "[X]手腕受伤期间穿衣，某种袖部结构让[X]无需扭转手臂便能完成；康复师发现[X]动作十分熟练，才知道[X]过去照顾受伤家人时就已把同类上装留作家中常备。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_09",
            "text": "[X]咖啡被碰翻时，液体沿一件上装的袖部褶量流到手边；店员递纸时[X]已熟练托住特定位置，并说家里几件同结构的袖子都让自己练会了这个动作，却仍因喜欢轮廓而常穿。"
          },
          {
            "id": "TOPS_SLEEVE_STYLE_PB_10",
            "text": "[X]拍证件用半身照时，摄影师让[X]放松肩臂，却发现某件上装的袖部总改变姿势；换回工作证旧照里相似结构的衣服后，[X]不再需要提示便站得自然。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_001",
            "text": "参加周末独木舟划桨教学时，[X]会在反复上举和交叉划动中比较 Regular Sleeve 与 Raglan Sleeve 上衣，并根据动作张力真实出现的位置，选择传统肩缝或斜向结构。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_002",
            "text": "参加有炉具、碗盆和相邻操作位的坐式公共烹饪课时，[X]会比较 Puff Sleeve、Balloon Sleeve、Batwing Sleeve 与 Bell Sleeve 上衣，看体积向哪里突出，以及是否无需反复收拢或系住就能避开操作区。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_003",
            "text": "参加露天诗歌朗读时，[X]会比较 Flutter Sleeve 与 Cold Shoulder Sleeve 上衣，看轻风中动态边缘如何表现、刻意肩部开口从坐席看来是否清楚，以及 [X]愿意管理多少暴露区域。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_004",
            "text": "在需要搬运行李并多次坐下用餐的铁路行程中，[X]会比较 Roll-Up Sleeve 与 Regular Sleeve 上衣，并决定可固定调整是否真正适应任务变化，还是只增加难以保持一致的搭袢和褶层。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_005",
            "text": "在家固定练习键盘乐器时，[X]会从中央伸向两端琴键、翻动乐谱，并让前臂贴近键盘边缘。对于常规、插肩、泡泡、灯笼、蝙蝠、飞飞、喇叭、卷袖和露肩袖，[X]会根据肩部伸展、蓬量所在位置、袖口能否受控，以及活动边缘是否碰到琴键、谱页或琴凳，形成不同偏好。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_006",
            "text": "参加两地巡回的皮影戏周末活动时，[X]乘火车转场后要拆开行李，下一次排练前只能短暂轮用团队的旅行蒸汽机。若装袖帽能在这段时间内整洁恢复，[X]会偏好 Regular Sleeve；若斜向接缝起皱更少、整理更省心，则偏好 Raglan Sleeve。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_007",
            "text": "经常带折叠婴儿车外出时，[X]要反复越过推杆伸手、按下侧边卡扣，再把折好的车架抬进存放处。若上臂的蓬量始终位于铰链上方，[X]会偏好泡泡袖；只有收口能可靠控制下段蓬量、让它避开卡扣和轮锁时，才会偏好灯笼袖。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_008",
            "text": "在公共洗手池反复洗手时，[X]会比较已有 Batwing Sleeve 与 Bell Sleeve：前者的体量集中在腋下较高位置，后者在手腕附近张开；不卷起也不系住袖子时，[X]会标记各自最先沾水的位置，并偏好在普通洗手动作中更容易避开水面的体量分布。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_009",
            "text": "用同一枚领夹麦录制口述记忆步行时，[X]已有 Flutter Sleeve 的活动边缘会在摆臂时进入拾音区，而已有 Cold Shoulder Sleeve 虽保留固定开口，却不会产生布料敲击声；[X]会根据音频波形和回放，在袖片动态与更干净的步行音轨之间选择。"
          },
          {
            "id": "BND_TOPS_SLEEVE_STYLE_V7_010",
            "text": "[X]已有 Roll-Up Sleeve 衬衫的搭袢会在数小时后松开，导致两袖高低不一；[X]会修复并测试搭袢，再决定可调袖是否仍优于已有 Regular Sleeve 衬衫。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:neck_style",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "neck_style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_NECK_STYLE_PB_01",
            "text": "[X]长时间剪辑后，耳机和上装领口在颈侧叠压出红印；同事从[X]椅背上拿来另一件，说团队早就知道[X]录长节目时会换成这种颈部结构。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_02",
            "text": "[X]理发后发现碎发全卡在一件上装的领口里，发型师认出[X]以前穿另一种领型来时从不会这样；[X]当场借刷子清理，并决定以后预约时仍穿那类旧上装。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_03",
            "text": "[X]上台前，技术人员发现麦克风无法稳固在新上装的领部，便取来[X]过去演讲时常穿的那件；夹具刚好落在已经磨出浅痕的位置，调试一次就通过。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_04",
            "text": "[X]戴上家人赠送的纪念项链后，发现当天上装的领口把吊坠完全遮住；母亲从[X]衣柜里挑出另一件，说以前重要日子[X]总用这种开口留出位置，换上后吊坠正好落在熟悉高度。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_05",
            "text": "[X]寒风天进屋后，颈部被一件上装磨得发红，伴侣没有问便递来另一种领口结构；那件虽然颜色已旧，颈缘却因多个冬天反复穿洗变得很柔软。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_06",
            "text": "[X]改一件旧上装时，裁缝拆开领部发现里面还留着几年前调整开口的粉线；[X]试穿新纸样后仍指向同一位置，裁缝便按旧线恢复，而没有采用当季更流行的高度。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_07",
            "text": "[X]抱孩子时，孩子习惯把手伸进[X]上装某个领口位置找安抚巾；换穿另一种结构后孩子反复扑空，[X]也觉得抱姿别扭，回家便换回已被拉得稍软的那件。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_08",
            "text": "[X]演出换装时，化妆师看到新上装领口即刻停手，怕穿脱蹭坏妆面；她换来过去几季一直为[X]保留的另一种结构，衣服从发型和面部周围顺利通过。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_09",
            "text": "[X]旧伤疤在某件上装领缘下开始发痒，[X]下意识换成另一件能露开或避开那个位置的衣服；复诊照片里，医生也发现[X]每次恢复期都采用相似领口。"
          },
          {
            "id": "TOPS_NECK_STYLE_PB_10",
            "text": "[X]朋友归还借去的围巾时，笑说终于明白[X]为什么总把它和某种领型的上装放在一起：打结后不堆、不滑，也不会遮住脸；[X]看着领边旧压痕，顺手又按原来的方式系好。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_NECK_STYLE_V7_001",
            "text": "参加会佩戴并交流一枚吊坠的小型首饰交换晚餐时，[X]会按服装边缘如何框住固定链长、是否切过、重复或压过吊坠形状，比较 V-Neck、Round Neck、Scoop Neck 与 Square Neck 上衣。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_002",
            "text": "在多风港口观景台上，[X]会按静止时的颈部覆盖、转头追随船只时的舒适度，以及额外头部布料是有用还是只会堆在颈后，比较 Mock Neck、High Neck 与 Hooded Neck 上衣。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_003",
            "text": "录制家庭口述史对谈、需要使用小型领夹麦克风时，[X]会按麦克风固定位置、转头时摩擦噪声和近景中领口是否安静，比较 Collared Neck 与 Round Neck 上衣。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_004",
            "text": "换成更短发型后，[X]会用镜头测试 Scoop Neck、Square Neck、Mock Neck 与 High Neck 上衣，并根据动态中多少面部留白或包围感更符合意图来选择，而不是套用脸型规则。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_005",
            "text": "为结构化夹克选择内搭时，[X]会在夹克敞开和扣合状态下比较 V-Neck、Round Neck、Collared Neck 与 Hooded Neck，并决定内搭应退后、呼应驳领、增加第二层领口，还是有意在颈后形成体积。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_006",
            "text": "邻里小组在地面铺设一幅房间大小的路线图时，[X]要长时间前倾对齐路线卡片，并越过相邻区域伸手。若开放的领边在这些姿势中仍保持稳定，[X]会偏好 V-Neck；若需要更少分心和整理，则偏好 Round Neck。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_007",
            "text": "固定在凉爽清晨散步时，[X]会使用同一条柔软围巾，并随着气温回升逐渐调松。若平整衣领能托住围巾、让它远离下巴又不堆叠，[X]会偏好有领；若去掉这层结构能让围巾平顺落下、调松时也不勾住，则会偏好圆领。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_008",
            "text": "一件已有 Mock Neck 上衣在晚餐中始终舒适，另一件已有 High Neck 上衣在 [X]长时间转头和低头时变得明显；[X]把更高包围保留给静止寒冷使用，把较低高度留给活动较多的室内日。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_009",
            "text": "在两次炎热的露天市集行程中，[X]会把同一条湿冷感巾分别搭配已有 Collared Neck 衬衫和 V-Neck 上衣，比较毛巾能否贴住颈部、是否把翻领持续弄湿、或会不会滑入领口，并选择无需反复整理就能有效降温的领型。"
          },
          {
            "id": "BND_TOPS_NECK_STYLE_V7_010",
            "text": "在锁骨附近连续使用皮肤贴片的几周里，[X]会轮换一件已有的方领上衣和一件已有的圆弧大领口上衣。真正偏好的领型取决于衣缘在穿衣、伸手和普通居家活动中能否避开贴片：贴片偏两侧时，方领可能留出空间；贴片位于较低的中央时，圆弧领口可能更合适。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:fit_type",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "fit_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_FIT_TYPE_PB_01",
            "text": "[X]公交急刹时，[X]抬手抓扶杆，一件新上装在肩背处把动作卡住；身旁朋友从包里递来[X]常穿的旧款，布面已顺着同一伸手动作形成柔软折线。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_02",
            "text": "[X]体重变化后带旧衬衫去修改，裁缝以为[X]会追求原尺码，量体时却发现[X]仍要求保留熟悉的身体余量；几张不同年份的改衣单上，这个余量数字一直很接近。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_03",
            "text": "[X]临时坐到没有调好的工位，一件上装在伏案后不断向后拉；同事借给[X]另一件版型，午后肩颈仍轻松，并提到[X]以前加班时也总留着同类备用。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_04",
            "text": "[X]孩子跑来拥抱时抱怨[X]新上装“硬邦邦不让靠近”，随后又钻进那件身体空间更熟悉的旧衣里；旧衣胸前已经被长期抱靠磨得发软。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_05",
            "text": "[X]台词排到情绪激烈处，[X]发现新上装影响深呼吸，服装师沿着旧演出服留下的改线给它放出余量；修改后[X]无需再在同一段落偷偷拉衣身。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_06",
            "text": "[X]准备捐出一件尺码正确却总不想穿的上装时，家人指出问题不是大小，而是它在身体上的余量不同于[X]那些被穿旧的衣服；[X]试着活动片刻，终于把它放进捐赠袋。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_07",
            "text": "[X]航班延误后，[X]靠着行李坐到候机区角落，新买的上装不断牵住肩臂。同行人从行李里找出[X]常带的旧款，布面已顺着抱膝休息形成柔软折线；换上后[X]很快找到舒服姿势。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_08",
            "text": "[X]拍家庭照时重穿多年前的上装，尺寸仍能扣合，但镜头里的身体空间让[X]感到陌生；换上近期常穿的一件后，摄影师无需再提醒[X]放松肩膀。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_09",
            "text": "[X]骑行途中，一件上装迎风不断拍打身体，伙伴帮忙临时固定后说[X]以往路线从没出现过这个问题；[X]回家查看旧骑行照片，常用上装确实都保留相似贴合度。"
          },
          {
            "id": "TOPS_FIT_TYPE_PB_10",
            "text": "[X]误洗后常穿上装明显缩水，店家提供同尺码替换，[X]却先要求量实际胸肩余量，因为旧衣洗前的空间才是自己想恢复的；过去几张订单也都写着类似修改备注。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_FIT_TYPE_V7_001",
            "text": "乘坐需要久坐、抬手取行李并靠窗睡眠的夜间长途车时，[X]会比较 Regular Fit、Relaxed Fit 与 Loose Fit 上衣，看增加的余量能否缓解坐姿张力，又不会在安全带下堆积或睡眠中移位。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_002",
            "text": "参加有指导的室内攀岩前，[X]会在租用安全带下比较 Slim Fit、Skinny Fit 与 Compression Fit 打底上衣，检查布料能否避开扣具、保留完整上举动作，并提供有意支撑而非只是更紧。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_003",
            "text": "参加社区合唱排练和演出时，[X]会在持续呼吸和抬臂热身中比较 Regular Fit、Relaxed Fit 与 Compression Fit 上衣，并根据歌唱时何者最不干扰，选择自然扩张、额外余量或有意支撑。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_004",
            "text": "冬季参观博物馆、需要在无暖气雕塑庭院和拥挤展厅间移动时，[X]会比较 Slim Fit、Skinny Fit 打底层与 Regular Fit、Relaxed Fit 中层，并决定每层应贴身到什么程度，才能在增减衣物时既不束缚也不堆成体积。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_005",
            "text": "参加长时间品鉴晚餐前，[X]会在坐姿中测试 Regular Fit、Relaxed Fit 与 Loose Fit 上衣，并决定在姿势变化和完整用餐过程中偏好多少余量，同时不把超大轮廓当成做工不合适的替代。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_006",
            "text": "参加社区横幅传递排练时，[X]要在连续几组长时间动作中交替把轻质横幅举过头顶和收在髋侧。只有当 Compression Fit 的主动躯干支撑能贯穿整套动作且不留下持续压痕时，[X]才会偏好它；否则会选择同样贴身、却更利于长时间伸展的 Slim Fit。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_007",
            "text": "帮邻里果树架设防护网时，[X]需要反复举手过头、蹲下固定网边，并在轻薄防护层下活动。若最贴身的 Skinny Fit 能保持平整且不上移，[X]会偏好它；如果下摆需要一再整理，则更偏好同样低体积、但动作中更稳定的 Slim Fit。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_008",
            "text": "一件已有 Relaxed Fit 外穿衬衫既能罩在 T 恤外也能搭薄毛衣，另一件已有 Regular Fit 版本搭毛衣时会拉扯；[X]会回顾真实叠穿频率，再决定哪种版型磨损后值得替换。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_009",
            "text": "在狭窄壁龛里组装模块化搁架时，[X]已有 Loose Fit 上衣的两侧会在跪姿和交叉伸手时反复勾到凸出的连接件；[X]会用局部塞衣和已有 Relaxed Fit 上衣各重复组装一段，只在无需持续留意挂碰的场合保留更大体量。"
          },
          {
            "id": "BND_TOPS_FIT_TYPE_V7_010",
            "text": "一整天中，一件已有 Regular Fit 上衣的视觉状态较稳定，另一件已有 Slim Fit 上衣则会在用餐和温度变化后改变贴身感；[X]会用定时记录选择稳定默认，或把更明确的贴合留给较短计划时段。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:closure_type",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "closure_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_CLOSURE_TYPE_PB_01",
            "text": "[X]冒雨进门时双手又湿又冷，新上装的闭合处让[X]停在玄关反复操作；家人拿来那件门边常挂的旧外层，[X]用已经熟练的动作一下便打开，固定件也因多年使用磨得发亮。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_02",
            "text": "[X]一只手抱着睡着的孩子时，[X]需要脱掉上装，却被新结构困住；伴侣托住孩子前已经从[X]的常穿衣物里找出另一件，说那种开合才符合[X]一直坚持的单手节奏。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_03",
            "text": "[X]安静段落里临时换上装，一处闭合发出明显声响，音响师立刻示意更换；备用衣的结构几乎无声，边缘已有多场演出反复操作留下的磨损。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_04",
            "text": "[X]常穿夹克的固定件损坏，修衣师拿出不同替代方案，[X]没有选最接近外观的，而是选了家中其他高频上装也在用、闭眼都能操作的结构。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_05",
            "text": "[X]在康复课堂示范独立穿衣时，[X]带来的上装让学员一次完成，老师问起选择经验，[X]展示了同类固定件上被反复握持形成的光滑痕迹。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_06",
            "text": "[X]脱一件上装时闭合部件再次勾住头发，理发师朋友熟练帮[X]解开，并提醒这已经是同类结构第三次惹麻烦；[X]随后换上不会经过头发附近的常用款。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_07",
            "text": "[X]室内外来回搬东西时，[X]不断调整上装开合，新同事问为何操作这么快，老同事说[X]值班几年一直用这种结构，连说话都不会被打断。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_08",
            "text": "[X]洗衣机停转后，一件上装的固定件又勾住其他衣物；家人从洗衣袋里取出专门保护它的旧网袋，说明这个麻烦已经反复发生，[X]却仍决定修好，因为使用时的开合方式很合意。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_09",
            "text": "[X]进入安检前被要求快速打开外层，[X]身上新买的结构让队伍等了一会儿；同行人递来回程时可换的旧上装，那件在以往出行中已让[X]形成不用低头的开合动作。"
          },
          {
            "id": "TOPS_CLOSURE_TYPE_PB_10",
            "text": "[X]孩子开始自己穿衣时，总拿[X]一件上装练习开合，因为结构直观、容错高；[X]发现自己小时候保留下来的旧照片里，也常穿采用同类方式的衣服。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_001",
            "text": "乘坐日出渡轮、在多风甲板和温暖船舱间反复切换时，[X]会比较 Zipper、Snap 与 Button 上衣能否在另一只手扶栏杆或拿饮料时单手快速调节通风，以及局部打开后能否稳定保持。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_002",
            "text": "参加社区陶艺工作坊时，[X]会比较 Pull-On 上衣与 No Closure 敞开层，并判断一件式服装还是无需扣合、可直接脱下的前开层，更容易在不把湿泥蹭到脸或五金上的情况下脱除。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_003",
            "text": "经常乘坐城市公交时，[X]会背斜挎包，也常要一手扶杆站立，因此包带会反复压过上衣腰部或前侧的闭合处。若短而受控的绳端仍可调节、又不会进入包带路径，[X]会偏好抽绳；若扁平绳结能移到一侧、稳定不松，并避免硬质调节扣被包带压住，则会偏好系带。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_004",
            "text": "照护新生儿、需要频繁喂养和肌肤接触时，[X]会比较 Button、Snap 与 Tie 上衣，看前襟能否直接打开、起身后能否牢固复原，以及五金或结是否会压到孩子。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_005",
            "text": "在需要经历多项影像检查和候诊的一整天前，[X]会核对机构说明，并比较无金属的 Pull-On 上衣与 No Closure 开衫，偏好既能避开金属扣件、又不会增加换装步骤的选择。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_006",
            "text": "布置临时书展时，[X]要抱着箱子在寒冷装卸入口与温暖大厅之间往返，并反复弯腰、伸手；如果上衣能在短暂无负重时通过 Zipper 快速调节通风，而且底端咬合在负重动作中始终可靠，[X]就会偏好这一闭合方式。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_007",
            "text": "全天桌游聚会中，[X]会站着讲规则、俯身越过桌面，也会长时间坐着对局；如果选择性解扣能提升舒适度且桌边动作不会让扣间张开，[X]会偏好 Button，若连续前片在整套姿势变化中更稳定，则偏好 Pull-On。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_008",
            "text": "粉刷房间时，[X]装有工具的围裙宽腰带会在爬梯和伸展滚筒时反复压开已有外穿衬衫的下方 Snap；[X]会先加固该暗扣并重复粉刷一段墙面，再决定以后穿工具围裙做项目时继续用 Snap，还是改用 Button。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_009",
            "text": "[X]已有上衣的 Drawstring 在清洗时反复缩进通道后，[X]会固定并重新穿绳一次，再决定继续保留可调闭合，还是把该开口改成 No Closure。"
          },
          {
            "id": "BND_TOPS_CLOSURE_TYPE_V7_010",
            "text": "一件已有 Tie 前襟上衣即使 [X]更换结法，跳舞时仍会松动，而另一件已有 Pull-On 上衣保持稳定；[X]会根据可调性是否仍有价值，把系带上衣留给低活动场合或予以替换。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:has_hood",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "has_hood",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_HAS_HOOD_PB_01",
            "text": "[X]戴骑行头盔时，新夹克的帽部挤在盔后不断向上推衣领；伙伴从储物柜拿出[X]那件无帽旧款，肩部已有长期背带磨痕，换上后头盔立刻回到熟悉位置。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_02",
            "text": "[X]冰雹来得比预报早，[X]把夹克帽部迅速拉起护住头颈，同行人还在翻找雨具时，[X]已经腾出双手帮忙；帽沿几处修补线显示它不只应付过这一次。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_03",
            "text": "[X]主持前佩戴后颈麦克风，新卫衣的帽部总碰到线缆，技术人员直接换来[X]过去活动常穿的无帽上装；线缆位置和旧照完全吻合，无需重新布置。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_04",
            "text": "[X]在候诊室里，紧张的孩子像往常一样钻进[X]卫衣帽部边缘玩藏脸游戏，布料内侧已经被小手摸得发软；护士说上次来时也见过这一幕。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_05",
            "text": "[X]降温后把中层套进已有连帽外套，新买中层的帽部在肩后叠成厚块；伴侣拿来[X]一直保留的无帽开衫，说它领边被外套磨亮正是多年这样叠穿留下的。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_06",
            "text": "[X]共享空间突然变得嘈杂，[X]拉起卫衣帽部缩小视线范围，很快重新投入手头工作；常一起学习的人已经习惯看到[X]在需要专注时做这个动作。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_07",
            "text": "[X]整理常用围巾时发现每条都在无帽上装的平整领后留下相似压痕，带帽款却几乎没有搭配照片；[X]当天仍把围巾系在那件已磨软的无帽外层上。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_08",
            "text": "[X]遛狗用的连帽上装被树枝划破，修衣师建议直接去掉帽部省事；[X]却指着帽沿的雨斑要求保留并加固，因为固定路线常在无遮蔽路段遇到天气变化。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_09",
            "text": "[X]值班前戴上职业头饰，新制服上装的帽部把后缘顶歪；主管找出[X]以前的无帽版本，内领已经洗白却仍能让头饰稳固，于是同意继续沿用旧结构。"
          },
          {
            "id": "TOPS_HAS_HOOD_PB_10",
            "text": "[X]渡船驶入风口时水雾突然扑来，[X]熟练拉起外套帽部并收紧边缘，同行人注意到抽绳结早已固定在适合[X]的位置，几乎不需重新调整。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_HAS_HOOD_V7_001",
            "text": "参加邻里植物交换、需要双手端着托盘在不同住宅间移动且可能遇到短时阵雨时，[X]会偏好带帽上衣，以便无需放下植物就能立即遮住头部。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_002",
            "text": "在光线明亮且冷气较强的机场过夜转机时，[X]会偏好带帽上衣，以便休息时形成小范围头颈包围，同时要求在航站楼移动时不会妨碍环境感知。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_003",
            "text": "参加包含地面滚动和快速转身的舞蹈排练时，[X]会排除帽子，因为颈后多余布料会移位、进入视野，并在编舞中增加不必要的管理对象。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_004",
            "text": "恢复期间暂时佩戴软质颈托时，[X]会分别穿带帽和无帽上衣完成相同的坐姿日常动作；如果折叠帽布在转头和靠坐时持续把颈托边缘向上顶，[X]会在停止使用颈托前偏好 No。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_005",
            "text": "参加深秋户外电影放映、日落后需要久坐时，[X]会偏好带帽上衣，在风向变化时为头部和耳朵提供可随时使用的缓冲，同时另行准备更恶劣天气方案。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_006",
            "text": "参加户外声音装置定位步行时，[X]需要转向微弱的铃声，并标记它来自小路哪一侧。为了让双耳两侧保持开阔、能更快判断方向，[X]会偏好无帽上衣；需要头部保暖时，也只使用不遮挡这一听声范围的独立配件。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_007",
            "text": "排练灯笼巡游时，[X]要反复背起轻质发光框架、转身接收新面板，再沿队列传递。为了避免松散帽布堆在框架肩带下，或在交接转身时拉扯领口，[X]会偏好无帽上衣。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_008",
            "text": "在多次拥挤列车行程中，[X]坐下时会使用已有上衣的帽子减少周边视觉干扰，起身换乘前再放下；这一重复流程确认了该通勤中偏好有帽。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_009",
            "text": "在肩部以上手工打磨木架底面时，[X]发现已有上衣未使用的帽子会在后颈处接住落下的木屑，而已有无帽上衣可立即掸净；把帽子卷起固定后再试一次，如果仍有木屑进入，[X]会在类似的头顶手工作业中偏好 No。"
          },
          {
            "id": "BND_TOPS_HAS_HOOD_V7_010",
            "text": "走过多风人行桥时，[X]已有夹克未使用的帽子反复兜风并向后拉扯；收紧后仍会分散注意，因此 [X]在暴露桥面步行时选择无帽上衣，并另带头部遮护。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:has_pockets",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "has_pockets",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_HAS_POCKETS_PB_01",
            "text": "[X]工作衫胸袋里的笔漏墨后，洗衣师问是否要封掉袋口，[X]却选择更换内衬，因为同一位置已让自己在无数次值班中不用停步找笔。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_02",
            "text": "[X]准备近距离采访时，造型师递来带袋衬衫，[X]试到镜前后换回无袋款；设备熟练地固定到腰后，摄影师说这样才是他们合作以来熟悉的干净前身。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_03",
            "text": "[X]遛狗回家后从卫衣前袋倒出零食碎屑，狗仍守在袋口旁等候；伴侣笑说那块布已经被鼻子顶得发亮，换洗的同类卫衣也都有相似痕迹。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_04",
            "text": "[X]跑完熟悉路线后，新运动上装的袋口又在胸侧磨出红痕；队友递来[X]常穿的无袋款，那件虽洗旧却从未在长距离时造成同样问题。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_05",
            "text": "[X]过境时工作人员让[X]快速取出证件，[X]无需翻包便从夹克内袋按固定顺序拿出护照和票卡；同行人说每次转场只要看[X]的手势就知道下一件文件在哪里。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_06",
            "text": "[X]穿开衫系围巾时，带袋版本总在前身形成不对称堆量，[X]换回无袋旧款后布料自然垂下；围巾下方的领边已有多年组合留下的柔软压痕。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_07",
            "text": "[X]带新人巡检时，[X]从工作背心不同袋位依次拿出工具，新人还没记住名称便先记住了位置；背心上每个袋口的磨损深浅恰好对应使用频率。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_08",
            "text": "[X]快速换装时，演出衬衫的装饰袋勾住线缆，技术人员当场换成[X]一直使用的无袋版本；旧版前身虽被洗得发白，却没有任何勾挂维修记录。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_09",
            "text": "[X]在公园找到孩子以为丢失的小玩具时，发现它仍在夹克袋里；孩子立刻说“你总放这里”，并自己伸手取出，袋内布已经被许多小物磨出浅痕。"
          },
          {
            "id": "TOPS_HAS_POCKETS_PB_10",
            "text": "[X]把T恤穿在贴身设备下面时，带袋款的接缝正好压住皮肤；[X]换成抽屉里成叠的无袋版本，护理人员也认出这是历次调整设备时最省事的结构。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_001",
            "text": "参观需要小型语音接收器和分时纸票的互动博物馆时，[X]会偏好有口袋的上衣，以便在展厅间收好接收器，并把当前票据与共享包中的纪念品分开。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_002",
            "text": "进行短时狗狗训练散步时，[X]会偏好带有专门口袋的上衣，用来放定量零食，以便及时奖励，又不与钥匙混放或反复打开小包。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_003",
            "text": "经常乘坐家用车时，[X]会在系好斜跨式安全带前，把手机和钥匙放进中央置物区。空的上衣口袋既不承担实际收纳，又会在安全带正下方增加折叠或袋口，因此若前身在坐下、够车门和下车的过程中都保持平整，[X]会偏好无口袋。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_004",
            "text": "参加需要穿贴身触觉背心的动作型 VR 体验时，[X]会偏好无口袋上衣，因为胸前口袋会被反馈面板压住、游戏中无法取用，并可能造成不均匀接触；所有随身物品都留在场地储物柜中。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_005",
            "text": "参加社区种子交换时，[X]会偏好有口袋的上衣，用来临时分开放入的种子包、送出的标签和铅笔，避免反复交换时把已打开的种子包放回错误桌面。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_006",
            "text": "冬季为邻里布置墙面投影时，[X]要在户外幕墙、投影机和控制桌之间往返，并轮流检查供电。为了让贴好标签的备用电池靠近体温，同时与团队传递使用的遥控器分开，[X]会偏好至少带一个内袋的上衣。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_007",
            "text": "在社区面包整形桌旁，[X]要反复俯身接近面粉和柔软面团，并与其他参与者轮换烤盘。个人物品已经放进储物格后，[X]会偏好无口袋上衣，避免空袋口积面粉，也杜绝遗忘的小物在俯身时摆到操作台上。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_008",
            "text": "[X]已有园艺外穿衬衫的开放贴袋即使空着，也会勾住棚架铁丝；在一次任务中把口袋临时固定闭合后，[X]会为靠近密集支架的活动选择无口袋上衣。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_009",
            "text": "[X]已有演出外层的隐藏口袋能在久站和跳动中装住一个耳塞盒且没有可见晃动；此后面对类似限制携包的场地，[X]会要求上衣至少有一个口袋。"
          },
          {
            "id": "BND_TOPS_HAS_POCKETS_V7_010",
            "text": "即使只放一张折叠纸票，[X]已有雪纺上衣的口袋也会下坠并透出内容；[X]因此不再把这种装饰袋当作可用储物，并偏好同类轻薄半透明上衣无口袋。"
          }
        ]
      }
    },
    {
      "id": "product_bound:tops:price",
      "binding": "product_bound",
      "category": "tops",
      "attribute": "price",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "TOPS_PRICE_PB_01",
            "text": "[X]去洗衣店领取衣物时，店员发现一件常穿衬衫遗失，便打开不同价位的赔付目录让[X]挑替代品。[X]没有把意外当成升级或省下一笔的机会，而是翻出原订单，选中与衣柜里几件袖口已经磨软的常穿上装处在同一价位区间的一件。"
          },
          {
            "id": "TOPS_PRICE_PB_02",
            "text": "[X]清理漏水后的衣柜时，需要为几件受损上装填写重购金额。理赔员把不同价格的替代方案排在平板上，[X]先圈出的不是原价最高的几件，而是那些与自己已经补领、洗旧过的衬衫和外套处于同一价格带的选项。"
          },
          {
            "id": "TOPS_PRICE_PB_03",
            "text": "[X]试穿家人送的生日夹克后很喜欢版型，却发现吊牌价格远离自己平常会买的范围。去店里换货时，[X]没有照着礼物金额选满额度，而是换成一件落在熟悉价位、回家便能和几件旧上装一起轮换的款式，剩余差额按原路退回。"
          },
          {
            "id": "TOPS_PRICE_PB_04",
            "text": "[X]的一件旧夹克破损到无法继续修补，裁缝按不同用料和工时列出几档重做报价。[X]从保存的工单袋里找出另外几件上装的成交单，最后采用与那些已经反复返修、仍在穿用的衣物相近的一档，而没有被最低或最高报价带走。"
          },
          {
            "id": "TOPS_PRICE_PB_05",
            "text": "[X]第一次使用公司发放的着装补贴，页面允许把额度分给多件上装，也可以补差价购买更高价款。[X]对照自己真正穿旧的工作衬衫，把每件预算落在相近价位；下次轮岗的同事查看报销单时，也按这个单件范围为[X]预留了额度。"
          },
          {
            "id": "TOPS_PRICE_PB_06",
            "text": "[X]的行李延误，需要在当晚买一件上装参加第二天的安排。商场从临时应急款到高价款都有现货，[X]仍打开自己的购买记录，选了一件与过去旅行后继续穿用的几件上装处在同一价格带的商品，而不是把它当成一次性用品。"
          },
          {
            "id": "TOPS_PRICE_PB_07",
            "text": "[X]收到一件限时促销买下的针织上装后，商家通知页面标价有误，可以按更正后的价格保留或免费退货。[X]没有只看折扣幅度，而是把更正价与自己几件已经起球却仍常穿的针织物订单放在一起比较；确认它仍落在那个价位区间后才剪下退货标签。"
          },
          {
            "id": "TOPS_PRICE_PB_08",
            "text": "[X]在百货店预约试穿时，导购依据尺码拿来了几件价格跨度很大的上装。试穿结束后，[X]留下的那件并非最便宜或最贵，而是落在会员账户中多件补购过、也送回店里修补过的上装所集中的价格带；导购随即把偏离该区间的备选撤回货架。"
          },
          {
            "id": "TOPS_PRICE_PB_09",
            "text": "[X]的一件上装按标签洗涤后严重缩水，商家提供等额退款，也允许在不同价位间补差或返还余额。[X]拿着退款重新挑选时，先调回自己订单里复穿率最高的价格区间，再从其中选替代款；新衣随后和那些旧订单对应的衣物一起出现在晾衣架上。"
          },
          {
            "id": "TOPS_PRICE_PB_10",
            "text": "[X]使用的衣物租赁服务更换系统后，上装价格偏好被重置，寄来的第一箱从低到高混在一起。[X]试穿后只把某一价格带的几件挂进日常区，其余按时退回；客服恢复旧账户时发现，前几季被[X]多次续租并最终买断的上装也集中在这个区间。"
          }
        ],
        "B": [
          {
            "id": "BND_TOPS_PRICE_V7_001",
            "text": "社区合唱团订购统一上衣时，[X]会把单件阶梯价与样衣费、全尺码附加费、补购可能和两位后加入成员的成本一起比较，偏好全体总价更公平的报价，而不是最低宣传单价。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_002",
            "text": "由于标准上衣反复需要修改袖长和衣身，[X]会比较较低成衣价加两项修改，与较高量身定制报价；只有复试、重做和最终交付日期都包含在内时，才愿意支付服务溢价。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_003",
            "text": "预购海外艺术家周边上衣时，[X]会把标价与汇率转换、税费、拼单运费、交付不确定和可能不可退一起比较，并按个人使用价值而非稀缺性设定总价上限。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_004",
            "text": "规划使用两年的精简衣橱时，[X]会比较需要频繁熨烫或专业清洁的低价上衣与价格较高的易护理选项，并只通过真实洗护时间、服务费用和预计穿着频率判断溢价价值。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_005",
            "text": "参加一次主题邻里表演时，[X]会比较购买新上衣、从服装库借用和出资购置团体共享套装，并且只有活动后存在可信用途时才为个人所有权付费。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_006",
            "text": "一处明显污渍让 [X]已有浅色上衣很少能穿；[X]会比较专业去渍、整件套染和替换，并按可能恢复的穿着次数而非原价设定挽救费用上限。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_007",
            "text": "一年后，[X]会比较一件常穿的昂贵已有女衫与一件只穿两次的便宜潮流上衣，计算真实单次使用成本，并围绕可重复的衣橱角色而非单看标价设定下次预算。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_008",
            "text": "[X]折扣三件套中有一件不合身；[X]会比较整套退回、付费修改单件，以及只有另外两件成功上衣仍能证明不可退总价合理时才保留。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_009",
            "text": "一件昂贵的已有上衣一直闲置，因为 [X]总在等待足够特别的活动；[X]会比较现在开始穿、寄售，以及把未来价格上限降到不会产生珍藏焦虑的水平。"
          },
          {
            "id": "BND_TOPS_PRICE_V7_010",
            "text": "[X]新拥有的一件定制印花上衣明显偏心；[X]会比较接受部分退款、要求延迟寄送的完整重印和本地覆盖印制，并按各方案能恢复多少可穿价值选择补偿。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:color",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "color",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_COLOR_PB_01",
            "text": "[X]常穿裤子的膝部补片颜色已与周围不同，修衣师问是否整条重染；[X]宁愿保留可见修痕，也不想失去那个已经在工作和日常里穿旧的底色。"
          },
          {
            "id": "BOTTOM_COLOR_PB_02",
            "text": "[X]室友收下晾衣架时，把一条新裤子放错了房间，却把几条洗得发白的旧裤准确交给[X]；室友解释，后几条的颜色才像每天会在门口见到的[X]。"
          },
          {
            "id": "BOTTOM_COLOR_PB_03",
            "text": "[X]单位更新工作裤颜色，负责人让大家先看旧裤的污渍和褪色；[X]指出自己那条虽使用最久仍愿意继续穿，而试行色只值过几次班就被换下，最终申请保留旧色方案。"
          },
          {
            "id": "BOTTOM_COLOR_PB_04",
            "text": "[X]在店里拿起一条颜色很新鲜的裤子，朋友先问[X]上次同色那条后来穿过几次；[X]想起它仍叠在衣柜最底层，便转向另一种自己确实会穿旧的颜色。"
          },
          {
            "id": "BOTTOM_COLOR_PB_05",
            "text": "[X]洗衣店说明一条裤子的颜色无法完全恢复，[X]看过磨白的膝部和裤脚后仍决定只做固色；店员查到这已是[X]第三次为相近色调的下装接受自然褪色。"
          },
          {
            "id": "BOTTOM_COLOR_PB_06",
            "text": "[X]活动前裤子意外破损，兄弟姐妹递来几条备用，[X]没有对镜太久便选了其中一色；家人笑说从学生时代起，紧急借衣时总能猜中[X]会拿哪类颜色。"
          },
          {
            "id": "BOTTOM_COLOR_PB_07",
            "text": "[X]彩排时导演发现一条裤子的颜色与舞台地面融在一起，建议换成更醒目的版本；[X]接受了画面需要，却从旧演出箱里挑出自己仍愿意在散场后穿走的另一色，而不是只为镜头服务的极端方案。"
          },
          {
            "id": "BOTTOM_COLOR_PB_08",
            "text": "[X]裁缝给旧裤换线时，发现为[X]历次订单保留的线轴集中在相近色域；新裤原本想换方向，[X]看到那排已用去大半的线轴后，仍选了能进入现有生活的颜色。"
          },
          {
            "id": "BOTTOM_COLOR_PB_09",
            "text": "[X]拍摄证件资料时，摄影师说裤色几乎不会入镜，[X]却仍换掉让自己站姿别扭的颜色；助理查看以往全身工作照，发现[X]每次正式拍摄下半身都落在熟悉色域。"
          },
          {
            "id": "BOTTOM_COLOR_PB_10",
            "text": "[X]接过亲戚留下的合身牛仔裤时，家人建议染成当季颜色，[X]却选了更接近自己几条磨损旧裤的色调；改好后，它很快和那些旧裤一起进入洗衣轮换。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_COLOR_V7_001",
            "text": "帮忙铺设庭院马赛克时，[X]大半天都跪在浅色砂浆、红褐灰尘和橄榄色种植床旁，并根据普通残留在掸去后是否仍会让每次轻微接触显得像严重污渍来选择下装颜色。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_002",
            "text": "参加黄昏社区灯笼步行时，[X]携带的大纸灯笼经常遮住上半身，因此小组会测试哪些明亮下装色在琥珀色灯光下仍能从膝部高度辨认，同时不会与活动标记混淆。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_003",
            "text": "参加一场坐席公共讨论的录制前，[X]会在中蓝色舞台墙前检查全身镜头，并比较深色下装会让腿部保持清晰、融入椅子，还是比面部更抢注意力。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_004",
            "text": "参加天然染色工作坊时，[X]会靠近产生叶绿色、蓝绿色、绿松石色和紫色液体的染缸，并选择既能让意外液滴及时显现以便冲洗、又不会像浅色表面那样让每次无害泼溅都过度醒目的下装颜色。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_005",
            "text": "参加以暖色烛光和反光饰物布置的冬至大厅活动时，[X]会同时在琥珀色活动光和入口中性光下查看布样，并决定下半身应产生反射、柔和发亮，还是保持浅淡安静。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_006",
            "text": "参加居家动作挑战并在深色地面和墙面前录像时，[X]会从侧面回看深蹲与弓步，检查膝盖是否清楚地沿脚部方向移动；[X]偏好能让腿部轮廓脱离背景、又不会亮到过曝而抹掉髋膝边界的浅色下装。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_007",
            "text": "[X]在铺有酒红桌布的晚餐中再次穿一条勃艮第色长裤，并复盘烛光餐桌和明亮大堂中的照片，判断它是否保持有意的红紫色身份，还是融入环境而失去区分。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_008",
            "text": "在浅水池动作排练中，伙伴要先透过蓝绿色水体观察彼此腿部方向，再完成同步转身；[X]偏好一种能同时与池底和水面反光区分的下装颜色，并依据排练录像在蓝绿、绿松石、蓝和绿之间选择，而不是只看更衣室里的干燥效果。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_009",
            "text": "一条已有炭灰色长裤在无遮蔽的夏季站台多次等候时显得异常闷热；[X]把它与同织物的黑、灰和海军蓝色样放在直射阳光与阴影中，检查较浅的深色是否带来有意义的表面温差，再决定是否改变偏好的颜色。"
          },
          {
            "id": "BND_BOTTOM_COLOR_V7_010",
            "text": "多年只选中性色下装后，[X]把一条已有的珊瑚色短裤依次穿去独自散步、家庭午餐和社区游戏，并记录这种暖亮色是逐渐显得有活力，还是始终让人不自在地显眼，再决定是否考虑粉、橙或黄色方向。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:material",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "material",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_MATERIAL_PB_01",
            "text": "[X]长班结束后，新工作裤在膝后留下明显闷痕，老同事从更衣柜递来[X]常备的另一种成分；那条裤子虽已多次补膝，久蹲后仍没有同样问题。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_02",
            "text": "[X]照护孩子的一天里裤子被弄脏两次，夜里清洗后却缩水变形；伴侣提醒[X]，前几条同成分下装也都没能留过一个季节，于是[X]没有再买同类替换。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_03",
            "text": "[X]骑马结束后检查裤装，某种材料在鞍侧又磨出毛边，教练拿出[X]那条长期训练用的旧裤；旧裤贴合处已被磨亮，却从未突然破损。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_04",
            "text": "[X]腿侧反复起疹后，医生让[X]带来最近穿过的裤装；查看旧病历和洗标后，几次不适都指向同类成分，而被穿到腰口变软的常用裤从未触发反应。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_05",
            "text": "[X]露营火星落到裤腿，新裤很快留下破点，同行人递来[X]以前常穿的旧款，表面有多处熏痕却没有烧穿；[X]决定以后仍让后一种材料承担篝火夜。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_06",
            "text": "[X]裁缝修改裤腰时注意到座位处已磨出明显光泽，问[X]是否介意这种老化；[X]拿出另一条同材料旧裤，说正因为喜欢它随着久坐形成的变化，才愿意继续修而不是换材。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_07",
            "text": "[X]旅行中裤脚被雨打湿，第二天出门时仍沉重未干；同行人已经替[X]把另一条常带的材料挂到门边，因为前几次潮湿行程里[X]最后都靠它继续赶路。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_08",
            "text": "[X]宠物跳上腿时勾住新裤表面，留下明显拉痕；家里几条被宠物反复踩过的旧裤采用另一类成分，只留下可接受的浅印，[X]因此把新裤改作不在家的时候穿。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_09",
            "text": "[X]膝部修补后第一次蹲下，补片比原裤更硬，立刻限制动作；修衣师翻到[X]以往维修单，发现那些后来持续复穿的裤子都用了与身体弯折更协调的材料。"
          },
          {
            "id": "BOTTOM_MATERIAL_PB_10",
            "text": "[X]进入冷库工作不久，新保暖裤的材料让腿部又冷又僵，主管换来[X]过去值班常领的另一种成分；库存标签显示同类裤已为[X]补领过多次，旧件也都在膝部磨损。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_MATERIAL_V7_001",
            "text": "在潮湿午后参观蝴蝶温室时，[X]会缓慢步行、坐在温热长椅上，并避免擦碰植物；[X]会根据贴肤感、湿气处理、离馆后的干燥表现以及愿意接受的褶皱程度，比较植物来源的下装材料。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_002",
            "text": "冬季清晨等候本地渡船时，[X]要在风中站立、进入暖舱过河，再在对岸回到户外；下身层会按纤维如何保温、处理室内阶段的汗气，以及沾上海雾后的干燥表现来选择。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_003",
            "text": "参加冷水划板安全练习时，[X]会练习入水、爬回稳定板面以及湿身在岸边等待，并按浸水保温、重新上板时的弹性、耐磨或快速排湿，为不同下装材料分配角色。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_004",
            "text": "参加轮滑场主题夜、之后去普通咖啡馆时，[X]考虑带皮革感表面的长裤，并根据自己的来源边界、座面舒适、护理容忍度和预期复穿频率，判断动物来源材料、合成替代品或织物诠释哪一种最合适。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_005",
            "text": "参加包含长时间坐席用餐和场地间短途步行的小型正式晚宴时，[X]会比较飘垂下装的纤维选择如何影响贴肤温度、静电、垂坠、褶皱恢复以及下次计划穿着前的护理。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_006",
            "text": "乘坐夜间卧铺列车时，[X]会穿着同一下装经历坐席、盖着车上毛毯躺卧，以及黎明前穿过安静走廊；[X]会依据长时间贴肤感、与毛毯摩擦的静电、走动声音和晨间停车通风后的清爽程度，比较棉、尼龙与聚酯。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_007",
            "text": "前往小岛且住宿处只有洗手池、毛巾和隔夜晾衣绳时，[X]计划在经历一天海风后手洗一条下装，次日早晨再次穿用；[X]会依据吸水量、能否承受毛巾卷压、隔夜干燥状态，以及膝部和腰头无需熨烫能否恢复，比较亚麻、粘胶和竹纤维。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_008",
            "text": "[X]在每周哲学讨论会之间把一条已有羊毛长裤通风，并记录其保暖、气味控制和形状恢复是否能减少清洗次数，从而值得更仔细存放，还是易护理的腈纶或聚酯下装更合适。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_009",
            "text": "在几次偏暖、久坐的游戏夜中，一条已有仿皮长裤反复粘住椅面，并在起身时产生明显拉扯；[X]随后用皮革和皮革外观的聚酯样布重现相同的定时座面接触，在保持视觉方向不变的前提下，按热量积聚与能否顺畅离座进行选择。"
          },
          {
            "id": "BND_BOTTOM_MATERIAL_V7_010",
            "text": "参加室内划船机接力时，[X]穿同一条已有的合成材料下装完成四段计时划行与坐姿恢复；分区检查会显示 Neoprene 拼片是否积聚多余热量、Spandex 区域在深度压缩后能否复原、Polyolefin 基层是否保持轻盈、Nylon 接触区能否承受反复座缘摩擦，因此[X]只在实际结果证明其作用的部位偏好相应材料。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:fabric_type",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "fabric_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_01",
            "text": "[X]安静演出中坐下时，新裤表面发出明显摩擦声，[X]只能减少动作；散场后朋友提到[X]平时那类织物从不会在剧场暴露存在感，旧票根照片也总能看到它。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_02",
            "text": "[X]骑车时裤脚表面再次被链条勾住，维修员认出这种织法上次也留下长丝；[X]换回那条多次骑行只在边缘磨白、没有被勾开的旧裤。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_03",
            "text": "[X]跪地布置展览后拍打裤腿，一种表面让粉尘深陷纹理，另一条常用工作裤却几下便干净；搭档说后者每次撤展结束都能直接穿回家。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_04",
            "text": "[X]舞蹈彩排时，灯光让新裤的表面纹理意外放大，动作轮廓被打散；服装师换上[X]往季常用织物，膝部虽已有训练痕迹，镜头里仍保持清楚。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_05",
            "text": "[X]长途火车到站后，新裤在膝弯压出难以恢复的折痕；同伴那才明白[X]为何过去总穿另一类表面出行，那几条旧裤即使久坐，抖开后仍能直接见人。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_06",
            "text": "[X]陪孩子玩滑梯后，裤子座位处出现一片起毛；孩子说[X]以前那条滑很多次都只是变亮，没有这样粗糙，[X]回家便把两种织物的使用场合重新分开。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_07",
            "text": "[X]试穿新定制裤时，裤缝走几步便向腿前扭转；裁缝拿出[X]那条穿了多年的旧裤检查，另一种织物即使多次洗涤仍沿腿侧垂直，于是决定重做而非勉强熨平。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_08",
            "text": "[X]从花园回来，裤腿沾满细小草籽，某种表面怎么刷都挂着；邻居递来[X]以前常穿的旧园艺裤，上面的同类痕迹只需轻拍就落下。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_09",
            "text": "[X]阵雨后，新裤湿处在光下变得明显透薄，[X]只能临时围住下半身；朋友想起[X]其他潮湿行程总带另一种织物，那些裤子裤脚虽常有水痕，却不会出现同样尴尬。"
          },
          {
            "id": "BOTTOM_FABRIC_TYPE_PB_10",
            "text": "[X]给旧裤补膝时，家人问为何不把补丁完全藏住；[X]指着织物本身的立体纹理，说过去几次修补都让痕迹自然融进去，正是这种表面让自己愿意把裤子穿得更久。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_001",
            "text": "观看黎明前热气球放飞时，[X]要在冰冷草地旁等待，在站立和坐上折叠毯之间切换，之后又进入温暖咖啡馆；[X]会比较不同下装织物的表面结构如何保温、应对潮湿接触并适应温度转换。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_002",
            "text": "参加温暖室内的动作解谜活动时，[X]要爬过低框、扭身传递物品并在地垫上暂停，因此会根据织物能否多向活动、膝部能否回弹，以及是否在散热时避免粗糙孔洞摩擦皮肤来选择针织结构。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_003",
            "text": "参加全天公民议事活动时，[X]会在紧密坐席聆听、站到麦克风前发言和集体合影之间切换，并比较结构型弹性织物能否保持膝部与座部整洁、久坐后恢复，同时避免显得过硬或过于运动化。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_004",
            "text": "参加风暴后的岸线漂流物调查时，[X]要穿过湿草、擦过折断芦苇，并短暂跪下记录物体位置；下装织物会按阻止裂口扩展、表面防护、干燥表现以及细碎物能否擦除来选择。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_005",
            "text": "参加油毡版画工作坊时，[X]会贴近硬桌边站立、擦去大腿上的偶发油墨，并需要下装有足够织物支撑，避免工具隔着折叠围裙压出痕迹；[X]会按密度、折痕表现和反复前倾时的自由度比较常见梭织结构。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_006",
            "text": "闷热的几周里，[X]常步行去附近一家小餐馆；店里的编织座椅和狭窄过道，会让有固定衬里的半身裙外层同时面对热气、久坐摩擦和桌角。经过多次普通晚餐，[X]会按透气、起身后的恢复、是否勾挂，以及穿过其他桌位时占用的空间，区分雪纺、蕾丝、欧根纱、薄纱网和巴里纱。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_007",
            "text": "经过数次双人舞入门课，[X]穿同一条缎面裙，并记录其表面能否顺畅掠过舞伴和椅子、回家路上裙摆是否留下压痕，以及更低光泽的垂坠或柔软绒面是否更适合反复使用。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_008",
            "text": "在未供暖的石砌大厅参加原声聆听活动时，[X]会坐木长凳，只在静默间隔中走动，离开前再刷理坐面；[X]会依据保暖、久坐后的压痕、恢复表面所需动作，以及安静室内大腿摩擦是否可闻，比较灯芯绒、人字纹织物和天鹅绒。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_009",
            "text": "多次洗涤后，一条已有针织短裤的网眼侧区开始起伏，而针织主体仍然平整；[X]在接下来的三个洗涤周期后都把短裤覆盖到早期轮廓线上，对比网眼、平针、双面针织或罗纹针织中哪种结构更能长期保持预定的分区形状。"
          },
          {
            "id": "BND_BOTTOM_FABRIC_TYPE_V7_010",
            "text": "参加社区声音地图步行时，一条已有青年布长裤的双腿摩擦声出现在数段安静录音中；[X]随后在麦克风旁用府绸、斜纹布、帆布和牛仔布样重复相同步伐，在不改变路线和下装形态的前提下判断哪种梭织结构足够安静。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:style",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_STYLE_PB_01",
            "text": "[X]储物间进水后，只来得及抢救几条裤装。[X]先拿走的是那些边缘已磨旧、却仍能代表自己日常气质的款式，几条买来追赶潮流但很少穿的反而留在高处等待处理。"
          },
          {
            "id": "BOTTOM_STYLE_PB_02",
            "text": "[X]二手店主收到一条特殊裤装后先联系[X]，因为记得[X]以前试过相近气质时会在店里直接穿走，而另一类热门款即使预留也总被放弃。[X]到店后果然先问能否日常活动。"
          },
          {
            "id": "BOTTOM_STYLE_PB_03",
            "text": "[X]工地发放统一工作裤后，大家只能在不影响安全的位置做小调整。[X]选择的细节让新裤很快回到自己熟悉的气质，老搭档看到后说，前几批工装上[X]也总能用不同办法达到同样效果。"
          },
          {
            "id": "BOTTOM_STYLE_PB_04",
            "text": "[X]校友活动允许重穿旧制服裤，[X]没有照原样复刻学生时期，而是用如今真正会穿的方式重新组合。旧同学发现，这种气质其实在[X]毕业后的几次聚会中已经逐渐成形，并非当天临时改造。"
          },
          {
            "id": "BOTTOM_STYLE_PB_05",
            "text": "[X]舞团为新作品发了统一裤装，编舞让每个人保留一条自己的替代款。[X]带来的裤子与舞目主题不同，却让动作气质最自然；编舞因此沿用了前两部作品也给[X]留出的个人方案。"
          },
          {
            "id": "BOTTOM_STYLE_PB_06",
            "text": "[X]裁缝让学徒在三条半成品裤中猜[X]最终会留下哪条。学徒根据店里几条被[X]穿旧后送回保养的商品选中一款，[X]试穿后只改尺寸，没有改动其视觉语气。"
          },
          {
            "id": "BOTTOM_STYLE_PB_07",
            "text": "[X]伴侣为一次保密目的地的短途旅行替[X]装行李，只带了两条裤装。到达后无论白天还是晚间，[X]都愿意穿其中气质更像自己的那条；伴侣说过去替[X]收拾行李时，真正被穿到的也总是这一方向。"
          },
          {
            "id": "BOTTOM_STYLE_PB_08",
            "text": "[X]常去的改衣店把一条修好的裤子暂时穿在展示人台上，[X]进门时远远便觉得那件商品很像自己。店员笑说，店里过去几次只要把[X]的裤装挂出来，客人就会问是不是同一个人的选择。"
          },
          {
            "id": "BOTTOM_STYLE_PB_09",
            "text": "[X]大风把两户晾晒的裤装吹到同一处，邻居按风格而非尺码分回给[X]。其中几条新旧差别很大，却都带着相似气质；真正分错的是一条买来后几乎没穿的尝鲜款。"
          },
          {
            "id": "BOTTOM_STYLE_PB_10",
            "text": "[X]服装展借用[X]一条有生活痕迹的裤装，策展标签给它贴了一个流行风格名称。[X]看后觉得重点不对，便用自己另外几条常穿裤的共同细节解释为何它属于另一种气质，策展人据此重写说明。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_STYLE_V7_001",
            "text": "参加修复火车车库的开放日时，[X]会选择能承认建筑工业历史、又不像借来的制服的下装，并比较可见的实用设计语言、年代呼应和干净的当代诠释。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_002",
            "text": "参加在改造马厩举办的地域手作市集时，[X]希望下装能与皮具、编织品和庭院随意坐席产生呼应，同时保持个人化而非角色装扮，并在直接地域引用、松弛手作混搭和安静日常感之间选择。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_003",
            "text": "参加包含短时动作展示和较长社交休息的城市动作游戏节时，[X]会选择离开活动地面后运动身份仍显得有意的下装，并判断可见性能语言、干净当代形态或当下街头线索应由谁主导。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_004",
            "text": "参加旧联排住宅里的烛光诗歌沙龙时，[X]会选择既支持专注聆听和短暂朗读、又不假扮房间年代的下装轮廓，并比较持久克制、精致优雅和更松弛的艺术化诠释。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_005",
            "text": "固定去游乐场时，[X]会在沙坑边、矮台阶、长凳和回家步行之间不断转换，还要随身带纸巾等小物。若外露的加固和实用细节本来就是造型的一部分，[X]会偏好工装风；若想让这套日常显得不经意，会偏好休闲风；若希望功能被收进更干净的整体轮廓，则会偏好现代风。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_006",
            "text": "家庭换季修补日前，[X]会把一年中下装在膝部、座部、裤脚和工具接触处的真实磨损标出来；当可见加固与实用设计语言对应反复损伤时，[X]偏好工装风；这些线索会夸大普通使用时则偏好休闲风；若同样保护能融入更干净的整体线条，也可偏好现代风。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_007",
            "text": "连续两周，[X]把一条继承来的褶裥长裤分别穿去普通白天办事和一次安静的朋友晚餐，并不向朋友说明其来历；[X]依据他们未经提示的描述，判断整件下装更像有明显年代感的 Vintage、跨时期稳定的 Classic，还是以精致为主的 Elegant，而不会让主题场地替它给出标签。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_008",
            "text": "在一次衣物交换中，[X]请三位亲属只用熟悉的衣物，分别为一条已有流苏裙独立搭配；形成的直接地域式、混搭层叠式和安静日常式组合，让[X]无需把半裙放进主题活动，就能判断其最强身份是 Western、Bohemian 还是 Casual。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_009",
            "text": "针对一条已有技术型长裤，[X]依次向同一小组展示立体膝部与拼片近景、全身画面和远距离步行画面，检查最先被读出的身份是否会随观察距离从 Outdoor 细节转为 Sporty 动势，或最终稳定为干净的 Modern 轮廓。"
          },
          {
            "id": "BND_BOTTOM_STYLE_V7_010",
            "text": "在未完工混凝土庭院拍摄邻里集体肖像时，参与者约定每个人贡献一种不同的设计角色，而不是完全统一；[X]会根据自己在画面中的任务选择下装风格：需要诚实记录当下时偏好潮流，需要以干净几何呼应场地时偏好现代，需要提供精致对照时偏好优雅。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:occasion",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "occasion",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_OCCASION_PB_01",
            "text": "[X]到固定场地后才发现裤装沾污，管理员从储物柜里拿出一条一直替[X]保留的备用。柜门上的领用签名跨了多次同类活动，这条裤子的膝部也正好磨在该环境常受力的位置。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_02",
            "text": "[X]某类安排临近时，阳台上的裤装还没有干透，家人没有建议换成别的，而是把风扇移过去帮它赶上出门时间。因为以前碰到同类日子，[X]宁可提前洗，也总会等这条或同用途的裤子。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_03",
            "text": "[X]从某类活动回来后，[X]发现裤装座位处又留下熟悉的压痕。同行人拿出上一次同环境的照片，两条不同裤子在相同位置都有痕迹；[X]于是把今天这条也归入该用途的常备区。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_04",
            "text": "[X]伴侣替[X]准备某类安排时，把需要随身带的小物按惯例放进一条裤装旁边。即使[X]临时换了上身搭配，也没有换掉这条，因为腰腿动作和物品位置早已适应这种日程。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_05",
            "text": "[X]多次接送[X]去同类地点的司机这次看见裤装便问是不是又去那个活动，因为过去几回[X]都穿着同用途的款式上下车。[X]笑着确认，并熟练调整裤脚坐进后座。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_06",
            "text": "[X]得知某类活动临时停办后，本可以取消一条专用裤装的加急洗护，却只把取件日改到新日期前一天。店员把原本要撤下的用途处理标签重新贴好；旧标签留下的压痕正落在同一处，裤装上与该场合有关的磨损也已经处理过不止一层。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_07",
            "text": "[X]换穿新裤参加固定活动时，一位同伴立刻问那条熟悉的去哪了，说大家已习惯在某个动作环节看见它的轮廓。[X]解释旧裤正在清洗，并在下次活动又穿了回来。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_08",
            "text": "[X]去某类安排的路上天气突然变化，[X]没有取消，也没有改穿另一用途的裤子，只在固定中转点加了保护层继续前往。同行人说这条裤装过去也以相同方式适应过途中变化。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_09",
            "text": "[X]回到家后，[X]没有把裤装丢进普通脏衣篮，而是按某类活动后的习惯先通风、刷理，再挂到专门位置。第一次来访的朋友跟着做时，家人准确说出了每一步的顺序。"
          },
          {
            "id": "BOTTOM_OCCASION_PB_10",
            "text": "[X]为下一次某类活动改裤时，裁缝没有只量静态尺寸，而是让[X]做那个场合里最常出现的姿势。旧改线正好在同一受力处，裁缝便沿用而没有重新猜测。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_OCCASION_V7_001",
            "text": "周六早上没有固定安排时，[X]常先穿上坐着舒服、出门也利落的下装，再慢慢决定当天做什么。这样的周末持续了几个月，[X]每次起床后最先拿的还是这一类。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_002",
            "text": "在共享办公空间的一天里，[X]会在桌面工作、小会议室、共用午餐区和回家路程之间转换，并选择以持续的工作场所呈现和坐姿舒适为主要角色、而非仪式或运动用途的长裤。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_003",
            "text": "参加社区匹克球入门活动时，[X]需要能应对反复侧步、短冲、发球练习和场边休息的下装，因此运动参与本身、而不是去球场的路程，成为衣物的定义角色。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_004",
            "text": "参加穿过松散砾石和低矮灌木的公众化石步行时，[X]会在攀上缓坡、跪下观察裸露岩层和迎风等待之间切换，并选择以持续应对不可控户外地面与天气为主要角色的下装。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_005",
            "text": "在宽阔沙滩度过安静上午时，[X]会在岸边涉水、直接坐在毛巾上并走到附近冲洗区，因此把下装明确分配给沙粒、海水和便捷更换，而不是笼统服务于整天外出。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_006",
            "text": "参加为期六周的晚间语言课程时，[X]会从入口签到依次进入听力练习、结对活动、短暂休息和偶尔的图书馆自习；[X]把下装定义为上学场合使用，是因为它要支持这套反复出现的学习流程，而不是因为课程把[X]限定在某个年龄、职业或一次正式展示中。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_007",
            "text": "参加不设主题服装的新年百家宴时，[X]会在客人到达前帮忙摆放食物，随后在席地而坐、集体合影和午夜后的音乐活动之间移动；排除布置阶段的衣着需求后，[X]偏好主要服务派对的下装，因为核心要求来自庆祝中的社交转换，而非做饭、日常办事或正式仪式。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_008",
            "text": "在湖边租住小屋的一周里，[X]反复穿同一条长裤经历悠闲早餐、村庄拜访、乘船和晚间桌游，并判断这件物品是否因能轻松适应这些日常周程中少见的转换而获得 Vacation 角色。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_009",
            "text": "[X]记录一条熟悉牛仔裤在三周普通生活中的使用，包括办事、登门拜访、随意用餐和公共交通，并用穿着频率以及无需特殊准备这两点确认它最强的角色是 Daily，而非罕见活动。"
          },
          {
            "id": "BND_BOTTOM_OCCASION_V7_010",
            "text": "经过数次果园志愿活动，[X]反复穿同一条长裤应对湿草、扶梯观察、树枝接触和户外午餐，并据此判断它可靠的角色是环境暴露与场地活动，而不是室内日常穿着。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:season",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "season",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_SEASON_PB_01",
            "text": "[X]遇到家中供暖刚开启，家人没有询问便把一条裤装从普通晾架移到离暖气更远的位置，以免它干得过硬。那只远端衣架在裤腰宽度处已有固定压痕，裤膝也留下多轮穿用磨损；[X]接过后直接穿上，没有重新处理手感。"
          },
          {
            "id": "BOTTOM_SEASON_PB_02",
            "text": "[X]在天气转热后第一次骑共享车，新裤与晒热坐垫接触后立刻改变路线，先到单位更衣柜换下。柜里那条备用下装已经洗得柔软，折痕也贴合固定格口；[X]换上后继续骑完原定路程，晒热坐垫不再迫使身体躲闪。"
          },
          {
            "id": "BOTTOM_SEASON_PB_03",
            "text": "[X]为常穿裤改腰时，裁缝先问[X]会在哪段天气搭配内层，再按实际叠穿量体。旧裤内侧几种压痕显示它长期跨过不止一个季节，[X]因此要求继续保留这种余量。"
          },
          {
            "id": "BOTTOM_SEASON_PB_04",
            "text": "[X]今年第一次在傍晚被蚊虫围住时，[X]从门后拿起一条固定在这个天气阶段使用的裤装。邻居看见便笑说，过去几个暖季只要[X]换上它，院子里的驱蚊灯也会同时被打开。"
          },
          {
            "id": "BOTTOM_SEASON_PB_05",
            "text": "[X]晾在室外的裤装边缘因突降温结硬，[X]收回后没有换季封存，而是按熟悉方式软化并继续穿。家人指出，同材同型的旧裤每次冷空气来临都经历这套处理。"
          },
          {
            "id": "BOTTOM_SEASON_PB_06",
            "text": "[X]温室内外温差增大后，新工作裤让[X]每次进出都要停下调整。主管换回[X]前几个种植周期常领的裤装，内外侧不同位置的磨损显示它已适应这种季节转换。"
          },
          {
            "id": "BOTTOM_SEASON_PB_07",
            "text": "[X]换季检查时，家人先查看一条裤装的裤脚和内层，而不是按厚薄把它直接收走，因为这件商品常在天气过渡期继续使用。几次防虫标签日期跨越春秋两端，印证了这种安排。"
          },
          {
            "id": "BOTTOM_SEASON_PB_08",
            "text": "[X]露天电影散场后温度突然下降，同行人都临时加层，[X]所穿裤装仍让腿部保持熟悉状态。朋友摸到裤脚洗软的边缘，说前几个放映季也见[X]用它坐完整晚。"
          },
          {
            "id": "BOTTOM_SEASON_PB_09",
            "text": "[X]裁缝拆开旧裤脚时发现反复受潮后形成的浅水线，[X]解释那来自每年某段天气的通勤路。师傅只加固边缘，没有建议换成单季新品，因为这条裤子仍按原路线被使用。"
          },
          {
            "id": "BOTTOM_SEASON_PB_10",
            "text": "[X]亲属借走一条裤装后，到天气转折才归还，说终于明白[X]为什么总在这段时间把它放在椅背。归还当晚，[X]便穿着它去完成平常路线，裤腰也已有多轮同季洗穿形成的柔软感。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_SEASON_V7_001",
            "text": "在气候温和月份参加社区雨水花园参观时，[X]预计清晨偏凉潮湿、可能有短时阵雨，中午又会转为温暖日照，因此会选择能应对换季变化、又不需要寒季保温或盛夏最少覆盖的下装。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_002",
            "text": "参加盛夏屋顶气象站开放日时，[X]会在无遮蔽仪器旁反复蹲下，并短暂进入有阴影的楼梯间；每次返回屋顶时高温都重新成为主导，因此[X]偏好主要承担 Summer 角色的下装，而不会为短暂室内停留增加腿部保温。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_003",
            "text": "在转凉月份参加苹果压榨活动时，[X]会在有风的果园边缘、潮湿的有顶压榨区和温暖室内桌边之间转换，并选择能应对凉风与间歇湿气、又不需要持续冬季保温的下装。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_004",
            "text": "参观户外冰雕时，[X]要经历长时间入口排队，也会短暂进入加热帐篷，因此需要以下装系统承担持续寒冷保护并兼容室内转换，而不是把换季裤简单加厚。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_005",
            "text": "一次早季步道清理安排在融雪之后、茂密植被重新长起之前；[X]会面对湿土、裸露枝茎和偏凉地面，但没有冬季级别的严寒，因此会为这一短暂的 Spring 维护窗口选择下装，而不是按室内外温差来决定。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_006",
            "text": "盛夏夜市中，[X]虽在日落后穿行拥挤过道，但路面余热和餐摊热源仍持续升温，路线中也没有凉爽室内环节；因此[X]偏好主要服务夏季的下装，因为即便没有直射阳光，整段行程的热负荷仍占主导。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_007",
            "text": "在社区接驳站经历数次零下清晨等待后，[X]复盘一条已有内衬长裤在静站时的保暖和进入室内后的过热，再决定它是否继续作为 Winter 参照，或需要更易调节的叠穿搭档。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_008",
            "text": "在多次有雾的运河步行中，[X]穿同一条灯芯绒长裤应对凉风、潮湿栏杆和更温暖的面包店停留，并只在表面干燥和室内转换都可接受时把它继续留在 Fall 易取区。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_009",
            "text": "整理衣橱时，[X]查看三年里一条已有斜纹裤最早和最晚出现的带日期照片；这条裤子总是在厚重冬鞋收起后进入轮换，并在炎热天气下装占主导前退出，因此[X]依据真实日历窗口把它归入 Spring。"
          },
          {
            "id": "BND_BOTTOM_SEASON_V7_010",
            "text": "在湿草地旁反复参加黄昏天文观察时，[X]会长时间静止，足以让叮咬性昆虫聚集，而空气又热到不需要冷季保温；只有下装能在整个观察时段兼顾小腿覆盖与散热，[X]才会偏好把它定位为夏季使用。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:closure_type",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "closure_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_01",
            "text": "[X]长途车中途只短暂停靠，新裤腰部的开合让[X]耽搁许久；同行人已经从行李里找出那条旧款，因为以往赶路时[X]总靠它迅速处理，不用低头摸索。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_02",
            "text": "[X]戴着防护手套值班时，裤腰固定件沾污后无法操作，主管换来[X]旧制服同款；旧件部件已被反复按握磨亮，即使戴手套也能凭触感完成。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_03",
            "text": "[X]孩子学习独立穿衣时总拿[X]一条家居裤练习腰部开合，因为操作逻辑已经被全家说成“照[X]的办法做”；裤腰边缘被两代人的手反复拉得发软。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_04",
            "text": "[X]舞蹈中段，裤腰固定处再次松开，老师暂停排练帮忙处理；服装师换来[X]过去演出常用结构，内侧已有多次加固线，却从未在动作中突然失效。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_05",
            "text": "[X]常穿裤装的闭合件损坏，修衣师提出换成更隐蔽的方案，[X]却选择与其他高频裤装相同的操作方式；师傅在旧订单里也找到几次相同改造。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_06",
            "text": "[X]手指关节不适的一周里，新裤每次穿脱都需要他人帮助；康复师从[X]家中找出另一种闭合结构，[X]单手便完成，因为此前照护期已用它形成熟练动作。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_07",
            "text": "[X]洗衣机里一件裤装的固定件又勾住其他衣物，家人拿出专门的保护袋，说明这不是第一次；[X]仍决定修复，因为穿着时这种开合最符合自己的节奏。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_08",
            "text": "[X]安检要求快速检查腰部，新裤的结构让[X]迟迟无法复原；同行人递来回程可换的旧裤，说[X]过去赶航班从不会被那种熟悉开合拖慢。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_09",
            "text": "[X]试裤坐下时，某个固定件正压在腹部旧伤处；裁缝查看[X]以前的定制单，发现几条长期复穿款都把开合移到另一位置，于是按旧方案重做。"
          },
          {
            "id": "BOTTOM_CLOSURE_TYPE_PB_10",
            "text": "[X]一手扶着行动不便的家人时，[X]需要调整自己的裤腰，常穿款让动作无需松手；亲属指出[X]多年照护中一直选择同类开合，腰部零件也已有频繁操作痕迹。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_001",
            "text": "参加业余戏剧演出时，[X]要在窄小屏风后完成两次下装更换，并按一段很短的音乐提示反复排练；[X]会选择无需对准多个小部件、仅凭触感即可完成的腰部闭合方式。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_002",
            "text": "参加在盘腿静坐与缓慢步行之间交替的一日静默冥想时，[X]希望腰部前方没有坚硬闭合点，也不需要在共用房间里发出声音重新调整。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_003",
            "text": "参加冬季户外图书交换时，[X]在长队中始终戴着隔热手套，并需要在移动卫生间停留时打开、重新固定下装；因此偏好的闭合件要有宽大的操作目标、明确的闭合反馈，而且不依赖指尖精细捏合。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_004",
            "text": "参加先长时间共餐、后进行站立游戏的聚会时，[X]希望饭后能略微放松腰部，并在活动前恢复到稳固位置；[X]会比较哪些闭合方式无需换衣、也不会留下松散端头就能完成调节。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_005",
            "text": "参加包含长时间站立和坐姿合影的正式民事仪式时，[X]会选择无需腰带也能保持前部平整稳固的剪裁长裤，并比较隐蔽闭合如何在对齐、门襟闭合和腰头固定之间分工。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_006",
            "text": "家庭民间舞排练时，一条应急罩裤要能由腰围不同的三名参与者轮流使用；[X]会标出每个人可用的位置，并且只有在抽绳、搭扣或魔术贴等闭合方式能在每次交接后迅速回到同一标记、无需改衣时，才会偏好它。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_007",
            "text": "拥挤的泳池更衣室里，[X]要用一只手扶稳坐在干燥长凳上的幼儿，另一只手更换自己的湿下装；[X]会根据能否单手完成、是否有清楚的稳固状态，以及会不会让松散系带碰到湿地面，在按扣、魔术贴或套穿式闭合之间形成偏好。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_008",
            "text": "几个月里，[X]的腰围变化已足以让固定腰头不再稳定；[X]按固定间隔穿一条已有的侧扣长裤，并为实际使用的扣位标注日期。只有各档都能重复固定、且无需皮带或改衣时，[X]才会保留这种闭合方式。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_009",
            "text": "一条已有长裤的宽幅粘扣腰袢在多次洗涤后开始于日常坐姿中自行打开；[X]会检查两侧接合面、清除积累的绒屑，再重复相同的坐下与步行循环，以判断简单清理能否恢复闭合，还是粘扣面已经需要更换。"
          },
          {
            "id": "BND_BOTTOM_CLOSURE_TYPE_V7_010",
            "text": "在日常使用轮椅时，位置已经正确设定的腰带会经过[X]一条已有剪裁长裤的闭合处。在不改变腰带设置的前提下，反复转移和长时间坐姿会自然显出偏好：钩眼应保持平整，拉链应保持稳定，纽扣则只有在腰带下不会持续形成硬压点时才合适。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:pattern",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "pattern",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_PATTERN_PB_01",
            "text": "[X]孩子把小车沿[X]裤腿纹样反复开到膝盖，换穿另一种图案时还找不到原来的路线。家人笑说，几条被孩子玩旧的裤装都保留了相似的视觉路径。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_02",
            "text": "[X]裁缝给裤腰加省时，发现图案会在身体两侧呈现不同节奏。[X]没有追求完全隐藏改线，而是要求站立和坐下时都保持自己熟悉的纹样重心；旧定制单也记录过相同取舍。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_03",
            "text": "[X]站上带重复纹理的自动扶梯时，新裤图案与踏板叠在一起让同行人看得发晕。[X]换到旁边镜面检查，想起常穿裤在这些通勤环境里从不会产生这种干扰，便决定调整图案方向。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_04",
            "text": "[X]蹲下帮孩子系鞋带时，裤腿上的图案被膝部拉伸得完全变形。孩子说[X]另一类常穿纹样弯下时仍能认出来，[X]回家后把新裤从亲子外出轮换中移开。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_05",
            "text": "[X]在社区印花工坊为旧裤加图案时，老师给出几种视觉方案。[X]选择了能和自己几条常穿裤的纹样关系并存的一种，完工后没有把作品当练习品收藏，而是穿着离开。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_06",
            "text": "[X]排练群舞时，编舞发现某种裤腿图案能让[X]更容易从录像里检查双腿是否同步，便询问是否愿意保留。[X]拿来前几次练习也常穿的类似视觉结构，说明这不是只为本次镜头。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_07",
            "text": "[X]转让一条图案裤时，买家担心纹样难搭，[X]展示它在不同日常里磨出的膝痕和洗旧程度，并说明自己为何保留另外几条相近图案。买家看到的不是设想，而是实际使用结果。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_08",
            "text": "[X]一次混洗让裤装图案的颜色边界变得柔和，家人以为[X]会丢掉，[X]却觉得变化更接近自己真正会穿的视觉分量。此前两条经历相似褪变的裤子也仍在常用抽屉里。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_09",
            "text": "[X]在候诊室坐下后，裤装原本隐藏在褶量里的图案展开，引来[X]自己的不适感。同行人指出[X]常穿裤即使坐下，视觉重点也总停在熟悉范围；起身后[X]决定请裁缝调整分布。"
          },
          {
            "id": "BOTTOM_PATTERN_PB_10",
            "text": "[X]出门前清理裤腿上的宠物毛时，某种纹样让[X]很难判断是否已经干净。室友拿出手机灯仍反复检查，并说另一类常穿图案从不需要这套流程；[X]于是重新安排两条裤子的使用位置。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_PATTERN_V7_001",
            "text": "为公共广场的踏步舞视频排练时，[X]站在错列队形中，并查看远景画面，判断下半身的方向线究竟能帮助读出同步换腿、制造错误对齐，还是把每个人分成清晰的动作区域。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_002",
            "text": "家庭聚会前整理旧照片和织物时，[X]会询问亲属：哪些反复出现的表面确实与共同经历相连；随后[X]根据纹样是否具有大家能认出的联系，在花卉、佩斯利或纯色下装之间选择，而不是只追求泛化的怀旧感。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_003",
            "text": "清晨在芦苇屏障后观察时，[X]要决定下半身在蹲伏时是否应融入碎影和植被，同时又要考虑全员回到开阔小径后，同行者能否轻易辨认。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_004",
            "text": "参加社区故事书巡游时，[X]会选择让下装承担可读图像、反复出现的插画角色，或星条路线主题，并检查在移动外套和手持道具下方，什么仍能被辨认。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_005",
            "text": "参加靛蓝折叠染色活动时，[X]计划制作一件下装，并决定不规则染色扩散、重复折叠几何、平行扎线或分别染色拼片，在衣物裁剪并跨两条裤腿接合后应如何保留。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_006",
            "text": "在动物福利主题旧书义卖中，[X]要帮助来访者把信息桌与普通二手书桌区分开，同时不采用角色服装或印字身份牌；[X]只在豹纹斑点能从过道提供清楚主题提示、而访客开始讨论书籍后又退居次要位置时，才会偏好把它用于下半身。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_007",
            "text": "在带口述描述的服装故事活动中，参与者要解释一个可见细节，而不能假定每个人都使用相同的视觉简称；[X]会根据方向性鳞纹能否被清楚描述并由描述识别，在蛇纹和更一般的肌理表面之间选择，也会判断动物标签是否给一个并不支持它的表面强加了信息。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_008",
            "text": "在黑白肖像拍摄亭里，[X]穿一条已有的奶牛纹裙，并检查大块不规则斑片在坐姿、站姿和部分裁切时能否保持可读节奏，而不会在单色图像中被误认为偶然阴影。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_009",
            "text": "经过十次普通洗涤后，[X]把一条已有的扎染慢跑裤平铺，并与早期照片比较，检查不规则边界是否均匀变柔、一条裤腿是否褪色更快，以及变化后的结果是否仍像有意的差异。"
          },
          {
            "id": "BND_BOTTOM_PATTERN_V7_010",
            "text": "进入互动投影房时，[X]穿一条带凸起佩斯利表面的已有长裤，并通过房间录像观察：投影颜色变化后，物理肌理是否仍能保留曲线纹样，还是更平坦的纯色表面更适合让投影成为主角。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:fit_type",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "fit_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_FIT_TYPE_PB_01",
            "text": "[X]列车临时换站台，[X]穿新裤快步上楼时腿部余量不断牵制动作；同行人从行李取出旧款，膝弯已沿多年赶车形成柔软折线，换上后步幅立刻恢复。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_02",
            "text": "[X]体型变化后修改裤装，裁缝以为只需换尺码，[X]仍要求保留熟悉的臀腿余量；几张相隔多年的改衣单显示，即使尺寸改变，这个空间关系始终接近。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_03",
            "text": "[X]陪孩子坐地拼玩具时，新裤让盘腿姿势难以维持；孩子从衣篮里拖来[X]那条常穿旧裤，臀膝处已经被许多个地面下午磨得发软。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_04",
            "text": "[X]排练跨步动作时，裤装要么拉住大腿、要么产生多余摆动，服装师沿旧演出裤的改线调整；下一遍动作无需补偿，镜头轮廓也回到团队熟悉的状态。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_05",
            "text": "[X]一条尺码完全正确的裤子却长期没穿，家人让[X]和几条磨旧裤一起试坐；差别不在腰围数字，而在臀腿空间，[X]终于把闲置款放进捐赠袋。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_06",
            "text": "[X]骑行中，新裤在坐垫边缘不断堆布，伙伴提醒[X]平时那类版型不会需要途中整理；回家看旧裤，座位处的均匀磨痕说明它们确实长期贴合相同动作。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_07",
            "text": "[X]聚餐进行到后半段，新裤腰臀让[X]不断调整坐姿；朋友递来外套遮挡方便[X]松开，却说过去聚餐从未见[X]穿常用版型时这样不自在。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_08",
            "text": "[X]修补旧裤膝部时，师傅建议顺便收窄裤腿，[X]拒绝改变已经顺着步态形成的空间；裤脚内侧不对称磨痕正好记录了这种版型如何陪[X]走路。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_09",
            "text": "[X]夜航中蜷腿休息，新裤不断限制髋膝，同行人借来一条不同版型；[X]穿上便找到历次长途熟悉的睡姿，下机后直接询问同类款。"
          },
          {
            "id": "BOTTOM_FIT_TYPE_PB_10",
            "text": "[X]团队试发新工作裤后，[X]没有评价外观，只展示蹲下时布料受力的位置；负责人翻出旧制服在同处的维修记录，最终把[X]的版型调整回此前反复使用的余量。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_001",
            "text": "参加包含狭窄侧通道和一段齐膝爬行的密室活动时，[X]希望下装不会让多余布量碰到机关，同时又给大步跨越留下足够大腿空间，并比较贴近型轮廓究竟在哪里收窄、在哪里保留余量。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_002",
            "text": "参加席地书法小组时，[X]会在盘腿、跪坐和椅坐之间切换，同时让纸张远离膝部，因此需要决定座部和大腿应留多少余量，又不能让布量大到铺进共用操作区。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_003",
            "text": "参加短距离上坡接力练习时，[X]会经历加速、等待和慢走返回，并比较顺应大腿形状的轮廓与全程均匀贴合的轮廓，判断它们能否在冲刺时保持稳定，又不会在轮次间显得不必要地束缚。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_004",
            "text": "参加脚踏陶轮入门活动时，[X]要让双膝稳定在陶轮两侧、身体前倾并反复起身，因此臀部和大腿需要足够空间，同时又不能让过宽布料擦到旋转设备。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_005",
            "text": "在多风屋顶参加风筝制作活动时，[X]会在低矮工作面与开阔放飞区之间移动，因此要选择不会被风吹进胶水、线绳或骨架零件、又能舒适蹲下的下装。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_006",
            "text": "乘坐夜间长途客车时，[X]会在休息站穿过狭窄过道，但大部分时间都屈膝靠坐；[X]会比较紧身、修身和常规版型，判断衣料是否在过道中保持利落，同时在最长的久坐阶段避免腰部、大腿和膝盖持续受压。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_007",
            "text": "双人脚踏船的仪表台较低，[X]每次踩踏都会抬高膝盖，小腿又紧贴封闭曲柄罩经过；[X]会根据余量应落在哪个部位，在运动体型、常规和修身版型之间形成偏好：大腿空间可支持踩踏轨迹，但多余的小腿布量可能摩擦狭窄脚舱。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_008",
            "text": "参加蹦床入门课时，[X]穿一条已有的压缩紧身裤，并在组间检查衣物是否始终均匀贴位、没有形成褶皱，持续贴合在休息时是否仍舒适，以及下次是否只需运动体型或普通紧身轮廓。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_009",
            "text": "在永久修改一条已有的休闲宽松版长裤前，[X]先按当前余量穿着度过一个普通居家夜晚，再用可拆的疏缝模拟常规版型重复一次，并以步幅、坐姿和是否需要反复调整为证据，而不是照一次镜子就剪掉布料。"
          },
          {
            "id": "BND_BOTTOM_FIT_TYPE_V7_010",
            "text": "大腿出现一段短期皮肤敏感后，[X]在敏感期穿一条已有的宽松长裤，并在恢复后再次穿着，对比尽量少的布料接触是否仍然真正舒适，还是较克制的休闲宽松或常规余量如今更稳定、更易管理。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:rise",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "rise",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_RISE_PB_01",
            "text": "[X]坐下后，新裤腰线正压在旧伤处，[X]立即换回另一条，腰头内侧已有长期避开伤疤形成的轻微偏磨；医生复诊照片也记录了相同位置。"
          },
          {
            "id": "BOTTOM_RISE_PB_02",
            "text": "[X]正式活动前把衬衫束入裤腰，新腰线让布料不断堆出，[X]换上常用高度后无需再整理；伴侣说每次需要束衣时，[X]最后都会回到这个位置。"
          },
          {
            "id": "BOTTOM_RISE_PB_03",
            "text": "[X]舞蹈转体时裤腰不断卷动，老师沿[X]旧练功裤的腰线位置做了标记；旧裤虽然褪色，多个课程周期都没有在同一动作中移动。"
          },
          {
            "id": "BOTTOM_RISE_PB_04",
            "text": "[X]裁缝给新裤定腰线时没有照流行位置，而是对照[X]几张旧纸样；相隔多年，身体尺寸改变，标记相对自然腰的位置却仍落在很窄的范围。"
          },
          {
            "id": "BOTTOM_RISE_PB_05",
            "text": "[X]朋友送来一条腰带，[X]试着搭配几条裤子，只有某个腰线位置真正需要它；朋友这才注意到[X]那些被穿旧的裤装大多落在另一高度，几乎从不靠腰带维持。"
          },
          {
            "id": "BOTTOM_RISE_PB_06",
            "text": "[X]家庭聚餐后，新裤腰线让腹部明显不适，长辈拿来[X]以前留在家中的旧裤；那条裤腰已经顺着多次饭后坐姿变软，换上后[X]能继续自在地坐到散席。"
          },
          {
            "id": "BOTTOM_RISE_PB_07",
            "text": "[X]拍全身工作照时，摄影师发现新裤腰线让[X]不断调整上身比例，便参考过去合作照片建议换回熟悉高度；换好后无需改变站位，画面就恢复自然。"
          },
          {
            "id": "BOTTOM_RISE_PB_08",
            "text": "[X]系上工具腰带后，新裤腰头与腰带相互顶压，主管找出[X]旧工装同高度的替代；旧裤腰侧已有多年工具摩擦形成的平滑痕。"
          },
          {
            "id": "BOTTOM_RISE_PB_09",
            "text": "[X]旧裤腰头损坏，修衣师建议重做时顺便提高位置，[X]只要求恢复原高度；拆开后里面有两次旧修线，说明这条腰线值得[X]反复维护。"
          },
          {
            "id": "BOTTOM_RISE_PB_10",
            "text": "[X]身体经历一段明显变化后重新试穿裤装，许多旧尺码已不合适，[X]购买新款时却仍把腰线放在熟悉的相对位置；店员从[X]带来的旧裤上看到了同样结构。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_RISE_V7_001",
            "text": "帮社区档案室重新上架时，[X]要反复探入低箱、再伸手够高架，因此会选择保持在髋部弯折线以上的腰头，让塞入的基础层持续覆盖而无需反复调整。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_002",
            "text": "参加手碟聆听小组时，[X]会在盘腿席地和低凳坐姿之间切换，并希望腰头避开上髋折痕，同时在身体向乐器前倾时不会顶到下肋。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_003",
            "text": "参加呼啦圈工作坊时，[X]练习让圈沿自然腰部旋转，并选择腰头位于主要接触轨迹下方的下装，避免两个硬边反复撞击同一位置。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_004",
            "text": "参加白天公共听证活动时，[X]计划把素色衬衫塞入下装，并在听众坐席与短暂站立发言之间切换，因此会选择能固定衬衫、又不会在外套开口处显得过高或过低的常规腰位。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_005",
            "text": "为一次短途出行打包三件已经确定的上衣前，[X]把试验腰带分别夹在低、中、高位置，并依次搭配塞入的衬衫、敞开的外衫和抬手时的短针织上衣；若同一条腰线能适配这组精简上装，[X]便选择中腰。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_006",
            "text": "参加坐式皮划艇安全练习时，[X]穿着的浮力背心下缘会在划桨伸手和辅助重新上艇时略微上移；如果高腰腰头在坐姿、跪姿和举臂动作中始终延伸到背心下缘内侧，既封住皮肤空隙又不在背心下叠出压点，[X]就会偏好高腰。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_007",
            "text": "下腹部横贴临时敷料的几天里，[X]需要腰头在坐下、上下楼和睡眠时始终位于胶布下缘以下，又不必把下装临时向下翻折；因此，当动作检查确认衣物不会摩擦或掀起敷料时，[X]会偏好低腰。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_008",
            "text": "经过数次社区花园活动，[X]在工具腰带下穿同一条中腰短裤，并检查两道边缘在跪下、伸手和走动时能否保持上下分离，而不是叠成一条压带。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_009",
            "text": "两家零售商把看似不同腰高的长裤都标成常规腰时，[X]会测量一条已有且舒适的斜纹裤前后裆长，并把这些实体尺寸与候选款比较，以已知衣物而不是营销词作为 Regular Rise 的参照。"
          },
          {
            "id": "BND_BOTTOM_RISE_V7_010",
            "text": "[X]用一件短开衫搭配一条已有高腰裙，并分别拍摄站立、坐下和举手姿势，再检查可见腰线是否在每个动作中都保持为预期边界，而不会消失在上衣下或顶到肋骨。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:has_pockets",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "has_pockets",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_HAS_POCKETS_PB_01",
            "text": "[X]坐下时手机从新裤浅袋滑出，朋友接住后递来[X]常穿的另一条；旧裤袋角已被手机磨出轮廓，却从未在相同动作中掉落。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_02",
            "text": "[X]正式拍摄时，一条有袋裤装即使空着也让侧缝向外张开；造型师换来[X]过去常用的无袋版，旧照片显示腰腿线条一直按同一方式保持干净。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_03",
            "text": "[X]带新人巡检时，[X]从工装裤各袋位依次取出工具，新人很快先记住位置再记住名称；每个袋口不同程度的磨损正对应实际使用频率。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_04",
            "text": "[X]跑步后，新裤袋口在腿侧磨出红痕，队友拿来[X]洗得发白的无袋训练裤；那条裤子完成过许多相同路线，从未让[X]中途调整。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_05",
            "text": "[X]排队时孩子突然饿了，[X]从裤袋固定位置拿出小零食；孩子甚至知道另一侧还有纸巾，袋内的碎屑痕迹显示这种准备已经重复很多次。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_06",
            "text": "[X]改裤时裁缝问是否保留袋体，[X]拿出几条常穿无袋裤的旧改衣单，坚持把新裤侧缝也恢复平整；拆下的袋布几乎没有使用痕迹。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_07",
            "text": "[X]过境时，[X]按固定顺序从裤装不同袋位取出票卡和证件，同行人无需询问便把临时收据递向空出的那一侧。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_08",
            "text": "[X]骑行中裤袋里的小物被坐垫反复顶到身体，[X]停下后换成无袋旧裤，把物品移到车架；伙伴说这正是[X]以往长途一直采用的分工。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_09",
            "text": "[X]洗衣前在裤袋深处找回一枚以为丢失的戒指，家人却说重要小物本来就总被[X]暂存在这里；袋角已经被钥匙等物磨得发亮。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_PB_10",
            "text": "[X]冬季叠穿时，裤袋接缝与内层在髋侧堆出压点，[X]换成无袋版后顺利坐完整段车程；同行人从过去出行经验早已把物品收进外部包中。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_001",
            "text": "参加社区自助语音步行时，[X]要反复取出手机触发地点音频，同时把交通卡分开放置，并让双手能随时扶楼梯栏杆；因此下装内置收纳成为互动的一部分，而不只是泛泛的携带便利。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_002",
            "text": "参加空中吊床入门课时，[X]会在布带缠绕臀部和大腿前把所有个人物品存进储物柜，并偏好没有口袋开口或袋布的下装，以免勾挂、受压折叠，或让人把物品带进器械。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_003",
            "text": "和志愿小组更换步道标记时，[X]双手都在搬标牌，还需要在不同操作阶段之间转移铅笔、备用夹和拆下的紧固件，又不能把它们放在地上，因此下装口袋成为临时任务工位。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_004",
            "text": "参加使用旋转扫描设备记录全身轮廓的社区艺术项目时，[X]会把随身物品放进编号托盘，并选择没有口袋布或开口的下装，以免它们打断模型中预期的干净侧面轮廓。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_005",
            "text": "在屋顶共用晾衣线上晾晒刚洗好的家庭织物时，[X]把未使用的衣夹放在一侧、收回的衣夹放在另一侧，同时双手展开并夹住大床单，因此分开的下装口袋成为一套清晰重复流程的一部分。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_006",
            "text": "参加包含多段绳桥的树冠步道时，[X]把主包留在有人看管的起点，但仍要携带一把机械储物柜钥匙和一枚扁平路线牌；由于双手要始终抓住两侧缆绳，躯干也不应有物品晃动，[X]偏好带口袋的下装，让两件物品平贴存放到下一个平台。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_007",
            "text": "参加浅水岸边步行活动时，[X]穿一条已有的无口袋训练裤，把随身物品留在干燥收纳箱中；涉水并回到岸上后，[X]发现没有口袋布袋吸水鼓起、留住沙粒，或在排水时拍打大腿。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_008",
            "text": "在复古街机厅里，[X]穿一条已有的双口袋短裤，把游戏代币与储物柜钥匙分开，并复盘每轮之间能否在不腾空双手、也不混淆已用和未用代币的情况下完成取放。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_009",
            "text": "参加室内划船机接力时，[X]会在轮流上机前把所有个人物品放进编号储物格；由于每次划动髋部都会沿同一滑座往复，[X]偏好没有后袋或侧袋布的下装，避免空口袋在身下折叠、勾住座边或在未装物品时仍产生变化的压力。"
          },
          {
            "id": "BND_BOTTOM_HAS_POCKETS_V7_010",
            "text": "参加圆圈舞课程时，[X]穿一条已有的无口袋裙，把手机和钥匙留在共用格柜里，并观察到转身时没有收纳物碰撞大腿或把衣物一侧向外拉，因此旋转保持平衡。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:stretch_level",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "stretch_level",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_01",
            "text": "[X]赶上楼后，新裤膝部被拉出鼓包，休息许久仍未恢复；同伴指着[X]旧裤平整却磨薄的膝位，说过去同样赶路时那种弹性从不会留下临时形变。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_02",
            "text": "[X]帮忙搬低处物品时，[X]自然蹲下，新裤要么限制动作、要么回弹不足；家人递来常穿旧款，腰膝已顺着相同动作形成稳定褶线。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_03",
            "text": "[X]定制裤第一次试身，裁缝只让[X]做一个日常跨步便判断样布不合适；旧订单记录显示[X]长期采用的延展范围不同，重选后身体无需额外补偿。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_04",
            "text": "[X]洗后发现裤腰再也回不到原位，维修员说明弹性已衰减；[X]拿出另一条穿洗更久仍能恢复的裤子，决定今后继续选择后者的延展方式。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_05",
            "text": "[X]攀爬时新裤在抬腿处卡住，[X]换上储物柜里的旧款完成路线；旧裤膝侧已有多次触壁磨痕，却仍能随动作伸展并复位。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_06",
            "text": "[X]连续会议后站起，新裤膝部轮廓迟迟不平，[X]低头整理了几次；同事说平日常穿款即使久坐也无需这个动作，椅背上正挂着一条备用。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_07",
            "text": "[X]裤膝补好后，补片弹性与原布不一致，每次迈步都拉向一侧；修衣师翻旧维修单，改用[X]过去补后仍持续穿用的延展范围。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_08",
            "text": "[X]追着孩子跑过公园后，新裤腰膝变形，孩子反而从包里拿出[X]常穿的旧款，知道那条能让[X]继续蹲下系鞋带而不用整理。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_09",
            "text": "[X]排练落地动作时，一条裤子延展过多让[X]失去熟悉支撑，另一条又限制跨步；服装师按旧演出裤磨损位置调整到[X]长期使用的范围。"
          },
          {
            "id": "BOTTOM_STRETCH_LEVEL_PB_10",
            "text": "[X]晾干后几条裤子的腰膝恢复程度不同，[X]没有按新旧留下，而是保留那些穿过许多次仍能回到熟悉形状的商品；家人已知道哪几条会被直接送出。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_001",
            "text": "为林地地图游戏布置临时检查点时，[X]会行走、跪下并跨过低木；带立体膝部剪裁的长裤已经提供动作范围，因此[X]偏好不弹的稳定表面，以抵抗勾挂形变，也不让标记夹把布料拉走样。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_002",
            "text": "参加卡波耶拉入门活动时，[X]会练习深侧弓步、低位转换和高幅环形腿部动作，并检查下装在动作组之间能否恢复原形，而不是在膝部或座部持续被拉长。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_003",
            "text": "在社区茶点摊帮忙时，[X]会在从膝高处抬箱、站在柜台后和空闲时坐下之间切换，因此只需少量弹性应对普通弯曲，同时保持一天大部分时间需要的整洁形状。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_004",
            "text": "参加社交保龄球夜时，[X]会反复完成一次向前弓步，随后回到直立聊天，因此要选择在前膝处适度延展、又能立刻恢复到组间看起来未变形的下装。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_005",
            "text": "拼装巨幅地面地图时，[X]会从深蹲转为长距离侧伸，并跪到不同边缘，因此下装需要多向延展，并在为下一部分重新摆放散片前恢复形状。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_006",
            "text": "日常短途散步时，幼儿会在自己走路和坐上[X]的结构式腰凳之间来回切换，腰凳的承托带正好压在下装腰头上。只要剪裁本身留有足够的下蹲和抱起空间，[X]就偏好无弹性，因为腰凳反复承重、卸重时，腰头更能保持平整，不会被拉长、卷起或逐渐下移。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_007",
            "text": "搬运独木舟并下水时，[X]要高抬腿跨进船内，在低座上完成较长航程，再于对岸不平地面跨出；如果面料只在两次上下船动作中适度延伸，并能在久坐阶段恢复，而不是让高弹性贯穿一段主要静止的旅程，[X]就会偏好轻微弹性。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_008",
            "text": "两位身材尺寸不同的亲属临时需要同一套装的下层衣物时，[X]借出一条已有高弹打底裤供短时试穿，并在每次交接前标记腰头和膝部宽度；只有它能在下一位穿着者之前恢复到[X]的基线，才继续把它作为可共享衣物。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_009",
            "text": "经过数次太极晨练，[X]穿同一条宽松无弹长裤，观察到剪裁布量已能支持缓慢深步，而织物在每次重心转换后都垂回相同线条，因此确认这件物品无需延展。"
          },
          {
            "id": "BND_BOTTOM_STRETCH_LEVEL_V7_010",
            "text": "参加壁球入门课时，[X]穿一条高弹短裤完成各方向低弓步，并在每组练习后检查裤口，判断织物是否均匀恢复，而不是持续被拉向反复发力的一侧。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bottom:price",
      "binding": "product_bound",
      "category": "bottom",
      "attribute": "price",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_PRICE_PB_01",
            "text": "[X]身体尺寸变化后，需要集中补齐几条日常裤装。店员建议先从最低价试起或直接买一条高价款，[X]却把仍留在衣柜、已经磨白膝部的旧裤订单调出来，按其中反复出现的单条价位为新一轮购买划定范围。"
          },
          {
            "id": "BOTTOM_PRICE_PB_02",
            "text": "[X]取衣时发现洗衣店损坏了一条裤子，店家提出现金赔偿，也可从合作商店不同价位的裤装中任选并结算差额。[X]把受损裤和另外几条已修补过的常穿款收据放在柜台上，最终在相同价格带挑了替代品。"
          },
          {
            "id": "BOTTOM_PRICE_PB_03",
            "text": "[X]所在公司第一次把年度工作着装补贴改为自由报销，同事有人买多条低价裤装，也有人补钱选择更高价款。[X]按自己储物柜里几条常穿裤子的购入记录确定单条范围，新买的数量和价位都让原来的洗换节奏无需改变。"
          },
          {
            "id": "BOTTOM_PRICE_PB_04",
            "text": "[X]把几条不再合身的裤装送去寄卖，店员按原价和成色分层后，发现真正被穿到裤脚发白的几条集中在一个价格带，偏离它的反而几乎没有使用痕迹。[X]撤回其中一条高频旧款作改衣参考，只寄卖那些始终闲置的裤子。"
          },
          {
            "id": "BOTTOM_PRICE_PB_05",
            "text": "[X]出差途中裤缝突然裂开，只能在附近商场当场补买。面对明显不同的价格层级，[X]先查看行李中另外两条常穿裤的电子小票，再选一条处在相同价位、回程后也愿意继续穿的商品，而没有买最便宜的应急款或借机升级。"
          },
          {
            "id": "BOTTOM_PRICE_PB_06",
            "text": "[X]收到亲属送来的一条裤子，尺寸正好，价签却明显偏离自己平常购买的区间。亲属陪[X]去换货时，直接在退换页面调到一个熟悉的价格带；那里保存的家庭代购记录显示，过去替[X]买成并穿旧的几条也都落在这一范围。"
          },
          {
            "id": "BOTTOM_PRICE_PB_07",
            "text": "[X]在线下单几条裤装后，商家通知结算页曾隐藏完整价格，允许重新确认或无条件取消。[X]看到修正金额后逐条核对，留下的都是落在自己旧订单常见区间的款式；其中一条即使版型最合意，只因价格越出这个范围仍被取消。"
          },
          {
            "id": "BOTTOM_PRICE_PB_08",
            "text": "[X]为搬家压缩裤装数量时，把原价标签和实际穿用次数一并录入清单。几条处在某个价位区间的裤子虽然新旧不同，却都留下了稳定的腰膝折痕；一条价格明显偏离的冲动购买仍近乎全新，[X]最终把它放进捐赠箱。"
          },
          {
            "id": "BOTTOM_PRICE_PB_09",
            "text": "[X]请裁缝按一条旧裤的活动余量制作新裤，裁缝拿出从基础到高端的完整报价册。[X]没有照旧裤当年的售价机械复制，而是翻看后来几次真正取走并反复修改的成衣工单，从它们集中的价位选择这次方案。"
          },
          {
            "id": "BOTTOM_PRICE_PB_10",
            "text": "[X]常去的店更换推荐系统后，试衣间里挂满价格跨度很大的裤装。店员调出旧系统中同时带有购买和改裤记录的订单，[X]据此留下某一价格带的几条；一周后取改好的裤子时，裤脚处理也沿用了那些旧订单的规格。"
          }
        ],
        "B": [
          {
            "id": "BND_BOTTOM_PRICE_V7_001",
            "text": "为小型每周轮换选择两条长裤时，[X]会比较需要定期专业清洁的低购入价与较高价的可水洗选项，并根据预计穿着次数和本地实际清洁费用，为第一年总成本设上限。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_002",
            "text": "购买全长裤前，[X]会比较需要另行改裤脚、往返改衣店两次的低价款，与包含量体、一次调整和本地取货的较高价商家，并把最终可穿的合身状态视为真正购买结果。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_003",
            "text": "社区服装借阅会员费已覆盖整个季度后，[X]要决定为三场已排定社交活动借用醒目下装还是购买一条，并比较边际借出费、清洁责任、逾期风险和活动后的可信使用次数。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_004",
            "text": "在一个已知下装合身需求可能变化的六个月阶段，[X]会设定较短服务周期，优先考虑可调节或易转手的基础款，并拒绝用当前形态无法利用的终身耐久来证明高溢价合理。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_005",
            "text": "商家提供三件基础下装付两件价格的活动时，[X]会先规划真实每周轮换，再把套装与单买一条更合身的款比较，并把不想要的颜色或重复尺码视为付费库存，而不是免费节省。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_006",
            "text": "保存一条仅可干洗长裤十二个月的清洁收据后，[X]把实际服务总额加到原始价格中，并用这件具体物品的持有成本为可水洗替代品设定预算。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_007",
            "text": "因尺码不一致退回两条具体网购牛仔裤后，[X]会合计不可退运费、包装和时间，再把第三次折扣网购与一条可本地试穿并立即带走的较高价款比较。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_008",
            "text": "购买两条套装促销六个月后，[X]发现一条每周穿着，另一条仍保留出厂折痕，因此会把原始折扣重新计算成唯一有用那条的实际价格，再决定是否接受下一次套装。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_009",
            "text": "一条价格较高的长裤因坐下时移位而很少穿着，[X]不再用原始价格作为强行把它塞回轮换的理由，而是在下一次购买中给充分试穿时间和可用退货期更高价值。"
          },
          {
            "id": "BND_BOTTOM_PRICE_V7_010",
            "text": "一条最常穿的下装达到记录中的八十次穿着、接缝仍完整且护理可预期时，[X]会用已验证服务次数而非品牌宣称，决定相近替代品可以比未经测试的低价款贵多少。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:color",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "color",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_COLOR_PB_01",
            "text": "[X]常穿皮鞋送去养护，修鞋师问要不要用更显新的鞋膏改色；[X]只让他恢复原本色调，鞋头多层抛光和鞋底磨损说明这双鞋已经这样陪[X]走了很久。"
          },
          {
            "id": "SHOES_COLOR_PB_02",
            "text": "[X]朋友送来一双鞋时把退换单放在最上面，说自己后来想起[X]以前同色鞋总保持崭新；[X]试穿后也承认版型虽好，这个颜色很可能再次留在鞋盒里。"
          },
          {
            "id": "SHOES_COLOR_PB_03",
            "text": "[X]团队发放新鞋时允许两种颜色，[X]还没开口，管理员已递来其中一盒；旧鞋的同色鞋头磨损最重，管理员说补发记录早就替[X]回答了。"
          },
          {
            "id": "SHOES_COLOR_PB_04",
            "text": "[X]徒步鞋洗净后仍留下淡淡泥色，店员建议染深遮盖，[X]却保留原色，只做防护；同行人说[X]过去几双相近颜色也都带着路线痕迹继续穿。"
          },
          {
            "id": "SHOES_COLOR_PB_05",
            "text": "[X]正式活动前鞋带断裂，亲友拿来几双同尺码鞋，[X]迅速选中一色；长辈说从学生时代起，每逢需要临时借鞋，家里都能猜中[X]会拿哪类色调。"
          },
          {
            "id": "SHOES_COLOR_PB_06",
            "text": "[X]彩排时鞋色与舞台地面融在一起，导演要求提高辨识度；[X]从旧演出箱选了另一色，既满足画面又是散场后仍会穿走的方向，而不是只服务一次镜头。"
          },
          {
            "id": "SHOES_COLOR_PB_07",
            "text": "[X]合租者在门口整理鞋时，没看尺码便把几双鞋推到[X]一侧，只有一双冲动买来的颜色被认错；其余鞋头虽新旧不一，色彩关系却像同一人的选择。"
          },
          {
            "id": "SHOES_COLOR_PB_08",
            "text": "[X]浅色袜子被新鞋内里染色，店员提供退货或换色；[X]没有只看这次麻烦，而是对照家里同类颜色鞋的真实穿旧情况，换成自己确实会反复穿的方向。"
          },
          {
            "id": "SHOES_COLOR_PB_09",
            "text": "[X]拍家庭照时摄影师让大家把脚下颜色错开，家人几乎同时指出不该改变[X]的那一色；旧合照里它虽出现在不同鞋型上，却总落在[X]脚边。"
          },
          {
            "id": "SHOES_COLOR_PB_10",
            "text": "[X]换鞋底时修鞋师拿出几种边缘颜色，[X]选择能保留原鞋色彩重心的方案；师傅翻到以前几双送修鞋，发现[X]每次都让底边服务于相似的整体颜色关系。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_COLOR_V7_001",
            "text": "参加从白天延续到晚间聚会的纪念活动时，[X]会把 Black、Charcoal 和 Navy 鞋与已经确定的深色服装放在窗边自然光和室内暖光下比较，选择在两个时段都显得克制、有意而不抢眼的颜色。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_002",
            "text": "参观带半透明地面和投影光线的晚间艺术装置时，[X]会从正常观看距离比较 White、Clear 与 Silver 鞋，并决定让双脚在视觉上弱化、形成干净锚点，还是呼应流动反光但不喧宾夺主。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_003",
            "text": "参加会经过煤灰色站台、干草地和尘土小径的古老铁路周末活动时，[X]会把 Brown、Tan、Camel 与 Wheat 鞋搭配同一套旅行服装，选择是隐藏不断变化的灰尘、保持暖色对比，还是接受路线留下的可见痕迹。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_004",
            "text": "围绕奶油色针织衫和深色牛仔裤建立精简秋季衣橱时，[X]会让 Beige、Chocolate 和 Chestnut 鞋逐套搭配计划中的衣服，并根据鞋需要承担的重复穿着量，选择安静过渡、深色收束或偏红的季节性点缀。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_005",
            "text": "连续阴天的几周里，[X]照常完成每天的步行，暖色鞋更多是在低头视野边缘被注意到，而不是专门站在镜子前判断。若想要深而稳定的暖色落点，[X]会偏好红色；想要柔和一些会偏好珊瑚色；希望更有活力会偏好橙色；若灰暗一天里最需要明亮提振，则会偏好黄色。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_006",
            "text": "原色牛仔裤刚开始穿着的几周里，[X]发现裤脚会在日常坐下和走动中把靛蓝转移到鞋面。若希望染色融入底色，[X]会偏好蓝色；若想用冷色反差让变化清楚可见，会偏好绿色；若能接受低调的色差、又不想让鞋看起来像刻意与牛仔完全同色，则会偏好橄榄色。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_007",
            "text": "黄昏彩带舞排练中，[X]的脚步要在录像里保持可读，上方有移动的粉色与紫色彩带，地面则受暖色路径灯照明；[X]会根据双脚应呼应某组彩带、提供更深的节拍锚点，还是短暂捕捉暖光而不产生干扰闪烁，在 Pink、Purple 和 Rose Gold 鞋色之间形成偏好。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_008",
            "text": "[X]有一双 Gold 和一双 Copper 晚宴凉鞋，白天看起来同样克制；回顾烛光晚餐与明亮宴会厅的照片后，[X]会按金属色能保持温暖而不显刺眼的光线，为两双鞋分别安排使用场合。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_009",
            "text": "穿已有 Gray 鞋时曾漏看家中深色楼梯边缘后，[X]会在实际晚间灯泡下把这双鞋与已有 Black、White 鞋比较，决定需要多大的脚与台阶色差，同时避免鞋在家中其他地方显得过分突兀。"
          },
          {
            "id": "BND_SHOES_COLOR_V7_010",
            "text": "在持续数周使用踝部支具的日常里，[X]会轮换一双已有的橙色鞋和一双已有的透明鞋，两双都能容纳支具。若需要不脱鞋就看清支具边缘和绑带位置，[X]会偏好透明；若检查已经完成，希望支具配件退到一个明确、完整的暖色鞋面之后，则会偏好橙色。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:material",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "material",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_MATERIAL_PB_01",
            "text": "[X]脚后跟再次被新鞋磨破，护理人员查看[X]以前的水泡照片和鞋面成分，发现相同材料在不同鞋型上都造成类似位置；被穿到贴合脚形的常用鞋则来自另一类材料。"
          },
          {
            "id": "SHOES_MATERIAL_PB_02",
            "text": "[X]修鞋师展示鞋面开裂处，问[X]是否还要修同类材料；[X]指向另一双已有多年折痕却未断裂的旧鞋，决定把维修预算留给后者。"
          },
          {
            "id": "SHOES_MATERIAL_PB_03",
            "text": "[X]旅馆里几双鞋都被雨打湿，第二天只有一双恢复到能继续走路；同行人说前几次潮湿行程，[X]也总把这种材料留作主用。"
          },
          {
            "id": "SHOES_MATERIAL_PB_04",
            "text": "[X]厨房工作时热汤溅到鞋面，一种材料留下难处理的痕迹，主管拿来[X]常用旧鞋；旧鞋表面已有多次清洁形成的变化，却仍能继续值班。"
          },
          {
            "id": "SHOES_MATERIAL_PB_05",
            "text": "[X]孩子学系鞋时总愿意摸[X]一双鞋的表面，却躲开另一双；鞋面已被小手和[X]长期穿用共同磨得柔软，家人甚至把它固定留作练习。"
          },
          {
            "id": "SHOES_MATERIAL_PB_06",
            "text": "[X]炎热通勤结束，新鞋里潮湿闷热，[X]换上办公室常备旧鞋后脚部很快舒适；同事说那双鞋每年热起来都会重新出现在桌下。"
          },
          {
            "id": "SHOES_MATERIAL_PB_07",
            "text": "[X]海边回来清理鞋面，盐分让新鞋表面发生不可逆变化；朋友递来[X]过去常带的旧鞋，虽有水线却经多次清洁仍可用。"
          },
          {
            "id": "SHOES_MATERIAL_PB_08",
            "text": "[X]安静舞台上，新鞋材料每一步都发出摩擦声，音响师立即换来[X]过去演出常穿的一双；鞋底已修过几次，鞋面却始终不会干扰收音。"
          },
          {
            "id": "SHOES_MATERIAL_PB_09",
            "text": "[X]宠物又咬到门边鞋子，新鞋留下深痕，家中几双另一材料的旧鞋却只见浅印；[X]于是把前者收高，日常门边仍留后者。"
          },
          {
            "id": "SHOES_MATERIAL_PB_10",
            "text": "[X]把长期使用的鞋垫放进新鞋时，某种鞋面材料无法顺应脚形；配鞋师查看[X]那双已成形的旧鞋，按其材料和褶线重新推荐，穿上后无需磨合。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_MATERIAL_V7_001",
            "text": "去拥挤的夜间美食市集、可能遇到油滴和黏腻路面时，[X]会按鞋面能否快速擦净、是否残留污渍或需要立即专业护理，比较 Leather、Faux Leather、Rubber 与 Synthetic/Plastic 鞋。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_002",
            "text": "参加干燥夏季艺术营、每天要在多处尘土地之间长距离步行时，[X]会按通风、进尘、刷理后的表面恢复，以及一周内使用痕迹是变得更好看还是更糟，比较 Canvas、Textile 与 Suede/Nubuck 鞋。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_003",
            "text": "冬季住在地面寒冷、睡眠区有暖气的木屋时，[X]会比较 Plush/Fleece 内衬鞋与 EVA/Foam 洞洞鞋，并根据反复进出室内外，判断包裹式温暖还是可抖净、留在门边的隔热材料更合适。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_004",
            "text": "从卵石岸边走进冷水湖时，[X]会按 Neoprene 与 Rubber 鞋如何贴合脚部、短时浸水时隔绝冷感、是否夹砂，以及离水后的脚感进行比较。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_005",
            "text": "一年一度的纪念音乐会先在潮湿石质庭院集合，再进入正式大厅，[X]希望鞋能多年重复承担这段路线；[X]会根据维修渠道、预期折痕或剥落、离开庭院后的刷理需求，以及个人对动物来源材料的边界，在 Leather、Faux Leather 和 Suede/Nubuck 之间形成偏好。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_006",
            "text": "地面地图故事游戏中，[X]要反复跪下摆放路线卡、起身并沿画出的路径行走，前掌会集中弯折；[X]会根据表面在这些动作中形成的折痕或剥落是否可接受、接触地面后能否擦净、是否可维修，以及是否符合自己的来源原则，在 Leather 与 Faux Leather 之间形成偏好。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_007",
            "text": "干燥街面粉笔迷宫接力中，[X]要短距离跑动、跪下重画箭头，结束时鞋面会覆上彩色粉尘；[X]会根据接力中的透气感、粉笔进入织物的程度、护理标签允许的清洁方式，以及完全干燥后鞋面能否恢复形状，在 Canvas 与 Textile 之间形成偏好。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_008",
            "text": "[X]会比较一双后跟已被压缩的已有 EVA/Foam 凉鞋，与一双鞋底仍坚实但更重的已有 Rubber 凉鞋，并通过足印深度和静置后的恢复情况，决定下次更偏好哪种材料表现。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_009",
            "text": "湖边周末后，[X]已有 Neoprene 水鞋比另一双已有 Synthetic/Plastic 鞋更久不干且产生气味；[X]会改变冲洗方式和晾晒位置，再依据复测决定氯丁橡胶的贴合感是否值得额外维护。"
          },
          {
            "id": "BND_SHOES_MATERIAL_V7_010",
            "text": "[X]已有 Plush/Fleece 内衬拖鞋在反复清洗后结毡，另一双已有模塑 Synthetic/Plastic 家居鞋易消毒却始终不适合赤脚保暖；[X]会依据这些累积结果，为两双鞋保留或取消季节性用途。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:style",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_STYLE_PB_01",
            "text": "[X]换鞋底时，修鞋师让[X]在几种边缘处理里选择。[X]没有照新鞋的流行做法，而是指向自己几双走旧后仍愿意保留的风格关系；师傅按此收边后，[X]直接穿着离店。"
          },
          {
            "id": "SHOES_STYLE_PB_02",
            "text": "[X]参观服饰展时，[X]发现自己常穿鞋的风格被放进一个意想不到的历史脉络。同行人本以为[X]会觉得过时，[X]却指出鞋面已经随多年使用形成更适合自己的气质，并没有因此想换掉。"
          },
          {
            "id": "SHOES_STYLE_PB_03",
            "text": "[X]安检人员因鞋面细节多看了一眼，[X]熟练说明哪些部分可检查，同行人说几次旅行都碰到相似情况。[X]仍把这双鞋作为主用，因为这些视觉细节带来的气质值得接受额外停留。"
          },
          {
            "id": "SHOES_STYLE_PB_04",
            "text": "[X]乐队彩排时，舞台经理觉得[X]的新鞋与整套视觉太过规整，反而削弱了本人气质。[X]换上那双鞋头已被多场演出磨旧的常用款，站姿和舞台关系立刻恢复。"
          },
          {
            "id": "SHOES_STYLE_PB_05",
            "text": "[X]和伴侣合住后，两人重新安排门口鞋架，伴侣把[X]几双气质最鲜明的鞋放到开放层，而把一双追潮流买来却少穿的收进盒里。[X]随后每天拿走的也正是开放层那些。"
          },
          {
            "id": "SHOES_STYLE_PB_06",
            "text": "[X]准备转让一双外观看来很像[X]风格的鞋时，买家惊讶鞋底几乎没有磨损。[X]解释真正穿旧的是另一种气质，并拿出正在维修的旧鞋照片；最终这双只停留在想象中的款式被送走。"
          },
          {
            "id": "SHOES_STYLE_PB_07",
            "text": "[X]参加自由舞会时，主办方允许借不同风格的鞋体验。[X]试过几双后，只有一双让即兴动作仍像自己的表达，活动结束还询问了同类日常款；舞伴说以前在别的舞种里也见[X]回到这种气质。"
          },
          {
            "id": "SHOES_STYLE_PB_08",
            "text": "[X]制鞋师没有先展示新样，而是把[X]三双旧鞋并排看磨损。鞋型不同，但真正穿得最深的几双共享同一种视觉语气；新鞋因此从这些使用结果出发，而不是从当季目录出发。"
          },
          {
            "id": "SHOES_STYLE_PB_09",
            "text": "[X]邻居家的狗平时会听见[X]走近便到门边等候，这天换了一双风格完全不同的鞋，脚步与轮廓都让它迟疑。换回常用气质的旧鞋后，狗又恢复熟悉反应，邻居也笑出声。"
          },
          {
            "id": "SHOES_STYLE_PB_10",
            "text": "[X]聚餐结束找鞋时，桌下摆着几双相近尺码，朋友没有看内标便把最符合[X]气质的一双推过来。那不是最醒目的鞋，却在鞋头留下[X]常见的弯折，穿上后也不需调整步态。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_STYLE_V7_001",
            "text": "在新近修复的酒店舞厅参加周年晚宴时，[X]会比较提供精致正式感却不锁定年代的 Elegant 鞋，与在结构上有意呼应建筑早期年代的 Vintage 鞋，并在一般精致与历史对话之间选择。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_002",
            "text": "参加巡回根源音乐节时，[X]会比较植根于特定骑乘与边疆设计语汇的 Western 鞋，与通过多种质感和个人叠搭形成的 Bohemian 鞋，并在地域一致性和有意混搭表达之间选择。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_003",
            "text": "参加独立杂志市集后还要处理普通日常事务时，[X]会比较通过五金、比例和亚文化引用有意表达归属的 Punk/Gothic 鞋，与在日常中弱化存在感的 Casual 鞋，并在鲜明表态和低负担连续性之间选择。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_004",
            "text": "参加轻松的跨代野餐时，[X]会比较通过俏皮比例和亲切细节主动表达的 Cute 鞋，与价值在于轻松、不显眼融入的 Casual 鞋，并决定鞋子应主动引发互动，还是只需支撑整天活动。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_005",
            "text": "邻里短片合集里，[X]只出演一个被分配的片段：克制精致的抵达、档案式闪回、边疆旅行故事、混搭市集蒙太奇、自制暗色音乐场景、轻松俏皮插曲，或普通过渡段；因此[X]会根据该片段的叙事逻辑，偏好 Elegant、Vintage、Western、Bohemian、Punk/Gothic、Cute 或 Casual 鞋，而不会把所有信号混进一个设计。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_006",
            "text": "每月一次在附近步行时，[X]会使用一台生产年代有记录、经修复的家庭胶片相机，沿途停下来拍普通街道和建筑。在满足步行需求之后，若希望用当下的精致感让活动保持现代，[X]会偏好优雅风鞋；若某种具体结构确实与相机年代相连、而不只是泛泛显旧，则会偏好复古风鞋。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_007",
            "text": "固定去亲属的小型养马场过周末时，[X]会在共进午餐前换下适合干活的鞋；下午，朋友们还常在同一所房子里修补并组合旧织物。若希望真实的骑乘语境延续到非作业时间，[X]会偏好西部风日常鞋；若更想让下午多来源、个人化的叠搭方式占主导，则会偏好波西米亚风。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_008",
            "text": "[X]用长期关注的音乐场景所对应的五金和引用改造过一双已有鞋，它至今仍真实地呈现 Punk/Gothic；另一双量产深色鞋却从未如此。[X]因此把风格偏好维系在参与经历和设计语汇上，而不是颜色上。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_009",
            "text": "[X]已有 Cute 鞋经常引发友善交谈，却在精力较低的日子显得过于刻意；另一双已有 Casual 鞋无需计划就会被取用。[X]因此把前者保留给主动表达的社交使用，把后者作为轻松默认。"
          },
          {
            "id": "BND_SHOES_STYLE_V7_010",
            "text": "穿用一年后，[X]会回顾一双安静支撑多数搭配的已有 Casual 运动鞋，以及一双能稳定提升简单服装精致度的已有 Elegant 乐福鞋；只有新鞋能保留各自不同的造型功能时，[X]才会替换。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:sport",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "sport",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_SPORT_PB_01",
            "text": "[X]教练检查[X]带来的鞋底磨损，只看受力位置便知道它们长期服务于哪类项目；其中一双被当作临时体验用途的鞋几乎没有痕迹，[X]也没把它放回常用柜。"
          },
          {
            "id": "SHOES_SPORT_PB_02",
            "text": "[X]俱乐部缩减储物空间时，[X]只保留真正会在固定活动中用到的鞋；下个周期结束，留下的鞋又出现新的场地痕迹，被带走的类型则始终没有缺席感。"
          },
          {
            "id": "SHOES_SPORT_PB_03",
            "text": "[X]临时换到另一种场地后，脚下专项鞋不断打滑或卡住，伙伴拿来[X]往季用于该项目的旧鞋；表面已有对应场地留下的痕迹，换上后动作立即恢复。"
          },
          {
            "id": "SHOES_SPORT_PB_04",
            "text": "[X]康复师根据足部受力询问[X]最近做了什么活动，[X]带来的几双鞋里，只有某类专项鞋在同一位置反复磨损；旧评估记录也显示身体长期适应该项目的动作模式。"
          },
          {
            "id": "SHOES_SPORT_PB_05",
            "text": "[X]朋友第一次参加某项活动来借鞋，[X]能立刻说明哪双经过哪些场地、哪里容易受力；面对另一项目的鞋却只能说几乎没穿过，最终只愿把真正熟悉的那类经验讲给朋友。"
          },
          {
            "id": "SHOES_SPORT_PB_06",
            "text": "[X]固定项目临时换了训练地点，原专项鞋在新地面无法发挥，伙伴从器材包拿出[X]同一项目的另一双。两双鞋分别留下不同场地痕迹，换上后[X]不用改变动作便继续完成训练。"
          },
          {
            "id": "SHOES_SPORT_PB_07",
            "text": "[X]几双不同用途鞋同时需要维修，[X]先修那双一旦缺少就会中断固定训练的鞋；修鞋师认出同类鞋底过去已经按相同项目更换过多次。"
          },
          {
            "id": "SHOES_SPORT_PB_08",
            "text": "[X]更换鞋垫时，店员把几双用途不同的鞋并排，专项使用的鞋在对应受力处明显磨薄，普通出门那双则只有均匀日常痕迹。[X]根据哪种用途真正先磨穿，决定接下来补购运动鞋还是继续选择非运动角色。"
          },
          {
            "id": "SHOES_SPORT_PB_09",
            "text": "[X]团队合照缺少一双鞋，队友不用询问便从器材间拿出[X]固定用于该项目的旧款；鞋身虽修过几处，穿上后[X]的准备动作无需重新适应。"
          },
          {
            "id": "SHOES_SPORT_PB_10",
            "text": "[X]孩子整理门口鞋子时，把一双放进“去活动”的位置，另一双留在普通出门区；被问原因，孩子指着鞋底各自的泥、粉或室内磨痕，说每周看见[X]用法都一样。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_SPORT_V7_001",
            "text": "每周只有三个早晨可用于锻炼时，[X]会比较河边 Running 计划与室内 Cycling 计划，并依据可能的每周参与次数决定唯一一次新购鞋应服务哪项运动，而不是把两者笼统视为有氧活动。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_002",
            "text": "在公共运动中心，[X]会分别体验光滑球场上的 Basketball、泥地上的 Baseball 训练和混凝土地面的 Skateboarding，再决定持续哪项活动，以及相应鞋履是否需要针对该地面和动作模式专用。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_003",
            "text": "参加同时提供 Golf、Bowling 和 Dance 的跨代休闲周末时，[X]会决定哪项已安排活动值得使用专项鞋，以及哪些社交用餐应改穿明确 Not Intended for Sports 的鞋，而不是强迫一双运动鞋覆盖整个周末。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_004",
            "text": "参加乡间俱乐部周末前，[X]会区分有标记的 Hiking 路线、合规的 Hunting 行程和入门 Equestrian 课程，并比较一双户外靴能否安全迁移，还是三项活动不同的接触与控制要求需要分开用鞋。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_005",
            "text": "加入季节性装备借用库时，[X]会把冬季计划的 Skiing、Snowboarding 与夏季计划的 Fishing、Water Sports 天数对应起来，只为真正预约的运动借用专项鞋，而不是囤积所有专用选项。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_006",
            "text": "社区能量接力中，[X]先完成短距离 Running 圈，之后再踩固定 Cycling 设备为灯光装置供能；如果目标赛段由反复落地与蹬伸界定，[X]会偏好 Running 鞋，若稳定踏板接触和自行车接口是不可妥协的角色，则偏好 Cycling 鞋。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_007",
            "text": "邻里动作捕捉日中，[X]要为三个独立片段分别录制 Basketball 的变向起跳、Baseball 的土面启动，以及 Skateboarding 的蹬地与板面接触；由于球场支撑、土面抓地和板感无法互相推断，[X]会偏好与正在录制的具体运动相对应的鞋。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_008",
            "text": "一双原本标为 Not Intended for Sports 的已有鞋成了 [X]参加社交 Dance 的默认选择，却在转身时打滑；租用的 Bowling 鞋又只适用于球道。于是 [X]不再把日常熟悉感等同于运动适用性，并为两项活动分别安排专项鞋。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_009",
            "text": "[X]把已有 Hiking 靴分别用于合规 Hunting 行程和入门 Equestrian 课程后，会为相似狩猎地形保留成功迁移，却拒绝继续把同一双靴用于马镫，并改用马术专项鞋。"
          },
          {
            "id": "BND_SHOES_SPORT_V7_010",
            "text": "年度装备审查时，[X]发现已有 Skiing 和 Snowboarding 鞋每个冬季都会使用，已有 Fishing 鞋适合稳定甲板活动，而已有 Water Sports 鞋只在主动涉水时需要；[X]根据真实运动参与情况决定保留、共享或转出各双鞋。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:occasion",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "occasion",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_OCCASION_PB_01",
            "text": "[X]经过熟悉门厅时，门卫看见[X]脚上的鞋便问今天是否又去某类活动，因为多次从这里出发时，[X]都让同用途鞋承担那段路线。鞋底的对应磨损也让这个猜测很容易成立。"
          },
          {
            "id": "SHOES_OCCASION_PB_02",
            "text": "[X]某类场所的鞋柜管理员把一双旧鞋从长期寄放格递给[X]，说即使隔了一段时间，仍记得这双鞋每次活动前都会被换上。镜面鞋头和柜格标签都已有反复取放痕迹。"
          },
          {
            "id": "SHOES_OCCASION_PB_03",
            "text": "[X]更换鞋垫时，配鞋师注意到足底压痕集中在某类活动常见的受力位置。[X]拿来另外两双同用途鞋，内部虽品牌不同，却都形成相似轮廓，于是仍为下一次活动保留这一类配置。"
          },
          {
            "id": "SHOES_OCCASION_PB_04",
            "text": "[X]赶往某类安排时鞋子临时出问题，常接送[X]的朋友从后备箱拿出一双固定备用。朋友解释，多次同行后早就知道哪类日子[X]最不能用别的鞋凑合。"
          },
          {
            "id": "SHOES_OCCASION_PB_05",
            "text": "[X]家中玄关重新铺地，所有鞋都必须暂时移位。家人仍把一双鞋放在最靠近门的位置，因为接下来某类安排一出现，[X]就会先穿它；一周后鞋底新增的灰痕验证了这个位置没有留错。"
          },
          {
            "id": "SHOES_OCCASION_PB_06",
            "text": "[X]结束某类活动后，[X]从鞋盒旁取出固定的足部护理用品，处理的位置与鞋内磨损正好对应。同行新人惊讶流程如此熟练，老伙伴说这双及前几双同用途鞋都留下过相似后果。"
          },
          {
            "id": "SHOES_OCCASION_PB_07",
            "text": "[X]修鞋师原本按普通顺序排期，听说[X]下一次某类活动的日期后，主动把这双鞋提前。师傅知道同用途鞋对[X]并非偶尔才穿，因为鞋底此前已按相同受力方式换过不止一次。"
          },
          {
            "id": "SHOES_OCCASION_PB_08",
            "text": "[X]去某类安排途中突然下雨，[X]没有换掉原本的鞋，而是从包里取出保护套继续赶路。朋友说[X]每次都愿意为这双同用途鞋多做一步，也不让临时天气改变脚下选择。"
          },
          {
            "id": "SHOES_OCCASION_PB_09",
            "text": "[X]固定活动开始前，伙伴听脚步声便问[X]今天怎么没穿那双熟悉的鞋。新鞋虽外观合适，热身时却让[X]反复调整；下一次到场，旧鞋修好后又恢复了原来的节奏。"
          },
          {
            "id": "SHOES_OCCASION_PB_10",
            "text": "[X]从某类活动回家后，[X]按惯例先检查鞋底再进屋，并根据固定痕迹做清洁或晾置。来访亲友第一次跟着做，孩子却已经能指出刷子、垫纸和存放位置。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_OCCASION_V7_001",
            "text": "搬到适合步行的社区后，[X]计划缩小鞋履轮换，并决定一双鞋是否应同时覆盖 Daily 琐事与 Office/Business 会面，还是因为每周节奏和呈现要求不同而为两类场合分开准备。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_002",
            "text": "一次海岸旅行包含城镇步行、渡轮和两天沙滩涉水活动，[X]会决定携带一双通用 Vacation 鞋再加一双独立 Beach 鞋，还是让一双鞋同时覆盖两种场合而不妨碍既定活动。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_003",
            "text": "一场家庭庆祝活动包含安静的下午仪式和热闹的深夜宴会，[X]会决定 Formal Event 用鞋是否也应覆盖 Party 环节，还是中途换鞋更能保留两个阶段各自的要求。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_004",
            "text": "在租住小屋度过多雨周末时，[X]把短途小径和取柴归为 Outdoor 使用，把阅读、做饭和桌游归为 Home/Indoor 使用，并决定在门槛处换鞋是否比让同一双鞋勉强覆盖内外两种角色更合适。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_005",
            "text": "长途铁路假期只能多带一双鞋时，[X]会列出 Daily 车站活动、一次 Formal Event 晚餐和可能临时出现的 Party 邀请，决定哪种场合必须被这双备用鞋充分满足，哪种可以由途中穿着的旅行鞋兼顾。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_006",
            "text": "为期三天的邻里规划会议中，[X]会步行到会场、协助非正式布置，并在之后的正式公开环节介绍方案；如果目标角色主要是步行和布置时段，[X]会偏好 Daily 鞋，若需要优先服务正式发言与会议规范，则会偏好 Office/Business 鞋。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_007",
            "text": "一双已有凉鞋在观光日表现良好，却在岸边使用后夹砂且久湿；[X]因此把它保留在 Vacation 轮换中、取消其 Beach 用途，并为以后的涉水日另作准备。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_008",
            "text": "[X]回顾一双已有正装鞋：它在仪式中始终得体，却在舞蹈较多的宴会阶段变得受限；因此 [X]会保留其 Formal Event 用途、取消 Party 用途，而不是笼统认定它是一双坏鞋。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_009",
            "text": "社区幼苗配送日中，[X]先要推着箱子穿过泥泞种植地，之后再沿铺装街道把带标签的苗盘送到各个邻里站点；如果目标环节由泥土、不平整行道和负重抓地界定，[X]会偏好 Outdoor 鞋，若实际角色是短途铺装配送与普通门阶，则会偏好 Daily。"
          },
          {
            "id": "BND_SHOES_OCCASION_V7_010",
            "text": "[X]穿已有拖鞋多次走到潮湿的公共走廊后，会重新为这双鞋设定严格的 Home/Indoor 边界，并在门口另放一双便于处理短暂 Daily 外出事项的鞋。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:closure_type",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "closure_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_CLOSURE_TYPE_PB_01",
            "text": "[X]夜里警报响起，[X]在门口穿新鞋时被闭合结构耽搁，邻居已替[X]拿来那双能凭熟练动作迅速穿好的旧鞋；部件被多年夜间遛狗磨得发亮。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_02",
            "text": "[X]长途行程后脚部肿胀，新鞋无法调整到舒适状态；同行人拿出[X]常带的另一种闭合结构，[X]不用坐下便完成调节，像过去几次抵达时一样继续走路。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_03",
            "text": "[X]户外回来后泥沙卡住鞋的固定件，清理很久仍无法正常使用；伙伴递来[X]往季常穿的旧鞋，那种结构虽然也沾泥，却已形成一套快速清理方法。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_04",
            "text": "[X]孩子学穿鞋时总拿[X]门边一双练习，因为闭合逻辑全家都能用一句话讲清；部件边缘被[X]和孩子反复操作得光滑。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_05",
            "text": "[X]戴着厚手套准备出门，新靴子的闭合处怎么也抓不稳；家人换来[X]旧冬鞋，固定件尺寸和位置已让[X]不用看便能操作。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_06",
            "text": "[X]修鞋师建议把坏掉的结构改成外观更接近原款的方案，[X]却选了家中几双高频鞋共同采用的操作方式；师傅翻旧单发现[X]以前也做过相同改造。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_07",
            "text": "[X]后台换鞋时间被压缩，新结构让[X]错过入场点；服装师换来采用熟悉闭合的旧演出鞋，鞋面虽修过多次，[X]仍能在黑暗中一次完成。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_08",
            "text": "[X]一只手受伤期间，新鞋每天都需要他人协助；康复师从[X]鞋柜找出另一种闭合方式，[X]单手便完成，因为过去照护家人时已常用同类结构。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_09",
            "text": "[X]安检要求临时脱鞋，新鞋让队伍停顿了一会儿；同行人说回程应换回[X]那双旧款，以前多次过检时[X]几乎不用低头便能穿脱。"
          },
          {
            "id": "SHOES_CLOSURE_TYPE_PB_10",
            "text": "[X]步行途中第三次停下来处理松开的固定处，朋友问[X]为何不用平时那种从不打断路线的鞋；回家后[X]把新鞋送去改造，而不是继续适应。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_001",
            "text": "一只手暂时戴着硬质夹板时，[X]会比较日常鞋能否通过 Slip-On 或 Hook and Loop 独立穿脱，以及 Lace-Up 带来的控制力是否值得每天出门前请人协助。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_002",
            "text": "乘夜间列车后还要整日步行时，[X]预期双脚体积会变化，因此会比较 Dial 的微调与重新系 Lace-Up 鞋带，并判断座位上就能细调是否比熟悉且易现场修复的控制方式更重要。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_003",
            "text": "参加社区剧场演出、需要在昏暗侧台两次换鞋时，[X]会按换装时间、触觉确认和未扣牢鞋子上台的风险比较 Zipper 与 Buckle，同时保持台前所需的年代外观。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_004",
            "text": "在浅水潮池中行走时，[X]会比较 Drawstring 水鞋与贴合的 Slip-On 设计，重点判断鞋在有吸附感的沙地里是否会脱落、进砂后能否快速松开，以及长绳是否容易勾住岩石。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_005",
            "text": "经常骑车去图书馆和附近商店办事时，[X]会先骑行、锁车，再继续步行。若分区包裹能兼顾两段活动，并且愿意每次都把鞋带结妥善收离曲柄，[X]会偏好系带；若更看重没有拖尾鞋带、出发前能快速看一眼并触摸确认的闭合带，则会偏好搭扣。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_006",
            "text": "泥泞的社区果园采收日中，[X]会在坡地树行、低枝下跪姿和冲洗站之间移动，脚部体积也会随一天变化；如果能快速微调且泥土易清理，[X]会偏好 Dial；如果更看重扣件损坏后能用简单备用件现场更换，则会偏好 Lace-Up。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_007",
            "text": "布置邻里灯笼展时，[X]要抱着纸框和灯箱多次跨过无鞋大厅的门槛，之后还要走一段室外短楼梯；如果单手拉合能明确确认且不夹内衬，[X]会偏好 Zipper；如果无需用手就能穿脱、在楼梯和负重转身时仍稳固，则会偏好 Slip-On。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_008",
            "text": "穿了几个季节后，[X]已有 Buckle 凉鞋最常用的扣眼被拉成长椭圆，已无法把鞋带固定在原来的位置；[X]会先加固该扣眼、沿同一路线复测并比较相邻扣眼，再判断 Buckle 是否仍可继续使用，还是改用更易维护的 Hook and Loop。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_009",
            "text": "从公寓去楼内回收间是[X]经常做的家务：要拎着分类袋、推开两扇较重的门，有时还要停下压平纸箱。对于已有的两双鞋，若可调节的后跟固定确实有用，且收好的抽绳扣从不勾住袋子，[X]会偏好抽绳；若更看重免手穿入和没有松散配件，同时上下楼时后跟仍稳定，则会偏好一脚蹬。"
          },
          {
            "id": "BND_SHOES_CLOSURE_TYPE_V7_010",
            "text": "固定的保龄球活动中，[X]会在座位旁把两双已有的日常鞋之一换成球馆鞋，收好，再在散场前换回来。若换鞋时间短最重要，而且魔术贴放入鞋格后不会自行粘到别处，[X]会偏好魔术贴；若往返场馆的步行更需要分区包裹，额外系带时间也不会让同伴等待，则会偏好系带。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:pattern",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "pattern",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_PATTERN_PB_01",
            "text": "[X]更换鞋带后，原本完整的鞋面纹样被交叉线条切碎。[X]试了几种系法，最终恢复那种能让图案保持熟悉重心的路径；另一双常穿鞋的鞋带孔也留下相同穿法的磨痕。"
          },
          {
            "id": "SHOES_PATTERN_PB_02",
            "text": "[X]雨后站在水洼边，鞋面图案与倒影叠在一起，[X]第一次注意到走动时的视觉节奏正是自己喜欢的部分。同行人翻出几次雨天短片，其他常穿鞋也有相似纹样关系。"
          },
          {
            "id": "SHOES_PATTERN_PB_03",
            "text": "[X]护理鞋面后，图案的明暗反差突然变强，[X]觉得比磨旧前更难穿进日常。修鞋师根据[X]其他旧鞋的护理结果，把对比恢复到熟悉分量，而没有改变主题本身。"
          },
          {
            "id": "SHOES_PATTERN_PB_04",
            "text": "[X]下楼时两只鞋交替出现，新图案在左右脚之间形成[X]不喜欢的断裂节奏。同行人指出[X]常穿鞋即使主题不同，两脚运动时都更连贯；[X]因此请店家调整成对关系。"
          },
          {
            "id": "SHOES_PATTERN_PB_05",
            "text": "[X]新鞋到货后左右脚图案被装成了两个不同批次，[X]没有只要求“完全一样”，而是拿出几双穿旧鞋说明自己能接受的呼应方式。客服按这些实际样本换货，替代品很快被穿出鞋头折痕。"
          },
          {
            "id": "SHOES_PATTERN_PB_06",
            "text": "[X]孩子想在[X]的鞋上贴反光片，先沿着原有纹样寻找不会破坏图案的位置。孩子之所以知道该留哪里，是因为几双常穿鞋都被允许在相似视觉区域加过安全标记。"
          },
          {
            "id": "SHOES_PATTERN_PB_07",
            "text": "[X]拍摄二手鞋细节时，图案在鞋头弯折处的变化比平放时明显。买家担心难看，[X]却指出自己保留的几双鞋都喜欢这种越走越显出的纹样效果，而这双因相反原因才转让。"
          },
          {
            "id": "SHOES_PATTERN_PB_08",
            "text": "[X]舞池灯光依次扫过鞋面时，某种图案让脚步比身体动作更抢眼。[X]换上旧鞋后，纹样仍可见却不再夺走节奏；舞伴说前几场也总是这双最容易配合。"
          },
          {
            "id": "SHOES_PATTERN_PB_09",
            "text": "[X]鞋侧磨破后必须换一块面料，修鞋师给出几种图案方向。[X]要求新片随走路弯折后仍保持熟悉秩序，师傅从另一只鞋的旧修片找到了具体参照。"
          },
          {
            "id": "SHOES_PATTERN_PB_10",
            "text": "[X]新鞋踩过湿门垫后，鞋面纹样把水印分割成意外形状。[X]没有立刻嫌脏，而是根据自己几双常穿鞋在相同玄关留下的实际效果决定保留；家人早已知道哪些图案无需马上擦拭。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_PATTERN_V7_001",
            "text": "每天使用花卉图案手杖步行时，[X]会观察杖尖和双脚如何接近路缘、台阶与门槛。若连续纯色能让脚部轮廓在移动的手杖旁保持清楚，[X]会偏好纯色鞋；只有花卉图案的尺度明显不同、不会让两处表面在视觉上混在一起时，才会偏好花卉鞋。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_002",
            "text": "在有方向地面标记和移动彩灯的轮滑场里，[X]会用视频测试 Color Block 与 Geometric 鞋面，并选择大片分区或重复形状哪一种在转弯时更清晰、又不会被误看成地面箭头。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_003",
            "text": "参加希望鞋子能引发交谈的同好聚会时，[X]会比较关联喜爱专辑的 Graphic 与更容易被不同年龄认出的 Cartoon 图案，并决定更偏好表达具体归属还是传递轻松亲和感。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_004",
            "text": "在林地隐蔽处观察胆小野生动物时，[X]会比较能打散脚部轮廓的 Camouflage 鞋与带动物联想、却不真正匹配当地地面的低调 Animal Print 鞋，并在环境融入和表达性纹样之间选择，同时不把后者误称为隐蔽功能。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_005",
            "text": "在可为素色帆布鞋染色的社区工作坊里，[X]会在制作有意不均匀流动的 Tie Dye 鞋面与保留 Solid 鞋面、让日后使用痕迹逐渐出现之间选择，并决定希望哪一种可见变化讲述这双鞋的经历。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_006",
            "text": "种子图书馆故事步行中，[X]要穿过带密集插图的地面面板，并在阅读站之间传递种子袋；如果需要用克制的植物重复延续路线主题，[X]会偏好 Floral 鞋，若更需要连续安静的表面让脚部边界从复杂地面图画中分离，则偏好 Solid。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_007",
            "text": "俯拍定格脚步地图中，[X]要旋转、交叉并定住位置，不同小组还会依次进入画面；如果重复线条能让脚部角度易于对位，[X]会偏好 Geometric 鞋，若较大分色区域能标明小组和左右脚位置、又不会在弯折处碎裂，则偏好 Color Block。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_008",
            "text": "一双已有 Cartoon 鞋在 [X]探望年幼亲属时成了轻松的交谈线索，另一双已有 Graphic 鞋则只会引发小众识别；[X]根据真实反馈保留两双，并把它们分配给不同社交圈。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_009",
            "text": "在集体舞视频中，[X]已有鞋的 Tie Dye 呈现连续流动感，另一双已有 Animal Print 鞋则形成更鲜明的重复节拍；[X]会根据下一支舞从观众距离应显得流畅还是有顿点，在两双之间选择。"
          },
          {
            "id": "BND_SHOES_PATTERN_V7_010",
            "text": "[X]发现一双已有 Camouflage 鞋的左右鞋面取自印花布上差异很大的区域，于是会在正常站立距离和实际穿着状态下把两只鞋一起拍照，判断不相同的碎片式图案是显得有意变化，还是让整双鞋像意外配错。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:water_resistance",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "water_resistance",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_WATER_RESISTANCE_PB_01",
            "text": "[X]暴雨让公交停运，[X]穿着一双鞋走完替代路线，到家后按脚部和鞋内实际状态决定它以后是否仍承担雨天通勤；旧鞋柜里同等级商品的磨损说明这套标准已用过许多次。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_02",
            "text": "[X]鞋面没有明显破损，雨水却从接缝进入，修鞋师问[X]期待的是短时遮挡还是更完整保护；他翻到以前维修单，发现[X]对雨天主用鞋一直采用相同底线。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_03",
            "text": "[X]露天活动后，同行人的鞋都在晾置，[X]根据自己鞋内状态决定第二天是否继续穿；朋友说往年相同天气里，[X]也总把某一保护程度留作主用。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_04",
            "text": "[X]陪孩子踩水后，孩子先问[X]是否需要回家换袜，因为已见过不同鞋在这个游戏后带来不同结果；[X]检查后按家庭熟悉的方式决定继续玩还是结束。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_05",
            "text": "[X]旅行中唯一一双鞋被雨打湿，第二天能否继续穿直接决定行程；同行人说[X]过去打包主鞋时一直把可承受的进水程度放在同一位置考虑。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_06",
            "text": "[X]园艺水管脱手喷到鞋面，[X]没有立刻判断标签，而是看鞋内、袜面和之后的干燥状态；邻居说[X]以前几双园艺鞋也都是用真实结果决定是否留下。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_07",
            "text": "[X]接孩子时骤雨持续，鞋内状态让[X]不得不改变或维持后续安排；孩子熟练地问是否要启用家里那套雨天处理流程，说明这种结果已不是第一次。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_08",
            "text": "[X]准备转让一双鞋时，买家问防水情况，[X]没有照外观回答，而是描述它经历过的雨量、脚部是否潮湿和需要多久晾干；那些具体记忆来自多次实穿，而非一次测试。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_09",
            "text": "[X]清理冬季鞋时，鞋面盐线和内部潮痕并不一致，修鞋师据此建议不同处理；[X]选择继续保留的保护等级，与家里几双被穿旧的冬鞋相同。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_PB_10",
            "text": "[X]收到暴雨预警后，[X]没有按新旧选鞋，而是从门边拿起一双经历多次雨天、实际后果最符合自己容忍范围的；伴侣已提前把其他等级移到干燥处。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_001",
            "text": "在需要连续一个月往返住处、公交站和晚间课程时，[X]会比较应对不可避免持续降雨的 Waterproof 鞋与应对短时阵雨的 Water Resistant 鞋，并按真实暴露而非想象中的最坏天气选择防护等级。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_002",
            "text": "在本来就会全身湿透的公共戏水公园，[X]会主动选择能够进水并排出的 Not Waterproof 鞋，并拒绝一旦水从鞋口进入就失去意义的封闭防水宣传。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_003",
            "text": "参加全天社区洗车筹款活动时，[X]预期水管和冲洗水会在一轮轮洗车中持续流过地面并绕到鞋边，因此把 Waterproof 表现设为准入条件，并认为 Water Resistant 防护不足以应对累积的地表接触。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_004",
            "text": "户外草地仪式预报只有短时小雨且附近有室内备用场地时，[X]会偏好 Water Resistant 鞋而非更重的 Waterproof 选项；只有计划完全移入室内时，才保留 Not Waterproof 鞋。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_005",
            "text": "沿运河写生、需要频繁过桥但随处可避雨时，[X]会比较能承受间歇水雾的 Water Resistant 鞋，与只在干燥预报下才可接受的 Not Waterproof 鞋，并设定天气不确定到什么程度才值得增加防护。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_006",
            "text": "邻里雨声录制步行中，[X]可以沿雨棚移动、只短暂跨过湿区，也可以在无遮蔽街段站完整段录音；前一种路线会让[X]偏好 Water Resistant 鞋，持续淋雨录制则偏好 Waterproof，同时把鞋内湿气与外部渗水分开检查。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_007",
            "text": "社区温室育苗日中，[X]可能在幼苗桌旁经历短暂顶喷雾，也可能参加之后用水管清洁、地面持续过水的环节；[X]会根据实际分工，为间歇喷雾偏好 Water Resistant 鞋，为持续清洁阶段偏好 Waterproof 鞋。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_008",
            "text": "一双已有 Not Waterproof 帆布鞋在夏季演出中湿透，却一夜晾干且没有损坏；[X]因此在淋湿后果很低时仍会选择它，只有必须保持袜子干燥时才改穿有防护的鞋。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_009",
            "text": "在偏远多雨行程中重新使用旧 Waterproof 靴前，[X]会做浅水受控测试，发现一处弯折缝线渗水，再决定专业重新密封能否恢复防水等级，还是需要更换。"
          },
          {
            "id": "BND_SHOES_WATER_RESISTANCE_V7_010",
            "text": "每周清理公寓阳台和瓷砖玄关时，[X]会先扫掉干燥杂物，再拖洗门轨周围；这里常有短暂水花，但不会长时间积水。若拖洗后袜子仍干燥，[X]会在湿作业阶段偏好已有的防泼水鞋；另一双已有的不防水鞋则继续用于扫地等干燥家务。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:height_increasing",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "height_increasing",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_01",
            "text": "[X]上台前站到固定灯位，新鞋让视线和麦克风高度都低于[X]熟悉的位置；舞台监督拿来带增高结构的旧鞋，鞋底虽修过几次，穿上后所有标记无需调整。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_02",
            "text": "[X]穿带抬升结构的鞋下楼时，[X]在熟悉台阶仍能保持惯常节奏，同行人说这与[X]多年常穿的鞋底落差相同；换过自然高度备用鞋时反而会先试探几步。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_03",
            "text": "[X]裁缝为裤脚定长度时没有让[X]临时选鞋，而是直接拿出带增高结构的常穿鞋；几张旧改衣单的裤长都按同一脚下高度完成。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_04",
            "text": "[X]常穿鞋的内增高部件塌陷，修鞋师问是否恢复原高度；[X]指着鞋内长期受压形成的轮廓要求照旧重做，而不是借机改成自然高度。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_05",
            "text": "[X]家庭合照重新排站位时，摄影师按自然身高安排[X]，家人却提醒[X]通常穿带抬升结构的鞋；旧合照里[X]的视线位置确实多年保持在相似高度。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_06",
            "text": "[X]修鞋师建议加一层增高改善外观，[X]却要求保持原有自然高度；师傅翻到以前几双维修鞋，发现鞋底厚度虽不同，内部都没有人为抬升。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_07",
            "text": "[X]排练转身时，借来的增高鞋让重心位置陌生，[X]换回自然高度旧鞋后立刻踩中地胶上原有的中心标记。鞋底前掌的旧磨痕恰好对应那段转身路线，老师无需重画位置便继续排练。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_08",
            "text": "[X]长距离步行后，朋友借来的增高鞋让[X]脚掌受力改变，便从车里取出自然高度常备鞋；鞋底的均匀磨损显示它已经完成过许多相似路线。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_09",
            "text": "[X]正式活动前有人建议用增高鞋改善比例，[X]试过后仍换回自然高度鞋，并让裁缝按它调整裤脚；活动后这双鞋继续进入普通工作日。"
          },
          {
            "id": "SHOES_HEIGHT_INCREASING_PB_10",
            "text": "[X]家人送鞋前特意确认不要隐藏增高，说以前那双带抬升的礼物几乎没见[X]穿；新鞋保持自然高度，几周后鞋底已出现日常行走痕迹。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_001",
            "text": "在平坦站立区观看户外音乐节时，[X]认为鞋子适度增高能让视线得到足够明显的改善，因此只测试仍能应对数小时人群站立的稳定增高款。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_002",
            "text": "参加较晚结束的家庭聚会时，[X]预计要抱着睡着的孩子走下两段狭窄楼梯，因此明确只考虑不增高、能保持最熟悉落脚感的鞋。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_003",
            "text": "宽腿正装长裤完成最终试衣后，[X]发现预先考虑的小幅增高能让裤脚自然垂落、无需再次修改，因此会寻找在站立和行走时都能保持这一完成比例的增高鞋。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_004",
            "text": "参加包含潮湿不规则台阶和低矮通道的洞穴导览时，[X]会在比较其他特征之前先排除增高鞋，倾向让重心和头顶净空尽量接近平常状态。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_005",
            "text": "拍摄采用错落站位的正式集体照前，[X]会查看摄影者安排的位置，并选择适度增高的鞋，让预定的面部排列和长款服装比例都按计划呈现。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_006",
            "text": "缓慢行进的历史主题巡游中，[X]的长袍已按适度增高确定下摆，路线还包含停站与大幅转向；只有完整路线预演确认下摆能离地、预期比例得以保持，且增加高度不会影响平衡时，[X]才会偏好 height increasing = Yes。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_007",
            "text": "社区陶轮课程中，[X]坐着控制低位脚踏板，之后还要反复起身把未干作品送到架子上；为让熟悉的踝部角度、踏板压力以及坐站转换时的落脚方式在潮湿地面流程中保持不变，[X]会偏好 height increasing = No。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_008",
            "text": "在连续几次双人舞课中，[X]会与固定舞伴反复练习同一种基本握持，并交替穿已有的适度厚底鞋和平底鞋，观察增高后两人的手臂与肩位是否更自然、转身稳定性是否不受影响；只有两种效果都能重复出现时，[X]才保留增高选择。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_009",
            "text": "在坡度很大的露天剧场里，[X]穿已有带跟靴走下狭窄排间时感觉不稳；换成不增高的鞋重复路线后，[X]为以后去该场地设定了不增高规则。"
          },
          {
            "id": "BND_SHOES_HEIGHT_INCREASING_V7_010",
            "text": "[X]穿已有厚底鞋开车时，改变的踝部角度让精细踏板动作变得陌生；在静止车辆中与不增高鞋比较并确认差异后，[X]只要行程包含驾驶就会避免增高鞋。"
          }
        ]
      }
    },
    {
      "id": "product_bound:shoes:price",
      "binding": "product_bound",
      "category": "shoes",
      "attribute": "price",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "SHOES_PRICE_PB_01",
            "text": "[X]把鞋底已经修过两次的常穿鞋带到修鞋铺，师傅说这次费用接近重新购买，并把不同价位的替代鞋摆出来。[X]翻看架上其他几双有维修标签的旧鞋，最后仍在它们原价集中的区间选了新鞋，而没有因维修失败临时压低或抬高预算。"
          },
          {
            "id": "SHOES_PRICE_PB_02",
            "text": "[X]按足部检查结果重新配鞋时，门店提供了满足同一支撑要求、价格跨度很大的几双。功能条件都合格后，[X]把选择收回到自己几双已穿出稳定受力痕迹的旧鞋价位附近，并让技师按其中一双的鞋垫位置完成调校。"
          },
          {
            "id": "SHOES_PRICE_PB_03",
            "text": "[X]收到亲友为婚礼准备的一双鞋，尺码和样式都合适，价格却让[X]觉得不会在活动后继续穿。亲友陪着去换时，直接调出过去几次替[X]买鞋成功的订单价位；换回的那双在婚礼后很快出现了通勤磨痕。"
          },
          {
            "id": "SHOES_PRICE_PB_04",
            "text": "[X]的托运行李遗失，需要向航空公司申报其中几双鞋的重购金额。收到赔付后，[X]没有按赔付上限消费，而是从旧照片里的鞋底磨损和电子小票确认真正穿旧的是哪个价格带，再按这一范围补回日常鞋。"
          },
          {
            "id": "SHOES_PRICE_PB_05",
            "text": "[X]整理运动鞋轮换记录时，发现其中一双已达到更换里程，商店页面同时列出从入门到高端的替代款。[X]没有按本次折扣排序，而是调出前几双真正跑满记录的成交价，把新鞋筛到相同价格带后再试脚。"
          },
          {
            "id": "SHOES_PRICE_PB_06",
            "text": "[X]第一次领取可自由报销的年度工作鞋补贴，可以用额度买多双，也可以补差选择更高价商品。[X]把几双鞋底已经磨薄的常穿工作鞋单据带到店里，按其中反复出现的单双价位选定新鞋；财务随后也以这个范围登记下一周期的预留金额。"
          },
          {
            "id": "SHOES_PRICE_PB_07",
            "text": "[X]把很少穿的几双鞋带去寄卖，店员估价后发现最贵和最便宜的离群款都几乎没有鞋底折痕，反而是某一价格带的鞋已被穿到需要先清洁才能上架。[X]留下其中一双继续穿，只把闲置鞋交给店员。"
          },
          {
            "id": "SHOES_PRICE_PB_08",
            "text": "[X]在旅途中走坏了唯一一双日常鞋，只能在陌生小店立即替换。店员从不同价格层级拿来合脚款，[X]查看手机里几双完成过长途路线的购鞋记录，选中相同价格带的一双；回家数周后，它仍留在门口高频位置。"
          },
          {
            "id": "SHOES_PRICE_PB_09",
            "text": "[X]预订的一双鞋在交付前调整了最终售价，商家允许原路退款或按新价格成交。[X]把新价格和鞋柜里几双已经换过底的旧鞋订单并排查看；确认仍位于那个实际穿用最充分的区间后，[X]才同意补齐差额。"
          },
          {
            "id": "SHOES_PRICE_PB_10",
            "text": "[X]家中进水后，门边鞋架上的鞋大多无法继续使用。清点重购时，[X]没有优先恢复原价最高的鞋，而是先补回那个同时拥有最多磨损鞋底和维修票据的价格带；第一批送到的新鞋很快接替了原来的通勤位置。"
          }
        ],
        "B": [
          {
            "id": "BND_SHOES_PRICE_V7_001",
            "text": "一次行程横跨湿热城市、寒冷山地停留和正式晚餐，[X]会比较三双分工明确的平价鞋，与一双价格较高的多用途鞋加一双小型备用鞋的总成本；只有确实覆盖全部行程环节时，才愿意支付多用途溢价。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_002",
            "text": "多年后重新开始休闲滑板活动时，[X]为第一个月设定较低的购鞋预算，并预先约定只有出勤达到既定次数才升级到更高价格档，把第一天的兴奋与真实持续使用分开。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_003",
            "text": "由于标准鞋反复需要另配鞋垫，[X]会比较较低鞋价加试配、鞋垫和退货运费的总额，与包含延长试穿和调整服务的较高前期价格，并围绕最终可用结果设定支付意愿。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_004",
            "text": "面对限量鞋款发售，[X]会比较官方抽签价、当前转售报价、鉴定费用和等待普通发行的价值，并设定一个不依赖未来转售获利假设的总价上限。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_005",
            "text": "参加十周团体舞课程前，[X]会把学费、场地费和鞋费合并为一个参与预算，并根据如果不续课时希望保留多少可回收空间，在入门鞋与较高价鞋之间选择。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_006",
            "text": "记录一双已有跑鞋直到更换时的里程后，[X]会用购买价除以实际舒适里程，并与一双更便宜却提前停穿的鞋比较，以真实每有效里程成本设定下一次预算。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_007",
            "text": "[X]一双非常合脚的已有鞋磨穿鞋底后，[X]会比较完整换底报价及预计增加的使用年限，与购买替代鞋的总价和合脚不确定性，并只在符合剩余使用寿命上限时支付维修费。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_008",
            "text": "零售商在 [X]购买并拥有鞋后、承诺的价保期内降价；[X]会把可退差价与退货运费、重新下单风险和时间投入一起权衡，并设定值得追索的最低差额，而不是追逐每一次后续折扣。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_009",
            "text": "[X]发现一双昂贵的已有鞋很少被穿，因为每道擦痕都让人觉得损失很大；将其真实单次使用成本与一双更便宜、常穿的鞋比较后，[X]会决定放开使用、出售，或把以后购鞋上限设在不会产生顾虑的水平。"
          },
          {
            "id": "BND_SHOES_PRICE_V7_010",
            "text": "[X]已有一双大幅折扣、最终销售不可退的鞋，需要撑鞋后仍可能不合脚；[X]会把调整费用和无法使用的风险计入原价，再决定以后愿意多支付多少来换取可靠退货与居家比较。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:color",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "color",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_COLOR_PB_01",
            "text": "[X]常用包边角褪色，修复师建议整体改深，[X]只要求恢复原色；提带被手磨亮、底角也修过几次，说明这个颜色并未妨碍它长期进入生活。"
          },
          {
            "id": "BAGS_COLOR_PB_02",
            "text": "[X]朋友送包时附上退换单，说后来想起[X]以前同色包总保持崭新；[X]试背后也承认款式合适，颜色却很可能再次让它留在柜里。"
          },
          {
            "id": "BAGS_COLOR_PB_03",
            "text": "[X]行李转盘旁相似包很多，同行人仍从颜色分量先认出[X]那只；包角不同年份的旅行贴痕说明，这种易识别又愿意日常携带的色调已陪[X]走过多次行程。"
          },
          {
            "id": "BAGS_COLOR_PB_04",
            "text": "[X]单位提供两种颜色的工作包，管理员没问就递给[X]其中一只，因为旧包同色提手已补过几次；试行的另一色则在储物柜里几乎没有使用痕迹。"
          },
          {
            "id": "BAGS_COLOR_PB_05",
            "text": "[X]正式活动前临时向姐姐借包，姐姐直接越过新款拿出一只颜色更像[X]的；家人说从学生时代起，紧急借用时[X]总会选相近色域。"
          },
          {
            "id": "BAGS_COLOR_PB_06",
            "text": "[X]包内衬破损后可换几种颜色，[X]没有只看外表，而是保留自己在昏暗处也能快速找到物品的内外反差；旧包内衬同样位置被取物磨白。"
          },
          {
            "id": "BAGS_COLOR_PB_07",
            "text": "[X]彩排时包色与布景混在一起，导演要求更醒目；[X]从旧道具柜选了另一色，既能被看见，也仍是散场后愿意带走的方向。"
          },
          {
            "id": "BAGS_COLOR_PB_08",
            "text": "[X]室友整理门边包袋时没看内标便分出[X]的几只，只有一只冲动买来的颜色被放错；其余包新旧不同，色彩逻辑却十分连贯。"
          },
          {
            "id": "BAGS_COLOR_PB_09",
            "text": "[X]新包颜色蹭到浅色外套，店家同意换色；[X]没有只避开这次问题，而是根据家里几只真正磨旧的包选择会持续携带的方向。"
          },
          {
            "id": "BAGS_COLOR_PB_10",
            "text": "[X]拍家庭照时摄影师想调整配色，家人几乎同时说别换[X]手边那只包；翻看旧合照，同一色域虽换过包型，却一直出现在[X]身侧。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_COLOR_V7_001",
            "text": "参加业余乐团排练和小型公开演出时，[X]会把乐谱包放在多只近似的乐器盒旁，因此会选择一种在舞台上足够克制、又能在全体一起撤场时迅速辨认的颜色。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_002",
            "text": "一个家庭需要分别管理不同食物过敏时，[X]会在共同外出前准备独立零食包，并要求每个人把包放回固定架位；当标签背向外侧或来不及阅读时，包身颜色会成为冗余辨认线索。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_003",
            "text": "经常在日出前出门或黄昏后结束遛狗时，[X]会用小腰包或斜挎包装拾便袋、钥匙和手机，并从车辆与骑行者接近时的视角比较包的颜色，而不是只从佩戴者低头所见判断。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_004",
            "text": "参加从白天仪式延续到家庭便餐的纪念聚会前，[X]会选择一只全程放在身边、不过分显眼的包，并在日光和暖色室内灯下把包色与计划穿着放在一起检查，使它服务于场合而不成为视觉宣言。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_005",
            "text": "收纳空间有限，使[X]的日常包必须长期放在共享客厅的开放架上；[X]会和同住者在早晚光线下观察同一只包，判断包身颜色是能融入房间、形成一个恰当的亮点，还是因透出内容物而让架面显得更杂乱。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_006",
            "text": "多次把炭笔用品带回家后，[X]会比较一只已有帆布包上新落的粉尘，以及刷洗后仍残留的痕迹，再决定能显出污染的浅色表面，还是在清理间隔中更安静的深色表面更符合自己的清洁习惯。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_007",
            "text": "盛夏社区野餐时，[X]要先帮忙布置游戏，装着水果、巧克力和充电宝的包会在遮阳布搭好前暂放桌边；这段日晒每次都会出现，因此[X]会比较其他条件相近的包色在直射阳光下升温多快，并偏好能减少包内额外热量积累的颜色。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_008",
            "text": "三只同款日用包放在走廊长凳上后，两位家人反复拿错；[X]会检查清晨昏暗的室内光线，并为这些已有包选择在尚未完全清醒时仍容易区分的颜色，而不再依赖小姓名牌。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_009",
            "text": "参加户外皮影演出时，[X]会在深色幕布后的多个位置之间传递道具；后台只开昏暗红色工作灯，包又偶尔可能进入观众视线。[X]偏好一种伙伴能在后台迅速说清、找到，同时不会在演出画面中形成明亮或反光色块的包色。"
          },
          {
            "id": "BND_BAGS_COLOR_V7_010",
            "text": "一只已有包在明亮玄关挂钩上放了数月后，[X]会比较它背光的一面和长期受光的正面，判断变柔和且不均匀的颜色是可接受的使用痕迹、需要调整收纳方向，还是意味着下次更偏好稳定色。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:material",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "material",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_MATERIAL_PB_01",
            "text": "[X]通勤后新包肩带把皮肤磨红，医生询问接触材料，[X]拿出旧照片发现几只同成分包都在相同位置留过印；常用旧包的材料则已被肩部磨软却不再刺激。"
          },
          {
            "id": "BAGS_MATERIAL_PB_02",
            "text": "[X]饮料在包内打翻，某种内外材料留下难去气味；家人拿来[X]另一只经历过几次类似事故的旧包，它虽有清洁痕迹却仍在使用。"
          },
          {
            "id": "BAGS_MATERIAL_PB_03",
            "text": "[X]提手再次在弯折处开裂，维修员认出同类材料以前也换过；[X]把预算转给另一只表面已老化、结构却多年完整的包。"
          },
          {
            "id": "BAGS_MATERIAL_PB_04",
            "text": "[X]旅馆里几只包都被雨打湿，第二天只有一只恢复到能装文件；同行人说前几次潮湿行程，[X]也总把这种材料留作主用。"
          },
          {
            "id": "BAGS_MATERIAL_PB_05",
            "text": "[X]宠物跳上沙发时抓到包面，新包留下明显拉痕，门边几只另一材料旧包却只有浅印；[X]此后仍把后者留在日常可及位置。"
          },
          {
            "id": "BAGS_MATERIAL_PB_06",
            "text": "[X]海边回来清理包上的盐和沙，新材料发生不可逆变化；朋友递来[X]往年常带的旧包，表面虽有水线，经过多次清洁仍能继续用。"
          },
          {
            "id": "BAGS_MATERIAL_PB_07",
            "text": "[X]装入电脑后，新包本体变形并把边缘压向设备；同事拿来[X]常用旧包，材料已在长期负重中形成稳定轮廓，放入后各处仍贴合。"
          },
          {
            "id": "BAGS_MATERIAL_PB_08",
            "text": "[X]安静演出中，新包随动作发出摩擦声，[X]只能把它放远；朋友指向[X]过去常带的另一材料，说那只包即使取物也不会打断现场。"
          },
          {
            "id": "BAGS_MATERIAL_PB_09",
            "text": "[X]接过长辈旧包时，修复师说明这种材料需要持续养护；[X]看着自己另一只同材料包多年形成的光泽，决定接着维护而不是换成省事替代。"
          },
          {
            "id": "BAGS_MATERIAL_PB_10",
            "text": "[X]寒天出门时，包上某种材料让手指难以持续接触，邻居借来[X]以前常用的一只；旧包提手已被握得光滑，在低温里仍让[X]愿意拎完整段路。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_MATERIAL_V7_001",
            "text": "每月去补充装商店时，[X]会先区分干谷物、面粉、清洁剂补充液和蔬果，再选择可重复使用的袋子，并按粉尘是否易清、会不会吸油、能否机洗、接缝受力和可承受循环次数比较包身材料，而不是期待一种材料适合所有补充物。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_002",
            "text": "每月使用邻里桌游借阅库时，[X]都会归还一摞固定的硬盒，盒角会持续摩擦包体，柜台还需要数清每个书脊；[X]会根据盒角勾挂、耐磨恢复、库存可见性以及反复空折是否开裂，比较 Mesh、Nylon、Polyester、Plastic 与 Other Synthetic。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_003",
            "text": "在需要反复前往医疗候诊区时，[X]会长时间把一个小随身包放在腿上，并根据表面柔软度、积热、掉毛和就诊后擦拭难度比较材料，寻找可长期接触的表面，而不是把柔软仅当作装饰。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_004",
            "text": "几位亲属打算多年共用一只庆典小包，而不是各自购买；因此[X]会确认不同候选表面分别由谁来刷理、抛光、补缝或替换部件，并选择一种日常痕迹能由大家共同维护、而不是一直遮掩到无法使用的材料。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_005",
            "text": "为了家庭庆祝活动把一件易碎手工作品带到城另一端时，[X]已经确认它能装进一个小包，因此剩余判断是包身会不会随物体弯折、能否形成刚性边界，或能否提供不掉纤维的柔软缓冲。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_006",
            "text": "一只已有皮包经历干燥冬季收纳后，[X]会拍下提手附近的细小折纹，在隐蔽处测试建议的护理剂，并在恢复每周使用前判断护理流程和处理后的手感是否可以接受。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_007",
            "text": "每月使用公共烤炉做面包时，[X]会在面包静置过、但尚未完全冷却时步行带回家；包身既要释放余温产生的水汽，又不能在表皮上掉纤维或积住冷凝水，因此[X]依据面包到家时的状态选择材质，而不是看包本身是否好看。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_008",
            "text": "一只新牛仔肩包在浅色外套上留下蓝色转染后，[X]会用干燥包身在隐蔽布样上测试，完成首次清洁流程并检查之后的边缘柔软度，再判断牛仔材料的柔韧耐用是否值得管理。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_009",
            "text": "每周骑车经过石板路时，[X]会把包固定在同一只自行车筐里，最后一段再提着普通杂货步行；包身会反复摩擦同一处金属筐边，并在同一角度弯折，因此[X]偏好磨痕不易扩散、弯折处不会开裂或掉屑沾衣的材质。"
          },
          {
            "id": "BND_BAGS_MATERIAL_V7_010",
            "text": "一只自有珠饰晚宴包在安静演出中每次放到座位旁都会发出轻微碰响；[X]回家后重现日常提起、开包和放下动作，再比较固定珠饰与改用更安静的织物或硬质材料，同时保持相同的小包用途。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:style",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_STYLE_PB_01",
            "text": "[X]整理常用包上的挂饰时，朋友建议把所有装饰都换成一套流行组合。[X]只留下能延续包本身气质的几件，移走后来冲动加上的部分；提带上不同深浅的挂痕显示哪些组合真正长期出现。"
          },
          {
            "id": "BAGS_STYLE_PB_02",
            "text": "[X]手作师重做旧包提手时，可以把结构变得更精致或更粗犷。[X]根据包体被长期用旧后的气质选择了相符处理，而不是恢复出厂外观；修好后继续装回原来的日常物品。"
          },
          {
            "id": "BAGS_STYLE_PB_03",
            "text": "[X]办公室调整工位布置，新同事把[X]的包移到封闭柜里，桌面顿时显得过于陌生。熟悉团队把它放回椅侧，发现这只包的气质已和[X]多年的工作空间融为一体。"
          },
          {
            "id": "BAGS_STYLE_PB_04",
            "text": "[X]过境检查时，工作人员对包的特殊风格细节产生疑问。[X]熟练说明它们的结构和用途，同行人说多次旅行都发生过类似对话；[X]仍把这只包作为主用，并未为了省事换成中性款。"
          },
          {
            "id": "BAGS_STYLE_PB_05",
            "text": "[X]社区小展览借用居民有生活痕迹的包，[X]提供的那只被策展人一眼看作某种气质代表。展览结束后[X]没有将它收藏，而是重新装入门卡和钥匙继续使用。"
          },
          {
            "id": "BAGS_STYLE_PB_06",
            "text": "[X]孩子玩商店游戏时，把家中几只包分配给不同角色，唯独把一种气质的几只都说成“[X]要带的”。这些包边角磨损程度不同，却都确实常随[X]出门。"
          },
          {
            "id": "BAGS_STYLE_PB_07",
            "text": "[X]护理店把修好的包暂时摆在橱窗中，[X]路过时还没看取件号就认出自己的那只。店员说几次送来的包型虽不同，视觉气质总有明显共同点，顾客甚至问过是否出自同一系列。"
          },
          {
            "id": "BAGS_STYLE_PB_08",
            "text": "[X]室友拍短片缺一个道具，拿了[X]一只很少使用的包。回放时两人都觉得那只包像在扮演某种角色，换成边角已磨旧的常用包后，[X]只是经过镜头也显得自然。"
          },
          {
            "id": "BAGS_STYLE_PB_09",
            "text": "[X]周末市集摊主新到一只包后没有群发消息，只给[X]留了半天。摊主记得[X]过去真正背走并用旧的都是相近气质，而对另一些热门风格只会看看；[X]到场后也先试日常取物。"
          },
          {
            "id": "BAGS_STYLE_PB_10",
            "text": "[X]常用包的提带突然断裂，朋友拿来一只同容量替代。[X]把全部物品转入后仍觉得携带状态陌生，最终又借到一只气质更接近自己的包；同样内容物下，肩背动作才恢复自然。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_STYLE_V7_001",
            "text": "一整年的社区口述史活动会轮流在修复车站、20 世纪 70 年代社区礼堂和玻璃幕墙图书馆举行，[X]随身带着授权卡、家庭照片和笔记本；[X]偏好一种无需假装属于某个年代、却能进入这些不同空间的包风格，并判断这种连续性应来自经典比例、真实历史呼应，还是有意保持当代克制。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_002",
            "text": "参加包含课程和非正式晚间聚会的社交舞周末前，[X]会选择一只既能承认活动地域传统、又仍像个人日常穿着一部分的包，并在直接传承表达、轻松手作诠释和仅保留微妙线索的日常版本间判断。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_003",
            "text": "参加远洋客轮海报档案开放日、随后去普通滨水午餐时，[X]会根据包的整体设计如何离开展览语境来选择；Art Deco 可以转译有档案依据的阶梯字形，Elegant 保持安静精致，Modern 形成有意的当代反差，Classic 则以持久比例回应历史而不复制海报。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_004",
            "text": "参加独立漫画周末活动时，[X]需要一只解放双手的包，它既可参与轻松的视觉文化，又能在严肃的讨论环节中继续使用，因此要判断角色趣味、当下街头感和干净当代基底各应占多大比重。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_005",
            "text": "[X]长期使用的包已无法修复，几位朋友便借来带有混搭手作细节、熟悉传承线索、轻松日常设计或简净线条的候选包；[X]把每只包带着过一个普通日子，观察哪一种最先不再像借来的，而不是只凭陈列时的印象选择。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_006",
            "text": "从亲属那里得到一只旧马鞍形包后，[X]会用同一件物品搭配普通每周穿着，也带去一次地域聚会，再判断它鲜明的传承身份是与自己有真实联系、带来愉快呼应，还是过于像角色装扮而不适合继续使用。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_007",
            "text": "每月一次的不掉队骑行会频繁停下集合、等待最慢的参与者，并回到起点而非竞速冲线；[X]会依据这种反复行为形成的活动语气选择包风格：运动风可以肯定身体参与，而现代、休闲或极简风也能避免让包暗示这次骑行并不存在的竞技强度。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_008",
            "text": "一套邻里桌游借用物会在三个家庭之间轮换，当周保管的家庭还要把记分纸带到聚会；轮换开始前，[X]请所有人按整体包风格排序，并在可爱、潮流、休闲或极简中，偏好三个家庭都愿意直接携带、而不是再藏进另一只包里的设计身份。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_009",
            "text": "在网络关注热潮中购买一只高辨识度造型包一个月后，[X]会复盘它实际参加了哪些原计划外出、搭配时仍觉得有创造性还是像完成任务，并判断这件物品代表长期品味还是短暂外部提示。"
          },
          {
            "id": "BND_BAGS_STYLE_V7_010",
            "text": "经过数次较正式的家庭晚餐和白天仪式，[X]会反复携带同一只硬挺手袋，并结合照片、就座舒适度以及它在问候与餐桌间转换是否自然来复盘，判断这种精致感是持久、过度正式，还是足够干净而可扩大用途。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:capacity",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "capacity",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_CAPACITY_PB_01",
            "text": "[X]下班临时多买了东西，常用包仍留出恰好的空间，既没挤压原有物品也没有变得难提。东西取出后，内壁几处已经磨亮的位置正好对应日常物与顺路采购品的边缘，折叠购物袋仍原封不动留在底部。"
          },
          {
            "id": "BAGS_CAPACITY_PB_02",
            "text": "[X]陪孩子外出回家后，把包放到换洗台旁，让孩子自己取出纸巾、零食、水杯和替换衣物。每样东西都有刚好能伸手找到的位置，既没有未用的大片空层，也没有物品需要互相挤压；几处分区上的旧贴纸已经被孩子摸掉了边角。"
          },
          {
            "id": "BAGS_CAPACITY_PB_03",
            "text": "[X]在机场安检时被要求把包内物品全部摊进托盘，大小不同的日常用品正好铺满一盘。检查结束后，[X]按固定顺序装回，没有临时舍弃，也没有剩下松散滚动的空间；内衬上对应轮廓的压痕让每件物品都回到原位。"
          },
          {
            "id": "BAGS_CAPACITY_PB_04",
            "text": "[X]从过大的包里翻找门卡时错过电梯，朋友提醒[X]以前几只同容量也因取物深、内容散而被闲置；当天回家，[X]便把日常物移回更熟悉的空间。"
          },
          {
            "id": "BAGS_CAPACITY_PB_05",
            "text": "[X]去还书时工作人员以为[X]需要分两次搬运，常用包却承受住固定数量，提带已有许多次相同负重留下的拉伸；[X]也没有为偶尔更多的书换成更大体积。"
          },
          {
            "id": "BAGS_CAPACITY_PB_06",
            "text": "[X]拍摄临时增加一支镜头，助理熟练把它放进[X]包中一直保留的空位；包内隔层边缘的磨损显示这套容量分配已跨过多个项目。"
          },
          {
            "id": "BAGS_CAPACITY_PB_07",
            "text": "[X]聚会前朋友让[X]代带一件物品，常用小包无法放下，[X]却没有换更大包，而是请对方另找人；朋友笑说[X]多次社交都宁愿限制携带物也保留这种轻量空间。"
          },
          {
            "id": "BAGS_CAPACITY_PB_08",
            "text": "[X]单位缩小储物柜后，一只包仍能装下每天固定物品并顺利入柜；同事发现[X]旧包尺寸虽换过外观，内部容量一直围绕同一工作负载。"
          },
          {
            "id": "BAGS_CAPACITY_PB_09",
            "text": "[X]在旅馆寄存处接过一只与自己常用包外观相近的包，[X]刚提起就听见里面的日常物在空处滚动，立即发现拿错了。换回自己的那只后，同样物品贴合在熟悉位置，内壁压痕与物品轮廓一一对应，走动时也不再碰撞。"
          },
          {
            "id": "BAGS_CAPACITY_PB_10",
            "text": "[X]包底破损送修时，师傅从内衬压痕看出每天固定装载量，建议加大结构；[X]拒绝改变容量，只要求恢复原空间，因为其他尺寸曾让取物流程变乱。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_CAPACITY_V7_001",
            "text": "在下一次季节性停电到来前，[X]会按家中实际居住人数重新准备应急包，铺开饮水袋、药品、收音机、照明、充电线以及每人一件保暖层，并移除任何会迫使必需品分装到第二只包里的非必要物品。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_002",
            "text": "为轮流举办的桌游之夜做准备时，[X]会先把当晚选中的游戏盒、卡牌架、记分本和共享零食放在一起，再决定需要多大的游戏包，而不是每次都把整套收藏全部带上。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_003",
            "text": "每周在孩子上音乐课时等候，[X]会准备一只安静活动包，装入平板或书、耳机、速写本、铅笔和饮料，再逐项精简，使它能放在座椅旁，又不会让短暂等候变成一次沉重出行。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_004",
            "text": "参加社区陶艺课前，[X]会把工作室已经提供的工具，与需要从家里带去的围裙、手巾、笔记本、可重复使用容器和未完成的小件作品区分开，只根据剩余的个人物品体积选择包。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_005",
            "text": "为了在两个住处之间定期交接，[X]会列出衣物、安抚物、学习用品和药品中哪些已经在两边各有一套，只按每次真正必须带走的物品选择周末包，并在补齐重复必需品后重新缩减容量。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_006",
            "text": "经过几次市场采购后，[X]会复盘一只常用托特包在面包被压坏或蔬果不得不手提之前究竟能装下多少，再用一周常买的蓬松物品重新测试同一只包，而不是根据它折叠后的大小作判断。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_007",
            "text": "两名成人和两名孩子冬季乘火车出行时，[X]会标出围巾、手套和轻薄外层在暖车厢里脱下、以及户外换乘前重新穿戴的时间；[X]偏好能容纳这批可预见共享体积的最小包容量，避免任何人一路手拿散落衣物。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_008",
            "text": "孩子开始每周在图书馆挑选一整摞书后，[X]会检查现有书袋能竖直装下多少本绘本而不压弯封面，再共同确定一个从借阅台到步行回家都能由同一只包完整容纳的借书上限。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_009",
            "text": "一件毯子作品从分散的毛线团逐渐变成已经连接的大片织片时，[X]会在每个阶段给同一只项目包拍照，判断它是否仍能在不挤压针脚的情况下容纳作品，并把细小工具排除在容量判断之外。"
          },
          {
            "id": "BND_BAGS_CAPACITY_V7_010",
            "text": "每周邻里送餐前，[X]会在志愿者出发前按地址分配密封餐盒，并把回收空盒另放在厨房周转箱中；送餐包容量依据已核实的最大外送路线确定，让该路线的全部餐盒能由一只包带走，也不会为临时加塞留下无依据的空间。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:occasion",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "occasion",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_OCCASION_PB_01",
            "text": "[X]家人还没提醒某类安排即将开始，[X]的一只包里已经逐渐聚齐对应物品。孩子把最后一件小物放进去时十分熟练，因为以往同类日子总由这只或同用途包提前接住准备过程。"
          },
          {
            "id": "BAGS_OCCASION_PB_02",
            "text": "[X]清理包内小袋时，[X]发现几枚来自同类场所的寄存牌，日期并不相邻。包角也在相同一侧被磨软，[X]便把最新的牌重新放回，作为下一次到访仍会使用的凭据。"
          },
          {
            "id": "BAGS_OCCASION_PB_03",
            "text": "[X]朋友替[X]准备某类活动时，把所需物品装进一只外观看来合适的包，结果取放顺序完全不对。[X]换回常用包后，每件东西自然落到旧内衬磨亮的位置，朋友才理解它为何总服务于这种日程。"
          },
          {
            "id": "BAGS_OCCASION_PB_04",
            "text": "[X]重新规划家中收纳时，室友想把一只包移到高层，[X]却保留在出门动线上，因为某类安排常在临时通知后发生。接下来一次通知到来时，[X]无需重新装填便按时离开。"
          },
          {
            "id": "BAGS_OCCASION_PB_05",
            "text": "[X]到熟悉场所后，主人没有问便为[X]腾出一个位置，因为知道这只包在某类活动里会按固定顺序展开物品。第一次同行的人还在找东西时，[X]已经完成准备，包内分区也有对应磨痕。"
          },
          {
            "id": "BAGS_OCCASION_PB_06",
            "text": "[X]某类活动结束后，其他人把剩余物随手分装，[X]却能立即判断哪些应回到包里、哪些应留在现场。伙伴说几次结束流程都由[X]和这只包完成，空出的格位甚至代表当天任务已结束。"
          },
          {
            "id": "BAGS_OCCASION_PB_07",
            "text": "[X]维修员修好包底后，没有只放纸团测试，而是让[X]装入某类活动真正会带的物品。旧包在这些重量下自然恢复形状，[X]才确认它可以继续回到原用途。"
          },
          {
            "id": "BAGS_OCCASION_PB_08",
            "text": "[X]孩子不会说包型名称，却一直用某类日子的称呼指代[X]的一只包。当天准备出门时，孩子准确把它从几只相似包中拿出，并指出内袋里仍放着该活动固定需要的小物。"
          },
          {
            "id": "BAGS_OCCASION_PB_09",
            "text": "[X]去某类活动的接驳车上，[X]熟练把包挂到不会妨碍他人的固定位置。司机说同路线乘客很多，只有[X]这只同用途包的受力痕与挂钩高度完全对应。"
          },
          {
            "id": "BAGS_OCCASION_PB_10",
            "text": "[X]某类活动暂停数周后，家人想清空一只包腾空间，[X]却只取出易坏物，保留了其他分区。活动恢复当天，物品位置仍能让[X]直接开始，包也重新回到原来的挂位。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_OCCASION_V7_001",
            "text": "当[X]从居家工作转为每周两天使用共享办公室时，包需要贯穿到达、桌面布置、午餐和会议区移动，又不能像临时行李；[X]会先明确办公用途，再考虑具体款式。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_002",
            "text": "准备乘坐夜行列车并在黎明前换乘站台时，[X]会规划一只在上车、睡眠、简单洗漱和最终转车全过程中都保持可用的包，并把旅行途中使用的载具与抵达后才使用的包区分开。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_003",
            "text": "参加社区唱片市集时，[X]希望空手浏览，在多个摊位比较后，把少量购得唱片竖直保护着带回家，因此所需的包明确服务于购物过程，而不是家庭收藏收纳。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_004",
            "text": "参加清晨社区观鸟计数时，[X]需要一只在离开铺装路面、安静移动于多个观察点并取用图鉴或饮水时仍适用的包，同时不把这次活动泛化成运动训练或普通旅行。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_005",
            "text": "全家上午去潮池探索时，[X]会把带到岸边的包与留在车里的包分开，前者需要放在沙地上、随毛巾和水鞋一起移动，并在大家往返岩石与野餐区时始终容易辨认。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_006",
            "text": "在多次业余羽毛球活动中，[X]会使用同一只旅行袋往返更衣区和场边，并记录它在热身、轮换比赛和返家全过程中是否实用，从而判断这只具体包真正属于运动日常，还是仅仅能装休闲衣物。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_007",
            "text": "参加由乐器体验、草坪演出和深夜接驳车组成的社区音乐周末时，[X]会把全程贴身携带的包与乐器箱、过夜行李分开；这个包的核心角色是贯穿节庆日程，而不是装下整趟出行有关的所有物品。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_008",
            "text": "报名成人晚间语言课程后，[X]会用一只已有邮差包参加每周课堂、交换作业和自习，再复盘它是否足以支持反复出现的学习节奏，从而成为默认上学用包，即使它最初并非为此购买。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_009",
            "text": "参加惊喜生日聚会时，[X]会提前到场布置装饰、藏好礼物，随后留下聊天并参加围坐游戏；准备物资会在客人到达前移走，因此[X]只依据后半段社交流程定义派对用包：它要让个人必需品始终在身边，并能自然地在随身佩戴和放在椅旁之间切换。"
          },
          {
            "id": "BND_BAGS_OCCASION_V7_010",
            "text": "参加有固定座位和招待环节的市民颁奖礼前，[X]会拿着一只继承来的手拿包，演练问候、就座观看流程和站立拍照，判断这件具体物品是否真正服务于正式活动，而不只是摆在家中显得精致。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:closure_type",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "closure_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_CLOSURE_TYPE_PB_01",
            "text": "[X]闸机前新包开口让[X]反复操作，身后同事已从旧包熟悉位置拿出备用卡；旧包固定件被多年通勤磨得光滑，闭眼也能完成取放。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_02",
            "text": "[X]车厢急刹后新包里的物品散到座位下，同行人帮忙收拾时提醒[X]，过去采用另一种闭合的包从未在相同路线发生这种事。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_03",
            "text": "[X]戴厚手套时无法打开新包，邻居拿来[X]旧冬季包；固定件位置已让[X]不用看便能操作，边缘也被多个寒季磨亮。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_04",
            "text": "[X]安静讲座中，新包开合发出明显声响，[X]只好停止取物；朋友把自己的纸笔递来，说[X]平时那种结构从不会让大家注意到取放动作。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_05",
            "text": "[X]孩子学习收拾物品时总拿[X]一只包练习，因为开合逻辑全家都能用一句话讲清；部件已被两代人的手磨出光泽。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_06",
            "text": "[X]常用包固定件损坏，维修员给出几种方案，[X]选择与家中其他高频包相同的操作方式；旧维修记录显示[X]以前也把陌生结构改成过这一类。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_07",
            "text": "[X]在人群中工作人员提醒包口可能未关好，[X]一路都在反复确认；朋友换来[X]常用旧包后，这个动作消失了，因为身体已熟悉那种闭合完成时的反馈。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_08",
            "text": "[X]一手抱着睡着的孩子时，[X]仍能从包里取出门卡并重新闭合；伴侣说多年接送里[X]一直用同类结构，提带和固定件都留有单手操作痕迹。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_09",
            "text": "[X]海边回来后沙粒卡住新包固定件，清理许久仍不顺；同行人递来[X]往年常带的旧包，那种结构虽也进沙，却已有一套快速处理方法。"
          },
          {
            "id": "BAGS_CLOSURE_TYPE_PB_10",
            "text": "[X]乘车途中需要快速拿药，新包开口让[X]错过时机；家人换来常用包后，[X]按固定动作一次取出，内衬同一位置已有长期摩擦痕。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_001",
            "text": "在社区菜园收获时，[X]会沿着短畦把宽叶菜和柔软蔬果直接放进随身袋，随后倒到分拣台上，全程无需放下工具去操作扣件；物品始终有人照看，因此无遮挡的开口本身就是流程的一部分。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_002",
            "text": "在游乐场照看幼儿时，[X]经常只能腾出一只手取湿巾或零食，并要在继续跟随孩子前把包合上，因此会根据一次明确按合能否确认关闭、又能否抵抗随手拉扯来判断扣合方式。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_003",
            "text": "长时间待在安静阅览室时，[X]会轮流取用笔记本、眼镜盒和借阅卡，并顾及附近正在阅读的人，因此会比较每次打开包、再让它明确恢复关闭状态时产生的声音和干扰。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_004",
            "text": "寒冷清晨戴着手套步行到露天交通站点时，[X]需要打开肩包取交通卡，并在上车前重新闭合；[X]会在不摘手套的情况下演练这一动作，淘汰无法仅凭触感可靠扣合的五金。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_005",
            "text": "在社区共享食物台上，[X]把独立包装的食物从附近家中带来，将包放在取用台旁并反复邀请大家拿取；理想的开口应当能立刻展示内容，同时避免悬垂五金进入食物区域。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_006",
            "text": "再次使用一只继承来的手袋前，[X]会记录它在空包和正常装载时转锁的对位情况，注意到锁片是否需要抬起才能合拢，再判断小修能否恢复可靠闭合，或这种扣合已经不适合日常使用。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_007",
            "text": "在通风凉亭举行的社区留种交换中，[X]要把扁平纸质种子袋带到多个标记台；每次移动前都必须闭合包口，避免阵风吹走内容，抵达后又要在不夹住纸角的情况下重新打开，因此顺畅、可重复的扣合过程比静止时看起来合得上更重要。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_008",
            "text": "搭乘小型客船前，[X]会演练在狭窄跳板上提包前进，并始终用一只手扶住栏杆；包会在视线下方倾斜，而且要到坐稳后才能打开，因此偏好的闭合方式必须能单手操作、明确确认扣合，并在登船倾角下保持关闭。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_009",
            "text": "当[X]把可重复使用的水瓶加入一只按扣小斜挎包后，包贴着身体弯曲时按扣开始自行弹开；[X]会比较正常装载与精简装载的表现，再决定保留快速按扣、改用其他闭合方式，还是把这只包限定在更少物品时使用。"
          },
          {
            "id": "BND_BAGS_CLOSURE_TYPE_V7_010",
            "text": "一只已有文件托特包的拉链反复夹住文件夹边缘后，[X]会拍下一次正常装包和闭合过程，在不移除文件夹的情况下调整位置，并判断连续拉链能否在有时间要求的预约中保持顺畅，或应改用更简单的五金。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:water_resistance",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "water_resistance",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_WATER_RESISTANCE_PB_01",
            "text": "[X]看到维修师更换包口接缝后只准备做外观检查，便请他用喷壶分段淋过新缝线。水停在表面、沿针孔局部进入或直接打湿内衬，会分别决定这只包恢复全天使用、只留作短程，还是继续返修；旧工单夹着一块有同类水印的替换布。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_02",
            "text": "[X]在码头等船时，一只包从长椅滑进浅水，几秒后便将它捞起。打开后，内层完全干燥、边角局部受潮或内容物整体进水，会让[X]分别继续登船、只转移敏感物品，或直接取消携带；提手内侧已有一圈较淡的旧水线。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_03",
            "text": "[X]雪天回家后，看着包面堆积的雪在玄关慢慢融化，没有只擦外层，而是查看内侧票据、备用衣物和接缝下方，再决定它仍可全天带出、只能避开久雪，还是不再承担冬季用途；柜里旧包底部留着不同深浅的盐圈，可与这次结果直接对照。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_04",
            "text": "[X]在公共浴室遇到排风临时故障，挂在更衣柜里的包很快覆上一层凝露。[X]随即检查内侧票卡和电子物品，再决定它今后仍挂在蒸汽区、只放外间，或不再用于这类环境；提带上的旧寄存牌把同一处磨得发亮。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_05",
            "text": "[X]在咖啡馆遇到水壶被碰倒，液体从桌面包围了放在地边的包。同桌人没有等待说明，先抬高电子物品再递来纸巾；[X]打开内衬，根据完全干燥、局部受潮或整体进水决定继续使用、今后只避开落地，或直接送修，包底一圈较浅的旧水印也在此时重新显出来。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_06",
            "text": "[X]花店临时请[X]带走几枝仍在滴水的花材，包内底部是否把水限制在局部，决定其他物品能否继续同放。店员按[X]以往取花时的要求准备衬垫，[X]据结果调整这只包的后续用途。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_07",
            "text": "[X]骑车经过积水时，后轮连续把水甩到包底。到达后[X]检查备用衣物是否干燥，再决定这只包仍作主用、只应付短路程还是不再雨骑；旧车包有相同位置的水线。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_08",
            "text": "[X]场馆喷淋误启动，挂在墙边的包被从上方淋湿。工作人员协助检查内部后，[X]根据票据、衣物和设备的状态确定防护等级，而不是依据外表仍有水珠；同类旧包也曾经历过类似意外。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_09",
            "text": "[X]工作包表面需要用湿式消毒，护理人员观察水分是否进入内层，再决定能否继续装敏感物品。几只被[X]长期留下的包都能达到同一保护结果，不合适的则早已改作空物搬运。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_PB_10",
            "text": "[X]屋顶漏水后，柜中几只包从同一方向受潮。[X]没有按价格抢救，而是先检查各自内部并保留达到熟悉防护底线的那些；家人发现这与以往雨天真正被带出门的等级完全一致。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_001",
            "text": "参加包含受控翻船练习的社区帆船课时，[X]需要用包装手机、交通卡和干衣物；它可能持续被水泼溅，甚至短暂入水，因此保护必须应对直接接触，而不能只适用于小雨。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_002",
            "text": "在一年一度的雪雕活动中，[X]的包要在工作区旁放置数小时，而压实的雪会逐渐融化，使包底长期处于饱和湿地；干手套、手机和返程所需物品都必须保持干燥，因此[X]会按持续湿地接触来选择保护，而不是只防短暂泼溅。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_003",
            "text": "参加一系列露天电影夜时，[X]预期地面会结露，也可能遇到短时阵雨，但若雨持续就能转移到棚下；装笔记本和零食的包只需应付短暂的表面水分。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_004",
            "text": "在温室内每周举行的幼苗交换中，[X]会把包放在潮湿长凳上，也偶尔从细雾喷淋管线下经过，但不会让包浸在积水里；因此[X]希望表面水滴能直接擦去，并接受活动后让包正常晾干。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_005",
            "text": "参加可经连续有顶通道抵达的室内合唱排练时，[X]除了乐谱夹，只携带水瓶和可替换的铅笔；确认路线和存放位置后，[X]认为防水不会给这只包增加实际用途。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_006",
            "text": "一场突发暴雨后，[X]现有的自行车驮包虽有遮盖拉链，内部仍然受潮；[X]摊开湿掉的收据和充电线、检查接缝进水路径，并决定替代品必须在持续大雨中保护内容物。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_007",
            "text": "咖啡馆里一整杯饮料在桌上打翻并泼到[X]的日常包上时，[X]立即擦拭表面，之后确认液体没有进入内衬；这次经历确认了[X]对抵挡短时泼洒的偏好，但并不意味着需要可应付浸水的保护。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_008",
            "text": "定期搭乘沿海渡轮时，[X]只需经过一小段露天跳板，偶尔会遇到几滴风吹水珠，随后便进入客舱就座；持续下雨时工作人员会让所有人留在室内，包也不会放在甲板上，因此[X]偏好足以覆盖短暂飞溅的耐水性能，而非浸水级防护。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_009",
            "text": "社区泳池活动结束后，[X]把手机和干衣物留在另一只储物包里，湿毛巾、泳帽和冲洗过的泳镜则单独装包，放在敞开的自行车筐中带回家；[X]偏好这只湿物包不防水，让余水可以排出、空气能够流通，而不是把水分封闭在内容物周围。"
          },
          {
            "id": "BND_BAGS_WATER_RESISTANCE_V7_010",
            "text": "一只装饰性晚宴手包本身不防水，[X]没有给它加涂层或直接替换，而是只在预报干燥的安排中使用，遇到可能下雨或需长时间户外等候时便换成已有的耐水包；一个季节后，[X]再评估这套双包规则是否足够容易执行，从而让手包保持原状。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:weight_class",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "weight_class",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_WEIGHT_CLASS_PB_01",
            "text": "[X]把日常物品转进新包前，[X]刚提起空包便觉得肩部负担陌生；同事递来常用旧包，提带已顺着长期受力弯曲，装入相同物品后仍符合熟悉节奏。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_02",
            "text": "[X]在登机口称重时发现，内容物并未增加，新包却让随身额度超限，随后把原样物品移回一只提带补过两次的旧包，秤面立即回到额度内；旧包侧袋里还夹着几张已经起皱的登机行李标识，但[X]没有为了外观更新再次换回新包。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_03",
            "text": "[X]一手抱孩子、一手提包走到家后，新包本体让手腕明显酸痛；伴侣换回[X]常用重量的旧包，提手已有多年单手携带磨痕。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_04",
            "text": "[X]咖啡馆挂钩因空包过重向下滑，服务员认出[X]以前常带的包从未出现过同样问题；[X]只好把新包放地上，整晚都不愿再提。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_05",
            "text": "[X]电脑和水杯都没变，换包后的通勤却让肩颈提前疲劳；理疗师查看[X]旧包自重和多年使用记录，确认负担差来自包本体而非装载。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_06",
            "text": "[X]火车到站时需要把包举上行李架，新包空重让动作迟缓；同行人从前几次旅程知道[X]惯用重量，主动接手并提醒回程换回旧包。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_07",
            "text": "[X]旧包维修时可拆掉部分金属件减重，师傅逐步调整到[X]一提便觉得熟悉的位置；旧改造单显示不同包型最终都落在相近自重范围。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_08",
            "text": "[X]整场活动都需站立，新包即使只装少量物品也让肩部不断换边；朋友说[X]以前愿意整晚携带的包，本体重量一直更接近另一档。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_09",
            "text": "[X]家人送包前先问空包重量，因为以前那只偏重礼物几乎没见[X]带；新包保持熟悉自重，几周后提带便出现真实使用弯曲。"
          },
          {
            "id": "BAGS_WEIGHT_CLASS_PB_10",
            "text": "[X]清空包后仍觉得沉重，[X]才意识到过去几天以为“装太多”的肩痛主要来自本体；换回旧包后内容物完全相同，通勤疲劳恢复到熟悉程度。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_001",
            "text": "在楼内回收房临时搬到相隔两段楼梯的位置一个月期间，[X]每次携带相同的分类物品，并比较空包返回上楼时还剩多少负担，从而把包本身的重量与固定的家庭负载区分开。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_002",
            "text": "参加桌面微缩模型展时，[X]要为同一托盘的上色模型选择携带包，并比较轻软包与刚性加固包，判断为了防止精细部件在转运中相互碰撞，多少空包自重是值得的。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_003",
            "text": "社区修理小组在布置时会由多人轮流传递同一只工具包，因此[X]让每位固定参与者先提起空的候选包，再装入相同工具，并把最不舒适者的反馈视为共同上限；只有全组都能感到桌边控制更安全时，才接受更重的重量级别。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_004",
            "text": "参加需要频繁站立停留的城市写生活动时，[X]会把同一块薄画板、铅笔和水杯连续数小时背在单侧肩上；由于工具几乎不需要额外保护，包体持续贡献的重量就成为负载中主要可调整的部分。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_005",
            "text": "季节性衣物交换结束后，剩余衣物要用一辆有固定安全载重的小型脚踏拖车运走；[X]先单独称量衣物，再比较候选服装袋的皮重，只有当额外自重所带来的结构能让货物足够紧凑、从而免去第二趟运输时才接受它。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_006",
            "text": "连续数周把同一只硬质麻将箱带过院子参加牌局后，[X]会在取出整套密实牌块时感受空箱重量，再放回牌块检查负载稳定性，并判断箱体较高的自重是否完成了足够的保护工作而值得保留。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_007",
            "text": "一只带缓冲的望远镜包开始让清晨步行显得疲累时，[X]连续三个早晨分别称量望远镜、记录卡和装满后的整包，通过扣除内容物而不是凭负重印象判断包自身重量，再把测得的贡献与缓冲层实际避免的碰撞相比较。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_008",
            "text": "家庭乘机且随身行李有固定限重时，[X]会先为药品、证件和每个人实际要用的衣物预留重量，再空包称量候选包；[X]偏好在能稳定控制这批固定物品的前提下尽可能轻的重量级别，只有额外自重能避免明确的保护或操作问题时才接受增加。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_009",
            "text": "在需要长时间站立的招待会上，[X]携带一只金属框晚宴包，里面只有卡夹和钥匙，却多次换手；回家后[X]又拿起空包检查。由于几乎没有内容物重量可归因，[X]会决定这只包本身的分量是否还适合未来晚间使用。"
          },
          {
            "id": "BND_BAGS_WEIGHT_CLASS_V7_010",
            "text": "社区历史寻踪接力中，每组的包从空包开始，在多名参与者之间传递，两小时内只逐步加入纸质印章卡和地图碎片；由于内容物几乎没有重量，[X]会在极轻与轻量之间选择，判断少量额外结构是否能让交接更顺畅，又不会反过来成为游戏的主要负担。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:pattern",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "pattern",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_PATTERN_PB_01",
            "text": "[X]入场扫码时，包面图案让工作人员一时看不清贴在外侧的电子标签。[X]调整到自己几只常用图案都会预留的安静区域后顺利通过，旧包同处也有反复贴标签留下的浅痕。"
          },
          {
            "id": "BAGS_PATTERN_PB_02",
            "text": "[X]包面绗线断开后，手作师给出直线补缝和顺着原纹样延伸两种方案。[X]选择能让修痕继续成为图案一部分的做法，另一只常用包的多次补线也遵循同一关系。"
          },
          {
            "id": "BAGS_PATTERN_PB_03",
            "text": "[X]安检屏幕需要人工确认包内物品时，[X]根据外部图案快速指出对应分区，工作人员很快找到目标。同行人说[X]几只常用包虽图案不同，却都选择能帮助自己记住内部布局的视觉结构。"
          },
          {
            "id": "BAGS_PATTERN_PB_04",
            "text": "[X]透明防雨罩套上后，包面图案被褶皱分割得完全不同。[X]仍能接受那种在遮罩下保持熟悉秩序的纹样，却把另一只总显杂乱的包留在晴天使用。"
          },
          {
            "id": "BAGS_PATTERN_PB_05",
            "text": "[X]孩子想在[X]的包上贴姓名贴，先问哪些图案位置不能遮。孩子已经从几只旧包学会把贴纸放在相似视觉空隙，那里也留下多次撕换形成的浅印。"
          },
          {
            "id": "BAGS_PATTERN_PB_06",
            "text": "[X]市集摊主把一只软包折叠展示，展开后图案在折线处改变了关系。[X]反复模拟自己平日装载后的形状，只留下在鼓起和压平时都符合熟悉视觉节奏的版本。"
          },
          {
            "id": "BAGS_PATTERN_PB_07",
            "text": "[X]演出现场的投影落到包面，新图案把文字切成难辨碎片。技术人员换来[X]常在这类舞台使用的另一纹样，边角虽旧，却让投影内容保持清楚。"
          },
          {
            "id": "BAGS_PATTERN_PB_08",
            "text": "[X]提起包后，软提手让正面图案旋到身体侧面，[X]觉得重点消失。修理师按另一只常用包的磨痕调整提手方向，负重时纹样终于落回[X]熟悉的位置。"
          },
          {
            "id": "BAGS_PATTERN_PB_09",
            "text": "[X]整理旅行照片时，[X]发现许多画面只拍到包的一角，却仍能从纹样片段判断是哪一次行程。当前新包只有完整展示才像自己，[X]因此决定调整图案尺度而非勉强使用。"
          },
          {
            "id": "BAGS_PATTERN_PB_10",
            "text": "[X]摊主为防止油渍给包垫了一张纸，却发现纸边与图案重叠后更难看清污染位置。[X]换用自己几只常用包都会采用的垫法，回家清洁时也能准确找到接触区域。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_PATTERN_V7_001",
            "text": "多户家庭共同野餐时，[X]会把几只同尺寸的食物包和活动包沿长桌摆开，并选择从两端都能辨认的重复表面结构，即使肩带相互遮挡、每只包只露出一部分也仍可区分。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_002",
            "text": "为面向儿童和成人的自然社群筹款台准备物品时，[X]会比较包面上的生物、徽记或插画场景能否一眼传达社群主题，同时又足以让领取者在活动结束后继续使用。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_003",
            "text": "在初学者缝纫小组中，[X]会先决定大家要练习拼接可见余料、制作重复填充区，还是保持表面连续以便观察和讨论施工误差，再据此选择包项目。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_004",
            "text": "参加一年一度的植物园会员活动时，[X]希望包面能呼应展览中一种可辨认的自然形态，又不让整套穿着像角色装扮，并会把设计与日后准备重复穿用的普通衣物再次比较。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_005",
            "text": "参加林地导航游戏时，[X]会在标记检查点放下包，让同伴从不同方向重新寻找，并比较会融入地面的表面，与无需大块亮色也能提供重复方向线索的表面。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_006",
            "text": "一只继承来的织物手袋让[X]在取票时多次转错正反面；此后几次出发中，[X]会记录密集弯曲纹样是否掩盖了朝向，并比较保留原纹样、增加一块纯色方向面板，或把素净背面朝外使用。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_007",
            "text": "修补一只已有格纹背包的破损面板后，[X]会把替换布片以不同方向对齐，并从正常观看距离检查照片，判断延续原有结构、形成有意对比块，还是保留可见修补最能维持包的辨识度。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_008",
            "text": "在本地活动中得到一只印花托特包数月后，[X]会观察活动文字外露、向内折叠以及其余穿着保持素净时，这只包是否仍进入每周轮换，并用持续使用而不是纪念情绪判断表面设计。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_009",
            "text": "在公园举行家庭动物踪迹游戏时，每组会把线索卡和拓印纸放在各自站点的包里；[X]偏好一种能在交接时被各组清楚说出的动物纹样，同时还要让参与者明白，包面装饰本身并不是正在追踪物种的线索。"
          },
          {
            "id": "BND_BAGS_PATTERN_V7_010",
            "text": "在每周的跨年龄故事活动中，[X]会带来一件隐藏物品，等听众先猜它在故事中的作用后再揭晓；由于装它的包在开场阶段始终可见，[X]会决定包面是提供宽泛主题提示，还是保持纯色，避免具象角色或动物图案提前泄露答案。"
          }
        ]
      }
    },
    {
      "id": "product_bound:bags:price",
      "binding": "product_bound",
      "category": "bags",
      "attribute": "price",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "BAGS_PRICE_PB_01",
            "text": "[X]在行李转盘拿到一只严重破损的旅行包，航空公司提供现金赔偿并允许自行补差购买替代品。[X]没有照赔付上限挑选，而是根据家中几只边角磨旧、仍不断出行的包的订单价位确定范围，随后买回同一价格带的新包。"
          },
          {
            "id": "BAGS_PRICE_PB_02",
            "text": "[X]的常用包因内层破损送修，修复师算出费用后建议直接换新，并展示了价格跨度很大的替代品。[X]从工单袋里取出另外几只包的原价和维修记录，在那些真正被修过、继续使用的包所处价格带里选了新包。"
          },
          {
            "id": "BAGS_PRICE_PB_03",
            "text": "[X]获得一笔可自由使用的移动办公补贴，既能买几个低价包，也能补钱选更高价款。[X]把电脑和日常物品装进几只样品试背后，按自己已经磨亮提带的工作包订单价位选定一只；财务看到旧报销记录后，也按该单件范围归档。"
          },
          {
            "id": "BAGS_PRICE_PB_04",
            "text": "[X]收到妹妹送的一只包，容量和颜色都合用，价签却让[X]迟迟没有拆下。妹妹很快意识到问题，陪[X]换到家人过去代买成功的价格区间；新包几个月后提握处已经出现与那些旧包相似的光泽。"
          },
          {
            "id": "BAGS_PRICE_PB_05",
            "text": "[X]整理闲置包去寄卖，估价员把原价和成色逐一写在标签上。价格偏离某个区间的几只几乎没有使用痕迹，而处在该区间的包需要先处理底角和提带磨损；[X]最后又从待寄卖区拿回一只仍舍不得停用的旧包。"
          },
          {
            "id": "BAGS_PRICE_PB_06",
            "text": "[X]借给朋友的一只包被饮料彻底浸坏，朋友提出照最高预算赔一只新的。[X]没有让对方按愧疚程度付款，而是翻出那只包和另外几只常用包的成交记录，只请朋友在同一价格带选择替代；新包到手后立即接回原来的通勤物品。"
          },
          {
            "id": "BAGS_PRICE_PB_07",
            "text": "[X]搬家前为每只包填写运输保价，工作人员按申报金额把它们分层。真正需要单独包裹的常用包虽用途不同，购买记录却集中在同一价格带；一只价格离群但几乎没用过的包被[X]直接放进转赠箱，而没有为它增加包装。"
          },
          {
            "id": "BAGS_PRICE_PB_08",
            "text": "[X]等候的一只包到货时，商家通知最终售价与登记时不同，可以放弃名额也可以按新价购买。[X]把新价格与几只肩带已经修过的旧包订单并排查看，确认仍处于那个使用最充分的区间后才完成付款。"
          },
          {
            "id": "BAGS_PRICE_PB_09",
            "text": "[X]退掉一只开口不合用的包后得到一笔店铺余额，可以拆分购买，也可以补差。[X]没有被余额牵着走，而是先把页面筛到自己几只底角磨旧的包所处价格带，再从中选择新的携带结构；未用余额继续留在账户里。"
          },
          {
            "id": "BAGS_PRICE_PB_10",
            "text": "[X]常用的包袋借用服务结束运营，允许会员按不同价格买断借过的商品。[X]查看自己的借用次数和维修押金记录，只在某一价格带选了几只真正多次续借的包；更便宜或更贵但只试过一次的都按期归还。"
          }
        ],
        "B": [
          {
            "id": "BND_BAGS_PRICE_V7_001",
            "text": "孩子开始独立携带更多用品后，[X]会设定包含一次预期成长性更换的年度包具预算，并判断哪些耐用改进值得现在多花钱，同时不占用为书籍和活动预留的资金。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_002",
            "text": "几位亲属希望共用一只轮流装载家庭用品的包，因此[X]会比较平均分摊、由一人先付款和购买二手三种方式，并在选择具体款式前约定维修或更换费用如何承担。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_003",
            "text": "精简拥挤衣橱时，[X]会考虑购买一只服务于每周重复轮换的包，而不是为多个场合分别买包；[X]按两年内的现实使用次数估算，只有单包方案确实能阻止后续购买时才接受更高价格。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_004",
            "text": "在一段仅持续六周、需要解放双手携带物品的临时恢复期内，[X]会在借用、低价购买后转赠，以及多花钱购买日后仍会使用的包之间比较；明确的结束日期使价格判断保持边界。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_005",
            "text": "面对偶尔需要把包放在无锁公共区域的活动，[X]会在购物前设定可承受损失金额，并拒绝携带昂贵或有情感价值的包，把可替换性视为正向要求，而不是默认最耐用的包就值得最高预算。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_006",
            "text": "一只已有包的主拉链和提手同时损坏后，[X]会取得维修报价，加上送修交通和预计等待时间，再与合适替代品比较，同时计入修好后可能剩余的使用寿命，而不是只看新包标价。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_007",
            "text": "面对一场与[X]日常生活完全不同着装要求的邀请，[X]会把一只具体租赁包与购买类似商品比较，计入押金、归还交通、逾期风险和可信的未来使用；一晚需求必须能够解释总成本，而不是靠商品声望。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_008",
            "text": "为一只具体包支付溢价前，[X]会查看同等成色的真实二手成交，扣除平台费用和现实磨损，再判断潜在转售是否真正降低持有成本，还是只是在为当前承担不起的价格找理由。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_009",
            "text": "在已确认的六段家庭行程前，[X]会把同一只包放入相关个人物品尺寸框中测试，并记录每一航段若不合格会产生的费用；[X]只在更高售价不超过这只合规包能保守避免的实际费用时接受溢价，并拒绝没有已订行程支撑的笼统“旅行加价”。"
          },
          {
            "id": "BND_BAGS_PRICE_V7_010",
            "text": "一只已有包符合保修条件时，[X]会把免费维修与寄送费用、包装和数周无包期一起比较，再估算临时替代品或本地维修，判断名义免费的保修是否真是成本最低的路径。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:color",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "color",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_COLOR_PB_01",
            "text": "[X]常戴手链抛光后露出原本颜色，店员问是否要改镀；[X]只让他恢复旧色，链节内侧被皮肤磨亮，说明这个颜色已陪[X]经过大量日常。"
          },
          {
            "id": "JEWELRY_COLOR_PB_02",
            "text": "[X]朋友送耳饰时附上退换单，说想起[X]以前同色礼物总保持崭新；[X]试戴后也承认造型合适，颜色却很可能让它再次留在盒里。"
          },
          {
            "id": "JEWELRY_COLOR_PB_03",
            "text": "[X]家人让[X]从几件旧首饰中选择一件继续佩戴，[X]没有选价值最高的，而是拿了颜色能自然进入自己常戴组合的那件；几周后，旧金属边缘已出现新的贴肤光泽。"
          },
          {
            "id": "JEWELRY_COLOR_PB_04",
            "text": "[X]彩排灯光让一件首饰颜色完全改变，服装师建议换成更醒目版本；[X]从旧演出盒挑了另一色，既在灯下清楚，也仍愿意散场后戴回家。"
          },
          {
            "id": "JEWELRY_COLOR_PB_05",
            "text": "[X]活动前临时向姐姐借项链，姐姐越过新款拿出一件颜色更像[X]的；家人说从学生时代起，紧急借戴时总能猜中[X]会选哪类色调。"
          },
          {
            "id": "JEWELRY_COLOR_PB_06",
            "text": "[X]珐琅首饰缺了一小块，修复师提出换成更流行的颜色，[X]只要求补回原有关系；旧维修照显示[X]以前也为相近色调做过保色修复。"
          },
          {
            "id": "JEWELRY_COLOR_PB_07",
            "text": "[X]室友整理公共洗手台上的首饰时，没看收纳盒便分出[X]的几件，只有一件冲动买来的颜色被放错；其余新旧不同，色彩逻辑却十分连贯。"
          },
          {
            "id": "JEWELRY_COLOR_PB_08",
            "text": "[X]摘下戒指后，皮肤旁的颜色在自然光里显得陌生，[X]换回常戴旧戒；那件首饰内圈已被多年佩戴磨出稳定光泽，贴近肤色时无需适应。"
          },
          {
            "id": "JEWELRY_COLOR_PB_09",
            "text": "[X]摄影师建议在纪念照里换一种首饰颜色，家人几乎同时说别改[X]耳侧那一色；旧合照里它虽换过品类，却总出现在相近位置。"
          },
          {
            "id": "JEWELRY_COLOR_PB_10",
            "text": "[X]的首饰定制师把历次剩余的金属与珐琅小样摆到桌上，不同年份的订单竟像一套有意配好的色板；[X]这次仍选了能与那些常戴旧饰自然叠在一起的方向。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_COLOR_V7_001",
            "text": "为定格动画影盒肖像选择首饰时，[X]会比较 Black、White、Gray 与 Clear，观察它们在固定布景中分别形成强剪影、浅色切片、中间调轮廓或捕光而近乎消失的效果。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_002",
            "text": "参加黏土与纸张大地色交换活动时，[X]会把 Brown、Beige 首饰与 Bronze、Gold、Rose Gold 色泽比较，决定首饰是融入哑光天然样本，还是加入在漫射光下仍可辨认的暖色反光标记。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_003",
            "text": "阴雨的下午，[X]经常步行去接一位家人，先在灰暗天光下等候，再穿着炭灰色雨衣走进明亮门厅。对于珐琅首饰，[X]会根据暖色点缀是要在两处都保持深沉、在进门后柔和过渡，还是始终在深色外层上最明亮，偏好红色、橙色或黄色。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_004",
            "text": "把手绘水深图转化为一组纪念手链时，[X]会分别用 Green、Turquoise、Blue 和 Navy 表示岸边植物、浅水、开阔水面和最深区域，并偏好与目标记忆位置相对应的颜色。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_005",
            "text": "在月光感灯具下进行以紫罗兰与玫瑰为主题的花园诗歌朗读时，[X]会比较 Purple、Pink 与 Silver 首饰，判断它是呼应文本色彩、柔化色彩，还是提供冷调反光停顿，同时避免变成直白花卉戏服。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_006",
            "text": "轮流讲述口述史的家庭晚餐中，一枚小胸针用来标记当前发言者，室内光线也会从窗边日光转为桌灯；[X]会根据哪种金属色既便于交接时辨认、又在录像里不抢过讲述者的脸和手势，在 Silver、Gold 和 Rose Gold 之间形成偏好。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_007",
            "text": "在数字化一本褪色婚礼相册并拍摄重聚肖像时，[X]会让首饰指向一层仍存的档案线索：白色纸边、透明保护套，或用于排列页面的黄色缎带；只有对应颜色在扫描预览和室内合影中都能看出这种引用、又不会像意外老化，[X]才会偏好 White、Clear 或 Yellow。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_008",
            "text": "三枚分别为 Red、Orange 和 Yellow 的珐琅挂饰佩戴三个夏季后，[X]会比较被遮挡与暴露边缘，观察哪一种暖色仍保留预期对比，并用真实褪色图案决定替换配色。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_009",
            "text": "四条已有绿、松石、蓝和海军蓝珠链分别丢珠后，[X]把当前批次的替补珠放进原珠之间，并在日光和室内光下观察，判断哪种颜色方向能容纳轻微批次差异，便于今后修补，而不要求完全看不出的匹配。"
          },
          {
            "id": "BND_JEWELRY_COLOR_V7_010",
            "text": "[X]会把已有 Black、Brown、Beige、Gray 与 Bronze 胸针轮换放到纺织样本墙上，并在浅色、深色、暖色和冷色布料上分别拍摄，选择跨背景最稳定的中性色或做旧金属色，而不是只看一种底色。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:material",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "material",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_MATERIAL_PB_01",
            "text": "[X]耳垂再次发痒后，医生查看[X]带来的首饰和旧病历，发现不同款式只要采用同类材料就出现相似反应；常戴旧件的材料则把接触处磨得光滑却从未刺激。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_02",
            "text": "[X]冬日戴上项链时，某种材料的冰凉让[X]迟迟无法适应，伴侣递来常戴旧件；它已被体温和皮肤磨得温润，多个寒季都留在床边。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_03",
            "text": "[X]清洁一件氧化首饰时，店员问[X]是否厌烦维护；[X]指着几件同材料常戴物的护理痕迹，仍选择恢复，因为自己喜欢它们随时间变化后的表面。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_04",
            "text": "[X]手链在连接处断裂，修复师说材料本体已脆化；[X]把预算留给另一件表面有划痕却多年完整的旧首饰，不再修同类脆化材质。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_05",
            "text": "[X]海边回来后首饰表面因盐水发生变化，朋友拿来[X]往年常戴的另一材料旧件；它虽留有水线，经过多次清洁仍保持可佩戴状态。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_06",
            "text": "[X]孩子总愿意摸[X]一件首饰的表面，却躲开另一件；前者已被小手和长期贴肤共同磨得柔和，家人甚至固定留它作为亲子出门时的选择。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_07",
            "text": "[X]安静表演中，新首饰随动作发出碰撞声，音响师立即换来[X]常用旧件；连接处虽修过几次，材料本身一直不会干扰收音。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_08",
            "text": "[X]接过长辈首饰时，修复师说明这种材料需要持续养护；[X]看着自己一件同材料旧饰多年形成的光泽，决定接着维护而不是换成仿制替代。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_09",
            "text": "[X]戴新耳饰数小时后耳垂被重量拉痛，朋友递来[X]常戴的另一材料；旧耳饰虽尺寸相近，长期佩戴只在耳针处留下轻微磨痕。"
          },
          {
            "id": "JEWELRY_MATERIAL_PB_10",
            "text": "[X]护肤品碰到首饰后表面发生变化，店员说明与材料有关；家人指出[X]以前同材首饰也因日常护理环境逐渐退出，而另一类仍在洗手台旁高频出现。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_MATERIAL_V7_001",
            "text": "为多枚可替换家庭吊坠选择一条链时，[X]会依据印记或商品文件，比较 Stainless Steel、Sterling Silver、Gold 与 Brass，并结合连接处磨损、维修渠道、护理流程和链条价格是否与吊坠相称来形成偏好。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_002",
            "text": "参加小型金属錾花圆牌手作时，[X]会比较 Copper、Pewter 坯片与仅标作 Alloy 或 Metal 的产品，并在选择加工佩戴前要求明确成分、工具适配、边缘处理、重量和包浆预期。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_003",
            "text": "每周有几个晚上，[X]会在笔记本电脑上处理家里的消息、账单和日程，绕腕手链会不断贴着桌面和触控板边缘。对于皮革、人造皮革和织物腕带，[X]会比较边缘是否柔和、遇到汗水或少量泼洒后的表现、反复弯折、维修或清洗方式，以及材质来源与护理说明是否清楚。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_004",
            "text": "为雨天街头游行选择轻质模块化耳饰时，[X]会根据明确成分、淋雨表现、边缘处理、通体色或表面装饰、重量，以及损坏模块能否单独重做，比较 Acrylic、Plastic、Silicone、Resin 与 Polymer Clay。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_005",
            "text": "参加种子与贝壳声响首饰活动时，[X]会根据可核实来源、雕刻边缘、轻敲声音、重量、断裂风险，以及天然或烧制表面能否在共同设计中修复或替换，比较 Ceramic、Wood、Tagua 与 Shell 吊坠。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_006",
            "text": "无屏幕的家庭故事圈里，一小串珠饰会作为发言标记传递，下一段故事开始前要能凭触感认出；只有有文件说明的 Pearl、Jade、Natural Stone 或 Crystal 能提供预期的温度、重量和表面提示，同时适合反复交接、重新串线及其特定护理方式，[X]才会偏好相应材质。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_007",
            "text": "灯影朗读中，[X]接过讲述时，一枚小胸针需要产生一次可见闪光，随后在影子场景继续时退居背景；[X]会根据镜头可见的闪耀、镶嵌牢度、重量、崩边风险以及演出间隙能否补配掉落部件，在有明确材质说明的 Rhinestone、Cubic Zirconia 和 Glass 之间形成偏好。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_008",
            "text": "三条有文件标明为 Lava Stone、Agate 与 Obsidian 的已有手链陪伴[X]参加地质步行；每次活动后，[X]都会记录孔隙积尘、抛光面划痕、崩口、重量和清洁负担，再决定重复哪种石材结构。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_009",
            "text": "夏季故事活动中，[X]会轮换一枚已有 Amber 吊坠和一枚已有 Shell 吊坠，并比较材质文件、透光、边缘磨损、触感温度、收纳要求，以及各自天然差异是否仍承载其对应故事。"
          },
          {
            "id": "BND_JEWELRY_MATERIAL_V7_010",
            "text": "在调整四枚分别有文件标明为 Stainless Steel、Sterling Silver、Gold 与 Brass 的传承戒指尺寸前，[X]会收集以往维修记录、印记、重量、表面变化和专业调整可行性，并只在实际改造路径明确后决定继续佩戴哪种材质。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:style",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_STYLE_PB_01",
            "text": "[X]鉴定师说一件首饰价值很高，却建议[X]少改动。[X]仍要求移除让自己不会佩戴的风格细节，因为家中几件价值普通但气质合适的旧饰已被戴得更亮。"
          },
          {
            "id": "JEWELRY_STYLE_PB_02",
            "text": "[X]定制师让[X]在抛亮、做旧和保留工具痕之间选择表面气质。[X]拿出几件不同年份却都被持续佩戴的旧饰作参照，成品完成后当场与它们叠戴。"
          },
          {
            "id": "JEWELRY_STYLE_PB_03",
            "text": "[X]参观首饰展时，语音导览把[X]常戴的一类气质放进陌生历史背景。朋友以为[X]会因此觉得老派或夸张，[X]却摸着旧件的贴肤光泽，说长期戴出的状态比标签更像自己。"
          },
          {
            "id": "JEWELRY_STYLE_PB_04",
            "text": "[X]双人舞排练时，新首饰气质让动作显得像角色道具，舞伴也不敢按平常距离靠近。换回常戴旧件后，身体关系恢复自然；那件饰品边缘已有多次排练接触痕迹。"
          },
          {
            "id": "JEWELRY_STYLE_PB_05",
            "text": "[X]为常戴首饰补拍保险照片时，家人发现盒中有几件风格上很像“重要物”，实际却几乎没有佩戴痕迹。[X]最终优先登记的是那些气质真正融入日常、内侧已磨亮的旧件。"
          },
          {
            "id": "JEWELRY_STYLE_PB_06",
            "text": "[X]银匠让学徒猜[X]会接受哪件半成品，学徒根据工作台上几件回店保养的旧饰选择了一种气质。[X]试戴后只调整尺寸，没有改变视觉语言，师傅也认可判断。"
          },
          {
            "id": "JEWELRY_STYLE_PB_07",
            "text": "[X]在剧院中场休息时，戴着新首饰和朋友讨论刚看的演出，却不自觉把手势收进袖口，觉得每个动作都像还在模仿舞台角色。换回随身盒里的常戴旧件后，[X]重新自然地指着节目单说笑；旧件边缘的日常磨损与剧院服装没有任何关系。"
          },
          {
            "id": "JEWELRY_STYLE_PB_08",
            "text": "[X]一件家族首饰需要重做，亲属意见各异。[X]提出的风格方向最初不被理解，直到拿出几件自己真正戴旧的首饰并排比较，大家才看到为何只有那种处理能进入[X]的生活。"
          },
          {
            "id": "JEWELRY_STYLE_PB_09",
            "text": "[X]手作市集允许用旧饰换新，[X]没有被摊主最热门的作品吸引，而是用一件少戴尝试款换回能与常戴组合共享气质的首饰。数周后新件接触皮肤的位置已经变亮。"
          },
          {
            "id": "JEWELRY_STYLE_PB_10",
            "text": "[X]修复师先用可逆方式给旧首饰加了一种新气质，让[X]带回生活中试几天。[X]每天都下意识取下附加部分，却持续佩戴原件，返店时只保留原有视觉方向。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_STYLE_V7_001",
            "text": "忙碌的家庭早晨，[X]会在帮大家按时出门的同时，从玄关的小托盘里迅速选一件首饰。若熟悉、完整的设计能稳定配合每天变化的衣服，[X]会偏好经典风；若更看重减少勾挂细节，并希望出门前几乎不用再做视觉判断，则会偏好极简风。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_002",
            "text": "在修复后的 1930 年代影院中，[X]会比较不局限于特定时期的 Elegant 首饰，与采用场馆阶梯几何和对称秩序的 Art Deco 首饰，并在一般精致感与具体设计时代对话之间选择。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_003",
            "text": "为有文献依据的服装史朗读选择吊坠盒时，[X]会区分作为早期年代引用或复刻的 Vintage、有真实年代与来源支持的 Antique，以及有明确十九世纪设计证据的 Victorian。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_004",
            "text": "朋友们经常在[X]的客厅相聚；房间里既有继承来的简洁线条家具，也有用当下回收材料修补过的日用品。若首饰延续室内已有的成熟几何语汇，[X]会偏好现代风；若其形式更直接回应正在改变这个家的当代再利用方式，则会偏好当代风。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_005",
            "text": "在由三个独立策展房间组成的民间音乐路线中，[X]会比较以个人混搭叠层为核心的 Bohemian、有明确社群实践依据的 Traditional，以及采用特定边疆或牧场视觉语汇的 Western，并只在相应文化简报支持时选择该标签。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_006",
            "text": "社区双篇影子朗读中，[X]先朗读自印抗议文本，随后参与一则十九世纪悼念故事；第一部分强调可见自我改造与反精致时，[X]会偏好 Punk 首饰，第二部分强调深色历史象征时则偏好 Gothic，并由被分配的文本而不是共同的黑色决定风格。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_007",
            "text": "家庭重聚时，大家先玩无声桌面游戏，随后临时决定到街区散步并顺路拜访；当夸张造型需要无需语言就标出当前玩家时，[X]会偏好 Novelty 首饰，而后续无脚本时段需要低关注舒适时则偏好 Casual，不强迫一种风格承担两种角色。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_008",
            "text": "一条已有珍珠链和一枚精细镶嵌胸针参加了数十年的家庭仪式后，[X]会借助档案区分项链稳定的 Classic 语汇与胸针更高阶的 Elegant 效果，并为不同正式程度保留各自风格。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_009",
            "text": "[X]会重新佩戴一枚来自成熟晚期现代设计系列的几何戒指，以及一枚回应当下再生材料讨论的新制作者胸针，并分别因前者的历史框架保留 Modern、后者的当下语境保留 Contemporary。"
          },
          {
            "id": "BND_JEWELRY_STYLE_V7_010",
            "text": "三条已有手链分别来自混搭街市、有文献记录的社群庆典和区域骑行集市；[X]会回顾制作者说明与真实佩戴，再决定保留 Bohemian、Traditional 或 Western，而不是仅凭表面外观给三者贴标签。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:occasion",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "occasion",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_OCCASION_PB_01",
            "text": "[X]某类日子准备开始时，长辈像往常一样替[X]扣上一件首饰，不需要询问佩戴位置。背面几处细小划痕来自历次相同动作，长辈也能说出其中一次留下的原因。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_02",
            "text": "[X]某类活动结束后，[X]摘下首饰，皮肤上又留下与持续时间对应的浅印。同行人看到便知道当天流程比平时长，因为几次同类活动后这件首饰都会留下相似但不同深浅的痕迹。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_03",
            "text": "[X]清洁一件首饰时，缝隙里散出某类环境常见的气味。[X]没有觉得意外，按固定方式处理后仍放回对应小盒；家人说前几次同类日子回来也是这套流程。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_04",
            "text": "[X]某类集体活动合照前，站在旁边的人主动替[X]把首饰转回熟悉朝向，说以前每次拍到这个日子，它都会落在同一可见位置。[X]没有换件，只顺着旧磨痕调整好。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_05",
            "text": "[X]为某类安排从保管处取首饰时，工作人员直接拿出一件有多次借出记录的旧饰，而不是旁边更新的版本。[X]核对佩戴痕迹后仍选择它，并预约了下一次归还后的护理。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_06",
            "text": "[X]出门参加某类活动前，孩子一直等[X]戴好一件首饰才肯走，说“这样才到这一天”。孩子能自己从盒中找对那件，说明这种商品与活动的联系早已进入家庭习惯。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_07",
            "text": "[X]去某类活动途中需要经过不便佩戴首饰的环节，[X]把那件饰品单独收好，结束限制后立刻戴回，而没有用别的替代。同行人已经熟练替[X]保管同一个小盒。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_08",
            "text": "[X]活动前发现首饰连接处松动，维修店无法完全翻新，只能保证安全。[X]仍选择及时加固后佩戴，因为表面旧化本就记录了许多同类日子；店员按以前维修留下的尺寸完成处理。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_09",
            "text": "[X]某类活动结束后，几个人暂时把首饰放进同一盒子。[X]的那件因背面与皮肤接触形成的光泽被迅速认出，伙伴还记得它在前几次活动里的佩戴位置。"
          },
          {
            "id": "JEWELRY_OCCASION_PB_10",
            "text": "[X]某类活动因故暂停数月，家人整理首饰时问是否收进深处。[X]只做了必要清洁，仍把那件放在原来的易取位置；活动恢复通知到来时，它无需重新整理便回到身上。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_OCCASION_V7_001",
            "text": "规划一年中三次独立家庭赠礼时，[X]会区分以收礼人个人为中心的 Birthday 首饰、指向照顾关系的 Mother's Day 首饰，以及承载共同家庭历史的 Father's Day 首饰，并让真实关系与赠送时刻决定场合。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_002",
            "text": "选择伴侣首饰礼物前，[X]会依据关系阶段、共同承诺和赠送时刻需要承载的长期象征程度，区分初期 Dating 纪念、Valentine's Day 心意与 Engagement/Anniversary 首饰。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_003",
            "text": "当一件正式首饰可能用于婚礼、学位典礼或信仰仪式时，[X]会比较佩戴者角色、着装规范、象征义务、拍照以及首饰是赠送还是自戴，并只在仪式明确后选择 Wedding/Bridal、Graduation 或 Religious Occasion。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_004",
            "text": "一件挂饰座每次只装一个可替换日历标记，[X]会根据实际聚会选择 Christmas、New Year、St. Patrick's Day、Easter 或 Patriotic Holiday，并在活动后取下标记，以保留场合特异性，而不是把首饰堆成全节日拼贴。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_005",
            "text": "购买一条表现力较强的项链前，[X]会根据活动幅度、安检、叙事角色和计划复用，区分以舞会为核心的 Party/Prom、拥挤现场音乐 Concert/Festival，以及角色导向的 Halloween/Costume，并让实际活动决定场合。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_006",
            "text": "家庭海滩摄影寻物日中，[X]会在木栈道、干沙、贝壳分类毯和遮阴野餐区之间移动，但所有人下水前都会摘下首饰；因此[X]会偏好 Beach 场合首饰，由盐雾、沙粒、赤足移动和岸上稳固佩戴界定角色，而不是把它归为游泳用品。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_007",
            "text": "清晨静心活动中，[X]先进行坐姿呼吸，再进入舒缓站立瑜伽，并在任何手腕或手掌承重体式前收好首饰；如果一件触感安静的首饰只用于标记开始与结束的转换，不暗示健康功效、也不要求全程佩戴，[X]就会偏好 Meditation/Yoga 场合。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_008",
            "text": "一枚已有珐琅别针在几个学期的社团会议、图书馆日和集会中，从[X]的背包移到挂绳；这段仅限校园的使用记录使 School 成为更换针扣时应保留的场合。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_009",
            "text": "整个本地篮球赛季中，[X]只以观众身份佩戴一枚小型队色挂饰，并检查它在拥挤座位和欢呼动作中保持稳固；这段重复比赛日记录使替换品归为 Sports Event。"
          },
          {
            "id": "BND_JEWELRY_OCCASION_V7_010",
            "text": "一条低调的已有项链在数次朋友 Birthday 晚餐和安静 Dating 晚间都表现合适后，[X]会比较照片、舒适度和两种场合中的社交含义，并只因同一具体首饰在两边都反复成立而保留两个场合角色。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:closure_type",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "closure_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_01",
            "text": "[X]一只手受伤期间，新首饰每天都需要他人协助；康复师从[X]首饰盒找出另一种闭合方式，[X]单手便完成，因为过去照护家人时已常用同类结构。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_02",
            "text": "[X]摘围巾时首饰固定处意外松开，朋友从布料里找回后提醒这已是同类结构第二次险些丢失；[X]随后换回那件从未在同一动作中脱落的旧饰品。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_03",
            "text": "[X]戴着手套无法操作新手链，家人拿来[X]常戴旧件；固定处已被多年触摸磨亮，[X]不用看便能完成。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_04",
            "text": "[X]快速动作后新首饰固定处松开，服装师立即换来[X]旧演出件；它的安全结构虽修过几次，却从未在台上意外脱落。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_05",
            "text": "[X]孩子学习佩戴时总拿[X]一件首饰练习，因为闭合逻辑全家都能讲清；部件边缘被两代人的手磨得光滑。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_06",
            "text": "[X]常戴首饰固定件损坏，维修员给出几种方案，[X]选择与其他高频饰品相同的操作方式；旧单显示[X]以前也做过这种改造。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_07",
            "text": "[X]整理头发时，新耳饰固定处又勾住发丝，发型师熟练帮忙解开，说过去同类结构也造成过问题；[X]换回常用旧件后动作恢复顺畅。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_08",
            "text": "[X]安检要求摘下首饰，新结构让[X]迟迟无法复原；同行人说回程应换回旧件，以往多次过检时[X]几乎不用低头便能完成。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_09",
            "text": "[X]旅途中忘记摘首饰，固定处在睡眠中压痛皮肤；家人拿来[X]过去偶尔会整夜保留的另一结构，内侧已有长期贴肤磨光却不留同类压痕。"
          },
          {
            "id": "JEWELRY_CLOSURE_TYPE_PB_10",
            "text": "[X]叠戴后几件首饰的固定处缠在一起，朋友指出[X]平时那套结构不会互相勾挂；换回旧组合后，各件自然落回熟悉位置。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_001",
            "text": "一周内会在高领与开领服装间切换、并佩戴一条细项链时，[X]会根据颈后指尖操作、延长链兼容、链条尺度和维修便利性比较 Lobster Clasp 与 Spring Ring，同时要求扣件不压过小吊坠。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_002",
            "text": "在故事分享晚间，同一枚胸针要在疏松织围巾与光滑翻领之间移动时，[X]会根据穿刺位置、防勾挂、背部净空和反复重定位后针尖是否仍被包住，比较普通 Pin 与带保护的 Safety Clasp。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_003",
            "text": "清晨呼吸练习后还要做陶艺时，[X]希望手链能在碰泥前摘下、无需寻找细小五金，因此会根据穿过手掌、腕部稳定和恢复形状的表现，比较连续式 No Clasp 与柔性 Slip-On 结构。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_004",
            "text": "为民间舞会制作可更换装饰面的宽腕带时，[X]会根据尺寸调节、触觉确认、与舞伴手部接触时是否低凸，以及舞曲间更换装饰片的速度，比较 Buckle、Snap 与 Push Button。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_005",
            "text": "为长时间试发型和晚间阅读选择耳饰时，[X]会根据无需镜子能否确认锁定、耳后接触、与头发的干涉及休息前能否有意取下，比较 Butterfly Back 耳钉、Clicker 圈环和 Screw 耳堵。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_006",
            "text": "户外冬季合唱聚会中，[X]热身后会取下厚围巾，并要在开唱前用冰冷手指扣好小型姓名吊坠；[X]会根据哪种机构既能快速对准，又能在整场活动中承受吊坠重量和普通围巾接触，在 Magnetic 与通用 Clasp 之间形成偏好。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_007",
            "text": "跨代故事地图活动中，参与者会随着每段路线讲述增减地点挂饰，之后戴着排列好的序列对照地图；[X]会根据手链能否方便重开、路线顺序能否保持朝外，以及外露端部会不会勾住针织袖口，在 Hook、Toggle 和 S-Hook 之间形成偏好。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_008",
            "text": "一条宽链节手链佩戴一年后，[X]会检查其 Fold Over 扣的铰链与卡口，并重现端托盘和开门时的手腕动作，判断低凸轮廓与明确锁定是否仍值得延续。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_009",
            "text": "多年来，[X]每次参加某个年度市集都会佩戴一枚以 Ball Chain Connector 连接的轻质纪念吊坠；如今在定制忠实替代品前，会检查珠粒对齐、连接片张开、吊坠孔磨损和无需工具重新开启的表现。"
          },
          {
            "id": "BND_JEWELRY_CLOSURE_TYPE_V7_010",
            "text": "记录两条重量相近、分别采用 Lobster Clasp 与 Spring Ring 的已有项链六个月日常使用后，[X]会比较扣合失误、指甲接触、延长链使用和维修调整，并据此为今后的细链设定扣件规则。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:pattern",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "pattern",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_PATTERN_PB_01",
            "text": "[X]维修师在放大镜下展示首饰纹样的细节，[X]发现真正让自己愿意反复触摸的不是远看主题，而是近处某种重复秩序。几件常戴旧饰的凸起都在相似位置被摸亮。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_02",
            "text": "[X]孩子用软纸拓印[X]的一件首饰，展开后图案比佩戴时更清楚。孩子随后从几件旧饰中挑出具有相似视觉节奏的作品继续拓印，选择与[X]实际戴旧的分布高度重合。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_03",
            "text": "[X]阳光穿过镂空首饰，在桌面投出重复影子。[X]移动手腕观察图案如何变化，最终保留那件动态影子仍符合熟悉秩序的饰品；朋友说其他常戴旧件也常产生相似节奏。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_04",
            "text": "[X]定制首饰脱模后，局部纹样因气泡少了一段。工匠准备重做，[X]却根据自己几件旧饰被磨损后的样子，判断这种缺口是否仍在可接受秩序内，而不是一概追求无瑕。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_05",
            "text": "[X]试穿针织物时，首饰纹样的凸起不断勾线。[X]换上另一种常戴图案后顺利完成动作，衣柜里几件常用针织物也只在前一种结构对应位置留过勾痕。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_06",
            "text": "[X]叠戴几件首饰时，新件纹样总把相邻图案切断。[X]按照旧组合内侧的接触痕调整顺序，让视觉节奏重新连续；朋友已经熟悉这套叠放关系。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_07",
            "text": "[X]常戴首饰的刻纹逐渐变浅，店员建议加深成更醒目的图案。[X]只恢复到自己几件旧饰相近的可见程度，因为过深版本曾在日常里很快被停戴。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_08",
            "text": "[X]用手机拍首饰细节时，自动对焦总被某种纹样带向错误位置。[X]并未只为拍摄换件，而是查看常戴旧饰为何既有丰富图案又能让视觉重点稳定，据此调整新件的重复尺度。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_09",
            "text": "[X]清洁首饰时，刷毛会沿某种纹样自然走完一圈，另一结构却总藏污。[X]的动作熟练到不用翻面，家人也知道几件同类旧饰应按这条路径护理。"
          },
          {
            "id": "JEWELRY_PATTERN_PB_10",
            "text": "[X]走路时首饰不断转动，图案有时倒置、有时只露一角。[X]没有要求完全固定，而是选择在不同朝向仍保持熟悉视觉秩序的纹样；常戴旧件的连接处也因这种自由转动磨得圆滑。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_PATTERN_V7_001",
            "text": "用一条长链在素墙前展示摆动时，[X]会比较 Solid 链节与 Striped 珐琅序列，并选择最容易追踪方向与摆动、又不会在链条上制造错误断点的图案。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_002",
            "text": "把压制植物描图与地砖测量转化为宽腕饰时，[X]会比较重复 Floral 图案与 Geometric 网格，并依据腕部接缝处应保留有机重复还是测量式模块秩序来选择。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_003",
            "text": "在公民纪念日举行地方史朗读时，[X]只在星与条共同构成实际重复设计、且活动确实支持这一引用时考虑 Stars and Stripes 胸针，并拒绝把零散星星装饰当作该图案。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_004",
            "text": "家庭物件故事夜中，一段讲述围绕舞蹈照片里的豹纹围巾，另一段则围绕旅行相册中反复出现的斑驳梳子；[X]会根据正在重述的记忆偏好 Leopard Print 或 Tortoise Shell 首饰图案，但只接受明确说明为仿制表面的产品，并要求斑点或斑驳尺度在交谈距离仍可辨认。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_005",
            "text": "参加手部打击乐活动时，[X]会通过录像比较 Polka Dot 与 Chevron 腕饰，在均匀点状节拍和强化手腕转向的方向性锯齿之间选择，同时避免移动图案显得不稳定。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_006",
            "text": "面料样片交换中，[X]会反复把花卉、格纹和条纹样片放到手腕旁，比较底色与重复尺度；[X]会偏好 Solid 首饰图案，因为连续表面能在不断变化的织物之间提供稳定停顿，也便于在下次交接前发现沾染的染料或绒屑。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_007",
            "text": "双语诗歌接力中，[X]会在围绕植物生长意象的诗段与依靠计数城市节拍的诗段之间轮换；[X]会根据被分配的诗段序列，偏好 Floral 或 Geometric 首饰图案作为无声分段提示，前提是重复表面在一臂距离仍可读，也不会缩成单个孤立题材。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_008",
            "text": "一枚已有缎带胸针的一段散开后，[X]会依据早期近照重建被打断的 Stars and Stripes 序列，再从一臂距离观察修复件，以判断维持完整组合重复是否可行，还是过度依赖精确复原。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_009",
            "text": "一枚 Leopard Print 腕饰和一枚 Tortoise Shell 腕饰陪伴[X]参观过许多博物馆后，[X]会比较抓拍与微距表面，判断离散斑点还是半透明斑驳才是自己真正能识别并反复选择的图案。"
          },
          {
            "id": "BND_JEWELRY_PATTERN_V7_010",
            "text": "三条已有珠链分别用 Striped、Polka Dot 与 Chevron 序列作为音乐练习时的触觉计数辅助；在重新串制磨损套装前，[X]会记录哪种重复无需观看也能跟随、同时在录像中仍清晰。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:motif",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "motif",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_MOTIF_PB_01",
            "text": "[X]孩子为[X]挑礼物时，没有选最鲜艳的吊坠，而是指向一个自己常在[X]首饰上见到的主题；几周后新件已和同主题旧件一起进入轮换。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_02",
            "text": "[X]家人让[X]从多件旧首饰中选一件承接，[X]没有按价值，而是选了与自己常戴主题有联系的那件；修复后很快出现新的贴肤光泽。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_03",
            "text": "[X]请定制师修改一件首饰的草图，对方把图案画得更华丽，[X]却反复删到只剩最重要的主题；师傅翻出旧饰订单，几张不同年份的草图也都在这一象征周围留下密集修改痕迹。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_04",
            "text": "[X]陌生人在候车时认出[X]首饰上的主题并聊了几句，同行人说这类谈话已发生过多次；[X]仍每天佩戴，说明被注意并没有让这个象征退出生活。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_05",
            "text": "[X]常戴吊饰断裂后，维修员提议换成现成图形，[X]只愿等待原主题补件；连接环已修过几次，显示[X]宁愿维护也不让它被其他意象替代。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_06",
            "text": "[X]主题活动要求佩戴特定象征，[X]把它与自己常戴的小主题并置，而没有完全替换；散场后只取下活动件，原来的首饰继续留在身上。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_07",
            "text": "[X]整理家族首饰时，长辈没有看名字便把某几类主题放到[X]一边，说这些意象总会被[X]真正戴旧；内侧磨光程度证实了判断。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_08",
            "text": "[X]旅行中看到一件采用当地版本熟悉主题的首饰，没有因纪念品新鲜就立刻购买，而是挑了能与常戴旧饰共同讲述同一意义的设计；回程后，新件被放进日常首饰盒而不是留在行李里。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_09",
            "text": "[X]店员不断推荐带明确形象的首饰，[X]最终仍选了没有具体主题的版本；朋友说过去收到的具象礼物很少被戴，而那些不讲故事的旧件已磨得发亮。"
          },
          {
            "id": "JEWELRY_MOTIF_PB_10",
            "text": "[X]朋友为[X]准备庆祝蛋糕时，没有画肖像，而是采用常在[X]几件首饰上出现的主题。端上桌后家人立即明白这个象征为何代表[X]，当天佩戴的旧饰内侧也已有长期光泽。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_MOTIF_V7_001",
            "text": "参加家庭口述史聚会时，[X]考虑佩戴一枚吊坠：可以用家族反复提到的一句话中的一个 Letter，也可以用当晚核心故事人物的小型 Portrait，并根据亲属无需解释就能认出什么，在文字与图像之间选择。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_002",
            "text": "为纪念一段以情感支持和深夜观星散步为共同经历的十年友谊，[X]会比较 Heart 与 Star 挂饰，并偏好更具体指向两人真实经历、而不是泛化礼物类别的符号。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_003",
            "text": "参加旧墓园花园的纪念步行时，[X]会比较表达真实信仰传统的 Religious 徽章，与不宣称信仰、只承认死亡主题的 Skull 图案，并只选择自己确实想承载的含义。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_004",
            "text": "参加动画与民间故事交换活动时，[X]会考虑以某个具体绘制角色或家中讲述的传说生物为原型的挂饰；重视视觉作者性时偏好 Cartoon，重视传承叙事时偏好 Mythical Animal。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_005",
            "text": "整理授粉花园观察记录时，[X]会根据自己实际最持续记录的是哪类访客，在 Insect 与 Bird 胸针之间选择，并以现场笔记而不是泛化自然审美为依据。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_006",
            "text": "邻里野生动物通道地图夜中，每位路线报告者会佩戴一个小符号，表示该通道已确认的动物类别；[X]会依据自己负责路线上的带日期足迹、相机影像或直接观察记录，在 Mammal 和 Reptile 图案之间形成偏好，而不是因为笼统喜欢某类动物。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_007",
            "text": "[X]会在家照料一个小型海水缸，每晚喂食，并在每周做一次较完整的清洁。若首饰上的海洋动物正是[X]长期观察、实际照料的物种，而不是随意拿一个无关海洋生物当作泛泛的海洋符号，[X]就会偏好这种图案。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_008",
            "text": "两条已有挂饰手链长期作为[X]的季节花园日历：Floral 表示播种与开花，Fruit 表示采收与保存；这种有用的阶段区分成为替换挂饰时保留两种图案的理由。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_009",
            "text": "一条已有手链用 Letter 挂饰拼出一个简短导航词，并以一枚 Star 挂饰标记起点；经过多次集体步行游戏后，[X]会保留两种图案，因为它们共同支持阅读顺序，而不仅是装饰链条。"
          },
          {
            "id": "BND_JEWELRY_MOTIF_V7_010",
            "text": "在更换一枚已有吊坠盒中褪色的内页前，[X]会比较恢复原来的 Portrait，还是改用 Heart 形空白片，并依据如今的佩戴方式判断保留某个人的图像，还是采用更私密的关系符号更合适。"
          }
        ]
      }
    },
    {
      "id": "product_bound:jewelry:price",
      "binding": "product_bound",
      "category": "jewelry",
      "attribute": "price",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_PRICE_PB_01",
            "text": "[X]更新首饰保险清单时，鉴定师把购入价、当前估值和佩戴痕迹分别记录。真正需要补拍细节、继续列入日常保障的几件虽然年份不同，购入价却落在同一价格带；偏离这个区间的几件仍近乎全新，[X]只按偶尔存放登记。"
          },
          {
            "id": "JEWELRY_PRICE_PB_02",
            "text": "[X]和伴侣为纪念日互选首饰，伴侣先拿出一件价格明显偏离[X]平常购买范围的款式。[X]很喜欢其中的象征，却仍换到熟悉价位的一件；伴侣翻看过去送成的几件首饰收据后，发现它们的佩戴磨痕也都比那次昂贵或便宜的失误明显。"
          },
          {
            "id": "JEWELRY_PRICE_PB_03",
            "text": "[X]请工匠把一个熟悉主题做成新的首饰，桌上从简化制作到复杂工艺有多档完整报价。[X]没有按图样最华丽的一档决定，而是带来几件已经磨亮边缘的旧定制品，按它们成交价集中的区间选定方案。"
          },
          {
            "id": "JEWELRY_PRICE_PB_04",
            "text": "[X]常戴的腕饰断裂且无法复原，珠宝店允许用残件抵扣任意价位的新商品。[X]没有因为抵扣额改变购买层级，而是翻看首饰盒中几件连接处同样被磨圆的旧饰订单，在相近价格带选了替代品，并把未用抵扣留到以后。"
          },
          {
            "id": "JEWELRY_PRICE_PB_05",
            "text": "[X]的耳部恢复后回到穿孔工作室更换日常饰品，店员把材质合格、价格跨度很大的款式分别摆开。[X]先排除身体不适的选项，再从剩余商品中回到自己旧订单常见的价格带；店员认出几件旧饰也曾在这里做过清洁维护。"
          },
          {
            "id": "JEWELRY_PRICE_PB_06",
            "text": "[X]把几件不再佩戴的首饰带去寄卖，柜台按原始成交价分盘检查。价格高低两端都有几件几乎没有皮肤接触痕迹，某一价格带的几件却需要先清理长期佩戴形成的暗痕；[X]最后从这一盘拿回一件，决定只处理闲置品。"
          },
          {
            "id": "JEWELRY_PRICE_PB_07",
            "text": "[X]在一场小型拍卖会上看中一件与常戴主题相合的首饰，竞价很快跨过几个价格层级。[X]没有被现场节奏推着走，而是按首饰盒里几件已反复维修的旧饰成交价设定区间；价格离开这个范围后，[X]放下号牌，转而预约同价位的下一件预展品。"
          },
          {
            "id": "JEWELRY_PRICE_PB_08",
            "text": "[X]在返程机场有一笔即将失效的退税额度，柜台首饰从低价小件到高价作品都有。[X]没有为了用尽额度改变购买层级，而是查看自己旅行后仍常戴的几件首饰订单，在同一价格带选了一件，剩余额度任其到期。"
          },
          {
            "id": "JEWELRY_PRICE_PB_09",
            "text": "[X]参加的首饰借用服务停止营业，允许会员按折后价格买断曾借过的商品。[X]把借用次数、佩戴照片和买断价放在一起，只留下某一价格带里真正反复续借的几件；价格更高或更低但只试戴过一次的全部归还。"
          },
          {
            "id": "JEWELRY_PRICE_PB_10",
            "text": "[X]常购首饰的小店迁移会员系统后，原有价位筛选丢失，店员按新品从各个价格层级重新陈列。[X]试戴后只把某一区间的几件放进保留盘；旧系统恢复出的清洁、换扣和购买记录显示，被[X]带回来维护的首饰也集中在同一价位。"
          }
        ],
        "B": [
          {
            "id": "BND_JEWELRY_PRICE_V7_001",
            "text": "为一枚传承宝石定制吊坠时，[X]会比较重新镶嵌与购买新石，并要求把检查、设计、镶嵌工费、链条、刻字和退回未用材料分别报价；只有真正保留家族物件的工序才值得定制溢价。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_002",
            "text": "制作者为金属腕饰提供两种方案：七天固定报价，或较低定金加以后结算的材料费；[X]会比较价格确定性、取消条款、预计购买时间和锁价前修改设计的能力。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_003",
            "text": "开始模块化挂饰手链前，[X]会比较耐用兼容链条的较高基础价与低成本封闭系统，并估算未来挂饰数量与价格、维修渠道，以及兼容性是否能避免以后替换整套收藏。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_004",
            "text": "四位朋友想要相配但由各自制作的戒指时，[X]会比较包含工具、基础材料、表面处理和指导的团体手作课费用，与直接购买四枚成品的价格，并承认共同制作体验有价值、但课程时间并非免费。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_005",
            "text": "考虑在小型拍卖中购买一枚古董胸针时，[X]会在设定最高出价前合计落槌价、买方费用、税费、独立鉴定、立即修扣和保价运输，并把来源不确定视为降低而不是提高上限的理由。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_006",
            "text": "一副已有耳饰丢失一只后，[X]会比较定制同款单只、购买新一对，以及把剩余单只改成吊坠，并计入设计匹配、石料寻找、剩余材料和原耳饰的真实佩戴频率。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_007",
            "text": "一条常戴已有项链的三张维修单显示同一链段反复失效，因此[X]会比较再次低价局部修补与较高价整链更换，并把升级上限限制在它可信能够避免的维修费用内。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_008",
            "text": "一枚传承胸针获得独立价值区间后，[X]会用该证据设定修复与安全收纳的最高支出，既拒绝抹掉来源痕迹的表面翻新，也拒绝超出继续家庭使用所能证明的服务账单。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_009",
            "text": "一条已有模块化手链使用一年后，[X]发现四枚挂饰反复佩戴、七枚从未使用，因此下一次预算会优先单独替换磨损的四枚，并拒绝再买一整套主题组合，即使其标称单枚价格更低。"
          },
          {
            "id": "BND_JEWELRY_PRICE_V7_010",
            "text": "[X]在共享手作课中制作的一枚戒指需要更换镶座时，会把原课程费和不可追回的过去劳动从当前维修决策中分离；但戒指的实际佩戴记录和独特手工仍可使其维修上限高于可直接替代的商店成品。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:frame_color",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "frame_color",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_FRAME_COLOR_PB_01",
            "text": "[X]走进配镜店时，店员没查档案便拿出一副框色接近[X]常戴范围的试架；柜台里几副旧镜架的鼻托和镜腿虽磨损程度不同，面部边缘的色调却十分连贯。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_02",
            "text": "[X]朋友送镜架时附上退换单，说以前同色礼物几乎没见[X]戴；[X]试到镜前也承认形状合适，框色却可能再次让它留在盒里。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_03",
            "text": "[X]旧镜框边缘掉色，修复师建议整体换色，[X]只要求恢复原调；镜腿内侧被多年皮肤接触磨亮，说明这个颜色从未妨碍高频佩戴。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_04",
            "text": "[X]更换框色后第一次视频会议，同事一时没认出[X]，随后笑说过去录屏里眼周总有另一类熟悉色调；[X]会后换回旧架，画面也恢复自然。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_05",
            "text": "[X]单位提供两种护目框色，管理员没问便递给[X]其中一副，因为旧框同色镜腿已经补领过几次；另一色试用品仍没有使用痕迹。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_06",
            "text": "[X]家庭合照前摄影师想调整眼周配色，家人几乎同时说别换[X]镜框那一色；旧照片里形状虽变，相近色域一直围在[X]眼周。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_07",
            "text": "[X]失物台摆着几副相似眼镜，同行人没看镜腿内侧标记便凭框色认出[X]那副；工作人员再从镜腿长期弯曲确认无误。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_08",
            "text": "[X]化妆师改变妆面后，仍保留[X]常用框色，只调整其他细节；她说多次造型跨度再大，眼周这个色彩边界一变，[X]就不像自己。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_09",
            "text": "[X]定制师把历次镜框切片余料交给[X]，不同年份、不同材料的小片竟集中在相近色域；新订单仍选了能自然接入这些常戴旧架的方向。"
          },
          {
            "id": "GLASSES_FRAME_COLOR_PB_10",
            "text": "[X]配镜师在镜片上做测量标记时，发现新框色让色点很难辨认。[X]拿出几副常戴旧架，师傅注意到它们虽材料不同，框色都能让调校标记清楚落在眼周，旧订单也采用相近对比。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_001",
            "text": "在浅色厨房墙前录制家庭食谱档案时，[X]会比较中性镜框色，观察眼睛在视频中是否仍有清晰边界、眼镜是否消失得过于彻底，或镜框是否成为脸上最强的线条。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_002",
            "text": "夜间步行穿过霓虹雕塑街区时，[X]会在蓝、绿、洋红和中性店面光下检查候选镜框，并决定镜框应随环境变化，还是在脸部附近保持一个可辨认的冷色身份。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_003",
            "text": "在烛光共餐区和明亮门厅之间，[X]会在两种区域比较金属色与近肤色镜框，并决定光线变化时镜框应暖调反射、冷调闪现，还是柔和融入脸部。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_004",
            "text": "参加按颜色分队的公益答题活动时，[X]既要在拥挤桌边照片中保持脸部可辨，又要让镜框承担队伍线索，因此会在日光和暖色大厅灯下，把明亮候选色与脸旁已有的彩色记分卡比较。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_005",
            "text": "参加木炭素描活动时，[X]有时会在揉开深色粉末后调整眼镜，并比较其他条件相同的黑、白、灰和透明镜框样品，看转移的污痕能否在镜框重新靠近面部前被发现，从而选择能提供有效清洁提示的颜色。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_006",
            "text": "参加社区纸面具制作时，[X]会反复把未上色的白色与米色半面具贴近脸部，由另一名参与者标出鼻梁和镜腿周围的留量；[X]会根据镜框边缘在安全裁切时是否需要清楚可见、成品戴好后是否应退居背景，在透明、米色和白色之间形成偏好。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_007",
            "text": "在共用卧室里，[X]常在打开主灯前从床边搁板上取眼镜。把已有的红色、粉色和橙色镜框轮换用于这个日常动作后，[X]会根据哪一种在深色搁板、浅色床品和琥珀色夜灯下都能安静地找到、又不易与旁边小物混淆，形成颜色偏好。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_008",
            "text": "业余手铃排练中，顶灯照射下的[X]要在指挥、反光手铃和深色乐谱夹之间转移视线，邻近演奏者站位也很近；[X]会根据近脸处的小反光是否可控、会不会在伙伴余光中变成错误节拍提示，在银、金和灰色镜框之间形成偏好。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_009",
            "text": "经过多次植物园参观，[X]佩戴同一副绿色镜框，并比较叶片背景与中性室内墙前的近景照片，判断环境融入是和谐，还是让眼部边界比 Blue 或 Purple 镜框更容易消失。"
          },
          {
            "id": "BND_GLASSES_FRAME_COLOR_V7_010",
            "text": "一个月内，[X]用衣橱中已有的浅色、深色和高饱和衣物搭配同一副棕色镜框，并复盘哪些组合无需费力就会选择，以判断 Brown、更浅的 Tan 或更强的 Black 哪个最支持反复的脸部附近协调。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:lens_color",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "lens_color",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_LENS_COLOR_PB_01",
            "text": "[X]戴新有色镜片过马路时，对信号灯的感受变得陌生，同行人提醒[X]过去常用镜片从不会让自己迟疑；换回旧副后判断恢复熟练。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_02",
            "text": "[X]拍人像时摄影师发现新镜片颜色让眼神难以被看见，便拿来[X]过去合作常戴的一副；旧镜片虽有细痕，几次照片里都保留了熟悉的眼睛可见度。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_03",
            "text": "[X]看展时新镜片改变了作品色调，[X]反复摘戴确认，同行人说以往看展[X]总信赖另一类色偏；换回旧眼镜后不再需要校准。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_04",
            "text": "[X]黄昏驾驶进入阴影路段，新镜片让明暗转换变得吃力；家人从储物格拿出[X]常用旧副，镜片边缘已有多次取放痕迹。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_05",
            "text": "[X]雪地里新镜片让地形起伏难辨，教练换来[X]往季使用的颜色；旧片表面有细小冰粒划痕，视野对比却立刻回到熟悉状态。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_06",
            "text": "[X]换片时店员建议尝试流行染色，[X]只要求复制旧镜片的综合色偏；配镜档案显示不同处方阶段都反复保留相近色调。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_07",
            "text": "[X]孩子看到[X]换了镜片颜色后迟疑了一下，随后问熟悉的眼睛为什么变了；翻看家庭照片，孩子一直在相近镜片色下与[X]对视。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_08",
            "text": "[X]从强光进入室内后，新镜片颜色让[X]迟迟不愿摘下或继续戴，朋友拿来常用旧副；过去多次进出同一场所，[X]都能用后一色调自然过渡。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_09",
            "text": "[X]准备转让有色眼镜时，买家问视觉效果，[X]描述不同天气和环境下真实色偏，而不是照商品名回答；这些细节来自多次佩戴，也解释了为何自己保留另一种颜色。"
          },
          {
            "id": "GLASSES_LENS_COLOR_PB_10",
            "text": "[X]舞台灯换色后，新镜片让提示标记难以辨认，技术人员换来[X]过去演出常用色调；镜腿已修过几次，镜片颜色却始终不改。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_001",
            "text": "把压制叶片与原始标本并排记录时，[X]会比较中性镜片色，观察叶脉对比是否便于查看、绿色、锈色和米白能否被如实记录，并通过实际比色页而非色名区分 Clear、Gray 与 Brown。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_002",
            "text": "参加黄昏灯笼游行时，[X]会在日落前和点灯后分别试戴暖色镜片，并依据镜片与视觉主题的呼应强度，以及路缘、人脸和未照明间隙是否仍容易分辨，在 Amber、Yellow 与 Orange 之间取舍。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_003",
            "text": "在由红、绿、蓝三种灯光房间组成的步入式装置中，[X]会比较同色与对比色镜片，并根据镜片是有意突出作品的一层，还是抹掉理解完整序列所需的过渡，来偏好 Red、Green 或 Blue。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_004",
            "text": "参观阳光下的雪雕展时，[X]会在同一镜框中比较 Black 与 Silver 镜片：前者依据所需的视野明暗深度，后者依据反光外观，并在露天阳光与遮阴帐篷之间移动后反复检查雪雕轮廓。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_005",
            "text": "参加午后玫瑰园互拍活动时，[X]会把 Pink 镜片作为有意加入的色彩层，并通过抓拍视频检查它是否营造出想要的轻松氛围，同时仍能分辨眼神、肤色和多种天然玫瑰色。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_006",
            "text": "邻里色码解谜游戏中，[X]要在灯光不同的房间之间移动，并把细小的红、绿、蓝、灰符号联系起来；如果透明镜片能让这些既定差异沿途保持稳定，并与短暂摘镜核对一致，不会因镜片色调凭空增加线索或抹掉真实线索，[X]就会偏好 Clear。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_007",
            "text": "海岸鸟类计数的早晨，[X]要在浅色天空、棕色芦苇、羽毛细节和彩色脚环之间切换观察；在把偏光因素另行控制后，[X]会在需要中性记录色彩时偏好 Gray，或在暖色视野能让芦苇边缘更易区分且不混淆脚环编码时偏好 Brown。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_008",
            "text": "在薄雾清晨的微缩铁路花园中，[X]会把一副已有的 Amber 夹片与借来的 Yellow 夹片比较，并在实际行走中选择更能分清信号色与细小轨道边界的色调，而不预设任一种暖色一定提升可见性。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_009",
            "text": "在相同室内照明下进行三次家庭视频通话时，[X]分别佩戴透光深浅一致的已有红、绿、蓝镜片插片，并询问交谈者哪一种最容易看清眼神方向与表情，从而选择能保留面对面交流的镜片颜色，而不是用于筛选艺术画面。"
          },
          {
            "id": "BND_GLASSES_LENS_COLOR_V7_010",
            "text": "数字化旧轮滑场家庭录像时，[X]会重新试戴保留下来的 Orange、Pink、Silver 与 Black 四种镜片，并与影像比较；哪一种过去的暖色、俏皮、反光或深色角色在如今的室内光线中仍成立，就据此决定是否重现。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:lens_material",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "lens_material",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_LENS_MATERIAL_PB_01",
            "text": "[X]眼镜意外跌落，新镜片边缘出现损伤，配镜师拿出[X]旧副检查；旧片经历过几次类似跌落，只留下可接受痕迹，[X]因此按旧材料更换。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_02",
            "text": "[X]长时间佩戴后鼻梁被新镜片重量压红，店员查看同度数旧镜片，发现另一材料在更厚边缘下仍更符合[X]的承受范围。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_03",
            "text": "[X]阅读高对比文字时，新镜片边缘出现让[X]分心的色散，验光师翻旧订单，发现[X]历次适应良好的镜片都来自相近材料范围。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_04",
            "text": "[X]眼镜留在高温车内后镜片发生变化，家人拿来[X]另一副常用旧镜；旧片经历过多个夏季，清晰度仍在可接受范围。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_05",
            "text": "[X]工坊里细小碎屑击中镜片，新片留下明显损伤，主管换来[X]常用防护副；旧片表面已有多次冲击点，却仍保持完整。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_06",
            "text": "[X]从寒冷室外进入暖室，新镜片状态让视野恢复很慢；同事递来[X]过去冬季常戴的另一材料，边缘已有反复擦拭痕迹却更快可用。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_07",
            "text": "[X]处方变化后需要重配镜片，店员推荐新材料，[X]仍优先保留旧副长期适应的重量和光学感；档案显示度数变过几次，材料选择却很集中。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_08",
            "text": "[X]孩子常抓[X]眼镜，新镜片很快出现难处理划痕；家中旧副被小手碰过更多次，另一材料只留下浅痕，仍在亲子日常使用。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_09",
            "text": "[X]旅行只能带一副备用镜，[X]没有选最新的，而是选经历多次跌落、温差和清洁后仍可靠的旧材料；同行人认得那只磨旧镜盒。"
          },
          {
            "id": "GLASSES_LENS_MATERIAL_PB_10",
            "text": "[X]镜片边缘崩缺后，配镜师问是否继续同材，[X]对照另一副使用更久仍完整的材料，决定不再为前者重配。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_001",
            "text": "参加多风的社区风筝节时，[X]会比较采用 Polycarbonate 与 Nylon 镜片、适合活动使用的合规眼镜，并根据经确认的抗冲击表现、重量、包覆曲率、光学变形和反复转头感受，让完整产品规格与实际试戴共同决定材质偏好。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_002",
            "text": "参加周末长时阅读活动前，[X]会在相同处方下比较 Plastic 与 Resin 镜片，并记录边缘厚度、全天重量、文字清晰度、清洁负担和更换成本，而不把任一宽泛材质名称自动视为更好。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_003",
            "text": "计划多次在城市运河踩脚踏船时，[X]会在产品明确采用轻质层压偏光结构的情况下考虑 Tri Acetate Cellulose 镜片，并通过实际成品比较水面反光、仪表可读性、边缘变形和潮湿清洁表现。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_004",
            "text": "参加机械表结构写生活动时，[X]会在相同处方下比较 Glass 与 Acrylic 镜片，并依据细小齿轮边缘的清晰度、表面反射、长时间低头时的重量、划痕护理预期，以及与金属工具共同携带的影响来取舍。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_005",
            "text": "排练贴合式纸浆面具时，[X]会在反复换面具的过程中比较轻质镜片基材；只有成品装饰插片视野舒适、重量低、固定牢靠，并明确标示为非防护用途时，才会在 Polycarbonate、Plastic、Acrylic、Nylon 或 Resin 中形成偏好。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_006",
            "text": "固定的家庭卡拉 OK 晚上，[X]有时会戴无度数的带色眼镜，一边看电视上的歌词，一边轮流传递麦克风。只有成品足够轻、歌曲之间容易擦掉指印、歌词行看起来仍然笔直且阅读舒适时，[X]才会偏好 Acrylic 镜片，并不会由此推断任何防护用途。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_007",
            "text": "周末轮滑路线以地面弯曲标线引导，[X]在连续转弯时既要看路线边缘，也要留意附近滑行者；只有经过确认的弯曲结构保持轻巧稳定、周边视野中的标线不变形，并且汗水和路尘后容易清洁，[X]才会偏好 Nylon 镜片。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_008",
            "text": "一副已有 Resin 处方镜的镜腿损坏、但镜片处方仍有效时，[X]会记录镜片换入兼容镜框前后的边缘状态，并与早先有记录的 Plastic 镜片换框结果比较，依据崩边、应力痕迹和能否成功重装来选择未来材质，而不是再次做阅读测试。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_009",
            "text": "修复一副有数十年历史的家传太阳镜前，[X]会检查已有 Glass 镜片的划痕、崩口、光学清晰度和重量，并判断保存良好的视野是否值得以谨慎收纳为前提继续采用 Glass，还是如今的使用习惯更适合其他材质。"
          },
          {
            "id": "BND_GLASSES_LENS_MATERIAL_V7_010",
            "text": "经过多次家庭泳池活动，[X]只在各自用途内比较一副已有的 Polycarbonate 泳镜镜片与一副 Tri Acetate Cellulose 太阳镜镜片，并依据泳池边跌落、潮湿清洁、携带重量、层压状态和视野质量，分别保留入水与水面休息时的材质偏好。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:frame_material",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "frame_material",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_01",
            "text": "[X]冬日从室外进入会议室后，摘下围巾，新镜架反复带起鬓发并发出细小静电声，发丝还贴在镜腿上影响视线。[X]换上办公室抽屉里的常戴旧架，用同一条围巾再试时不再出现这些情况；旧镜腿表面已被皮肤和收纳布磨得温润。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_02",
            "text": "[X]包耳耳机压住新镜腿，长时间工作后太阳穴疼痛；同事递来[X]常用旧架，材料已顺着耳罩压力形成轻微弧度。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_03",
            "text": "[X]镜架歪斜后，配镜师尝试调校却发现材料难以恢复；他拿出[X]另一副修过多次的旧架，那种材料每次都能重新贴合鼻耳。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_04",
            "text": "[X]炎热通勤后新镜架不断滑动并让皮肤闷热，办公室常备旧架换上后恢复稳定；同事说它每年热起来都会重新出现在桌上。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_05",
            "text": "[X]孩子抓住镜架意外扭弯，新架留下永久变形；家中旧副被孩子碰过更多次，另一材料仍能回到原形。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_06",
            "text": "[X]寒天戴上新镜架时，鼻梁和耳侧的冰凉让[X]迟迟不适；伴侣递来常戴旧架，表面已被体温与皮肤磨得温润。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_07",
            "text": "[X]海边回来后镜架因盐水发生变化，朋友拿来[X]往年常戴的另一材料旧架；它虽有水线，经过多次清洁仍保持结构。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_08",
            "text": "[X]定制师建议尝试新框材组合，[X]仍要求保留旧架在鼻梁柔软、镜腿有支撑的分工；几张旧订单虽品牌不同，材料组合逻辑一直相近。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_09",
            "text": "[X]镜腿断裂后，维修员说明材料本体已脆化；[X]把预算留给另一副表面有划痕却多年完整的旧架，不再修同类脆化材料。"
          },
          {
            "id": "GLASSES_FRAME_MATERIAL_PB_10",
            "text": "[X]工坊飞溅落到镜框，新材料留下难处理痕迹，主管换来[X]常用防护架；旧架表面已有多次清洁变化，却仍能继续值班。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_001",
            "text": "参加从凉爽大厅转到阳光庭院、再回到室内的全天语言交流活动时，[X]会按鼻梁负重、初次接触温度、久戴后的可调性以及反复触碰后表面是否易恢复来比较常见镜框材料。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_002",
            "text": "参加浅水平衡课程时，[X]需要护目镜的贴脸框体在反复湿接触中保持柔软、受带子压缩后能恢复、容易冲洗，并在水池与池边转换时不会变得过滑或发黏。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_003",
            "text": "参加周末道具制作工作坊时，[X]计划为短时表演制作一副无度数眼镜框，并按边缘收整、油漆附着、螺丝固定、跌落后修复以及贴脸表面能否处理平滑来比较浇注、板材切割和打印框体。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_004",
            "text": "参加业余壁球活动时，[X]要选择能应对快速转身、汗液、偶发墙面或球体接触以及局间反复摘戴的防护眼镜，并比较轻质柔性热塑材料与刚性加固结构。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_005",
            "text": "整理共享装扮箱时，[X]会按装饰眼镜能否承受反复试戴、在不同使用者之间擦拭、接受简单修复并在存放后保持光滑边缘来分类，而不是只根据它对某一主题看起来是否逼真来选择。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_006",
            "text": "参加全天夏日棋会时，对局会在日照庭院与温热遮阴休息区之间交替，[X]也要反复戴上和收起眼镜；[X]会根据经过确认的材料样本在这些冷热循环后能否保持鼻梁与镜腿对齐、能否及时调回而不耽误后续对局，在 Acetate、Plastic 和 TR90 之间形成偏好。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_007",
            "text": "经过数个长时间阅读日，[X]佩戴同一副细钛镜框，记录鼻梁压力、镜腿对齐和所需调校次数，并把已验证的低重量与铝和不锈钢方向比较，而不假设所有金属镜框手感相同。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_008",
            "text": "家庭地面游戏下午，[X]钻过毯子隧道前会摘下眼镜并放进柔软衣袋，反复跪坐使轻度挤压成为可预期情况；只有用同样衣袋压力预演后，两侧镜腿能对称恢复且镜片对位不变，[X]才会在 TR90、Nylon 和 TPU 之间形成偏好。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_009",
            "text": "经过一个季度的泳池使用，[X]持续冲洗一副带硅胶贴脸框的护目镜，并记录密封恢复、气味、表面发黏和变色，再判断 Silicone、Rubber 或 TPE 哪个最适合反复湿存和皮肤接触。"
          },
          {
            "id": "BND_GLASSES_FRAME_MATERIAL_V7_010",
            "text": "一副手工浇注树脂眼镜框在铰链附近出现细纹后，[X]会在侧光下检查裂纹、确认修复是否改变对齐，并比较未来继续使用 Resin，还是转向机加工 Acrylic、打印 ABS 或加固 Composite 结构。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:frame_pattern",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "frame_pattern",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_FRAME_PATTERN_PB_01",
            "text": "[X]走路时，新框缘纹样不断进入余光，[X]总以为旁边有物体移动。验光师换回常用旧架后这种误判消失，旧订单也显示[X]长期选择不会在视野边缘制造相同节奏的图案。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_02",
            "text": "[X]窗光在镜片上反射时，与框缘图案叠成新的视觉形状。摄影师让[X]转动几次头部，发现常戴旧架即使在不同角度也保持熟悉秩序，便按它调整新框纹样。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_03",
            "text": "[X]表情练习时，眉毛运动会让新镜框图案看起来忽聚忽散。[X]换上另一种常用纹样后，框缘与表情保持清楚关系；老师从过去课程也认得这种视觉节奏。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_04",
            "text": "[X]擦拭镜架后，细小纤维总卡在某种纹样边缘，近看像图案的一部分。[X]熟练沿固定方向二次清理，家人说几副同类框纹都让[X]形成了这套动作，却仍因喜欢而常戴。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_05",
            "text": "[X]回看侧面录像时，[X]发现镜腿图案在转头时比正面框缘更抢眼。常戴旧架的纹样会在转身后保持熟悉分量，几段不同活动视频也有同样表现。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_06",
            "text": "[X]定制镜架打印完成后，层纹轻微错位，让原图案出现意外方向。设计师问是否重做，[X]拿出几副真正戴旧的镜架比较可接受秩序，最终按这些实物调整文件。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_07",
            "text": "[X]镜盒内衬掉色，在框缘纹样上留下新的色块。[X]没有只看污损，而是判断这次变化是否仍符合自己会戴的图案关系；家中两副经历类似转色后仍常用的旧架提供了参照。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_08",
            "text": "[X]戴口罩后，耳侧带子遮住镜腿纹样的一部分，新架只剩下断裂视觉。换回常用框纹后，即使被遮挡仍保持熟悉秩序；护理人员说多次就诊都见[X]采用后一种关系。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_09",
            "text": "[X]配镜师在框缘画临时测量点时，发现某种纹样会让标记难以辨认。[X]指出自己其他常戴镜架如何为调整位置留下视觉空隙，店员翻旧单后沿用相同测量策略。"
          },
          {
            "id": "GLASSES_FRAME_PATTERN_PB_10",
            "text": "[X]夜间乘车时，路灯连续扫过镜框，新图案在眼周产生让[X]分心的闪动。家人换来车内常备旧架后，光线仍变化但框纹不再打断注意；镜盒已有长期车用磨损。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_001",
            "text": "参加近距离围坐的插图书阅读小组时，书页会频繁移到脸旁，[X]希望镜框表面保持稳定安静的边界，而不是在每次眼神和翻页互动中再增加一个重复纹样。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_002",
            "text": "在林地观察隐蔽区停留时，[X]考虑使用能在反光照片中打散眼镜可见边缘、与活动相连的镜框表面，同时准备醒目眼镜盒，确保摘下后仍容易找到。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_003",
            "text": "花粉季里，[X]在日常去药店和杂货店时会戴素色口罩。相比在口罩上方再增加一道生硬横线的纯色镜框，[X]偏好玳瑁纹不规则的斑驳感：它能让边界显得柔和，同时在出门前快速照镜子时，眼镜仍然清楚可辨。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_004",
            "text": "反复参加社区步道维护的早晨，[X]戴着眼镜穿过灌木并搬运剪下的枝条与标记带；只有普通表面擦痕能融入碎片化纹样，而下次出发前用固定侧光检查仍能看出需要维修的裂纹时，[X]才会偏好迷彩镜框图案。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_005",
            "text": "参加使用图案背景的社区播出时，[X]坐在不断更换的织物面板前，并选择能保持一致脸部定位、而不会在格纹、花卉和条纹依次出现在头部后方时产生干扰的镜框表面。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_006",
            "text": "社区脸部彩绘活动中，每个人的图案都不同，而且经常延伸到眉毛和太阳穴附近；[X]会偏好纯色镜框图案，因为连续边界能让绘制者看清颜料应在哪里停下，也便于在共同清洁时认出分配给自己的眼镜。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_007",
            "text": "邻里无声故事接龙中，参与者要隔着圆圈用短暂眼神交接下一棒；[X]会偏好玳瑁纹，因为中性的不规则斑纹无需鲜艳颜色就能在眼周形成可辨认标记，但前提是斑块在鼻梁和两侧镜腿上保持平衡，不把注意力拉向单侧。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_008",
            "text": "一位年幼亲属挑选迷彩镜框作为礼物后，[X]把这副已有眼镜依次戴去日常办事、家庭通话和安静阅读，并判断碎片化表面是否会成为自己乐于保留的赠礼记忆，还是始终只是欣赏对方选择、却不愿据为个人偏好的纹样。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_009",
            "text": "同一副纯色镜框反复被放在有图案的缝纫桌上时，[X]发现即使颜色与布料相近，也能凭不间断轮廓找到它，因此表面连续性成为实用的找回证据。"
          },
          {
            "id": "BND_GLASSES_FRAME_PATTERN_V7_010",
            "text": "继承一副斑驳镜框后，[X]先清洁并调校，再把旧家庭照片与当前佩戴比较，判断玳瑁纹表面是有意义的延续，还是自己不想重复的继承视觉身份。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:sport",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "sport",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_SPORT_PB_01",
            "text": "[X]完成固定项目后，教练查看镜架上汗水蒸发的位置，便知道[X]仍在用适合该运动的那副。几副同用途旧架都在相同区域出现盐痕，而尝试其他项目的眼镜几乎没有这种变化。"
          },
          {
            "id": "GLASSES_SPORT_PB_02",
            "text": "[X]训练后，[X]眼周和后脑留下固定带压痕，队医拿出另一副同项目旧眼镜，镜带也在对应位置变软。即使更换品牌，[X]仍要求保留这种不会影响动作的受力分布。"
          },
          {
            "id": "GLASSES_SPORT_PB_03",
            "text": "[X]某项活动结束后，镜框缝隙里总会留下该环境特有的水迹、泥点或细尘。[X]清理动作已经熟练到不用拆说明书，伙伴也知道哪些位置最先处理；同用途旧架都有相似残留。"
          },
          {
            "id": "GLASSES_SPORT_PB_04",
            "text": "[X]训练中眼镜意外损坏，教练没有从通用用品里找替代，而是拿出一直为[X]保留的同项目备用副。备用镜腿也有使用痕迹，说明它过去已不止一次接替主用眼镜。"
          },
          {
            "id": "GLASSES_SPORT_PB_05",
            "text": "[X]队友临时借用[X]一副专项眼镜，只听[X]说明镜片何时起雾、哪个角度进光、怎样配合动作，就知道它经历过大量该项目。另一用途眼镜却只能得到一句“几乎没真正用过”。"
          },
          {
            "id": "GLASSES_SPORT_PB_06",
            "text": "[X]回看训练录像时，教练发现新眼镜让[X]在关键动作前反复偏头补偿视野。换回旧专项副后动作恢复，往季录像里也很少出现这种补偿。"
          },
          {
            "id": "GLASSES_SPORT_PB_07",
            "text": "[X]俱乐部登记新活动周期时，工作人员按项目给器材贴签。[X]的一只眼镜盒上已经叠了多层同类标签，仍被放回该项目柜位；为短暂尝试买的另一副只有一次登记。"
          },
          {
            "id": "GLASSES_SPORT_PB_08",
            "text": "[X]镜架在活动中受撞后，维修师根据旧修点判断受力来自哪类动作。[X]带来的同项目备用副也在相近位置加固过，于是继续按该运动的真实冲击方式维修，而不是换成通用外观方案。"
          },
          {
            "id": "GLASSES_SPORT_PB_09",
            "text": "[X]搬到新城市加入同类活动组织时，负责人检查[X]自带眼镜，很快从旧痕和调节方式看出[X]并非初学者。即使新场地规则不同，[X]仍优先让这副长期服务同一项目，而不是购买完全陌生用途。"
          },
          {
            "id": "GLASSES_SPORT_PB_10",
            "text": "[X]整理眼镜柜时发现一副盒签脱落，已经分不清商家原先怎样宣传。镜腿、镜片边缘和固定配件上的磨损却清楚对应它真正承担的日常角色或某项运动；一起使用过的人据此把它放回熟悉柜位，旁边一副标签相近却几乎没有使用痕迹的新品仍留在待定区。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_SPORT_V7_001",
            "text": "参加第一次跑步-自行车接力时，[X]会比较跑步段的上下颠动，与骑行段更快气流、头盔接触和回头观察所对应的眼镜角色，并依据眼镜实际服务的赛段选择 Cycling 或 Running，而不是笼统归为户外眼镜。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_002",
            "text": "在湖边聚会中，[X]上午会在码头钓鱼，下午参加短程高尔夫；因此会把持续观察水面所需眼镜与反复追踪球、低头瞄球所需眼镜分开，并依据已确认的活动角色选择 Fishing 或 Golf，而不是依据共同的晴天环境。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_003",
            "text": "在公园技能体验日中，[X]会参加有指导的击球笼活动和独立网球课程，并比较一段中头盔与高速迎面来球的要求，和另一段中开放球场横向追球的要求；只有产品适合相应具体角色时，才归为 Baseball 或 Tennis。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_004",
            "text": "参加雪上学校周末活动前，[X]尚未决定学双板还是单板，因此会依据两种课程各自的头盔、站姿、周边观察和跌倒方式比较护目镜，并让最终预订项目决定选择 Skiing 或 Snowboarding。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_005",
            "text": "在水库活动中心，[X]计划在划定泳道游泳，并另参加初学者桨板课，因此会区分适合反复入水的密封泳镜，与用于水面平衡和飞溅、需要固定的眼镜，并据此选择 Swimming 或 Water Sports。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_006",
            "text": "参加由两部分组成的乡野休闲周末前，[X]会把有指导的飞碟射击与另行依法安排的高地狩猎分开考虑；[X]会根据已预约的具体环节偏好 Shooting 或 Hunting 眼镜，并要求完整产品满足对应活动的规则、覆盖、天气与视野需求，而不会因都接近器械就把两种角色混为一谈。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_007",
            "text": "家庭户外活动日要先沿林间山路步行一小时抵达草地，随后[X]会参加快速的多人飞盘游戏；[X]会根据目标环节究竟强调长途步行舒适与枝条净空，还是冲刺固定与队友察觉，分别偏好 Hiking 或 Field Sports 眼镜，并独立核验每种角色。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_008",
            "text": "一副已有护目镜在有指导的 Jet Ski 活动中保持稳固后，[X]考虑把它用于休闲卡丁车赛道，但仍把 Jet Ski 与 Motor Sports 视为不同角色，并在复用前重新检查头盔配合、水花与粉尘差异、速度和场地方规定。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_009",
            "text": "[X]有一副用于室内 Airsoft 的全密封护目镜，又受邀参加户外 Paintball；但会先核对两处场地要求的等级、覆盖、颜料污染、起雾和面罩配合，再决定已知 Airsoft 角色能否同时标为 Paintball。"
          },
          {
            "id": "BND_GLASSES_SPORT_V7_010",
            "text": "一副已有 Motocross 护目镜经过多次土路骑行后，[X]会把它的头盔、粉尘、撕片和行驶气流角色，与只在途中咖啡馆经常佩戴的一副透明时装眼镜明确分开；后者会被正向归为 Not Intended for Sports，而不是把旅途中戴过的每副眼镜都当作运动装备。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:occasion",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "occasion",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_OCCASION_PB_01",
            "text": "[X]到某类环境后，[X]把眼镜盒放到固定可及位置，工作人员不问便替它留出空间。几次到访中，同一类型的眼镜都从那里开始和结束使用，桌面甚至留下镜盒反复接触的浅痕。"
          },
          {
            "id": "GLASSES_OCCASION_PB_02",
            "text": "[X]某类活动开始后，[X]按固定视觉步骤使用眼镜，同行新人递错另一副时整个节奏被打断。老搭档换回常用副，镜片上对应区域的擦拭痕也正好来自这些重复动作。"
          },
          {
            "id": "GLASSES_OCCASION_PB_03",
            "text": "[X]复查时，专业人员只看镜架受力和镜片痕迹，便问[X]是否仍在某类环境使用它。[X]确认后拿出另一副同用途眼镜，两者虽品牌不同，磨损位置却相似。"
          },
          {
            "id": "GLASSES_OCCASION_PB_04",
            "text": "[X]准备出发参加某类安排时，家人没有替[X]选衣物，只先把一副眼镜的镜片按熟悉方式清洁好。出门时，[X]没有再比较盒里的其他副，直接戴上这一副；镜布只在对应镜片边缘的位置磨得很薄，收纳槽也已压出相同框形。"
          },
          {
            "id": "GLASSES_OCCASION_PB_05",
            "text": "[X]补充眼镜小配件时，店员发现某只镜盒总缺同一类用品。[X]解释它们在某种环境里消耗最快；旧购买记录显示补充日期虽分散，却都跟同类活动相邻。"
          },
          {
            "id": "GLASSES_OCCASION_PB_06",
            "text": "[X]某类活动暂停期间，家人想把一副眼镜和配件封存。[X]只更换了会老化的小部件，仍把镜盒留在原位；活动恢复时无需重新调校便直接使用。"
          },
          {
            "id": "GLASSES_OCCASION_PB_07",
            "text": "[X]换戴新眼镜进入固定环境后，不断用头部补偿视线。同伴看见动作便从硬盒里取出常用旧副；换回来后补偿立刻减少，旧镜腿在耳侧受力处已有固定弯度，镜片边缘也保留着该环境造成的细小痕迹。"
          },
          {
            "id": "GLASSES_OCCASION_PB_08",
            "text": "[X]清理镜盒时发现某类环境特有的微粒总聚在同一角落。[X]按固定流程处理，并为下一次使用补上清洁用品；家人知道这只盒子不能与普通日常眼镜混放。"
          },
          {
            "id": "GLASSES_OCCASION_PB_09",
            "text": "[X]某类活动进行到一半，镜片出现小问题，同伴直接从固定包位递来备用副。备用眼镜不是新品，鼻托和镜腿已有多次中途接替留下的使用痕迹。"
          },
          {
            "id": "GLASSES_OCCASION_PB_10",
            "text": "[X]结束某类活动后，[X]没有先评价镜架外观，而是根据眼部状态决定这副眼镜是否继续承担原用途。同行人已见过几副眼镜按同一标准留用或退出，常用副的镜片更换次数也最多。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_OCCASION_V7_001",
            "text": "参加清晨湿地鸟类计数时，[X]需要为数小时的露天环境、变化阳光、风、潮湿空气和反复仰视选择眼镜，因此主要使用场合是 Outdoor，尽管活动中也会记录物种并使用观鸟镜。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_002",
            "text": "规划白天串联多个乡村跳蚤市场的路线时，[X]会专门为长距离路段、仪表与远处视线切换、后视镜和走停导航选择眼镜，因此主要角色是 Driving，即使逛摊位时会把它摘下。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_003",
            "text": "露天电影结束后，[X]要先走过未照明路段到车旁，再沿熟悉道路进行弱光驾驶，因此会寻找针对路标、行人、仪表亮度和车灯反射评估的无色处方眼镜，并明确把场合视为 Night Driving，而不是继续戴白天太阳镜。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_004",
            "text": "参加封闭场地的摩托车入门活动前，[X]会为行驶气流、砂砾、面罩配合、回头观察和反复停车选择与头盔兼容的护眼装备，因此相关场合是 Motorcycle Riding，即使不涉及公共道路出行或职业骑行。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_005",
            "text": "参加科学中心公众开放实验活动时，[X]会在指导下进行涉及少量液体转移和共享台面的颜料分离实验，并选择该站点规定的 Laboratory/Clinical 防护眼镜，而不把普通处方眼镜视为足够。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_006",
            "text": "在有组织的社区考古野外体验日，[X]要在近处方格卡、土色记录、远处边界旗和低矮灌木之间切换观察，还要搬动共用工具；因此[X]会偏好适用于 Tactical/Field 场合的眼镜，同时把贴合、认证和各项防护功能分别核验，而不是借此采用军事或职业身份。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_007",
            "text": "社区自行车维修课上，[X]会在同一工作台依次完成线管剪切、带弹力部件调节、沾尘车轮清洁和最后试转；因为完整的工具与碎屑流程界定了使用角色，[X]会偏好 Industrial/Workshop 场合眼镜，而具体认证、覆盖与贴合仍以课程规则为准。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_008",
            "text": "整个冬季修剪带刺浆果枝并绑扎新梢时，[X]会在枝条、土壤和变化日光中反复佩戴同一副已有防护眼镜，因此下一季会继续选择 Horticulture 场合角色，同时另行检查覆盖与完好状态。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_009",
            "text": "经历多次多风的海滩清理清晨后，[X]把一副已有包覆式眼镜在阳光、盐湿空气和飞沙中的反复使用，作为换购另一副 Outdoor 眼镜的证据，同时不从这段经历推断它具备专业野外或工坊防护。"
          },
          {
            "id": "BND_GLASSES_OCCASION_V7_010",
            "text": "多次在白天开车取还大型乐器时，[X]只在车内佩戴同一副已有眼镜，并记录路标、后视镜、装卸区转换和处方舒适度，再用这段边界清晰的经历把 Driving 保留为替换眼镜的目标场合。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:uv_protection",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "uv_protection",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_UV_PROTECTION_PB_01",
            "text": "[X]旧眼镜送检时，店员发现镜片的紫外防护仍有效，[X]便只换磨损镜腿；配镜档案显示不同处方阶段都保留了同一安全要求。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_02",
            "text": "[X]带孩子户外活动前，孩子先确认[X]是否戴了有紫外防护的眼镜，因为几次长时间外出[X]都会做同一检查；常用镜盒里还放着检测卡。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_03",
            "text": "[X]雪地出发前，教练检测镜片并确认有紫外防护才让[X]继续使用旧副；镜框上的往季痕迹显示这个标准已跨过多个雪季。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_04",
            "text": "[X]园艺工作前，[X]从镜盒拿出有紫外防护的那副，邻居无需询问便把无防护备用留在室内；旧副鼻托已被多个户外季磨亮。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_05",
            "text": "[X]整理眼镜时逐副检测紫外防护，[X]把有保护且已磨损的旧副留下，把几乎全新的无保护款转出；家人说过去清理时也总是这种分布。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_06",
            "text": "[X]一副无紫外防护的眼镜一直固定放在室内工作台，[X]从不拿它去户外，却因室内使用顺手而多次更换鼻托。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_07",
            "text": "[X]为只在室内使用的镜片更换时，店员建议增加紫外防护，[X]仍按旧订单选择无防护版本，把需求留给另一副户外眼镜；两者镜盒位置多年分明。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_08",
            "text": "[X]实验室规定某项工作使用无额外紫外滤层的指定镜片，[X]从固定柜位拿出自己的旧副；镜腿上的编号和多次消毒痕迹说明它长期只承担这一角色。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_09",
            "text": "[X]室内拍摄校色时，[X]换上无紫外防护的固定眼镜，以免额外层影响既有流程；摄影师说多次棚拍都为[X]保留这副，鼻托也已换过。"
          },
          {
            "id": "GLASSES_UV_PROTECTION_PB_10",
            "text": "[X]家人整理镜盒时，把无紫外防护那副放回[X]的阅读桌而非门边；被问原因，家人说多年观察里它从未被带出室内，却每天都有取用痕迹。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_001",
            "text": "在无树荫训练场参加全天露天化石复制品发掘时，[X]会要求有文件可核验的 uv_protection = Yes，因为遮阴休息很短，反复低头也不会消除直射和反射日光暴露。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_002",
            "text": "为只在室内彩色玻璃比色桌、受控可见光环境中使用且不承担日光角色的眼镜设定有限预算时，[X]把 uv_protection = No 作为需求方向，并将资金用于处方、色彩中性和近距离舒适。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_003",
            "text": "从上午晚些时候到下午在白色屋顶庭院排练时，[X]会偏好有文件可核验的 uv_protection = Yes，因为眼镜将在开阔天空和明亮反射光中连续佩戴数小时，这与镜片颜色或表演造型无关。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_004",
            "text": "为无窗夜间装帧小组专用的处方眼镜做选择时，[X]把 uv_protection = No 作为需求方向；这副眼镜会一直留在室内，用于近距离看线、纸边与印刷说明，因此[X]把预算用于准确近用矫正和降低灯光反射，而不是超出已记录用途的户外功能。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_005",
            "text": "计划在高海拔湖边进行一周阅读与写生时，[X]会要求长时间日照和开阔水面附近佩戴的眼镜具备 uv_protection = Yes，同时把偏光与色彩还原作为独立判断。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_006",
            "text": "协作完成社区粉笔壁画时，[X]会在浅色露天庭院里连续数个上午时段主要低头绘制，也会走到开阔天空下后退查看整体构图；因此[X]会偏好有文件证明的 UV protection = Yes，并把明亮反射日光和持续时长都纳入考虑，而不会因工作面低于视线就忽略暴露。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_007",
            "text": "地下室广播剧排练都在日落后进行，[X]需要一副专用眼镜在无窗房间里阅读提示卡和调节小型控制件，白天另有眼镜承担角色；因此[X]会把 UV protection = No 作为需求方向，优先保证准确矫正和较低灯光反射，并在用途一旦延伸到日光环境时重新判断。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_008",
            "text": "多次参加社区花园清晨采收时，[X]会佩戴一副有文件证明 uv_protection = Yes 的透明镜片眼镜；它从开阔种植行到反光温室板旁都保持明确的户外角色，因此同一功能成为替换时不可省的标准。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_009",
            "text": "用一副已有放大眼镜完成数十次无窗室内微缩模型上色后，[X]确认它在离开工作室前就会收好，因此替换时继续把 uv_protection = No 作为需求方向，并优先保证放大对齐与可见光色彩中性。"
          },
          {
            "id": "BND_GLASSES_UV_PROTECTION_V7_010",
            "text": "一副已有透明处方镜始终与[X]的望远镜放在一起，只在日落后用于阅读星图和调整支架，并在天亮前收起；由于另有防护文件明确的日间眼镜，[X]为这一严格夜间户外角色保留 uv_protection = No 的需求方向。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:style",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "style",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_STYLE_PB_01",
            "text": "[X]配镜师把新架装进旧镜盒，[X]一打开便觉得里面像放了别人的东西。换成另一副气质更接近自己的镜架后，熟悉感立即恢复；店员说[X]几只长期用旧的镜盒里一直装着相似风格。"
          },
          {
            "id": "GLASSES_STYLE_PB_02",
            "text": "[X]捐出一副少戴镜架时，工作人员以为它最能代表[X]，却发现鼻托几乎无痕。[X]拿出几副真正戴旧的眼镜说明自己常用的是另一种气质，工作人员据此重新写了捐赠故事。"
          },
          {
            "id": "GLASSES_STYLE_PB_03",
            "text": "[X]剧院借用字幕设备时，新镜架与设备叠在眼周，整体像角色道具。[X]换上常戴旧架后既能固定设备，神态也恢复自然；同行人说以前几次观演也是这副最不改变本人气质。"
          },
          {
            "id": "GLASSES_STYLE_PB_04",
            "text": "[X]古董市集摊主把[X]常戴镜架误认成某个年代的复制品。[X]并未因此觉得需要换新，反而说明自己如何把这种气质戴进现代日常；镜腿内侧的修补证明它并非偶尔扮装。"
          },
          {
            "id": "GLASSES_STYLE_PB_05",
            "text": "[X]化妆师只拿空镜架测试造型，新款即使没有镜片仍让[X]表情拘谨。换成鼻托已调过多次的旧风格后，眉眼动作恢复；团队决定沿用，而不是靠妆面掩饰不适配。"
          },
          {
            "id": "GLASSES_STYLE_PB_06",
            "text": "[X]定制店扫描面部后自动生成一副“最匹配”的镜架，[X]却觉得算法把自己处理得过于陌生。设计师调出几副被[X]戴到变形的旧架，重新从共同气质建模，成品才无需适应。"
          },
          {
            "id": "GLASSES_STYLE_PB_07",
            "text": "[X]家人给旧视频加字幕时，用“戴某种气质镜架的[X]”区分同场人物。新视频里的镜架风格变化太大，字幕编辑者一度认错；换回常用旧架补拍后，不看声音也能认出。"
          },
          {
            "id": "GLASSES_STYLE_PB_08",
            "text": "[X]镜腿断裂后只能留下可见接头，修复师担心破坏风格。[X]对照几副常戴旧架，选择让接头成为整体气质一部分的处理；修好后一周内又带着它出现在不同日常。"
          },
          {
            "id": "GLASSES_STYLE_PB_09",
            "text": "[X]线上会议只露出额头和眼周边缘，同事仍猜中[X]换回了哪种风格的镜架。大家不是凭颜色，而是凭轮廓气质和[X]戴着它时更放松的表情；旧会议里也反复出现这种组合。"
          },
          {
            "id": "GLASSES_STYLE_PB_10",
            "text": "[X]光学店允许把新风格镜架带回试戴一周。[X]每天回家都会换回旧架，试用副只在出门前短暂出现；归还时鼻托几乎无痕，而旧架又增加了新的擦拭记录。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_STYLE_V7_001",
            "text": "参加发条自动机主题晚餐时，[X]会比较指向虚构机械时代的眼镜与扎根于可辨认旧年代的眼镜；希望幻想机械语言占主导时偏好 Steampunk，希望历史引用更直接时偏好 Vintage。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_002",
            "text": "参加修复咖啡骑士摩托车揭幕、随后前往地下室独立刊物交换活动时，[X]会比较贴合、带道路意象的眼镜与有意破坏精致感的手改镜框；偏好机器与公路身份时选择 Biker，偏好反精致、自我改造表达时选择 Punk。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_003",
            "text": "为每五年重拍一次的多代家庭肖像选择眼镜时，[X]希望它在服装、年龄与背景不断变化的档案中仍保持端正，因此当跨期连续性比标记当下潮流更重要时，会偏好 Classic。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_004",
            "text": "参加以近未来交通网络为背景的沉浸式音频剧时，[X]希望眼镜像可信的日常技术，而不是戏剧道具；如果演出前后在普通大厅里仍显得协调，就会偏好 Futuristic。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_005",
            "text": "为以夸张放大家居物品为主题的生日惊喜照相亭选眼镜时，[X]在即时视觉幽默和来宾快速换角色比日常复穿更重要的情况下偏好 Novelty，同时仍要求短时轮换时看得清、戴得舒服。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_006",
            "text": "家庭舞蹈档案之夜，参与者会从带年代的影像里学一段社交舞步，再录制当下的重现版本；如果眼镜的 Vintage 风格能清楚指向影像中的年代，同时在练习间隙的抓拍里仍协调，不要求每件衣服和房间细节都变成戏服布景，[X]就会偏好这一风格。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_007",
            "text": "冬季的几个月里，[X]仍会和相识已久的骑行朋友固定吃普通周末早餐，但所有摩托和骑行装备都留在家里。只有紧凑、源于公路文化的线条在轻松交谈中仍像[X]长期身份的自然组成部分、不依赖车辆道具，也不产生任何防护用途暗示时，[X]才会偏好 Biker 风格日常眼镜。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_008",
            "text": "[X]曾为多次独立刊物交换活动，在同一副透明镜框的镜腿上反复安装可拆卸手写部件；能够不断修改表达、而不是维护光洁零售成品，成为下一副继续偏好 Punk 的具体理由。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_009",
            "text": "把一副棱角分明、近似面罩的眼镜作为 Futuristic 款式购入五年后，[X]会把购买时期的照片与当前影像及身边日常技术并置，判断它仍像可信的下一步，还是已变成自己不想重复的、过时的未来想象。"
          },
          {
            "id": "BND_GLASSES_STYLE_V7_010",
            "text": "一次家庭聚会中，几位来宾没有共同熟练语言；一副已有的夸张 Novelty 眼镜被轮流传递，用来标记无语言猜谜游戏中的当前玩家。若直观笑点能让人无需口头说明就加入游戏，[X]便保留这一准确风格角色。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:frame_shape",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "frame_shape",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_FRAME_SHAPE_PB_01",
            "text": "[X]孩子画[X]时总把眼周轮廓画成同一基本形状，新镜架换形后孩子还问“原来的去哪了”；旧画册跨年份都保留相似框形。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_02",
            "text": "[X]配镜师没让[X]从整墙选择，而是取出旧档案里反复出现的框形；度数和尺寸变过，基本轮廓却一直集中在同一方向。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_03",
            "text": "[X]擦镜片时，新框形让[X]总在边缘漏下一小块，家人看见后递来常用旧架。[X]沿熟悉轮廓一次擦净，镜布上对应路径也已被长期操作磨得更薄。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_04",
            "text": "[X]化妆师根据[X]常用框形预留眉眼空间，新架换成另一形状后妆面关系被打乱；她从旧工作照调整回长期合作方案。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_05",
            "text": "[X]细雨落到镜片上，新框形让水珠停在[X]不习惯的位置，视线不断被打断。同行人递来车内旧架后，水珠沿熟悉边缘聚散，镜片外圈已有多次雨天擦拭留下的细痕。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_06",
            "text": "[X]换发型后店员建议改用另一框形，[X]试戴片刻仍回到旧轮廓；理发师说不同发型阶段[X]都让眼周保持相似基本形状。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_07",
            "text": "[X]旧架断裂，定制师建议趁机改变基本形状，[X]只要求复制原轮廓；旧订单里几副不同材质镜架也采用相同形状。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_08",
            "text": "[X]给镜架安装外接镜片时，新框形总让卡扣受力不均。配镜师拿出[X]常用旧架，外缘已有多次装卸形成的浅痕，附件一次便贴合；[X]因此仍按这类基本轮廓配新架。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_09",
            "text": "[X]朋友送镜架前避开了以前赠过却少戴的形状，改选日常照片里高频轮廓；新架几周后鼻托已有痕迹。"
          },
          {
            "id": "GLASSES_FRAME_SHAPE_PB_10",
            "text": "[X]因角色造型换上另一框形，完成拍摄后立刻从随身硬盒里换回常用轮廓。盒内另一副备用架材质和颜色都不同，框形却与换回的旧架相近；两副鼻托和镜腿内侧都有日常佩戴留下的磨亮，片场借架则仍像新的一样。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_001",
            "text": "参加长时间音频图书馆聆听时，[X]会同时戴包耳耳机、针织帽和处方眼镜，因此选择曲线型镜框轮廓，避免上方尖角在帽子和耳罩下形成第二个角状接触点。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_002",
            "text": "编辑大型桌面交通图时，[X]要在成排直线标签和远处墙面参照之间反复切换，因此偏好上下边界明确、能提供可预期矩形观察窗口的方形镜框轮廓。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_003",
            "text": "在圆形彩窗大厅度过夜晚时，[X]考虑用曲线镜框呼应重复拱形、又不变成复制品，并先在入口中性光下检查该轮廓与脸部的关系，再决定是否接受这种建筑引用。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_004",
            "text": "参加现代主义住宅参观时，[X]选择可与重复窗格和网格对话的直边镜框，并通过近景照片确认这种形状仍遵守眉部与脸颊净空，而不是把建筑几何强加到脸上。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_005",
            "text": "围绕中心参照点拼装圆形马赛克方案时，[X]会以相近距离反复向上、向下和向两侧扫视，并比较面积相同的镜框轮廓；若曲线镜片边界能提供均衡的径向视窗、又不牺牲处方中心对位，[X]便偏好圆框。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_006",
            "text": "邻里定格肖像接力中，参与者要在纸道具不断变化时，让头部每一帧都回到同一标记角度；如果方形镜框的平直上缘和侧缘能与监视器网格对齐，同时镜角在反复表情中仍避开眉毛和脸颊，[X]就会偏好 Square。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_007",
            "text": "[X]把一副已有圆形阅读镜和另一副不同用途的有角眼镜放在床边相邻槽位中；几个低光夜晚里，[X]会在戴上前沿镜框正面摸索连续曲线，只有无需打开强光就能选对阅读镜时，才把 Round 保留为有用的形状提示。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_008",
            "text": "一副已有方框眼镜逐渐戴歪后，[X]把其平直上缘和侧缘与门框及打印网格比较，完成校正，并据此判断：如果方形几何能在不适出现前让轻微歪斜显现，它就是有用的形状。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_009",
            "text": "家庭笑话录音中，[X]会转向不同讲述者并反复大笑，而不是保持中性姿势；只有圆形镜框的下方曲线在这些自然表情里始终避开活动的脸颊、整体也不会随之转歪时，[X]才会偏好 Round。"
          },
          {
            "id": "BND_GLASSES_FRAME_SHAPE_V7_010",
            "text": "换成更短发型后，[X]重新佩戴同一副方形镜框，并连续数天比较侧面和正面效果，判断新露出的上方角点是带来想要的脸部结构，还是因旁边少了头发而显得过强。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:lens_feature",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "lens_feature",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_LENS_FEATURE_PB_01",
            "text": "[X]新镜片在熟悉环境里没能解决[X]长期在意的视觉问题，同行人拿来旧副后状况立即缓解；旧镜片表面虽有细痕，这项功能已陪[X]完成许多相同活动。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_02",
            "text": "[X]换片时店员推荐新功能，[X]先让他调出旧订单的实际返修与复购记录；不同处方阶段，真正持续保留的功能组合一直集中，而一次尝鲜款很快被换掉。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_03",
            "text": "[X]天气突变后，新镜片的功能表现让[X]不得不停下处理，朋友递来固定备用副；朋友说几次类似天气里，[X]都靠后一功能继续原计划。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_04",
            "text": "[X]临时增加一整天屏幕工作后，[X]换回具有熟悉功能的旧眼镜，眼部状态才恢复到正常节奏；同事认得这副镜片每逢密集项目都会出现在桌上。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_05",
            "text": "[X]夜间走固定路线时，新功能反而让某段灯光更难判断，家人从车内拿出[X]常用旧副；镜盒边缘的取放磨损说明它不是临时备用。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_06",
            "text": "[X]工作中发生一次轻微冲击，镜片功能是否真正发挥直接决定[X]能否继续；主管查看旧防护副上的多处细点，说过去班次已反复验证过[X]信赖的方案。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_07",
            "text": "[X]水边活动中，新镜片让[X]不断调整视线，伙伴换来往季常用功能后动作恢复；旧片有水渍和擦痕，却一直承担相同环境角色。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_08",
            "text": "[X]转让眼镜时，买家问功能是否实用，[X]描述它在真实环境中何时发挥、何时从未被需要，而不是复述标签；这些细节也解释了自己为何长期保留另一功能组合。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_09",
            "text": "[X]孩子看到环境变化后主动问[X]是否要换那副“会帮忙”的眼镜，因为多次家庭出行中，某项镜片功能总在这个节点被启用。"
          },
          {
            "id": "GLASSES_LENS_FEATURE_PB_10",
            "text": "[X]店员不断推荐附加功能，[X]仍为固定室内任务选择无特殊功能镜片；工作台旧副鼻托已换过几次，却从未因缺少额外功能退出使用。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_001",
            "text": "参观户外动态悬挂雕塑展时，[X]考虑选择 Mirrored 镜片，让反光外观与移动金属表面形成呼应；但只有在阳光路段和有顶路段都能看清雕塑吊索、阴影及其他访客时，才接受这一功能。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_002",
            "text": "参观温室时，[X]会在阴暗蕨类馆、玻璃走廊和明亮庭院之间反复穿行；只有计时试戴表明镜片变深与恢复透明的速度足以适应每次转换、且不妨碍阅读植物标签和看清台阶时，才偏好 Photochromic。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_003",
            "text": "参加博物馆线索路线时，[X]会在近处印刷谜题与远处房间编号之间切换，又不想频繁换眼镜；如果分区边界能同时支持这两个距离，并且不干扰行走或观看中等高度展品，就会偏好 Bifocal。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_004",
            "text": "参加黄昏蝙蝠聆听步行时，[X]会在有标记的花园环线上把标有 Night Vision 的产品与普通透明镜片对比；只有实际路标、人脸和枝条边界更容易分辨，且没有误导性色偏或对黑暗环境的虚假信心时，才偏好这一功能。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_005",
            "text": "参加社区马赛克敲片活动前，[X]会寻找符合要求的防护眼镜；只有确认完整产品适用于该活动的认证、侧面覆盖、贴合度和无损状态后，才把 Impact Resistant 镜片作为必要偏好。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_006",
            "text": "冬季社区汤品分享会上，[X]要在室外迎宾桌与充满蒸汽的分餐室之间往返，并把碗上的名字送到对应桌位；如果每次由冷到暖时，姓名、台阶和汤勺位置都能保持可见，不必停下分餐流程擦镜片，[X]就会偏好 Anti-Fog 镜片。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_007",
            "text": "夜间地图折叠接力中，覆膜路线图会在队友之间轮转，头顶灯光位置固定；如果 Anti-Glare 镜片能让路线符号保持可读，无需反复倾斜地图或头部，同时线条颜色不产生误导性色偏，[X]就会偏好这一功能。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_008",
            "text": "使用一副 Mirrored 太阳镜一年后，[X]会在前往沙漠雕塑步道前用斜射光检查外表，并比较透过划伤区与完好区的视野，再根据反光层的可见磨损和养护负担决定是否继续选择这一功能。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_009",
            "text": "[X]在露天历史博物馆的农舍、花园和有顶工坊之间穿行时，记录一副已有 Photochromic 眼镜在每个门槛处的状态，并依据进入最暗房间后的恢复延迟，判断便利性是否足以抵消转换滞后。"
          },
          {
            "id": "BND_GLASSES_LENS_FEATURE_V7_010",
            "text": "在阳台育苗的一整个季节里，[X]会戴同一副 Bifocal 眼镜，在细小的种子包装说明、腰高花盆和阳台另一侧植物标签之间切换，并根据反复出现的视野盲区和头部姿势判断分区镜片是否仍值得偏好。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:frame_rim_type",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "frame_rim_type",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_01",
            "text": "[X]眼镜轻碰桌角后镜片从框边脱出，配镜师查看[X]旧架，发现另一种框边经历过更多碰撞仍保持固定；[X]据此决定更换结构。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_02",
            "text": "[X]长时间阅读后，新框边不断进入[X]注意范围，朋友递来常用旧架；换上后视野边界恢复熟悉，旧镜腿的磨损说明它陪过许多阅读日。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_03",
            "text": "[X]镜架损坏后，维修员说明不同框边的修复风险；他翻到[X]旧单，发现愿意反复维修并继续戴的结构一直集中，另一些只坏一次便退出。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_04",
            "text": "[X]化妆时，新框边总蹭到固定区域，化妆师换来[X]常用结构后无需补妆；旧工作照里同类框边一直与妆面保持相同关系。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_05",
            "text": "[X]孩子抓到镜片边缘，新结构很快变形，家中旧副被小手碰过更多次却仍完整；家人因此把旧框边继续留作亲子日常。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_06",
            "text": "[X]理发后发现碎发反复卡在新框边，换回带来的常用旧架，细发只落在表面，吹一下便清理干净。旧框边缘已有细密擦拭痕，镜腿也被长期折叠磨亮，发型师便不再替[X]套额外保护膜。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_07",
            "text": "[X]处方变化后镜片边缘厚度改变，配镜师建议换框边结构；[X]仍优先保留旧订单长期适应的固定与视觉重量，在可行范围内重做。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_08",
            "text": "[X]舞台灯在新框边上形成干扰反光，技术人员换来[X]旧演出架；框边已有修补，却在多场灯光中保持稳定画面。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_09",
            "text": "[X]失物台有几副相似眼镜，家人从框边结构先认出[X]那副；工作人员再根据镜腿长期弯曲确认。"
          },
          {
            "id": "GLASSES_FRAME_RIM_TYPE_PB_10",
            "text": "[X]快速活动中，新框边让镜片边缘在震动时不稳，教练换来[X]往季常用旧架；它虽有碰撞痕迹，镜片始终固定。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_001",
            "text": "处方更新导致镜片边缘明显更厚后，[X]需要一副用于日常佩戴并频繁放入镜盒的眼镜，因此偏好能环绕并支撑整圈镜片边缘、而不是让新厚度在部分位置暴露的结构。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_002",
            "text": "参加合奏读谱工作坊时，[X]要反复低头看谱、抬头看手势，希望镜片上方有稳固支撑，同时减少穿过谱面区域的可见下边界。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_003",
            "text": "为近景人生故事肖像录制做准备时，[X]希望眼睛和变化的表情成为主角，同时保留必要视力矫正，因此选择在处方和预期使用允许下，镜片周边可见五金最少的结构。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_004",
            "text": "在社区厨房帮忙给罐子贴标签时，[X]会在阅读小字、端托盘和短暂摘镜擦去蒸汽之间切换，因此偏好有完整边框、可在不触碰光学表面的情况下容易抓取的镜片结构。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_005",
            "text": "一次周末索引整理需要[X]长时间戴眼镜，也要频繁摘下以对照手持放大镜；只有上缘能提供可靠抓取与可维护结构、而缺少下缘又确实减轻重量时，[X]才会选择半框。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_006",
            "text": "在潮湿海岸进行家庭贝壳辨认时，[X]要在阅读图鉴卡和使用小放大镜之间切换，常常只能用带沙且潮湿的手摘下眼镜；[X]会偏好全框，因为连续边界既提供可靠握持位置，也能包住镜片边缘，前提是活动结束后整个边框仍容易冲洗干净。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_007",
            "text": "每周采购时，[X]会低头看购物车和包装标签，再抬眼看自助结账屏幕、付款终端与旁边等候的人。若开放的下框让这些向下视线少受边界打断，同时上框仍能在反复俯身查看购物车和低层货架后提供可靠的调整位置，[X]就会偏好半框。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_008",
            "text": "经过数个长时间交谈日，[X]佩戴同一副无框眼镜，并记录减少周边结构后的重量是否持续舒适，以及钻孔连接在正常摘戴和镜盒收纳后是否仍对齐。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_009",
            "text": "一副已有全框眼镜的边框螺丝松动后，镜片开始轻响，但完整边缘仍把它包住，使[X]能在清洁时听见异常并及时停戴；修复后，[X]把这种可察觉且受控的失效视为偏好全框的证据。"
          },
          {
            "id": "BND_GLASSES_FRAME_RIM_TYPE_V7_010",
            "text": "每天早餐时，[X]都会和一位很依赖观察说话者面部信息的家人交谈。一副已有的无框眼镜既提供视力矫正，又减少眼睛周围的可见线条；只有钻孔连接在日常摘戴后也能保持对位时，[X]才会继续偏好无框。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:frame_size",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "frame_size",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_FRAME_SIZE_PB_01",
            "text": "[X]在多屏工作台前来回移动视线时，新小框迫使头部跟着每次转眼移动；换回抽屉里的大框后，熟悉覆盖恢复，肩颈也重新放松。旧镜片从中心到边缘都有频繁擦拭留下的细痕，鼻托则已经压出固定位置。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_02",
            "text": "[X]做视功能训练时，治疗师需要在镜片上移动遮挡贴，同时给另一侧保留足够观察区域。大框让贴片位置可以逐步调整而不挤掉有效视野；常用旧片上几圈已经清理不净的胶痕，正对应训练记录里的不同阶段。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_03",
            "text": "[X]摄影师让[X]试小框后觉得面部气质陌生，换回大框便无需再调整构图；过去合作照片里眼周占比也一直相近。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_04",
            "text": "[X]处方变化后大框镜片边缘变厚，店员建议缩小，[X]仍在可接受重量内保留熟悉覆盖；旧订单显示度数变化时也做过相同取舍。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_05",
            "text": "[X]家人送镜架前避开以前那副小框闲置礼物，改选日常照片里的大框比例；新架几周后鼻托已有使用痕迹。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_06",
            "text": "[X]戴上工作头盔后，大框边缘不断碰到装备，主管换来[X]常用小框旧架；镜腿已有多次头盔压痕，却不干扰边缘。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_07",
            "text": "[X]化妆师发现大框遮住固定妆面区域，换成[X]常戴小框后关系恢复；旧工作照里眼周留白一直相近。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_08",
            "text": "[X]孩子总容易抓到大框边缘，家人把[X]常戴小框留作亲子日常；旧小框镜腿虽被碰弯过，镜片区域却较少被小手触及。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_09",
            "text": "[X]拍摄时大框不断触碰面部设备，技术人员换来[X]小框旧架；那副镜腿已经为设备位置调过几次，仍是团队固定方案。"
          },
          {
            "id": "GLASSES_FRAME_SIZE_PB_10",
            "text": "[X]失物台有大小两副相似眼镜，朋友立即指出小框属于[X]，说多年很少见[X]眼周被更大轮廓占据；镜腿磨损进一步确认。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_001",
            "text": "参加户外流星观测时，[X]会在较低位置的星图与头顶广阔天空之间反复切换，因此偏好能以更大可用镜片区域减少碰到镜片边缘的大尺寸镜框，同时要求仰视时不接触眉部。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_002",
            "text": "参加社区皮影活动时，[X]会在佩戴数种贴合头部的角色头饰与走出来招呼来宾之间切换，因此选择能避开头饰、并在演出间隙让面部表情保持开阔的小尺寸镜框。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_003",
            "text": "处方更新引入渐进镜片分区后，[X]会比较形状和鼻梁相同、垂直尺寸不同的镜框；只有增加的高度能给远、中、近三个区域提供可用纵深，又不让下缘压到脸颊时，才偏好 Large。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_004",
            "text": "每天早上，[X]会先戴好耳背式助听设备和眼镜，再开始家里的日常活动。若较小镜框更窄的外缘能给设备机身与导管留出空间，不把镜腿向外顶，同时仍保持瞳孔对位和所需矫正视野，[X]就会偏好小尺寸。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_005",
            "text": "参加社区瓷砖勾缝活动时，[X]需要把临时防护眼镜套在已有处方镜之外，并按内外尺寸比较套镜款式；只有大尺寸镜框能包住内层眼镜、不压镜腿、又不因空间过剩而晃动时，才偏好 Large。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_006",
            "text": "固定的家庭拼图晚上，[X]会戴近用眼镜看桌上的拼图片，同时又要越过镜框与房间另一边的人说话。若小尺寸镜框足够低，可以不反复摘镜就快速切换远近视线，同时近用区域仍有足够可用深度，[X]就会偏好小尺寸。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_007",
            "text": "手语故事分享圈中，[X]既要跟随讲述者的目光，也要看清不断进入脸侧与脸下空间的手部动作；如果大尺寸镜框提供的更宽可用镜片区域能减少侧看时漏掉的手势，同时仍避开眉毛和脸颊、也不会迫使更多转头，[X]就会偏好 Large。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_008",
            "text": "[X]把一副已有的小尺寸阅读镜放在折叠水彩盒的狭窄保护槽中；经过多次公园写生活动后，这副眼镜能随身携带且不挤占纸张或画笔，于是成为更换时继续选择紧凑尺寸的理由。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_009",
            "text": "筛分干燥花园堆肥时，[X]会重复使用一副已有的大尺寸防护眼镜，并在每次结束后观察飘散颗粒落点；宽大的镜框减少眼睛上方和侧面的暴露缝隙，又不妨碍对周边工具的察觉，因此[X]今后也偏好这一尺度。"
          },
          {
            "id": "BND_GLASSES_FRAME_SIZE_V7_010",
            "text": "乘坐夜间列车时，[X]会戴一副已有的小尺寸眼镜在睡前阅读，并发现侧身倚靠时其紧凑外缘较少碰到枕头；只要佩戴舒适且入睡前摘下，就愿意继续选择这一尺寸。"
          }
        ]
      }
    },
    {
      "id": "product_bound:glasses:price",
      "binding": "product_bound",
      "category": "glasses",
      "attribute": "price",
      "sampleSize": 2,
      "pools": {
        "A": [
          {
            "id": "GLASSES_PRICE_PB_01",
            "text": "[X]更新处方后第一次使用新的配镜报销额度，店里允许购买低于额度的眼镜，也能补差选择更高价组合。[X]调出几副鼻托已经换过多次的旧眼镜订单，按它们总价集中的区间完成配镜，未用完或超出的部分照常自行结算。"
          },
          {
            "id": "GLASSES_PRICE_PB_02",
            "text": "[X]的度数变化后，验光师给出继续用旧框、整副换新以及不同价位组合的报价。[X]没有只选最低总价，而是参照几副真正戴到镜腿松动的旧眼镜成交单，把新组合控制在同一价格带，再决定哪些部件保留。"
          },
          {
            "id": "GLASSES_PRICE_PB_03",
            "text": "[X]的眼镜被亲戚家孩子碰落损坏，家长坚持按最高预算赔偿。面对从基础款到高价款的完整目录，[X]只让对方承担自己几副常戴旧镜订单所在区间的替代品；新眼镜到手后，鼻托很快又留下日常佩戴痕迹。"
          },
          {
            "id": "GLASSES_PRICE_PB_04",
            "text": "[X]所在节目更新上镜规范，制作方第一次提供可自由使用的配镜额度，低于额度可以返还，超过也能自行补差。[X]翻看几季工作照并找出画面里真正反复出现的旧眼镜订单，按它们集中的总价选定新镜；交付后，这副眼镜也继续出现在[X]日常通勤中。"
          },
          {
            "id": "GLASSES_PRICE_PB_05",
            "text": "[X]旅行途中遗失眼镜，只能凭处方在陌生门店当天重配。店员拿出价格跨度很大的现货组合，[X]查看云端保存的旧配镜发票，在相同总价区间选了一副回家后也愿意继续戴的眼镜，而没有把它当成一次性备用。"
          },
          {
            "id": "GLASSES_PRICE_PB_06",
            "text": "[X]常戴镜架断裂，配镜师给出的维修费已接近换新，并列出不同总价的替代组合。[X]从眼镜盒夹层取出过去几副镜架的服务单，最终在那些被反复调校过的旧镜价位附近重配，而不是按本次维修费高低冲动升降档。"
          },
          {
            "id": "GLASSES_PRICE_PB_07",
            "text": "[X]走进换了店员的配镜店，新店员按外观拿来许多价格跨度很大的镜架。旧店员赶到后没有指定品牌，只调出同时有购买、换鼻托和紧螺丝记录的订单价位；[X]从这个区间试起，很快选定并留下新镜。"
          },
          {
            "id": "GLASSES_PRICE_PB_08",
            "text": "[X]为社区捐赠整理不再使用的备用眼镜，需要先按原价和状态登记。真正被戴到镜腿字迹模糊的几副集中在一个价格带，[X]保留其中仍合度数的一副；价格偏离的几副虽更新，却几乎没有鼻托压痕，全部进入捐赠箱。"
          },
          {
            "id": "GLASSES_PRICE_PB_09",
            "text": "[X]选好镜架后，新增镜片功能让整副眼镜跨入另一个价格层级。功能并非必需，[X]便把新总价与几副已经换过镜片的旧眼镜发票比较；只有调整回那个反复配戴过的价格带后，[X]才确认订单。"
          },
          {
            "id": "GLASSES_PRICE_PB_10",
            "text": "[X]参加居家试戴服务，押金允许从多个价格层级留下任意一副眼镜。试戴期结束时，[X]留下的不是最便宜或标价最高的一副，而是落在几副旧眼镜成交价集中的区间；退回包装里其余镜架仍没有连续佩戴形成的鼻托印。"
          }
        ],
        "B": [
          {
            "id": "BND_GLASSES_PRICE_V7_001",
            "text": "拿到新处方后，[X]会先固定总额，依次核算必需处方镜片、镜框贴合和可选处理；如果装饰溢价会迫使必需矫正妥协，就偏好价格适中的镜框。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_002",
            "text": "由于本地维修店更换断裂镜腿需要数天，[X]会比较把眼镜预算全部用于一副高价镜，还是购买一副可靠主镜加一副基础备用镜，并为避免数日没有可用矫正眼镜赋予实际价值。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_003",
            "text": "在一笔会于计划期末到期的固定眼镜福利下，[X]会比较可报销镜框、镜片自付额、非合作商家返还和以后调整费用，并依据最终自付金额而非商家标价判断方案。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_004",
            "text": "为偶尔遇到强光的电车通勤，[X]会比较兼容夹片与独立处方太阳镜，并核算重复处方、收纳、更换和每月预计使用次数，再决定便利性是否值得第二副眼镜的溢价。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_005",
            "text": "为一次化装舞会，[X]会比较购买装饰性无度数眼镜、从服装道具库借用合适款式和支付可退押金；如果说不出之后的使用场景，就不会接受高额购买价。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_006",
            "text": "一副已有镜框出现铰链松动后，[X]会把书面维修报价及镜框其余状态与整副更换价格比较；只有维修能在明确期限内恢复可靠使用，并保留仍符合处方的镜片时，才接受维修费用。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_007",
            "text": "两副已有镜片的涂层都在明示保障期内失效并获得免费更换后，[X]会在下一份报价中重视条款清楚的保修，但把可接受溢价限制在实际避免的更换费用以内。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_008",
            "text": "在小船活动中丢失两副具体太阳镜后，[X]会根据这段明确遗失记录设定替换价格上限，并比较中等价眼镜加可靠固定带，与价格更高却无法降低主要遗失机制的另一副眼镜。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_009",
            "text": "处方变化而一副已有镜框仍合身并通过检查时，[X]会比较只换镜片与购买整副眼镜，并把拆片风险、调整和服务保修计入，而不预设复用一定更便宜。"
          },
          {
            "id": "BND_GLASSES_PRICE_V7_010",
            "text": "假期中主眼镜损坏后，一副已有备用镜避免了整周没有矫正眼镜的情况；[X]会把这段具体连续使用价值转化为下一次预算规则，为简单备用镜预留一部分，而不是把全部金额投入一副升级镜框。"
          }
        ]
      }
    },
    {
      "id": "non_product:tops:color",
      "binding": "non_product",
      "category": "tops",
      "attribute": "color",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "TOPS_COLOR_NP_01",
            "text": "[X]和家人拍合照前临时换了站位，妹妹仍把一处靠近[X]脸和肩膀的颜色留给[X]，笑说家里每次洗照片都能凭那片色调先认出[X]。"
          },
          {
            "id": "TOPS_COLOR_NP_02",
            "text": "[X]陪孩子画“家里的人”时，孩子给[X]肩胸处涂上一种熟悉的颜色；翻到前几本画册，同一个位置早已被涂成相近色调，[X]既意外又觉得确实像自己。"
          },
          {
            "id": "TOPS_COLOR_NP_03",
            "text": "[X]在光线昏暗的视频会议里短暂离开座位，回来时同事只看到肩部一角便认出了[X]，还顺口提到团队录屏里这一类颜色几乎成了[X]的固定标记。"
          },
          {
            "id": "TOPS_COLOR_NP_04",
            "text": "[X]取晾干的衣物时发现肩胸附近被邻件轻微染了色；家人以为[X]会懊恼，[X]却觉得新色比原来更愿意贴近脸部，还想起自己曾把两次类似染色留下继续穿。"
          },
          {
            "id": "TOPS_COLOR_NP_05",
            "text": "[X]出门前发现靠近领口的位置沾到粉底，时间只够遮盖或换掉；朋友递来的遮色方案正是[X]平时最常让脸色舒服的方向，[X]没有再看其他选择便处理好继续出门。"
          }
        ],
        "B": [
          {
            "id": "NP_TOPS_COLOR_V10_001",
            "text": "十七年来，[X]一直用家里同一口搪瓷染锅给褪色的带领口、带袖衣物重新上色。旧衣放进染液以前，[X]会拿出从旧袖口内侧留下的一小块未褪色布样，对着它调整配比，直到颜色回到熟悉的范围。面料和衣物轮廓不断变化，染好后挂起晾干时，肩部和袖面的颜色却一次次落在相近的色调里。之后它们会继续被穿到袖口再次变浅，最新留下的内侧布样又会放进信封，留给下一锅使用。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_002",
            "text": "十一年来，[X]一直与一只浅奶油色的长毛猫共同生活。大多数日子里，[X]都会把它抱到胸前，梳毛时它还会沿着一侧前臂趴好。掉下来的细毛会留在肩部、袖子和前身，直到[X]发现后再清理。落在[X]反复穿的那组颜色上时，零散毛发不会把上身的大块颜色切得很明显，衣物也能继续穿过一天，不必立刻更换；多年替换下来，袖口和胸前都留下了这套日常动作造成的磨损。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_003",
            "text": "十二年来，[X]大多数早晨都会坐在同一扇窗边梳头、涂面霜。镜子里，领口下方的一大片颜色会把一点光反到下巴和脸颊下侧。有些颜色让[X]愿意转过脸再多看几眼，另一些映上来的色调则怎么都不喜欢。窗边看着顺眼的那些会继续穿过当天，直到领口和袖口慢慢变软。某一件穿坏后，替换的新衣也会在这扇窗边度过几个普通早晨，才进入那排经常穿用的衣物。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_004",
            "text": "十年来，[X]有些偏头痛发作以前会先出现视觉预兆。那段时间里，只要[X]低头，领口以下的大块颜色就一直停在视野下缘；容易反光或过于明亮的色块，会让闪动更难忽略。[X]会尽早换成在这部分视野里更安静的那组颜色，并常常继续穿完当天。多次替换下来，这组衣物的领口和前臂逐渐磨软；每次刚出现预兆就被换下的颜色，则一直没有多少穿用痕迹。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_005",
            "text": "九年来，[X]每天都会把同一枚小小的银色医疗识别牌戴在领口下方。家里人会不时站在门口看看，能不能隔着几步在胸前的大块颜色上迅速找到它，不需要让[X]抬起或挪动识别牌。在日常轮换的那组颜色上，固定的银色形状一直很容易辨认；接近银色的浅色底上，边缘则会消失。真正采用的衣物会在识别牌下方留下淡淡的摩擦痕，领口也逐渐变软；替换物剪掉吊牌以前，还要经过同样的门口查看。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_006",
            "text": "十二年来，[X]每天都会穿同一种深色支撑内层，覆盖肩部和胸前。转身或伸手时，一小段固定的深色上缘总会露在带领口或袖子的衣物内侧，除非更换支撑内层，否则无法完全遮住。[X]会请一位亲近家人隔着几步观察，再留下能让这道深色窄边顺着领口连在一起、不会把胸前切成两块强烈反差的外侧颜色。真正采用的那组会逐渐磨软领口、在肘部留下折痕；替换物也要罩在同一件固定内层外面检查，之后才进入日常穿着。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_007",
            "text": "[X]从小就在一侧颈部到锁骨处有一片稳定的红紫色胎记。十五年来，每周有几个晚上，一位亲近家人会帮忙在边缘涂护理用品，先把穿着中的领口轻轻拉开，之后再放回胎记旁边。衣物不断更换，[X]却总会留下在胎记旁看着顺眼、不会让边界突然变得刺眼的那些颜色。那一组的领口会被穿得柔软，还留下很淡的护理用品痕迹；替换衣物也要在不变的胎记旁穿过几个普通日子，[X]才会留下。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_008",
            "text": "十三年来，[X]和一位尺码相近的家人共用同一个衣柜，也会偶尔一起添补穿旧的带领口或带袖衣物。两人可能选择相近的轮廓，却各自总会回到不同的大块颜色，只看折在外面的袖子或肩部就能分清是谁的，不用翻找标签。家人站在门口也能把正确的那件递给[X]，[X]所在的那一侧逐渐排满领口、袖口已经穿软的相近颜色。某种新颜色若在家里反复引起拿错，下一次添补时就不会继续出现。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_009",
            "text": "十年来，[X]大多数周末都会和亲近家人一起经过人多的公共场所。出门前，[X]通常会从领口和袖口已经穿软的那组熟悉颜色里拿一件，家人也会自然记住当天肩部、胸前连成的大块颜色。彼此一时看不见时，他们会先在腰部以上寻找这个颜色，常常隔着几排人、还没看清脸就先找到[X]。回家后，衣物仍会照常进入日常轮换；替换物也要在人群里同样容易找到，[X]才会留下。"
          },
          {
            "id": "NP_TOPS_COLOR_V10_010",
            "text": "十二年来，每当心里发紧或坐立不安时，[X]都会下意识捻着袖口，把前臂收回胸前。这个动作会让袖面和胸前的颜色进入低头时很近的一小片视野。家人很早就发现，在那组安静、柔和的颜色里，[X]的手会慢慢松开，衣物通常也会从早穿到晚；过于明亮、一直抢眼的颜色则常在半天内被换掉。普通日子一周周过去，衣物也换了许多件，[X]常留下的那些颜色总会在手指反复捻过的袖口边缘先磨薄。"
          }
        ]
      }
    },
    {
      "id": "non_product:tops:style",
      "binding": "non_product",
      "category": "tops",
      "attribute": "style",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "TOPS_STYLE_NP_01",
            "text": "[X]参加多年未见的同学聚会时，有人从背后只看见肩线和上半身轮廓便叫出[X]的名字；转过身后，大家笑说[X]的生活变化很大，身上的那股气质倒一点没认错。"
          },
          {
            "id": "TOPS_STYLE_NP_02",
            "text": "[X]换发型前，发型师请[X]带几张平日照片；翻到不同年份时，发型师注意到脸侧到腰间总有相似的造型语气，于是没有照搬流行模板，而是把新发型留在那种气质能够接住的范围里。"
          },
          {
            "id": "TOPS_STYLE_NP_03",
            "text": "[X]参加家庭主题拍摄时，亲友都按统一要求准备造型，[X]却仍在肩部、领口和整体轮廓上保留自己的处理；摄影师把几年前的家庭照翻出来，发现[X]当时也用过同样的办法。"
          },
          {
            "id": "TOPS_STYLE_NP_04",
            "text": "[X]行李延误后到朋友家临时借当天要穿的东西，朋友没有让[X]翻柜子，而是直接挑出肩线、领口和细节最像[X]平日气质的一件；[X]穿上后，同行人也觉得毫不突兀。"
          },
          {
            "id": "TOPS_STYLE_NP_05",
            "text": "[X]街头画师完成半身速写后，[X]觉得肩颈附近的处理过于陌生；画师看了[X]手机里几张随手照片，删去几处细节、调整轮廓后，画像立刻更像本人。"
          }
        ],
        "B": [
          {
            "id": "NP_TOPS_STYLE_V10_001",
            "text": "十八年来，[X]一直保存着在家缝制日常带领口、带袖衣物时用过的纸样。纸样袋上的日期、尺码和面料不断变化，领形、肩线、袖口、拼接位置以及可见装饰的多少却总有熟悉的选择反复出现。有几份纸样还和补过多次、一直穿到布料变薄的旧衣放在一起。描画新尺码时，[X]会先把以前最常用的那份压在纸上，照着熟悉的线条组合重新画好，再开始裁布。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_002",
            "text": "十二年来，[X]一直在镜子旁放着一本小册子，记录需要在家试穿的网购衣物。每一页都会写下领形、肩线、袖形、可见结构，以及它是在一周内退回，还是进入了日常穿着。退回的候选差异很大，真正留下的却反复出现相近的组合；后来的记录里，还有几次袖口修补和领口磨软的痕迹。再次下单以前，[X]会把册子翻到这些旧记录旁，再拿一件真正穿旧的衣物比较尺寸和细节。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_003",
            "text": "十六年来，[X]大多数星期都会有好几天佩戴同一枚继承来的金属别针，并把它换到不同的干净衣物上。别上以前，[X]会看领口边缘、肩缝、拼接、袖部线条和周围细节怎样衬住这个小物件。最常使用的衣物会在固定位置留下加固过的小针孔和很淡的褪色，同时袖口与领口也已经磨软。试替换衣物时，[X]会把熟悉的别针先固定好，照常穿满一天，再决定是否放进日常轮换。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_004",
            "text": "随着记忆变得不再稳定，六年来一直有一位亲近家人协助[X]早晨穿衣。家人会把三件干净的带领口或带袖衣物放在伸手可及的位置，并不先作介绍。[X]总会摸过领部、肩缝、袖口和可见细节，再挑出与抽屉里那些穿旧衣物相近的组合。被选中的会一次次回到洗衣篮，领口和肘部也慢慢变软；不熟悉的结构则常常仍整齐地叠着。需要替换时，家人会以穿旧的那一排为参照，而不是照着没怎么动过的那一排。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_005",
            "text": "[X]肩部和胸前的大片图案已经保留了十一年，每天早晨都会在周围涂保湿和防晒用品。面对带领口和袖子的衣物，[X]总会留意领口、袖缘、肩缝和可见装饰是露出、框住，还是完整盖住图案。最常穿的那些会沿着一组相近的线条逐渐变软，同样的边界上也留有很淡的护理用品痕迹。最近一次补色时，纹身师能沿着这些痕迹指出衣物平常落在哪里；之后等护理用品吸收，[X]再试替换衣物，留下的仍是轮廓看起来熟悉的组合。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_006",
            "text": "因为[X]不容易分辨某些颜色，十四年来，每逢需要添补衣物时，常有一位亲近朋友陪同。朋友不会只报颜色，而会描述领形、肩线、袖形、拼接、装饰，以及隔着几步能看见多少细节。[X]会亲手摸过结构，在朋友面前走动，再自己作出选择。回家以后，真正把袖口和领口穿得柔软的那些，反复出现相近的线条，颜色却差异很大；再次需要替换时，朋友如今会先从这些熟悉的结构说起。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_007",
            "text": "十年来，[X]一直把不再留用的带领口、带袖衣物送到同一家社区寄售店。店员收下以前，会查看袖口磨损、修补过的接缝和变软的领口，再把领形、肩部结构、袖部线条和可见细节与[X]以前送来的衣物比较。颜色、面料和具体衣物不断变化，店员却通常能指向一小排看起来很可能适合[X]的候选。只有从这排带走、后来又真正穿旧并送回店里的衣物，才会接上这段记录；几乎没碰过的尝试不会重新出现在[X]的寄售物中。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_008",
            "text": "一次水管漏水浸到衣柜以后，[X]和保险理赔员把受潮的带领口、带袖衣物铺在干净床单上，逐件记录哪些可以清洗，哪些需要替换。颜色、面料和使用年限差异很大，袖口已经磨软、过去也修补过的那些，却反复出现熟悉的领形、肩线、袖形和细节多少。[X]先把这些旧衣挑出来送去专业清洗。接下来的两年里，真正进入日常穿着的新衣又出现了相近的结构和磨损，几件看起来很不一样的替代品则几乎没被动过。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_009",
            "text": "十六年来，[X]一直在日常交流中使用手语。双手抬起时，肩线、袖形、袖口和可见细节都会跟着进入双方的视野，因此试替换衣物时，[X]会对着一位熟悉的朋友打出同一段常用表达。朋友看着整个上身的动作，很快就能看出这身线条是否像[X]平常的样子。这样试过并留下的衣物，后来会被穿出柔软的肘部、修补过的袖口和领口周围的使用痕迹；再次试替换物时，[X]也会带上一件这样的旧衣。"
          },
          {
            "id": "NP_TOPS_STYLE_V10_010",
            "text": "十三年来，同一群朋友一直轮流到彼此家中相聚，进门时会把带领口、带袖的外层一起放在拥挤的衣帽架上。晚上散场，一位朋友往往不用看内侧标签，只凭领形、肩部结构、袖口和可见细节的多少，就能把属于[X]的那件递过来。颜色、面料和具体衣物已经换过许多次；一次次被认出的，也都是[X]真正把领口和肘部穿得柔软的那些。有一件和平常很不一样的尝试曾让大家在衣帽架前犹豫，却再没有带着相同的磨损回来。"
          }
        ]
      }
    },
    {
      "id": "non_product:tops:season",
      "binding": "non_product",
      "category": "tops",
      "attribute": "season",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "TOPS_SEASON_NP_01",
            "text": "[X]早晨准备出门时收到父亲发来的天气提醒，内容不是温度数字，而是让[X]记得肩臂该留多少覆盖；父亲仍沿用小时候就熟悉的说法，[X]照做后一路都很舒服。"
          },
          {
            "id": "TOPS_SEASON_NP_02",
            "text": "[X]办公室突然换了空调模式，[X]从抽屉里取出肩背用的备用层，同事笑说每到这个时节那一格就会重新装满，而天气转过去后又会自然清空。"
          },
          {
            "id": "TOPS_SEASON_NP_03",
            "text": "[X]回老家看到门后历年量身高的照片，画面里肩臂覆盖总在相近月份发生同样变化；母亲拿出当天需要的厚薄时，[X]发现家人仍准确记得自己的季节体感。"
          },
          {
            "id": "TOPS_SEASON_NP_04",
            "text": "[X]看到阳台风变大后，肩背那一层在晾晒时需要多加一个夹子，穿到身上却正好挡住最近开始在意的凉意。邻居隔着阳台递来的正是那只夹口已经磨松、侧面写着[X]名字的旧夹子；[X]夹好后仍把这一层留在最先取到的位置。"
          },
          {
            "id": "TOPS_SEASON_NP_05",
            "text": "[X]在熟悉的换乘通道里感到手臂表面发凉，走到出口前便把肩部覆盖调整到舒服的位置。同行人看见这个动作，已经替[X]避开出口旁最强的穿堂风；那一层靠近手臂的边缘被反复抓取，触感明显比其他位置柔软。"
          }
        ],
        "B": [
          {
            "id": "NP_TOPS_SEASON_V10_001",
            "text": "十五年来，普通的暖热日子里，[X]的腋下和上背就很容易出汗。每天晚上换下衣物时，[X]都会摸一摸袖子下面和两肩之间的布料，看看哪里一整天都贴着皮肤，哪里的潮气已经散开。最热的几个月里反复拿取的那一组，会在腋下留下浅淡的盐渍或止汗用品痕迹，上背也最先被穿软；更厚实的则一直整齐叠着。添补这组旧衣时，[X]会把替换物照常穿满一天，再检查相同位置，而不是只凭新面料刚贴上皮肤的一点凉意。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_002",
            "text": "十二年来，[X]大多数日子都会准备家里的晚饭，而且一直穿着早晨选好的衣物。饭做好以前，灶台和打开的烤箱会不断把热气送到胸前、肩部和前臂。能在这段每天都会升高的温度里保持舒服的带领口或带袖衣物，会一直穿到晚饭以后，袖口也因频繁使用逐渐变软；更厚的那些常在做饭前就被脱下，慢慢从日常那一排里消失。试替换物时，[X]也会选一个照常做晚饭的普通日子。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_003",
            "text": "九年来，[X]大多数工作日都会走同一条两段公交路线，先在露天站台等车，再在有温控的车厢里停留约四十分钟。最热的几周，身体从日晒进入强冷气；最冷的几周，则在暖车厢与室外冷空气之间反向切换；天气温和但多变的月份，一天里两种情况都可能遇到。外套可以敞开或脱下，里面带领口和袖子的衣物却始终贴着肩臂经历这些变化。连续几年下来，每段天气里真正好用的那一组会先把袖口穿软，判断失误的则常在一次难受的行程后留在抽屉里。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_004",
            "text": "十二年来，偏冷的空气一碰到[X]的咽喉和胸前，就容易引起发紧和干咳。每年天气转凉以后，出门前[X]都会看带领口、带袖衣物怎样落在颈部、胸前、肩部和背部，再留意到了室外会不会开始咳，回到室内后同一件又会不会闷得难受。清凉和真正寒冷的几周里反复穿用的那一组，领口与肘内侧已经逐渐变软。替换衣物要经过几次普通出门，呼吸一直安稳、进屋又不过热，[X]才会留下。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_005",
            "text": "十一年来，每到同一段潮湿月份，[X]居住的小区除了长时间闷热，还会偶尔短暂停电。家里人早已知道[X]整段时间反复穿的是哪一排带领口或袖子的衣物。风扇停下以后，有些仍能穿过无风的晚上，有些却在几分钟内就从颈部和上背黏住，只能脱下。恢复供电后，真正舒服的那组仍继续用于普通日子，肩部因频繁穿用逐渐褪色；替换物既要经过平常的湿热，也要经历至少一个没有冷气的晚上，才会放进这一排。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_006",
            "text": "十八年来，每当天气变化，[X]的肩部、上胸和背部总比家里其他人更早觉得凉。早餐桌边，家人已经很熟悉[X]把袖口拉过手腕、把领口往颈部拢，或将两只前臂贴紧身体的动作。天气从清凉逐渐转冷时，同几组带领口和袖子的衣物会陆续出现在[X]旁边的椅背上：起初单独穿着就舒服，之后则穿在外套下面。替换衣物要经过几个普通早晨，才会在这把椅子上留下位置。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_007",
            "text": "十三年来，每到树木和草类集中散粉的几周，空气里的花粉都会明显落在[X]的肩部和袖子上。回家以后，[X]会在门边脱下最外面那件带领口或带袖衣物，再看看颈部和前臂有没有开始发痒。那段温和天气里反复使用的一组，既能把花粉隔在皮肤外，又不会让上背出汗，肩部布面还因为经常掸扫而逐渐发浅。替换衣物要经过几个完整的普通日子，[X]才会把它加入门边那一排。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_008",
            "text": "十年来，[X]一直在同一座城市的两个住所之间按周轮住。一个在向阳的高层，下午很快就会升温；另一个位于背阴的底层，即使街上温和，屋里也一直偏凉。[X]会把同一小组带领口和袖子的衣物带来带去，看看哪些能在两个地方都舒服地住满一周。室外天气随一年变化，不同的衣物组会轮流出现，真正反复使用的领口和袖口逐渐变软；替换衣物也要分别去过两个住所，[X]才会在随身包里给它留下固定位置。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_009",
            "text": "十二年来，[X]肩部到上胸有一大片皮肤在紫外线强的时段很容易发红。早晨预报升高时，[X]会看带领口或袖子的衣物怎样盖住这片位置，普通一天结束后再检查有没有热疹、潮湿或新的泛红。强日照最集中的几个月里反复使用的那一组，既能保护皮肤，又不会积住太多热气，肩部布面也因持续穿用渐渐发浅。替换衣物要经过几个预报较高的完整日子，皮肤仍保持同样安稳，[X]才会留下。"
          },
          {
            "id": "NP_TOPS_SEASON_V10_010",
            "text": "十四年来，[X]每周有一个晚上参加社区合唱，并一直穿着早晨选好的那件带领口或带袖衣物。九十分钟站立、深呼吸和唱歌以前，外套会脱下，贴着颈部、胸前、背部和手臂的这一件则继续穿着。暖热月份里，[X]会感到积热和潮湿；寒冷月份里，刚到时很凉的房间又会随着人声逐渐变暖；天气多变的月份，一次排练中舒适感也可能反转。能适应各自那段天气的衣物会回到普通轮换，肘部和领口慢慢变软；替换物要完成几次从白天到排练结束的完整穿用，[X]才会留下。"
          }
        ]
      }
    },
    {
      "id": "non_product:tops:has_hood",
      "binding": "non_product",
      "category": "tops",
      "attribute": "has_hood",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "TOPS_HAS_HOOD_NP_01",
            "text": "[X]推着婴儿车遇到骤雨时双手无法松开，肩后随身结构能立即覆盖头颈，[X]没有停步便走到屋檐下；同行家长说几次接送碰到坏天气，[X]都是这样处理。"
          },
          {
            "id": "TOPS_HAS_HOOD_NP_02",
            "text": "[X]把婴儿背带扣到肩背后，[X]的后颈保持平整，没有附加层卡在背带上缘。伴侣已经能一次调好带子，因为此前多次接送中，[X]都让这一处保持同样简洁。"
          },
          {
            "id": "TOPS_HAS_HOOD_NP_03",
            "text": "[X]空旷场地起风后，[X]从肩背处拉起一层覆盖住头颈，结束时边缘已有风吹日晒形成的浅色差；搭档说那处痕迹每个工作季都会更明显。"
          },
          {
            "id": "TOPS_HAS_HOOD_NP_04",
            "text": "[X]做好需要完整露出后颈的发型后，[X]检查肩后没有会压住轮廓的附加层；发型师说每次做这种造型，[X]都会提前保证这里保持简洁。"
          },
          {
            "id": "TOPS_HAS_HOOD_NP_05",
            "text": "[X]乘坐夜间列车时，熄灯后邻座阅读灯仍从侧上方照来，便把肩后的连体覆盖翻到头上挡住光线，靠着车窗继续休息。同行人没有再找眼罩，只帮[X]把压在背后的边角拉平；那一圈经常被手指抓取的位置已经磨得柔软。"
          }
        ],
        "B": [
          {
            "id": "NP_TOPS_HAS_HOOD_V10_001",
            "text": "十二年来，[X]一直住在四季都常有短时阵雨的海边城市。门边挂钩上常年放着小伞、帽子和几件带袖、前身开合的外层。出门前，[X]会看当天穿的外层领后有没有帽兜，再决定是否从挂钩上取走帽子或小伞。多年下来，常被拿起的那个边缘已经磨得柔软，另一个多半还原样留在挂钩上。旧外层穿坏更换时，[X]又会照旧整理好门边的组合。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_002",
            "text": "九年来，[X]头皮大部分地方的头发都很稀少，对日晒、风和凉空气的变化很快就有感觉。早晨涂好护理用品后，[X]会穿上带领口和袖子的外层；只要头皮开始觉得暴露，走到门口便会把连在领后的帽兜拉起来。熟悉的边缘在手指反复提起的位置已经变软，内侧也留下很淡的护理用品痕迹。具体的外层穿坏更换过，替换衣物要等帽兜能顺着头皮落下、不擦到刚护理过的皮肤，才会进入日常那一排。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_003",
            "text": "十三年来，[X]几乎每天早晨都会把长发盘在脑后较高的位置。穿上带领口和袖子的外层后，领后的帽兜不是堆在发髻下面，就是把领口向前顶，束绳末端也容易在[X]整理头发时勾住。几件衣物的袖口已经穿出痕迹，帽兜却仍保留着原来的折线，边缘几乎没被碰过。[X]还把几件其他地方都很舒服的旧衣送去拆掉帽兜；替换衣物则会在头发盘好后先试，再决定是否进入日常轮换。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_004",
            "text": "十多年前的一次旧伤，让[X]的后颈根部一直不耐受长时间受压。领口后方聚着的帽兜就算没有拉起来，也会整天落在同一处；束绳通道或双层接缝还会让压感更明显。[X]已经把几件其他部位都穿得很旧的带领口、带袖衣物送去拆开领后，去掉多余布料。改平的领后继续被穿得柔软；决定把新衣留下以前，[X]也会先让领后贴住这个位置仔细感受。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_005",
            "text": "十一年来，[X]每次出门都要使用手杖。定期做平衡练习时，[X]会分别戴上贴合的独立帽子，或拉起带领口、带袖外层上的帽兜，同时练习转头、跨过门槛，并让一只手始终握住手杖。[X]会留意能不能不停下来就调整遮盖，也会看布料是否挡住侧方视野。后来真正每天使用的那一种，边缘逐渐被手摸得柔软；每次更换外层，[X]也会先做完这些动作，再把它放到门边常穿的位置。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_006",
            "text": "十二年来，[X]大多数日子都会坐进同一个已经仔细调好的驾驶座。肩带扣好以后，领后没有拉起的帽兜仍可能堆在后颈和头枕之间，把领口向前顶，车还没开动就让[X]反复挪动。几件其他地方已经穿得很旧的带袖衣物后来拆掉了这层多余布料，平整的领后贴住头枕时，不再需要重新调整。决定是否留下替换衣物以前，[X]会坐进停好的车里，扣好肩带，再把头向两边转一转；真正进入日常那一排的，领后都像那些熟悉的改过旧衣一样安稳。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_007",
            "text": "多年来，身边的人声和动作一下子多起来时，[X]很容易紧绷。把领后的帽兜拉起来，两侧柔软的边缘会挡去余光最外侧的一些晃动，也让两边同时涌来的声音缓和一些。[X]常常只用拇指抵住一侧，不必用双手捂住耳朵。几件常穿的带袖衣物上，拇指常抵住的位置已经被摸得发亮，还重新缝过边；替换衣物剪掉吊牌以前，[X]也会先拉起帽兜，看看两边落在脸侧的什么位置。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_008",
            "text": "十五年来，[X]每天早晨穿衣前，都会用熟悉的方式包好头巾。穿上带领口和袖子的外层后，[X]会留意帽兜罩在头巾外面时，能不能顺着落下而不掀动后颈的折层，转头时又会不会勾住并拉扯布边。真正进入日常穿着的那些，袖口变软的同时，领口或帽兜接触头巾的位置也留下了摩擦痕迹；另一些从未用过的帽兜仍保留着原来的折线。试替换衣物以前，[X]会先照常包好头巾，再把头部各个方向都转一遍。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_009",
            "text": "九年来，[X]一直与家人共用一个很浅的衣柜，把日常穿的带领口、带袖衣物叠成一排，放在伸手就能够到的位置。聚在领后的帽兜会把整摞顶得一边高一边低，滑进旁边那摞，还会在[X]抽取时盖住下面一件。[X]起初试过把帽兜单独折好，后来又把几件从来不用的帽兜拆掉，保留其他地方都合身的衣物。改过的旧衣继续被取出、穿着、叠回，直到边缘洗得褪色；替换衣物分到这一排以前，[X]如今都会先看领后。"
          },
          {
            "id": "NP_TOPS_HAS_HOOD_V10_010",
            "text": "十四年来，[X]大多数日子出门都会背着装有物品的双肩包。两根肩带落在带领口、带袖外层的肩部以后，帽兜可能安稳地露在肩带上方，也可能被压在后颈，必须先卸下一侧肩带才能拉起，束绳末端还可能夹进织带。最常穿的外层都在肩部留下了肩带磨出的亮痕，同时伴着经常触碰的帽兜边缘，或一片平整的领后。试替换衣物时，[X]会把装好的双肩包也背上，走动一会儿再决定是否留下。"
          }
        ]
      }
    },
    {
      "id": "non_product:tops:has_pockets",
      "binding": "non_product",
      "category": "tops",
      "attribute": "has_pockets",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "TOPS_HAS_POCKETS_NP_01",
            "text": "[X]站着协调活动时，胸腹附近的固定位置能随手收回笔、门卡和流程纸，[X]无需离开现场；新同事照着[X]已经形成的取放顺序递东西，很快跟上节奏。"
          },
          {
            "id": "TOPS_HAS_POCKETS_NP_02",
            "text": "[X]公开出镜前检查胸腹轮廓，那里没有任何开口或鼓起，设备和随身物都已按团队熟悉的方式移到腰后；造型师无需提醒便沿用以前的固定方案。"
          },
          {
            "id": "TOPS_HAS_POCKETS_NP_03",
            "text": "[X]抱着哭闹的孩子时双手被占满，胸前可及位置仍能让[X]抽出纸巾和小贴纸；孩子已经知道安抚物从哪里出现，会主动把手伸向同一处。"
          },
          {
            "id": "TOPS_HAS_POCKETS_NP_04",
            "text": "[X]扣紧摄影背带后，胸腹处保持平整，没有袋体被肩带压住，所有小工具都落在腰侧模块；拍摄搭档按老习惯直接把电池递向腰边。"
          },
          {
            "id": "TOPS_HAS_POCKETS_NP_05",
            "text": "[X]调整便携医疗设备时，把主机固定在躯干附近的专用收纳处，导管长度正好不会牵扯；复诊护士看到边缘磨痕，确认[X]仍在使用此前训练过的携带方式。"
          }
        ],
        "B": [
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_001",
            "text": "十四年来，[X]一直把带领口、袖子和前身开合的旧衣物送到同一家改衣店。修补面料以前，裁缝会先问胸前或肋侧的夹层是要恢复并加固，还是拆掉开口与叠层、重新收成平整前身。面料和破损位置不断变化，[X]给出的处理方向一直相同，裁缝如今在[X]到店前就能准备好相应纸样。改好的衣物会重新进入日常穿着，直到袖口、接缝或扣合处再次需要处理。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_002",
            "text": "十一年来，每当需要看近处的字，[X]都会戴上一副小巧的折叠阅读镜，用完合起，再放回上胸一侧同一个开口。看完手边的字以后，[X]常会立刻抬头说话或继续走动，这个收起再取出的动作在普通一天里也会发生许多次。熟悉的开口不用低头就能摸到，边缘也在许多带领口或袖子的衣物上围着同一种细长轮廓慢慢变软。一件穿旧以后，[X]接着拿取的替换衣物，仍会让折叠镜回到胸前这个高度。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_003",
            "text": "十四年来，[X]大多数日子都会在早餐后在家练大提琴。运弓时，琴身上缘会贴着胸前和肋侧；落在这里的空夹层、开口或下角容易堆起、摩擦，偶尔还会碰到琴身发出轻响。[X]一次次选择能让前身在整段练习里保持平整的带领口或袖子衣物，之后也会继续穿过当天。多年下来，运弓一侧的袖口和领口逐渐变软；替换衣物也要先经历同一个普通早晨的练习，才会加入常穿那一排。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_004",
            "text": "[X]使用前臂拐杖已经九年，移动时双手和前臂都会被占用。交通凭证、小手机和钥匙，曾分别放进胸前或肋侧衣物夹层，也试过放在独立挂袋里。[X]很清楚每种放法多久能拿到东西、拐杖袖带会不会勾到开口，以及装入物品后布料一整天会从哪里被拉扯。带领口或袖子的常穿衣物磨旧更换时，[X]仍会照着多年的习惯选好夹层或挂袋，再把小物逐一放回固定位置。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_005",
            "text": "[X]每天使用带有躯干定位带的轮椅。几次重新适配座椅时，[X]都穿着不同的带领口和袖子的衣物，让适配者标出胸带与侧带经过布料的位置。夹层若落在受压线上，容易堆起或让边缘抵住肋部；若完整落在带子外侧，又能让[X]不必俯向低处的包就拿到东西。适配者会记下[X]坐满一天后仍然舒服、伸手也方便的版本；带子位置调整或常穿衣物磨旧更换时，再照着这些标记定位。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_006",
            "text": "因为视力有限，多年来[X]一直给日常小物保留固定的触觉位置。[X]会从领口向下摸，在上肋部找到同一高度的开口，不用翻包就能分辨交通卡和小型语音设备。常穿衣物的开口边缘已经被手指摸得柔软，替换衣物则会贴着[X]的身体做标记，再在相同高度加上开口。改好后，[X]会先用手确认位置，随后才让它进入日常穿着。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_007",
            "text": "十一年来，手部疼痛一直让[X]难以处理小包上的细扣和窄拉链。上肋部的宽开口可以用手掌侧面推开，[X]不需要精细捏取就能拿到用药卡和钥匙。最常用的开口边缘已经磨浅，下角也加固过不止一次。带领口或袖子的衣物需要更换时，[X]会先照着旧衣复制这个宽夹层，再让新衣进入日常穿着。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_008",
            "text": "一次手术愈合后，[X]胸前有一处多年来一直敏感。口袋空着时，落在同一高度的开口、内层袋布和下角接缝仍会在普通一天里持续摩擦。[X]已经让改衣者在几件带领口或袖子的衣物上拆掉这些叠层，把前身平整收好。替换衣物第一次穿满一天以前，都会贴着敏感位置检查；真正进入常穿轮换的，那里一直是连续平整的布面。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_009",
            "text": "多年来，[X]一直在上腹或肋侧佩戴带导管的小型输注设备。更换设备时，[X]会把控制器分别试放在同一高度的衣物夹层和独立腰夹上，查看导管是否顺畅、屏幕能否拿到、贴合位置是否仍看得见。经历几代设备和许多带领口或袖子的衣物后，[X]每天早晨仍会按同一种方式安排。替换衣物只有让导管和控制器完整一天都保持安稳，才会进入常穿轮换。"
          },
          {
            "id": "NP_TOPS_HAS_POCKETS_V10_010",
            "text": "十年来，体温波动让[X]在普通一天里会多次脱下、再穿回带领口或袖子的外层。手机和门禁卡曾放在这层胸前或肋侧的夹层里，也试过放在始终随[X]移动的独立位置。[X]很清楚哪种安排会让东西跟着衣物遗落在椅子上、需要反复重新分装，或在穿着时拉坠布料。先后更换的外层都会先按[X]已经用惯的方式安排好，再进入日常轮换。"
          }
        ]
      }
    },
    {
      "id": "non_product:bottom:color",
      "binding": "non_product",
      "category": "bottom",
      "attribute": "color",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_COLOR_NP_01",
            "text": "[X]在舞池里短暂与同伴走散，对方越过人群先认出[X]腰线以下的颜色；重新会合后，对方说几次排练换了地点，自己都是靠这一片熟悉色调找到[X]。"
          },
          {
            "id": "BOTTOM_COLOR_NP_02",
            "text": "[X]孩子画全家出游时，给[X]从腰到脚踝的部分涂了一个熟悉色调；家人翻出前两年的画，孩子换过画法，却一直把[X]的下半身留给相近颜色。"
          },
          {
            "id": "BOTTOM_COLOR_NP_03",
            "text": "[X]骑车到家才发现腿侧蹭上链条油，朋友说这种痕迹落在[X]常用的颜色上并不突兀；[X]也熟练拿出对应清洁剂，家中那瓶已经因多次处理同类色面只剩一半。"
          },
          {
            "id": "BOTTOM_COLOR_NP_04",
            "text": "[X]在露天看台坐了一下午，起身时才发现腰线以下被直射阳光照出一段不易察觉的褪色边界。回家后，[X]翻出几块不同年份留下的修补布边来比色；它们深浅各异，却都沿着同一颜色方向变化，[X]最后也只让褪色处回到这个方向。"
          },
          {
            "id": "BOTTOM_COLOR_NP_05",
            "text": "[X]量体时裁缝用粉线标记腰臀和腿侧，换了两次粉色才在底色上清楚显现。常备盒里有一支写着[X]姓名、已经用去大半的专用粉笔；裁缝拿起它后，新的腰线和腿侧标记一次就清楚了。"
          }
        ],
        "B": [
          {
            "id": "NP_BOTTOM_COLOR_V10_001",
            "text": "十年来，[X]和伴侣一直共用一个低矮的抽屉柜。每天早晨，[X]拉开最下面一层，叠好的腰头露出一道道颜色；手会越过几摞仍然很满的，伸向抽屉里那片熟悉的位置。伴侣收好干净衣物时，早已不用再问哪一摞要放在前面。膝部或下摆穿坏、需要添补时，新的颜色只有在接下来几周一次次被[X]伸手选中，才会逐渐来到前排；长期偏爱的那些，总是膝部折痕和腰头最先变软。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_002",
            "text": "每周日晚上，[X]都会在一排椅子上摆好接下来几天要穿的几套衣服。上身部分先放好，再在每套下面铺上一件有腰头的，让颜色一直延伸到双腿位置。[X]会在几把椅子之间反复调换下半身颜色，直到每一套整体看起来都像平时的自己。这个习惯已经保持了很多年；反复留下的那些颜色，往往还没到洗衣日就都进了洗衣篮。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_003",
            "text": "九年来，[X]一直住在一个走着走着就常会落下小雨的城市。到达门口时，雨点往往已经让大腿和小腿处的布料变深。有些颜色会分成一块块很显眼的湿痕，没干以前总让[X]忍不住低头；另一些只是均匀加深，[X]看着仍然觉得顺眼。后一种会继续留在日常抽屉里，穿过整个多雨时节，直到膝部变软。需要替换时，[X]仍会留意第一场小雨落在两条腿上以后，颜色呈现出什么样子。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_004",
            "text": "每隔几个月，[X]都会在餐桌上处理磨薄的膝部或下摆。针线、小补片和留下来的旧色样铺在毛巾上，[X]先在不显眼的折边处试一试最接近的颜色，再处理外面看得见的位置。这个修补习惯已经保持了很多年；每次都能配出满意效果的颜色，修好后会重新经常穿，补过以后总显得脱节的，则渐渐更常被叠放起来。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_005",
            "text": "每天晚上回家，[X]都会坐在换鞋凳上脱鞋，先拍一拍下摆，再用衣物刷沿脚踝刷一圈。普通出门一天，那里就会留下一层细细的街尘。[X]看着这种结果已经很多年；轻刷一次就重新显得利落的颜色，第二天早上还会继续穿，浅灰痕迹始终很显眼的，往往要等洗过以后才会再拿。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_006",
            "text": "早晨光线很亮时，[X]穿好以后会站到窗边，把一只手掌放在一侧大腿后面的布料内侧。有些颜色会立刻透出手掌或内层的轮廓，有些则仍是一整片均匀色面。[X]做这个检查已经很多年；在厚度相近时，日光下仍然均匀的颜色可以直接穿出门，底下每一道边缘都很明显的则会在出门前换掉。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_007",
            "text": "日常乘公交时，[X]常坐在过道边，腰部以下沿着双腿形成一整片颜色。[X]不喜欢一次普通乘车变成陌生人长时间打量，甚至开口问起自己穿的颜色。几年下来，总会引来注意的下半身颜色越来越少出现在早晨轮换里；能让[X]坐下后不再惦记别人目光的，则会继续常穿。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_008",
            "text": "[X]不太容易分清一些接近的色调。早上穿好以后，[X]会把手机的颜色识别功能对准一侧大腿处的布料，听它读出颜色，再决定上身怎么搭。这个动作已经保持了很多年；从房间走到走廊时，仍能被稳定认出的颜色很容易再次使用，反复被读成另一个色调的则渐渐选得更少。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_009",
            "text": "穿好以后，[X]通常会坐下来吃早餐，出门前读几页书。腰部以下的颜色铺在腿面上，每次低头都会围在书的四周。遇到看着舒服的颜色，[X]有时会停一下，多看两眼书页和腿面落在一起的样子；若一个颜色怎么看都别扭，[X]常在吃完早餐前起身换掉。这样的反应很多年都没变：前一种往往先被穿旧，后一种则总叠在抽屉里。"
          },
          {
            "id": "NP_BOTTOM_COLOR_V10_010",
            "text": "周末早晨，[X]会和固定的朋友在临街的早餐桌见面。[X]从街角走近时，双腿间不断交替的颜色往往比脸更早被桌边的人看见。穿着大家熟悉了多年的那些颜色时，总有人隔着一段路就抬手招呼；偶尔换成陌生的颜色，朋友们常要等[X]走近才认出来。[X]很享受远远就被招呼的感觉，那些沿双腿铺开的熟悉颜色也一直放在家里最顺手的位置。"
          }
        ]
      }
    },
    {
      "id": "non_product:bottom:style",
      "binding": "non_product",
      "category": "bottom",
      "attribute": "style",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_STYLE_NP_01",
            "text": "[X]参加动作训练时，老师让[X]沿镜墙来回走几次，随后指出腰线以下的造型语气正在和步态打架。[X]按自己平常的处理调整轮廓后，落脚立刻自然；老师从以前课程也记得这一变化。"
          },
          {
            "id": "BOTTOM_STYLE_NP_02",
            "text": "[X]和家人一起制作游戏角色时，系统给出许多腰腿造型方案。弟弟没有问便点开一组，说[X]每次捏角色都会让下半身回到这种气质；[X]改了发型和背景，最终仍保留了弟弟选的方向。"
          },
          {
            "id": "BOTTOM_STYLE_NP_03",
            "text": "[X]傍晚经过橱窗时，[X]看到自己的腰腿剪影和店内展示重叠，一度觉得整个人像被换了角色。退开一步只剩自己的轮廓后，那种熟悉气质重新出现，同行人也说这才像平日的[X]。"
          },
          {
            "id": "BOTTOM_STYLE_NP_04",
            "text": "[X]合唱团第一次穿统一造型彩排，[X]在腰腿部分始终站得拘谨。负责人允许做一处不破坏整体的调整后，[X]恢复了平常的站姿；老团员想起上个演出季也曾为[X]保留相似气质。"
          },
          {
            "id": "BOTTOM_STYLE_NP_05",
            "text": "[X]在社区旧衣交换桌前帮忙整理腰线以下的单品，志愿者把风格差异明显的几件放在一起请[X]试选。[X]最终留下的那件，与自己带来交换、膝部已经磨白的旧件气质相近；两件用途和新旧程度不同，摆在一起却像自然的一组。"
          }
        ],
        "B": [
          {
            "id": "NP_BOTTOM_STYLE_V10_001",
            "text": "出门前，[X]会坐在换鞋凳上穿好鞋，再站起来看一眼从腰头到鞋面的整体轮廓。只要腿部线条和看得见的细节不像平时的自己，[X]就会停一下，回卧室换掉。这个动作已经持续很多年；家里人甚至能从那一下停顿判断[X]会不会重新换。真正留下来的，总是膝部和腰头最先被穿软。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_002",
            "text": "周日晚上，[X]会把刚晾干的衣物沿熨衣板铺开，一端放腰头，两条腿向下展开。前面线条、侧缝和下摆一直按[X]熟悉的方式处理，哪里该利落，哪里要保留自然活动感，[X]心里很清楚。家里人有次帮忙，把腿部线条处理得不一样，[X]一眼就看出来，随即重新做了一遍。这个习惯和最后呈现的样子已经保持多年。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_003",
            "text": "每隔几个月，[X]都会清理手机里的旧截图。保存下来的穿搭图里，从腰头到脚踝的线条和看得见的细节，总会反复落回同一种样子。一时觉得新鲜、过后却不像自己的图片很快就会删除；熟悉的那些则一次次留过清理。亲近的朋友看了很多年，如今在发送新图片前，往往已经能猜到[X]会不会留下。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_004",
            "text": "听亲人发来的长语音时，[X]空着的那只手常会从一侧腰边向膝部摸过去，沿着线条和细节慢慢移动。遇到熟悉的布局，手指不用低头看也知道在哪里转向、停一下；陌生的安排会打断这条路径，让[X]反复留意。这个习惯已经保持多年，常穿的那些细节被指尖磨得发亮，别扭的仍像新的一样。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_005",
            "text": "十五年来，[X]一直在家缝制日常穿的下半身衣物，并把纸样收在宽信封里。信封上的日期和尺寸不断变化，熟悉的腰线、腿部轮廓、下摆形状和可见细节却一再出现。最常用的纸样在折线处已经变软，边缘贴过胶带，也被描成过几个尺码；照着它们做出的成品则穿薄了膝部或臀部。重新画纸样时，[X]会先把用得最旧、也最喜欢的那一份垫在下面，沿着熟悉的视觉方向重新落笔，再开始裁纸。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_006",
            "text": "[X]平日使用轮椅，从腰头到膝部的线条会自然落在自己和面对面交谈者的视野中央。多年来，[X]坐好后总会顺手抚平那里。熟悉的轮廓和细节仍能在腿面上看清时，双手很快就会停下来；若堆成认不出的样子，[X]会不断调整，也越来越少拿起。最常穿的那些，坐着时仍是[X]一眼就能认出的样子。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_007",
            "text": "[X]走路一直步幅大、速度快，和家人并排时，不久就会领先半步。腿侧线条、膝部细节和下摆也会随着步伐形成看得见的节奏。那个样子熟悉时，[X]会一直往前走，不再伸手整理；若显得拖沓或不像自己，双手就会不断去调整。多年下来，真正合得上[X]自然步调的那些，总在膝部和下摆留下最明显的磨损。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_008",
            "text": "家里一个晚辈这些年偶尔会穿成模仿[X]的样子来串门。还没等[X]开口，家人已经能从腰线、腿部轮廓和熟悉的细节安排认出来。几处关系都抓准时，[X]会真心高兴地笑起来，说出对方留意到了什么；若只是随便加了一个装饰，[X]则会温和地说，这还不太像自己。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_009",
            "text": "[X]的小腿上有一处面积较大的纹身，多年来一直是个人外观的一部分。每周有几个晚上，[X]换下衣物后会给它涂保湿乳，也会想起当天的下摆、侧线和看得见的细节落在图案周围是什么样子。生硬截断图案或彼此争抢注意的安排越来越少再出现；能让纹身与腿部整体看起来熟悉自然的，则总会穿到下摆变软。"
          },
          {
            "id": "NP_BOTTOM_STYLE_V10_010",
            "text": "[X]多年来一直去同一家修改店。店里以[X]名字保存的一张纸卡已经磨旧，上面反复记着腰线、腿部轮廓和下摆处理。每次[X]到店，量尺寸前纸卡就会先被取出来，大头针和划粉很快又落回熟悉的位置。第一次试穿时，样子对了，[X]不用多解释便会笑起来；出现陌生的线条，则会立刻重新标记。"
          }
        ]
      }
    },
    {
      "id": "non_product:bottom:season",
      "binding": "non_product",
      "category": "bottom",
      "attribute": "season",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_SEASON_NP_01",
            "text": "[X]乘早班车时发现座椅开始供热，刚坐下便调整腰腿覆盖。常同车的人已经把[X]惯坐位置的加热档调低了一格；[X]试过后没有再换座，只把下半身温度调到熟悉状态。"
          },
          {
            "id": "BOTTOM_SEASON_NP_02",
            "text": "[X]陪孩子在草地上玩时，膝部接触地面的凉意让坐姿发生变化。孩子没有等[X]开口便把垫子推到腿下，垫面对应双膝的位置已经压得比周围更薄；[X]垫好后继续坐在原处，没有结束游戏。"
          },
          {
            "id": "BOTTOM_SEASON_NP_03",
            "text": "[X]夜里气温变化后，起身调整腿部那一层再回到床边。同住的人没有开灯就从床尾递来另一种厚薄；两种覆盖的折叠边缘都已磨软，[X]接过合适的一层后很快恢复原来的睡姿。"
          },
          {
            "id": "BOTTOM_SEASON_NP_04",
            "text": "[X]坐在阳台时，宠物跳到腿上，却因腰腿表面的厚薄刚发生变化而迟疑。它试探几次后重新趴到平常位置，那一处已经被爪垫和反复依靠磨得更柔软；[X]没有为迎合宠物换掉当下覆盖。"
          },
          {
            "id": "BOTTOM_SEASON_NP_05",
            "text": "[X]骑车穿过固定桥面时，腿部第一次明显感到迎风温度变了，便在下个路口调整覆盖。骑友看到[X]的膝部动作后，已经放慢速度等在背风处，并从车篮递来压在底部、边缘磨软的备用层；[X]处理好后继续过桥。"
          }
        ],
        "B": [
          {
            "id": "NP_BOTTOM_SEASON_V10_001",
            "text": "每年天气走到某个熟悉的转折点，家里人都会发现[X]早晨不再在卧室里来回换衣。前些日子，[X]穿好后会去开着的窗边站几分钟，摸摸膝盖或小腿处的布料，又常回卧室把刚穿好的换掉；到了最合心意的那段天气，第一件往往直接穿出门。这样的变化年年重复，那几周里同一叠总是刚洗好不久又进了洗衣篮。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_002",
            "text": "一处旧伤让[X]的一侧膝盖总会在天气转凉前发紧。这样的早晨，[X]会坐在床沿屈伸几次腿，先拿那一叠多年来能让膝部在凉冷时保持舒服的衣物。家里人已经拿这只膝盖预报天气开了很多年玩笑。反复穿用的那些，膝部总会先变得柔软；适合更暖和天气的则留在抽屉里，等关节不再发紧。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_003",
            "text": "几年来，[X]会突然感到一阵热意从腰部漫到大腿。热潮来时，刚才还没感觉的布料一下变得贴身闷热；[X]会用双手把它从腿上拉开，等这阵热慢慢过去。家里人一看到这个动作就知道发生了什么。抽屉里，最适合闷热天气的那一组总是膝部和腰头先被穿软，较厚重的那些仍留着原来的折痕。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_004",
            "text": "[X]在一栋老楼里住了很多年。暖气一开，家里会变得很热，石头楼梯间却仍然发冷。每次出门，双腿都要从积着暖意的室内走过五层凉冷的楼梯；回家时，温度变化又反过来。能让膝部在这段日常转换里一直舒服的那些，总被搭在同一把椅子上接着穿；在屋里闷热或走楼梯时发冷的，则会在整个供暖期里长期不动。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_005",
            "text": "[X]的小腿皮肤多年来一直很容易晒红。早晨看到手机上的紫外线预报升高时，[X]会再看一眼窗外，从适合暖热天气的那一叠里挑选，既让双腿有舒服的遮挡，也不让膝部觉得沉重。晚上换下时，[X]还会看看皮肤有没有泛红。那些一次次让小腿安稳度过强日照的，总会在这段天气结束前就洗得柔软发浅。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_006",
            "text": "[X]住的沿海街区，早晨常有雾贴在窗外，午后太阳照足时路面又会变暖。多年来，[X]晚上换下衣物时总会遇到两种结果：有些让膝部在早些时候发凉，有些则会在午后让膝窝留下潮湿折痕。适合温和多变天气的那一叠避开了这两种不适，在漫长的过渡天气里总是穿洗得最快，椅背几乎每天都有一件准备第二天接着穿。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_007",
            "text": "每年当地又出现那段熟悉的天气时，[X]都会去亲友家住上大约一个月。返程前，[X]会把行李箱里的腰头逐件提起来。有些膝部已经穿得柔软，也洗过好几次；有些仍留着出发前压出的整齐折痕。这样的差别重复多年后，帮忙收拾的亲友已经会把原样未动的那几件留在家里，给[X]真正反复穿的多留些位置。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_008",
            "text": "[X]家里每年都有几周既不开风扇，也不用暖气。坐在餐桌边时，[X]不再把布料从发热的大腿上拉开，也不再在桌下揉发冷的膝盖。每次账单送到，家里人都会笑称这是[X]最轻松的几周。这样的规律已经持续多年，那几周里，[X]来回穿的总是膝部和腰头已经变软的那些。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_009",
            "text": "[X]平日使用轮椅，双腿大部分时间会保持同一姿势。空气转凉后，膝盖和小腿总比家里其他人更早发冷，[X]常把两只手掌覆在膝上确认。多年来，适合凉冷天气的那一叠总会早早出现在床边，膝部被手掌和穿用磨得柔软；让坐着的双腿发冷的那些，则在那段凉冷天气里很少被拿起。"
          },
          {
            "id": "NP_BOTTOM_SEASON_V10_010",
            "text": "每到年底，[X]和伴侣都会把家庭收据按月份装进信封。连续看过几年后，写着“换腰头”或“膝部磨薄”的单据总集中在相近的一段天气里。那段时间，[X]总把同一批穿到有好几件需要处理，其余几叠往往还能整整齐齐放到下一年。现在伴侣会在熟悉的天气回来前，提醒[X]先看看膝部和腰头。"
          }
        ]
      }
    },
    {
      "id": "non_product:bottom:has_pockets",
      "binding": "non_product",
      "category": "bottom",
      "attribute": "has_pockets",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "BOTTOM_HAS_POCKETS_NP_01",
            "text": "[X]早高峰走到闸机前，手自然落向腰侧固定位置取出交通卡，同行新人照着这个动作把票递回同一处；边缘隔着布料已能摸到长期取放形成的轻微磨痕。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_NP_02",
            "text": "[X]舞蹈拍摄前检查腿侧轮廓，那里没有开口或鼓包，手机早已按团队熟悉的方式留在场外；摄影助理没有询问便把随身物放进固定收纳盒。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_NP_03",
            "text": "[X]陪孩子爬上游乐设施时不方便拿包，钥匙和纸巾仍稳在腰腿附近；孩子熟练指出每样东西在哪一侧，显然已习惯[X]在公园里的收纳分工。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_NP_04",
            "text": "[X]长时间坐着时腰臀两侧保持平整，没有随身物顶压身体；同事把手机递向桌面而不是[X]身侧，因为大家都知道[X]工作时不会在这里留收纳开口。"
          },
          {
            "id": "BOTTOM_HAS_POCKETS_NP_05",
            "text": "[X]在人多的车站行走时，手会周期性触碰腿侧确认物品仍在原位；同行人看到这个熟悉动作便知道[X]的证件和手机各在哪一边。"
          }
        ],
        "B": [
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_001",
            "text": "走路时，[X]通常让两只手空着，钥匙和交通卡各待在髋部两侧。过路口或上台阶时，[X]常顺手轻拍一下，摸到熟悉的轮廓便继续往前。这个习惯已经维持多年，那里的开口总是最先被掌心磨亮；若穿好后发现腰侧无处安放这两样东西，[X]常在出门前又换下来。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_002",
            "text": "十三年来，[X]每天早餐后都会把一块干净的布手帕折成小方块，让一角露在大腿上方同一个位置。普通一天里鼻子开始不舒服时，两根手指便能摸到露出的布角，不必停下来翻找。到了晚上，折好的方块会在贴身的一侧留下淡淡轮廓。经过许多次替换，[X]常用的开口边缘都被磨得发亮，下角也加固过；第二天早晨，新的干净手帕又会回到那里。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_003",
            "text": "每年整理衣橱时，[X]会提着腰头把每一件沿床面铺开。髋部有开口的那些通常已经穿得柔软，边缘也被双手磨亮；不少两侧平整的仍留着在架上叠放数月形成的硬折痕。年复一年，[X]都会把手伸进那些熟悉的开口，再将穿旧的放回保留区，而几乎没动过的总是最先离开衣橱。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_004",
            "text": "[X]一直很在意髋部接缝和叠层贴在身上的感觉。普通一天里，只要松动的袋布或加厚边缘反复擦过同一处皮肤，[X]就很难不去注意。晚上换下后，[X]会揉一揉那里；早晨穿之前，也会先用手掌摸过两侧内里。多年下来，连续平整的内侧总被穿得柔软，带袋状夹层的则因为少穿而明显更挺。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_005",
            "text": "晚饭后，[X]常会在阳台上站一会儿，看着楼下的灯一盏盏亮起来。两只手会自然落进髋侧的开口，肩膀也慢慢放松。若指尖只摸到连续的侧缝，[X]就会反复扯下摆或抱起手臂，往往更早回到屋里。这样的安静停留已经持续多年，能让双手落在熟悉位置的那些，也总是最先被穿得柔软。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_006",
            "text": "每天早晨穿好后，[X]都会经过走廊里一面窄窄的全身镜。髋部的空开口有时会向外张开，截断两侧的线条；[X]用双手抹平，走几步再看，它们又翘了起来。这样的烦扰已经持续多年。两侧始终平整的那些，会不断在身上、洗衣篮和衣架之间流转；总是张口的，则在衣橱深处停留得越来越久。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_007",
            "text": "[X]多年来一直把手机调成静音，贴着一侧大腿上方时，最容易认出它的振动。手机待在那里，[X]可以不再反复看屏幕，等熟悉的震感出现再拿出来。若那个位置没有开口，[X]就会一次次用手确认手机，或漏掉放在别处的振动。[X]最常穿的许多件上，大腿处已经留下手机轮廓；无处放手机的则一次次被送回衣橱。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_008",
            "text": "[X]每次出楼，一只手都握着手杖，另一只手要推住那扇沉重、会自动回弹的门。钥匙和手机贴在髋部，熟悉的整套动作里便没有东西垂下来碰到手杖。[X]这样出门已经很多年。若早晨穿好后两侧髋部都没有开口，小腕包走几步就会荡到手杖上，[X]通常会重新上楼换好，再来推门。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_009",
            "text": "十多年来，[X]一直随身带着亲近的人送的一颗光滑小石头。思绪开始变乱时，[X]的手指会在大腿上方找到它，慢慢转动，直到呼吸平缓下来。这颗石头已经在许多常穿的内里磨出同样浅浅的椭圆痕迹。若早晨穿好后腰侧没有开口，[X]既不愿把石头一直握在外面，也不想把它留下，通常会在一天开始前换掉。"
          },
          {
            "id": "NP_BOTTOM_HAS_POCKETS_V10_010",
            "text": "每年有几次去亲友家过夜前，[X]会和伴侣坐在卧室地板上收拾行李。伴侣提起每一件的腰头，在任一侧髋部摸一下，便把它放进行李箱或送回抽屉；[X]几乎从不改动这个决定。相处多年后，伴侣只凭这一处，就能判断哪些[X]真的会穿，哪些即使带走也会原样带回来。"
          }
        ]
      }
    },
    {
      "id": "non_product:shoes:color",
      "binding": "non_product",
      "category": "shoes",
      "attribute": "color",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "SHOES_COLOR_NP_01",
            "text": "[X]孩子在玄关画“谁回家了”时，只画了地面上一双脚的颜色便认定是[X]；翻开以前的画，脚下色块虽形状不同，却一直落在相近色调。"
          },
          {
            "id": "SHOES_COLOR_NP_02",
            "text": "[X]舞池灯光很暗，同伴仍从移动中的脚下颜色认出[X]并接上动作。休息时，[X]把这一双放回练习柜，旁边两双接地面的磨损程度不同、造型也不一样，朝外的一面却延续着相近色调；同伴没有看姓名就把下一双递对了。"
          },
          {
            "id": "SHOES_COLOR_NP_03",
            "text": "[X]参加手工染色课时，颜料意外溅到脚边的一双。老师拿来几张染料卡，建议干脆整体改色；[X]却对照没有沾到的内侧边缘，只选能恢复原来主色的方案。随身护理袋里一支同色补色笔已经用去大半，笔头也磨成了贴合边缘的形状。"
          },
          {
            "id": "SHOES_COLOR_NP_04",
            "text": "[X]给新家挑玄关地砖时，把脚下常穿的一双放到几块样砖上比较。地砖颜色换了几轮，[X]始终把这一双当作固定参照；从纸箱里又拿出的替换款造型完全不同、接地纹路也更新，朝上的颜色却仍落在相近方向。"
          },
          {
            "id": "SHOES_COLOR_NP_05",
            "text": "[X]雨后低头看到脚尖颜色被水加深，[X]并不意外，同行人也说这种湿后变化已经在几次雨天照片里出现，仍很像[X]会接受的脚下色调。"
          }
        ],
        "B": [
          {
            "id": "NP_SHOES_COLOR_V10_001",
            "text": "[X]坐下时，常会把一侧脚踝搭在另一侧上。抬起的脚尖和外侧颜色便一直留在视野里，[X]多年来总会不时低头看一眼。越看越舒服的颜色会让双脚继续这样搭着，也会再次被穿出门；怎么看都别扭的会让[X]把脚放下，第二天早晨换一种。最喜欢的那些，外踝附近总有最明显的摩擦痕迹。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_002",
            "text": "[X]的周边视野有限，开始走动时，会依靠视野最下方不断移动的颜色确认每只脚的位置。在每天接触的地面上，有些颜色一步接一步都容易跟住，有些却会隐进去，让[X]放慢速度寻找。这个身体习惯已经持续多年。始终容易看清的颜色，脚尖总被反复穿得发亮；容易消失的那些则一直新得多。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_003",
            "text": "[X]每天使用手杖，走路时，杖尖和旁边那只脚会交替进入视野。多年来，[X]已经习惯这两个移动点之间保持一种熟悉的颜色关系。颜色相处得合心意时，整个节奏看起来很安稳；彼此争抢或糊成一团时，[X]会一路不断留意。真正偏爱的脚上颜色，总在靠近手杖那一侧的脚尖先被穿得暗淡。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_004",
            "text": "晚上，[X]会坐下来松开系带或搭扣，再把双脚依次抬出来。那一小会儿，脚背周围的颜色会紧挨着皮肤或袜口。[X]多年来一直会留意两者相接时看起来是温和、利落、柔和，还是怎么都不对。反复看着顺眼的颜色会被放在早晨最顺手的位置，开口边缘也逐渐磨得光滑；其余的留在后面，边缘一直挺括如新。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_005",
            "text": "[X]住的街区每年都有几个月会在路面撒除冰盐，干后总在双脚的脚尖和外侧留下浅色圈。回家后，[X]会在旧报纸上轻轻拍掉盐粒，看看余下的痕迹，再把每双放好。经历许多个冬天后，有些颜色带着这种真实磨损仍让[X]觉得顺眼，有些却让每一道浅圈都难以忽略。前一种占着最顺手的位置，也留下了最深的弯折纹。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_006",
            "text": "[X]走进一个房间坐下后，贴近地面移动的颜色有时会成为新认识的人最先提起的话题。类似的开场听了很多年，[X]很清楚哪些颜色会带来自己乐于接住的交谈，哪些只会让自己希望注意力赶快移开。朋友们也认得[X]两种反应的差别。和喜欢的招呼方式连在一起的脚上颜色，出现得最频繁，也总在脚尖先被穿旧。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_007",
            "text": "每隔几个月，[X]会坐在阳台的小凳上，把系带全部抽出来清洗或更换。孔眼和中间舌片露出来后，脚尖与脚背上的大片颜色会单独呈现，之后才重新穿入干净的系带。这个动作已经重复多年，[X]很清楚哪些底色与熟悉的系带放在一起仍然顺眼。这样的会重新系好，一直穿到孔眼变软；怎么看都不对的则常半途留在凳边，此后也越来越少被拿起。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_008",
            "text": "一处腿伤经过很长时间恢复后，[X]第一次没有借助他人，独自走过了客厅。家人至今仍记得[X]小心迈步时，双脚周围移动着什么颜色，以及[X]终于走到另一边的样子。这个记忆温暖地留了很多年。如今再看到同样的脚上颜色，[X]会立刻想起那次走过客厅，也会一次次选择它，直到脚尖留下很深的磨损。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_009",
            "text": "家里过生日时，大家都知道，[X]拆开扁长盒子、看到里面并排的脚尖时，会先看颜色。熟悉的颜色一露出来，[X]还没检查系带或底部便会立刻笑起来；碰到意外的颜色，则会有一下礼貌的停顿，亲人们早已认得。这样的场面重复了很多年。后来再聚时，真正让[X]高兴的颜色总带着磨旧的脚尖回来，陌生的颜色却仍然近乎全新。"
          },
          {
            "id": "NP_SHOES_COLOR_V10_010",
            "text": "十四年来，[X]一直在门边搁板上放着一小盒有色护理膏和一块软布。每隔几周，[X]会抽掉系带，刷去脚尖和后跟的灰，再把那种熟悉的颜色一点点补到弯折处。[X]真心喜欢软布擦过以后变得更深、更均匀的色调，也会把每一双一直穿到脚尖留下很深的折痕、后跟慢慢磨薄。替换的新一双到来时，[X]仍会打开那盒旧护理膏；怎么也养不出这种熟悉颜色的，很少能留在日常那一排。"
          }
        ]
      }
    },
    {
      "id": "non_product:shoes:style",
      "binding": "non_product",
      "category": "shoes",
      "attribute": "style",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "SHOES_STYLE_NP_01",
            "text": "[X]等红灯时，低角度路灯把脚下轮廓投到前方。[X]看见新造型的影子总觉得走路不像自己，退回常用的脚下气质后，同行人也说熟悉的步态终于回来了。"
          },
          {
            "id": "SHOES_STYLE_NP_02",
            "text": "[X]录制脚步声时，声音设计师只听几步就说[X]今天脚下的气质和平常不同。调整回熟悉方向后，落脚力度与节奏不再需要刻意控制；设计师从以前的录音也认得这种状态。"
          },
          {
            "id": "SHOES_STYLE_NP_03",
            "text": "[X]朋友为群聊制作[X]的全身贴纸，画到脚下时列出几种完全不同的气质。群里的人几乎都选中同一方向，说无论[X]去工作还是休息，这处细节总让角色看起来像本人。"
          },
          {
            "id": "SHOES_STYLE_NP_04",
            "text": "[X]康复训练进入自由步行阶段，治疗师发现[X]在某种脚下气质下会自然迈开步幅，换成另一方向就频繁低头。治疗笔记里，几个月前第一次练习时也记录过同样差异。"
          },
          {
            "id": "SHOES_STYLE_NP_05",
            "text": "[X]到社区修补摊取回脚下的一双，发现新加的边饰让原本熟悉的气质变了。[X]请师傅逐项拆掉多余细节，直到它和等待区另一双已经磨旧、仍常穿的脚下物件摆在一起不显突兀；师傅留下拆下的配件，没有再动主体。"
          }
        ],
        "B": [
          {
            "id": "NP_SHOES_STYLE_V10_001",
            "text": "八年来，[X]的髋部和腰背容易僵硬，每天早晨由同住者把三双清理好的摆到床边会轻松许多。同住者会让脚尖轮廓、后跟线条、固定方式和可见细节各不相同，却不先推荐哪一双。[X]低头看过，再用脚把它们稍稍转向，反复选中的总是最像自己的那种样子。如今同住者通常已经猜得到结果；被选中的那类会带着磨软的开口和日常走路磨低的后跟再次回到床边。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_002",
            "text": "十三年来，[X]一家大多数周日都会到同一位亲属家吃午饭。大家进门后把脚上穿的那一双留在玄关墙边，再走进餐厅，窄窄一排常常摆得很满。准备离开时，即使具体的那一双已经换过，[X]仍能从熟悉的前端轮廓、固定方式、后跟线条和细节分量里一眼认出自己的。亲人们也认得这种设计气质，常常不用问便把正确的那双递过来。[X]很喜欢这种一眼就觉得熟悉的样子；反复被带去午餐的那些，开口和后跟也留下了长期穿用的痕迹。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_003",
            "text": "十五年来，每当一双已经穿旧、快要退役时，[X]都会把它放在牛皮纸上描出脚尖和后跟，再从目录或网站订替换品。一位家人会拍下固定方式和看得见的细节，把照片夹到装着旧轮廓纸的信封里。包裹到达后，[X]会先把新旧两双并排放好，再决定哪一双进入日常穿用。多年里纸样尺寸有过变化，真正被穿到后跟磨低的那些，脚尖轮廓、后跟线条、固定方式和细节分量却一直彼此相近。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_004",
            "text": "每年两次，[X]都会参加社区衣物交换，墙边会整齐摆开好几双。[X]到场前，认识多年的朋友已经会把前端轮廓、后跟、固定方式和细节最像[X]的挑到一旁。他们这些年的判断越来越准：[X]总会先伸手拿起那些熟悉的轮廓和细节；状态很好却不像自己的，最后还是留在墙边。如今姓名卡还没摆上，大家就认得出哪几双是为[X]留的。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_005",
            "text": "几年来，[X]一直在同一个社区包裹柜台办理退换，工作人员已经熟悉其中的规律：在室内认真试过后，尺寸合适、也没有瑕疵的一双，仍可能因为前端轮廓、后跟或细节看起来不像[X]而被带回来。退换单上，尺码和状态通常都勾选为没有问题，外观原因却反复出现。真正让[X]觉得像自己的，后来会被穿出明显的使用痕迹，工作人员也认得出它们曾从这里被取走。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_006",
            "text": "多年来，[X]每隔六周都会坐进同一家店的理发椅。围布盖住衣服后，镜子里只看得到围布下露出的前端轮廓和脚踝附近的细节。认识多年的理发师常凭这些线索，就能猜中[X]想要的整体感觉。偶尔借来一双自己都觉得不对味的，理发师也会跟着猜偏。每次被猜中时，[X]都觉得对方看懂了自己，多年来也始终会选回这种熟悉的样子。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_007",
            "text": "多年来，[X]每隔十八个月都会去复查定制内垫，需要时再更新。工作人员先检查[X]真正穿旧的那一双，再拿来几双不同轮廓的，逐一调试内垫。空间是否足够很快就能确定；那些前端、后跟和细节看着不像自己的，后来一直没被真正穿起来。记录册里，内垫形状基本延续，外面的几双换了又换，[X]常选的轮廓和细节也一直没变。工作人员会陪[X]一点点调整，直到走动时合适，低头看也满意。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_008",
            "text": "五年来，[X]穿好衣服后都会顺手向下拍一张，放进自己的穿搭日历。每到月底，缩略图会清楚显示哪些真正被穿出了门：短暂尝试往往只出现一两次，熟悉的前端轮廓、后跟、固定方式和细节却会反复出现，直到留下明显磨损。[X]会照着这些记录整理门边的位置，而日历里占据大多数格子的，始终是自己长久以来最常选的那一类。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_009",
            "text": "每年四次，[X]都会参加社区维修活动，坐到摆着后跟配件、底部胶、线和刷子的桌边。这些年，[X]带来的早已换过好几双，轮廓和细节却总是自己一贯会选的样子。志愿者问起是否还值得再修时，[X]会指着那些越来越难找到的形状和细节，随后继续动手。相熟的志愿者已经看着[X]一次次把穿旧的修好，再直接穿上走出门。"
          },
          {
            "id": "NP_SHOES_STYLE_V10_010",
            "text": "十二年来，[X]住处的电梯下半段一直铺着拉丝金属。大多数早晨乘电梯下楼时，[X]会面向那一侧站着，模糊的倒影正好留下双脚周围的前端轮廓、固定方式、后跟线条和可见细节。[X]很喜欢在倒影里看见那种长久以来像自己的设计气质。颜色、材质和具体的那一双都换过，带着熟悉结构的替换品却总会反复出现，直到前端留下弯折、后跟慢慢磨低；在这片倒影里显得不像[X]的尝试，往往只出现几次便不再穿出门。"
          }
        ]
      }
    },
    {
      "id": "non_product:shoes:sport",
      "binding": "non_product",
      "category": "shoes",
      "attribute": "sport",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "SHARED_SPORT_NP_01",
            "text": "[X] 结束康复后的第一次完整周末，医生只提醒要逐步恢复活动。[X] 没有在各种项目之间试来试去，而是先联系原来一起练习某项运动的人，从最熟悉的一组动作重新开始；伙伴也早已替 [X] 保留了回归的位置。"
          },
          {
            "id": "SHARED_SPORT_NP_02",
            "text": "[X] 刚搬进新社区，纸箱还堆在客厅，就沿着附近街区寻找能继续参加某项运动的场地。看到合适的设施后，[X] 当场记下开放时间，又把照片发给以前的搭档，请对方看看这里能不能延续原来的练习方式。"
          },
          {
            "id": "SHARED_SPORT_NP_03",
            "text": "[X] 在下班路上接到老队友的临时电话，有人缺席，希望 [X] 来补位。虽然已经很久没和这群人碰面，[X] 听到是哪项运动后还是立即改了晚上的安排；到了现场，身体很快找回了熟悉的节奏和站位。"
          },
          {
            "id": "SHARED_SPORT_NP_04",
            "text": "[X] 陪朋友参加社区体验日，本来只是旁观，经过某项运动的区域时却停了下来。工作人员递来体验名额后，[X] 不需要照着示范慢慢摸索，很自然地调整了动作细节；朋友看了一会儿，便主动把原定晚餐改到更晚，让 [X] 把这一轮完整做完。"
          },
          {
            "id": "SHARED_SPORT_NP_05",
            "text": "[X] 所在的部门准备周末团建，初稿里的方案几乎都带训练或比赛性质。方案发到群里前，熟悉 [X] 的同事在末尾补了一个不按运动项目组织的选项；[X] 看完后直接在这一项旁边填了名字，又把自己收集的散步路线和展览时间发给大家参考。"
          }
        ],
        "B": [
          {
            "id": "NP_SHOES_SPORT_V10_001",
            "text": "十二年来，每个月第一个和第三个周六，[X]都会去同一段泥泞的河岸钓鱼。走到惯常的位置要穿过湿草，再沿一小段斜坡下去；抛竿时双脚要在水边站稳，收鱼时偶尔还会踩进软泥。结束后，[X]会在鱼竿旁刷掉底部的泥，晾干后再放回同一层搁板。具体的那一双已经穿坏过几次，[X]仍会选择能稳稳抓住河岸、容易清掉泥土，并让长时间站立和抛竿都保持熟悉脚感的那一类。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_002",
            "text": "十一年来，每个周二晚上，[X]都会在同一块社区半场打篮球。普通一场球里有短距离冲刺、防守滑步、转身、争抢篮板和场地标线内的急停，相处多年的队友在传球到来以前就认得[X]的移动方式。每个赛季结束时，前脚掌外侧和后跟都会出现相同的集中磨损。替换的新一双不会只在室内走几步便决定留下，而要先打过几场完整的球；熟悉的变向和落地能够自然回来、双脚不用反复调整时，[X]才会继续使用。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_003",
            "text": "十三年来，[X]每周有三个早晨会在早餐前去同一座市政跑道。每次先轻松跑几圈，再反复加快直道、控制弯道，最后和熟悉的晨练者一起慢跑一圈结束。脚下那一双经过许多个月，总会在前掌压出相同的痕迹，后跟也以熟悉的方式磨损。旧的一双退役后，替换品从第一圈慢跑开始就要经历完整训练；能让熟悉步幅自然回来、不必一路调整双脚的，才会继续出现在接下来的早晨。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_004",
            "text": "连续十个冬天，[X]每个雪季大约有八个周末会到同一座山滑单板。第一次下行前，双脚分别套进各自的内衬和硬壳，再横向固定到同一块板上。用后刃转向、前刃转向，再长距离滑回缆车的过程中，压力会以熟悉的方式经过脚尖、后跟和外缘，[X]在第一趟里就能感觉出来。回家后，[X]会打开固定结构，把两只潮湿内衬放在同一处晾干。旧的已经磨损更换过，[X]仍会选择能在最初几趟里让熟悉控板感重新出现的那一类。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_005",
            "text": "[X]参加同一个每周球道联赛已经很多年。最后几步里，一只脚向前受控滑出，另一只脚稳稳留在后方，队友们在球出手前就认得[X]的节奏。跨过多个赛季，滑步一侧的前脚掌被磨得光亮，后方一侧则留下不同的制动磨损。需要换新时，[X]总会选回能让滑步和制动重新落进熟悉节奏里的那一双。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_006",
            "text": "多年来，[X]大多数周末都会去同一家马房骑乘。上马前，[X]会把双脚前掌放进脚蹬，让脚跟自然下沉；如果脚尖容易挂住，或脚掌陷得太深，[X]就会下来换好再出发。骑乘结束后，[X]会在鞍具架旁刷掉底部的场地尘土。能让双脚稳稳待在脚蹬里、需要时又顺利脱出的那一双，早已成为[X]骑乘时固定的选择。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_007",
            "text": "多年来，每到温暖季节，[X]都会扛着板走过同一片散落贝壳的浅滩，和当地一群熟人一起划行。下水时水和细沙会顺着开口灌进来，途中双脚踩着湿漉漉的板面，上岸后则要在室外水龙头下冲洗干净。每年，[X]都会重新选回贴合双脚的那一双：途中能及时排水，在板面上站得稳，走回岸边时也依然舒服。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_008",
            "text": "十多年来，[X]常在周末较安静的早晨去附近的滑板场。一只脚在水泥地上推行，另一只脚隔着板面寻找螺栓的位置；反复转向和落地后，总是同一侧外缘先被磨平，同一片脚尖位置也会留下深色砂纸痕迹。当脚下再也难以清楚感到板面时，[X]才会换掉那双已经用旧的，换新后仍要找回贴近板面的熟悉脚感。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_009",
            "text": "多年来，从春天到第一次结霜，[X]每周都会在同一座市政球场打一个清早场。每次挥杆时，[X]双脚稳稳踩住草地并随动作转动；走完十八洞后，潮湿草屑会卡在底部纹路里，[X]便在手套和记分卡旁把它们刷掉。转动时容易偏移、或走久了不断分散注意力的那一双，[X]不会继续用。[X]一直偏爱那种从第一洞发球台到最后一片果岭都让脚下从容的状态。"
          },
          {
            "id": "NP_SHOES_SPORT_V10_010",
            "text": "附近修理铺的老板认识[X]快二十年了。每当后跟磨薄，[X]就把那双已经穿旧的带回来，问还能不能继续放在日常轮换里。几张旧维修单的纸套上，反复记录着修后跟、继续走路、最后才替换的过程。实在无法再修时，老板会摆出适合普通长日穿用的选择，请[X]走到街角再回来。几年以后，[X]当时选中的那双常会带着同样深的前掌弯折和磨薄的后跟，再次回到店里。"
          }
        ]
      }
    },
    {
      "id": "non_product:shoes:water_resistance",
      "binding": "non_product",
      "category": "shoes",
      "attribute": "water_resistance",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "SHOES_WATER_RESISTANCE_NP_01",
            "text": "[X]看到熟悉路口又积了水，下意识按固定深浅落脚，走出水面后先感受脚趾和足背的干湿，再决定继续直行、绕开下一段积水，还是就近更换。回到门厅时，旧的一双在相同高度留着多层水线，内侧干湿痕迹也与这次结果相近。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_NP_02",
            "text": "[X]雨天到办公室后，[X]先检查脚部是否需要换袜，再把脚下外层放到熟悉的晾置位置；同事已知道哪种湿润程度会让[X]照常工作，哪种会立刻中断安排。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_NP_03",
            "text": "[X]在家给狗洗澡时，甩动的水管突然扫过脚边。[X]低头查看水是停在表面、只浸湿一部分，还是已经透到袜面，随后决定继续站在浴室里、退到门垫上，或立即更换；门边那双专用于洗狗的旧物也留着对应的水痕和干燥痕迹。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_NP_04",
            "text": "[X]水边浪花打湿脚下后，[X]熟练判断是只需擦表面、回去晾置，还是立即处理内部；同行人无需询问便拿出对应用品，因为几次水边出行都是同一套分工。"
          },
          {
            "id": "SHOES_WATER_RESISTANCE_NP_05",
            "text": "[X]踏过融雪路面后，[X]在进门前先停下感受脚部干湿，并按熟悉方式处理脚下；门卫说整个冬天已经见过[X]多次作出相同或相似判断。"
          }
        ],
        "B": [
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_001",
            "text": "连续许多年雨季，[X]回家后都会在同一块门垫上脱下那一双，先摸摸脚尖和后跟位置的袜子，再把它放到通风处。第二天早餐前，[X]会看内侧是否还潮、底部有没有积水，以及一夜后恢复到什么程度。家里人已经知道，[X]留下来常穿的，总是雨后表现最合自己心意的那一类；换新时也会照着这套做法判断。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_002",
            "text": "多年来，[X]常去的公交站旁有一条雨后迟迟排不空的路沟。车辆经过时，水会从侧面打到脚尖和开口周围；走进有顶棚的站台后，[X]会看袜子边缘有没有逐渐扩开的湿线。这样的情况发生得够多了，[X]早已清楚湿线扩到什么程度自己还能接受，超过这个程度的不会再继续穿。每次需要换新，路边这一下水花仍是[X]最熟悉的判断依据。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_003",
            "text": "在闷热多雨的地方生活多年后，[X]已经习惯午后阵雨来得比躲雨更快。路面的水会溅到脚尖周围，[X]会留意那一双是否越走越沉、里面是否存水，以及雨停后多久不再黏着双脚。回到家，[X]把它放在风扇旁，晚饭后再摸一次。多年来，[X]一直选回在湿热天气里最不拖沓、恢复速度也最合自己习惯的那一类。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_004",
            "text": "多年来，[X]每周清早都会把回收桶从侧边通道推到路旁。草地常带着露水或夜雨，走过整段时，湿草会不断擦过脚尖和外缘。回到门口，[X]会按一按袜子上相同的位置，看潮气有没有开始往里扩。反复留下湿轮廓的不会再放在门边常穿；需要换新时，走完这段湿草地后袜子是什么状态，始终是[X]最看重的事。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_005",
            "text": "连续几个学年里，雨天清早，[X]常陪着一个会毫无预告踩进水坑的孩子一起走。近处溅起的水会打到双脚两侧，到达后，[X]会按一按袜尖，看有多少水进来了。孩子如今也看得出，地面湿的时候[X]总会反复选哪几双，哪些因为留下太多潮气而不再常穿。经过这么多次普通的雨天同行，[X]一直很清楚袜子湿到什么程度自己还能接受。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_006",
            "text": "多年来，[X]每年的皮肤复查都会谈到潮湿月份过后脚趾之间的受潮情况。记录显示，袜子湿着太久时，刺激就会再次出现；[X]也说得出哪些几双在这些情况后退出了常穿范围。短暂接触到水和长时间潮湿会分开记录。如今，袜子能否保持在[X]安心的干燥范围内，始终是最先考虑的事情之一，这个标准已经沿用多年。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_007",
            "text": "每年长雨季到来前，[X]都会把常穿的几双放在一条旧毛巾上，清掉接缝里的泥，再补上已经磨掉的护理层。第一次真正下雨时就是检查机会：[X]会看水珠是停在表面，还是让表面颜色变深，进门后再摸摸袜子。反复护理后潮气仍会进来的，会被放到一旁。[X]多年保留下来的，都是经过这套简单保养后能达到自己预期的那几双。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_008",
            "text": "多年来，[X]每周六都会在同一个露天菜摊前排队。下雨的清早，棚布能挡住上方的雨，地面却会留着薄薄一层水。站在原地时，体重会让这层水一直压着底部和下缘，停留时间远比迈一步更长。队伍再次向前移动时，[X]能感觉到袜底有没有开始发潮。反复在等待中渗水的不会再留在常穿范围，[X]换新时也一直看重同样的结果。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_009",
            "text": "每到冬末，[X]家共用信箱周围堆起的雪都会融成一圈避不开的深雪泥。[X]已经这样走过很多年，能感觉到冰冷融水压在前端和下缘，回到室内后就会检查袜子。表面颜色变深并不一定有问题，冰冷潮气有没有透到袜子上才是[X]在意的；反复渗到袜子上的，下一次化雪前就不会再留在门边。许多个冬天里，[X]一直按这个标准选择。"
          },
          {
            "id": "NP_SHOES_WATER_RESISTANCE_V10_010",
            "text": "多年来，[X]在雨天使用轮椅移动时，双脚会放在前方的脚踏上。伞或雨篷能挡住上半身，雨水却可能一路落在脚尖和开口处。到达后，[X]会检查袜子上缘和脚尖周围的潮湿程度。持续下雨时会慢慢渗进去的，不会再留在常穿范围；到达时袜子湿到什么程度，始终是[X]换新时最看重的事情之一。"
          }
        ]
      }
    },
    {
      "id": "non_product:bags:color",
      "binding": "non_product",
      "category": "bags",
      "attribute": "color",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "BAGS_COLOR_NP_01",
            "text": "[X]散场后寄存处堆满随身物，朋友越过标签先指向[X]肩边常出现的颜色。工作人员核对后果然属于[X]，同一色块靠近提握处已经被手掌磨浅，和遮住的边角形成清楚的新旧层次。"
          },
          {
            "id": "BAGS_COLOR_NP_02",
            "text": "[X]整理玄关柜时，找到一条遗落许久的旧肩带，扣回当天身侧携带物后，褪色的带面仍能自然接上主体颜色。旁边新买的备用带材质完全不同，[X]却也沿着同一色彩方向选择，只把最旧一条开裂的边缘送去修补。"
          },
          {
            "id": "BAGS_COLOR_NP_03",
            "text": "[X]给玄关换挂钩时，没有只按墙面挑色，而是带着每天放在肩边的随身物去看样。几块样品轮流贴上墙后，[X]留下能让主体颜色自然显现的那块；拆下的旧挂钩背面，也有不同随身物长期摩擦留下的相近色迹。"
          },
          {
            "id": "BAGS_COLOR_NP_04",
            "text": "[X]夜间车窗映出肩侧的一片颜色，同行人说即使街灯改变，它仍像[X]平时会带在身边的色调；手机里几次夜行照片也都有相近色彩落在同一位置。"
          },
          {
            "id": "BAGS_COLOR_NP_05",
            "text": "[X]手边携带物的边角沾上灰尘，[X]熟练拿出对应护理用品；室友说那瓶清洁剂几乎只为这种颜色服务，换过几件随身物仍一直在用。"
          }
        ],
        "B": [
          {
            "id": "NP_BAGS_COLOR_V10_001",
            "text": "出门前，[X]总把钥匙、水杯和笔记本装在一起，斜挎在身侧。衣服每天会换，身侧的颜色却连续几年都在同一组熟悉的色调里打转；[X]喜欢这种不用再对着镜子反复搭配、拿起来就稳妥的感觉。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_002",
            "text": "十年来，[X]常在天亮前出门，那时伴侣还在睡觉。钥匙、午饭和一本书会在前一晚装在一起，一根肩带搭在卧室门边的椅背上。[X]不用打开顶灯，就能看见那片熟悉的颜色，把装好的东西从旁边衣物间轻轻提起来，再安静离开。去年底部终于磨破时，[X]仍选了同样容易在暗处找到的颜色；如今新的肩带每晚也搭回这把椅子。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_003",
            "text": "八年来，家里的孩子常把大家出门的样子画下来。一张张画里，孩子总在[X]身侧涂上一大块相同的颜色；那正是[X]每天把钥匙、水杯和笔记本装在一起、用短肩带带出门的位置。[X]真心喜欢画里这处熟悉的颜色，平日也一直愿意选它。旧的那件磨坏需要替换时，孩子把以前的画和几张色样摆在一起；熟悉的颜色重新回到[X]身侧时，两个人都笑了。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_004",
            "text": "小时候全家出门，大家会把各自的水和零食装好拎着，回家后再按颜色拿回各自房间。如今[X]把钥匙、水杯和书装在一起带走时，仍会选那个从小认作“自己的”颜色；每次拿起来，那种熟悉感都很踏实。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_005",
            "text": "每天出门，电脑、饭盒和水杯都由两条肩带稳稳背在[X]身后；回家后，[X]把它放在门垫旁，顺手擦掉底部灰尘。几个月下来，[X]越来越喜欢那些在两次清洁之间不会把每一道小印子都放大的颜色。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_006",
            "text": "十年来，每个周四晚上，[X]都会去补齐家里一周的食物。面包、蔬菜和罐头装在一起，再由两根提手带回家。侧面的一大片颜色会从明亮的超市货架间，经过停车区的阴影，最后来到厨房的暖光下；[X]一边整理食物，一边看着它在这些普通光线里变化。[X]喜欢始终让自己觉得熟悉的那些颜色，旧的磨坏以后也会继续选回。先后替换的几件都在提手处变得柔软，底角也留下了每周使用的擦痕。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_007",
            "text": "和朋友见面时，[X]会把手机、钥匙和水杯装在一起，斜挎在身侧。几次见面都先从评论身侧的颜色开始后，[X]发现自己并不喜欢这种关注；从那以后，出门前总会选择更安静的色调，聊天时也自在得多。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_008",
            "text": "一家人每周去图书馆，借回来的书每次由不同的人用两根提手带回家。几年里，[X]发现，大家都愿意拎的颜色总会被顺手拿起，不会留在门边等别人；后来需要再添一只时，[X]仍会选择全家都乐意带出门的颜色。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_009",
            "text": "每天通勤时，[X]会把证件夹、药盒和手账放在同一个拉链开口里，让肩带贴着身体。排队或坐车时，这些私人物品常在旁人的视线高度；多年来，[X]一直不喜欢从外面看见里面的东西，挑颜色时也会避开透明的选择，拉好以后便不再分心留意别人的目光。"
          },
          {
            "id": "NP_BAGS_COLOR_V10_010",
            "text": "夏天，[X]大多数日子都要步行近一小时，水杯和书由两条肩带贴背带着。几个夏天里轮换过几种颜色后，[X]养成了到家时摸一摸朝阳面的习惯；如今挑颜色，最先想到的是在太阳下背久以后会不会多一层热。"
          }
        ]
      }
    },
    {
      "id": "non_product:bags:style",
      "binding": "non_product",
      "category": "bags",
      "attribute": "style",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "BAGS_STYLE_NP_01",
            "text": "[X]公交车窗映出身侧携带物的轮廓，[X]发现新造型让自己的坐姿显得陌生。同行人只建议把这一处调回平日气质，肩背动作便重新自然。"
          },
          {
            "id": "BAGS_STYLE_NP_02",
            "text": "[X]同事为离职纪念画了一张[X]的漫画，人物脸部很简略，桌边随身物却被画得气质鲜明。大家说只要保留这一处，即使换背景和动作也还是很像[X]。"
          },
          {
            "id": "BAGS_STYLE_NP_03",
            "text": "[X]参加肩背姿势课程时，老师注意到[X]一换成某种身侧造型便会自然找到熟悉站姿，另一方向则不断调整手臂位置。上次课程的动作记录里也出现过同一差异。"
          },
          {
            "id": "BAGS_STYLE_NP_04",
            "text": "[X]送修随身物的当天，只能从共享工作室的借用架临时挑一件装资料。大小合适的有几种气质，[X]拿起其中一种后不再反复换肩，也没有像试用其他款时那样把它藏到椅背后；管理员登记时发现，柜台上待修的旧件虽材质不同，整体风格却落在同一方向。"
          },
          {
            "id": "BAGS_STYLE_NP_05",
            "text": "[X]来到社区修补摊时，师傅正准备给身侧随身物换一块大补片，桌上几种处理会让整体气质走向完全不同的方向。[X]选中的那块材质比原件更新，却和旧工单袋里保存的磨损边角放在一起很协调；师傅据此完成补片，没有再加其他装饰。"
          }
        ],
        "B": [
          {
            "id": "NP_BAGS_STYLE_V10_001",
            "text": "每天出门前，[X]都会先放好手机、钥匙和水，背上肩带，整理一下衣领，再退到走廊的穿衣镜前看一眼。十多年来，[X]最常穿的衣服一直保留着相近的气质，这最后一眼也成了出门前的习惯。只要肩上的轮廓和细节让镜子里的人显得不像平时的自己，[X]就会把肩上的东西放回衣柜搁板，另换一个，直到整身看起来重新熟悉起来。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_002",
            "text": "十二年来，[X]大多数周六早晨都会去同一个社区菜市场。出发时，[X]先把卡夹和折好的购物单装好，再把肩带斜挎在身侧；沿着摊位走下去，青菜、水果和面包会一点点把里面装满。到最后一个摊位，[X]常会停下来理好提手，看一眼装满后的整体轮廓。那些满载时仍保留自己喜欢的设计气质的，总会被一路拎回家，提手和边角也很快出现长期使用的痕迹；一装东西就失去[X]喜欢样子的替换品，往往去不了几次市场便不再出现。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_003",
            "text": "每隔几个月，肩带接缝或边角需要收拾时，[X]会在餐桌上铺一条旧毛巾，把针线、补片和备用金属件摆开。[X]拿起几种试一试，把其中一些放回盒里，把熟悉的那组留在手边。几年里，不同位置陆续修过几次；每次动手前，[X]都会把上一次修好的地方转到灯下看一眼，再照着原来的样子继续做。第二天早上，[X]照常装好书和钥匙，再带着出门。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_004",
            "text": "每个月，[X]和几位朋友都会轮流在家做一顿饭。[X]把手机、卡包、相机和折叠伞装在一起，背在肩上带来，进门后放在座椅旁。饭菜上桌前，朋友们常会从它的轮廓或某个显眼细节问起，[X]也喜欢讲一讲它背后的来由。这样的聊天持续了很多年；下一次聚餐前，[X]最先拿起的，通常还是有着这类轮廓和细节的那几件。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_005",
            "text": "[X]不喜欢早晨在电梯里刚和邻居打招呼，话题就立刻落到肩上的东西上。几年下来，凡是轮廓和细节总会引来追问的，[X]渐渐就不再带出门；那些只需照常点头问候就能走出电梯的，第二天早上仍会装着手机、钥匙和折叠伞，之后也会一天天继续使用。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_006",
            "text": "每到周日，[X]都会把水果、报纸和药装在一起，拎着硬挺的提手去看望家中长辈。进门放到椅边后，长辈常会摸一摸提手或扣件，说起很多年前进城的往事；[X]坐下来听，有时还会听到以前没讲过的细节。几年下来，带着这些轮廓和细节的那几件，总是[X]下个周日装水果前最先拎起的。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_007",
            "text": "每周三晚上，[X]都会和朋友饭后沿着同一条街散步。街上开始出现新的肩背轮廓或提手造型时，[X]常会放慢脚步，留意它的比例和显眼细节。朋友看着这个习惯已经很多年：只要某种视觉方向连续几次散步都让[X]回头看，过不了多久，[X]就会开始用带着相近轮廓的那一件装手机、钥匙和书；接下来几个月再一起散步时，朋友总能在[X]肩上看到它。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_008",
            "text": "排队等候时，[X]空着的手常会沿着肩上的外轮廓滑过去，经过一处接缝，再停在扣件或另一个微微凸起的细节上。最近[X]清理几件旧物时，最常带出去的那些，都在相似的手指路径上磨出了光。这个习惯已经保持了很多年；如果沿着外轮廓摸一圈都找不到熟悉的落点，试过几次以后，[X]就很少再带着它，也不会留下同样的光亮痕迹。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_009",
            "text": "[X]生日前，家里人会视频商量一份合送的礼物。[X]从衣柜搁板上取下用了很久的两件，放到镜头前并排摆好，再转动着给大家看轮廓和金属细节，说一说为什么两件都让自己觉得熟悉。这样的通话已经有过好几年。现在[X]刚把两件摆好，家里人就能接着指出反复出现的视觉线索；后来选来的礼物，也很快会装着[X]的手机、钥匙和书进入日常轮换。"
          },
          {
            "id": "NP_BAGS_STYLE_V10_010",
            "text": "十年来，[X]每天早晚都会牵着同一只已经年老的狗在附近散步。钥匙、水和狗要用的小物装在一起，[X]把肩带斜挎在身侧，双手可以空出来牵绳、和熟人打招呼。常见面的散步者往往在他们走到街角前，就认出了这个熟悉的随身轮廓。[X]喜欢这种视觉气质已经成为日常路线的一部分；替换后若调好肩带、装好东西仍显得不像自己，很快就会留在家里，熟悉的那些则每天跟着出门两次，直到底角也磨得柔软。"
          }
        ]
      }
    },
    {
      "id": "non_product:bags:water_resistance",
      "binding": "non_product",
      "category": "bags",
      "attribute": "water_resistance",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "BAGS_WATER_RESISTANCE_NP_01",
            "text": "[X]抱着借阅资料走出图书馆时突然下雨，[X]先把纸张移到肩侧携带物的固定内部位置，再决定是否继续走。同行人知道，只有达到某种受潮程度[X]才会中断路线，因为以前几次归还日已经形成同一判断。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_NP_02",
            "text": "[X]买完冷冻食品后，身侧收纳空间内部出现冷凝水，[X]按熟悉顺序检查其他物品是保持原位、加隔层还是立即取出。收银员见过几次相同采购，已经会主动递来[X]常用的吸水纸。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_NP_03",
            "text": "[X]水边活动结束后，湿毛巾需要和手机、票据一起带走。[X]根据随身收纳空间的隔水能力决定直接放入、另加袋子或完全分开；同行人不用问便照过去出行的分工递物。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_NP_04",
            "text": "[X]挤进地铁后，湿伞只能贴着身侧携带物放置。[X]立即判断是否需要换边、加隔挡或无需处理；常同路的人已经知道哪种结果会让[X]在下一站下车整理。"
          },
          {
            "id": "BAGS_WATER_RESISTANCE_NP_05",
            "text": "[X]在诊所按要求反复洗手后，手上水珠总落到腰侧随身收纳处。[X]根据内部物品是否受影响选择擦拭、晾置或不处理，护士看到固定流程便把纸巾放到熟悉位置。"
          }
        ],
        "B": [
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_001",
            "text": "[X]住的地方一到雨季，几乎每个下午都可能突然下大雨，[X]去附近办事仍大多步行。笔记本、药盒和手机装在一起，由两条肩带背着。淋透回家后，[X]第一件事就是翻开笔记本，再摸一摸药盒的边角。这个检查已经持续了很多年：只要里面有一样受潮，[X]就会把随身带的那件晾干，下次下雨不再带它；能让每一页纸和每个盒角都保持干燥的，才会继续每天使用。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_002",
            "text": "连续八个夏天，[X]出门前都会给同一只金属水杯装满冰水。水杯竖着放好，纸质手账和耳机也装在旁边，[X]用一根肩带挎着出门。到了中午，金属表面常已结满水珠，杯底周围也积着一圈潮气。翻开手账以前，[X]会先擦干水杯，再摸一下紧挨着它的纸边。能让纸张保持干燥的替换品会在整个炎热季节反复出现；若普通用了几天，潮线便会爬进纸页，[X]很快就会把它放到一旁。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_003",
            "text": "[X]住的地方一年里大部分时间都很潮湿。出门前，[X]会先把手机和纸张分别收进合好的防潮套，再和钥匙、空水杯、折叠布一起用两根提手带着。潮湿天气回家后，[X]把东西全部取出，再把柔软的两侧撑开晾一夜。几年下来，水迹有时会透过织面，却总能在早晨完全干掉，单独收好的手机和纸张也没有受潮；那些外层水汽散不出去、摸起来仍然发潮或渐渐有闷味的，用得越来越少，能一夜干透的则会重新进入日常轮换。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_004",
            "text": "十三年来，[X]大多数周日早晨都会去祭扫一位家人。花剪、抹布、水杯和一张小卡片装在一起，[X]用一根肩带挎着。下过雨以后，即使小路已经干了，墓旁低矮的石边常仍带着潮气；[X]会把它从肩上取下来，搁在石边，再修剪花枝、擦拭碑面。离开前，[X]会摸一下底部的小卡片和折好的抹布。能让两样都保持干燥的，下个周日还会继续带去，底边也渐渐磨得光滑；若石面的潮气会透进去，就不会再陪[X]度过这个熟悉的早晨。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_005",
            "text": "下雨天进入室内后，[X]会收起折叠伞，把伞上的腕带套到同一根提手上，和邮件、笔记本、手机、钥匙一起带回家。到家之前，湿伞一直贴着其中一侧。几年下来，[X]进门后总会先擦那一面，再检查邮件和笔记本的边缘；纸张保持干燥时，下一次下雨仍会把伞挂在同一根提手上。里面一旦出现潮线，[X]就会把伞单独拎着，直到换成能让纸边保持干燥的那一件。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_006",
            "text": "冬天去附近的地方时，[X]会把手机、手套和保温杯装在一起，用两根提手带着，细雪常会落满外层。走进温暖的门厅，积雪就开始融化。几年下来，[X]总会握着提手轻轻甩两下，再用围巾角按一按表面；围巾角仍然干燥时，[X]才会重新把它贴在髋侧，按出水迹就继续拎在手里，免得浸湿外套。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_007",
            "text": "每年雨季开始前，[X]都会把常用的几件带提手或肩带的东西排在浴室里，在各自的内角放入同样的吸水纸，再从相同距离用花洒淋同样长的时间。计时结束，[X]逐一打开，记下第一处湿痕出现在哪里。这个检查已经连续做了很多年；每次记完，[X]都会翻出前几个雨季的记录逐项对照，把能通过同一套检查的继续用于日常，其余的留到干燥月份。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_008",
            "text": "炎热月份里，[X]日常出门大多乘公交，手机、钥匙和水装在一起，由两条肩带贴在背后。一路站在闷热的车厢里，下车后[X]会把手伸到衣服和背面之间摸一下。几年下来，那些把汗水长时间闷在衣服上的越来越少使用；去车站时偶尔会遇到毛毛雨，透气织面有时内外一起变深，却能让空气穿过，回家后很快干掉，[X]仍会日复一日地拿它们出门。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_009",
            "text": "在外面洗完手后，[X]常会趁手指还没完全干，就立刻从肩侧取手机、交通卡或纸巾，细小水珠会落在开口和接缝附近。这个动作日复一日，已经保持了很多年。只要接缝会把水慢慢带进去、让纸巾受潮，[X]就会渐渐不再带它；水珠一直留在表面、随手一擦就掉的，则会继续日常使用。"
          },
          {
            "id": "NP_BAGS_WATER_RESISTANCE_V10_010",
            "text": "[X]每天都要随身带备用助听器电池、日常药品和手机，前两样受潮就可能损坏。每天早上装好以后，[X]会把开口卷三次，扣住两端，再按一下两侧，听有没有空气漏出去。这个出门动作已经保持了很多年；只要开口变松或开始漏气，[X]就会立刻把里面的东西转移到别处，将它放到一旁，能一直密封住的才会继续每天背在肩上。"
          }
        ]
      }
    },
    {
      "id": "non_product:jewelry:color",
      "binding": "non_product",
      "category": "jewelry",
      "attribute": "color",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_COLOR_NP_01",
            "text": "[X]孩子画[X]时，在耳侧和腕间加了几处熟悉颜色；翻开以前的画，那些小色点位置会变，色调却始终落在相近范围。"
          },
          {
            "id": "JEWELRY_COLOR_NP_02",
            "text": "[X]多年未见的朋友在昏暗聚会里先从颈间一闪而过的颜色认出[X]，走近后说这种贴近脸部的色调从学生时代就很好认。"
          },
          {
            "id": "JEWELRY_COLOR_NP_03",
            "text": "[X]化妆师为[X]调整脸部色调时，主动给耳侧和颈前留出熟悉的色彩空间；她说几次合作中，[X]最终都会让这些小面积颜色落在相似冷暖关系里。"
          },
          {
            "id": "JEWELRY_COLOR_NP_04",
            "text": "[X]摘下腕间贴身小物时发现颜色因汗水发生变化，家人以为[X]会丢掉，[X]却熟练拿出对应护理布；那块布上已留下多次处理相近色面的痕迹。"
          },
          {
            "id": "JEWELRY_COLOR_NP_05",
            "text": "[X]拍照闪光后，摄影师注意到耳侧小物的颜色总以相似方式提亮面部；翻看几次不同活动的照片，即使造型改变，这处色彩分量仍很像[X]。"
          }
        ],
        "B": [
          {
            "id": "NP_JEWELRY_COLOR_V10_001",
            "text": "多年来，[X]一直不愿在店铺偏色的展示射灯下决定。看到耳边、颈间或指间佩戴的小件时，[X]会请人拿到敞开的门口，在自然光里转一圈再看。店内显得好看的颜色有时会立刻放回托盘，到了户外仍觉得顺眼的那一类颜色则一次次被[X]带回家；后来再戴来时，边缘已经因频繁使用变得柔和，还留下了细小的磨痕。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_002",
            "text": "每个月第一个星期日，[X]都会在桌上铺一块白布，清洁耳垂上的小扣件、指间的细圈和颈间的细链。有些表面会被擦到恢复原本的明亮，有些则会停在[X]偏爱多年的柔和旧色。某件东西需要维修时，[X]会另带一件常用的小物给对方参照，修好的颜色接近原来那一组才重新戴上。几年里，白布上摊开的具体小件不断更换，[X]最后戴回身上的表面颜色却总落在熟悉的范围里。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_003",
            "text": "[X]一直不容易分清彼此接近的颜色。家里用于耳边、颈间和指间的小件分别放在中性色卡上，卡片写着色名，[X]不用每次都请别人确认。多年来，那些从卡片上拿起后既容易辨认、又让[X]觉得好看的颜色总被反复戴着；仍然需要猜测的色名则大多留在原处。同住者偶尔会更换磨旧的卡片，也早已知道哪些色名要放在[X]最顺手的位置。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_004",
            "text": "一位年长亲属的记忆逐渐衰退，有些日子需要想一会儿才能叫出[X]的名字。可[X]耳边或衣领附近那种熟悉的颜色，仍会让亲属马上笑起来，伸手轻轻碰一下。许多年里，具体小件有过遗失、改尺寸和替换，[X]却一直愿意延续这个颜色，也越来越喜欢它留在自己身上的样子。相同颜色的替换件，也会很快在平日佩戴中磨出柔和的使用痕迹。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_005",
            "text": "每次处方度数变化，[X]去试新镜框时都会带上两件平时常戴在耳边和颈间的小件。验配人员会把候选镜框逐一放到旁边，[X]则转向窗边，看那种熟悉的颜色与新镜框放在一起是否依然顺眼。多年来，镜框因度数和贴合度已经换过几次；凡是让[X]偏爱的那种颜色在脸旁显得暗淡或别扭的候选，仍会被放回去。两件参照物表面的光泽和磨圆的边缘，也都是普通日子里反复佩戴留下的。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_006",
            "text": "多年来，[X]每天早晨都会在手腕或颈间戴上一件带着熟悉颜色的小物。周围让人感到过载时，[X]会低头看一眼那处颜色，或用手指轻轻转动小件，完成已经很熟练的安定动作。最初那件后来磨薄了，之后的替换件在形状和扣合方式上各不相同，[X]却一直选择相同的颜色，因为看见它既觉得安心，也真心觉得好看。每件替换物很快都会留下每日佩戴形成的光泽。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_007",
            "text": "七年来，[X]每个月都会参加两次社区珐琅课。每次开窑都会出现一大片不同的烧色样片，[X]也会记下粉料烧成后的变化。只有[X]真正愿意戴的颜色，才会装上耳垂扣件、颈间细链或指圈；其余仍作为平片留在课堂样本册里。造型和烧制批次不断变化，真正跟着[X]离开教室、戴在身上的成品，却总回到熟悉的颜色范围。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_008",
            "text": "多年前，[X]收到一件颈间小物，盒中配有多块可以替换的彩色嵌片。外框、细链和扣法都保持不变，[X]只需更换嵌片就能改变露出的颜色，不会影响贴身的位置和触感。其中一块多年反复被装回外框，表面已经留下细小的拿取痕迹，另外几块却几乎原样留在盒中。扣件后来需要更换时，[X]仍保留了偏爱的那种颜色，也开始在耳边和指间的小件上选择它。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_009",
            "text": "从青春期起，[X]的面颊和颈侧就很容易随温度变化泛红。贴近脸部的颜色会随着肤色平复或变红呈现出不同效果，多年来，[X]在两种状态下都戴过不同颜色的耳垂和锁骨小件。有些颜色一开始泛红就让[X]想摘下来，偏爱的那种却始终看着舒服，也确实让[X]觉得好看。这个颜色的具体小件有过遗失和损坏，替换后很快又会成为[X]最常伸手拿取的那些。"
          },
          {
            "id": "NP_JEWELRY_COLOR_V10_010",
            "text": "六年来，[X]和一位亲属每隔一个星期日都会一起涂指甲。开瓶以前，[X]会把最常戴的指间细圈排在毛巾边，先看自己一直舍不得换掉的那种颜色，再从当天想试的甲油里挑一个搭在一起看着舒服的。甲油颜色不断添减，细圈的宽窄和造型也换过，[X]却始终围绕那种熟悉的颜色来选。等指甲干透，这些细圈总是[X]最先戴回手上的东西。"
          }
        ]
      }
    },
    {
      "id": "non_product:jewelry:style",
      "binding": "non_product",
      "category": "jewelry",
      "attribute": "style",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_STYLE_NP_01",
            "text": "[X]投影灯把[X]手腕和手指的影子放大到墙面，贴身小物带出的气质也被一并放大。[X]觉得临时造型过于陌生，调回平常细节后，同行人从影子里就认出熟悉的动作。"
          },
          {
            "id": "JEWELRY_STYLE_NP_02",
            "text": "[X]花艺师为[X]做现场肖像布置，发现耳颈附近的细节与花材气质互相争抢。只调整那些小型贴身轮廓后，画面既保留主题又重新像[X]；花艺师从前一次合作也记得类似边界。"
          },
          {
            "id": "JEWELRY_STYLE_NP_03",
            "text": "[X]动作老师让[X]做一段手势练习，注意到腕间细节一换气质，[X]便不自觉改变手指力度。恢复熟悉方向后动作松弛下来，旧课程记录也显示同类变化。"
          },
          {
            "id": "JEWELRY_STYLE_NP_04",
            "text": "[X]家人把一段旧事做成小册子，插画师只用耳侧和胸前几个细节区分人物。长辈看到[X]那页后要求改回更熟悉的气质，修改后即使不写名字，大家也不再认错。"
          },
          {
            "id": "JEWELRY_STYLE_NP_05",
            "text": "[X]试衣时，裁缝用磁性小样模拟耳颈附近的不同气质，观察领口整体效果。[X]不需要完整造型便指出哪一方向最像自己；裁缝随后从写有[X]姓名的样品袋里倒出两枚材质不同、表面已经磨花的旧小样，它们与这次选中的气质仍能自然放在一起。"
          }
        ],
        "B": [
          {
            "id": "NP_JEWELRY_STYLE_V10_001",
            "text": "十二年来，[X]每隔六周都会去同一家店理发。围布扣好以前，[X]会把耳垂和锁骨附近的小件取下，放进浅盘。发长和发型已经变过许多次，剪完以后，[X]仍会按照自己喜欢的线条、比例、装饰分量和年代气质，决定把哪些重新戴回去。理发师通常在[X]伸手以前就猜得到结果。反复被选中的那些会带着磨得柔和的边缘再次出现在后来的预约里，整体设计也一直让人觉得熟悉。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_002",
            "text": "十五年来，大多数晚上[X]都会收拾餐桌，再清洗家里的碗碟。把手伸进水槽以前，[X]会将指间和腕间的小件放到沥水架旁同一个小碟里。最后一只盘子收好、双手擦干后，[X]很享受按照线条、比例、表面处理、装饰分量和年代气质，挑选要重新戴回去的那些。伴侣早已认得这个夜夜回到[X]手上的设计气质。具体小件修过也换过，反复被[X]扣回身上的那些，常碰触的位置都渐渐变得光滑。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_003",
            "text": "十三年来，[X]大多数早晨都会先把小型助听设备放到双耳后，再对着镜子确认位置。随后，[X]会在耳垂和锁骨附近扣上小件，按照自己喜欢的线条、体量、表面处理和装饰分量，让脸颈周围看起来仍像熟悉的自己。助听设备几次更新，外壳的形状和颜色都变过，[X]喜欢的线条和细节却没有跟着改变；旧件磨损需要替换时，[X]仍会选择相近的设计。最常回到身上的那些，扣合处已经变得光滑；普通家庭照片里，它们也曾先后出现在不同代的设备旁边。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_004",
            "text": "十年来，每个周日[X]都会和住在外地的姨妈视频，两个人隔着屏幕折同一个新纸样。手指和手腕一直贴近纸面，指间的细圈与腕间的链节会在聊天中显出各自的线条、比例和细节。容易勾住纸角的会被[X]放回小碟，继续戴着的则总带着[X]长久喜欢的设计气质。如今[X]的双手一进入画面，姨妈就能认出这种熟悉的样子；那些反复出现的小件，表面也渐渐磨出了柔和的光泽。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_005",
            "text": "十多年来，[X]每个月都会参加编织小组。领口快完成时，[X]会先戴上平时最常用的颈间和耳垂小件，再决定最后的开口和收边宽度。毛线、衣物和领口不断变化，用作视觉参照的线条、比例和装饰多少却一直很熟悉。其他成员如今在帮忙固定最后一圈以前，会先看看[X]当天戴着什么。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_006",
            "text": "九年来，每个周六早晨，[X]都会清理家里的鱼缸。把手伸进水里以前，[X]先把指间和腕间的小件取下，放进毛巾旁的带盖小碟。擦好缸壁、换完水并把双手擦干后，[X]会按照自己真心喜欢的线条、表面处理、比例和装饰分量，挑选要重新戴回去的那些。家人只要看到打开的碟盖，就能认出哪一组属于[X]。具体小件已经换过，清理后回到手上的那些也会继续陪[X]度过平日，边缘因此渐渐磨得温润。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_007",
            "text": "许多年来，每逢手作市集开季，[X]都会去同一个摊位看看。摊主如今不再把耳边、颈间和手指上佩戴的小件全部铺开，而是先按[X]一贯选择的线条、年代气质和装饰分量留出一小排。[X]仍会逐件试戴、照镜子，视觉上很不像自己的那些很快就会放回托盘；带回家的小件后来常常戴着，以至于下次见面时摊主还能认出来。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_008",
            "text": "十二年来，[X]每年两次都会把平时戴在耳垂、颈间、手腕和指间的小件带到同一个清洁柜台。店员先记录松动的扣合处和磨损边缘，再把它们排在深灰色垫布上准备清理。颜色、材质和具体小件不断变化，[X]真正一次次带回来的那组，线条、年代气质和装饰分量却始终彼此相近。清洁结束后，[X]会先把这些熟悉的小件戴回身上；半年以后，它们又会带着相同接触位置的新光泽回到柜台。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_009",
            "text": "十多年来，[X]的家人每到冬天都会抽签交换礼物。耳边、颈间、手腕或手指上佩戴的小件曾多次出现在[X]的礼物里，亲友也渐渐从后来真正戴出来的情况摸清了[X]的偏好：有些很快成了日常样貌里熟悉的一部分，气质明显不合的那些则认真道过谢后便很少再出现。现在，抽到[X]的人会把两个候选样式发给熟悉[X]的亲友，问一句“这个像不像[X]会戴的？”答案通常来得很快，而选对的礼物过完节很久仍会经常出现。"
          },
          {
            "id": "NP_JEWELRY_STYLE_V10_010",
            "text": "[X]从小在左耳下方就有一块深色胎记。多年来，[X]不再费心遮住它，而是借助耳垂两侧扣着的小件来安排周围的平衡。出门前，[X]会对着镜子分别转过两侧，看整体线条、年代气质和装饰分量是否顺眼。旧照片里的具体小件已经换过许多，反复被[X]选中的设计气质，以及两侧小件与胎记之间的平衡，却一直很容易辨认。"
          }
        ]
      }
    },
    {
      "id": "non_product:jewelry:motif",
      "binding": "non_product",
      "category": "jewelry",
      "attribute": "motif",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "JEWELRY_MOTIF_NP_01",
            "text": "[X]孩子指着[X]颈前反复出现的小象征，已经会讲出它为什么重要；换到腕间或耳侧时，孩子仍能认出同一主题并把它和[X]联系起来。"
          },
          {
            "id": "JEWELRY_MOTIF_NP_02",
            "text": "[X]在重要纪念日里，[X]下意识触碰胸前一个熟悉形象，家人没有询问便明白[X]正在想谁或想什么；这个动作已在多个相似日子成为彼此都懂的信号。"
          },
          {
            "id": "JEWELRY_MOTIF_NP_03",
            "text": "[X]带学生做小组标牌时，大家需要临时选一个图形作为共同符号。[X]抬手分发材料，腕间的小主题刚好落进视线，学生便沿着它剪出不同版本；桌边两条材质不同的替换细件，也各自保留着同一主题的变化。"
          },
          {
            "id": "JEWELRY_MOTIF_NP_04",
            "text": "[X]安检时需要暂时取下颈间小物，工作人员随口问起上面的形象，[X]很自然地讲出它的来历。同行人已经替[X]接住取下的小物，手指正好避开图形上被反复触摸得最亮的凸起；讲完后，[X]也下意识摸了同一位置才重新戴好。"
          },
          {
            "id": "JEWELRY_MOTIF_NP_05",
            "text": "[X]腕间小象征掉了一部分，修复师问是恢复原主题还是换成别的；[X]从旧照片指出它在不同人生阶段都出现过的位置，只要求补回原意。"
          }
        ],
        "B": [
          {
            "id": "NP_JEWELRY_MOTIF_V10_001",
            "text": "每年同一个家庭纪念日，年幼的亲人都会问起[X]锁骨附近那个小小的、很好辨认的符号。它在普通日子里经常被摸到，表面已经渐渐光滑，颈后的扣件也换过不止一次。[X]会再次讲起和它有关的那段记忆，饭后再把它挂回镜子旁平时常用的挂钩。每当细链或底托磨坏，[X]仍会选回这个对自己有意义的符号。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_002",
            "text": "多年来，每到春天，[X]都会参加社区物种记录，并在第一个集合点打开同一本观察笔记。写字时，腕间连接带上垂下的一个小小凸起轮廓会轻碰纸面。熟悉的参与者都知道，这个形态来自[X]曾经认真观察过的一种本地生物，也从那以后一直被[X]当作个人标记。轮廓背面和连接带内侧已被日常佩戴磨得光滑，[X]在其余季节也一直戴着这个熟悉的自然形态。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_003",
            "text": "十二年来，每个月第一天晚上，[X]都会和家人一起更新墙上的大幅纸质月历。每个人的安排旁边都有一个小小的手绘记号，[X]总会在自己的日期旁画上同一个容易辨认的图形。普通日子里，[X]的耳垂或衣领附近也戴着相同的小轮廓，家人给[X]留便条时便会顺手画上它。耳针、后扣和细链都更换过，[X]仍一直保留这个熟悉的符号，也很喜欢它同时出现在月历和自己身上的样子；反复佩戴已经把边缘磨得光滑。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_004",
            "text": "多年来，每天早晨，在安静坐上几分钟之前，[X]都会把指根细圈上略微凸起的符号转到正面。每周相聚的熟人知道[X]赋予它的含义，有时也会问起已经磨得发浅的浮雕。手指尺寸变化后，细圈调整过，[X]仍把同一个符号留在每日这段安静时间里。需要再选贴身佩戴的符号时，[X]也会回到承载同一种信念或承诺的那个。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_005",
            "text": "每天早晨，[X]都会伸手摸进一个浅盘，用指腹沿着几件贴身小物中央的凸起轮廓慢慢辨认。视力有限时，[X]先凭触摸认出那个对自己有意义的形态，再在颈后或腕间扣好。家里人知道不要随意调整浅盘的位置，不过[X]仍会略过过于平滑或难以辨认的形态，先拿起那个熟悉的符号。多年来，[X]每天最先拿的都是这个摸起来熟悉的符号。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_006",
            "text": "每周和亲人一起烘焙时，[X]都会先把腕间垂下的小符号塞进袖口，再开始揉面。亲人会指出，它的轮廓和旧食谱盒及常用卡片上的家族记号相同。[X]多年前就采用了这个记号，小轮廓的边缘也被日常佩戴磨得柔和。烘焙结束后，[X]会把它从袖口拉出来，重新落在腕间。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_007",
            "text": "多年来，[X]每个月都会参加社区互助活动，衣领附近固定着一个小徽记。熟悉的参与者还没看姓名卡就知道它代表的议题或承诺，新来的人也会在签到时问[X]它的含义。后扣松过并换过，同一个符号在活动结束后仍留在[X]平时穿的衣服上。[X]一直选择这个徽记，因为它公开表达的含义和自己的长期承诺相符。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_008",
            "text": "多年来，[X]会看到耳垂后的小后扣在枕套上留下压痕，早先较凸的版本睡觉时还曾勾住松线。[X]后来换成更平的浮雕和更贴近皮肤的后扣。每次调整固定方式或厚度，自己熟悉的那个具象符号都会保留下来。现在这一版已经被日常佩戴磨得光滑，枕套也不再勾线，[X]每天戴的仍是那个符号。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_009",
            "text": "十一年来，每个周日晚上，[X]都会清洗长发并做护理。进浴室以前，[X]先把颈间的细链、指根的细圈和耳垂上的小耳针逐一取下，放进干燥的小碟里。它们尺寸不同，佩戴位置也不同，上面却都有同一个容易辨认的小图形。头发用毛巾擦干后，[X]会按相同顺序把它们重新戴回去。细链和后扣已经换过，熟悉的图形仍每周回到颈间、指间和耳垂，边缘也在平日佩戴中渐渐磨得光滑。"
          },
          {
            "id": "NP_JEWELRY_MOTIF_V10_010",
            "text": "多年来，[X]每个月都会给住在远方的朋友写一封纸信。封好信封前，[X]会把指根细圈上凸起的一面按进温热的封蜡，留下同一个容易辨认的小图形，再擦干净戴回手上。收信的人还没看署名就知道是谁寄来的。信纸、地址和内容都换过，压在信封上、也戴在[X]手上的图形始终相同。"
          }
        ]
      }
    },
    {
      "id": "non_product:glasses:sport",
      "binding": "non_product",
      "category": "glasses",
      "attribute": "sport",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "SHARED_SPORT_NP_01",
            "text": "[X] 结束康复后的第一次完整周末，医生只提醒要逐步恢复活动。[X] 没有在各种项目之间试来试去，而是先联系原来一起练习某项运动的人，从最熟悉的一组动作重新开始；伙伴也早已替 [X] 保留了回归的位置。"
          },
          {
            "id": "SHARED_SPORT_NP_02",
            "text": "[X] 刚搬进新社区，纸箱还堆在客厅，就沿着附近街区寻找能继续参加某项运动的场地。看到合适的设施后，[X] 当场记下开放时间，又把照片发给以前的搭档，请对方看看这里能不能延续原来的练习方式。"
          },
          {
            "id": "SHARED_SPORT_NP_03",
            "text": "[X] 在下班路上接到老队友的临时电话，有人缺席，希望 [X] 来补位。虽然已经很久没和这群人碰面，[X] 听到是哪项运动后还是立即改了晚上的安排；到了现场，身体很快找回了熟悉的节奏和站位。"
          },
          {
            "id": "SHARED_SPORT_NP_04",
            "text": "[X] 陪朋友参加社区体验日，本来只是旁观，经过某项运动的区域时却停了下来。工作人员递来体验名额后，[X] 不需要照着示范慢慢摸索，很自然地调整了动作细节；朋友看了一会儿，便主动把原定晚餐改到更晚，让 [X] 把这一轮完整做完。"
          },
          {
            "id": "SHARED_SPORT_NP_05",
            "text": "[X] 所在的部门准备周末团建，初稿里的方案几乎都带训练或比赛性质。方案发到群里前，熟悉 [X] 的同事在末尾补了一个不按运动项目组织的选项；[X] 看完后直接在这一项旁边填了名字，又把自己收集的散步路线和展览时间发给大家参考。"
          }
        ],
        "B": [
          {
            "id": "NP_GLASSES_SPORT_V10_001",
            "text": "连续九个冬天，[X]大多数周日都会去同一座山滑雪。每个雪季开始前，[X]会把滑雪头盔带到同一家专科验配点，扣好下巴带，再戴上雪道上使用的有度数镜片副。[X]会转头看向上坡，俯身做出下滑姿势，再弯腰重新扣一下靴子。只要整副偏离双眼中央，或被头盔压得耳侧发痛，就会放回托盘。处方变化带来过几次替换，每周日重新出现在缆车上的，始终都通过了这套熟悉动作。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_002",
            "text": "八年来，[X]每周二晚上都会在同一个泳池游固定的几个来回。每次训练里，[X]会在出水时看墙上的时钟，在泳道两端转身，最后再加快游几趟。回到更衣室后，贴合眼周的有度数镜片副会和泳帽一起冲洗；[X]沿密封边摸一圈，检查后带，再放好晾干。普通处方副始终留在储物柜里，擦干身体后才重新戴上。密封边和度数都换过，每一副替换品仍要完整游过同样的泳程，没有进水或移位，才会加入每周这套习惯。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_003",
            "text": "七年来，[X]每个月第一个周日都会参加一次户外软弹对抗。最后一局结束后，[X]会在准备区的工作灯下清洁包覆眼周的镜片副，检查中央、侧缘、鼻梁连接和固定带。有一次，一颗软弹在外表面留下了清楚的撞痕，整副仍留在原位，眼周也一直被遮住。后来有一副在桌边戴着很舒服，做下蹲、转身的安全演练时却发生移位，侧面露出空隙，[X]当天便把它移出了专用硬盒。下个月仍会带去的，始终是能在真实动作里完整护住眼周的那副。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_004",
            "text": "十年来，[X]每周六都会到同一块社区球场参加棒球训练。热身前，普通处方副先放进硬盒，带防滑接触点和通风间隙的那副再戴好。无论是在垒间加速、突然转头追高飞球，还是低头处理滚地球，即使汗已经流到鼻梁，它仍会对准双眼。训练结束后，这一副会和手套一起回到搁板上。具体的副已经磨损更换过，处方也有变化；每个周六，[X]仍会先扣好普通副的硬盒，再伸手去拿手套旁边那副。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_005",
            "text": "十二年来，[X]大多数周六早晨都会在同一组公共球场打双打。发球、高压球、快速横移和网前来回中，脸上的镜片副始终对准双眼，[X]可以把视线从远处底线的球切到身旁的搭档。每次交换场地，[X]都会用球拍包旁的毛巾擦掉鼻梁支撑处的汗，再戴好继续下一局。处方变化和刮痕让具体的副更换过几次；现在这一副每场结束后仍回到同一个侧袋，耳侧支撑也被每周使用磨得发亮。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_006",
            "text": "八年来，[X]每周都会去同一个有监督的室内靶场俱乐部。有一次忘了带专用的有度数镜片副，[X]只能借用一副清洁过的公用副。它的耳侧结构会挤到听力防护，每次把枪托抬到肩上时又会移位，[X]只能反复停下来调整。从那个晚上起，门边清单的第一项就是自己的那副；收拾靶场用品时，也会先把它放进硬盒，再放听力防护。处方变化后，[X]会戴上替换品和听力防护，重新做一遍枪托贴肩、瞄准和放下的动作，确认不会被挤动，下一次去靶场时才会戴上。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_007",
            "text": "九年来，[X]每周都会和同一个俱乐部练习草地曲棍球。每年，大家都会从正面和侧面录一次训练动作：[X]持杆加速，压低身体进入防守姿势，再快速转身追随传球。早期录像拍到普通处方副随着速度提高沿鼻梁下滑、逐渐歪斜，尽管[X]在练习中几乎没察觉。后来使用的专用副在画面里始终对准双眼，[X]也不再需要抬起下巴找球。处方更新以后，替换品仍会先进入这次年度录像，确认相同动作里没有下滑，才用于接下来的每周训练。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_008",
            "text": "十一年来，[X]大多数周末都会参加同一个夏季板球联赛。每年验光时，[X]会带一张小卡片，记着两段熟悉的视距：从击球线到投球手手部的距离，以及局间低头看记分表的距离。验配者会把两段距离重新布置出来，[X]才决定是否接受新处方。普通日用副即使能看清静止的视力表，在从出球点迅速切到记分表时仍可能让[X]不自觉地歪头，因此场上使用的那副还会在下一次训练中再确认。几次处方变化，都沿着同一张卡从验光室回到了击球线。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_009",
            "text": "十二年来，[X]大多数早晨的第一个安静小时都会在厨房桌边度过。同一副普通处方副陪着[X]读报纸、填字谜，抬头和家人说话，再回到小字上，轻薄的耳侧支撑在整个过程里都不会压痛。处方变化时，[X]会让替换品经过几顿早餐以后再决定是否留下。薄硬盒和清洁布一直放在装铅笔的抽屉里，报纸折好后，选中的那副也会回到那里。"
          },
          {
            "id": "NP_GLASSES_SPORT_V10_010",
            "text": "十三年来，[X]每隔一个周日都会去同一条本地越野摩托赛道。每次处方更新后，新的镜片副都要经过四个赛道日，旧的才会退役。试用期间，旧副留在装备箱里；[X]戴着头盔站上脚踏、驶入扬尘的弯道，又在落地后抬眼看向前方，留意替换品有没有下滑、起雾、侧边空隙，或视线恢复得太慢。只要其中一次需要反复调整，[X]下一圈就会换回旧副。连续四天都顺利，新的一副才会接管专用硬盒。"
          }
        ]
      }
    },
    {
      "id": "non_product:glasses:style",
      "binding": "non_product",
      "category": "glasses",
      "attribute": "style",
      "sampleSize": 1,
      "pools": {
        "A": [
          {
            "id": "GLASSES_STYLE_NP_01",
            "text": "[X]试戴工作面罩时，鼻梁到耳侧的轮廓被遮去一半，[X]仍能从剩余眼周气质判断是否像自己。安全员换了几种组合，只有一种让[X]不再反复照镜；旧适配记录也保留相同视觉方向。"
          },
          {
            "id": "GLASSES_STYLE_NP_02",
            "text": "[X]表情训练时，老师发现眼周结构一换气质，[X]连眉眼动作都会变得刻意。恢复平常视觉语气后，表情无需提示便自然下来；老师从上次课程录像也看到同一差异。"
          },
          {
            "id": "GLASSES_STYLE_NP_03",
            "text": "[X]朋友为[X]捏半身陶像，做到眼周时用了过于陌生的轮廓。[X]只改了鼻梁到太阳穴的几处气质，家人便说即使不上色也像本人；旧陶像上也留着类似处理。"
          },
          {
            "id": "GLASSES_STYLE_NP_04",
            "text": "[X]理发师从侧面修剪鬓角时，发现眼角到耳侧的视觉气质与新发型相冲突。没有改动整体方向，只把头发调整到能接住[X]熟悉轮廓的位置；过往预约照也采用类似平衡。"
          },
          {
            "id": "GLASSES_STYLE_NP_05",
            "text": "[X]更换眼周造型后，手机的人脸解锁连续失败，需要重新录入。[X]翻看系统保留的几次外观更新，发现只有偏离某种熟悉气质时才会重新建模；家人也觉得这次变化不像平日的[X]。"
          }
        ],
        "B": [
          {
            "id": "NP_GLASSES_STYLE_V10_001",
            "text": "十八年来，每次处方变化，[X]都会回到同一家验配店，并带上最近几副已经戴旧的外框。验配者会先看那些经受多年使用的眼周轮廓、鼻梁连接、耳侧结构和可见细节多少，再把新候选放进这段使用历史里比较。看起来很不像[X]的造型，通常在脸上留不到一分钟。处方和具体外框不断更换，最终被戴到表面发亮的替换品，却始终有着容易辨认的设计气质。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_002",
            "text": "[X]多年来一直需要较强的处方。每次更换时，验配者都会先计算镜片边缘厚度、大小和鼻梁受力，再留下技术上可行的一组外框。[X]会把整组都试一遍，比较眼周轮廓、结构、年代气质和可见连接件，直到熟悉的设计语言落在一副技术合适的候选上。镜片处理与尺寸会围绕选中的造型调整，完成后便一直戴到下一次处方变化。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_003",
            "text": "十二年来，[X]每天早晨都会先戴好处方副，再包头巾。布料会经过耳侧支撑，眼周外框和鼻梁连接则完整露在外面，因此[X]会围着外框调整折边，再把布固定好。布料与包法不断变化，先后更换的外框却总回到相近的轮廓、结构语言和细节分量。新候选看着不对味时，[X]会继续换着试，直到熟悉的折边再次自然落在耳侧支撑周围。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_004",
            "text": "因为视力有限，多年来[X]挑选外框时都会加入触觉检查。[X]会用双手沿着鼻梁连接、外角、耳侧结构和凸起细节摸一遍，再贴近确认选中的轮廓落在脸上是什么样。真正喜欢的造型，回到床边浅盘后仍能靠触摸认出来；视觉或结构上陌生的候选则会放回验配板。替换外框的大小和材质有过变化，反复回到浅盘里的那些，在[X]指下仍有熟悉的外角、鼻梁结构和耳侧细节。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_005",
            "text": "六年来，每当耳侧支撑断裂，或新处方需要更换外框时，[X]都会使用社区制作空间。[X]先扫描镜片尺寸，再制作几个外角、鼻梁结构、外露连接和细节多少各不相同的原型。只有带着[X]熟悉设计气质的版本会装入处方镜片，并一直戴到表面留下日常使用痕迹；其他原型仍留在工作台上。几次制作使用的工具和材料有过变化，完成的外框放在一起时，外角、鼻梁和可见连接仍然彼此相近。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_006",
            "text": "十五年来，[X]几次把面部毛发留长、修短，又重新留起。每当脸部下半段的轮廓明显变化，[X]都会在浴室镜前重新看眼周外框、鼻梁连接和耳侧细节。外框尺寸有时会调整，最终反复留下并进入日常使用的，却始终是让[X]觉得像自己的那种设计气质。旧照片里的处方和面部毛发长度各不相同，眼周外框、鼻梁结构与耳侧细节却看得出彼此相近。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_007",
            "text": "九年来，家里的孩子常画[X]周末早晨读报、在料理台前做饭，或和大家一起出门。画面虽然不同，孩子笔下[X]眼周的轮廓、鼻梁上的连接和耳侧细节却一直有种熟悉的样子。[X]很喜欢自己被这种设计认出来，度数几次变化后也仍会选回相近的设计气质。旧的那副磨损需要替换时，孩子跟着一起看了新的几种轮廓，又翻出以前的画；孩子一眼笑着指中的，正是[X]也想带回家的那种。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_008",
            "text": "一位亲近家人不容易辨认面孔，常常会先从[X]眼周外框的轮廓和鼻梁上的连接认出[X]。许多年来，处方、外框颜色和具体的副都有变化，[X]仍持续选择相近的结构，也真心喜欢这种设计留在自己脸上的样子。人多时，家人依然能借此很快认出[X]；提供线索的那些外框，鼻梁和耳侧支撑也都因平日佩戴而逐渐磨得柔和。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_009",
            "text": "最近三次更新处方时，[X]都会在使用隐形矫正的情况下借一盒空外框回家，让每个候选在脸上完整度过一个普通日子。视觉上陌生的造型会被反复摘下放回盒中，[X]偏爱的轮廓和结构则常常一直戴到傍晚提醒响起。选中的外框随后装入处方镜片，并逐渐留下长期使用的痕迹。三次试戴盒里通过全天试戴的选择，眼周轮廓、鼻梁处理和耳侧结构都看得出彼此相近。"
          },
          {
            "id": "NP_GLASSES_STYLE_V10_010",
            "text": "十四年来，每个周日早晨，[X]和伴侣都会在窗边铺一块白毛巾，一起清洁各自日常使用的有度数镜片。两人的镜片轮廓、鼻梁连接和耳侧细节差别很明显，伴侣不用看盒子也能把每一副递回正确的人。[X]偶尔换新的，颜色或材质可能不同，伴侣仍会立刻认出[X]一向喜欢的设计。几个月后，新的一副便会熟悉地落在白毛巾上的同一侧，[X]每天手持的位置也渐渐有了使用痕迹。"
          }
        ]
      }
    }
  ]
};
