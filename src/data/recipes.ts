import type { Recipe } from "../types";

const recipes: Recipe[] = [
  // ======= 家常 =======
  {
    id: "hong-shao-rou",
    name: "红烧肉",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 60,
    mainIngredients: ["五花肉","冰糖","八角","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "500g"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "香叶",
        "amount": "2片"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "五花肉切2cm方块，冷水下锅加料酒焯水捞出",
      "锅中少许油，下冰糖小火炒至棕红色糖色",
      "下五花肉翻炒上色，加葱姜八角桂皮香叶炒香",
      "加生抽、老抽、料酒炒匀",
      "加热水没过肉，大火烧开转小火炖40分钟",
      "大火收汁至汤汁浓稠即可"
    ],
    tips: "炒糖色要小火慢炒，变棕红色立刻下肉，炒过了会苦",
    kidsFriendly: false,
    tags: ["下饭","家常","宴客","经典"],
  },
  // ======= 川菜 =======
  {
    id: "gong-bao-ji-ding",
    name: "宫保鸡丁",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["鸡胸肉","花生米","黄瓜","干辣椒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡胸肉",
        "amount": "300g"
      },
      {
        "name": "花生米",
        "amount": "50g"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "花椒",
        "amount": "1小撮"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      }
    ],
    steps: [
      "鸡胸肉切丁，加料酒、生抽、淀粉腌制10分钟",
      "调酱汁：2勺生抽、1勺醋、1勺糖、1勺淀粉、少许水搅匀",
      "黄瓜、胡萝卜切丁备用",
      "花生米小火炒至金黄捞出",
      "锅中油热，下鸡丁滑炒至变色盛出",
      "锅内留底油，下干辣椒、花椒、葱姜蒜爆香",
      "下胡萝卜丁翻炒1分钟，再下黄瓜丁",
      "倒入鸡丁和酱汁，大火翻炒均匀",
      "撒入花生米翻匀出锅"
    ],
    tips: "花生米提前用油炸酥口感更好，最后放才能保持酥脆",
    kidsFriendly: false,
    tags: ["下饭","家常","快手"],
  },
  {
    id: "yu-xiang-rou-si",
    name: "鱼香肉丝",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["猪里脊","木耳","胡萝卜","郫县豆瓣酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "250g"
      },
      {
        "name": "木耳",
        "amount": "50g（泡发）"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "里脊肉切丝，加料酒、淀粉、少许盐腌制10分钟",
      "木耳泡发切丝，胡萝卜、青椒切丝",
      "调鱼香汁：1勺生抽、1勺醋、1勺糖、1勺淀粉、3勺水搅匀",
      "锅中油热，下肉丝滑炒至变色盛出",
      "锅中下豆瓣酱小火炒出红油，下葱姜蒜炒香",
      "下胡萝卜丝、木耳丝翻炒1分钟",
      "下肉丝和青椒丝，倒入鱼香汁大火翻炒均匀即可"
    ],
    tips: "鱼香汁的比例是口感平衡的关键，可根据口味微调糖醋比例",
    kidsFriendly: false,
    tags: ["下饭","家常","经典"],
  },
  // ======= 鲁菜 =======
  {
    id: "tang-cu-li-ji",
    name: "糖醋里脊",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["猪里脊","番茄酱","白醋","白糖"],
    emoji: "🥩",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "300g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "番茄酱",
        "amount": "3勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "白糖",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "里脊切条，加盐、料酒腌制10分钟",
      "鸡蛋打散，里脊裹蛋液再裹淀粉",
      "油温六成热，下里脊中火炸至金黄捞出",
      "油温升高后复炸30秒使外皮酥脆",
      "锅中少许油，下番茄酱、糖、醋、少许水煮至浓稠",
      "下炸好的里脊快速翻匀，让每根都裹上酱汁"
    ],
    tips: "复炸是酥脆的关键，第一次炸熟，第二次炸脆",
    kidsFriendly: true,
    tags: ["下饭","宴客","酸甜","孩子爱吃"],
  },
  // ======= 川菜 =======
  {
    id: "hui-guo-rou",
    name: "回锅肉",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["五花肉","蒜苗","郫县豆瓣酱","豆豉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "300g"
      },
      {
        "name": "蒜苗",
        "amount": "3根"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "白糖",
        "amount": "少许"
      }
    ],
    steps: [
      "五花肉冷水下锅，加姜片料酒煮至筷子能扎透",
      "取出晾凉切薄片",
      "蒜苗斜切段，蒜白和蒜叶分开",
      "锅中不放油，下五花肉片中火煸至出油卷曲",
      "把肉推到一边，下豆瓣酱小火炒出红油",
      "下豆豉、姜蒜炒香，和肉片一起炒匀",
      "下蒜白翻炒1分钟，再下蒜叶",
      "加生抽、少许糖翻匀出锅"
    ],
    tips: "五花肉要切得薄，煸到微微卷曲（灯盏窝）最香",
    kidsFriendly: false,
    tags: ["下饭","家常","川菜","经典"],
  },
  // ======= 家常 =======
  {
    id: "ke-le-ji-chi",
    name: "可乐鸡翅",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["鸡翅","可乐","生抽","姜"],
    emoji: "🍗",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "鸡中翅",
        "amount": "10个"
      },
      {
        "name": "可乐",
        "amount": "1罐（330ml）"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡翅正反各划两刀，冷水下锅加料酒焯水捞出",
      "锅中少许油，下鸡翅煎至两面金黄",
      "倒入可乐、生抽、老抽、姜片",
      "大火烧开转中火煮15分钟",
      "大火收汁至汤汁浓稠裹在鸡翅上即可"
    ],
    tips: "收汁时要不停翻动，可乐含糖高容易糊锅",
    kidsFriendly: true,
    tags: ["快手","下饭","孩子爱吃","新手友好"],
  },
  // ======= 粤菜 =======
  {
    id: "suan-rong-xia",
    name: "蒜蓉开背虾",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["大虾","蒜","粉丝","小葱"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "大虾",
        "amount": "10只"
      },
      {
        "name": "蒜",
        "amount": "一整头"
      },
      {
        "name": "龙口粉丝",
        "amount": "1把"
      },
      {
        "name": "小葱",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "少许"
      },
      {
        "name": "食用油",
        "amount": "适量"
      }
    ],
    steps: [
      "粉丝温水泡软，铺在盘底",
      "虾开背去虾线，用刀背轻轻拍平",
      "蒜剁成蒜蓉，一半生蒜一半炸成金蒜混合",
      "蒜蓉加生抽、蚝油、盐拌匀",
      "虾铺在粉丝上，蒜蓉均匀铺在虾背上",
      "水开后上锅蒸8分钟",
      "取出撒葱花，浇一勺热油激香"
    ],
    tips: "金蒜（炸过的蒜）和生蒜混合，蒜香味层次更丰富",
    kidsFriendly: false,
    tags: ["宴客","快手","海鲜"],
  },
  // ======= 家常 =======
  {
    id: "hong-shao-pai-gu",
    name: "红烧排骨",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["排骨","冰糖","生抽","八角"],
    emoji: "🥩",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "500g"
      },
      {
        "name": "冰糖",
        "amount": "20g"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "排骨冷水下锅加料酒焯水捞出洗净",
      "锅中少许油，小火下冰糖炒糖色",
      "下排骨翻炒上色，加葱姜八角桂皮",
      "加生抽、老抽、料酒炒匀",
      "加热水没过排骨，大火烧开转小火炖35分钟",
      "大火收汁至汤汁浓稠"
    ],
    tips: "排骨焯水后要用温水洗净浮沫，用冷水冲会让肉收缩变硬",
    kidsFriendly: true,
    tags: ["下饭","家常","宴客"],
  },
  // ======= 川菜 =======
  {
    id: "qing-jiao-rou-si",
    name: "青椒肉丝",
    category: "meat",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["猪里脊","青椒","生抽","姜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "200g"
      },
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "蒜",
        "amount": "1瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊切丝，加料酒、生抽、淀粉腌制5分钟",
      "青椒去籽切丝",
      "热锅凉油下肉丝滑炒至变色盛出",
      "锅中下姜蒜爆香，下青椒丝大火翻炒1分钟",
      "倒回肉丝，加盐翻炒均匀即可"
    ],
    tips: "青椒要大火快炒才能保持脆嫩和翠绿色",
    kidsFriendly: false,
    tags: ["快手","家常","下饭","新手友好"],
  },
  // ======= 家常 =======
  {
    id: "xiang-jian-dai-yu",
    name: "香煎带鱼",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["带鱼","姜","料酒","盐"],
    emoji: "🐟",
    kidsAge: "6+",
    allIngredients: [
      {
        "name": "带鱼",
        "amount": "500g"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      }
    ],
    steps: [
      "带鱼去内脏洗净，切段，两面划几刀",
      "加姜片、料酒、盐、白胡椒粉腌15分钟",
      "腌好后用厨房纸吸干表面水分，裹薄薄一层淀粉",
      "平底锅油热，下带鱼中火煎至两面金黄",
      "煎的过程中不要频繁翻动，一面定型再翻"
    ],
    tips: "煎鱼不破皮的关键：吸干表面水分 + 裹薄淀粉 + 一面定型再翻",
    kidsFriendly: false,
    tags: ["快手","下饭","家常"],
  },
  // ======= 川菜 =======
  {
    id: "la-zi-ji-ding",
    name: "辣子鸡丁",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["鸡腿肉","干辣椒","花椒","花生米"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿肉",
        "amount": "400g"
      },
      {
        "name": "干辣椒",
        "amount": "一大把"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "花生米",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "鸡腿肉切小丁，加料酒、生抽腌制15分钟",
      "干辣椒剪段去籽",
      "锅中稍多油，下鸡丁中火炸至表面微黄捞出",
      "油温升高后复炸30秒至金黄酥脆",
      "锅中留底油，下花椒、干辣椒小火炒出香味",
      "下葱姜蒜炒香，倒入鸡丁大火翻炒",
      "加少许盐和糖调味，撒白芝麻翻匀"
    ],
    tips: "干辣椒的量要够多才会有「在辣椒里找鸡」的感觉",
    kidsFriendly: false,
    tags: ["下饭","川菜","宴客"],
  },
  // ======= 鲁菜 =======
  {
    id: "cong-bao-yang-rou",
    name: "葱爆羊肉",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["羊肉片","大葱","生抽","孜然"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "羊肉片",
        "amount": "300g"
      },
      {
        "name": "大葱",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "孜然粉",
        "amount": "半勺"
      },
      {
        "name": "辣椒粉",
        "amount": "适量"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "羊肉片加料酒、生抽腌制5分钟",
      "大葱斜切圈",
      "锅中放油大火烧热，下姜片爆香",
      "下羊肉片大火爆炒至变色",
      "下大葱翻炒30秒",
      "加孜然粉、辣椒粉、盐快速炒匀出锅"
    ],
    tips: "全程大火爆炒，羊肉炒久了会老，葱不能炒太软",
    kidsFriendly: false,
    tags: ["快手","下饭","暖身"],
  },
  // ======= 家常 =======
  {
    id: "fan-qie-chao-dan",
    name: "番茄炒蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["番茄","鸡蛋","葱","糖"],
    emoji: "🍗",
    kidsAge: "1-3",
    allIngredients: [
      {
        "name": "番茄",
        "amount": "2个"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "番茄切小块，鸡蛋打散加少许盐",
      "锅中油热，倒入蛋液炒至定型盛出",
      "锅中再放少许油，下番茄中火炒出汁",
      "加糖中和酸味，炒到番茄软烂出沙",
      "倒回炒好的鸡蛋，翻炒均匀",
      "撒葱花出锅"
    ],
    tips: "番茄选熟透的，炒出汁水才够味。加一点点糖可以提鲜并中和酸味",
    kidsFriendly: true,
    tags: ["快手","下饭","家常","新手友好"],
  },
  {
    id: "suan-rong-kong-xin-cai",
    name: "蒜蓉空心菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["空心菜","蒜","盐"],
    emoji: "🥬",
    kidsAge: "6+",
    allIngredients: [
      {
        "name": "空心菜",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "空心菜摘去老茎，洗净控干水分",
      "蒜剁成蒜末",
      "锅中油热，下一半蒜末爆香",
      "下空心菜大火快炒，变软即加盐",
      "出锅前撒剩余蒜末翻匀"
    ],
    tips: "全程大火快炒，从下锅到出锅不超过2分钟，才能保持翠绿脆嫩",
    kidsFriendly: false,
    tags: ["快手","家常","清淡"],
  },
  {
    id: "di-san-xian",
    name: "地三鲜",
    category: "veggie",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["土豆","茄子","青椒","生抽"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "茄子",
        "amount": "1根"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1段"
      }
    ],
    steps: [
      "土豆、茄子、青椒切滚刀块",
      "土豆块焯水2分钟捞出控干",
      "锅中稍多油，下土豆煎至表面金黄盛出",
      "下茄子煎至表面金黄变软盛出",
      "锅中留底油，下葱蒜爆香",
      "倒入调好的料汁（生抽+老抽+蚝油+糖+淀粉+水）",
      "料汁变浓后下所有食材，大火翻匀"
    ],
    tips: "茄子比土豆更吸油，可以先裹薄薄一层淀粉再煎",
    kidsFriendly: false,
    tags: ["下饭","家常","东北菜"],
  },
  // ======= 湘菜 =======
  {
    id: "shou-si-bao-cai",
    name: "手撕包菜",
    category: "veggie",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["包菜","干辣椒","蒜","生抽"],
    emoji: "🥬",
    kidsAge: "6+",
    allIngredients: [
      {
        "name": "包菜",
        "amount": "半个"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "花椒",
        "amount": "少许"
      }
    ],
    steps: [
      "包菜用手撕成小块，去掉硬梗",
      "干辣椒剪段，蒜切片",
      "锅中油热，下花椒、干辣椒、蒜片爆香",
      "下包菜大火翻炒至变软",
      "沿锅边淋生抽和醋，加盐调味",
      "大火翻炒均匀即可"
    ],
    tips: "手撕的包菜边缘不规则，比刀切更容易入味",
    kidsFriendly: false,
    tags: ["快手","下饭","家常"],
  },
  // ======= 鲁菜 =======
  {
    id: "cu-liu-bai-cai",
    name: "醋溜白菜",
    category: "veggie",
    cuisine: "lu",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["大白菜","干辣椒","醋","糖"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "5片"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "白菜帮片成薄片，叶子撕块（帮叶分开）",
      "调碗汁：醋+生抽+糖+淀粉+少许水",
      "锅中油热，下干辣椒、蒜片爆香",
      "先下白菜帮翻炒1分钟至变软",
      "再下白菜叶翻炒至变软",
      "沿锅边倒入碗汁，大火翻匀即可"
    ],
    tips: "白菜帮用刀片成薄片更容易熟，帮叶分开放保证熟度一致",
    kidsFriendly: false,
    tags: ["快手","家常","开胃"],
  },
  // ======= 川菜 =======
  {
    id: "gan-bian-si-ji-dou",
    name: "干煸四季豆",
    category: "veggie",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["四季豆","猪肉末","干辣椒","芽菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "四季豆",
        "amount": "300g"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "花椒",
        "amount": "少许"
      },
      {
        "name": "芽菜",
        "amount": "1小勺（可选）"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "四季豆去筋，掰成5cm段，控干水分",
      "锅中稍多油，下四季豆中火煸至表面起皱",
      "将四季豆推到一边，下肉末煸至出油",
      "下干辣椒、花椒、蒜末炒香",
      "下芽菜（如有），加生抽、盐和四季豆一起炒匀",
      "中火继续煸1分钟入味"
    ],
    tips: "四季豆一定要煸熟煸透，生的四季豆含有毒素",
    kidsFriendly: false,
    tags: ["下饭","家常","川菜"],
  },
  // ======= 家常 =======
  {
    id: "huang-gua-chao-ji-dan",
    name: "黄瓜炒鸡蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["黄瓜","鸡蛋","盐"],
    emoji: "🍗",
    kidsAge: "1-3",
    allIngredients: [
      {
        "name": "黄瓜",
        "amount": "2根"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "1瓣"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "黄瓜切片，鸡蛋打散加少许盐",
      "锅中油热，倒入蛋液炒至定型盛出",
      "锅中下蒜片爆香，下黄瓜片大火翻炒1分钟",
      "倒回鸡蛋，加盐调味，翻匀出锅"
    ],
    tips: "黄瓜不要炒太久，保持脆嫩口感",
    kidsFriendly: true,
    tags: ["快手","清淡","家常","新手友好"],
  },
  // ======= 川菜 =======
  {
    id: "xiang-la-tu-dou-si",
    name: "香辣土豆丝",
    category: "veggie",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["土豆","干辣椒","醋","盐"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "花椒",
        "amount": "少许"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "土豆去皮切细丝，泡水洗去淀粉，换水2-3次",
      "捞出控干水分",
      "热锅凉油下花椒和干辣椒小火煸出香味",
      "大火下土豆丝，快速翻炒",
      "炒到七八分熟沿锅边淋醋，加盐",
      "翻炒均匀即可出锅"
    ],
    tips: "土豆丝泡水去淀粉是脆爽的关键，醋要在起锅前加才够香",
    kidsFriendly: false,
    tags: ["快手","下饭","家常"],
  },
  // ======= 家常 =======
  {
    id: "xi-hong-shi-chao-cai-hua",
    name: "西红柿炒菜花",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["菜花","番茄","番茄酱","盐"],
    emoji: "🍆",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "菜花",
        "amount": "半个"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "番茄酱",
        "amount": "1勺（可选）"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "菜花掰小朵焯水1分钟捞出",
      "番茄切小块",
      "锅中油热，下番茄炒出汁，加番茄酱",
      "下菜花翻炒均匀，加盐调味",
      "出锅前撒葱花"
    ],
    tips: "菜花焯水时加少许盐和油，颜色更白",
    kidsFriendly: true,
    tags: ["家常","清淡","快手"],
  },
  // ======= 川菜 =======
  {
    id: "ma-po-dou-fu",
    name: "麻婆豆腐",
    category: "veggie",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["嫩豆腐","猪肉末","郫县豆瓣酱","花椒粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "嫩豆腐",
        "amount": "1盒"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "花椒粉",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "豆腐切2cm方块，加盐焯水2分钟捞出（不易碎）",
      "锅中油热下肉末煸至金黄",
      "下豆瓣酱小火炒出红油",
      "下姜蒜末炒香",
      "加一碗水烧开，加生抽调味",
      "轻轻滑入豆腐，中火煮3分钟入味",
      "淀粉水勾薄芡，撒花椒粉和葱花"
    ],
    tips: "豆腐焯水加盐可以让豆腐更嫩且不易碎，翻动时用推的方式不要用铲子搅",
    kidsFriendly: false,
    tags: ["下饭","麻辣","经典","川菜"],
  },
  // ======= 家常 =======
  {
    id: "fan-qie-dan-tang",
    name: "番茄蛋花汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["番茄","鸡蛋","葱","盐"],
    emoji: "🍗",
    kidsAge: "1-3",
    allIngredients: [
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "淀粉",
        "amount": "半勺（可选）"
      }
    ],
    steps: [
      "番茄切小块，鸡蛋打散",
      "锅中少许油，下番茄炒出汁",
      "加两碗水烧开煮2分钟",
      "淀粉水勾薄芡（可选，让蛋花更悬浮）",
      "转小火，沿筷子缓缓倒入蛋液使其成为漂亮蛋花",
      "加盐、香油、葱花调味"
    ],
    tips: "倒蛋液时火要小，用筷子引流，蛋花才会轻薄漂亮",
    kidsFriendly: true,
    tags: ["快手","家常","新手友好"],
  },
  {
    id: "zi-cai-dan-hua-tang",
    name: "紫菜蛋花汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["紫菜","鸡蛋","虾皮","葱花"],
    emoji: "🍗",
    kidsAge: "1-3",
    allIngredients: [
      {
        "name": "紫菜",
        "amount": "1片"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "虾皮",
        "amount": "1小撮"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "紫菜撕成小块，鸡蛋打散",
      "锅中水烧开，放入虾皮",
      "转小火沿筷子倒入蛋液形成蛋花",
      "关火，放入紫菜（关火后余温就够了）",
      "加盐、白胡椒粉、香油，撒葱花"
    ],
    tips: "紫菜最后关火后放，用余温烫熟即可，煮久了口感差",
    kidsFriendly: true,
    tags: ["超快手","清淡"],
  },
  // ======= 川菜 =======
  {
    id: "suan-la-tang",
    name: "酸辣汤",
    category: "soup",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["豆腐","木耳","鸡蛋","醋","白胡椒粉"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "豆腐",
        "amount": "半盒"
      },
      {
        "name": "木耳",
        "amount": "30g（泡发）"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "火腿肠",
        "amount": "1根（可选）"
      },
      {
        "name": "醋",
        "amount": "2勺"
      },
      {
        "name": "白胡椒粉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "豆腐、木耳、火腿肠切丝",
      "锅中加水烧开，下豆腐丝、木耳丝煮3分钟",
      "加生抽、盐调味",
      "淀粉水勾芡使汤汁浓稠",
      "转小火淋入蛋液",
      "关火，加醋、白胡椒粉、香油搅匀",
      "撒葱花出锅"
    ],
    tips: "醋和胡椒粉一定要关火后放，煮久了酸味和辣味都会挥发",
    kidsFriendly: false,
    tags: ["开胃","暖身","经典"],
  },
  // ======= 粤菜 =======
  {
    id: "pai-gu-yu-mi-tang",
    name: "排骨玉米汤",
    category: "soup",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 90,
    mainIngredients: ["排骨","玉米","胡萝卜","姜"],
    emoji: "🥩",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "300g"
      },
      {
        "name": "玉米",
        "amount": "1根"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "排骨冷水下锅加料酒焯水捞出洗净",
      "玉米切段，胡萝卜切滚刀块",
      "所有食材入锅，加足量热水",
      "大火烧开转小火煲1小时",
      "加盐调味再煲10分钟"
    ],
    tips: "煲汤的水要一次性加足，中途加水会影响汤的浓度和口感",
    kidsFriendly: true,
    tags: ["滋补","家常","清淡"],
  },
  // ======= 家常 =======
  {
    id: "ji-dan-jiang-tang",
    name: "鸡蛋羹",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["鸡蛋","温水","盐","生抽"],
    emoji: "🍗",
    kidsAge: "1-3",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      },
      {
        "name": "盐",
        "amount": "少许"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散，加盐和1.5倍温水搅匀",
      "用滤网过滤蛋液去掉气泡和蛋筋",
      "盖上保鲜膜或倒扣一个盘子",
      "水开后上锅，中火蒸8-10分钟",
      "出锅淋生抽和香油，撒葱花"
    ],
    tips: "用温水调蛋液+过滤+盖保鲜膜，蒸出来像布丁一样嫩滑",
    kidsFriendly: true,
    tags: ["快手","清淡","新手友好"],
  },
  {
    id: "liang-ban-huang-gua",
    name: "拍黄瓜",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["黄瓜","蒜","醋","生抽"],
    emoji: "🥒",
    kidsAge: "6+",
    allIngredients: [
      {
        "name": "黄瓜",
        "amount": "2根"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "盐",
        "amount": "少许"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "辣椒油",
        "amount": "适量（可选）"
      }
    ],
    steps: [
      "黄瓜洗净，用刀背拍裂，切段",
      "蒜剁成蒜末",
      "碗中调汁：生抽+醋+蒜末+盐+糖+香油+辣椒油",
      "把料汁倒在黄瓜上拌匀",
      "腌制5分钟入味"
    ],
    tips: "拍黄瓜比切黄瓜更入味，料汁调好后等几分钟再吃",
    kidsFriendly: false,
    tags: ["超快手","开胃","夏季"],
  },
  // ======= 川菜 =======
  {
    id: "liang-ban-mu-er",
    name: "凉拌木耳",
    category: "cold",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["木耳","蒜","醋","生抽","辣椒油"],
    emoji: "🌶️",
    allIngredients: [
      {
        "name": "木耳",
        "amount": "50g（干）"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "辣椒油",
        "amount": "适量"
      },
      {
        "name": "香菜",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "木耳提前2小时温水泡发",
      "泡发的木耳焯水3分钟捞出过凉水",
      "蒜剁末，香菜切段",
      "调汁：生抽+醋+盐+糖+蒜末+香油+辣椒油",
      "木耳控干水分，浇上料汁拌匀",
      "撒香菜"
    ],
    tips: "木耳泡发后用手撕成小朵比刀切的口感更好",
    kidsFriendly: false,
    tags: ["开胃","快手","清淡"],
  },
  // ======= 家常 =======
  {
    id: "pi-dan-dou-fu",
    name: "皮蛋豆腐",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["嫩豆腐","皮蛋","生抽","香油"],
    emoji: "🍳",
    kidsAge: "6+",
    allIngredients: [
      {
        "name": "内酯豆腐",
        "amount": "1盒"
      },
      {
        "name": "皮蛋",
        "amount": "2个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "少许（切末）"
      },
      {
        "name": "辣椒油",
        "amount": "适量"
      }
    ],
    steps: [
      "豆腐整块倒扣在盘子里",
      "皮蛋剥壳切瓣，摆在豆腐周围",
      "调汁：生抽+醋+姜末+香油+辣椒油",
      "把汁浇在豆腐和皮蛋上",
      "撒葱花即可"
    ],
    tips: "豆腐倒扣时在盒子底部四角各剪一个小口，更容易完整脱模",
    kidsFriendly: false,
    tags: ["超快手","开胃","夏季"],
  },
  // ======= 川菜 =======
  {
    id: "liang-ban-san-si",
    name: "凉拌三丝",
    category: "cold",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["黄瓜","胡萝卜","粉丝","蒜"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "龙口粉丝",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "粉丝温水泡软，焯水30秒过凉水",
      "黄瓜、胡萝卜切丝",
      "蒜剁末",
      "调汁：生抽+醋+蒜末+盐+糖+香油",
      "三丝装盘，浇汁拌匀"
    ],
    tips: "胡萝卜丝可以加少许盐腌一下变软，口感更好",
    kidsFriendly: false,
    tags: ["开胃","清淡","快手"],
  },
  // ======= 苏菜 =======
  {
    id: "yang-chou-fan",
    name: "扬州炒饭",
    category: "staple",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["米饭","鸡蛋","火腿","青豆","虾仁"],
    emoji: "🍗",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "隔夜米饭",
        "amount": "2碗"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "火腿肠",
        "amount": "1根"
      },
      {
        "name": "青豆",
        "amount": "1小碗"
      },
      {
        "name": "虾仁",
        "amount": "50g"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋打散，火腿、胡萝卜切小丁，虾仁切小段",
      "锅中油热，下鸡蛋炒散盛出",
      "下虾仁炒至变色，加火腿、胡萝卜、青豆翻炒",
      "下隔夜米饭，用铲子压散",
      "大火翻炒至米饭粒粒分明",
      "倒回鸡蛋，加盐和白胡椒粉炒匀",
      "撒葱花出锅"
    ],
    tips: "用隔夜米饭炒出来才粒粒分明，新鲜米饭水分太多容易粘成一团",
    kidsFriendly: true,
    tags: ["快手","经典","家常"],
  },
  // ======= 家常 =======
  {
    id: "fan-qie-yi-mian",
    name: "番茄鸡蛋面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["挂面","番茄","鸡蛋","葱"],
    emoji: "🍗",
    kidsAge: "1-3",
    allIngredients: [
      {
        "name": "挂面",
        "amount": "150g"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "番茄切小块，鸡蛋打散煎熟盛出",
      "同一锅中下番茄炒出汁",
      "加两碗水烧开，下面条煮到七八分熟",
      "倒回炒好的鸡蛋",
      "加生抽、盐调味",
      "撒葱花、滴香油出锅"
    ],
    tips: "面条不要煮全熟就离火，余温会继续加热",
    kidsFriendly: true,
    tags: ["快手","家常","新手友好","一人食"],
  },
  {
    id: "dan-chao-fan",
    name: "蛋炒饭",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["米饭","鸡蛋","葱","盐"],
    emoji: "🍗",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "隔夜米饭",
        "amount": "2碗"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋打散，葱切葱花",
      "锅中油热，倒入蛋液快速划散",
      "蛋液半凝固时下米饭",
      "大火翻炒，用铲子压散米粒",
      "炒到米粒在锅里跳舞，加盐",
      "撒大量葱花翻匀出锅"
    ],
    tips: "米饭要先用手捏散再下锅，炒出来更快粒粒分明",
    kidsFriendly: true,
    tags: ["快手","家常","新手友好"],
  },
  {
    id: "qing-jiao-rou-si-mian",
    name: "青椒肉丝面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["挂面","猪里脊","青椒","生抽"],
    emoji: "🥩",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "挂面",
        "amount": "150g"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "1片"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊肉切丝，加料酒、生抽、淀粉腌制5分钟",
      "青椒切丝",
      "同时烧水煮面，煮好捞出放入碗中",
      "锅中油热下肉丝滑炒至变色",
      "下姜片、青椒丝大火翻炒1分钟",
      "加生抽、老抽、少许水煮出汤汁",
      "连汤带料浇在面条上"
    ],
    tips: "煮面和炒菜同时进行，面好了浇头也好了，省时间",
    kidsFriendly: true,
    tags: ["快手","家常","一人食"],
  },
  // ======= 鲁菜 =======
  {
    id: "zha-jiang-mian",
    name: "炸酱面",
    category: "staple",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["猪肉末","黄豆酱","黄瓜","面条"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "黄豆酱",
        "amount": "2勺"
      },
      {
        "name": "甜面酱",
        "amount": "1勺"
      },
      {
        "name": "挂面",
        "amount": "200g"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "豆芽",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "黄豆酱和甜面酱混合，加少许水调开",
      "黄瓜切丝，豆芽焯水",
      "锅中稍多油，下肉末煸至出油微焦",
      "下葱姜末炒香",
      "下酱料小火慢炸5分钟，不断搅动防糊",
      "加少许糖提鲜，炸到油酱分离即可",
      "面条煮熟过凉水盛入碗中",
      "码上黄瓜丝和豆芽，浇上炸酱"
    ],
    tips: "炸酱要小火慢炸，炸到油酱分离（油浮上来）才够香",
    kidsFriendly: false,
    tags: ["经典","北方","下饭"],
  },
  // ======= 其他 =======
  {
    id: "zi-ran-niu-rou",
    name: "孜然牛肉",
    category: "meat",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["牛肉","洋葱","孜然粉","辣椒粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛肉",
        "amount": "300g"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "孜然粉",
        "amount": "1勺"
      },
      {
        "name": "辣椒粉",
        "amount": "适量"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "牛肉切薄片，加料酒、生抽、淀粉腌制10分钟",
      "洋葱切丝",
      "热锅凉油下牛肉滑炒至变色捞出",
      "下姜片、洋葱丝炒香",
      "倒回牛肉，加孜然粉、辣椒粉、盐",
      "大火翻炒均匀即可"
    ],
    tips: "牛肉要逆纹切，炒出来才嫩。孜然粉最后放，炒久了不香",
    kidsFriendly: false,
    tags: ["下饭","快手","烧烤味"],
  },
  // ======= 川菜 =======
  {
    id: "shui-zhu-rou-pian",
    name: "水煮肉片",
    category: "meat",
    cuisine: "chuan",
    difficulty: 3,
    cookingTime: 30,
    mainIngredients: ["猪里脊","豆芽","干辣椒","花椒","郫县豆瓣酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "250g"
      },
      {
        "name": "豆芽",
        "amount": "200g"
      },
      {
        "name": "干辣椒",
        "amount": "一大把"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1.5勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "1段"
      }
    ],
    steps: [
      "里脊切薄片，加料酒、生抽、淀粉腌制15分钟",
      "豆芽焯水铺在大碗底",
      "锅中油热，下豆瓣酱小火炒出红油",
      "下姜蒜葱炒香，加两碗水烧开",
      "下肉片滑散，煮1分钟至变色",
      "连汤带肉倒在豆芽上",
      "上面铺干辣椒段和花椒",
      "另起锅烧热油，浇在辣椒花椒上激香"
    ],
    tips: "最后浇热油是灵魂步骤，油温要高才能激发出麻辣香味",
    kidsFriendly: false,
    tags: ["麻辣","川菜","宴客","下饭"],
  },
  // ======= 家常 =======
  {
    id: "xiang-jian-ji-tui",
    name: "香煎鸡腿",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["鸡腿","生抽","蚝油","蜂蜜"],
    emoji: "🍗",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "鸡腿",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "蜂蜜",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "黑胡椒粉",
        "amount": "少许"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡腿去骨（或直接划几刀方便入味）",
      "加生抽、蚝油、蜂蜜、料酒、黑胡椒、蒜末腌20分钟",
      "平底锅少许油，鸡皮面朝下中小火煎",
      "煎到鸡皮金黄翻面，继续煎至熟透",
      "倒入剩余腌料汁收浓"
    ],
    tips: "鸡皮面先煎，中小火慢慢逼出鸡油，皮脆肉嫩",
    kidsFriendly: true,
    tags: ["快手","下饭","新手友好"],
  },
  {
    id: "hong-shao-ji-kuai",
    name: "红烧鸡块",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 35,
    mainIngredients: ["鸡腿肉","土豆","生抽","冰糖"],
    emoji: "🍗",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "鸡腿肉",
        "amount": "400g"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "八角",
        "amount": "1个"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "鸡腿切块焯水捞出，土豆切滚刀块",
      "锅中少许油，小火下冰糖炒糖色",
      "下鸡块翻炒上色",
      "加葱姜八角、生抽、老抽、料酒炒香",
      "加热水没过食材，大火烧开转中火炖15分钟",
      "加土豆块继续炖15分钟",
      "大火收汁即可"
    ],
    tips: "土豆不要放太早，否则炖烂了找不到",
    kidsFriendly: true,
    tags: ["下饭","家常","经典"],
  },
  // ======= 粤菜 =======
  {
    id: "hao-you-sheng-cai",
    name: "蚝油生菜",
    category: "veggie",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["生菜","蚝油","蒜","生抽"],
    emoji: "🥬",
    kidsAge: "1-3",
    allIngredients: [
      {
        "name": "生菜",
        "amount": "2棵"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      }
    ],
    steps: [
      "生菜洗净，蒜剁末",
      "水烧开加少许盐和油，生菜焯水10秒立刻捞出装盘",
      "调汁：蚝油+生抽+糖+淀粉+少许水搅匀",
      "锅中少油，下蒜末炒香",
      "倒入料汁煮至浓稠",
      "浇在生菜上"
    ],
    tips: "生菜焯水10秒就够，烫久了软烂没口感",
    kidsFriendly: true,
    tags: ["超快手","清淡","新手友好"],
  },
  {
    id: "suan-rong-xi-lan-hua",
    name: "蒜蓉西兰花",
    category: "veggie",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["西兰花","蒜","蚝油","盐"],
    emoji: "🥬",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "西兰花",
        "amount": "1棵"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "西兰花掰小朵，淡盐水泡10分钟",
      "水开加盐和油，西兰花焯水1分钟捞出",
      "蒜剁末",
      "锅中少许油，下一半蒜末炒香",
      "下西兰花大火快炒30秒",
      "加蚝油和盐调味",
      "出锅前撒剩余蒜末翻匀"
    ],
    tips: "焯水时加油和盐能让西兰花保持翠绿色",
    kidsFriendly: true,
    tags: ["快手","清淡","家常"],
  },
  // ======= 家常 =======
  {
    id: "hong-shao-qie-zi",
    name: "红烧茄子",
    category: "veggie",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["茄子","生抽","蚝油","蒜"],
    emoji: "🍆",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "葱",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "茄子切滚刀块，撒少许盐腌10分钟挤出水",
      "调汁：生抽+老抽+蚝油+糖+淀粉+水",
      "锅中稍多油，下茄子煎至表面金黄变软",
      "下蒜末炒香",
      "倒入料汁翻匀煮至浓稠",
      "撒葱花出锅"
    ],
    tips: "茄子先用盐腌一下挤水，就没那么吸油了",
    kidsFriendly: true,
    tags: ["下饭","家常"],
  },
  {
    id: "jiu-cai-chao-ji-dan",
    name: "韭菜炒鸡蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["韭菜","鸡蛋","盐"],
    emoji: "🍗",
    kidsAge: "6+",
    allIngredients: [
      {
        "name": "韭菜",
        "amount": "1把"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "韭菜洗净切段，鸡蛋打散加少许盐",
      "锅中油热，倒入蛋液炒至定型盛出",
      "锅中再放少许油，下韭菜大火快炒30秒",
      "倒回鸡蛋，加盐调味",
      "翻匀立刻出锅"
    ],
    tips: "韭菜炒久了出水变蔫，从下锅到出锅不超过1分钟",
    kidsFriendly: false,
    tags: ["超快手","家常","新手友好"],
  },
  // ======= 川菜 =======
  {
    id: "suan-la-tu-dou-si",
    name: "酸辣土豆丝",
    category: "veggie",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["土豆","干辣椒","醋","盐"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "花椒",
        "amount": "少许"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "土豆去皮切细丝，泡水洗去淀粉",
      "捞出控干水分",
      "热锅凉油下花椒和干辣椒小火煸香",
      "转大火下土豆丝快速翻炒",
      "炒到断生加盐、沿锅边淋醋",
      "翻炒均匀出锅"
    ],
    tips: "泡水去淀粉+大火快炒+出锅前淋醋，三个要点缺一不可",
    kidsFriendly: false,
    tags: ["快手","开胃","家常"],
  },
  // ======= 粤菜 =======
  {
    id: "dong-gua-pai-gu-tang",
    name: "冬瓜排骨汤",
    category: "soup",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 60,
    mainIngredients: ["排骨","冬瓜","姜","枸杞"],
    emoji: "🥩",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "300g"
      },
      {
        "name": "冬瓜",
        "amount": "500g"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "枸杞",
        "amount": "十几粒（可选）"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "排骨冷水下锅加料酒焯水捞出",
      "冬瓜去皮切厚块",
      "排骨和姜片入锅，加足量热水",
      "大火烧开转小火煲40分钟",
      "加冬瓜继续煲15分钟",
      "加枸杞和盐，再煲5分钟"
    ],
    tips: "冬瓜不要一开始就放，煲久了会化掉",
    kidsFriendly: true,
    tags: ["清淡","夏季","滋补"],
  },
  // ======= 家常 =======
  {
    id: "xi-hong-shi-niu-nan-tang",
    name: "西红柿牛腩汤",
    category: "soup",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 90,
    mainIngredients: ["牛腩","番茄","土豆","洋葱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛腩",
        "amount": "400g"
      },
      {
        "name": "番茄",
        "amount": "3个"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "香叶",
        "amount": "1片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "牛腩切块焯水捞出",
      "番茄切块，土豆切滚刀块，洋葱切片",
      "锅中油热下洋葱炒香，加番茄炒出汁",
      "加番茄酱炒匀，下牛腩翻炒",
      "加热水、姜片、香叶，大火烧开转小火炖1小时",
      "加土豆继续炖20分钟",
      "加盐调味"
    ],
    tips: "牛腩焯水后用热水冲洗，冷水会让肉收紧炖不烂",
    kidsFriendly: false,
    tags: ["滋补","冬季","经典"],
  },
  {
    id: "liang-ban-hai-dai-si",
    name: "凉拌海带丝",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["海带丝","蒜","醋","生抽","辣椒油"],
    emoji: "🌶️",
    allIngredients: [
      {
        "name": "海带丝",
        "amount": "200g"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "辣椒油",
        "amount": "适量"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "海带丝洗净，焯水2分钟过凉水",
      "蒜剁末",
      "调汁：生抽+醋+蒜末+盐+糖+香油+辣椒油",
      "海带丝控干水分，浇汁拌匀"
    ],
    tips: "海带丝焯水时加一点醋可以去腥",
    kidsFriendly: false,
    tags: ["开胃","快手","低卡"],
  },
  // ======= 川菜 =======
  {
    id: "kou-shui-ji",
    name: "口水鸡",
    category: "cold",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["鸡腿","辣椒油","花椒粉","花生碎"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿",
        "amount": "2个"
      },
      {
        "name": "辣椒油",
        "amount": "2勺"
      },
      {
        "name": "花椒粉",
        "amount": "半勺"
      },
      {
        "name": "花生碎",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡腿冷水下锅，加姜片、葱段、料酒煮15分钟",
      "关火焖10分钟，取出放入冰水过凉",
      "鸡腿斩块装盘",
      "调料汁：辣椒油+花椒粉+生抽+醋+糖+蒜末+少许鸡汤",
      "料汁浇在鸡块上",
      "撒花生碎、白芝麻、葱花"
    ],
    tips: "煮好的鸡肉过冰水，皮会变得弹脆",
    kidsFriendly: false,
    tags: ["麻辣","宴客","川菜"],
  },
  // ======= 浙菜 =======
  {
    id: "cong-you-ban-mian",
    name: "葱油拌面",
    category: "staple",
    cuisine: "zhe",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["挂面","小葱","生抽","油"],
    emoji: "🍜",
    kidsAge: "3-6",
    allIngredients: [
      {
        "name": "挂面",
        "amount": "150g"
      },
      {
        "name": "小葱",
        "amount": "4根"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "小葱切段（葱白和葱绿分开），葱绿切葱花",
      "调酱汁：生抽+老抽+糖搅匀",
      "锅中稍多油，下葱白段小火慢炸至金黄",
      "捞出焦葱段，油中倒入酱汁煮到冒泡",
      "面条煮熟捞出，浇上葱油酱汁",
      "撒葱花拌匀"
    ],
    tips: "炸葱油一定要小火慢炸，炸到葱段变焦黄色葱油才够香",
    kidsFriendly: true,
    tags: ["快手","经典","一人食","上海"],
  },
  // ======= 家常 =======
  {
    id: "chao-mian",
    name: "家常炒面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["面条","鸡蛋","青菜","火腿肠"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "面条",
        "amount": "200g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      },
      {
        "name": "火腿肠",
        "amount": "1根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "面条煮至八分熟捞出过凉水，加少许油拌匀防粘",
      "鸡蛋炒散盛出，火腿肠切片",
      "锅中油热下火腿肠、青菜翻炒",
      "下面条，加生抽、老抽、蚝油",
      "大火翻炒均匀",
      "倒回鸡蛋，撒葱花出锅"
    ],
    tips: "面条煮好加少许油拌匀就不会粘在一起，大火炒出来有镬气",
    kidsFriendly: false,
    tags: ["快手","家常","一人食"],
  },
  // ======= 川菜 =======
  {
    id: "suan-cai-yu",
    name: "酸菜鱼",
    category: "meat",
    cuisine: "chuan",
    difficulty: 3,
    cookingTime: 40,
    mainIngredients: ["草鱼","酸菜","泡椒","花椒"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "草鱼",
        "amount": "1条(约750g)"
      },
      {
        "name": "酸菜",
        "amount": "200g"
      },
      {
        "name": "泡椒",
        "amount": "5个"
      },
      {
        "name": "花椒",
        "amount": "1小撮"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "蛋清",
        "amount": "1个"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "草鱼片成薄片，加料酒、蛋清、淀粉、盐抓匀腌10分钟",
      "酸菜切段，泡椒切碎",
      "锅中油热，下姜蒜、泡椒、酸菜炒出香味",
      "加足量水烧开煮5分钟出酸味",
      "先下鱼头和鱼骨煮3分钟",
      "再滑入鱼片，轻轻推散，煮1分钟变白即可",
      "另起锅烧热油，下花椒干辣椒炸香，浇在鱼上"
    ],
    tips: "鱼片要片得薄，下锅后不要翻动太猛，否则鱼片会碎",
    kidsFriendly: false,
    tags: ["经典","麻辣","川菜代表"],
  },
  {
    id: "yu-xiang-qie-zi",
    name: "鱼香茄子",
    category: "veggie",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["茄子","猪肉末","郫县豆瓣酱","姜蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "茄子切条，撒盐腌10分钟挤出水",
      "调鱼香汁：生抽+醋+糖+淀粉+水",
      "锅中稍多油下茄子煎至表面金黄变软盛出",
      "锅中留底油下肉末煸香",
      "下豆瓣酱小火炒出红油，加姜蒜末",
      "倒回茄子，淋入鱼香汁大火翻匀",
      "撒葱花"
    ],
    tips: "茄子先腌出水就不那么吸油了，鱼香汁要提前调好",
    kidsFriendly: false,
    tags: ["下饭","川菜","经典"],
  },
  {
    id: "fu-qi-fei-pian",
    name: "夫妻肺片",
    category: "cold",
    cuisine: "chuan",
    difficulty: 3,
    cookingTime: 60,
    mainIngredients: ["牛腱子","牛肚","辣椒油","花椒粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛腱子",
        "amount": "200g"
      },
      {
        "name": "牛肚",
        "amount": "200g"
      },
      {
        "name": "辣椒油",
        "amount": "2勺"
      },
      {
        "name": "花椒粉",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "香菜",
        "amount": "少许"
      },
      {
        "name": "花生碎",
        "amount": "1勺"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "牛腱子和牛肚冷水下锅，加姜片料酒卤1小时至软烂",
      "捞出晾凉切薄片装盘",
      "调汁：辣椒油+花椒粉+生抽+醋+糖+蒜末+卤水原汤",
      "浇在牛肉片上，撒花生碎、芝麻、香菜"
    ],
    tips: "牛肉要卤到筷子能轻松扎透，切得越薄越好",
    kidsFriendly: false,
    tags: ["经典","麻辣","宴客","川菜凉菜"],
  },
  {
    id: "suan-ni-bai-rou",
    name: "蒜泥白肉",
    category: "cold",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["五花肉","蒜","辣椒油","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "300g"
      },
      {
        "name": "蒜",
        "amount": "一整头"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "黄瓜",
        "amount": "1根（垫底）"
      }
    ],
    steps: [
      "五花肉冷水下锅，加姜片料酒煮30分钟至熟透",
      "捞出放凉切大薄片",
      "黄瓜切丝铺盘底，肉片码在黄瓜上",
      "蒜剁成蒜泥，加生抽、醋、糖、辣椒油、香油调汁",
      "蒜泥汁均匀浇在肉片上"
    ],
    tips: "肉一定要晾凉再切，热的时候切会碎。蒜泥越多越香",
    kidsFriendly: false,
    tags: ["经典","蒜香","川菜凉菜"],
  },
  {
    id: "dan-dan-mian",
    name: "担担面",
    category: "staple",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["面条","猪肉末","芽菜","花生碎"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "150g"
      },
      {
        "name": "猪肉末",
        "amount": "80g"
      },
      {
        "name": "芽菜",
        "amount": "1小勺"
      },
      {
        "name": "花生碎",
        "amount": "1勺"
      },
      {
        "name": "芝麻酱",
        "amount": "半勺"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "花椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "调碗底料：芝麻酱用少许水调开，加生抽、醋、辣椒油、蒜泥、花椒粉",
      "锅中油热下肉末煸至酥香，加芽菜炒匀",
      "面条煮熟捞出放入碗中",
      "浇上炒好的肉末臊子",
      "撒花生碎和葱花"
    ],
    tips: "臊子要炒到酥脆才香，吃之前拌匀",
    kidsFriendly: false,
    tags: ["川菜面食","麻辣","经典"],
  },
  // ======= 湘菜 =======
  {
    id: "duo-jiao-yu-tou",
    name: "剁椒鱼头",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["胖头鱼头","剁椒","姜","蒜"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "胖头鱼头",
        "amount": "1个(约750g)"
      },
      {
        "name": "剁椒",
        "amount": "3勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒸鱼豉油",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鱼头从中间劈开，加料酒、盐、姜片腌15分钟",
      "盘底铺姜片，放上鱼头",
      "剁椒和蒜末混合，均匀铺在鱼头上",
      "水开后上锅大火蒸10-12分钟",
      "出锅倒掉盘中汤汁，淋蒸鱼豉油",
      "撒葱花，浇一勺热油激香"
    ],
    tips: "蒸的时间不要超过12分钟，蒸久了鱼肉会老",
    kidsFriendly: false,
    tags: ["湘菜代表","鲜辣","宴客"],
  },
  {
    id: "la-jiao-chao-rou",
    name: "辣椒炒肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["五花肉","青椒","豆豉","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "200g"
      },
      {
        "name": "青椒",
        "amount": "4个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "五花肉切薄片，青椒斜切圈，蒜拍碎",
      "锅中不放油，下青椒干煸至表皮起皱盛出",
      "锅中放少许油，下五花肉煸至出油卷曲",
      "下豆豉、蒜爆香",
      "加生抽、料酒翻炒，倒回青椒大火翻匀"
    ],
    tips: "青椒先干煸是湘菜做法，能去掉生味增加焦香",
    kidsFriendly: false,
    tags: ["湘菜国民菜","下饭","快手"],
  },
  {
    id: "xiao-chao-huang-niu-rou",
    name: "小炒黄牛肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["黄牛肉","香菜","小米辣","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "黄牛肉",
        "amount": "250g"
      },
      {
        "name": "香菜",
        "amount": "1把"
      },
      {
        "name": "小米辣",
        "amount": "5个"
      },
      {
        "name": "泡椒",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "牛肉切薄片，加料酒、生抽、淀粉腌制10分钟",
      "香菜切段，小米辣和泡椒切圈",
      "热锅凉油下牛肉滑炒至变色盛出",
      "锅中下姜蒜、小米辣、泡椒爆香",
      "倒回牛肉大火翻炒，加盐调味",
      "关火后下香菜段翻匀（余温烫熟）"
    ],
    tips: "牛肉要逆纹切薄片，香菜关火后放才能保持翠绿和清香",
    kidsFriendly: false,
    tags: ["下饭","快手","湘菜经典"],
  },
  {
    id: "nong-jia-xiao-chao-rou",
    name: "农家小炒肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["五花肉","青椒","蒜","豆豉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "250g"
      },
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "红椒",
        "amount": "1个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "五花肉切薄片，青红椒切块",
      "锅中不放油，下五花肉煸至出油微卷",
      "下姜蒜豆豉炒出香味",
      "加料酒、生抽翻炒",
      "下青红椒大火炒至断生",
      "加盐调味出锅"
    ],
    tips: "五花肉自己的油就够了，煸到微微焦黄最香",
    kidsFriendly: false,
    tags: ["下饭","家常","快手"],
  },
  {
    id: "suan-miao-chao-la-rou",
    name: "蒜苗炒腊肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["腊肉","蒜苗","干辣椒","姜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肉",
        "amount": "200g"
      },
      {
        "name": "蒜苗",
        "amount": "4根"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      }
    ],
    steps: [
      "腊肉用热水洗净，冷水下锅煮20分钟去咸味",
      "腊肉切薄片，蒜苗斜切段",
      "锅中少油，下腊肉中小火煸至透明出油",
      "下干辣椒、姜片爆香",
      "下蒜苗白翻炒1分钟，再下蒜叶",
      "加少许生抽翻匀（腊肉咸，少放盐）"
    ],
    tips: "腊肉提前煮一下能去掉部分咸味和硬皮，口感更好",
    kidsFriendly: false,
    tags: ["下饭","湘味","腊味"],
  },
  {
    id: "suan-dou-jiao-rou-mo",
    name: "酸豆角肉末",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["酸豆角","猪肉末","小米辣","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "酸豆角",
        "amount": "200g"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "小米辣",
        "amount": "3个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "半勺"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "酸豆角洗净切小粒，小米辣切圈",
      "锅中油热下肉末煸至出油变酥",
      "下蒜末和小米辣炒香",
      "下酸豆角翻炒2分钟",
      "加生抽调味，翻炒均匀即可"
    ],
    tips: "酸豆角本身有咸味，不用另外加盐。拌面拌饭都很香",
    kidsFriendly: false,
    tags: ["下饭","快手","湘味"],
  },
  // ======= 鲁菜 =======
  {
    id: "cong-shao-dou-fu",
    name: "葱烧豆腐",
    category: "veggie",
    cuisine: "lu",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["老豆腐","大葱","生抽","蚝油"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "大葱",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "豆腐切厚片，大葱斜切圈",
      "平底锅油热，下豆腐煎至两面金黄盛出",
      "锅中留底油，下大葱炒出香味",
      "加生抽、蚝油、糖和少许水",
      "倒回豆腐，中火煮2分钟入味",
      "淀粉水勾薄芡"
    ],
    tips: "豆腐要煎到两面金黄定型，烧的时候不容易碎",
    kidsFriendly: true,
    tags: ["下饭","素食","鲁菜技法"],
  },
  {
    id: "mu-xu-rou",
    name: "木须肉",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["猪里脊","鸡蛋","木耳","黄花菜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "150g"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "木耳",
        "amount": "30g(泡发)"
      },
      {
        "name": "黄花菜",
        "amount": "20g(泡发)"
      },
      {
        "name": "黄瓜",
        "amount": "半根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "里脊切薄片，加料酒、淀粉腌制",
      "鸡蛋打散炒熟盛出",
      "木耳、黄花菜泡发洗净，黄瓜切片",
      "锅中油热下肉片滑炒至变色",
      "下葱姜、木耳、黄花菜翻炒",
      "倒回鸡蛋和黄瓜，加生抽和盐翻匀"
    ],
    tips: "木须肉讲究色彩丰富，黄花菜和木耳要提前泡发好",
    kidsFriendly: true,
    tags: ["经典鲁菜","家常","营养"],
  },
  {
    id: "you-men-da-xia",
    name: "油焖大虾",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["大虾","葱","姜","番茄酱"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "大虾",
        "amount": "10只"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "虾剪去虾须虾脚，开背去虾线",
      "锅中油稍多，下虾煎至两面变红",
      "用铲子轻压虾头挤出虾油",
      "下葱姜炒香，加料酒、生抽、番茄酱、糖",
      "加少许水，盖上锅盖焖3分钟",
      "开盖大火收汁即可"
    ],
    tips: "压虾头出虾油是灵魂步骤，虾油让整道菜颜色红亮味道鲜浓",
    kidsFriendly: true,
    tags: ["宴客","经典","节日"],
  },
  // ======= 粤菜 =======
  {
    id: "bai-qie-ji",
    name: "白切鸡",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["三黄鸡","姜","葱","沙姜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "三黄鸡",
        "amount": "1只(约1kg)"
      },
      {
        "name": "姜",
        "amount": "1大块"
      },
      {
        "name": "葱",
        "amount": "3根"
      },
      {
        "name": "沙姜",
        "amount": "1小块"
      },
      {
        "name": "花生油",
        "amount": "2勺"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡处理干净，大锅水烧开加姜片葱结",
      "手提鸡头将鸡浸入沸水10秒提起（三提三放）",
      "放入冰水浸泡使鸡皮收紧",
      "重新入锅，水开后转最小火浸煮20分钟",
      "关火焖15分钟（用余温浸熟）",
      "捞出放入冰水彻底冷却",
      "斩件装盘，配姜葱油蘸料（姜葱末+盐+滚油+生抽）"
    ],
    tips: "三提三放让鸡皮收紧，全程不盖锅盖，浸熟不是煮熟，鸡肉才嫩滑",
    kidsFriendly: true,
    tags: ["粤菜第一鸡","经典","宴客"],
  },
  {
    id: "qing-zheng-lu-yu",
    name: "清蒸鲈鱼",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["鲈鱼","葱","姜","蒸鱼豉油"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鲈鱼",
        "amount": "1条(约500g)"
      },
      {
        "name": "葱",
        "amount": "3根"
      },
      {
        "name": "姜",
        "amount": "1大块"
      },
      {
        "name": "蒸鱼豉油",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "少许"
      },
      {
        "name": "食用油",
        "amount": "2勺"
      }
    ],
    steps: [
      "鲈鱼去鳞去内脏洗净，两面划三刀",
      "鱼身抹少许盐和料酒，腌10分钟",
      "盘底铺姜片和葱段，放上鱼",
      "水开后上锅大火蒸8分钟（500g鱼的时间）",
      "倒掉盘中蒸出的腥水",
      "鱼身上铺葱丝姜丝，淋蒸鱼豉油",
      "浇滚油激香"
    ],
    tips: "蒸鱼时间=鱼重/50g+2分钟，倒掉蒸水是关键否则腥",
    kidsFriendly: true,
    tags: ["粤菜经典","鲜嫩","宴客"],
  },
  {
    id: "gan-chao-niu-he",
    name: "干炒牛河",
    category: "staple",
    cuisine: "yue",
    difficulty: 3,
    cookingTime: 15,
    mainIngredients: ["河粉","牛肉","豆芽","韭黄"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "新鲜河粉",
        "amount": "300g"
      },
      {
        "name": "牛肉",
        "amount": "150g"
      },
      {
        "name": "豆芽",
        "amount": "1把"
      },
      {
        "name": "韭黄",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "牛肉逆纹切薄片，加料酒、生抽、淀粉腌制",
      "河粉用手抖散",
      "大火热锅多油，下牛肉滑炒至变色盛出",
      "同一锅中下河粉大火翻炒，用筷子配合铲子抖散",
      "加老抽上色，加生抽蚝油调味",
      "下豆芽、韭黄、牛肉大火翻炒均匀",
      "出锅前撒葱段"
    ],
    tips: "炒河粉要有镬气，全程大火。河粉不要用铲子切，用筷子抖散",
    kidsFriendly: false,
    tags: ["粤菜经典","镬气","技术菜"],
  },
  {
    id: "bai-zhuo-xia",
    name: "白灼虾",
    category: "meat",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["活虾","姜","葱","生抽"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "活虾",
        "amount": "500g"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "芥末",
        "amount": "少许(可选)"
      }
    ],
    steps: [
      "虾洗净，剪去虾须",
      "锅中水烧开，加姜片、葱段、料酒",
      "下虾大火煮2-3分钟至虾壳变红虾身弯曲",
      "捞出立即放入冰水过凉（让虾肉弹牙）",
      "蘸料：生抽+少许芥末（可选）"
    ],
    tips: "虾一定要买活的，煮的时间不能超过3分钟，蘸汁越简单越能品出虾的鲜甜",
    kidsFriendly: true,
    tags: ["粤菜经典","原味","快手"],
  },
  {
    id: "chi-zhi-zheng-pai-gu",
    name: "豉汁蒸排骨",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["排骨","豆豉","蒜","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "400g"
      },
      {
        "name": "豆豉",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "排骨斩小段，清水浸泡15分钟去血水",
      "排骨沥干，加豆豉、蒜末、生抽、蚝油、料酒、糖、淀粉拌匀",
      "腌制20分钟",
      "水开后上锅大火蒸20分钟",
      "出锅撒葱花"
    ],
    tips: "排骨剁小段更容易熟，淀粉让排骨更嫩滑，蒸的时间刚好是肉脱骨但还有嚼劲",
    kidsFriendly: true,
    tags: ["粤菜茶楼","鲜嫩","经典"],
  },
  {
    id: "bao-zai-fan",
    name: "煲仔饭",
    category: "staple",
    cuisine: "yue",
    difficulty: 3,
    cookingTime: 35,
    mainIngredients: ["大米","腊肠","腊肉","青菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "大米",
        "amount": "2杯"
      },
      {
        "name": "腊肠",
        "amount": "2根"
      },
      {
        "name": "腊肉",
        "amount": "50g"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "大米淘洗后泡30分钟",
      "砂锅底部刷一层油，放入泡好的米，加水(米:水=1:1.2)",
      "大火烧开转中小火煮到表面收水（约8分钟）",
      "铺上切片的腊肠腊肉和姜丝",
      "盖盖小火煲15分钟，听到滋滋声即可",
      "青菜焯水摆入，淋上调好的煲仔饭酱油",
      "关火焖2分钟，拌匀开吃"
    ],
    tips: "锅底刷油是饭焦（锅巴）的关键，听到滋滋声就说明饭焦形成了",
    kidsFriendly: false,
    tags: ["粤式经典","饭焦","技术菜"],
  },
  // ======= 苏菜 =======
  {
    id: "hong-shao-shi-zi-tou",
    name: "红烧狮子头",
    category: "meat",
    cuisine: "su",
    difficulty: 3,
    cookingTime: 60,
    mainIngredients: ["猪肉末","荸荠","鸡蛋","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "猪五花肉末",
        "amount": "400g(肥瘦3:7)"
      },
      {
        "name": "荸荠",
        "amount": "4个"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "葱姜",
        "amount": "各适量"
      },
      {
        "name": "八角",
        "amount": "1个"
      },
      {
        "name": "冰糖",
        "amount": "10g"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "荸荠去皮切碎，和肉末、鸡蛋、淀粉、葱姜末、料酒、盐搅打上劲",
      "手蘸水，取肉馅团成大肉丸（狮子头）",
      "锅中多油，下狮子头炸至表面金黄定型",
      "另起锅加少量油，下冰糖炒糖色，加生抽老抽料酒和水",
      "放入狮子头，加八角，大火烧开转小火炖40分钟",
      "捞出装盘，汤汁收浓浇上"
    ],
    tips: "肉馅要搅打上劲才能成型不散，加入荸荠让口感松软不腻",
    kidsFriendly: false,
    tags: ["淮扬名菜","宴客","功夫菜"],
  },
  {
    id: "yan-shui-ya",
    name: "盐水鸭",
    category: "cold",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 90,
    mainIngredients: ["鸭子","花椒","盐","八角"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸭子",
        "amount": "1只(约1.5kg)"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "3勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "香叶",
        "amount": "2片"
      },
      {
        "name": "葱",
        "amount": "3段"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "3勺"
      }
    ],
    steps: [
      "花椒和盐干锅炒出香味做成花椒盐",
      "鸭子洗净控干，用花椒盐内外抹匀，冷藏腌制4小时以上",
      "大锅水加八角桂皮香叶葱姜料酒烧开",
      "放入鸭子，大火烧开转小火保持微沸",
      "煮40分钟，关火焖20分钟",
      "取出晾凉斩件"
    ],
    tips: "腌制时间越长越入味，最好隔夜。煮的时候水不能沸腾太猛否则皮会破",
    kidsFriendly: false,
    tags: ["南京名菜","冷菜","宴客"],
  },
  {
    id: "da-zhu-gan-si",
    name: "大煮干丝",
    category: "soup",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["白豆干","火腿","鸡汤","虾仁"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "白豆干",
        "amount": "4块"
      },
      {
        "name": "火腿",
        "amount": "30g"
      },
      {
        "name": "鸡汤",
        "amount": "500ml(或浓汤宝)"
      },
      {
        "name": "虾仁",
        "amount": "50g"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "豆干片薄再切细丝，火腿切丝",
      "豆干丝焯水1分钟捞出",
      "锅中倒入鸡汤烧开，下豆干丝、火腿丝、姜片",
      "中火煮8分钟让干丝吸饱汤汁",
      "下虾仁和青菜煮1分钟",
      "加盐调味即可"
    ],
    tips: "豆干丝切得越细越能吸收汤汁，烫一下去掉豆腥味",
    kidsFriendly: false,
    tags: ["淮扬名菜","精细","汤菜"],
  },
  // ======= 浙菜 =======
  {
    id: "dong-po-rou",
    name: "东坡肉",
    category: "meat",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 120,
    mainIngredients: ["五花肉","黄酒","生抽","冰糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "500g"
      },
      {
        "name": "黄酒",
        "amount": "200ml"
      },
      {
        "name": "生抽",
        "amount": "3勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "葱",
        "amount": "3段"
      },
      {
        "name": "姜",
        "amount": "5片"
      }
    ],
    steps: [
      "五花肉整块焯水定型，切成4cm方块",
      "砂锅底铺葱段和姜片",
      "肉皮朝下码入锅中",
      "倒入黄酒、生抽、老抽、冰糖，加水没过肉",
      "大火烧开转微小火炖1.5小时",
      "将肉翻面皮朝上，再炖30分钟",
      "大火收汁至浓稠"
    ],
    tips: "黄酒是东坡肉的灵魂，不要加水太多，小火慢炖2小时肉才酥烂不腻",
    kidsFriendly: false,
    tags: ["浙菜代表","经典","宴客"],
  },
  {
    id: "xi-hu-cu-yu",
    name: "西湖醋鱼",
    category: "meat",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["草鱼","醋","糖","姜"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "草鱼",
        "amount": "1条(约600g)"
      },
      {
        "name": "醋",
        "amount": "2勺"
      },
      {
        "name": "糖",
        "amount": "2勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "大量"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      }
    ],
    steps: [
      "草鱼从中间劈成两片（带脊骨的和不带脊骨的）",
      "锅中水加姜片料酒烧开",
      "先下带脊骨的一片煮3分钟，再下另一片煮2分钟",
      "捞出装盘",
      "另起锅，用煮鱼的汤加生抽、糖、醋煮开",
      "淀粉水勾芡至浓稠",
      "大量姜末撒在鱼身上，浇上糖醋汁"
    ],
    tips: "这道菜的灵魂是姜末+糖醋汁，姜末要多到能盖住鱼肉",
    kidsFriendly: false,
    tags: ["浙菜代表","酸甜","经典"],
  },
  {
    id: "long-jing-xia-ren",
    name: "龙井虾仁",
    category: "meat",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["虾仁","龙井茶叶","蛋清","淀粉"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "300g"
      },
      {
        "name": "龙井茶叶",
        "amount": "5g"
      },
      {
        "name": "蛋清",
        "amount": "半个"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "龙井茶叶用80°C热水泡开，取茶水待用",
      "虾仁加盐、料酒、蛋清、淀粉抓匀上浆",
      "锅中油温四成热，下虾仁滑炒至变白",
      "倒入茶叶水翻炒几下",
      "加盐调味，放入几片泡开的茶叶翻炒出锅"
    ],
    tips: "茶要用龙井，油温不能太高，虾仁变白就熟了，保持嫩滑",
    kidsFriendly: true,
    tags: ["浙菜名菜","清淡","雅致"],
  },
  // ======= 闽菜 =======
  {
    id: "li-zhi-rou",
    name: "荔枝肉",
    category: "meat",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["猪里脊","土豆","番茄酱","白醋"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "250g"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊肉切十字花刀再切块（形似荔枝），加盐料酒腌制",
      "土豆切滚刀块",
      "肉块裹上干淀粉，土豆也裹淀粉",
      "油温六成热，下肉块炸至金黄卷曲成荔枝状",
      "土豆块也炸至金黄",
      "锅中少许油，下番茄酱、糖、醋、少许水煮至浓稠",
      "下炸好的肉和土豆翻匀"
    ],
    tips: "十字花刀要切深但不切断，炸出来才会卷成荔枝状",
    kidsFriendly: true,
    tags: ["闽菜代表","酸甜","福建"],
  },
  {
    id: "hai-li-jian",
    name: "海蛎煎",
    category: "meat",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["海蛎","鸡蛋","红薯粉","葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "海蛎",
        "amount": "200g"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "红薯粉",
        "amount": "3勺"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "甜辣酱",
        "amount": "适量"
      }
    ],
    steps: [
      "海蛎洗净控干，葱切葱花",
      "红薯粉加少许水调成糊，加盐和胡椒粉",
      "海蛎和葱花加入粉糊中拌匀",
      "平底锅多油烧热，倒入海蛎糊摊平",
      "中火煎至底部金黄定型",
      "鸡蛋打散均匀淋在上面",
      "翻面继续煎至两面金黄",
      "出锅配甜辣酱吃"
    ],
    tips: "海蛎要新鲜，红薯粉糊不要太稠，煎到外酥里嫩最好",
    kidsFriendly: false,
    tags: ["闽南小吃","经典","夜市"],
  },
  {
    id: "sha-cha-mian",
    name: "沙茶面",
    category: "staple",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["面条","沙茶酱","花生酱","虾仁"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "面条",
        "amount": "150g"
      },
      {
        "name": "沙茶酱",
        "amount": "1勺"
      },
      {
        "name": "花生酱",
        "amount": "半勺"
      },
      {
        "name": "虾仁",
        "amount": "50g"
      },
      {
        "name": "瘦肉片",
        "amount": "50g"
      },
      {
        "name": "豆腐泡",
        "amount": "3个"
      },
      {
        "name": "豆芽",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "牛奶",
        "amount": "50ml(可选)"
      }
    ],
    steps: [
      "沙茶酱和花生酱用少许水调开",
      "锅中油热下蒜末爆香",
      "下虾仁和瘦肉片翻炒",
      "倒入沙茶花生酱和适量水煮开",
      "加豆腐泡煮3分钟，加少许牛奶让汤更浓郁",
      "面条另起锅煮熟捞出",
      "豆芽焯水放在面上，浇上沙茶汤和配料"
    ],
    kidsFriendly: false,
    tags: ["厦门代表","浓香","面食"],
  },
  {
    id: "yu-wan-tang",
    name: "鱼丸汤",
    category: "soup",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["鱼丸","紫菜","虾皮","葱花"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鱼丸",
        "amount": "10个"
      },
      {
        "name": "紫菜",
        "amount": "1片"
      },
      {
        "name": "虾皮",
        "amount": "1小撮"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "锅中加水烧开，下鱼丸煮至浮起",
      "放入虾皮煮1分钟",
      "关火后放入撕碎的紫菜",
      "加盐、白胡椒粉、香油调味",
      "撒葱花即可"
    ],
    tips: "鱼丸浮起来就熟了，紫菜关火后放保持口感",
    kidsFriendly: true,
    tags: ["闽南风味","清淡","快手"],
  },
  // ======= 徽菜 =======
  {
    id: "chou-gui-yu",
    name: "臭鳜鱼",
    category: "meat",
    cuisine: "hui",
    difficulty: 3,
    cookingTime: 40,
    mainIngredients: ["鳜鱼","臭豆腐乳","五花肉","干辣椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "鳜鱼",
        "amount": "1条(约500g)"
      },
      {
        "name": "臭豆腐乳",
        "amount": "1块"
      },
      {
        "name": "五花肉",
        "amount": "50g"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "鳜鱼洗净两面划刀",
      "五花肉切丁",
      "锅中油热下五花肉煸出油",
      "下姜蒜干辣椒爆香",
      "放入鳜鱼两面煎至微黄",
      "加料酒、生抽、臭豆腐乳和少许水",
      "大火烧开转中小火焖15分钟",
      "大火收汁撒葱花"
    ],
    tips: "闻着臭吃着香，臭豆腐乳是关键调料，没有的话可省略做红烧鳜鱼",
    kidsFriendly: false,
    tags: ["徽菜第一菜","重口味","经典"],
  },
  {
    id: "mao-dou-fu",
    name: "毛豆腐",
    category: "veggie",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["毛豆腐","辣椒酱","蒜","葱"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "毛豆腐",
        "amount": "4块"
      },
      {
        "name": "辣椒酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "毛豆腐切厚片",
      "平底锅少许油，下毛豆腐煎至两面金黄",
      "蒜切末，和辣椒酱一起下锅炒香",
      "加生抽和少许水翻匀",
      "撒葱花出锅"
    ],
    tips: "毛豆腐表面有白色菌丝是正常的，煎的时候火不要太大",
    kidsFriendly: false,
    tags: ["徽菜特色","独特","煎炸"],
  },
  {
    id: "yan-du-xian",
    name: "腌笃鲜",
    category: "soup",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 90,
    mainIngredients: ["咸肉","鲜肉","春笋","百叶结"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "咸肉",
        "amount": "200g"
      },
      {
        "name": "五花肉",
        "amount": "200g"
      },
      {
        "name": "春笋",
        "amount": "2根"
      },
      {
        "name": "百叶结",
        "amount": "6个"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "葱",
        "amount": "2段"
      }
    ],
    steps: [
      "咸肉和鲜五花肉切大块，冷水下锅焯水",
      "春笋剥壳切滚刀块焯水去涩",
      "所有食材入砂锅，加足量热水和姜片料酒",
      "大火烧开转小火炖1小时",
      "加入百叶结再炖15分钟",
      "尝味后决定是否加盐（咸肉本身有咸味）"
    ],
    tips: "腌=咸肉，笃=小火慢炖，鲜=鲜肉和春笋。三种鲜味融合在一起",
    kidsFriendly: false,
    tags: ["徽菜名菜","汤鲜","春季"],
  },
  // ======= 其他 =======
  {
    id: "ga-li-ji",
    name: "咖喱鸡",
    category: "meat",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 35,
    mainIngredients: ["鸡腿肉","咖喱块","土豆","胡萝卜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿肉",
        "amount": "300g"
      },
      {
        "name": "咖喱块",
        "amount": "2块"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "椰浆",
        "amount": "100ml(可选)"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡腿肉切块，土豆、胡萝卜切滚刀块，洋葱切片",
      "锅中油热下洋葱炒香，加鸡肉翻炒至变色",
      "下土豆、胡萝卜翻炒",
      "加水没过食材，大火烧开转中火煮15分钟",
      "关火放入咖喱块搅拌至融化",
      "开小火煮5分钟至浓稠，加椰浆搅匀"
    ],
    tips: "咖喱块关火后放更容易融化不结块，加椰浆让味道更浓郁",
    kidsFriendly: true,
    tags: ["异国","下饭","日式"],
  },
  {
    id: "yi-da-li-mian",
    name: "意大利面",
    category: "staple",
    cuisine: "other",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["意大利面","番茄","肉末","洋葱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "意大利面",
        "amount": "200g"
      },
      {
        "name": "番茄",
        "amount": "2个"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "黑胡椒粉",
        "amount": "少许"
      },
      {
        "name": "橄榄油",
        "amount": "适量"
      }
    ],
    steps: [
      "大锅水烧开加盐，下意面煮至包装说明时间减1分钟",
      "番茄切小块，洋葱切末，蒜切末",
      "锅中橄榄油热，下洋葱蒜末炒香",
      "下肉末炒至变色，加番茄炒出汁",
      "加番茄酱和少许面汤，煮5分钟成肉酱",
      "意面捞出加入肉酱中翻匀",
      "撒黑胡椒粉"
    ],
    kidsFriendly: true,
    tags: ["西餐","快手","孩子爱吃"],
  },
  {
    id: "bu-dui-guo",
    name: "部队锅",
    category: "soup",
    cuisine: "other",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["午餐肉","泡菜","年糕","拉面"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "午餐肉",
        "amount": "半罐"
      },
      {
        "name": "韩式泡菜",
        "amount": "150g"
      },
      {
        "name": "年糕",
        "amount": "100g"
      },
      {
        "name": "方便面",
        "amount": "1包"
      },
      {
        "name": "芝士片",
        "amount": "1片"
      },
      {
        "name": "金针菇",
        "amount": "1把"
      },
      {
        "name": "豆腐",
        "amount": "半块"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "韩式辣酱",
        "amount": "1勺"
      }
    ],
    steps: [
      "所有食材洗净切好摆入平底锅中",
      "加入泡菜和韩式辣酱",
      "加水至食材一半高度",
      "大火煮开转中火煮5分钟",
      "加入方便面饼和芝士片",
      "再煮2分钟即可"
    ],
    tips: "食材摆好看一点拍照好看，汤汁越煮越浓",
    kidsFriendly: false,
    tags: ["韩式","聚餐","冬天"],
  },
  {
    id: "luo-song-tang",
    name: "罗宋汤",
    category: "soup",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["牛肉","番茄","土豆","卷心菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛腩",
        "amount": "300g"
      },
      {
        "name": "番茄",
        "amount": "2个"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "卷心菜",
        "amount": "1/4个"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "黑胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "牛腩切块焯水捞出",
      "所有蔬菜切块",
      "锅中油热下洋葱炒香，加番茄炒出汁",
      "加番茄酱炒匀",
      "加牛腩和足量水，大火烧开转小火炖40分钟",
      "加土豆、胡萝卜、卷心菜继续炖15分钟",
      "加盐和黑胡椒粉调味"
    ],
    kidsFriendly: true,
    tags: ["西式汤","暖胃","营养"],
  },
  // ======= 家常 =======
  {
    id: "suan-rong-chao-dou-miao",
    name: "蒜蓉炒豆苗",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["豆苗","蒜","盐"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "豆苗",
        "amount": "1盒"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "豆苗洗净控干，蒜切末",
      "锅中油热下蒜末爆香",
      "下豆苗大火快炒30秒",
      "加盐调味，立刻出锅"
    ],
    tips: "豆苗非常嫩，入锅30秒就熟了，炒久了出水变蔫",
    kidsFriendly: true,
    tags: ["超快手","清淡","家常"],
  },
  {
    id: "dou-jiao-chao-rou",
    name: "豆角炒肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["豆角","猪里脊","生抽","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "豆角",
        "amount": "300g"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "豆角去筋掰段焯水2分钟（一定要熟）",
      "里脊切丝加料酒淀粉腌制",
      "锅中油热下肉丝滑炒至变色盛出",
      "下蒜片爆香，下豆角翻炒",
      "倒回肉丝，加生抽和盐翻匀"
    ],
    tips: "豆角一定要焯熟，生的豆角含有毒素",
    kidsFriendly: true,
    tags: ["家常","下饭","快手"],
  },
  {
    id: "rou-mo-zheng-dan",
    name: "肉末蒸蛋",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 18,
    mainIngredients: ["鸡蛋","猪肉末","生抽","温水"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散加盐和1.5倍温水搅匀，过滤去泡",
      "盖上保鲜膜，水开后蒸8分钟",
      "同时肉末加生抽炒熟",
      "蛋羹蒸好后揭掉保鲜膜，把肉末铺在上面",
      "再蒸2分钟，淋香油撒葱花"
    ],
    tips: "肉末蒸蛋=鸡蛋羹+肉末，蛋白质加倍，孩子特别爱吃",
    kidsFriendly: true,
    tags: ["快手","营养","孩子最爱"],
  },
  {
    id: "tu-dou-ni",
    name: "土豆泥",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["土豆","牛奶","黄油","盐"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "牛奶",
        "amount": "50ml"
      },
      {
        "name": "黄油",
        "amount": "10g"
      },
      {
        "name": "盐",
        "amount": "少许"
      },
      {
        "name": "黑胡椒粉",
        "amount": "少许（可选）"
      }
    ],
    steps: [
      "土豆去皮切块，蒸或煮20分钟至筷子能轻松扎透",
      "趁热压成土豆泥（用叉子或压泥器）",
      "加入黄油搅拌至融化",
      "分次加入温牛奶搅拌至顺滑",
      "加盐调味，可加少许黑胡椒粉"
    ],
    tips: "土豆要趁热压泥，黄油和牛奶都要趁热加入，冷了会有颗粒感",
    kidsFriendly: true,
    tags: ["孩子最爱","西式","软食"],
  },
  {
    id: "xi-lan-hua-chao-xia-ren",
    name: "西兰花炒虾仁",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["西兰花","虾仁","蒜","盐"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "西兰花",
        "amount": "1棵"
      },
      {
        "name": "虾仁",
        "amount": "150g"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "料酒",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      }
    ],
    steps: [
      "西兰花掰小朵焯水1分钟",
      "虾仁加料酒和少许淀粉抓匀腌5分钟",
      "锅中油热下虾仁滑炒至变红盛出",
      "下蒜末爆香，下西兰花翻炒",
      "倒回虾仁，加盐翻匀"
    ],
    tips: "虾仁不要炒太久，变红就熟了，这道菜颜色好看孩子愿意吃",
    kidsFriendly: true,
    tags: ["快手","营养","孩子爱"],
  },
  {
    id: "niu-nai-xiao-man-tou",
    name: "牛奶小馒头",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["面粉","牛奶","酵母","糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "中筋面粉",
        "amount": "300g"
      },
      {
        "name": "牛奶",
        "amount": "180ml(温热)"
      },
      {
        "name": "酵母",
        "amount": "3g"
      },
      {
        "name": "糖",
        "amount": "20g"
      },
      {
        "name": "食用油",
        "amount": "1勺"
      }
    ],
    steps: [
      "温牛奶(不烫手)化开酵母和糖",
      "面粉中加入酵母牛奶，揉成光滑面团",
      "盖保鲜膜发酵1小时至两倍大",
      "取出揉面排气，分成小剂子，搓成圆形馒头",
      "放入蒸锅二次醒发15分钟",
      "冷水开火，水开后蒸12分钟",
      "关火焖3分钟再揭盖"
    ],
    tips: "关火后一定要焖3分钟，否则馒头遇冷回缩就塌了",
    kidsFriendly: true,
    tags: ["早餐","孩子爱","面食"],
  },
  {
    id: "fan-qie-rou-jiang-mian",
    name: "番茄肉酱面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["面条","番茄","猪肉末","番茄酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "150g"
      },
      {
        "name": "番茄",
        "amount": "2个"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "洋葱",
        "amount": "1/4个"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "面条煮熟捞出",
      "番茄切小块，洋葱切末",
      "锅中油热下洋葱蒜末炒香",
      "下肉末炒至变色，加番茄炒出汁",
      "加番茄酱和少许面汤煮成浓稠肉酱",
      "浇在面条上"
    ],
    kidsFriendly: true,
    tags: ["快手","孩子爱","西式中做"],
  },
  {
    id: "nan-gua-zhou",
    name: "南瓜粥",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 40,
    mainIngredients: ["南瓜","大米","水"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "南瓜",
        "amount": "300g"
      },
      {
        "name": "大米",
        "amount": "100g"
      },
      {
        "name": "水",
        "amount": "1.5L"
      },
      {
        "name": "冰糖",
        "amount": "少许（可选）"
      }
    ],
    steps: [
      "大米淘洗后泡30分钟",
      "南瓜去皮切小块",
      "大米和南瓜一起入锅加水",
      "大火烧开转小火煮30分钟，不时搅拌防糊",
      "煮到南瓜和大米都化了，粥浓稠顺滑",
      "喜甜可加少许冰糖"
    ],
    tips: "南瓜自带甜味，不加糖也很好喝，粥要时不时搅一下防止粘锅",
    kidsFriendly: true,
    tags: ["养胃","早餐","孩子爱"],
  },
  // ======= 川菜 =======
  {
    id: "yu-xiang-xia-ren",
    name: "鱼香虾仁",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["虾仁","泡椒","姜蒜","糖醋"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "250g"
      },
      {
        "name": "泡椒",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "虾仁加料酒淀粉腌制",
      "调鱼香汁",
      "油热下姜蒜泡椒爆香",
      "下虾仁滑炒至变色",
      "淋入鱼香汁大火翻匀"
    ],
    tips: "鱼香味型通用，虾仁比肉丝更嫩滑",
    kidsFriendly: false,
    tags: ["川菜","鱼香","快手"],
  },
  {
    id: "hong-you-chao-shou",
    name: "红油抄手",
    category: "staple",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["馄饨皮","猪肉末","辣椒油","花椒粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "馄饨皮",
        "amount": "20张"
      },
      {
        "name": "猪肉末",
        "amount": "200g"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "花椒粉",
        "amount": "少许"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "肉末加姜末、盐搅打上劲",
      "包抄手",
      "水开下抄手煮至浮起",
      "调红油汁",
      "抄手捞出拌匀"
    ],
    tips: "抄手=四川馄饨，皮薄馅大",
    kidsFriendly: false,
    tags: ["川味小吃","红油"],
  },
  {
    id: "guo-ba-rou-pian",
    name: "锅巴肉片",
    category: "meat",
    cuisine: "chuan",
    difficulty: 3,
    cookingTime: 35,
    mainIngredients: ["猪里脊","锅巴","木耳","番茄酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "200g"
      },
      {
        "name": "锅巴",
        "amount": "100g"
      },
      {
        "name": "木耳",
        "amount": "30g"
      },
      {
        "name": "青椒",
        "amount": "半个"
      },
      {
        "name": "红椒",
        "amount": "半个"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      }
    ],
    steps: [
      "里脊切片加淀粉腌制",
      "锅巴掰小块",
      "油热下肉片滑炒",
      "下木耳青红椒",
      "加调料煮开勾芡",
      "淋在炸好的锅巴上"
    ],
    tips: "锅巴最后放保持酥脆，滋滋声是表演",
    kidsFriendly: false,
    tags: ["川菜经典","酥脆"],
  },
  {
    id: "chen-pi-tu-ding",
    name: "陈皮兔丁",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["兔肉","陈皮","干辣椒","花椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "兔肉",
        "amount": "300g"
      },
      {
        "name": "陈皮",
        "amount": "3片"
      },
      {
        "name": "干辣椒",
        "amount": "10个"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "兔肉切丁加料酒生抽腌20分钟",
      "陈皮温水泡软切丝",
      "油热下兔丁炸至金黄捞出",
      "下干辣椒花椒陈皮炒香",
      "下兔丁翻炒调味"
    ],
    tips: "陈皮是灵魂调料",
    kidsFriendly: false,
    tags: ["川菜","干香","下酒"],
  },
  {
    id: "deng-ying-niu-rou",
    name: "灯影牛肉",
    category: "cold",
    cuisine: "chuan",
    difficulty: 3,
    cookingTime: 60,
    mainIngredients: ["牛后腿肉","辣椒粉","花椒粉","白芝麻"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛后腿肉",
        "amount": "500g"
      },
      {
        "name": "辣椒粉",
        "amount": "1勺"
      },
      {
        "name": "花椒粉",
        "amount": "半勺"
      },
      {
        "name": "白芝麻",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "牛肉冷冻后切极薄片",
      "低温烘干或烤箱90°C烤酥",
      "锅中炒香辣椒粉花椒粉",
      "下牛肉片生抽糖翻炒",
      "撒白芝麻"
    ],
    tips: "牛肉片要切得能透光",
    kidsFriendly: false,
    tags: ["川味小吃","下酒","功夫菜"],
  },
  {
    id: "kai-shui-bai-cai",
    name: "开水白菜",
    category: "soup",
    cuisine: "chuan",
    difficulty: 3,
    cookingTime: 120,
    mainIngredients: ["大白菜心","老母鸡","火腿","干贝"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "大白菜心",
        "amount": "1棵"
      },
      {
        "name": "老母鸡",
        "amount": "半只"
      },
      {
        "name": "火腿",
        "amount": "50g"
      },
      {
        "name": "干贝",
        "amount": "20g"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "老母鸡焯水加火腿干贝熬汤2小时",
      "鸡胸肉末扫汤去杂质",
      "白菜心焯水放汤碗",
      "浇入清汤蒸5分钟入味"
    ],
    tips: "开水=扫过的清澈高汤，不是白开水",
    kidsFriendly: false,
    tags: ["国宴菜","功夫菜","清淡"],
  },
  // ======= 湘菜 =======
  {
    id: "duo-jiao-zheng-pai-gu",
    name: "剁椒蒸排骨",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 35,
    mainIngredients: ["排骨","剁椒","豆豉","姜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "400g"
      },
      {
        "name": "剁椒",
        "amount": "2勺"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "排骨泡水去血",
      "加剁椒豆豉生抽料酒淀粉姜蒜拌匀",
      "腌制20分钟",
      "水开上锅大火蒸25分钟"
    ],
    tips: "剁椒蒸菜是湘菜特色技法",
    kidsFriendly: false,
    tags: ["湘菜","蒸菜","下饭"],
  },
  {
    id: "dong-an-zi-ji",
    name: "东安子鸡",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["鸡腿","姜丝","米醋","干辣椒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿",
        "amount": "3个"
      },
      {
        "name": "姜",
        "amount": "一大块"
      },
      {
        "name": "米醋",
        "amount": "2勺"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "花椒",
        "amount": "少许"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "鸡腿煮熟放凉撕成条",
      "大量姜丝备好",
      "油热下花椒干辣椒姜丝爆香",
      "下鸡丝大火翻炒",
      "沿锅边淋米醋加盐翻匀"
    ],
    tips: "姜丝要大量，醋沿锅边淋入激香",
    kidsFriendly: false,
    tags: ["湘菜名菜","酸辣"],
  },
  {
    id: "la-wei-he-zheng",
    name: "腊味合蒸",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 30,
    mainIngredients: ["腊肉","腊肠","腊鱼","豆豉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肉",
        "amount": "150g"
      },
      {
        "name": "腊肠",
        "amount": "2根"
      },
      {
        "name": "腊鱼",
        "amount": "100g"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "腊味用热水洗净切片",
      "所有腊味码入碗中",
      "加豆豉干辣椒姜片料酒",
      "水开上锅蒸20分钟"
    ],
    tips: "不同腊味一起蒸风味交融",
    kidsFriendly: false,
    tags: ["湘西名菜","腊味","宴客"],
  },
  {
    id: "suan-la-ji-za",
    name: "酸辣鸡杂",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["鸡杂","酸豆角","泡椒","蒜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡杂",
        "amount": "250g"
      },
      {
        "name": "酸豆角",
        "amount": "100g"
      },
      {
        "name": "泡椒",
        "amount": "5个"
      },
      {
        "name": "小米辣",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "鸡杂切片焯水30秒",
      "酸豆角切粒泡椒切段",
      "热锅多油下姜蒜泡椒小米辣爆香",
      "下鸡杂大火爆炒",
      "加酸豆角翻炒调味"
    ],
    tips: "鸡杂焯水要短，全程大火爆炒",
    kidsFriendly: false,
    tags: ["下饭","快手","湘味"],
  },
  {
    id: "luo-bo-gan-chao-la-rou",
    name: "萝卜干炒腊肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["萝卜干","腊肉","干辣椒","蒜苗"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "萝卜干",
        "amount": "100g"
      },
      {
        "name": "腊肉",
        "amount": "150g"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "蒜苗",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "萝卜干提前泡软切段",
      "腊肉煮过切片",
      "锅中少油下腊肉煸至出油",
      "下干辣椒蒜爆香",
      "下萝卜干翻炒3分钟",
      "加生抽和蒜苗翻匀"
    ],
    tips: "萝卜干保留嚼劲不要泡太久",
    kidsFriendly: false,
    tags: ["下饭","湘味","快手"],
  },
  // ======= 鲁菜 =======
  {
    id: "si-xi-wan-zi",
    name: "四喜丸子",
    category: "meat",
    cuisine: "lu",
    difficulty: 3,
    cookingTime: 60,
    mainIngredients: ["猪肉末","荸荠","鸡蛋","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "猪肉末",
        "amount": "400g"
      },
      {
        "name": "荸荠",
        "amount": "4个"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      }
    ],
    steps: [
      "荸荠切碎和肉末鸡蛋淀粉搅打上劲",
      "团成四个大丸子",
      "油炸定型",
      "锅中加调料和水烧开",
      "放入丸子小火炖40分钟",
      "收汁浇上"
    ],
    tips: "四喜=福禄寿喜，适合春节",
    kidsFriendly: false,
    tags: ["鲁菜名菜","宴客","春节"],
  },
  {
    id: "guo-ta-dou-fu",
    name: "锅塌豆腐",
    category: "veggie",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["老豆腐","鸡蛋","面粉","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "面粉",
        "amount": "适量"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "豆腐切厚片稍腌",
      "拍面粉裹蛋液",
      "平底锅煎至两面金黄",
      "加调料和水塌3分钟翻面再塌3分钟"
    ],
    tips: "塌是鲁菜独特技法",
    kidsFriendly: false,
    tags: ["鲁菜技法","素食"],
  },
  {
    id: "ba-si-di-gua",
    name: "拔丝地瓜",
    category: "dessert",
    cuisine: "lu",
    difficulty: 3,
    cookingTime: 25,
    mainIngredients: ["地瓜","白糖","油"],
    emoji: "🥒",
    allIngredients: [
      {
        "name": "地瓜",
        "amount": "2个"
      },
      {
        "name": "白糖",
        "amount": "150g"
      },
      {
        "name": "油",
        "amount": "适量"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "地瓜去皮切滚刀块",
      "油炸至金黄熟透",
      "锅中少油下白糖中小火炒至棕黄",
      "立刻下地瓜快速翻匀裹糖"
    ],
    tips: "炒糖色要中小火，变棕黄立刻离火",
    kidsFriendly: false,
    tags: ["鲁菜甜品","经典"],
  },
  // ======= 粤菜 =======
  {
    id: "bo-luo-gu-lao-rou",
    name: "菠萝咕咾肉",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["猪里脊","菠萝","青椒","番茄酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "300g"
      },
      {
        "name": "菠萝",
        "amount": "半碗"
      },
      {
        "name": "青椒",
        "amount": "半个"
      },
      {
        "name": "红椒",
        "amount": "半个"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      }
    ],
    steps: [
      "里脊切块腌制",
      "裹蛋液再裹干淀粉",
      "炸至金黄复炸30秒",
      "炒糖醋汁加菠萝青红椒",
      "下肉块翻匀"
    ],
    tips: "酸甜可口大人小孩都爱",
    kidsFriendly: true,
    tags: ["粤菜经典","酸甜","孩子爱"],
  },
  {
    id: "jiao-yan-xia",
    name: "椒盐虾",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 18,
    mainIngredients: ["大虾","椒盐","蒜","干辣椒"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "大虾",
        "amount": "10只"
      },
      {
        "name": "椒盐",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "虾开背去虾线加料酒腌制",
      "裹薄淀粉",
      "油炸至酥脆",
      "下蒜末干辣椒炒香",
      "下虾撒椒盐翻匀"
    ],
    tips: "虾炸到壳酥脆可以直接吃壳",
    kidsFriendly: false,
    tags: ["粤菜海鲜","酥脆"],
  },
  {
    id: "chi-you-ji",
    name: "豉油鸡",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 45,
    mainIngredients: ["鸡","生抽","老抽","冰糖"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "三黄鸡",
        "amount": "1只"
      },
      {
        "name": "生抽",
        "amount": "半碗"
      },
      {
        "name": "老抽",
        "amount": "2勺"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      }
    ],
    steps: [
      "鸡洗净控干",
      "锅中加调料和水",
      "放入鸡大火烧开转小火",
      "不停舀汤汁浇鸡身",
      "煮20分钟翻面再煮15分钟",
      "关火焖10分钟斩件淋汁"
    ],
    tips: "浇淋法让鸡皮均匀上色",
    kidsFriendly: false,
    tags: ["粤式烧腊","经典","宴客"],
  },
  {
    id: "mi-zhi-cha-shao",
    name: "蜜汁叉烧",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["梅花肉","叉烧酱","蜂蜜","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "梅花肉",
        "amount": "500g"
      },
      {
        "name": "叉烧酱",
        "amount": "2勺"
      },
      {
        "name": "蜂蜜",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "肉扎孔方便入味",
      "加调料腌制4小时以上",
      "烤箱200°C烤20分钟",
      "刷蜂蜜翻面烤15分钟",
      "再刷蜂蜜烤5分钟至焦香"
    ],
    tips: "梅花肉肥瘦相间最适合",
    kidsFriendly: false,
    tags: ["粤式烧腊","经典"],
  },
  {
    id: "pi-dan-shou-rou-zhou",
    name: "皮蛋瘦肉粥",
    category: "staple",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 40,
    mainIngredients: ["大米","皮蛋","猪里脊","姜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "大米",
        "amount": "100g"
      },
      {
        "name": "皮蛋",
        "amount": "2个"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "大米加油盐腌30分钟",
      "水开下米大火10分钟转小火熬20分钟",
      "下皮蛋和姜丝",
      "煮5分钟下肉丝滑散",
      "加盐和白胡椒粉"
    ],
    tips: "米用油盐腌过更容易开花出粥油",
    kidsFriendly: true,
    tags: ["粤式早茶","暖胃","早餐"],
  },
  // ======= 苏菜 =======
  {
    id: "song-shu-gui-yu",
    name: "松鼠鳜鱼",
    category: "meat",
    cuisine: "su",
    difficulty: 3,
    cookingTime: 35,
    mainIngredients: ["鳜鱼","番茄酱","白醋","糖"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鳜鱼",
        "amount": "1条"
      },
      {
        "name": "番茄酱",
        "amount": "3勺"
      },
      {
        "name": "白醋",
        "amount": "2勺"
      },
      {
        "name": "糖",
        "amount": "2勺"
      },
      {
        "name": "淀粉",
        "amount": "大量"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鱼身两侧片花刀",
      "抹料酒盐腌制",
      "均匀拍干淀粉",
      "油炸定型至金黄酥脆",
      "炒糖醋汁浇在鱼上"
    ],
    tips: "刀工要整齐均匀炸出来才像松鼠尾巴",
    kidsFriendly: false,
    tags: ["苏菜名菜","宴客","功夫菜"],
  },
  {
    id: "wu-xi-pai-gu",
    name: "无锡排骨",
    category: "meat",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 60,
    mainIngredients: ["排骨","生抽","冰糖","红曲粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "500g"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      }
    ],
    steps: [
      "排骨焯水",
      "炒糖色下排骨翻炒",
      "加葱姜八角桂皮料酒生抽老抽",
      "加没过排骨的热水",
      "大火烧开转小火炖40分钟",
      "大火收汁"
    ],
    tips: "无锡排骨特点是甜咸口味",
    kidsFriendly: false,
    tags: ["苏菜名菜","宴客"],
  },
  {
    id: "tang-zhou",
    name: "糖粥",
    category: "staple",
    cuisine: "su",
    difficulty: 1,
    cookingTime: 50,
    mainIngredients: ["糯米","红豆","冰糖","桂花"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "糯米",
        "amount": "100g"
      },
      {
        "name": "红豆",
        "amount": "50g"
      },
      {
        "name": "冰糖",
        "amount": "适量"
      },
      {
        "name": "干桂花",
        "amount": "少许"
      },
      {
        "name": "水",
        "amount": "1.5L"
      }
    ],
    steps: [
      "红豆提前泡4小时煮烂过筛成豆沙",
      "糯米熬成白粥",
      "白粥盛碗舀一勺红豆沙放粥上",
      "撒冰糖碎和干桂花"
    ],
    tips: "苏州糖粥也叫鸳鸯粥红白分明",
    kidsFriendly: true,
    tags: ["苏州小吃","传统"],
  },
  // ======= 浙菜 =======
  {
    id: "dong-po-zhou-zi",
    name: "东坡肘子",
    category: "meat",
    cuisine: "zhe",
    difficulty: 3,
    cookingTime: 150,
    mainIngredients: ["猪肘","黄酒","生抽","冰糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪肘",
        "amount": "1个"
      },
      {
        "name": "黄酒",
        "amount": "300ml"
      },
      {
        "name": "生抽",
        "amount": "4勺"
      },
      {
        "name": "老抽",
        "amount": "2勺"
      },
      {
        "name": "冰糖",
        "amount": "50g"
      },
      {
        "name": "葱",
        "amount": "5段"
      },
      {
        "name": "姜",
        "amount": "1大块"
      },
      {
        "name": "八角",
        "amount": "3个"
      }
    ],
    steps: [
      "猪肘火烧去毛刮洗干净",
      "冷水焯水10分钟",
      "砂锅底铺葱姜放肘子",
      "加黄酒生抽老抽冰糖八角",
      "加水没过肘子",
      "大火烧开转微小火炖2小时"
    ],
    tips: "比东坡肉更大更过瘾",
    kidsFriendly: false,
    tags: ["浙菜名菜","宴客","功夫菜"],
  },
  {
    id: "gan-zha-xiang-ling",
    name: "干炸响铃",
    category: "veggie",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["豆腐皮","猪肉末","鸡蛋","花椒盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "豆腐皮",
        "amount": "3张"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "花椒盐",
        "amount": "1小碟"
      },
      {
        "name": "料酒",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      }
    ],
    steps: [
      "肉末加料酒淀粉调馅",
      "豆腐皮铺平抹薄层肉馅卷紧",
      "切3cm段",
      "油温五成热下锅小火炸至金黄"
    ],
    tips: "咬下去有响铃般的脆声",
    kidsFriendly: false,
    tags: ["浙江名菜","素食","下酒"],
  },
  {
    id: "xue-cai-huang-yu",
    name: "雪菜黄鱼",
    category: "meat",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["黄鱼","雪菜","笋丝","姜"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "黄鱼",
        "amount": "1条"
      },
      {
        "name": "雪菜",
        "amount": "100g"
      },
      {
        "name": "冬笋",
        "amount": "50g"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "黄鱼去鳞洗净划刀",
      "煎至两面微黄",
      "加料酒雪菜笋丝",
      "加热水烧开中火煮8分钟",
      "加盐和白胡椒粉"
    ],
    tips: "雪菜有咸味加盐前先尝",
    kidsFriendly: false,
    tags: ["浙菜名菜","鲜香"],
  },
  // ======= 闽菜 =======
  {
    id: "fo-tiao-qiang",
    name: "佛跳墙",
    category: "soup",
    cuisine: "min",
    difficulty: 3,
    cookingTime: 240,
    mainIngredients: ["鲍鱼","海参","干贝","花菇"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鲍鱼",
        "amount": "4只"
      },
      {
        "name": "海参",
        "amount": "2只"
      },
      {
        "name": "干贝",
        "amount": "30g"
      },
      {
        "name": "花菇",
        "amount": "6个"
      },
      {
        "name": "鸡腿",
        "amount": "2个"
      },
      {
        "name": "猪蹄",
        "amount": "半只"
      },
      {
        "name": "金华火腿",
        "amount": "50g"
      },
      {
        "name": "花雕酒",
        "amount": "100ml"
      },
      {
        "name": "姜",
        "amount": "5片"
      }
    ],
    steps: [
      "所有干货提前泡发",
      "鸡和猪蹄焯水",
      "所有食材放入炖盅",
      "加花雕酒和水密封",
      "隔水炖3-4小时加盐调味"
    ],
    tips: "家庭版用普通干货代替也一样鲜美",
    kidsFriendly: false,
    tags: ["闽菜第一汤","宴客","功夫菜"],
  },
  {
    id: "zui-pai-gu",
    name: "醉排骨",
    category: "meat",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["排骨","料酒","番茄酱","糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "400g"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      }
    ],
    steps: [
      "排骨斩小段加料酒腌制",
      "裹淀粉炸至金黄",
      "调汁番茄酱醋糖蒜末",
      "锅中下汁煮浓下排骨翻匀"
    ],
    tips: "醉=用料酒腌制过",
    kidsFriendly: false,
    tags: ["闽菜名菜","酸甜"],
  },
  {
    id: "mian-xian-hu",
    name: "面线糊",
    category: "staple",
    cuisine: "min",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["面线","海蛎","虾仁","葱花"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "面线",
        "amount": "100g"
      },
      {
        "name": "海蛎",
        "amount": "100g"
      },
      {
        "name": "虾仁",
        "amount": "50g"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "水烧开下海蛎和虾仁煮1分钟",
      "下面线煮1分钟",
      "加盐和白胡椒粉撒葱花"
    ],
    tips: "面线很细容易熟下锅1分钟就够",
    kidsFriendly: false,
    tags: ["闽南小吃","早餐","快手"],
  },
  // ======= 徽菜 =======
  {
    id: "fu-li-ji-shao-ji",
    name: "符离集烧鸡",
    category: "meat",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 90,
    mainIngredients: ["鸡","蜂蜜","生抽","香料包"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "整鸡",
        "amount": "1只"
      },
      {
        "name": "蜂蜜",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "3勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "香料包",
        "amount": "1包"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "冰糖",
        "amount": "20g"
      }
    ],
    steps: [
      "鸡用开水烫皮收紧",
      "抹蜂蜜晾干",
      "油炸至表皮金黄",
      "加水生抽老抽香料包姜葱料酒冰糖",
      "放入鸡大火烧开转小火卤1小时",
      "关火焖30分钟",
      "斩件淋卤汁"
    ],
    tips: "烫皮+抹蜂蜜+油炸让鸡皮红亮",
    kidsFriendly: false,
    tags: ["徽菜名菜","烧鸡","宴客"],
  },
  {
    id: "huang-shan-dun-ge",
    name: "黄山炖鸽",
    category: "soup",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 90,
    mainIngredients: ["鸽子","山药","枸杞","姜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸽子",
        "amount": "1只"
      },
      {
        "name": "山药",
        "amount": "200g"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鸽子洗净焯水",
      "山药去皮切段",
      "鸽子姜片料酒入炖盅加水",
      "隔水炖1小时",
      "加山药和枸杞再炖20分钟",
      "加盐调味"
    ],
    tips: "隔水炖比直接煮更清鲜",
    kidsFriendly: false,
    tags: ["徽菜名菜","滋补","汤品"],
  },
  // ======= 家常 =======
  {
    id: "xi-hu-lu-chao-dan",
    name: "西葫芦炒鸡蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["西葫芦","鸡蛋","盐","蒜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "西葫芦",
        "amount": "1根"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "西葫芦切片鸡蛋打散",
      "油热下鸡蛋炒散盛出",
      "下蒜片爆香下西葫芦大火翻炒1分钟",
      "倒回鸡蛋加盐翻匀"
    ],
    tips: "西葫芦水分多要大火快炒",
    kidsFriendly: true,
    tags: ["快手","家常","清淡"],
  },
  {
    id: "tu-dou-dun-niu-rou",
    name: "土豆炖牛肉",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 70,
    mainIngredients: ["牛肉","土豆","胡萝卜","八角"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛肉",
        "amount": "400g"
      },
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      }
    ],
    steps: [
      "牛肉切块焯水",
      "土豆胡萝卜切滚刀块",
      "油热下牛肉煸炒",
      "加调料和足量热水",
      "大火烧开转小火炖40分钟",
      "加土豆胡萝卜再炖20分钟"
    ],
    tips: "牛肉要选带筋的牛腩",
    kidsFriendly: true,
    tags: ["家常","下饭","暖身"],
  },
  {
    id: "xiang-gu-qing-cai",
    name: "香菇青菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["青菜","香菇","蚝油","蒜"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "青菜",
        "amount": "4棵"
      },
      {
        "name": "香菇",
        "amount": "6个"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      }
    ],
    steps: [
      "青菜对半切开焯水摆盘",
      "香菇切片",
      "油热下蒜末爆香下香菇翻炒",
      "加蚝油生抽和水",
      "淀粉勾薄芡浇在青菜上"
    ],
    tips: "青菜焯水加盐和油颜色更绿",
    kidsFriendly: true,
    tags: ["快手","素食","清淡"],
  },
  {
    id: "fu-zhu-chao-rou",
    name: "腐竹炒肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["腐竹","猪里脊","青椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腐竹",
        "amount": "100g"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "腐竹提前泡软切段",
      "里脊切片加料酒淀粉腌制",
      "油热下肉片滑炒至变色",
      "下蒜爆香下腐竹青椒翻炒",
      "加生抽和少许水焖1分钟"
    ],
    tips: "腐竹提前4小时温水加盐泡发更快",
    kidsFriendly: false,
    tags: ["家常","下饭"],
  },
  {
    id: "jian-jiao-chao-rou",
    name: "尖椒炒肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["尖椒","五花肉","生抽","豆豉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "尖椒",
        "amount": "4个"
      },
      {
        "name": "五花肉",
        "amount": "150g"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "五花肉切薄片尖椒斜切圈",
      "锅中不放油下尖椒干煸至起皱盛出",
      "下五花肉煸至出油",
      "加豆豉蒜片炒香",
      "下尖椒加生抽盐大火翻匀"
    ],
    tips: "尖椒先干煸去掉生味增加焦香",
    kidsFriendly: false,
    tags: ["快手","下饭"],
  },
  // ======= 其他 =======
  {
    id: "shi-guo-ban-fan",
    name: "石锅拌饭",
    category: "staple",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["米饭","鸡蛋","菠菜","胡萝卜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "米饭",
        "amount": "1大碗"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "菠菜",
        "amount": "1把"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "豆芽",
        "amount": "1把"
      },
      {
        "name": "韩式辣酱",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "1勺"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "石锅刷香油放米饭",
      "各种蔬菜焯水码在饭上",
      "中间打鸡蛋",
      "石锅放火上加热至底部米饭形成锅巴"
    ],
    tips: "石锅让米饭形成香脆锅巴",
    kidsFriendly: false,
    tags: ["韩式","拌饭"],
  },
  {
    id: "guan-dong-zhu",
    name: "关东煮",
    category: "soup",
    cuisine: "other",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["白萝卜","鸡蛋","鱼丸","昆布"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "白萝卜",
        "amount": "半根"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "鱼丸",
        "amount": "6个"
      },
      {
        "name": "昆布",
        "amount": "1片"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "味淋",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "昆布泡水30分钟",
      "昆布水加生抽味淋煮开出汁",
      "白萝卜切厚块和鸡蛋放入汤汁",
      "小火煮20分钟让萝卜入味",
      "加鱼丸煮5分钟"
    ],
    tips: "昆布出汁和长时间炖煮让食材吸饱汤汁",
    kidsFriendly: false,
    tags: ["日式","暖身","清淡"],
  },
  {
    id: "zha-zhu-pai",
    name: "炸猪排",
    category: "meat",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["猪里脊","鸡蛋","面包糠","面粉"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "2片"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "面包糠",
        "amount": "1碗"
      },
      {
        "name": "面粉",
        "amount": "半碗"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "黑胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "猪排用刀背拍松撒盐和黑胡椒",
      "依次裹面粉蛋液面包糠",
      "油温六成热下猪排中火炸4分钟",
      "翻面再炸3分钟",
      "捞出沥油切条"
    ],
    tips: "拍松的肉排更嫩更薄",
    kidsFriendly: false,
    tags: ["日式","酥脆"],
  },
  {
    id: "dong-yin-gong-tang",
    name: "冬阴功汤",
    category: "soup",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["虾","蘑菇","冬阴功酱","椰浆"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "大虾",
        "amount": "8只"
      },
      {
        "name": "蘑菇",
        "amount": "100g"
      },
      {
        "name": "冬阴功酱",
        "amount": "1勺"
      },
      {
        "name": "椰浆",
        "amount": "100ml"
      },
      {
        "name": "香茅",
        "amount": "1根"
      },
      {
        "name": "柠檬叶",
        "amount": "2片"
      },
      {
        "name": "小番茄",
        "amount": "5个"
      },
      {
        "name": "鱼露",
        "amount": "1勺"
      },
      {
        "name": "柠檬汁",
        "amount": "1勺"
      }
    ],
    steps: [
      "虾去头去壳留尾",
      "水烧开加冬阴功酱香茅柠檬叶",
      "下蘑菇和小番茄煮3分钟",
      "下虾煮至变红",
      "加椰浆鱼露柠檬汁调味"
    ],
    tips: "柠檬汁最后加保持清香",
    kidsFriendly: false,
    tags: ["泰式","酸辣"],
  },
  // ======= 甜品 =======
  {
    id: "shuang-pi-nai",
    name: "双皮奶",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["牛奶","蛋清","白糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "全脂牛奶",
        "amount": "400ml"
      },
      {
        "name": "蛋清",
        "amount": "2个"
      },
      {
        "name": "白糖",
        "amount": "30g"
      }
    ],
    steps: [
      "牛奶小火煮到微沸倒入碗中晾凉",
      "表面形成奶皮后拨开倒出牛奶",
      "倒出的牛奶加蛋清和糖搅匀过滤",
      "沿碗边轻轻倒回有奶皮的碗中",
      "盖保鲜膜水开中小火蒸15分钟",
      "放凉冷藏后吃"
    ],
    tips: "双皮奶=两层奶皮+嫩滑奶冻",
    kidsFriendly: true,
    tags: ["甜品","粤式","经典"],
  },
  {
    id: "yang-zhi-gan-lu",
    name: "杨枝甘露",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["芒果","西柚","西米","椰浆"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "芒果",
        "amount": "2个"
      },
      {
        "name": "西柚",
        "amount": "半个"
      },
      {
        "name": "西米",
        "amount": "50g"
      },
      {
        "name": "椰浆",
        "amount": "200ml"
      },
      {
        "name": "牛奶",
        "amount": "100ml"
      },
      {
        "name": "糖",
        "amount": "适量"
      }
    ],
    steps: [
      "西米煮至透明过凉水",
      "一个芒果切丁一个打成泥",
      "椰浆牛奶糖混合",
      "碗中放西米倒入椰奶",
      "加芒果泥搅一搅铺上芒果丁和西柚粒"
    ],
    tips: "西柚粒的微苦和芒果的甜是绝配",
    kidsFriendly: true,
    tags: ["甜品","港式","经典"],
  },
  {
    id: "hong-dou-sha",
    name: "红豆沙",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 60,
    mainIngredients: ["红豆","冰糖","陈皮"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "红豆",
        "amount": "200g"
      },
      {
        "name": "冰糖",
        "amount": "适量"
      },
      {
        "name": "陈皮",
        "amount": "1小片"
      },
      {
        "name": "水",
        "amount": "1.5L"
      }
    ],
    steps: [
      "红豆提前泡4小时以上",
      "红豆加水大火烧开转小火熬1小时",
      "熬到红豆开花出沙",
      "加冰糖和陈皮搅匀"
    ],
    tips: "加一小片陈皮能让红豆沙更香",
    kidsFriendly: true,
    tags: ["甜品","广式","传统"],
  },
  {
    id: "yin-er-geng",
    name: "银耳羹",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 50,
    mainIngredients: ["银耳","红枣","枸杞","冰糖"],
    emoji: "🍲",
    allIngredients: [
      {
        "name": "银耳",
        "amount": "1朵"
      },
      {
        "name": "红枣",
        "amount": "8颗"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "冰糖",
        "amount": "适量"
      }
    ],
    steps: [
      "银耳提前泡发撕成小朵",
      "银耳加水大火烧开转小火煮40分钟",
      "熬到银耳出胶变粘稠",
      "加红枣枸杞冰糖再煮10分钟"
    ],
    tips: "银耳撕得越小越容易出胶",
    kidsFriendly: true,
    tags: ["甜品","滋补","养生"],
  },
  {
    id: "jiu-niang-yuan-zi",
    name: "酒酿圆子",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["糯米粉","酒酿","枸杞","冰糖"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "糯米粉",
        "amount": "100g"
      },
      {
        "name": "酒酿",
        "amount": "3勺"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "冰糖",
        "amount": "适量"
      }
    ],
    steps: [
      "糯米粉加温水揉成团搓成小圆子",
      "水烧开下圆子煮至浮起",
      "加入酒酿枸杞和冰糖",
      "煮1分钟即可"
    ],
    tips: "圆子浮起来就熟了酒酿不要煮太久",
    kidsFriendly: true,
    tags: ["甜品","江南","传统"],
  },
  {
    id: "mang-guo-xi-mi-lu",
    name: "芒果西米露",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["芒果","西米","椰浆","牛奶"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "芒果",
        "amount": "1个"
      },
      {
        "name": "西米",
        "amount": "50g"
      },
      {
        "name": "椰浆",
        "amount": "100ml"
      },
      {
        "name": "牛奶",
        "amount": "100ml"
      },
      {
        "name": "糖",
        "amount": "适量"
      }
    ],
    steps: [
      "西米煮至中间剩小白点时关火焖至全透明",
      "过凉水",
      "芒果切丁",
      "碗中放西米加椰浆牛奶糖",
      "铺上芒果丁"
    ],
    tips: "西米焖到全透明更Q弹",
    kidsFriendly: true,
    tags: ["甜品","快手","夏季"],
  },
  {
    id: "niu-nai-dun-dan",
    name: "牛奶炖蛋",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["鸡蛋","牛奶","白糖"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "牛奶",
        "amount": "200ml"
      },
      {
        "name": "白糖",
        "amount": "20g"
      }
    ],
    steps: [
      "鸡蛋打散加糖搅匀",
      "加入牛奶搅匀",
      "过滤去掉蛋筋和气泡",
      "倒入碗中盖保鲜膜",
      "水开后中小火蒸12分钟"
    ],
    tips: "用牛奶代替水口感比普通鸡蛋羹更丝滑",
    kidsFriendly: true,
    tags: ["甜品","粤式","孩子爱"],
  },
  // ======= 湘菜 =======
  {
    id: "la-jiao-lei-jiao-pi-dan",
    name: "辣椒擂皮蛋",
    category: "cold",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["皮蛋","青椒","蒜","生抽"],
    emoji: "🍳",
    allIngredients: [
      {
        "name": "皮蛋",
        "amount": "3个"
      },
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "青椒火上烤至表皮焦黑剥去焦皮",
      "蒜和青椒放石臼里捣碎",
      "皮蛋剥壳放入一起捣",
      "加生抽醋香油拌匀"
    ],
    tips: "擂=捣碎，越碎越入味",
    kidsFriendly: false,
    tags: ["湘菜","下饭","快手"],
  },
  {
    id: "hong-shao-la-wei",
    name: "红烧腊味",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["腊肉","腊肠","蒜苗","干辣椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肉",
        "amount": "150g"
      },
      {
        "name": "腊肠",
        "amount": "2根"
      },
      {
        "name": "蒜苗",
        "amount": "3根"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "腊肉腊肠煮过去咸切片",
      "锅中油热下腊味煸至出油",
      "下干辣椒姜片炒香",
      "加料酒生抽和少许水",
      "中火焖10分钟",
      "下蒜苗翻匀"
    ],
    tips: "腊味先煸出油再焖更香",
    kidsFriendly: false,
    tags: ["湘菜","下饭"],
  },
  // ======= 鲁菜 =======
  {
    id: "cong-shao-hai-shen",
    name: "葱烧海参",
    category: "meat",
    cuisine: "lu",
    difficulty: 3,
    cookingTime: 40,
    mainIngredients: ["海参","大葱","生抽","蚝油"],
    emoji: "🍽️",
    allIngredients: [
      {
        "name": "泡发海参",
        "amount": "4只"
      },
      {
        "name": "大葱",
        "amount": "3根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "海参洗净切段",
      "大葱切长段",
      "油热下大葱小火炸至金黄",
      "下海参翻炒",
      "加生抽蚝油糖料酒和水焖5分钟",
      "淀粉勾芡"
    ],
    tips: "炸葱油是灵魂步骤",
    kidsFriendly: false,
    tags: ["鲁菜名菜","宴客"],
  },
  {
    id: "tang-cu-li-yu",
    name: "糖醋鲤鱼",
    category: "meat",
    cuisine: "lu",
    difficulty: 3,
    cookingTime: 30,
    mainIngredients: ["鲤鱼","番茄酱","白醋","糖"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鲤鱼",
        "amount": "1条"
      },
      {
        "name": "番茄酱",
        "amount": "3勺"
      },
      {
        "name": "白醋",
        "amount": "2勺"
      },
      {
        "name": "糖",
        "amount": "2勺"
      },
      {
        "name": "淀粉",
        "amount": "大量"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鲤鱼去鳞洗净花刀",
      "抹料酒盐腌制",
      "拍干淀粉",
      "手提鱼尾油炸定型",
      "炸至金黄酥脆",
      "炒糖醋汁浇在鱼上"
    ],
    tips: "花刀要深至鱼骨炸出来才翘起来",
    kidsFriendly: false,
    tags: ["鲁菜名菜","宴客"],
  },
  // ======= 粤菜 =======
  {
    id: "xian-yu-qie-zi-bao",
    name: "咸鱼茄子煲",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["茄子","咸鱼","猪肉末","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "咸鱼",
        "amount": "50g"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "茄子切条，咸鱼切粒",
      "油热下茄子煎至软盛出",
      "锅中留底油下咸鱼粒和肉末煸香",
      "下蒜末炒香",
      "倒回茄子加生抽蚝油糖和水",
      "中火焖5分钟撒葱花"
    ],
    tips: "咸鱼的咸香渗进茄子超下饭",
    kidsFriendly: false,
    tags: ["粤菜","下饭"],
  },
  {
    id: "hong-shao-niu-nan-bao",
    name: "红烧牛腩煲",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 80,
    mainIngredients: ["牛腩","萝卜","柱侯酱","八角"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛腩",
        "amount": "500g"
      },
      {
        "name": "白萝卜",
        "amount": "1根"
      },
      {
        "name": "柱侯酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      }
    ],
    steps: [
      "牛腩切块焯水",
      "油热下牛腩煸炒",
      "加柱侯酱生抽老抽料酒炒香",
      "加足量热水和八角姜片",
      "大火烧开转小火炖1小时",
      "加萝卜再炖20分钟收汁"
    ],
    tips: "柱侯酱是粤式炖肉的灵魂调料",
    kidsFriendly: false,
    tags: ["粤式","暖身"],
  },
  {
    id: "hua-dan-zheng-shui-dan",
    name: "花蛋蒸水蛋",
    category: "soup",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["鸡蛋","虾仁","葱花","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "虾仁",
        "amount": "4只"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散加盐和温水搅匀过滤",
      "虾仁焯水摆入蛋液",
      "盖保鲜膜水开蒸8分钟",
      "出锅淋生抽撒葱花"
    ],
    tips: "虾仁给蒸蛋增加鲜甜",
    kidsFriendly: true,
    tags: ["粤式","蒸菜","孩子爱"],
  },
  {
    id: "yu-rou-zheng-dan",
    name: "鱼肉蒸蛋",
    category: "soup",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 18,
    mainIngredients: ["鸡蛋","鱼肉","姜","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "无刺鱼肉",
        "amount": "50g"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      }
    ],
    steps: [
      "鱼肉切薄片加姜丝料酒腌制",
      "鸡蛋加温水打散过滤",
      "蛋液倒入碗中摆上鱼片",
      "盖保鲜膜蒸10分钟",
      "淋生抽"
    ],
    tips: "用无刺鱼柳最安全，孩子爱吃",
    kidsFriendly: true,
    tags: ["粤式","蒸菜","孩子爱"],
  },
  // ======= 苏菜 =======
  {
    id: "qing-dun-xie-fen-shi-zi-tou",
    name: "清炖蟹粉狮子头",
    category: "meat",
    cuisine: "su",
    difficulty: 3,
    cookingTime: 90,
    mainIngredients: ["猪肉末","蟹粉","荸荠","鸡汤"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "猪肉末",
        "amount": "400g"
      },
      {
        "name": "蟹粉",
        "amount": "50g"
      },
      {
        "name": "荸荠",
        "amount": "4个"
      },
      {
        "name": "鸡汤",
        "amount": "500ml"
      },
      {
        "name": "姜末",
        "amount": "适量"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "肉末加蟹粉荸荠姜末料酒盐搅打上劲",
      "团成大丸子",
      "砂锅加鸡汤烧开",
      "轻轻放入狮子头",
      "小火炖1小时（不盖盖）"
    ],
    tips: "蟹粉让狮子头鲜度翻倍",
    kidsFriendly: false,
    tags: ["淮扬名菜","功夫菜"],
  },
  {
    id: "shui-jing-yao-rou",
    name: "水晶肴肉",
    category: "cold",
    cuisine: "su",
    difficulty: 3,
    cookingTime: 120,
    mainIngredients: ["猪前蹄","硝水","花椒","八角"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪前蹄",
        "amount": "1只"
      },
      {
        "name": "硝水",
        "amount": "少许(可选)"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "八角",
        "amount": "3个"
      },
      {
        "name": "桂皮",
        "amount": "1块"
      },
      {
        "name": "盐",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "3勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      }
    ],
    steps: [
      "猪蹄去骨用盐和花椒腌制2天",
      "腌好的猪蹄洗净焯水",
      "加香料料酒煮2小时至酥烂",
      "捞出用保鲜膜卷紧压实",
      "冷藏过夜定型后切片"
    ],
    tips: "肉冻晶莹剔透像水晶",
    kidsFriendly: true,
    tags: ["苏菜名菜","宴客","功夫菜"],
  },
  // ======= 浙菜 =======
  {
    id: "he-ye-fen-zheng-rou",
    name: "荷叶粉蒸肉",
    category: "meat",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 60,
    mainIngredients: ["五花肉","蒸肉粉","荷叶","五香粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "400g"
      },
      {
        "name": "蒸肉粉",
        "amount": "100g"
      },
      {
        "name": "荷叶",
        "amount": "2张"
      },
      {
        "name": "五香粉",
        "amount": "少许"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "五花肉切厚片加调料腌制30分钟",
      "裹上蒸肉粉",
      "荷叶泡软铺开",
      "肉片码在荷叶上",
      "包好上锅蒸40分钟",
      "打开荷叶香气扑鼻"
    ],
    tips: "荷叶的清香渗透到肉里",
    kidsFriendly: false,
    tags: ["浙菜","清香"],
  },
  {
    id: "pian-er-chuan",
    name: "片儿川",
    category: "staple",
    cuisine: "zhe",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["面条","雪菜","笋片","瘦肉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "150g"
      },
      {
        "name": "雪菜",
        "amount": "50g"
      },
      {
        "name": "冬笋",
        "amount": "50g"
      },
      {
        "name": "瘦肉",
        "amount": "80g"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "猪油",
        "amount": "1勺"
      }
    ],
    steps: [
      "瘦肉切丝，冬笋切片",
      "猪油热下肉丝炒变色",
      "下雪菜和笋片翻炒",
      "加水烧开",
      "下面条煮熟调味"
    ],
    tips: "猪油是这碗面的灵魂",
    kidsFriendly: false,
    tags: ["杭州面食","经典"],
  },
  // ======= 闽菜 =======
  {
    id: "yu-ni",
    name: "芋泥",
    category: "dessert",
    cuisine: "min",
    difficulty: 1,
    cookingTime: 40,
    mainIngredients: ["芋头","猪油","白糖","红枣"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "芋头",
        "amount": "500g"
      },
      {
        "name": "猪油",
        "amount": "2勺"
      },
      {
        "name": "白糖",
        "amount": "100g"
      },
      {
        "name": "红枣",
        "amount": "5颗"
      },
      {
        "name": "芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "芋头蒸熟压成泥",
      "锅中猪油化开下芋泥",
      "小火不停翻炒",
      "加白糖继续炒至油润光滑",
      "装碗用红枣芝麻装饰"
    ],
    tips: "福州名甜品，猪油让芋泥更加丝滑",
    kidsFriendly: true,
    tags: ["闽菜甜品","传统"],
  },
  {
    id: "sha-cha-niu-rou",
    name: "沙茶牛肉",
    category: "meat",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 18,
    mainIngredients: ["牛肉","沙茶酱","洋葱","青椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛肉",
        "amount": "250g"
      },
      {
        "name": "沙茶酱",
        "amount": "1勺"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      }
    ],
    steps: [
      "牛肉逆纹切薄片加料酒淀粉腌制",
      "洋葱青椒切块",
      "油热下牛肉滑炒至变色盛出",
      "下洋葱青椒炒香",
      "加沙茶酱和生抽",
      "倒回牛肉翻匀"
    ],
    tips: "沙茶酱的复合香味是闽南特色",
    kidsFriendly: false,
    tags: ["闽南","下饭"],
  },
  // ======= 徽菜 =======
  {
    id: "hui-shi-chao-fen-si",
    name: "徽式炒粉丝",
    category: "staple",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["粉丝","猪肉","香菇","韭菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "粉丝",
        "amount": "1把"
      },
      {
        "name": "猪肉",
        "amount": "100g"
      },
      {
        "name": "香菇",
        "amount": "4个"
      },
      {
        "name": "韭菜",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "粉丝温水泡软剪短",
      "猪肉香菇切丝",
      "油热下肉丝香菇煸香",
      "下粉丝大火翻炒",
      "加生抽老抽盐",
      "下韭菜段翻匀"
    ],
    tips: "粉丝要用筷子配合铲子抖散",
    kidsFriendly: false,
    tags: ["徽菜","家常"],
  },
  // ======= 家常 =======
  {
    id: "dou-fu-pi-chao-rou",
    name: "豆腐皮炒肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["豆腐皮","猪里脊","青椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "豆腐皮",
        "amount": "2张"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "豆腐皮切菱形片焯水30秒",
      "里脊切片加料酒淀粉腌制",
      "油热下肉片滑炒至变色",
      "下蒜爆香下豆腐皮青椒翻炒",
      "加生抽和少许水焖1分钟"
    ],
    tips: "豆腐皮焯水去豆腥味",
    kidsFriendly: true,
    tags: ["家常","快手","清淡"],
  },
  {
    id: "pai-gu-dun-dou-jiao",
    name: "排骨炖豆角",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["排骨","豆角","土豆","八角"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "400g"
      },
      {
        "name": "豆角",
        "amount": "200g"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "排骨焯水",
      "豆角去筋掰段",
      "油热下排骨煸至表面金黄",
      "加姜八角料酒生抽和水",
      "大火烧开转小火炖30分钟",
      "加豆角和土豆再炖15分钟收汁"
    ],
    tips: "东北家常经典一锅出",
    kidsFriendly: true,
    tags: ["家常","暖身"],
  },
  {
    id: "song-ren-yu-mi",
    name: "松仁玉米",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["玉米粒","松仁","胡萝卜","豌豆"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "玉米粒",
        "amount": "200g"
      },
      {
        "name": "松仁",
        "amount": "30g"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "豌豆",
        "amount": "50g"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "胡萝卜切小丁",
      "松仁小火焙香盛出",
      "油热下玉米胡萝卜豌豆翻炒",
      "加盐糖调味",
      "撒松仁翻匀"
    ],
    tips: "松仁最后放保持酥脆",
    kidsFriendly: true,
    tags: ["清淡","孩子爱","快手"],
  },
  {
    id: "rou-mo-qie-zi-bao",
    name: "肉末茄子煲",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["茄子","猪肉末","蒜","豆瓣酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "豆瓣酱",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "茄子切条撒盐腌10分钟挤水",
      "油热下茄子煎至金黄盛出",
      "肉末煸香加蒜豆瓣酱",
      "倒回茄子加调料和水",
      "中火焖5分钟撒葱花"
    ],
    tips: "茄子先腌出水就不吸油",
    kidsFriendly: true,
    tags: ["下饭","家常"],
  },
  {
    id: "suan-rong-chao-han-cai",
    name: "蒜蓉炒苋菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["苋菜","蒜","盐"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "苋菜",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "苋菜摘去老茎洗净",
      "蒜切末",
      "油热下蒜末爆香",
      "下苋菜大火快炒1分钟",
      "加盐出锅"
    ],
    tips: "炒苋菜会有漂亮的红色汤汁",
    kidsFriendly: true,
    tags: ["快手","清淡","家常"],
  },
  {
    id: "ji-dan-bing",
    name: "鸡蛋饼",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["面粉","鸡蛋","葱","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "150g"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "水",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "面粉加水搅成糊加鸡蛋葱花盐搅匀",
      "平底锅刷油烧热",
      "倒入一勺面糊摊薄",
      "中小火煎至两面金黄"
    ],
    tips: "面糊要稀一点摊出来才薄",
    kidsFriendly: true,
    tags: ["早餐","快手","孩子爱"],
  },
  {
    id: "yu-rou-zhou",
    name: "鱼肉粥",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 35,
    mainIngredients: ["大米","无刺鱼肉","姜丝","葱花"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "大米",
        "amount": "100g"
      },
      {
        "name": "无刺鱼肉",
        "amount": "100g"
      },
      {
        "name": "姜",
        "amount": "3片(切丝)"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "大米加油盐腌30分钟",
      "水开下米熬粥25分钟至米粒开花",
      "鱼肉切薄片",
      "粥里下姜丝和鱼片煮1分钟",
      "加盐白胡椒粉香油撒葱花"
    ],
    tips: "鱼肉用龙利鱼柳最好无刺",
    kidsFriendly: true,
    tags: ["早餐","粥品","孩子爱"],
  },
  // ======= 甜品 =======
  {
    id: "lv-dou-tang",
    name: "绿豆汤",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 50,
    mainIngredients: ["绿豆","冰糖","陈皮"],
    emoji: "🍲",
    allIngredients: [
      {
        "name": "绿豆",
        "amount": "200g"
      },
      {
        "name": "冰糖",
        "amount": "适量"
      },
      {
        "name": "陈皮",
        "amount": "1小片"
      },
      {
        "name": "水",
        "amount": "2L"
      }
    ],
    steps: [
      "绿豆提前泡2小时",
      "绿豆陈皮入锅加水",
      "大火烧开转小火煮40分钟至绿豆开花",
      "加冰糖搅匀"
    ],
    tips: "夏天冰镇喝解暑神器",
    kidsFriendly: true,
    tags: ["甜品","夏季","传统"],
  },
  {
    id: "gui-hua-nuo-mi-ou",
    name: "桂花糯米藕",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 2,
    cookingTime: 60,
    mainIngredients: ["莲藕","糯米","红糖","桂花"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "莲藕",
        "amount": "2节"
      },
      {
        "name": "糯米",
        "amount": "100g"
      },
      {
        "name": "红糖",
        "amount": "100g"
      },
      {
        "name": "干桂花",
        "amount": "少许"
      },
      {
        "name": "牙签",
        "amount": "几根"
      }
    ],
    steps: [
      "糯米提前泡2小时",
      "莲藕去皮切掉一头",
      "把糯米塞进藕孔用筷子压实",
      "用牙签把切掉的头固定回去",
      "锅中加水红糖煮1小时",
      "捞出切片淋汤汁撒桂花"
    ],
    tips: "塞糯米要有耐心慢慢填实",
    kidsFriendly: true,
    tags: ["甜品","江南","传统"],
  },
  {
    id: "xiang-cao-bing-qi-ling",
    name: "香草冰淇淋",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 2,
    cookingTime: 240,
    mainIngredients: ["淡奶油","蛋黄","白糖","香草精"],
    emoji: "🍳",
    allIngredients: [
      {
        "name": "淡奶油",
        "amount": "200ml"
      },
      {
        "name": "蛋黄",
        "amount": "3个"
      },
      {
        "name": "白糖",
        "amount": "60g"
      },
      {
        "name": "香草精",
        "amount": "几滴"
      },
      {
        "name": "牛奶",
        "amount": "100ml"
      }
    ],
    steps: [
      "蛋黄加糖打至发白",
      "牛奶加热至微沸慢慢冲入蛋黄中",
      "回锅小火加热至浓稠（不断搅拌）",
      "过筛放凉",
      "淡奶油打至六分发",
      "混合均匀冷冻4小时",
      "每隔1小时搅拌一次"
    ],
    tips: "每隔1小时搅拌是防止冰渣的关键",
    kidsFriendly: true,
    tags: ["甜品","西式","夏季"],
  },
  // ======= 川菜 =======
  {
    id: "yu-xiang-qie-zi-bao",
    name: "鱼香茄子煲",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["茄子","猪肉末","郫县豆瓣酱","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "猪肉末",
        "amount": "60g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "茄子切条撒盐腌10分钟挤水",
      "调鱼香汁：生抽+醋+糖+淀粉+水",
      "油热下茄子煎至金黄盛出",
      "肉末煸香加豆瓣酱炒出红油",
      "加蒜末",
      "倒回茄子淋鱼香汁翻匀焖2分钟",
      "撒葱花"
    ],
    tips: "茄子先腌不吸油，鱼香味型和肉丝一个道理",
    kidsFriendly: false,
    tags: ["川菜","下饭","经典"],
  },
  // ======= 湘菜 =======
  {
    id: "hong-shao-niu-rou",
    name: "红烧牛肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 80,
    mainIngredients: ["牛腩","土豆","干辣椒","八角"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛腩",
        "amount": "500g"
      },
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      }
    ],
    steps: [
      "牛腩切块焯水",
      "油热下冰糖炒糖色",
      "下牛腩翻炒上色",
      "加姜葱干辣椒八角桂皮料酒生抽老抽",
      "加足量热水大火烧开转小火炖1小时",
      "加土豆再炖20分钟收汁"
    ],
    tips: "牛肉要选牛腩带筋的部位炖出来才软烂",
    kidsFriendly: false,
    tags: ["湘式","下饭","暖身"],
  },
  {
    id: "suan-jiao-chao-la-rou",
    name: "酸椒炒腊肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["腊肉","酸辣椒","蒜苗","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肉",
        "amount": "200g"
      },
      {
        "name": "酸辣椒",
        "amount": "3个"
      },
      {
        "name": "蒜苗",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "腊肉煮过去咸切片",
      "酸辣椒切圈",
      "锅中少油下腊肉煸至出油",
      "下酸辣椒蒜末炒香",
      "下蒜苗翻炒",
      "加生抽翻匀出锅"
    ],
    tips: "酸辣椒的酸辣和腊肉的咸香是绝配",
    kidsFriendly: false,
    tags: ["湘味","下饭","快手"],
  },
  {
    id: "lei-la-jiao-pi-dan",
    name: "擂辣椒皮蛋",
    category: "cold",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["青椒","皮蛋","蒜","生抽"],
    emoji: "🍳",
    allIngredients: [
      {
        "name": "青椒",
        "amount": "5个"
      },
      {
        "name": "皮蛋",
        "amount": "3个"
      },
      {
        "name": "蒜",
        "amount": "5瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "青椒放火上烤至表皮焦黑",
      "剥去焦皮",
      "蒜和青椒放石臼捣碎",
      "皮蛋剥壳放入一起捣",
      "加生抽醋香油盐拌匀"
    ],
    tips: "烤过的青椒有烟熏味，擂得越碎越入味",
    kidsFriendly: false,
    tags: ["湘菜","下饭","经典"],
  },
  {
    id: "chang-sha-chou-dou-fu",
    name: "长沙臭豆腐",
    category: "cold",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["臭豆腐","辣椒酱","蒜","香菜"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "臭豆腐",
        "amount": "6块"
      },
      {
        "name": "辣椒酱",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "香菜",
        "amount": "少许"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "臭豆腐洗净控干",
      "油热下臭豆腐煎/炸至两面金黄",
      "蒜切末和辣椒酱生抽调汁",
      "臭豆腐戳个口灌入料汁",
      "撒香菜"
    ],
    tips: "闻着臭吃着香，外酥里嫩",
    kidsFriendly: false,
    tags: ["长沙小吃","经典"],
  },
  // ======= 鲁菜 =======
  {
    id: "de-zhou-pa-ji",
    name: "德州扒鸡",
    category: "meat",
    cuisine: "lu",
    difficulty: 3,
    cookingTime: 120,
    mainIngredients: ["鸡","蜂蜜","老抽","香料包"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "整鸡",
        "amount": "1只"
      },
      {
        "name": "蜂蜜",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "3勺"
      },
      {
        "name": "香料包",
        "amount": "1包"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "冰糖",
        "amount": "20g"
      }
    ],
    steps: [
      "鸡处理干净用开水烫皮",
      "鸡身抹蜂蜜老抽晾干",
      "下油锅炸至金黄",
      "锅中加水生抽香料包姜葱料酒冰糖",
      "放入鸡大火烧开转小火卤1.5小时",
      "关火焖30分钟"
    ],
    tips: "先炸后卤是关键，鸡肉酥烂脱骨",
    kidsFriendly: false,
    tags: ["鲁菜名菜","经典","宴客"],
  },
  {
    id: "cong-you-li-yu",
    name: "葱油鲤鱼",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["鲤鱼","大葱","姜","蒸鱼豉油"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鲤鱼",
        "amount": "1条"
      },
      {
        "name": "大葱",
        "amount": "3根"
      },
      {
        "name": "姜",
        "amount": "1大块"
      },
      {
        "name": "蒸鱼豉油",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "油",
        "amount": "3勺"
      }
    ],
    steps: [
      "鲤鱼去鳞洗净划刀",
      "鱼身抹料酒和姜片腌10分钟",
      "水开蒸8分钟",
      "倒掉盘中腥水",
      "鱼身上铺大量葱丝",
      "浇蒸鱼豉油",
      "烧滚油浇在葱丝上激香"
    ],
    tips: "葱丝越多越香，滚油浇上去滋滋作响",
    kidsFriendly: false,
    tags: ["鲁菜","鲜香","宴客"],
  },
  {
    id: "you-bao-shuang-cui-lu",
    name: "油爆双脆",
    category: "meat",
    cuisine: "lu",
    difficulty: 3,
    cookingTime: 18,
    mainIngredients: ["猪肚尖","鸡胗","青椒","料酒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "猪肚尖",
        "amount": "150g"
      },
      {
        "name": "鸡胗",
        "amount": "150g"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "红椒",
        "amount": "1个"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "猪肚和鸡胗切花刀再切块，加料酒淀粉腌制",
      "青红椒切块",
      "调碗汁：生抽+盐+淀粉+水",
      "油温八成热下肚和胗快速滑10秒捞出",
      "留底油下姜蒜青红椒翻炒",
      "倒回双脆淋碗汁大火翻匀"
    ],
    tips: "全程不超过30秒，油温要高动作要快",
    kidsFriendly: false,
    tags: ["鲁菜名菜","技术菜","脆嫩"],
  },
  // ======= 粤菜 =======
  {
    id: "gua-lu-rou",
    name: "咕咾肉",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["猪里脊","菠萝","青椒","番茄酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "300g"
      },
      {
        "name": "菠萝",
        "amount": "半碗"
      },
      {
        "name": "青椒",
        "amount": "半个"
      },
      {
        "name": "红椒",
        "amount": "半个"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      }
    ],
    steps: [
      "里脊切块加盐料酒腌制",
      "裹蛋液再裹干淀粉",
      "油温六成热炸至金黄",
      "复炸30秒",
      "调糖醋汁：番茄酱+白醋+糖",
      "锅中下青红椒菠萝翻炒倒入糖醋汁",
      "下肉块快速翻匀"
    ],
    tips: "外酥里嫩酸甜可口，经典粤菜",
    kidsFriendly: true,
    tags: ["粤菜经典","酸甜","孩子爱"],
  },
  {
    id: "gui-hua-ji",
    name: "桂花鸡",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["鸡腿","桂花酱","生抽","蜂蜜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿",
        "amount": "4个"
      },
      {
        "name": "桂花酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "蜂蜜",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "鸡腿去骨",
      "加生抽老抽料酒桂花酱蜂蜜腌制30分钟",
      "鸡皮面朝下放入平底锅",
      "中小火煎至鸡皮金黄",
      "翻面继续煎熟",
      "刷一层桂花蜂蜜再煎1分钟"
    ],
    tips: "桂花酱是这道菜的灵魂，清香不腻",
    kidsFriendly: false,
    tags: ["粤式","清香","宴客"],
  },
  {
    id: "suan-rong-zheng-wa-wa-cai",
    name: "蒜蓉蒸娃娃菜",
    category: "veggie",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["娃娃菜","蒜","粉丝","生抽"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "娃娃菜",
        "amount": "2棵"
      },
      {
        "name": "龙口粉丝",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "一整头"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "粉丝温水泡软铺盘底",
      "娃娃菜对半切开焯水30秒摆盘",
      "蒜剁成蒜蓉一半炸金蒜一半生蒜混合",
      "蒜蓉加生抽蚝油拌匀铺在菜上",
      "水开蒸6分钟",
      "淋热油撒葱花"
    ],
    tips: "金蒜和生蒜混合层次更丰富",
    kidsFriendly: true,
    tags: ["粤式","蒸菜","清淡"],
  },
  {
    id: "rou-mo-zheng-shui-dan",
    name: "肉末蒸水蛋",
    category: "soup",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 18,
    mainIngredients: ["鸡蛋","猪肉末","生抽","温水"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散加温水和少许盐搅匀过滤",
      "盖保鲜膜水开蒸8分钟",
      "同时肉末炒熟加生抽",
      "蛋羹取出铺上肉末",
      "淋香油撒葱花"
    ],
    tips: "蛋羹嫩滑+肉末咸香，拌饭神器",
    kidsFriendly: true,
    tags: ["粤式","家常","孩子爱"],
  },
  // ======= 苏菜 =======
  {
    id: "wu-xi-jiang-gu-tou",
    name: "无锡酱骨头",
    category: "meat",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 70,
    mainIngredients: ["猪脊骨","冰糖","生抽","红曲粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪脊骨",
        "amount": "750g"
      },
      {
        "name": "冰糖",
        "amount": "40g"
      },
      {
        "name": "生抽",
        "amount": "3勺"
      },
      {
        "name": "老抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "八角",
        "amount": "3个"
      },
      {
        "name": "桂皮",
        "amount": "1块"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "红曲粉",
        "amount": "少许"
      }
    ],
    steps: [
      "脊骨焯水",
      "锅中炒糖色下脊骨翻炒",
      "加生抽老抽料酒八角桂皮姜",
      "加没过食材的热水和红曲粉",
      "大火烧开转小火炖1小时",
      "大火收汁至浓稠红亮"
    ],
    tips: "无锡菜色红味甜，红曲粉上色用",
    kidsFriendly: false,
    tags: ["苏菜名菜","甜咸","宴客"],
  },
  {
    id: "wen-si-dou-fu",
    name: "文思豆腐",
    category: "soup",
    cuisine: "su",
    difficulty: 3,
    cookingTime: 20,
    mainIngredients: ["内酯豆腐","火腿","香菇","鸡汤"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "内酯豆腐",
        "amount": "1盒"
      },
      {
        "name": "火腿",
        "amount": "20g"
      },
      {
        "name": "香菇",
        "amount": "3个"
      },
      {
        "name": "鸡汤",
        "amount": "500ml"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      }
    ],
    steps: [
      "豆腐切极细丝（能穿针的细度）",
      "火腿香菇切细丝",
      "鸡汤烧开下火腿丝香菇丝",
      "轻轻滑入豆腐丝",
      "加盐调味",
      "淀粉水勾薄芡"
    ],
    tips: "豆腐切丝的刀工是这道菜的核心，丝越细越能体现功夫",
    kidsFriendly: false,
    tags: ["淮扬名菜","功夫菜","精细"],
  },
  {
    id: "qing-chao-xia-ren-su",
    name: "清炒虾仁",
    category: "meat",
    cuisine: "su",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["虾仁","青豆","蛋清","淀粉"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "250g"
      },
      {
        "name": "青豆",
        "amount": "50g"
      },
      {
        "name": "蛋清",
        "amount": "半个"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "虾仁加盐料酒蛋清淀粉抓匀上浆",
      "油温四成热下虾仁滑油至变白",
      "下姜片和青豆翻炒",
      "加盐调味出锅"
    ],
    tips: "虾仁要保持嫩滑，火候要轻",
    kidsFriendly: true,
    tags: ["淮扬菜","清淡","快手"],
  },
  // ======= 浙菜 =======
  {
    id: "song-sao-yu-geng",
    name: "宋嫂鱼羹",
    category: "soup",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["鱼肉","冬笋","火腿","鸡蛋"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鱼肉",
        "amount": "200g"
      },
      {
        "name": "冬笋",
        "amount": "50g"
      },
      {
        "name": "火腿",
        "amount": "20g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "鸡汤",
        "amount": "500ml"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "鱼肉蒸熟拆成碎",
      "冬笋火腿切丝",
      "鸡汤加姜片冬笋火腿煮开",
      "下鱼肉碎",
      "淀粉水勾薄芡",
      "转小火淋蛋液",
      "加醋白胡椒粉调味"
    ],
    tips: "宋嫂鱼羹距今有800年历史，醋和胡椒是点睛",
    kidsFriendly: false,
    tags: ["浙菜名菜","传统","酸辣"],
  },
  {
    id: "hang-jiao-niu-liu",
    name: "杭椒牛柳",
    category: "meat",
    cuisine: "zhe",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["牛里脊","杭椒","生抽","淀粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛里脊",
        "amount": "250g"
      },
      {
        "name": "杭椒",
        "amount": "6个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "牛肉逆纹切粗条加料酒生抽淀粉腌制10分钟",
      "杭椒斜切段",
      "油热下牛柳滑炒至变色盛出",
      "下蒜片杭椒爆炒1分钟",
      "倒回牛柳加蚝油糖翻匀"
    ],
    tips: "杭椒不辣只有清香，和牛柳是绝配",
    kidsFriendly: true,
    tags: ["浙菜","快手","下饭"],
  },
  // ======= 闽菜 =======
  {
    id: "fu-zhou-yu-wan",
    name: "福州鱼丸",
    category: "soup",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 35,
    mainIngredients: ["鱼肉","猪肉末","淀粉","葱花"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "鱼肉",
        "amount": "400g"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "淀粉",
        "amount": "3勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "姜",
        "amount": "3片"
      }
    ],
    steps: [
      "鱼肉刮成鱼蓉加淀粉盐搅打上劲",
      "肉末加葱花盐调成馅",
      "手蘸水取鱼蓉包入肉馅团成丸子",
      "水微沸时下鱼丸",
      "煮至浮起再煮3分钟",
      "加盐白胡椒粉调味"
    ],
    tips: "鱼丸要有弹性，搅打上劲是关键步骤",
    kidsFriendly: false,
    tags: ["福州名小吃","手工","汤品"],
  },
  {
    id: "ba-bao-fan",
    name: "八宝饭",
    category: "staple",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 45,
    mainIngredients: ["糯米","红枣","莲子","桂圆"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "糯米",
        "amount": "200g"
      },
      {
        "name": "红枣",
        "amount": "8颗"
      },
      {
        "name": "莲子",
        "amount": "10颗"
      },
      {
        "name": "桂圆肉",
        "amount": "20g"
      },
      {
        "name": "葡萄干",
        "amount": "20g"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "猪油",
        "amount": "1勺"
      },
      {
        "name": "白糖",
        "amount": "30g"
      }
    ],
    steps: [
      "糯米提前泡4小时蒸熟",
      "莲子红枣泡发",
      "碗底抹猪油摆入红枣莲子桂圆等",
      "铺一层糯米压实",
      "再铺一层豆沙",
      "再铺一层糯米",
      "上锅蒸30分钟",
      "倒扣装盘"
    ],
    tips: "八宝=多种干果，过年必备甜品",
    kidsFriendly: true,
    tags: ["闽式甜品","节日","传统"],
  },
  // ======= 徽菜 =======
  {
    id: "hui-shi-yi-pin-guo",
    name: "徽式一品锅",
    category: "soup",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 60,
    mainIngredients: ["五花肉","鸡肉","蛋饺","豆腐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "200g"
      },
      {
        "name": "鸡肉",
        "amount": "200g"
      },
      {
        "name": "蛋饺",
        "amount": "6个"
      },
      {
        "name": "豆腐",
        "amount": "1块"
      },
      {
        "name": "香菇",
        "amount": "4个"
      },
      {
        "name": "冬笋",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "姜",
        "amount": "5片"
      }
    ],
    steps: [
      "五花肉和鸡肉焯水",
      "所有食材分层码入砂锅",
      "底层放肉中层放豆腐和香菇上层放蛋饺",
      "加水生抽姜片",
      "大火烧开转小火炖40分钟",
      "加盐调味"
    ],
    tips: "胡适用一品锅招待过梁实秋",
    kidsFriendly: false,
    tags: ["徽菜名菜","一锅出","宴客"],
  },
  // ======= 家常 =======
  {
    id: "hong-shao-ji-tui",
    name: "红烧鸡腿",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["鸡腿","生抽","冰糖","八角"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿",
        "amount": "4个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "鸡腿划几刀焯水",
      "油热下冰糖炒糖色",
      "下鸡腿翻炒上色",
      "加生抽老抽料酒八角姜片",
      "加热水没过鸡腿",
      "中火炖15分钟收汁"
    ],
    tips: "鸡腿划刀方便入味，孩子最爱",
    kidsFriendly: true,
    tags: ["家常","下饭","孩子爱"],
  },
  {
    id: "chao-san-si",
    name: "炒三丝",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["土豆","青椒","胡萝卜","盐"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "醋",
        "amount": "少许"
      }
    ],
    steps: [
      "土豆胡萝卜青椒切丝",
      "土豆丝泡水去淀粉",
      "油热下蒜末爆香",
      "三种丝一起下锅大火快炒",
      "加生抽盐调味",
      "出锅前沿锅边淋少许醋"
    ],
    tips: "三种颜色搭配好看，大火快炒保持脆嫩",
    kidsFriendly: true,
    tags: ["快手","家常","清淡"],
  },
  {
    id: "bai-cai-dun-fen-tiao",
    name: "白菜炖粉条",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["大白菜","粉条","五花肉","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "半棵"
      },
      {
        "name": "红薯粉条",
        "amount": "100g"
      },
      {
        "name": "五花肉",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "八角",
        "amount": "1个"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "粉条提前泡软",
      "五花肉切片煸至出油",
      "下姜片八角炒香",
      "下白菜帮翻炒1分钟",
      "下白菜叶和粉条",
      "加生抽老抽和半碗水",
      "中火炖10分钟收汁"
    ],
    tips: "粉条吸饱肉汁最香",
    kidsFriendly: true,
    tags: ["北方家常","暖身","下饭"],
  },
  {
    id: "suan-rong-chao-bai-cai",
    name: "蒜蓉炒白菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["大白菜","蒜","盐"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "白菜帮片薄片叶子撕块",
      "蒜切末",
      "油热下蒜末爆香",
      "先下白菜帮炒1分钟",
      "再下白菜叶大火快炒",
      "加盐调味出锅"
    ],
    tips: "帮叶分开炒熟度一致",
    kidsFriendly: true,
    tags: ["超快手","清淡","家常"],
  },
  {
    id: "rou-mo-tu-dou-ni",
    name: "肉末土豆泥",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["土豆","猪肉末","牛奶","黄油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "3个"
      },
      {
        "name": "猪肉末",
        "amount": "80g"
      },
      {
        "name": "牛奶",
        "amount": "50ml"
      },
      {
        "name": "黄油",
        "amount": "10g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "土豆蒸熟压成泥",
      "趁热加黄油牛奶搅至顺滑",
      "肉末炒熟加生抽调味",
      "土豆泥装盘中间挖个坑",
      "把肉末浇在上面撒葱花"
    ],
    tips: "土豆泥+肉酱=升级版KFC土豆泥",
    kidsFriendly: true,
    tags: ["孩子最爱","西式","软食"],
  },
  {
    id: "huang-gua-mu-er-chao-rou",
    name: "黄瓜木耳炒肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["猪里脊","黄瓜","木耳","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "木耳",
        "amount": "30g泡发"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "里脊切片加料酒淀粉腌制",
      "黄瓜切片木耳撕小朵",
      "油热下肉片滑炒至变色",
      "下蒜片木耳翻炒",
      "下黄瓜大火快炒",
      "加生抽调味翻匀"
    ],
    tips: "黄瓜最后放保持脆嫩",
    kidsFriendly: true,
    tags: ["快手","家常","清爽"],
  },
  {
    id: "fan-qie-long-li-yu",
    name: "番茄龙利鱼",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["龙利鱼柳","番茄","番茄酱","盐"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "龙利鱼柳",
        "amount": "200g"
      },
      {
        "name": "番茄",
        "amount": "2个"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "料酒",
        "amount": "半勺"
      }
    ],
    steps: [
      "龙利鱼切块加料酒姜片腌制",
      "番茄切块",
      "油热下番茄炒出汁加番茄酱",
      "加水烧开",
      "下鱼块煮2分钟至变白",
      "加盐糖调味"
    ],
    tips: "龙利鱼无刺肉质嫩，特别适合孩子和老人",
    kidsFriendly: true,
    tags: ["快手","孩子爱","无刺"],
  },
  {
    id: "ji-dan-chao-xi-hong-shi",
    name: "鸡蛋炒西红柿",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["鸡蛋","番茄","糖","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "番茄",
        "amount": "2个"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋打散加少许盐",
      "油热下鸡蛋炒散盛出",
      "下番茄炒出汁加糖",
      "倒回鸡蛋翻匀",
      "撒葱花"
    ],
    tips: "番茄选熟透的出的汁才够味，这是国民第一家常菜",
    kidsFriendly: true,
    tags: ["国民菜","快手","孩子爱"],
  },
  {
    id: "qie-zhi-jian-dan",
    name: "茄汁煎蛋",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["鸡蛋","番茄酱","白糖","醋"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "白糖",
        "amount": "半勺"
      },
      {
        "name": "醋",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "煎三个荷包蛋盛出",
      "锅中留底油下番茄酱糖醋少许水",
      "煮至浓稠",
      "浇在荷包蛋上"
    ],
    tips: "最简单的菜往往最下饭",
    kidsFriendly: true,
    tags: ["超快手","下饭","孩子爱"],
  },
  {
    id: "zheng-shui-dan",
    name: "蒸水蛋",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["鸡蛋","温水","生抽","香油"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散加盐和温水搅匀",
      "过滤去气泡",
      "盖保鲜膜扎几个孔",
      "水开中火蒸8分钟",
      "出锅淋生抽香油撒葱花"
    ],
    tips: "温水+过滤+保鲜膜=布丁般嫩滑",
    kidsFriendly: true,
    tags: ["快手","孩子爱","经典"],
  },
  {
    id: "suan-rong-chao-you-mai-cai",
    name: "蒜蓉炒油麦菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["油麦菜","蒜","盐"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "油麦菜",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "油麦菜洗净控干切段",
      "蒜切末",
      "油热下蒜末爆香",
      "下油麦菜大火快炒30秒",
      "加盐立刻出锅"
    ],
    tips: "油麦菜比生菜更脆嫩，炒时火要大动作要快",
    kidsFriendly: true,
    tags: ["超快手","清淡"],
  },
  {
    id: "qing-jiao-chao-ji-dan",
    name: "青椒炒鸡蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["青椒","鸡蛋","盐","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "生抽",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋打散加盐",
      "油热下鸡蛋炒散盛出",
      "下青椒丝大火翻炒1分钟",
      "倒回鸡蛋加生抽翻匀"
    ],
    tips: "青椒要大块手撕比刀切更入味",
    kidsFriendly: true,
    tags: ["快手","家常"],
  },
  {
    id: "hong-shao-dou-fu",
    name: "红烧豆腐",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["老豆腐","生抽","蚝油","蒜"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "豆腐切厚片",
      "平底锅煎至两面金黄",
      "调汁：生抽+蚝油+老抽+糖+淀粉+水",
      "锅中留底油下蒜末爆香",
      "倒入料汁煮浓",
      "下豆腐翻匀撒葱花"
    ],
    tips: "先煎后烧，豆腐外焦里嫩",
    kidsFriendly: true,
    tags: ["下饭","素食","家常"],
  },
  // ======= 川菜 =======
  {
    id: "zhong-shui-jiao",
    name: "钟水饺",
    category: "staple",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["饺子皮","猪肉末","红油","蒜泥"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "饺子皮",
        "amount": "20张"
      },
      {
        "name": "猪肉末",
        "amount": "200g"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "肉末加姜末盐调馅",
      "包饺子",
      "水开下饺子煮至浮起",
      "调红油汁：辣椒油+蒜泥+生抽+醋+糖",
      "饺子捞出淋红油汁"
    ],
    tips: "钟水饺是成都名小吃，饺小而皮薄",
    kidsFriendly: false,
    tags: ["川味小吃","面食","红油"],
  },
  // ======= 湘菜 =======
  {
    id: "you-xian-xiang-gan",
    name: "攸县香干",
    category: "veggie",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["攸县香干","青椒","豆豉","蒜"],
    emoji: "🌶️",
    allIngredients: [
      {
        "name": "攸县香干",
        "amount": "3块"
      },
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "香干切薄片青椒斜切",
      "油热下香干煎至表面微黄",
      "下豆豉蒜末炒香",
      "下青椒大火翻炒",
      "加生抽盐翻匀"
    ],
    tips: "攸县香干比普通香干更嫩更有弹性",
    kidsFriendly: false,
    tags: ["湘味","快手","下饭"],
  },
  {
    id: "zi-ran-cun-gu",
    name: "孜然寸骨",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["猪寸骨","孜然粉","辣椒粉","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪寸骨",
        "amount": "6根"
      },
      {
        "name": "孜然粉",
        "amount": "1勺"
      },
      {
        "name": "辣椒粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "寸骨焯水后加料酒生抽腌制30分钟",
      "烤箱200°C烤20分钟或油炸至金黄",
      "撒孜然粉辣椒粉盐蒜末翻匀"
    ],
    tips: "寸骨是猪肋骨最末端的一小段，肉嫩骨香",
    kidsFriendly: false,
    tags: ["湘味","烧烤","下酒"],
  },
  // ======= 鲁菜 =======
  {
    id: "jiao-yan-pai-gu",
    name: "椒盐排骨",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["排骨","椒盐","蒜","干辣椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "400g"
      },
      {
        "name": "椒盐",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "排骨斩小段加料酒腌制",
      "裹薄薄的淀粉",
      "油温六成热炸8分钟至熟",
      "油温升高复炸1分钟至酥",
      "锅中留底油下蒜末干辣椒炒香",
      "下排骨撒椒盐翻匀撒葱花"
    ],
    tips: "椒盐自己调=花椒粉+盐1:1",
    kidsFriendly: false,
    tags: ["鲁菜","酥香","下酒"],
  },
  // ======= 粤菜 =======
  {
    id: "xia-ren-hua-dan",
    name: "虾仁滑蛋",
    category: "meat",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["虾仁","鸡蛋","牛奶","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "150g"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "牛奶",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "料酒",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "虾仁加料酒淀粉腌制",
      "鸡蛋加牛奶盐打散",
      "油温四成热下虾仁滑至变色",
      "倒入蛋液转小火慢慢推",
      "蛋液八分凝固时关火（余温焖熟）",
      "撒葱花"
    ],
    tips: "加牛奶让炒蛋更嫩滑，小火是关键",
    kidsFriendly: true,
    tags: ["粤式","嫩滑","快手"],
  },
  {
    id: "fan-qie-zhu-gan-tang",
    name: "番茄猪肝汤",
    category: "soup",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["猪肝","番茄","姜","料酒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪肝",
        "amount": "200g"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "猪肝切薄片反复泡水去血水",
      "猪肝加料酒姜片腌制",
      "番茄切块炒出汁",
      "加水烧开",
      "下猪肝煮30秒至变色立刻关火",
      "加盐白胡椒粉香油葱花"
    ],
    tips: "猪肝煮久了会老，30秒就够",
    kidsFriendly: true,
    tags: ["粤式汤","补血","快手"],
  },
  // ======= 苏菜 =======
  {
    id: "tang-cu-pai-gu-su",
    name: "糖醋排骨",
    category: "meat",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 35,
    mainIngredients: ["排骨","冰糖","醋","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "400g"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "醋",
        "amount": "2勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "1段"
      }
    ],
    steps: [
      "排骨焯水",
      "锅中炒糖色下排骨翻炒",
      "加生抽老抽料酒姜葱",
      "加水没过排骨大火烧开转小火炖25分钟",
      "加醋大火收汁至浓稠"
    ],
    tips: "醋要分两次放，炖的时候放一半收汁时再放一半",
    kidsFriendly: true,
    tags: ["苏菜","甜酸","经典"],
  },
  // ======= 浙菜 =======
  {
    id: "jiao-hua-ji",
    name: "叫花鸡",
    category: "meat",
    cuisine: "zhe",
    difficulty: 3,
    cookingTime: 120,
    mainIngredients: ["鸡","荷叶","面粉","香料"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "整鸡",
        "amount": "1只"
      },
      {
        "name": "荷叶",
        "amount": "2张"
      },
      {
        "name": "面粉",
        "amount": "500g"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "五香粉",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      },
      {
        "name": "香菇",
        "amount": "4个"
      }
    ],
    steps: [
      "鸡用生抽料酒五香粉姜葱腌制4小时",
      "鸡肚子里塞香菇葱姜",
      "用荷叶包紧鸡",
      "面粉加水揉成面团擀开",
      "用面皮把荷叶鸡整个包住",
      "烤箱180°C烤1.5小时",
      "敲开面壳打开荷叶即可"
    ],
    tips: "面壳封住蒸汽让鸡肉鲜嫩多汁，家庭版没有泥巴用面壳代替",
    kidsFriendly: false,
    tags: ["浙菜名菜","传奇","功夫菜"],
  },
  {
    id: "xi-hu-chun-cai-tang",
    name: "西湖莼菜汤",
    category: "soup",
    cuisine: "zhe",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["莼菜","火腿","鸡汤","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "莼菜",
        "amount": "1包"
      },
      {
        "name": "火腿",
        "amount": "20g"
      },
      {
        "name": "鸡汤",
        "amount": "500ml"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "火腿切丝",
      "鸡汤烧开下火腿丝",
      "下莼菜烫30秒",
      "加盐香油调味"
    ],
    tips: "莼菜滑嫩入喉即化，不能久煮",
    kidsFriendly: true,
    tags: ["浙菜名汤","清淡","快手"],
  },
  // ======= 徽菜 =======
  {
    id: "mao-dou-fu-hui",
    name: "徽州毛豆腐",
    category: "veggie",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["毛豆腐","辣椒酱","生抽","蒜"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "毛豆腐",
        "amount": "4块"
      },
      {
        "name": "辣椒酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "毛豆腐表面有白色菌丝，这是正常的",
      "平底锅少许油下毛豆腐",
      "小火煎至两面金黄",
      "加辣椒酱蒜末生抽翻匀",
      "撒葱花"
    ],
    tips: "毛豆腐是徽州特色发酵食品，煎着吃最香",
    kidsFriendly: false,
    tags: ["徽菜特色","发酵","独特"],
  },
  // ======= 其他 =======
  {
    id: "dan-dan-mian-cq",
    name: "重庆小面",
    category: "staple",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["面条","辣椒油","花椒粉","榨菜"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "面条",
        "amount": "150g"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "花椒粉",
        "amount": "半勺"
      },
      {
        "name": "榨菜",
        "amount": "30g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "花生碎",
        "amount": "1勺"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      }
    ],
    steps: [
      "调碗底：辣椒油+花椒粉+生抽+醋+蒜末",
      "面条和青菜煮熟捞入碗中",
      "加榨菜花生碎葱花",
      "浇一勺面汤拌匀"
    ],
    tips: "小面的灵魂是辣椒油，一定要用菜籽油现炸的",
    kidsFriendly: false,
    tags: ["重庆","麻辣","面食"],
  },
  // ======= 家常 =======
  {
    id: "suan-rong-chao-bo-cai",
    name: "蒜蓉炒菠菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["菠菜","蒜","盐"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "菠菜",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "菠菜洗净焯水10秒去草酸",
      "捞出过凉水挤干",
      "蒜切末",
      "油热下蒜末爆香",
      "下菠菜大火快炒",
      "加盐翻匀出锅"
    ],
    tips: "菠菜先焯水去草酸更健康",
    kidsFriendly: true,
    tags: ["快手","清淡","家常"],
  },
  {
    id: "cu-liu-tu-dou-si",
    name: "醋溜土豆丝",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["土豆","干辣椒","醋","盐"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "花椒",
        "amount": "少许"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1段"
      }
    ],
    steps: [
      "土豆切细丝泡水去淀粉",
      "控干水分",
      "热锅凉油下花椒干辣椒煸香",
      "大火下土豆丝翻炒",
      "断生后沿锅边淋醋加盐",
      "翻匀出锅"
    ],
    tips: "醋沿锅边淋入能激发出醋香",
    kidsFriendly: true,
    tags: ["快手","家常","脆爽"],
  },
  {
    id: "ji-dan-chao-jiu-cai",
    name: "鸡蛋炒韭菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["韭菜","鸡蛋","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "韭菜",
        "amount": "1把"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "韭菜切段鸡蛋打散",
      "油热下鸡蛋炒散盛出",
      "下韭菜大火快炒30秒",
      "倒回鸡蛋加盐翻匀立刻出锅"
    ],
    tips: "韭菜从下锅到出锅不超过1分钟",
    kidsFriendly: true,
    tags: ["超快手","家常"],
  },
  {
    id: "xiang-gu-chao-rou-pian",
    name: "香菇炒肉片",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["猪里脊","香菇","青椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "150g"
      },
      {
        "name": "香菇",
        "amount": "6个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "里脊切片加料酒淀粉腌制",
      "香菇切片青椒切块",
      "油热下肉片滑炒至变色",
      "下蒜末香菇翻炒",
      "下青椒加生抽翻匀"
    ],
    tips: "香菇要炒到出水再收干才香",
    kidsFriendly: true,
    tags: ["快手","下饭","家常"],
  },
  {
    id: "suan-rong-chao-tong-hao",
    name: "蒜蓉炒茼蒿",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["茼蒿","蒜","盐"],
    emoji: "🍽️",
    allIngredients: [
      {
        "name": "茼蒿",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "茼蒿洗净控干切段",
      "蒜切末",
      "油热下蒜末爆香",
      "下茼蒿大火快炒至变软",
      "加盐立刻出锅"
    ],
    tips: "茼蒿有特殊的清香，大火快炒不超过1分钟",
    kidsFriendly: true,
    tags: ["快手","清淡"],
  },
  {
    id: "niu-rou-chao-qin-cai",
    name: "牛肉炒芹菜",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["牛肉","芹菜","生抽","淀粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛肉",
        "amount": "200g"
      },
      {
        "name": "芹菜",
        "amount": "3根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "牛肉逆纹切丝加料酒生抽淀粉腌制",
      "芹菜切段",
      "油热下牛肉滑炒至变色盛出",
      "下姜片芹菜大火翻炒1分钟",
      "倒回牛肉加盐翻匀"
    ],
    tips: "牛肉要逆纹切起来才嫩",
    kidsFriendly: true,
    tags: ["快手","下饭"],
  },
  {
    id: "yu-xiang-dou-fu",
    name: "鱼香豆腐",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["老豆腐","木耳","胡萝卜","郫县豆瓣酱"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "木耳",
        "amount": "30g"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "豆腐切三角片煎至两面金黄",
      "木耳胡萝卜切片",
      "调鱼香汁：生抽+醋+糖+淀粉+水",
      "豆瓣酱炒出红油加蒜末",
      "下木耳胡萝卜翻炒",
      "倒回豆腐淋鱼香汁翻匀撒葱花"
    ],
    tips: "鱼香味型用在豆腐上一样好吃",
    kidsFriendly: true,
    tags: ["素食","下饭","川味"],
  },
  {
    id: "rou-mo-shao-dou-fu",
    name: "肉末烧豆腐",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["嫩豆腐","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "嫩豆腐",
        "amount": "1盒"
      },
      {
        "name": "猪肉末",
        "amount": "80g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "豆腐切块焯水2分钟",
      "肉末煸香加蒜末",
      "加生抽蚝油老抽和水烧开",
      "轻轻滑入豆腐中火煮3分钟",
      "淀粉勾薄芡撒葱花"
    ],
    tips: "豆腐先焯水不容易碎，推着翻不要用铲子搅",
    kidsFriendly: true,
    tags: ["下饭","家常","快手"],
  },
  {
    id: "la-jiao-chao-ji-dan",
    name: "辣椒炒鸡蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["尖椒","鸡蛋","豆豉","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "尖椒",
        "amount": "3个"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "尖椒切圈鸡蛋打散",
      "油热下鸡蛋炒散盛出",
      "下尖椒干煸至起皱",
      "下豆豉蒜末炒香",
      "倒回鸡蛋翻匀"
    ],
    tips: "辣椒先干煸出焦香更下饭",
    kidsFriendly: true,
    tags: ["下饭","快手","家常"],
  },
  {
    id: "cu-pao-bai-cai",
    name: "醋泡白菜",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["大白菜","白醋","糖","盐"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "5片"
      },
      {
        "name": "白醋",
        "amount": "2勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "半勺"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "花椒",
        "amount": "少许"
      }
    ],
    steps: [
      "白菜帮片薄片叶子撕块",
      "加盐腌30分钟挤水",
      "加醋糖干辣椒花椒拌匀",
      "冷藏腌1小时以上"
    ],
    tips: "酸甜脆爽开胃小菜",
    kidsFriendly: true,
    tags: ["凉菜","开胃","快手"],
  },
  {
    id: "xiang-jian-tu-dou-bing",
    name: "香煎土豆饼",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["土豆","面粉","鸡蛋","葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "面粉",
        "amount": "3勺"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "土豆擦丝不用洗（保留淀粉）",
      "加面粉鸡蛋葱花盐拌匀",
      "平底锅油热舀入土豆糊摊平",
      "中小火煎至两面金黄"
    ],
    tips: "土豆丝不要洗掉淀粉才能抱团成型",
    kidsFriendly: true,
    tags: ["早餐","孩子爱","快手"],
  },
  {
    id: "han-guo-chao-nian-gao",
    name: "韩国炒年糕",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["年糕","韩式辣酱","鱼饼","葱"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "年糕",
        "amount": "200g"
      },
      {
        "name": "韩式辣酱",
        "amount": "1勺"
      },
      {
        "name": "鱼饼",
        "amount": "2片"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "年糕煮软捞出",
      "锅中加水辣酱糖煮开",
      "下年糕和鱼饼煮5分钟",
      "大火收汁撒芝麻葱花"
    ],
    tips: "年糕要煮到软糯但不能煮过头",
    kidsFriendly: true,
    tags: ["韩式","小吃"],
  },
  // ======= 甜品 =======
  {
    id: "xi-gua-zhi",
    name: "西瓜汁",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["西瓜","冰块"],
    emoji: "🥒",
    allIngredients: [
      {
        "name": "西瓜",
        "amount": "半个"
      },
      {
        "name": "冰块",
        "amount": "适量"
      }
    ],
    steps: [
      "西瓜去皮切块",
      "放入榨汁机打碎",
      "过滤或不过滤都可以",
      "加冰块"
    ],
    tips: "夏天最解暑的饮品没有之一",
    kidsFriendly: true,
    tags: ["饮品","夏季","超快手"],
  },
  {
    id: "ning-meng-shui",
    name: "柠檬水",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 3,
    mainIngredients: ["柠檬","蜂蜜","水"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "柠檬",
        "amount": "1个"
      },
      {
        "name": "蜂蜜",
        "amount": "2勺"
      },
      {
        "name": "水",
        "amount": "500ml"
      },
      {
        "name": "冰块",
        "amount": "适量"
      }
    ],
    steps: [
      "柠檬切片",
      "杯中加蜂蜜和水搅匀",
      "放入柠檬片",
      "加冰块"
    ],
    tips: "蜂蜜用温水化开再加冷水",
    kidsFriendly: true,
    tags: ["饮品","夏季"],
  },
  {
    id: "ye-zi-gao",
    name: "椰子糕",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["椰浆","牛奶","白糖","吉利丁"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "椰浆",
        "amount": "200ml"
      },
      {
        "name": "牛奶",
        "amount": "100ml"
      },
      {
        "name": "白糖",
        "amount": "30g"
      },
      {
        "name": "吉利丁片",
        "amount": "2片"
      }
    ],
    steps: [
      "吉利丁冷水泡软",
      "椰浆牛奶糖加热搅匀",
      "加入泡软的吉利丁搅至融化",
      "倒入模具冷藏4小时至凝固",
      "脱模切块"
    ],
    tips: "没有吉利丁可以用白凉粉代替",
    kidsFriendly: true,
    tags: ["甜品","椰香","夏季"],
  },
  // ======= 川菜 =======
  {
    id: "pi-xian-dou-ban-jiang-chao-rou",
    name: "豆瓣酱炒肉",
    category: "meat",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["猪里脊","郫县豆瓣酱","蒜","青椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "200g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "肉片加料酒腌制",
      "豆瓣酱小火炒出红油",
      "下蒜末炒香",
      "下肉片翻炒至变色",
      "下青椒加少许糖翻匀"
    ],
    tips: "家常川味快手菜",
    kidsFriendly: false,
    tags: ["快手","下饭","川味"],
  },
  {
    id: "la-jiao-chao-la-rou",
    name: "辣椒炒腊肉",
    category: "meat",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["腊肉","尖椒","蒜","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肉",
        "amount": "200g"
      },
      {
        "name": "尖椒",
        "amount": "4个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      }
    ],
    steps: [
      "腊肉煮过去咸切片",
      "尖椒斜切",
      "少油下腊肉煸出油",
      "下蒜片尖椒大火翻炒",
      "加生抽翻匀"
    ],
    tips: "腊肉的咸香配尖椒的辣味",
    kidsFriendly: false,
    tags: ["快手","下饭","川味"],
  },
  // ======= 湘菜 =======
  {
    id: "hong-jiao-chao-rou",
    name: "红椒炒肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["五花肉","红椒","豆豉","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "200g"
      },
      {
        "name": "红椒",
        "amount": "3个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      }
    ],
    steps: [
      "五花肉切薄片",
      "锅中不放油下肉煸至出油",
      "下豆豉蒜片炒香",
      "下红椒大火翻炒",
      "加生抽翻匀"
    ],
    tips: "湖南人离不开辣椒炒肉",
    kidsFriendly: false,
    tags: ["湘味","下饭","快手"],
  },
  {
    id: "la-chao-you-zha",
    name: "辣炒油渣",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["猪油渣","干辣椒","蒜苗","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪油渣",
        "amount": "200g"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "蒜苗",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      }
    ],
    steps: [
      "干辣椒切段蒜苗切段",
      "锅中不放油下油渣炒热",
      "下干辣椒炒香",
      "下蒜苗翻炒",
      "加生抽翻匀出锅"
    ],
    tips: "油渣=炼猪油剩下的脆肉渣",
    kidsFriendly: false,
    tags: ["湘味","下饭","酥脆"],
  },
  // ======= 鲁菜 =======
  {
    id: "si-ji-dou-chao-rou",
    name: "四季豆炒肉",
    category: "meat",
    cuisine: "lu",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["四季豆","猪里脊","生抽","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "四季豆",
        "amount": "300g"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "四季豆去筋掰段焯水",
      "里脊切片加料酒淀粉腌制",
      "油热下肉片滑炒至变色",
      "下蒜片四季豆翻炒",
      "加生抽翻匀"
    ],
    tips: "四季豆一定要炒熟",
    kidsFriendly: false,
    tags: ["家常","下饭"],
  },
  // ======= 粤菜 =======
  {
    id: "xia-ren-chao-ji-dan",
    name: "虾仁炒鸡蛋",
    category: "meat",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["虾仁","鸡蛋","盐","牛奶"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "150g"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "牛奶",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "料酒",
        "amount": "半勺"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "虾仁加料酒腌制",
      "鸡蛋加牛奶盐打散",
      "油四成热下虾仁滑至变色",
      "倒入蛋液小火慢推",
      "八分熟关火余温焖熟",
      "撒葱花"
    ],
    tips: "加牛奶让蛋更嫩滑",
    kidsFriendly: true,
    tags: ["粤式","嫩滑","快手"],
  },
  {
    id: "rou-mo-niang-dou-fu",
    name: "肉末酿豆腐",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["老豆腐","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "豆腐切厚方块中间挖小坑",
      "肉末加姜末盐调馅",
      "把肉馅酿入豆腐坑中",
      "平底锅煎至底部金黄",
      "加生抽蚝油水焖5分钟",
      "淀粉勾芡撒葱花"
    ],
    tips: "先煎后焖，豆腐吸饱肉汁",
    kidsFriendly: true,
    tags: ["粤式","下饭","酿菜"],
  },
  // ======= 苏菜 =======
  {
    id: "shui-jing-xia-ren",
    name: "水晶虾仁",
    category: "meat",
    cuisine: "su",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["虾仁","青豆","蛋清","淀粉"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "250g"
      },
      {
        "name": "青豆",
        "amount": "30g"
      },
      {
        "name": "蛋清",
        "amount": "半个"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "虾仁加料酒蛋清淀粉上浆",
      "油温四成热下虾仁滑至变白",
      "下青豆翻炒",
      "加盐调味出锅"
    ],
    tips: "虾仁晶莹剔透是淮扬菜的招牌",
    kidsFriendly: true,
    tags: ["淮扬名菜","清淡","宴客"],
  },
  // ======= 浙菜 =======
  {
    id: "rou-mo-zheng-ji-dan",
    name: "肉末蒸鸡蛋",
    category: "soup",
    cuisine: "zhe",
    difficulty: 1,
    cookingTime: 18,
    mainIngredients: ["鸡蛋","猪肉末","温水","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散加温水盐搅匀过滤",
      "盖保鲜膜水开蒸8分钟",
      "同时肉末加生抽炒熟",
      "蛋羹出锅铺上肉末",
      "淋香油撒葱花"
    ],
    tips: "浙江家常版蒸蛋",
    kidsFriendly: true,
    tags: ["家常","嫩滑","快手"],
  },
  // ======= 闽菜 =======
  {
    id: "gan-bei-sha-cha-rou",
    name: "沙茶肉片",
    category: "meat",
    cuisine: "min",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["猪里脊","沙茶酱","洋葱","青椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "200g"
      },
      {
        "name": "沙茶酱",
        "amount": "1勺"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      }
    ],
    steps: [
      "里脊切片加料酒淀粉腌制",
      "洋葱青椒切块",
      "油热下肉片滑炒至变色盛出",
      "下洋葱青椒炒香",
      "加沙茶酱生抽",
      "倒回肉片翻匀"
    ],
    tips: "沙茶酱的复合香味是闽南特色",
    kidsFriendly: true,
    tags: ["闽南","下饭","快手"],
  },
  // ======= 徽菜 =======
  {
    id: "hui-shi-hong-shao-ji",
    name: "徽式红烧鸡",
    category: "meat",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 45,
    mainIngredients: ["鸡块","生抽","冰糖","料酒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡块",
        "amount": "500g"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "20g"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      }
    ],
    steps: [
      "鸡块焯水",
      "油热下冰糖炒糖色",
      "下鸡块翻炒上色",
      "加葱姜八角料酒生抽老抽",
      "加热水小火炖30分钟收汁"
    ],
    tips: "徽式红烧偏重用酱油上色",
    kidsFriendly: false,
    tags: ["徽菜","下饭","家常"],
  },
  // ======= 家常 =======
  {
    id: "hong-shao-ji-zhen",
    name: "红烧鸡胗",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["鸡胗","生抽","冰糖","八角"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡胗",
        "amount": "300g"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "10g"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "鸡胗切花刀焯水",
      "油热下冰糖炒糖色",
      "下鸡胗翻炒上色",
      "加生抽老抽八角姜料酒和水",
      "中火炖15分钟收汁"
    ],
    tips: "鸡胗口感脆韧有嚼劲",
    kidsFriendly: true,
    tags: ["下饭","家常"],
  },
  {
    id: "suan-rong-chao-wa-wa-cai",
    name: "蒜蓉炒娃娃菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["娃娃菜","蒜","盐","蚝油"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "娃娃菜",
        "amount": "2棵"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "蚝油",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "娃娃菜对半切开",
      "焯水30秒捞出",
      "蒜切末",
      "油热下蒜末爆香",
      "下娃娃菜大火翻炒",
      "加蚝油盐翻匀出锅"
    ],
    tips: "娃娃菜比大白菜更嫩甜",
    kidsFriendly: true,
    tags: ["快手","清淡","家常"],
  },
  {
    id: "huang-gua-pian-chao-rou",
    name: "黄瓜片炒肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["猪里脊","黄瓜","生抽","料酒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "黄瓜",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊切片加料酒淀粉腌制",
      "黄瓜切片",
      "油热下肉片滑炒至变色",
      "下蒜片黄瓜大火翻炒30秒",
      "加生抽盐翻匀出锅"
    ],
    tips: "黄瓜不要炒久保持脆嫩",
    kidsFriendly: true,
    tags: ["快手","清爽","家常"],
  },
  {
    id: "chao-he-dan",
    name: "炒荷蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["鸡蛋","青椒","洋葱","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "洋葱",
        "amount": "1/4个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋打散青椒洋葱切小块",
      "所有材料加盐搅匀",
      "油热倒入蛋液",
      "中小火煎至底部金黄翻面",
      "两面煎熟即可"
    ],
    tips: "升级版煎蛋饼",
    kidsFriendly: true,
    tags: ["快手","早餐","家常"],
  },
  {
    id: "rou-mo-yu-xiang-qie-zi",
    name: "鱼香肉末茄子",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["茄子","猪肉末","郫县豆瓣酱","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "猪肉末",
        "amount": "80g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "茄子切条撒盐腌10分钟挤水",
      "调鱼香汁：生抽+醋+糖+淀粉+水",
      "油热下茄子煎至金黄盛出",
      "肉末煸香加豆瓣酱炒红油",
      "加蒜末倒回茄子淋汁翻匀",
      "焖2分钟撒葱花"
    ],
    tips: "鱼香味型万物皆可",
    kidsFriendly: true,
    tags: ["下饭","家常"],
  },
  {
    id: "qing-jiao-chao-dou-pi",
    name: "青椒炒豆皮",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["豆腐皮","青椒","生抽","蒜"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "豆腐皮",
        "amount": "2张"
      },
      {
        "name": "青椒",
        "amount": "2个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "豆腐皮切菱形片焯水30秒",
      "青椒切块",
      "油热下蒜末爆香",
      "下青椒翻炒",
      "下豆腐皮加生抽盐翻匀"
    ],
    tips: "豆皮先焯水去腥更软",
    kidsFriendly: true,
    tags: ["快手","素食","家常"],
  },
  {
    id: "ji-dan-juan",
    name: "鸡蛋卷",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["鸡蛋","面粉","葱","火腿"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "面粉",
        "amount": "3勺"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "火腿",
        "amount": "50g"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋加面粉水搅成糊",
      "加葱花火腿丁盐",
      "平底锅刷油",
      "倒入薄薄一层蛋糊",
      "半凝固时卷起来推到一边",
      "再倒一层",
      "重复至用完",
      "切段装盘"
    ],
    tips: "厚蛋烧中式版",
    kidsFriendly: true,
    tags: ["早餐","孩子爱","快手"],
  },
  {
    id: "ping-gu-chao-rou-pian",
    name: "平菇炒肉片",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["猪里脊","平菇","青椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "150g"
      },
      {
        "name": "平菇",
        "amount": "200g"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "里脊切片加料酒淀粉腌制",
      "平菇撕小朵焯水挤干",
      "油热下肉片滑炒至变色",
      "下蒜片平菇青椒翻炒",
      "加生抽盐翻匀"
    ],
    tips: "平菇先焯水挤干炒出来不水",
    kidsFriendly: true,
    tags: ["快手","下饭","家常"],
  },
  {
    id: "suan-rong-zheng-nan-gua",
    name: "蒜蓉蒸南瓜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["南瓜","蒜","生抽","蚝油"],
    emoji: "🥒",
    allIngredients: [
      {
        "name": "南瓜",
        "amount": "300g"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "南瓜去皮切厚片摆盘",
      "蒜切末一半油炸至金黄",
      "金蒜生蒜混合加生抽蚝油",
      "铺在南瓜上",
      "水开蒸10分钟",
      "淋热油撒葱花"
    ],
    tips: "蒸南瓜又甜又糯",
    kidsFriendly: true,
    tags: ["快手","素食","家常"],
  },
  {
    id: "cu-liu-bai-cai-bang",
    name: "醋溜白菜帮",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["大白菜","干辣椒","醋","糖"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "大白菜(只用帮)",
        "amount": "5片"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "白菜帮片成薄片",
      "调碗汁：醋+生抽+糖+淀粉+水",
      "油热下干辣椒蒜片爆香",
      "下白菜帮大火翻炒1分钟",
      "沿锅边倒入碗汁翻匀"
    ],
    tips: "只用白菜帮脆嫩爽口",
    kidsFriendly: true,
    tags: ["快手","开胃","家常"],
  },
  {
    id: "fu-rong-ji-dan-tang",
    name: "芙蓉鸡蛋汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["鸡蛋","番茄","青菜","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      }
    ],
    steps: [
      "番茄切块炒出汁加水烧开",
      "青菜切段放入",
      "淀粉水勾薄芡",
      "转小火淋入蛋液",
      "加盐香油调味"
    ],
    tips: "蛋花像芙蓉一样飘在汤上",
    kidsFriendly: true,
    tags: ["快手","家常","汤品"],
  },
  {
    id: "mu-li-dou-fu-tang",
    name: "牡蛎豆腐汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["海蛎","嫩豆腐","姜丝","葱花"],
    emoji: "🦪",
    allIngredients: [
      {
        "name": "海蛎",
        "amount": "200g"
      },
      {
        "name": "嫩豆腐",
        "amount": "1盒"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "海蛎洗净控干",
      "豆腐切小块",
      "水烧开下姜丝豆腐煮2分钟",
      "下海蛎煮1分钟至开口",
      "加盐白胡椒粉香油葱花"
    ],
    tips: "海蛎鲜甜豆腐嫩滑",
    kidsFriendly: true,
    tags: ["快手","鲜汤","补锌"],
  },
  {
    id: "bai-cai-dou-fu-tang",
    name: "白菜豆腐汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["大白菜","嫩豆腐","姜","盐"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "3片"
      },
      {
        "name": "嫩豆腐",
        "amount": "1盒"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "白菜切片豆腐切块",
      "水烧开加姜片",
      "下白菜煮2分钟",
      "下豆腐煮1分钟",
      "加盐香油葱花"
    ],
    tips: "最简单的家常汤",
    kidsFriendly: true,
    tags: ["快手","清淡","家常"],
  },
  {
    id: "liang-ban-qie-zi",
    name: "凉拌茄子",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["茄子","蒜","醋","生抽"],
    emoji: "🥗",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "辣椒油",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "茄子切段蒸10分钟至软",
      "放凉用手撕成条",
      "蒜剁末",
      "调汁：生抽+醋+蒜末+糖+盐+香油+辣椒油",
      "浇在茄子上拌匀冷藏30分钟"
    ],
    tips: "茄子蒸比水煮更好吃",
    kidsFriendly: true,
    tags: ["凉菜","开胃","夏季"],
  },
  {
    id: "cui-pao-luo-bo",
    name: "脆泡萝卜",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["白萝卜","白醋","白糖","盐"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "白萝卜",
        "amount": "半根"
      },
      {
        "name": "白醋",
        "amount": "3勺"
      },
      {
        "name": "白糖",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "1勺"
      },
      {
        "name": "泡椒",
        "amount": "3个"
      },
      {
        "name": "凉白开",
        "amount": "适量"
      }
    ],
    steps: [
      "白萝卜去皮切条",
      "加盐腌30分钟杀出水",
      "用凉白开冲洗控干",
      "醋糖泡椒凉白开调成泡汁",
      "萝卜条泡入汁中",
      "冰箱冷藏4小时以上"
    ],
    tips: "酸辣脆爽，解腻神器",
    kidsFriendly: true,
    tags: ["凉菜","开胃","解腻"],
  },
  {
    id: "la-chang-chao-fan",
    name: "腊肠炒饭",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["隔夜米饭","腊肠","鸡蛋","葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "隔夜米饭",
        "amount": "2碗"
      },
      {
        "name": "腊肠",
        "amount": "1根"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "腊肠切小丁鸡蛋打散",
      "油热下鸡蛋炒散盛出",
      "腊肠煸至出油",
      "下米饭用铲子压散",
      "大火翻炒至粒粒分明",
      "倒回鸡蛋加盐葱花翻匀"
    ],
    tips: "腊肠的油和香味渗透米饭",
    kidsFriendly: true,
    tags: ["快手","主食","家常"],
  },
  {
    id: "ji-dan-chao-mian",
    name: "鸡蛋炒面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["面条","鸡蛋","青菜","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "面条",
        "amount": "200g"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "面条煮至八分熟过凉水加油拌匀",
      "鸡蛋炒散盛出",
      "油热下青菜翻炒",
      "下面条加生抽老抽蚝油",
      "大火翻炒",
      "倒回鸡蛋撒葱花翻匀"
    ],
    tips: "面条过凉水加油就不粘了",
    kidsFriendly: true,
    tags: ["快手","主食","家常"],
  },
  {
    id: "zong-zi",
    name: "粽子",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 90,
    mainIngredients: ["糯米","粽叶","红枣","猪肉(可选)"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "糯米",
        "amount": "500g"
      },
      {
        "name": "粽叶",
        "amount": "20张"
      },
      {
        "name": "红枣",
        "amount": "10颗"
      },
      {
        "name": "五花肉",
        "amount": "150g(可选)"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "棉线",
        "amount": "适量"
      }
    ],
    steps: [
      "糯米泡4小时粽叶泡软",
      "五花肉切块加生抽老抽腌制",
      "粽叶折成漏斗形",
      "放一层米放一颗红枣或肉",
      "再放一层米盖住",
      "粽叶包好用棉线扎紧",
      "大锅水煮2小时"
    ],
    tips: "端午节必备",
    kidsFriendly: true,
    tags: ["节日","传统","主食"],
  },
  {
    id: "rou-song-tu-dou-ni",
    name: "肉松土豆泥",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["土豆","肉松","牛奶","黄油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "肉松",
        "amount": "2勺"
      },
      {
        "name": "牛奶",
        "amount": "30ml"
      },
      {
        "name": "黄油",
        "amount": "10g"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "土豆蒸熟压泥",
      "趁热加黄油牛奶盐搅拌顺滑",
      "装碗撒上肉松"
    ],
    tips: "肉松配土豆泥是孩子的最爱",
    kidsFriendly: true,
    tags: ["孩子最爱","软食","营养"],
  },
  {
    id: "zheng-yu-bing",
    name: "蒸鱼饼",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["无刺鱼肉","蛋清","淀粉","胡萝卜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "无刺鱼肉",
        "amount": "200g"
      },
      {
        "name": "蛋清",
        "amount": "1个"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "胡萝卜",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "鱼肉加姜片剁成鱼蓉",
      "加蛋清淀粉盐搅打上劲",
      "胡萝卜切碎拌入",
      "团成小饼摆入盘中",
      "水开蒸8分钟"
    ],
    tips: "无刺软嫩，适合宝宝",
    kidsFriendly: true,
    tags: ["孩子爱","软食","无刺"],
  },
  {
    id: "fan-qie-ji-dan-ge-da-tang",
    name: "番茄鸡蛋疙瘩汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["面粉","番茄","鸡蛋","葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "150g"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "面粉慢慢加水用筷子搅成小面疙瘩",
      "番茄切块炒出汁",
      "加水烧开",
      "下入面疙瘩煮3分钟",
      "淋入蛋液",
      "加盐香油葱花"
    ],
    tips: "面疙瘩大小不一口感好",
    kidsFriendly: true,
    tags: ["快手","家常","暖胃"],
  },
  // ======= 甜品 =======
  {
    id: "bing-tang-xue-li",
    name: "冰糖雪梨",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 40,
    mainIngredients: ["雪梨","冰糖","枸杞","银耳"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "雪梨",
        "amount": "2个"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "银耳",
        "amount": "半朵"
      },
      {
        "name": "水",
        "amount": "1L"
      }
    ],
    steps: [
      "银耳泡发撕小朵",
      "雪梨去皮切块",
      "所有材料入锅加水",
      "大火烧开转小火煮30分钟",
      "喝汤吃梨"
    ],
    tips: "润肺止咳",
    kidsFriendly: true,
    tags: ["甜品","润肺","冬季"],
  },
  {
    id: "mei-gui-hua-cha",
    name: "玫瑰花茶",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["干玫瑰花","蜂蜜","水"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "干玫瑰花",
        "amount": "10朵"
      },
      {
        "name": "蜂蜜",
        "amount": "2勺"
      },
      {
        "name": "热水",
        "amount": "500ml"
      }
    ],
    steps: [
      "玫瑰花放入杯中",
      "倒入80°C热水",
      "泡3-5分钟",
      "加蜂蜜搅匀"
    ],
    tips: "美容养颜",
    kidsFriendly: true,
    tags: ["饮品","养生"],
  },
  {
    id: "niu-nai-yu-mi-geng",
    name: "牛奶玉米羹",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["甜玉米","牛奶","白糖","淀粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "甜玉米",
        "amount": "1根"
      },
      {
        "name": "牛奶",
        "amount": "300ml"
      },
      {
        "name": "白糖",
        "amount": "20g"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      }
    ],
    steps: [
      "玉米粒切下来",
      "加少许水煮熟",
      "倒入牛奶和糖搅匀",
      "淀粉水勾薄芡至浓稠"
    ],
    tips: "奶香玉米甜，孩子爱喝",
    kidsFriendly: true,
    tags: ["甜品","快手","孩子爱"],
  },
  // ======= 川菜 =======
  {
    id: "hong-shao-niu-rou-mian",
    name: "红烧牛肉面",
    category: "staple",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["面条","牛腩","郫县豆瓣酱","八角"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "200g"
      },
      {
        "name": "牛腩",
        "amount": "300g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      }
    ],
    steps: [
      "牛腩切块焯水",
      "油热下豆瓣酱炒红油下牛腩翻炒",
      "加生抽老抽料酒八角桂皮姜葱",
      "加足量热水炖1小时至牛腩软烂",
      "面条煮熟捞出浇上红烧牛肉汤",
      "烫青菜摆上"
    ],
    tips: "牛肉面=红烧牛肉+面条，一碗管饱",
    kidsFriendly: false,
    tags: ["川味面食","暖身","经典"],
  },
  {
    id: "pao-jiao-feng-zhao",
    name: "泡椒凤爪",
    category: "cold",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["鸡爪","泡椒","白醋","花椒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡爪",
        "amount": "500g"
      },
      {
        "name": "泡椒",
        "amount": "10个"
      },
      {
        "name": "泡椒水",
        "amount": "半碗"
      },
      {
        "name": "白醋",
        "amount": "2勺"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡爪去指甲斩两半焯水10分钟",
      "捞出过冰水（让皮弹脆）",
      "泡椒水+白醋+花椒+姜片+盐+凉白开调成泡汁",
      "鸡爪泡入汁中冰箱冷藏4小时以上"
    ],
    tips: "过冰水是鸡爪Q弹的关键",
    kidsFriendly: false,
    tags: ["川味小吃","凉菜","下酒"],
  },
  {
    id: "ma-la-xiang-guo",
    name: "麻辣香锅",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["虾","鸡翅","藕片","土豆","火锅底料"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "大虾",
        "amount": "8只"
      },
      {
        "name": "鸡翅",
        "amount": "6个"
      },
      {
        "name": "藕",
        "amount": "1节"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "西兰花",
        "amount": "半棵"
      },
      {
        "name": "火锅底料",
        "amount": "半块"
      },
      {
        "name": "干辣椒",
        "amount": "10个"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "5瓣"
      },
      {
        "name": "姜",
        "amount": "5片"
      }
    ],
    steps: [
      "所有食材处理好焯水或过油至熟",
      "锅中多油下火锅底料小火炒化",
      "下干辣椒花椒姜蒜炒香",
      "下所有食材大火翻炒均匀",
      "撒白芝麻出锅"
    ],
    tips: "想吃什么放什么，万物皆可麻辣香锅",
    kidsFriendly: false,
    tags: ["川味","聚餐","自由搭配"],
  },
  // ======= 湘菜 =======
  {
    id: "la-jiao-chao-ji-dan-xiang",
    name: "青椒荷包蛋",
    category: "veggie",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["青椒","鸡蛋","豆豉","蒜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "青椒",
        "amount": "4个"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "煎三个荷包蛋切块",
      "青椒切圈干煸至起皱",
      "油热下蒜末豆豉炒香",
      "下青椒和荷包蛋翻炒",
      "加生抽翻匀"
    ],
    tips: "荷包蛋煎得焦一点更香",
    kidsFriendly: false,
    tags: ["湘味","快手","下饭"],
  },
  {
    id: "zi-ran-la-rou",
    name: "孜然腊肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["腊肉","孜然粉","干辣椒","蒜苗"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肉",
        "amount": "200g"
      },
      {
        "name": "孜然粉",
        "amount": "1勺"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "蒜苗",
        "amount": "2根"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "腊肉煮过去咸切薄片",
      "锅中少油下腊肉煸至出油",
      "下干辣椒蒜末孜然粉炒香",
      "下蒜苗翻炒均匀"
    ],
    tips: "孜然配腊肉=烧烤味+腊香味",
    kidsFriendly: false,
    tags: ["湘味","下酒","快手"],
  },
  // ======= 鲁菜 =======
  {
    id: "jiang-bao-ji-ding",
    name: "酱爆鸡丁",
    category: "meat",
    cuisine: "lu",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["鸡胸肉","甜面酱","黄瓜","花生"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡胸肉",
        "amount": "300g"
      },
      {
        "name": "甜面酱",
        "amount": "1勺"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "花生米",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡胸肉切丁加料酒淀粉腌制",
      "黄瓜切丁",
      "油热下鸡丁滑炒至变白盛出",
      "甜面酱加少许水糖调开",
      "锅中少油下酱炒香",
      "倒回鸡丁黄瓜花生翻匀"
    ],
    tips: "酱爆=用甜面酱爆炒，酱香浓郁",
    kidsFriendly: false,
    tags: ["鲁菜","下饭","快手"],
  },
  // ======= 粤菜 =======
  {
    id: "xia-jiao-zheng",
    name: "虾饺",
    category: "staple",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["澄面","虾仁","猪肉末","笋丁"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "澄面",
        "amount": "150g"
      },
      {
        "name": "虾仁",
        "amount": "200g"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "笋丁",
        "amount": "30g"
      },
      {
        "name": "淀粉",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "澄面和淀粉混合用开水烫面揉团",
      "虾仁切丁和肉末笋丁调料拌馅",
      "面团搓条切剂擀薄皮",
      "包入馅料捏出褶子",
      "蒸笼铺胡萝卜片垫底",
      "水开大火蒸6分钟"
    ],
    tips: "澄面做的皮蒸出来是透明的能看到虾仁",
    kidsFriendly: true,
    tags: ["粤式早茶","经典","茶楼"],
  },
  // ======= 苏菜 =======
  {
    id: "qing-zheng-xie",
    name: "清蒸蟹",
    category: "meat",
    cuisine: "su",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["大闸蟹","姜","醋","紫苏"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "大闸蟹",
        "amount": "4只"
      },
      {
        "name": "姜",
        "amount": "大量"
      },
      {
        "name": "醋",
        "amount": "3勺"
      },
      {
        "name": "紫苏",
        "amount": "几片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "蟹用刷子刷洗干净",
      "蒸锅水加料酒和紫苏",
      "蟹肚朝上放姜片",
      "水开大火蒸15分钟",
      "姜切末加醋调蘸料"
    ],
    tips: "肚朝上蒸蟹黄不会流出来",
    kidsFriendly: true,
    tags: ["苏式","秋季","宴客"],
  },
  // ======= 浙菜 =======
  {
    id: "mei-cai-kou-rou",
    name: "梅菜扣肉",
    category: "meat",
    cuisine: "zhe",
    difficulty: 3,
    cookingTime: 90,
    mainIngredients: ["五花肉","梅干菜","老抽","蜂蜜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "500g"
      },
      {
        "name": "梅干菜",
        "amount": "150g"
      },
      {
        "name": "老抽",
        "amount": "2勺"
      },
      {
        "name": "蜂蜜",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "姜",
        "amount": "5片"
      }
    ],
    steps: [
      "五花肉整块焯水煮熟",
      "捞出趁热抹老抽和蜂蜜",
      "肉皮炸至起泡",
      "切厚片肉皮朝下码入碗中",
      "梅干菜泡发炒香铺在肉上",
      "加生抽料酒八角姜片",
      "上锅蒸1.5小时",
      "倒扣装盘"
    ],
    tips: "炸肉皮是扣肉起虎皮的关键步骤",
    kidsFriendly: true,
    tags: ["浙菜名菜","宴客","经典"],
  },
  // ======= 闽菜 =======
  {
    id: "gan-bei-hai-li-jian",
    name: "干贝海蛎煎",
    category: "meat",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["海蛎","鸡蛋","红薯粉","干贝"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "海蛎",
        "amount": "200g"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "红薯粉",
        "amount": "3勺"
      },
      {
        "name": "干贝",
        "amount": "20g"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "甜辣酱",
        "amount": "适量"
      }
    ],
    steps: [
      "干贝提前泡发撕丝",
      "海蛎洗净加红薯粉糊盐胡椒粉葱花拌匀",
      "平底锅多油倒入摊平",
      "撒上干贝丝",
      "鸡蛋打散淋在上面",
      "中火煎至两面金黄",
      "蘸甜辣酱吃"
    ],
    tips: "加干贝让海蛎煎更鲜",
    kidsFriendly: true,
    tags: ["闽南小吃","经典","夜市"],
  },
  // ======= 徽菜 =======
  {
    id: "hui-shi-hong-shao-yu",
    name: "徽式红烧鱼",
    category: "meat",
    cuisine: "hui",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["鱼","生抽","老抽","辣椒酱"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鱼",
        "amount": "1条"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "辣椒酱",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "鱼洗净划刀",
      "油热下鱼煎至两面金黄",
      "下姜蒜辣椒酱炒香",
      "加生抽老抽料酒和水",
      "中火焖10分钟",
      "大火收汁撒葱花"
    ],
    tips: "徽式红烧偏咸辣口",
    kidsFriendly: false,
    tags: ["徽菜","下饭","家常"],
  },
  // ======= 家常 =======
  {
    id: "mu-er-chao-rou-pian",
    name: "木耳炒肉片",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["猪里脊","木耳","青椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "150g"
      },
      {
        "name": "木耳",
        "amount": "50g泡发"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊切片加料酒淀粉腌制",
      "木耳撕小朵青椒切块",
      "油热下肉片滑炒至变色",
      "下蒜片木耳青椒翻炒",
      "加生抽盐翻匀"
    ],
    tips: "木耳脆嫩肉片嫩滑",
    kidsFriendly: true,
    tags: ["快手","家常","下饭"],
  },
  {
    id: "xiang-gu-you-cai",
    name: "香菇油菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["油菜","香菇","蚝油","蒜"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "油菜",
        "amount": "4棵"
      },
      {
        "name": "香菇",
        "amount": "6个"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "油菜对半切开焯水摆盘",
      "香菇切片",
      "油热下蒜末香菇炒香",
      "加蚝油生抽水煮开",
      "淀粉勾薄芡浇在油菜上"
    ],
    tips: "香菇和油菜是经典搭配",
    kidsFriendly: true,
    tags: ["素食","快手","家常"],
  },
  {
    id: "cong-bao-dou-fu",
    name: "葱爆豆腐",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["老豆腐","大葱","生抽","蚝油"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "大葱",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "豆腐切厚片煎至两面金黄",
      "大葱斜切圈",
      "油热下大葱爆香",
      "下豆腐加生抽蚝油糖",
      "大火翻匀"
    ],
    tips: "葱的焦香和豆腐的焦香融合",
    kidsFriendly: true,
    tags: ["素食","快手","下饭"],
  },
  {
    id: "huang-dou-dun-zhu-ti",
    name: "黄豆炖猪蹄",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 90,
    mainIngredients: ["猪蹄","黄豆","八角","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪蹄",
        "amount": "1只"
      },
      {
        "name": "黄豆",
        "amount": "100g提前泡发"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1小块"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      }
    ],
    steps: [
      "猪蹄焯水",
      "油热下冰糖炒糖色",
      "下猪蹄翻炒上色",
      "加八角桂皮姜片料酒生抽老抽",
      "加足量热水和黄豆",
      "大火烧开转小火炖1.5小时至猪蹄软烂",
      "大火收汁"
    ],
    tips: "猪蹄的胶原蛋白和黄豆的豆香完美融合",
    kidsFriendly: true,
    tags: ["滋补","下饭","胶原蛋白"],
  },
  {
    id: "xiang-gu-ji-tang",
    name: "香菇鸡汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 60,
    mainIngredients: ["鸡","香菇","红枣","枸杞"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡",
        "amount": "半只"
      },
      {
        "name": "香菇",
        "amount": "8个"
      },
      {
        "name": "红枣",
        "amount": "8颗"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡块焯水",
      "香菇泡发",
      "所有材料入锅加水",
      "大火烧开撇去浮沫",
      "转小火炖45分钟",
      "加盐调味"
    ],
    tips: "鸡汤要小火慢炖才鲜",
    kidsFriendly: true,
    tags: ["滋补","汤品","家常"],
  },
  {
    id: "suan-rong-chao-bai-he",
    name: "蒜蓉炒百合",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["鲜百合","蒜","盐","枸杞"],
    emoji: "🍽️",
    allIngredients: [
      {
        "name": "鲜百合",
        "amount": "2个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "百合掰开洗净",
      "蒜切末",
      "油热下蒜末爆香",
      "下百合大火翻炒1分钟",
      "加盐枸杞翻匀出锅"
    ],
    tips: "鲜百合清甜脆嫩，炒久了会粉",
    kidsFriendly: true,
    tags: ["快手","清淡","素食"],
  },
  {
    id: "rou-mo-bai-cai-juan",
    name: "肉末白菜卷",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["大白菜","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "大白菜叶",
        "amount": "8片"
      },
      {
        "name": "猪肉末",
        "amount": "200g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "姜末",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      }
    ],
    steps: [
      "白菜叶焯水变软",
      "肉末加姜末调料调馅",
      "白菜叶包入肉馅卷起来",
      "摆入盘中",
      "水开蒸12分钟",
      "蒸出的汤汁加淀粉勾芡浇上",
      "撒葱花"
    ],
    tips: "白菜卷=白菜当皮包肉馅",
    kidsFriendly: true,
    tags: ["家常","蒸菜","精致"],
  },
  {
    id: "suan-rong-kao-qie-zi",
    name: "蒜蓉烤茄子",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["茄子","蒜","生抽","蚝油"],
    emoji: "🍆",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "蒜",
        "amount": "一整头"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "辣椒粉",
        "amount": "适量"
      },
      {
        "name": "孜然粉",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "茄子整根刷油放烤箱200°C烤20分钟",
      "蒜切末加生抽蚝油调汁",
      "烤软的茄子对半切开",
      "淋上蒜蓉汁",
      "再烤5分钟",
      "撒辣椒粉孜然粉葱花"
    ],
    tips: "没有烤箱可以用平底锅煎",
    kidsFriendly: true,
    tags: ["烧烤","下饭","夜市风味"],
  },
  {
    id: "qie-zhi-rou-pian",
    name: "茄汁肉片",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["猪里脊","番茄酱","白醋","糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "200g"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊切片加料酒盐腌制",
      "裹蛋液再裹淀粉",
      "油炸至金黄",
      "番茄酱+醋+糖+水煮浓",
      "下肉片翻匀"
    ],
    tips: "酸甜口大人小孩都爱",
    kidsFriendly: true,
    tags: ["孩子爱","快手","家常"],
  },
  {
    id: "rou-mo-juan-bing",
    name: "肉末卷饼",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["面粉","猪肉末","黄瓜","甜面酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "200g"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "甜面酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "面粉加热水烫面揉团醒20分钟",
      "肉末加生抽料酒炒熟",
      "面团分剂擀薄饼",
      "平底锅烙至两面起泡",
      "饼上抹甜面酱放肉末黄瓜丝葱丝",
      "卷起来吃"
    ],
    tips: "烫面做的饼软和，凉了也不硬",
    kidsFriendly: true,
    tags: ["北方","主食","家常"],
  },
  {
    id: "san-xian-jiao-zi",
    name: "三鲜饺子",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["饺子皮","猪肉末","虾仁","韭菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "饺子皮",
        "amount": "30张"
      },
      {
        "name": "猪肉末",
        "amount": "200g"
      },
      {
        "name": "虾仁",
        "amount": "100g"
      },
      {
        "name": "韭菜",
        "amount": "100g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "姜末",
        "amount": "少许"
      }
    ],
    steps: [
      "虾仁切丁韭菜切碎",
      "肉末加鸡蛋生抽盐香油姜末搅打上劲",
      "加虾仁韭菜拌匀",
      "包饺子",
      "水开下饺子煮至浮起加半碗冷水",
      "重复两次饺子全浮起来即可"
    ],
    tips: "三鲜=猪肉+虾仁+韭菜",
    kidsFriendly: true,
    tags: ["主食","传统","家常"],
  },
  {
    id: "xiao-mi-zhou",
    name: "小米粥",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 35,
    mainIngredients: ["小米","水","红枣"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "小米",
        "amount": "100g"
      },
      {
        "name": "水",
        "amount": "1.2L"
      },
      {
        "name": "红枣",
        "amount": "5颗"
      },
      {
        "name": "冰糖",
        "amount": "少许(可选)"
      }
    ],
    steps: [
      "小米淘洗不要搓",
      "水开后下小米",
      "大火煮10分钟转小火熬20分钟",
      "加红枣",
      "熬到小米开花变稠即可"
    ],
    tips: "小米粥养胃，早上喝一碗暖和",
    kidsFriendly: true,
    tags: ["早餐","养胃","快手"],
  },
  {
    id: "la-jiao-chao-qie-zi",
    name: "辣椒炒茄子",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["茄子","青椒","蒜","生抽"],
    emoji: "🍆",
    allIngredients: [
      {
        "name": "茄子",
        "amount": "2根"
      },
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "茄子切滚刀块撒盐腌10分钟挤水",
      "青椒切块",
      "油热下茄子煎至变软",
      "下蒜末青椒大火翻炒",
      "加生抽盐翻匀"
    ],
    tips: "茄子+青椒是绝配",
    kidsFriendly: true,
    tags: ["快手","下饭","家常"],
  },
  {
    id: "ji-dan-chao-mo-gu",
    name: "鸡蛋炒蘑菇",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["鸡蛋","蘑菇","盐","葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "蘑菇",
        "amount": "200g"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋打散蘑菇切片",
      "油热下鸡蛋炒散盛出",
      "下蘑菇炒至出水再收干",
      "倒回鸡蛋加盐葱花翻匀"
    ],
    tips: "蘑菇要先炒出水再收干才香",
    kidsFriendly: true,
    tags: ["快手","家常","素食"],
  },
  {
    id: "zha-jiang-mian-jia-chang",
    name: "家常炸酱面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["面条","猪肉末","黄豆酱","黄瓜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "200g"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "黄豆酱",
        "amount": "2勺"
      },
      {
        "name": "甜面酱",
        "amount": "1勺"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "黄瓜切丝",
      "油热下肉末煸至出油",
      "加姜末黄豆酱甜面酱",
      "小火炸5分钟不停搅动",
      "加糖炒到油酱分离",
      "面条煮熟捞出",
      "码上黄瓜丝浇上炸酱"
    ],
    tips: "炸酱要炸到油酱分离才够香",
    kidsFriendly: true,
    tags: ["北方","主食","经典"],
  },
  {
    id: "suan-rong-zheng-xia",
    name: "蒜蓉蒸虾",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["虾","蒜","粉丝","生抽"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "虾",
        "amount": "10只"
      },
      {
        "name": "龙口粉丝",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "一整头"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "粉丝泡软铺盘底",
      "虾开背去虾线摆粉丝上",
      "蒜切蓉一半炸金蒜",
      "金蒜生蒜混合加生抽蚝油",
      "蒜蓉铺虾背上",
      "水开蒸6分钟",
      "淋热油撒葱花"
    ],
    tips: "蒜蓉蒸海鲜万能公式",
    kidsFriendly: true,
    tags: ["快手","宴客","海鲜"],
  },
  {
    id: "ji-tui-chao-qing-jiao",
    name: "鸡腿炒青椒",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["鸡腿","青椒","生抽","料酒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿",
        "amount": "3个"
      },
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡腿去骨切丁加料酒生抽淀粉腌制",
      "青椒切块",
      "油热下鸡丁滑炒至变色",
      "下蒜片青椒大火翻炒",
      "加生抽盐翻匀"
    ],
    tips: "鸡腿肉比鸡胸肉更嫩更多汁",
    kidsFriendly: true,
    tags: ["快手","下饭","家常"],
  },
  {
    id: "suan-rong-chao-bai-cai-tai",
    name: "蒜蓉炒菜苔",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["菜苔","蒜","盐"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "菜苔",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "菜苔洗净控干折段",
      "蒜切末",
      "油热下蒜末爆香",
      "下菜苔大火快炒1分钟",
      "加盐立刻出锅"
    ],
    tips: "冬天的红菜苔最甜最好吃",
    kidsFriendly: true,
    tags: ["快手","时令","家常"],
  },
  {
    id: "rou-chao-he-lan-dou",
    name: "肉炒荷兰豆",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["荷兰豆","猪里脊","生抽","盐"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "荷兰豆",
        "amount": "200g"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "荷兰豆去筋焯水30秒",
      "里脊切片加料酒淀粉腌制",
      "油热下肉片滑炒至变色",
      "下蒜片荷兰豆大火翻炒",
      "加生抽盐翻匀"
    ],
    tips: "荷兰豆焯水后颜色更绿口感更脆",
    kidsFriendly: true,
    tags: ["快手","家常","脆嫩"],
  },
  {
    id: "hong-shao-dai-yu",
    name: "红烧带鱼",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["带鱼","生抽","老抽","糖"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "带鱼",
        "amount": "500g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "1段"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      }
    ],
    steps: [
      "带鱼去内脏切段",
      "厨房纸吸干水分裹薄淀粉",
      "平底锅煎至两面金黄",
      "加姜蒜葱料酒生抽老抽糖和水",
      "中火焖5分钟收汁"
    ],
    tips: "带鱼要吸干水裹薄粉煎才不会粘锅",
    kidsFriendly: true,
    tags: ["家常","下饭"],
  },
  {
    id: "cu-chao-bai-cai",
    name: "醋炒白菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["大白菜","干辣椒","醋","生抽"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "5片"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "白菜帮片薄片叶子撕块",
      "油热下干辣椒蒜末爆香",
      "先下白菜帮翻炒1分钟",
      "再下叶大火快炒",
      "沿锅边淋醋加生抽糖盐翻匀"
    ],
    tips: "醋沿锅边淋入激香不是直接倒在菜上",
    kidsFriendly: true,
    tags: ["快手","开胃","家常"],
  },
  {
    id: "shan-yao-pai-gu-tang",
    name: "山药排骨汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 70,
    mainIngredients: ["排骨","山药","胡萝卜","姜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "300g"
      },
      {
        "name": "山药",
        "amount": "200g"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "排骨焯水",
      "山药去皮切段(戴手套)",
      "胡萝卜切滚刀块",
      "排骨姜片料酒入锅加水",
      "大火烧开转小火炖40分钟",
      "加山药胡萝卜再炖20分钟",
      "加枸杞和盐"
    ],
    tips: "山药去皮要戴手套否则手痒",
    kidsFriendly: true,
    tags: ["汤品","滋补","家常"],
  },
  {
    id: "zi-cai-dou-fu-tang",
    name: "紫菜豆腐汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["紫菜","嫩豆腐","虾皮","葱花"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "紫菜",
        "amount": "1片"
      },
      {
        "name": "嫩豆腐",
        "amount": "半盒"
      },
      {
        "name": "虾皮",
        "amount": "1小撮"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "豆腐切小块",
      "水烧开下豆腐虾皮煮1分钟",
      "关火放紫菜(余温烫熟)",
      "加盐香油葱花"
    ],
    tips: "紫菜要关火后放煮久了口感差",
    kidsFriendly: true,
    tags: ["快手","清淡","汤品"],
  },
  {
    id: "ji-dan-jia-chang-tang",
    name: "鸡蛋家常汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["鸡蛋","番茄","紫菜","虾皮"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "紫菜",
        "amount": "少许"
      },
      {
        "name": "虾皮",
        "amount": "1小撮"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      }
    ],
    steps: [
      "番茄切块炒出汁加水烧开",
      "加虾皮煮1分钟",
      "淀粉水勾薄芡",
      "转小火淋蛋液",
      "关火放紫菜",
      "加盐香油葱花"
    ],
    tips: "一碗家常汤的标配",
    kidsFriendly: true,
    tags: ["快手","家常","汤品"],
  },
  {
    id: "liang-ban-tu-dou-si",
    name: "凉拌土豆丝",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["土豆","蒜","醋","辣椒油"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "辣椒油",
        "amount": "适量"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "土豆切细丝泡水去淀粉",
      "水开焯30秒立刻过凉水",
      "控干水分",
      "加蒜末醋生抽辣椒油盐糖香油拌匀",
      "撒葱花",
      "冷藏30分钟更入味"
    ],
    tips: "焯水时间要短保持脆爽",
    kidsFriendly: true,
    tags: ["凉菜","开胃","夏季"],
  },
  {
    id: "liang-ban-ji-si",
    name: "凉拌鸡丝",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["鸡胸肉","黄瓜","芝麻酱","辣椒油"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡胸肉",
        "amount": "1块"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "芝麻酱",
        "amount": "1勺"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "香菜",
        "amount": "少许"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡胸肉冷水下锅加姜片煮熟",
      "放凉撕成细丝",
      "黄瓜切丝",
      "芝麻酱用少许水调开",
      "加生抽醋辣椒油蒜末调汁",
      "鸡丝黄瓜装盘浇汁拌匀",
      "撒芝麻香菜"
    ],
    tips: "鸡胸肉不能煮太久否则柴了",
    kidsFriendly: true,
    tags: ["凉菜","低脂","高蛋白"],
  },
  {
    id: "liang-ban-hun-dun",
    name: "红油抄手(凉)",
    category: "cold",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["馄饨皮","猪肉末","辣椒油","蒜泥"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "馄饨皮",
        "amount": "20张"
      },
      {
        "name": "猪肉末",
        "amount": "200g"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "花椒粉",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "少许"
      }
    ],
    steps: [
      "肉末加姜末盐调馅包抄手",
      "水开下抄手煮至浮起",
      "捞出过凉水控干",
      "调红油汁：辣椒油+蒜泥+生抽+醋+糖+花椒粉",
      "抄手装盘浇汁撒葱花"
    ],
    tips: "过凉水的抄手皮更Q弹",
    kidsFriendly: true,
    tags: ["川味小吃","凉菜","下酒"],
  },
  {
    id: "shui-jiao",
    name: "水饺",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["饺子皮","猪肉末","白菜","葱姜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "饺子皮",
        "amount": "30张"
      },
      {
        "name": "猪肉末",
        "amount": "300g"
      },
      {
        "name": "白菜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "姜",
        "amount": "1小块"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "白菜剁碎加盐杀水挤干",
      "肉末加葱姜末生抽盐香油搅打上劲",
      "加白菜拌匀",
      "包饺子",
      "水开下饺子煮至全浮起"
    ],
    tips: "饺子馅打水进去煮出来有汤汁",
    kidsFriendly: true,
    tags: ["主食","传统","家常"],
  },
  {
    id: "guo-tie",
    name: "锅贴",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["饺子皮","猪肉末","韭菜","鸡蛋"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "饺子皮",
        "amount": "20张"
      },
      {
        "name": "猪肉末",
        "amount": "200g"
      },
      {
        "name": "韭菜",
        "amount": "100g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "韭菜切碎和肉末鸡蛋调料搅成馅",
      "取饺子皮放馅中间捏合两端不封口",
      "平底锅刷油摆入锅贴",
      "中火煎至底部金黄",
      "加半碗水盖盖焖5分钟",
      "水干后开盖收干底部"
    ],
    tips: "锅贴和煎饺的区别是锅贴两端不封口",
    kidsFriendly: true,
    tags: ["主食","早餐","酥脆"],
  },
  {
    id: "yang-chun-mian",
    name: "阳春面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["面条","猪油","生抽","葱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "150g"
      },
      {
        "name": "猪油",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "碗底放猪油生抽盐白胡椒粉",
      "面条煮熟",
      "舀一勺面汤冲开碗底",
      "捞入面条",
      "撒大量葱花"
    ],
    tips: "阳春面=酱油汤面，猪油和葱是灵魂",
    kidsFriendly: true,
    tags: ["上海","快手","清淡"],
  },
  {
    id: "la-chang-wei-fan",
    name: "腊肠焖饭",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 30,
    mainIngredients: ["大米","腊肠","玉米","青豆"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "大米",
        "amount": "2杯"
      },
      {
        "name": "腊肠",
        "amount": "2根"
      },
      {
        "name": "玉米粒",
        "amount": "50g"
      },
      {
        "name": "青豆",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "油",
        "amount": "少许"
      }
    ],
    steps: [
      "大米淘洗加水(1:1.2)",
      "腊肠切片",
      "米上铺腊肠玉米青豆",
      "淋生抽蚝油和少许油",
      "电饭煲煮饭模式",
      "煮好拌匀"
    ],
    tips: "一锅出懒人料理",
    kidsFriendly: true,
    tags: ["快手","主食","一锅出"],
  },
  {
    id: "tian-jiao-chao-ji-dan",
    name: "甜椒炒鸡蛋",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["彩椒","鸡蛋","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "彩椒",
        "amount": "2个"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "彩椒切丁鸡蛋打散",
      "油热下鸡蛋炒散",
      "下彩椒翻炒30秒",
      "加盐翻匀出锅"
    ],
    tips: "彩椒不辣而且有甜味",
    kidsFriendly: true,
    tags: ["孩子爱","快手","颜色好看"],
  },
  {
    id: "qing-dun-ji-tui",
    name: "清炖鸡腿",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 40,
    mainIngredients: ["鸡腿","胡萝卜","土豆","姜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿",
        "amount": "4个"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "鸡腿焯水",
      "胡萝卜土豆切滚刀块",
      "所有食材入锅加水",
      "大火烧开撇浮沫",
      "转小火炖30分钟",
      "加盐调味"
    ],
    tips: "清炖不油腻适合孩子",
    kidsFriendly: true,
    tags: ["孩子爱","清淡","滋补"],
  },
  // ======= 甜品 =======
  {
    id: "mei-gui-jiang-nai-cha",
    name: "玫瑰酱奶茶",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["红茶","牛奶","玫瑰酱","蜂蜜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "红茶",
        "amount": "1包"
      },
      {
        "name": "牛奶",
        "amount": "300ml"
      },
      {
        "name": "玫瑰酱",
        "amount": "1勺"
      },
      {
        "name": "蜂蜜",
        "amount": "适量"
      }
    ],
    steps: [
      "牛奶加热至微沸",
      "放入红茶包泡3分钟",
      "取出茶包加玫瑰酱蜂蜜搅匀"
    ],
    tips: "玫瑰香+奶香+茶香",
    kidsFriendly: true,
    tags: ["饮品","花香","冬季"],
  },
  {
    id: "bo-luo-bing",
    name: "菠萝冰",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["菠萝","白糖","冰块","水"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "菠萝",
        "amount": "半个"
      },
      {
        "name": "白糖",
        "amount": "30g"
      },
      {
        "name": "冰块",
        "amount": "适量"
      },
      {
        "name": "水",
        "amount": "200ml"
      }
    ],
    steps: [
      "菠萝切小块",
      "加水糖煮5分钟",
      "放凉",
      "加入冰块",
      "倒入搅拌机打碎成冰沙"
    ],
    tips: "夏日消暑神器",
    kidsFriendly: true,
    tags: ["饮品","夏季","消暑"],
  },
  {
    id: "gui-hua-fen",
    name: "桂花粉",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["藕粉","桂花","冰糖","枸杞"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "藕粉",
        "amount": "2勺"
      },
      {
        "name": "干桂花",
        "amount": "少许"
      },
      {
        "name": "冰糖",
        "amount": "适量"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      }
    ],
    steps: [
      "藕粉用冷水调开",
      "锅中水烧开加冰糖",
      "缓缓倒入藕粉糊不停搅拌",
      "变透明浓稠关火",
      "撒桂花枸杞"
    ],
    tips: "藕粉要用冷水先调开再下锅才不会结块",
    kidsFriendly: true,
    tags: ["甜品","江南","传统"],
  },
  {
    id: "huo-long-guo-nai-xi",
    name: "火龙果奶昔",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["火龙果","牛奶","蜂蜜","冰块"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "火龙果",
        "amount": "半个"
      },
      {
        "name": "牛奶",
        "amount": "300ml"
      },
      {
        "name": "蜂蜜",
        "amount": "1勺"
      },
      {
        "name": "冰块",
        "amount": "适量"
      }
    ],
    steps: [
      "火龙果去皮切块",
      "和牛奶蜂蜜冰块一起入搅拌机",
      "打匀即可"
    ],
    tips: "颜色超级漂亮",
    kidsFriendly: true,
    tags: ["饮品","夏季","快手"],
  },
  {
    id: "kao-hong-shu",
    name: "烤红薯",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 50,
    mainIngredients: ["红薯"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "红薯",
        "amount": "4个"
      }
    ],
    steps: [
      "红薯洗净不用去皮",
      "烤箱200°C烤40-50分钟",
      "烤到表皮冒糖汁",
      "用筷子能轻松扎透即可"
    ],
    tips: "红薯选细长的蜜薯最甜",
    kidsFriendly: true,
    tags: ["冬季","街头风味","甜品"],
  },
  {
    id: "liang-fen",
    name: "凉粉",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["绿豆淀粉","水","蒜","辣椒油"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "绿豆淀粉",
        "amount": "100g"
      },
      {
        "name": "水",
        "amount": "600ml"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "淀粉和水1:6比例搅匀",
      "倒入锅中中小火不停搅拌",
      "煮到透明浓稠冒大泡",
      "倒入模具放凉凝固",
      "切成条或块",
      "加蒜末生抽醋辣椒油盐拌匀撒葱花"
    ],
    tips: "小时候夏天的记忆",
    kidsFriendly: true,
    tags: ["夏季","凉粉","传统"],
  },
  // ======= 川菜 =======
  {
    id: "gan-guo-ji",
    name: "干锅鸡",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["鸡块","土豆","干辣椒","花椒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡块",
        "amount": "400g"
      },
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "干辣椒",
        "amount": "15个"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "5瓣"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      }
    ],
    steps: [
      "鸡块加料酒生抽腌制20分钟",
      "土豆切片油炸至金黄",
      "油热下鸡块煸至表面焦黄",
      "下豆瓣酱炒红油",
      "下干辣椒花椒姜蒜洋葱",
      "下土豆翻炒",
      "撒青椒和白芝麻"
    ],
    tips: "干锅=不加水干炒，全程大火煸出焦香",
    kidsFriendly: false,
    tags: ["川菜","干锅","下饭"],
  },
  {
    id: "pao-jiao-niu-wa",
    name: "泡椒牛蛙",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["牛蛙","泡椒","泡姜","花椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛蛙",
        "amount": "3只"
      },
      {
        "name": "泡椒",
        "amount": "10个"
      },
      {
        "name": "泡姜",
        "amount": "1块"
      },
      {
        "name": "花椒",
        "amount": "1小撮"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "葱",
        "amount": "2根"
      }
    ],
    steps: [
      "牛蛙斩块加料酒淀粉腌制",
      "泡椒切段泡姜切片",
      "油热下牛蛙滑油至变色盛出",
      "下泡椒泡姜花椒蒜炒香",
      "倒回牛蛙加生抽大火翻炒",
      "撒葱段出锅"
    ],
    tips: "牛蛙要大火快炒才嫩",
    kidsFriendly: false,
    tags: ["川菜","鲜嫩","下饭"],
  },
  // ======= 湘菜 =======
  {
    id: "gan-guo-hua-cai",
    name: "干锅花菜",
    category: "veggie",
    cuisine: "xiang",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["花菜","五花肉","干辣椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "花菜",
        "amount": "半棵"
      },
      {
        "name": "五花肉",
        "amount": "100g"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "花菜掰小朵焯水1分钟",
      "五花肉切薄片",
      "锅中不放油下五花肉煸出油",
      "下干辣椒蒜片炒香",
      "下花菜大火翻炒",
      "加生抽蚝油翻匀"
    ],
    tips: "花菜焯水后大火炒出焦香才是干锅的味道",
    kidsFriendly: false,
    tags: ["湘味","下饭","快手"],
  },
  // ======= 鲁菜 =======
  {
    id: "cong-shao-pai-gu",
    name: "葱烧排骨",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["排骨","大葱","生抽","冰糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "500g"
      },
      {
        "name": "大葱",
        "amount": "3根"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "20g"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "八角",
        "amount": "2个"
      }
    ],
    steps: [
      "排骨焯水",
      "大葱切长段油炸至金黄捞出",
      "油热下冰糖炒糖色",
      "下排骨翻炒上色",
      "加姜八角料酒生抽老抽和水",
      "小火炖35分钟",
      "加炸好的葱段大火收汁"
    ],
    tips: "大葱先炸过再炖味道更香",
    kidsFriendly: false,
    tags: ["鲁菜","下饭","葱香"],
  },
  // ======= 粤菜 =======
  {
    id: "zheng-nan-gua-bing",
    name: "蒸南瓜饼",
    category: "staple",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["南瓜","糯米粉","白糖","豆沙"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "南瓜",
        "amount": "300g"
      },
      {
        "name": "糯米粉",
        "amount": "200g"
      },
      {
        "name": "白糖",
        "amount": "30g"
      },
      {
        "name": "豆沙馅",
        "amount": "适量"
      },
      {
        "name": "枸杞",
        "amount": "装饰用"
      }
    ],
    steps: [
      "南瓜蒸熟压泥",
      "加糯米粉白糖揉成面团",
      "分成小剂压扁包入豆沙",
      "收口搓圆用牙签压出南瓜纹",
      "中间放一粒枸杞",
      "水开蒸8分钟"
    ],
    tips: "蒸出来的南瓜饼软糯香甜",
    kidsFriendly: true,
    tags: ["粤式点心","甜品","孩子爱"],
  },
  {
    id: "rou-mo-niang-dou-fu-pao",
    name: "肉末酿豆腐泡",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["豆腐泡","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "豆腐泡",
        "amount": "10个"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "肉末加姜末生抽蚝油调馅",
      "豆腐泡切开一面把肉馅酿进去",
      "摆入盘中",
      "水开蒸12分钟",
      "蒸出的汤汁加淀粉勾芡浇上撒葱花"
    ],
    tips: "豆腐泡酿肉=客家酿菜的简化版",
    kidsFriendly: true,
    tags: ["粤式","酿菜","家常"],
  },
  // ======= 苏菜 =======
  {
    id: "song-ren-chao-yu-mi",
    name: "松仁玉米",
    category: "veggie",
    cuisine: "su",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["松仁","甜玉米","胡萝卜","豌豆"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "松仁",
        "amount": "30g"
      },
      {
        "name": "甜玉米粒",
        "amount": "200g"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "豌豆",
        "amount": "50g"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "松仁小火焙香盛出",
      "胡萝卜切小丁",
      "油热下玉米胡萝卜豌豆翻炒",
      "加盐糖调味",
      "撒松仁翻匀出锅"
    ],
    tips: "松仁最后放保持酥脆",
    kidsFriendly: true,
    tags: ["苏菜","清淡","孩子爱"],
  },
  // ======= 浙菜 =======
  {
    id: "rou-mo-zheng-dou-fu",
    name: "肉末蒸豆腐",
    category: "meat",
    cuisine: "zhe",
    difficulty: 1,
    cookingTime: 18,
    mainIngredients: ["嫩豆腐","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "嫩豆腐",
        "amount": "1盒"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "豆腐切片铺盘",
      "肉末加姜末生抽蚝油料酒炒熟",
      "铺在豆腐上",
      "水开蒸8分钟",
      "出锅淋香油撒葱花"
    ],
    tips: "蒸豆腐嫩滑入味，不煎不炒不上火",
    kidsFriendly: true,
    tags: ["浙菜","家常","蒸菜"],
  },
  // ======= 闽菜 =======
  {
    id: "hai-li-jian-dan",
    name: "海蛎煎蛋",
    category: "meat",
    cuisine: "min",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["海蛎","鸡蛋","红薯粉","葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "海蛎",
        "amount": "200g"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "红薯粉",
        "amount": "2勺"
      },
      {
        "name": "葱",
        "amount": "2根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      }
    ],
    steps: [
      "海蛎洗净控干",
      "鸡蛋打散加红薯粉糊盐胡椒粉葱花",
      "海蛎加入蛋糊拌匀",
      "平底锅多油烧热倒入摊平",
      "中火煎至两面金黄"
    ],
    tips: "海蛎煎蛋是海蛎煎的简化版",
    kidsFriendly: true,
    tags: ["闽南小吃","快手","海鲜"],
  },
  // ======= 徽菜 =======
  {
    id: "hui-shi-chao-gan-si",
    name: "徽式炒干丝",
    category: "veggie",
    cuisine: "hui",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["白豆干","青椒","生抽","蒜"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "白豆干",
        "amount": "3块"
      },
      {
        "name": "青椒",
        "amount": "2个"
      },
      {
        "name": "红椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "豆干片薄再切丝焯水30秒",
      "青红椒切丝",
      "油热下蒜末爆香",
      "下豆干丝和青红椒大火翻炒",
      "加生抽蚝油翻匀"
    ],
    tips: "豆干先焯水去掉豆腥味",
    kidsFriendly: false,
    tags: ["徽菜","素食","快手"],
  },
  // ======= 家常 =======
  {
    id: "cong-bao-rou-pian",
    name: "葱爆肉片",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["猪里脊","大葱","生抽","料酒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "200g"
      },
      {
        "name": "大葱",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊切片加料酒淀粉腌制",
      "大葱斜切圈",
      "油热下肉片滑炒至变色",
      "下大葱大火翻炒30秒",
      "加生抽盐翻匀出锅"
    ],
    tips: "大葱不能炒软要保留脆感",
    kidsFriendly: true,
    tags: ["快手","下饭","家常"],
  },
  {
    id: "qing-jiao-chao-mo-gu",
    name: "青椒炒蘑菇",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["蘑菇","青椒","蒜","盐"],
    emoji: "🌶️",
    allIngredients: [
      {
        "name": "蘑菇",
        "amount": "200g"
      },
      {
        "name": "青椒",
        "amount": "2个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "蘑菇切片青椒切块",
      "油热下蒜末蘑菇炒出水再收干",
      "下青椒大火翻炒",
      "加盐翻匀"
    ],
    tips: "蘑菇一定要炒到水分收干才香",
    kidsFriendly: true,
    tags: ["快手","素食","家常"],
  },
  {
    id: "ji-dan-chao-hu-gua",
    name: "鸡蛋炒苦瓜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["苦瓜","鸡蛋","盐","蒜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "苦瓜",
        "amount": "1根"
      },
      {
        "name": "鸡蛋",
        "amount": "3个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "苦瓜去瓤切片用盐腌10分钟挤去苦水",
      "鸡蛋打散炒熟盛出",
      "油热下蒜片苦瓜大火翻炒1分钟",
      "倒回鸡蛋加盐翻匀"
    ],
    tips: "苦瓜用盐腌过去苦水就不那么苦了",
    kidsFriendly: true,
    tags: ["快手","下火","夏季"],
  },
  {
    id: "rou-mo-yang-cong-chao-fan",
    name: "肉末洋葱炒饭",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["隔夜米饭","猪肉末","洋葱","鸡蛋"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "隔夜米饭",
        "amount": "2碗"
      },
      {
        "name": "猪肉末",
        "amount": "80g"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋炒散盛出",
      "油热下肉末煸香",
      "下洋葱炒软",
      "下米饭大火翻炒粒粒分明",
      "加生抽盐翻匀",
      "倒回鸡蛋撒葱花"
    ],
    tips: "洋葱炒软才有甜味",
    kidsFriendly: true,
    tags: ["快手","主食","家常"],
  },
  {
    id: "su-chao-san-si",
    name: "素炒三丝",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["土豆","胡萝卜","青椒","盐"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "胡萝卜",
        "amount": "半根"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "醋",
        "amount": "少许"
      }
    ],
    steps: [
      "三种蔬菜切丝",
      "土豆丝泡水去淀粉",
      "油热下蒜末爆香",
      "三种丝一起下锅大火快炒",
      "加生抽盐醋翻匀出锅"
    ],
    tips: "大火快炒保持脆嫩，醋沿锅边淋",
    kidsFriendly: true,
    tags: ["快手","素食","家常"],
  },
  {
    id: "xiang-jian-niang-dou-fu",
    name: "香煎酿豆腐",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["老豆腐","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜末",
        "amount": "少许"
      }
    ],
    steps: [
      "豆腐切厚三角片中间挖坑",
      "肉末加姜末调料调馅",
      "把肉馅酿入豆腐坑中",
      "平底锅油热肉面朝下煎至金黄",
      "翻面再煎",
      "加水生抽蚝油焖3分钟",
      "淀粉勾芡撒葱花"
    ],
    tips: "先煎后焖豆腐外焦里嫩",
    kidsFriendly: true,
    tags: ["家常","下饭","酿菜"],
  },
  {
    id: "qie-zhi-tu-dou-kuai",
    name: "茄汁土豆块",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["土豆","番茄酱","糖","盐"],
    emoji: "🥔",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "土豆切滚刀块油炸至金黄",
      "锅中少油下番茄酱糖水煮浓",
      "下土豆块翻匀裹上酱汁",
      "撒葱花"
    ],
    tips: "酸甜可口孩子最爱",
    kidsFriendly: true,
    tags: ["孩子爱","素食","快手"],
  },
  {
    id: "rou-zha-jiang-mian",
    name: "肉末炸酱面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["面条","猪肉末","黄豆酱","黄瓜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "200g"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "黄豆酱",
        "amount": "2勺"
      },
      {
        "name": "甜面酱",
        "amount": "1勺"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "豆芽",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "黄瓜切丝豆芽焯水",
      "油热下肉末煸至出油",
      "加姜末黄豆酱甜面酱",
      "小火炸5分钟不停搅动至油酱分离",
      "面条煮熟捞出码菜浇酱"
    ],
    tips: "炸酱要炸到油酱分离才够香",
    kidsFriendly: true,
    tags: ["北方","主食","经典"],
  },
  {
    id: "fan-qie-ji-dan-ge-da-tang-2",
    name: "番茄疙瘩汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["面粉","番茄","鸡蛋","青菜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "150g"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "面粉慢慢加水搅成小面疙瘩",
      "番茄切块炒出汁加水烧开",
      "下面疙瘩煮3分钟",
      "淋蛋液下青菜",
      "加盐香油葱花"
    ],
    tips: "面疙瘩大小不一最好吃",
    kidsFriendly: true,
    tags: ["快手","暖胃","家常"],
  },
  {
    id: "ji-dan-fu-rong-tang",
    name: "鸡蛋豆腐汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["嫩豆腐","鸡蛋","葱花","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "嫩豆腐",
        "amount": "1盒"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      }
    ],
    steps: [
      "豆腐切小块",
      "水烧开下豆腐",
      "淀粉水勾薄芡",
      "转小火淋蛋液",
      "加盐香油葱花"
    ],
    tips: "简简单单一碗汤",
    kidsFriendly: true,
    tags: ["快手","清淡","汤品"],
  },
  {
    id: "shao-bai-cai",
    name: "烧白菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["大白菜","生抽","蚝油","蒜"],
    emoji: "🦪",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "5片"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      }
    ],
    steps: [
      "白菜帮片薄片叶子撕块",
      "油热下蒜末爆香",
      "先下帮炒1分钟再下叶",
      "加生抽蚝油和水焖2分钟",
      "淀粉勾薄芡出锅"
    ],
    tips: "烧白菜=炒+焖，比炒的更入味",
    kidsFriendly: true,
    tags: ["家常","素食","清淡"],
  },
  {
    id: "hong-shao-ji-chi-gen",
    name: "红烧鸡翅根",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["鸡翅根","生抽","冰糖","八角"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡翅根",
        "amount": "8个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "翅根焯水",
      "油热下冰糖炒糖色",
      "下翅根翻炒上色",
      "加姜八角料酒生抽老抽和水",
      "中火炖15分钟收汁"
    ],
    tips: "翅根比鸡翅便宜肉更多",
    kidsFriendly: true,
    tags: ["下饭","家常","孩子爱"],
  },
  {
    id: "suan-rong-kao-jin-zhen-gu",
    name: "蒜蓉烤金针菇",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["金针菇","蒜","生抽","蚝油"],
    emoji: "🦪",
    allIngredients: [
      {
        "name": "金针菇",
        "amount": "1把"
      },
      {
        "name": "蒜",
        "amount": "一整头"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "辣椒粉",
        "amount": "适量"
      },
      {
        "name": "孜然粉",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "金针菇洗净铺在锡纸上",
      "蒜切末加生抽蚝油调成蒜蓉汁",
      "浇在金针菇上",
      "包好锡纸",
      "烤箱200°C烤12分钟",
      "撒葱花开吃"
    ],
    tips: "没有烤箱用平底锅也能做",
    kidsFriendly: true,
    tags: ["烧烤风味","素食","夜市"],
  },
  {
    id: "huang-gua-chao-pian",
    name: "黄瓜炒木耳",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["黄瓜","木耳","鸡蛋","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "木耳",
        "amount": "30g泡发"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "鸡蛋炒散盛出",
      "木耳焯水撕小朵黄瓜切片",
      "油热下蒜末木耳翻炒",
      "下黄瓜大火快炒30秒",
      "倒回鸡蛋加盐翻匀"
    ],
    tips: "木耳要提前泡发焯水",
    kidsFriendly: true,
    tags: ["快手","清淡","家常"],
  },
  {
    id: "rou-mo-zheng-ji-dan-juan",
    name: "肉末蒸蛋卷",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["鸡蛋","猪肉末","生抽","淀粉"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "4个"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散摊成薄蛋皮",
      "肉末加姜末生抽料酒调馅",
      "蛋皮铺平抹上肉馅",
      "卷紧",
      "水开蒸15分钟",
      "取出切段装盘"
    ],
    tips: "蛋卷切段摆盘很好看",
    kidsFriendly: true,
    tags: ["家常","宴客","精致"],
  },
  {
    id: "su-cai-tang",
    name: "素菜汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["番茄","土豆","白菜","盐"],
    emoji: "🍲",
    allIngredients: [
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "白菜",
        "amount": "2片"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "番茄土豆白菜切块",
      "水烧开加姜片和土豆煮5分钟",
      "加番茄白菜再煮3分钟",
      "加盐香油"
    ],
    tips: "冰箱剩菜一锅煮",
    kidsFriendly: true,
    tags: ["快手","素食","清冰箱"],
  },
  {
    id: "liu-dou-fu-tang",
    name: "溜豆腐汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["嫩豆腐","木耳","鸡蛋","淀粉"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "嫩豆腐",
        "amount": "半盒"
      },
      {
        "name": "木耳",
        "amount": "20g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "醋",
        "amount": "少许"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "豆腐切丝木耳切丝",
      "水烧开下豆腐丝木耳丝",
      "加盐醋白胡椒粉",
      "淀粉勾薄芡",
      "淋入蛋液",
      "加香油"
    ],
    tips: "木耳豆腐蛋花是经典搭配",
    kidsFriendly: true,
    tags: ["快手","清淡","汤品"],
  },
  {
    id: "liang-ban-fu-zhu",
    name: "凉拌腐竹",
    category: "cold",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["腐竹","黄瓜","蒜","醋"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "腐竹",
        "amount": "3根泡发"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "辣椒油",
        "amount": "适量"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "腐竹泡发切段焯水1分钟过凉水",
      "黄瓜拍碎切块",
      "蒜剁末",
      "所有材料加调料拌匀",
      "冷藏30分钟更入味"
    ],
    tips: "腐竹不要焯久了保持嚼劲",
    kidsFriendly: true,
    tags: ["凉菜","开胃","夏季"],
  },
  {
    id: "cong-hua-bing",
    name: "葱花饼",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["面粉","葱","油","盐"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "300g"
      },
      {
        "name": "葱",
        "amount": "5根"
      },
      {
        "name": "油",
        "amount": "3勺"
      },
      {
        "name": "盐",
        "amount": "1勺"
      },
      {
        "name": "五香粉",
        "amount": "少许"
      }
    ],
    steps: [
      "面粉一半开水一半冷水和成半烫面",
      "醒20分钟",
      "葱切花加油盐五香粉拌成葱油",
      "面团擀薄抹上葱油",
      "卷起盘成螺旋再擀薄",
      "平底锅中小火烙至两面金黄"
    ],
    tips: "半烫面做出的饼外酥里软",
    kidsFriendly: true,
    tags: ["北方","主食","早餐"],
  },
  {
    id: "ji-dan-geng-fan",
    name: "鸡蛋羹饭",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 18,
    mainIngredients: ["鸡蛋","米饭","温水","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "米饭",
        "amount": "1碗"
      },
      {
        "name": "温水",
        "amount": "1.5倍蛋液量"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "鸡蛋打散加温水盐搅匀过滤",
      "盖保鲜膜水开蒸8分钟",
      "蛋羹出锅铺在米饭上",
      "淋生抽香油撒葱花",
      "拌着吃"
    ],
    tips: "蛋羹拌饭是小时候的味道",
    kidsFriendly: true,
    tags: ["主食","孩子爱","经典"],
  },
  {
    id: "shou-gang-mian",
    name: "手擀面",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["面粉","鸡蛋","水","盐"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "300g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "水",
        "amount": "适量"
      },
      {
        "name": "盐",
        "amount": "少许"
      }
    ],
    steps: [
      "面粉加鸡蛋盐水和成硬面团",
      "醒面30分钟",
      "擀成薄面皮",
      "折叠起来切成面条",
      "抖散",
      "水开下面煮3分钟"
    ],
    tips: "手擀面比挂面劲道好吃",
    kidsFriendly: true,
    tags: ["主食","手工","传统"],
  },
  // ======= 甜品 =======
  {
    id: "xue-hua-su",
    name: "雪花酥",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["棉花糖","饼干","黄油","坚果"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "棉花糖",
        "amount": "150g"
      },
      {
        "name": "饼干",
        "amount": "150g"
      },
      {
        "name": "黄油",
        "amount": "40g"
      },
      {
        "name": "坚果",
        "amount": "50g"
      },
      {
        "name": "奶粉",
        "amount": "50g"
      },
      {
        "name": "蔓越莓干",
        "amount": "30g"
      }
    ],
    steps: [
      "黄油小火融化",
      "加入棉花糖搅拌至融化",
      "关火加奶粉拌匀",
      "加饼干坚果蔓越莓干",
      "倒入模具压实",
      "撒奶粉",
      "冷却切块"
    ],
    tips: "雪花酥=棉花糖+饼干+坚果",
    kidsFriendly: true,
    tags: ["甜品","零食","网红"],
  },
  {
    id: "huo-long-guo-gui-ling-gao",
    name: "火龙果龟苓膏",
    category: "dessert",
    cuisine: "dessert",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["龟苓膏粉","火龙果","蜂蜜","牛奶"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "龟苓膏粉",
        "amount": "20g"
      },
      {
        "name": "火龙果",
        "amount": "半个"
      },
      {
        "name": "蜂蜜",
        "amount": "适量"
      },
      {
        "name": "牛奶",
        "amount": "100ml"
      }
    ],
    steps: [
      "龟苓膏粉加冷水调开",
      "倒入沸水搅拌至浓稠",
      "倒入模具冷却凝固",
      "切块加火龙果丁",
      "淋蜂蜜和牛奶"
    ],
    tips: "清热降火",
    kidsFriendly: true,
    tags: ["甜品","夏季","降火"],
  },
  // ======= 川菜 =======
  {
    id: "ya-jia-li-ji",
    name: "牙签里脊",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["猪里脊","孜然粉","辣椒粉"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "300g"
      },
      {
        "name": "孜然粉",
        "amount": "1勺"
      },
      {
        "name": "辣椒粉",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      }
    ],
    steps: [
      "里脊切条加调料腌制20分钟",
      "用牙签串起来",
      "油温六成热下锅炸至金黄",
      "撒孜然粉辣椒粉芝麻"
    ],
    tips: "一根牙签一口肉",
    kidsFriendly: false,
    tags: ["川味小吃","下酒"],
  },
  {
    id: "la-zi-ji-gls",
    name: "歌乐山辣子鸡",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["鸡块","干辣椒","花椒","花生米"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡腿肉",
        "amount": "400g"
      },
      {
        "name": "干辣椒",
        "amount": "一大碗"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "花生米",
        "amount": "50g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      }
    ],
    steps: [
      "鸡肉切小丁加调料腌制",
      "油热炸至金黄",
      "锅中留底油下干辣椒花椒小火炒香",
      "下鸡丁大火翻炒",
      "加花生米翻匀"
    ],
    tips: "辣椒要比鸡肉多",
    kidsFriendly: false,
    tags: ["川菜经典","麻辣"],
  },
  // ======= 湘菜 =======
  {
    id: "du-jiao-zheng-yu",
    name: "剁椒蒸鱼",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["鱼","剁椒","姜","蒜"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鱼",
        "amount": "1条"
      },
      {
        "name": "剁椒",
        "amount": "3勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "蒸鱼豉油",
        "amount": "1勺"
      },
      {
        "name": "葱",
        "amount": "2根"
      }
    ],
    steps: [
      "鱼洗净划刀加料酒腌制",
      "剁椒和蒜末混合铺在鱼身上",
      "水开蒸10分钟",
      "倒掉盘中腥水淋蒸鱼豉油",
      "浇热油撒葱花"
    ],
    tips: "蒸鱼时间看鱼的大小",
    kidsFriendly: false,
    tags: ["湘菜","蒸菜"],
  },
  // ======= 鲁菜 =======
  {
    id: "tang-cu-xia-ren-lu",
    name: "糖醋虾仁",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 18,
    mainIngredients: ["虾仁","番茄酱","白醋","糖"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "300g"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "料酒",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "虾仁加料酒盐腌制",
      "裹蛋液再裹淀粉",
      "油炸至金黄",
      "调糖醋汁煮浓",
      "下虾仁翻匀"
    ],
    tips: "糖醋汁比例番茄酱2:醋1:糖1",
    kidsFriendly: false,
    tags: ["鲁菜","酸甜"],
  },
  // ======= 粤菜 =======
  {
    id: "zha-feng-zhao-yue",
    name: "炸凤爪",
    category: "meat",
    cuisine: "yue",
    difficulty: 3,
    cookingTime: 40,
    mainIngredients: ["鸡爪","老抽","蜂蜜","五香粉"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡爪",
        "amount": "500g"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "蜂蜜",
        "amount": "1勺"
      },
      {
        "name": "五香粉",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "鸡爪焯水加老抽蜂蜜上色晾干",
      "油炸至起泡",
      "冰水浸泡使其膨胀",
      "加调料和水焖20分钟"
    ],
    tips: "先炸后泡再焖，鸡爪松软起虎皮",
    kidsFriendly: false,
    tags: ["粤式茶楼","功夫菜"],
  },
  // ======= 苏菜 =======
  {
    id: "cu-pai-gu-su",
    name: "糖醋小排",
    category: "meat",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["排骨","冰糖","醋","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "排骨",
        "amount": "400g"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "醋",
        "amount": "2勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "1段"
      }
    ],
    steps: [
      "排骨焯水",
      "冰糖炒糖色下排骨翻炒",
      "加姜葱料酒生抽老抽和水",
      "小火炖25分钟",
      "加醋大火收汁"
    ],
    tips: "醋分两次放味道更有层次",
    kidsFriendly: false,
    tags: ["苏菜","经典","酸甜"],
  },
  // ======= 浙菜 =======
  {
    id: "ning-bo-tang-yuan-zhe",
    name: "宁波汤圆",
    category: "staple",
    cuisine: "zhe",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["糯米粉","黑芝麻","猪油","白糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "糯米粉",
        "amount": "200g"
      },
      {
        "name": "黑芝麻",
        "amount": "100g"
      },
      {
        "name": "猪油",
        "amount": "2勺"
      },
      {
        "name": "白糖",
        "amount": "50g"
      }
    ],
    steps: [
      "黑芝麻炒熟碾碎",
      "加猪油白糖拌成馅",
      "糯米粉加温水和成面团",
      "包入馅料搓圆",
      "水开下汤圆煮至浮起"
    ],
    tips: "黑芝麻馅要加油脂才流心",
    kidsFriendly: false,
    tags: ["浙江小吃","甜品","传统"],
  },
  // ======= 闽菜 =======
  {
    id: "fu-zhou-li-zhi-rou-min",
    name: "福州荔枝肉",
    category: "meat",
    cuisine: "min",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["猪里脊","土豆","番茄酱","白醋"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "250g"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "番茄酱",
        "amount": "2勺"
      },
      {
        "name": "白醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "适量"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "里脊切十字花刀再切块",
      "裹淀粉炸至金黄卷曲",
      "土豆切块炸熟",
      "调酸甜汁煮浓",
      "下肉和土豆翻匀"
    ],
    tips: "十字花刀让肉卷起来像荔枝",
    kidsFriendly: false,
    tags: ["闽菜名菜","酸甜"],
  },
  // ======= 徽菜 =======
  {
    id: "hui-shi-la-jiao-chao-rou-hui",
    name: "徽式辣椒炒肉",
    category: "meat",
    cuisine: "hui",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["五花肉","青椒","豆豉","蒜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "200g"
      },
      {
        "name": "青椒",
        "amount": "3个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "五花肉切薄片",
      "不放油下肉煸至出油",
      "加豆豉蒜片炒香",
      "下青椒大火翻炒",
      "加生抽老抽翻匀"
    ],
    tips: "重油重色是徽菜的特点",
    kidsFriendly: false,
    tags: ["徽菜","下饭"],
  },
  // ======= 家常 =======
  {
    id: "la-jiao-chao-la-chang",
    name: "辣椒炒腊肠",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["腊肠","尖椒","蒜","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肠",
        "amount": "2根"
      },
      {
        "name": "尖椒",
        "amount": "4个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      }
    ],
    steps: [
      "腊肠切片尖椒斜切",
      "少油下腊肠煸出油",
      "下蒜末尖椒大火翻炒",
      "加生抽翻匀"
    ],
    kidsFriendly: false,
    tags: ["快手","下饭"],
  },
  {
    id: "zha-cai-chao-rou-si",
    name: "榨菜炒肉丝",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["猪里脊","榨菜","青椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "150g"
      },
      {
        "name": "榨菜",
        "amount": "半包"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "里脊切丝加料酒淀粉腌制",
      "榨菜冲洗一下去咸味",
      "油热下肉丝滑炒至变色",
      "下蒜末榨菜青椒翻炒",
      "加生抽翻匀"
    ],
    tips: "榨菜有咸味基本不用加盐",
    kidsFriendly: false,
    tags: ["快手","下饭"],
  },
  {
    id: "gan-guo-tu-dou-pian-home",
    name: "干锅土豆片",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["土豆","五花肉","干辣椒","豆瓣酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "五花肉",
        "amount": "100g"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      }
    ],
    steps: [
      "土豆切片煎至两面金黄",
      "五花肉煸出油",
      "下豆瓣酱干辣椒蒜炒香",
      "下土豆和洋葱大火翻炒",
      "加生抽翻匀"
    ],
    tips: "土豆先煎过再炒外酥里糯",
    kidsFriendly: false,
    tags: ["下饭","干锅风味"],
  },
  {
    id: "cong-bao-niu-rou-home",
    name: "葱爆牛肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["牛肉","大葱","生抽","料酒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛肉",
        "amount": "250g"
      },
      {
        "name": "大葱",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "牛肉逆纹切薄片加料酒生抽淀粉腌制",
      "大葱斜切圈",
      "大火热油下牛肉滑炒至变色盛出",
      "下姜片大葱大火爆香",
      "倒回牛肉加蚝油翻匀出锅"
    ],
    tips: "全程大火，牛肉下锅到出锅不超过3分钟",
    kidsFriendly: false,
    tags: ["快手","下饭"],
  },
  {
    id: "xiang-gu-hua-cai-chao-rou-home",
    name: "香菇花菜炒肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["猪里脊","花菜","香菇","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "150g"
      },
      {
        "name": "花菜",
        "amount": "半棵"
      },
      {
        "name": "香菇",
        "amount": "4个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "花菜焯水香菇切片",
      "里脊切片加料酒淀粉腌制",
      "油热下肉片滑炒至变色",
      "下蒜末香菇花菜翻炒",
      "加生抽盐翻匀"
    ],
    tips: "花菜和香菇是绝配",
    kidsFriendly: false,
    tags: ["快手","家常","下饭"],
  },
  {
    id: "gui-lin-mi-fen-home",
    name: "桂林米粉",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["米粉","卤牛肉","酸豆角","花生"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "米粉",
        "amount": "200g"
      },
      {
        "name": "卤牛肉",
        "amount": "100g"
      },
      {
        "name": "酸豆角",
        "amount": "50g"
      },
      {
        "name": "花生碎",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "米粉泡软煮熟捞出",
      "卤牛肉切片",
      "碗中放米粉铺上牛肉酸豆角花生碎",
      "加生抽辣椒油蒜末葱花拌匀"
    ],
    tips: "卤水是灵魂",
    kidsFriendly: false,
    tags: ["地方小吃","主食"],
  },
  {
    id: "niu-rou-pao-mo-home",
    name: "牛肉泡馍",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["牛肉","饼","粉丝","木耳"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛肉",
        "amount": "300g"
      },
      {
        "name": "烙饼",
        "amount": "2个"
      },
      {
        "name": "粉丝",
        "amount": "1把"
      },
      {
        "name": "木耳",
        "amount": "30g"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1块"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "牛肉焯水加调料炖1小时至软烂",
      "饼掰成小块",
      "粉丝泡软木耳切丝",
      "牛肉汤烧开下饼块粉丝木耳煮3分钟",
      "盛碗加辣椒酱"
    ],
    tips: "掰馍越小越入味",
    kidsFriendly: false,
    tags: ["西北","主食","暖身"],
  },
  {
    id: "chao-la-tiao-home",
    name: "炒拉条",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["面粉","番茄","洋葱","青椒"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "300g"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "番茄酱",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "面粉加盐水和成硬面团醒30分钟",
      "擀开切粗条拉长",
      "水开下面煮至八分熟捞出",
      "油热下洋葱番茄青椒翻炒",
      "下入面加生抽番茄酱大火翻炒"
    ],
    tips: "面要活得硬一点拉出来的条才劲道",
    kidsFriendly: false,
    tags: ["西北","主食"],
  },
  {
    id: "suan-la-chao-zhu-gan-home",
    name: "酸辣炒猪肝",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 15,
    mainIngredients: ["猪肝","泡椒","蒜苗","豆瓣酱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪肝",
        "amount": "250g"
      },
      {
        "name": "泡椒",
        "amount": "5个"
      },
      {
        "name": "蒜苗",
        "amount": "2根"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "猪肝切薄片泡水去血水加料酒淀粉腌制",
      "大火热油下猪肝滑炒10秒至变色盛出",
      "下豆瓣酱泡椒姜蒜炒香",
      "倒回猪肝加生抽蒜苗大火翻炒10秒出锅"
    ],
    tips: "猪肝要大火快炒不能超过30秒",
    kidsFriendly: false,
    tags: ["下饭","快手","补血"],
  },
  {
    id: "su-chao-bing-home",
    name: "素炒饼",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["烙饼","圆白菜","鸡蛋","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "烙饼",
        "amount": "2张"
      },
      {
        "name": "圆白菜",
        "amount": "1/4个"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "烙饼切丝",
      "鸡蛋炒散盛出",
      "油热下蒜末圆白菜丝翻炒",
      "下饼丝大火翻炒",
      "加生抽盐",
      "倒回鸡蛋翻匀出锅"
    ],
    tips: "饼丝用隔夜的更好切",
    kidsFriendly: false,
    tags: ["北方","主食","快手"],
  },
  {
    id: "jian-jiao-chao-la-rou-home",
    name: "尖椒炒腊肉",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["腊肉","尖椒","蒜","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "腊肉",
        "amount": "200g"
      },
      {
        "name": "尖椒",
        "amount": "4个"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      }
    ],
    steps: [
      "腊肉煮过去咸切薄片",
      "少油下腊肉煸出油",
      "下蒜末尖椒大火翻炒",
      "加生抽翻匀出锅"
    ],
    tips: "腊肉本身有咸味少加盐",
    kidsFriendly: false,
    tags: ["快手","下饭"],
  },
  {
    id: "suan-la-fen-home",
    name: "酸辣粉",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["红薯粉条","花生碎","榨菜","辣椒油"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "红薯粉条",
        "amount": "150g"
      },
      {
        "name": "花生碎",
        "amount": "1勺"
      },
      {
        "name": "榨菜",
        "amount": "30g"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "花椒粉",
        "amount": "少许"
      },
      {
        "name": "香菜",
        "amount": "少许"
      }
    ],
    steps: [
      "粉条提前泡软煮熟",
      "碗底调酸辣汁：辣椒油+醋+生抽+蒜末+花椒粉",
      "粉条捞入碗中加汤",
      "撒花生碎榨菜葱花香菜"
    ],
    tips: "红薯粉条要提前泡4小时以上",
    kidsFriendly: false,
    tags: ["重庆小吃","酸辣","主食"],
  },
  {
    id: "huang-men-ji-home",
    name: "黄焖鸡",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 35,
    mainIngredients: ["鸡块","土豆","香菇","青椒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡块",
        "amount": "500g"
      },
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "香菇",
        "amount": "6个"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      }
    ],
    steps: [
      "鸡块焯水",
      "油热下冰糖炒糖色",
      "下鸡块翻炒上色",
      "加姜干辣椒料酒生抽老抽蚝油",
      "加足量热水下香菇",
      "中火炖20分钟",
      "下土豆再炖15分钟",
      "下青椒大火收汁"
    ],
    tips: "焖到汤汁浓稠拌饭最香",
    kidsFriendly: false,
    tags: ["下饭","经典"],
  },
  {
    id: "gan-bian-niu-rou-si-home",
    name: "干煸牛肉丝",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["牛肉","芹菜","干辣椒","花椒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛肉",
        "amount": "250g"
      },
      {
        "name": "芹菜",
        "amount": "3根"
      },
      {
        "name": "干辣椒",
        "amount": "10个"
      },
      {
        "name": "花椒",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "牛肉逆纹切丝加料酒生抽腌制",
      "芹菜切段",
      "锅中稍多油下牛肉丝中火煸至水分收干",
      "下干辣椒花椒姜丝炒香",
      "下芹菜大火翻炒",
      "加少许糖提鲜"
    ],
    tips: "牛肉丝要煸到水分完全收干才香",
    kidsFriendly: false,
    tags: ["下饭","干香","下酒"],
  },
  {
    id: "jiu-cai-chao-hua-jia",
    name: "韭菜炒花甲",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["花甲","韭菜","姜","蒜"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "花甲",
        "amount": "500g"
      },
      {
        "name": "韭菜",
        "amount": "100g"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "花甲吐沙洗净",
      "水烧开下花甲煮至开口捞出",
      "韭菜切段",
      "油热下姜蒜爆香",
      "下花甲翻炒",
      "加料酒生抽",
      "下韭菜大火翻炒30秒出锅"
    ],
    tips: "花甲要先吐沙2小时",
    kidsFriendly: false,
    tags: ["快手","海鲜","下酒"],
  },
  {
    id: "rou-mo-shao-dou-jiao-home",
    name: "肉末烧豆角",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["豆角","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "豆角",
        "amount": "300g"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "豆角去筋掰段焯水3分钟至熟",
      "油热下肉末煸香",
      "下蒜末加生抽蚝油料酒",
      "下豆角翻炒加水焖2分钟",
      "大火收汁"
    ],
    tips: "豆角一定要焯熟透",
    kidsFriendly: false,
    tags: ["下饭","家常"],
  },
  {
    id: "cu-bai-cai-home",
    name: "醋白菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["大白菜","醋","干辣椒","花椒"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "5片"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "半勺"
      },
      {
        "name": "干辣椒",
        "amount": "2个"
      },
      {
        "name": "花椒",
        "amount": "几粒"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "白菜帮片薄片叶子撕块",
      "油热下花椒干辣椒蒜末爆香",
      "先下帮炒1分钟再下叶",
      "大火快炒",
      "沿锅边淋醋加生抽糖翻匀"
    ],
    tips: "醋沿锅边淋入激出醋香",
    kidsFriendly: false,
    tags: ["快手","开胃"],
  },
  {
    id: "chao-san-ding-home",
    name: "炒三丁",
    category: "meat",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["鸡胸肉","土豆","黄瓜","生抽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡胸肉",
        "amount": "150g"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "黄瓜",
        "amount": "1根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "鸡胸肉土豆黄瓜切小丁",
      "鸡丁加料酒淀粉腌制",
      "土豆丁焯水",
      "油热下鸡丁滑炒至变色",
      "下蒜末土豆黄瓜翻炒",
      "加生抽盐翻匀"
    ],
    tips: "三种丁大小要差不多",
    kidsFriendly: false,
    tags: ["快手","家常"],
  },
  // ======= 川菜 =======
  {
    id: "jian-jiao-pi-dan-chuan",
    name: "尖椒皮蛋",
    category: "cold",
    cuisine: "chuan",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["皮蛋","尖椒","蒜","生抽"],
    emoji: "🍳",
    allIngredients: [
      {
        "name": "皮蛋",
        "amount": "3个"
      },
      {
        "name": "尖椒",
        "amount": "3个"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "尖椒火上烤焦剥皮切碎",
      "皮蛋剥壳切瓣装盘",
      "尖椒碎蒜末加生抽醋香油调汁",
      "浇在皮蛋上"
    ],
    tips: "烤尖椒有烟熏味",
    kidsFriendly: false,
    tags: ["川味凉菜","快手"],
  },
  // ======= 鲁菜 =======
  {
    id: "liu-rou-duan-lu",
    name: "溜肉段",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["猪里脊","青椒","淀粉","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "300g"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "红椒",
        "amount": "1个"
      },
      {
        "name": "淀粉",
        "amount": "大量"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "里脊切段加料酒盐腌制",
      "裹水淀粉糊",
      "油炸至金黄",
      "复炸30秒",
      "调芡汁加青红椒",
      "下肉段翻匀"
    ],
    tips: "外酥里嫩的代表",
    kidsFriendly: false,
    tags: ["鲁菜名菜","酥嫩"],
  },
  // ======= 粤菜 =======
  {
    id: "you-yu-chao-qin-cai-yue",
    name: "鱿鱼炒芹菜",
    category: "meat",
    cuisine: "yue",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["鱿鱼","芹菜","姜","料酒"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鱿鱼",
        "amount": "300g"
      },
      {
        "name": "芹菜",
        "amount": "3根"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "鱿鱼打花刀切块焯水30秒",
      "芹菜切段",
      "大火热油下姜蒜爆香",
      "下芹菜翻炒1分钟",
      "下鱿鱼加生抽料酒盐翻匀"
    ],
    tips: "鱿鱼焯水要短否则会老",
    kidsFriendly: false,
    tags: ["粤式","海鲜","快手"],
  },
  // ======= 苏菜 =======
  {
    id: "ji-zhi-fan-qie-su",
    name: "蜜汁番茄",
    category: "cold",
    cuisine: "su",
    difficulty: 1,
    cookingTime: 5,
    mainIngredients: ["番茄","蜂蜜","桂花"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "番茄",
        "amount": "2个"
      },
      {
        "name": "蜂蜜",
        "amount": "2勺"
      },
      {
        "name": "干桂花",
        "amount": "少许"
      }
    ],
    steps: [
      "番茄切块摆盘",
      "淋蜂蜜",
      "撒桂花",
      "冷藏30分钟"
    ],
    tips: "冰镇后更好吃",
    kidsFriendly: false,
    tags: ["苏式凉菜","夏季","快手"],
  },
  // ======= 徽菜 =======
  {
    id: "hui-shi-chao-mian-hui",
    name: "徽式炒面",
    category: "staple",
    cuisine: "hui",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["面条","五花肉","青菜","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "200g"
      },
      {
        "name": "五花肉",
        "amount": "100g"
      },
      {
        "name": "青菜",
        "amount": "2棵"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "面条煮至八分熟过凉水",
      "五花肉切丝煸出油",
      "下蒜末青菜翻炒",
      "下面条加调料大火翻炒"
    ],
    tips: "重油重色徽式炒面",
    kidsFriendly: false,
    tags: ["徽菜","主食"],
  },
  // ======= 其他 =======
  {
    id: "yan-ju-ji-chi-other",
    name: "盐焗鸡翅",
    category: "meat",
    cuisine: "other",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["鸡翅","粗盐","沙姜粉","料酒"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡翅",
        "amount": "8个"
      },
      {
        "name": "粗盐",
        "amount": "500g"
      },
      {
        "name": "沙姜粉",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "1段"
      }
    ],
    steps: [
      "鸡翅加沙姜粉料酒腌制30分钟",
      "用油纸包裹鸡翅",
      "粗盐炒热",
      "鸡翅埋入热盐中",
      "小火焗25分钟"
    ],
    tips: "盐焗让鸡肉保持鲜嫩多汁",
    kidsFriendly: false,
    tags: ["粤式","盐焗"],
  },
  // ======= 家常 =======
  {
    id: "kao-leng-mian-home",
    name: "烤冷面",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["冷面片","鸡蛋","火腿肠","洋葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "冷面片",
        "amount": "2张"
      },
      {
        "name": "鸡蛋",
        "amount": "2个"
      },
      {
        "name": "火腿肠",
        "amount": "2根"
      },
      {
        "name": "洋葱",
        "amount": "少许"
      },
      {
        "name": "甜面酱",
        "amount": "1勺"
      },
      {
        "name": "辣椒酱",
        "amount": "适量"
      },
      {
        "name": "醋",
        "amount": "少许"
      },
      {
        "name": "糖",
        "amount": "少许"
      }
    ],
    steps: [
      "平底锅油热放入冷面片",
      "打一个鸡蛋摊匀",
      "翻面抹甜面酱辣椒酱",
      "放火腿肠洋葱",
      "卷起来切段"
    ],
    tips: "烤冷面是东北街头小吃",
    kidsFriendly: false,
    tags: ["小吃","街头","快手"],
  },
  {
    id: "liang-ban-zhu-du-home",
    name: "凉拌猪肚",
    category: "cold",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["猪肚","蒜","辣椒油","香菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪肚",
        "amount": "1个"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "香菜",
        "amount": "少许"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      }
    ],
    steps: [
      "猪肚洗净加姜片料酒煮1小时至软烂",
      "捞出过冰水切丝",
      "加蒜末辣椒油生抽醋糖香油拌匀",
      "撒香菜"
    ],
    tips: "猪肚要洗干净煮到位",
    kidsFriendly: false,
    tags: ["凉菜","下酒"],
  },
  // ======= 鲁菜 =======
  {
    id: "hong-shao-niu-rou-mian-lu",
    name: "红烧牛肉面",
    category: "staple",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 45,
    mainIngredients: ["面条","牛腩","八角","番茄"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "面条",
        "amount": "200g"
      },
      {
        "name": "牛腩",
        "amount": "300g"
      },
      {
        "name": "番茄",
        "amount": "1个"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1块"
      },
      {
        "name": "陈皮",
        "amount": "1片"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      }
    ],
    steps: [
      "牛腩切块焯水",
      "油热下冰糖炒糖色加牛腩翻炒",
      "加姜葱八角桂皮陈皮料酒生抽老抽",
      "加足量热水番茄块炖1小时至软烂",
      "面条煮熟捞出浇牛肉汤"
    ],
    tips: "炖牛肉加一点陈皮去腥增香",
    kidsFriendly: false,
    tags: ["鲁菜面食","暖身"],
  },
  // ======= 粤菜 =======
  {
    id: "jian-yu-bing",
    name: "煎鱼饼",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 20,
    mainIngredients: ["鱼蓉","猪肉末","虾米","香菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "鱼蓉",
        "amount": "300g"
      },
      {
        "name": "猪肉末",
        "amount": "50g"
      },
      {
        "name": "虾米",
        "amount": "20g"
      },
      {
        "name": "香菜",
        "amount": "少许"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "所有材料混合搅打上劲",
      "团成小饼",
      "平底锅油热中小火煎至两面金黄"
    ],
    tips: "鱼饼要搅打上劲才弹牙",
    kidsFriendly: false,
    tags: ["粤式","小吃"],
  },
  // ======= 家常 =======
  {
    id: "suan-cai-chao-fen-si",
    name: "酸菜炒粉丝",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["酸菜","粉丝","干辣椒","蒜"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "酸菜",
        "amount": "200g"
      },
      {
        "name": "粉丝",
        "amount": "1把"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "生抽",
        "amount": "半勺"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "粉丝泡软剪短",
      "酸菜切丝",
      "油热下干辣椒蒜末酸菜炒香",
      "下粉丝翻炒",
      "加生抽翻匀"
    ],
    tips: "酸菜自带的咸酸味就够不用加盐",
    kidsFriendly: false,
    tags: ["快手","下饭"],
  },
  // ======= 川菜 =======
  {
    id: "shui-zhu-yu",
    name: "水煮鱼",
    category: "meat",
    cuisine: "chuan",
    difficulty: 3,
    cookingTime: 30,
    mainIngredients: ["草鱼","豆芽","干辣椒","花椒"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "草鱼",
        "amount": "1条"
      },
      {
        "name": "豆芽",
        "amount": "200g"
      },
      {
        "name": "干辣椒",
        "amount": "一大把"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1.5勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "蛋清",
        "amount": "1个"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "5瓣"
      },
      {
        "name": "葱",
        "amount": "2段"
      }
    ],
    steps: [
      "鱼片成薄片加料酒蛋清淀粉腌制",
      "豆芽焯水铺大碗底",
      "油热下豆瓣酱炒红油加姜蒜葱",
      "加水烧开下鱼片滑散煮1分钟",
      "连汤倒在豆芽上",
      "撒干辣椒花椒",
      "浇滚油激香"
    ],
    tips: "鱼片要薄，最后浇热油是灵魂",
    kidsFriendly: false,
    tags: ["川菜名菜","麻辣","宴客"],
  },
  {
    id: "mao-xue-wang",
    name: "毛血旺",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["鸭血","午餐肉","毛肚","豆芽"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸭血",
        "amount": "1盒"
      },
      {
        "name": "午餐肉",
        "amount": "半罐"
      },
      {
        "name": "毛肚",
        "amount": "150g"
      },
      {
        "name": "豆芽",
        "amount": "200g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1.5勺"
      },
      {
        "name": "干辣椒",
        "amount": "15个"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "5瓣"
      }
    ],
    steps: [
      "鸭血午餐肉切片毛肚洗净",
      "油热下豆瓣酱炒红油",
      "加姜蒜干辣椒花椒",
      "加水烧开下鸭血午餐肉煮3分钟",
      "下毛肚烫10秒立刻出锅",
      "浇滚油"
    ],
    tips: "毛肚烫10秒就够煮久了咬不动",
    kidsFriendly: false,
    tags: ["川菜","麻辣","重口味"],
  },
  {
    id: "fen-zheng-rou",
    name: "粉蒸肉",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 60,
    mainIngredients: ["五花肉","蒸肉粉","土豆","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "400g"
      },
      {
        "name": "蒸肉粉",
        "amount": "100g"
      },
      {
        "name": "土豆",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "腐乳汁",
        "amount": "半勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "葱",
        "amount": "2段"
      }
    ],
    steps: [
      "五花肉切厚片加调料腌制30分钟",
      "裹上蒸肉粉",
      "土豆切片铺碗底",
      "肉片码在土豆上",
      "上锅蒸50分钟",
      "倒扣装盘"
    ],
    tips: "加腐乳汁是粉蒸肉的秘诀",
    kidsFriendly: false,
    tags: ["川菜","蒸菜","经典"],
  },
  {
    id: "ban-li-shao-ji",
    name: "板栗烧鸡",
    category: "meat",
    cuisine: "chuan",
    difficulty: 2,
    cookingTime: 40,
    mainIngredients: ["鸡块","板栗","生抽","冰糖"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡块",
        "amount": "400g"
      },
      {
        "name": "板栗",
        "amount": "200g"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "冰糖",
        "amount": "15g"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "2段"
      }
    ],
    steps: [
      "板栗去皮焯水",
      "鸡块焯水",
      "油热下冰糖炒糖色",
      "下鸡块翻炒上色",
      "加姜葱料酒生抽老抽和水",
      "下板栗中火炖25分钟收汁"
    ],
    tips: "板栗选去壳冷冻的更方便",
    kidsFriendly: false,
    tags: ["川式","下饭","秋季"],
  },
  // ======= 湘菜 =======
  {
    id: "mao-shi-hong-shao-rou",
    name: "毛氏红烧肉",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 80,
    mainIngredients: ["五花肉","冰糖","干辣椒","料酒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "五花肉",
        "amount": "500g"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "干辣椒",
        "amount": "5个"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1块"
      },
      {
        "name": "料酒",
        "amount": "3勺"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      }
    ],
    steps: [
      "五花肉切块焯水",
      "炒糖色下五花肉翻炒",
      "加姜葱干辣椒八角桂皮料酒生抽",
      "加足量热水大火烧开转小火炖1小时",
      "大火收汁"
    ],
    tips: "毛氏红烧肉不用酱油只用糖色",
    kidsFriendly: false,
    tags: ["湘菜名菜","经典","宴客"],
  },
  {
    id: "pi-jiu-ya",
    name: "啤酒鸭",
    category: "meat",
    cuisine: "xiang",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["鸭子","啤酒","干辣椒","八角"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸭子",
        "amount": "半只"
      },
      {
        "name": "啤酒",
        "amount": "1罐"
      },
      {
        "name": "干辣椒",
        "amount": "8个"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "桂皮",
        "amount": "1块"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "蒜",
        "amount": "5瓣"
      }
    ],
    steps: [
      "鸭块焯水",
      "油热下鸭块煸至表面金黄",
      "下姜蒜干辣椒八角桂皮炒香",
      "加生抽老抽料酒",
      "倒整罐啤酒",
      "大火烧开转小火炖40分钟收汁"
    ],
    tips: "啤酒代替水去腥增香",
    kidsFriendly: false,
    tags: ["湘味","下饭","啤酒香"],
  },
  // ======= 鲁菜 =======
  {
    id: "guo-bao-rou",
    name: "锅包肉",
    category: "meat",
    cuisine: "lu",
    difficulty: 3,
    cookingTime: 25,
    mainIngredients: ["猪里脊","淀粉","白醋","糖"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "300g"
      },
      {
        "name": "土豆淀粉",
        "amount": "大量"
      },
      {
        "name": "白醋",
        "amount": "2勺"
      },
      {
        "name": "糖",
        "amount": "2勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "3片"
      },
      {
        "name": "胡萝卜",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "里脊切厚片加料酒腌制",
      "土豆淀粉加水沉淀成湿淀粉裹肉片",
      "油温六成热炸至定型捞出",
      "油温升高复炸至金黄",
      "调糖醋汁加姜丝胡萝卜丝煮浓",
      "下肉片快速翻匀"
    ],
    tips: "锅包肉=外酥里嫩的极致",
    kidsFriendly: false,
    tags: ["东北名菜","酸甜酥脆","功夫菜"],
  },
  {
    id: "jing-jiang-rou-si",
    name: "京酱肉丝",
    category: "meat",
    cuisine: "lu",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["猪里脊","甜面酱","大葱","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪里脊",
        "amount": "250g"
      },
      {
        "name": "甜面酱",
        "amount": "1.5勺"
      },
      {
        "name": "大葱",
        "amount": "2根"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "豆腐皮",
        "amount": "几张"
      }
    ],
    steps: [
      "里脊切丝加料酒淀粉腌制",
      "大葱切丝铺盘底",
      "油热下肉丝滑炒至变色",
      "加甜面酱生抽糖和水",
      "大火翻炒至酱裹住肉丝",
      "铺在葱丝上",
      "配豆腐皮卷着吃"
    ],
    tips: "甜面酱要炒到裹住肉丝不散",
    kidsFriendly: false,
    tags: ["鲁菜","经典","宴客"],
  },
  {
    id: "xiao-ji-dun-mo-gu",
    name: "小鸡炖蘑菇",
    category: "meat",
    cuisine: "lu",
    difficulty: 2,
    cookingTime: 50,
    mainIngredients: ["鸡块","榛蘑","粉条","八角"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡块",
        "amount": "500g"
      },
      {
        "name": "榛蘑",
        "amount": "50g泡发"
      },
      {
        "name": "红薯粉条",
        "amount": "100g"
      },
      {
        "name": "八角",
        "amount": "2个"
      },
      {
        "name": "生抽",
        "amount": "2勺"
      },
      {
        "name": "老抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      }
    ],
    steps: [
      "榛蘑提前泡发粉条泡软",
      "鸡块焯水",
      "油热下鸡块煸至表面金黄",
      "加姜八角料酒生抽老抽",
      "加足量热水和榛蘑",
      "大火烧开转小火炖30分钟",
      "下粉条再炖10分钟收汁"
    ],
    tips: "榛蘑要提前泡发2小时",
    kidsFriendly: false,
    tags: ["东北名菜","暖身","经典"],
  },
  // ======= 粤菜 =======
  {
    id: "ke-jia-niang-dou-fu",
    name: "客家酿豆腐",
    category: "meat",
    cuisine: "yue",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["老豆腐","猪肉末","生抽","蚝油"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "猪肉末",
        "amount": "150g"
      },
      {
        "name": "虾米",
        "amount": "20g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "姜",
        "amount": "2片"
      }
    ],
    steps: [
      "豆腐切厚三角片中间挖坑",
      "肉末加虾米姜末调料调馅",
      "把肉馅酿入豆腐坑中",
      "平底锅肉面朝下煎至金黄",
      "翻面加水生抽蚝油焖5分钟",
      "淀粉勾芡撒葱花"
    ],
    tips: "客家人的招牌菜",
    kidsFriendly: false,
    tags: ["粤菜","客家","酿菜"],
  },
  // ======= 苏菜 =======
  {
    id: "shui-jing-xia-ren-su",
    name: "水晶虾仁",
    category: "meat",
    cuisine: "su",
    difficulty: 2,
    cookingTime: 12,
    mainIngredients: ["虾仁","青豆","蛋清","淀粉"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "虾仁",
        "amount": "250g"
      },
      {
        "name": "青豆",
        "amount": "30g"
      },
      {
        "name": "蛋清",
        "amount": "半个"
      },
      {
        "name": "淀粉",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "虾仁加料酒蛋清淀粉上浆",
      "油温四成热下虾仁滑至变白",
      "下青豆翻炒",
      "加盐调味出锅"
    ],
    tips: "虾仁晶莹剔透是淮扬功夫",
    kidsFriendly: true,
    tags: ["淮扬菜","清淡","宴客"],
  },
  {
    id: "qing-zheng-da-zha-xie",
    name: "清蒸大闸蟹",
    category: "meat",
    cuisine: "su",
    difficulty: 1,
    cookingTime: 20,
    mainIngredients: ["大闸蟹","姜","醋","紫苏"],
    emoji: "🦐",
    allIngredients: [
      {
        "name": "大闸蟹",
        "amount": "4只"
      },
      {
        "name": "姜",
        "amount": "大量"
      },
      {
        "name": "醋",
        "amount": "3勺"
      },
      {
        "name": "紫苏",
        "amount": "几片"
      }
    ],
    steps: [
      "蟹刷洗干净",
      "蒸锅水加紫苏和料酒",
      "蟹肚朝上放姜片",
      "大火蒸15分钟",
      "姜切末加醋调蘸料"
    ],
    tips: "肚朝上蒸蟹黄不流失",
    kidsFriendly: true,
    tags: ["苏式","秋季","宴客"],
  },
  // ======= 浙菜 =======
  {
    id: "jiao-bai-chao-rou-si",
    name: "茭白炒肉丝",
    category: "meat",
    cuisine: "zhe",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["茭白","猪里脊","青椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "茭白",
        "amount": "3根"
      },
      {
        "name": "猪里脊",
        "amount": "150g"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      }
    ],
    steps: [
      "茭白去皮切丝",
      "里脊切丝加料酒淀粉腌制",
      "油热下肉丝滑炒至变色",
      "下蒜末茭白青椒大火翻炒",
      "加生抽盐翻匀"
    ],
    tips: "茭白是江南水八仙之一",
    kidsFriendly: false,
    tags: ["浙菜","时令","快手"],
  },
  // ======= 家常 =======
  {
    id: "hong-shao-dong-gua",
    name: "红烧冬瓜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["冬瓜","生抽","冰糖","蒜"],
    emoji: "🍰",
    allIngredients: [
      {
        "name": "冬瓜",
        "amount": "500g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "老抽",
        "amount": "半勺"
      },
      {
        "name": "冰糖",
        "amount": "10g"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "葱",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "冬瓜去皮切厚块",
      "油热下冰糖炒糖色（小火）",
      "下冬瓜翻炒上色",
      "加蒜生抽老抽和半碗水",
      "中火焖8分钟至冬瓜透明",
      "大火收汁撒葱花"
    ],
    tips: "冬瓜焖到透明才入味",
    kidsFriendly: true,
    tags: ["素食","下饭","家常"],
  },
  {
    id: "chang-jian-dou-fu",
    name: "家常豆腐",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["老豆腐","木耳","青椒","生抽"],
    emoji: "🫘",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "木耳",
        "amount": "30g泡发"
      },
      {
        "name": "青椒",
        "amount": "1个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "豆腐切三角片煎至两面金黄",
      "木耳撕小朵青椒切块",
      "油热下蒜末木耳青椒翻炒",
      "下豆腐加生抽蚝油和少许水焖2分钟"
    ],
    tips: "豆腐先煎再烧外焦里嫩",
    kidsFriendly: true,
    tags: ["家常","素食","下饭"],
  },
  {
    id: "bai-cai-dun-dou-fu",
    name: "白菜炖豆腐",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["大白菜","豆腐","五花肉","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "半棵"
      },
      {
        "name": "豆腐",
        "amount": "1块"
      },
      {
        "name": "五花肉",
        "amount": "100g"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "八角",
        "amount": "1个"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "五花肉切片煸出油",
      "下姜片八角炒香",
      "下白菜帮翻炒1分钟",
      "下白菜叶和豆腐",
      "加水炖10分钟",
      "加生抽盐调味"
    ],
    tips: "白菜炖烂了比肉还香",
    kidsFriendly: true,
    tags: ["北方家常","暖身","一锅出"],
  },
  {
    id: "gan-bian-cai-hua",
    name: "干煸菜花",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["花菜","五花肉","干辣椒","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "花菜",
        "amount": "半棵"
      },
      {
        "name": "五花肉",
        "amount": "100g"
      },
      {
        "name": "干辣椒",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      }
    ],
    steps: [
      "花菜掰小朵焯水1分钟控干",
      "五花肉切薄片",
      "不放油下五花肉煸出油",
      "下干辣椒蒜末花菜大火翻炒",
      "加生抽蚝油翻匀",
      "炒到花菜表面微焦"
    ],
    tips: "花菜要炒出焦香才有干锅味道",
    kidsFriendly: true,
    tags: ["下饭","家常","快手"],
  },
  {
    id: "zi-ran-tu-dou",
    name: "孜然土豆",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["土豆","孜然粉","辣椒粉","盐"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "土豆",
        "amount": "2个"
      },
      {
        "name": "孜然粉",
        "amount": "1勺"
      },
      {
        "name": "辣椒粉",
        "amount": "半勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "土豆切小块焯水3分钟捞出",
      "油热下土豆煎至表面金黄",
      "撒孜然粉辣椒粉盐翻匀",
      "撒葱花出锅"
    ],
    tips: "土豆先焯再煎外酥里糯",
    kidsFriendly: true,
    tags: ["小吃","烧烤风味","快手"],
  },
  {
    id: "dou-chi-hu-pi-qing-jiao",
    name: "豆豉虎皮青椒",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["青椒","豆豉","蒜","生抽"],
    emoji: "🌶️",
    allIngredients: [
      {
        "name": "青椒",
        "amount": "6个"
      },
      {
        "name": "豆豉",
        "amount": "1小勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "半勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "青椒拍扁",
      "锅中不放油下青椒干煸至表皮焦黑起皱",
      "推青椒到一边加油下豆豉蒜末炒香",
      "加生抽醋糖翻匀"
    ],
    tips: "青椒要煸到虎皮状才够香",
    kidsFriendly: true,
    tags: ["下饭","素食","快手"],
  },
  {
    id: "duo-jiao-bai-cai",
    name: "剁椒白菜",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["大白菜","剁椒","蒜","生抽"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "大白菜",
        "amount": "5片"
      },
      {
        "name": "剁椒",
        "amount": "1勺"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "白菜帮片薄片叶子撕块",
      "油热下蒜末剁椒炒香",
      "先下帮炒1分钟再下叶",
      "大火快炒加生抽翻匀"
    ],
    tips: "加剁椒让白菜更有味",
    kidsFriendly: true,
    tags: ["快手","开胃","家常"],
  },
  {
    id: "xiang-gu-dou-fu",
    name: "香菇烧豆腐",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["老豆腐","香菇","蚝油","生抽"],
    emoji: "🦪",
    allIngredients: [
      {
        "name": "老豆腐",
        "amount": "1块"
      },
      {
        "name": "香菇",
        "amount": "6个"
      },
      {
        "name": "蚝油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "淀粉",
        "amount": "半勺"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "少许"
      }
    ],
    steps: [
      "豆腐切厚片煎至两面金黄",
      "香菇切片",
      "油热下蒜末香菇炒香",
      "加蚝油生抽糖和水",
      "下豆腐中火焖3分钟",
      "淀粉勾芡撒葱花"
    ],
    tips: "香菇入味的豆腐比肉还香",
    kidsFriendly: true,
    tags: ["素食","下饭","家常"],
  },
  {
    id: "qing-chao-wo-sun-pian",
    name: "清炒莴笋片",
    category: "veggie",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 6,
    mainIngredients: ["莴笋","蒜","盐"],
    emoji: "🎋",
    allIngredients: [
      {
        "name": "莴笋",
        "amount": "1根"
      },
      {
        "name": "蒜",
        "amount": "3瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    steps: [
      "莴笋去皮切薄片",
      "蒜切末",
      "油热下蒜末爆香",
      "下莴笋片大火快炒1分钟",
      "加盐立刻出锅"
    ],
    tips: "莴笋要大火快炒保持脆嫩",
    kidsFriendly: true,
    tags: ["快手","清淡","春季"],
  },
  {
    id: "gui-hua-tang-ou",
    name: "桂花糖藕",
    category: "dessert",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 50,
    mainIngredients: ["莲藕","糯米","红糖","桂花"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "莲藕",
        "amount": "2节"
      },
      {
        "name": "糯米",
        "amount": "100g"
      },
      {
        "name": "红糖",
        "amount": "100g"
      },
      {
        "name": "干桂花",
        "amount": "少许"
      },
      {
        "name": "牙签",
        "amount": "几根"
      }
    ],
    steps: [
      "糯米泡2小时",
      "莲藕去皮切掉一头",
      "糯米塞进藕孔用筷子压实",
      "牙签固定",
      "加水红糖煮1小时至藕变红",
      "切片淋汤汁撒桂花"
    ],
    tips: "塞糯米要有耐心",
    kidsFriendly: true,
    tags: ["江南小吃","甜品","传统"],
  },
  {
    id: "ji-yu-dou-fu-tang",
    name: "鲫鱼豆腐汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 25,
    mainIngredients: ["鲫鱼","豆腐","姜","料酒"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "鲫鱼",
        "amount": "2条"
      },
      {
        "name": "豆腐",
        "amount": "1块"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "白胡椒粉",
        "amount": "少许"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "鲫鱼去鳞洗净控干",
      "油热下鲫鱼煎至两面金黄",
      "加开水（一定要开水）",
      "加姜片料酒煮10分钟至汤变白",
      "下豆腐块煮5分钟",
      "加盐白胡椒粉葱花"
    ],
    tips: "加开水是汤变白的关键",
    kidsFriendly: true,
    tags: ["汤品","奶白","鲜香"],
  },
  {
    id: "zha-cai-rou-si-tang",
    name: "榨菜肉丝汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 8,
    mainIngredients: ["榨菜","猪里脊","鸡蛋","葱"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "榨菜",
        "amount": "半包"
      },
      {
        "name": "猪里脊",
        "amount": "100g"
      },
      {
        "name": "鸡蛋",
        "amount": "1个"
      },
      {
        "name": "葱",
        "amount": "1根"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "淀粉",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "里脊切丝加淀粉腌制",
      "水烧开下榨菜煮1分钟",
      "下肉丝滑散煮至变色",
      "淋入蛋液",
      "加盐香油葱花"
    ],
    tips: "榨菜本身有咸味盐要少放",
    kidsFriendly: true,
    tags: ["快手","汤品","家常"],
  },
  {
    id: "bo-cai-zhu-gan-tang",
    name: "菠菜猪肝汤",
    category: "soup",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 15,
    mainIngredients: ["猪肝","菠菜","姜","料酒"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪肝",
        "amount": "200g"
      },
      {
        "name": "菠菜",
        "amount": "1把"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "枸杞",
        "amount": "10粒"
      }
    ],
    steps: [
      "猪肝切薄片反复泡水去血水",
      "菠菜焯水10秒去草酸",
      "水烧开加姜片下猪肝煮30秒至变色",
      "下菠菜和枸杞",
      "加盐香油立刻关火"
    ],
    tips: "猪肝不能久煮否则老了",
    kidsFriendly: true,
    tags: ["汤品","补血","快手"],
  },
  {
    id: "wu-xiang-niu-rou",
    name: "酱牛肉",
    category: "cold",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 120,
    mainIngredients: ["牛腱子","生抽","老抽","香料包"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "牛腱子",
        "amount": "500g"
      },
      {
        "name": "生抽",
        "amount": "3勺"
      },
      {
        "name": "老抽",
        "amount": "2勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "冰糖",
        "amount": "20g"
      },
      {
        "name": "香料包(八角桂皮香叶花椒)",
        "amount": "1包"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    steps: [
      "牛腱子冷水泡2小时去血水",
      "加所有调料和没过牛肉的水",
      "大火烧开撇浮沫",
      "转小火卤1.5小时",
      "筷子轻松扎透即可",
      "关火浸泡2小时入味",
      "捞出冷藏后切薄片"
    ],
    tips: "冷藏后切才能切出薄片",
    kidsFriendly: true,
    tags: ["凉菜","下酒","宴客"],
  },
  {
    id: "si-chuan-pao-cai",
    name: "四川泡菜",
    category: "cold",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 300,
    mainIngredients: ["白萝卜","胡萝卜","包菜","泡椒"],
    emoji: "🥬",
    allIngredients: [
      {
        "name": "白萝卜",
        "amount": "1根"
      },
      {
        "name": "胡萝卜",
        "amount": "1根"
      },
      {
        "name": "包菜",
        "amount": "1/4个"
      },
      {
        "name": "泡椒",
        "amount": "10个"
      },
      {
        "name": "泡椒水",
        "amount": "半碗"
      },
      {
        "name": "盐",
        "amount": "3勺"
      },
      {
        "name": "花椒",
        "amount": "1勺"
      },
      {
        "name": "凉白开",
        "amount": "适量"
      },
      {
        "name": "白酒",
        "amount": "1勺"
      }
    ],
    steps: [
      "蔬菜洗净切块晾干",
      "玻璃坛子消毒",
      "盐用凉白开化开",
      "所有材料入坛加泡椒水花椒白酒",
      "水没过蔬菜",
      "密封阴凉处放置3-5天"
    ],
    tips: "全程不能沾生水和油",
    kidsFriendly: true,
    tags: ["川味泡菜","开胃","传统"],
  },
  {
    id: "yan-shui-ji",
    name: "盐水鸡",
    category: "cold",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 60,
    mainIngredients: ["鸡","花椒盐","料酒","姜"],
    emoji: "🍗",
    allIngredients: [
      {
        "name": "鸡",
        "amount": "1只"
      },
      {
        "name": "花椒盐",
        "amount": "3勺"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "葱",
        "amount": "3段"
      }
    ],
    steps: [
      "鸡处理干净控干",
      "花椒和盐干锅炒出香味",
      "用花椒盐抹匀鸡身冷藏腌制4小时",
      "大锅水加姜葱料酒烧开",
      "放入鸡大火烧开转小火煮30分钟",
      "关火焖20分钟",
      "捞出晾凉斩件"
    ],
    tips: "煮后用冰水过一下皮更脆",
    kidsFriendly: true,
    tags: ["凉菜","经典","宴客"],
  },
  {
    id: "liang-ban-zhu-er-duo",
    name: "凉拌猪耳朵",
    category: "cold",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["猪耳朵","蒜","辣椒油","香菜"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪耳朵",
        "amount": "1个"
      },
      {
        "name": "蒜",
        "amount": "4瓣"
      },
      {
        "name": "辣椒油",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "醋",
        "amount": "1勺"
      },
      {
        "name": "糖",
        "amount": "少许"
      },
      {
        "name": "香菜",
        "amount": "少许"
      },
      {
        "name": "姜",
        "amount": "5片"
      },
      {
        "name": "料酒",
        "amount": "2勺"
      }
    ],
    steps: [
      "猪耳朵加姜片料酒煮40分钟至软",
      "捞出过冰水切细丝",
      "加蒜末辣椒油生抽醋糖拌匀",
      "撒香菜"
    ],
    tips: "过冰水让耳丝更脆",
    kidsFriendly: true,
    tags: ["凉菜","下酒","经典"],
  },
  {
    id: "lv-dou-zhou",
    name: "绿豆粥",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 45,
    mainIngredients: ["绿豆","大米","冰糖"],
    emoji: "🍚",
    allIngredients: [
      {
        "name": "绿豆",
        "amount": "100g"
      },
      {
        "name": "大米",
        "amount": "50g"
      },
      {
        "name": "冰糖",
        "amount": "适量"
      },
      {
        "name": "水",
        "amount": "2L"
      }
    ],
    steps: [
      "绿豆提前泡2小时",
      "大米淘洗",
      "一起入锅加水",
      "大火烧开转小火熬40分钟",
      "加冰糖搅匀"
    ],
    tips: "夏天冰镇喝解暑",
    kidsFriendly: true,
    tags: ["粥品","夏季","解暑"],
  },
  {
    id: "ma-yi-shang-shu",
    name: "蚂蚁上树",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 12,
    mainIngredients: ["粉丝","猪肉末","郫县豆瓣酱","葱"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "粉丝",
        "amount": "2把"
      },
      {
        "name": "猪肉末",
        "amount": "100g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1勺"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜",
        "amount": "2片"
      },
      {
        "name": "蒜",
        "amount": "2瓣"
      },
      {
        "name": "葱",
        "amount": "2根"
      }
    ],
    steps: [
      "粉丝温水泡软剪短",
      "油热下肉末煸至酥香",
      "下豆瓣酱姜蒜炒红油",
      "加生抽料酒和水",
      "下粉丝大火翻炒至汤汁收干",
      "撒大量葱花"
    ],
    tips: "肉末像蚂蚁粉丝像树枝",
    kidsFriendly: true,
    tags: ["快手","主食","下饭"],
  },
  {
    id: "shou-zhua-bing",
    name: "手抓饼",
    category: "staple",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 25,
    mainIngredients: ["面粉","葱","油","盐"],
    emoji: "🍜",
    allIngredients: [
      {
        "name": "面粉",
        "amount": "300g"
      },
      {
        "name": "葱",
        "amount": "5根"
      },
      {
        "name": "油",
        "amount": "3勺"
      },
      {
        "name": "盐",
        "amount": "1勺"
      }
    ],
    steps: [
      "面粉一半开水一半冷水和成半烫面醒30分钟",
      "葱切花加油盐调成葱油",
      "面团擀薄抹葱油",
      "像扇子一样折起来",
      "卷成螺旋状压扁擀薄",
      "平底锅中小火烙至两面金黄",
      "用铲子从两边往中间推打出层次"
    ],
    tips: "推打出层次是关键",
    kidsFriendly: true,
    tags: ["北方","早餐","主食"],
  },
  {
    id: "yu-song-ban-fan",
    name: "鱼松拌饭",
    category: "staple",
    cuisine: "home",
    difficulty: 1,
    cookingTime: 10,
    mainIngredients: ["米饭","鱼松","芝麻","海苔碎"],
    emoji: "🐟",
    allIngredients: [
      {
        "name": "热米饭",
        "amount": "1碗"
      },
      {
        "name": "鱼松",
        "amount": "2勺"
      },
      {
        "name": "白芝麻",
        "amount": "少许"
      },
      {
        "name": "海苔碎",
        "amount": "少许"
      },
      {
        "name": "酱油",
        "amount": "几滴"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    steps: [
      "热米饭盛碗",
      "铺上鱼松海苔碎芝麻",
      "滴几滴酱油和香油",
      "拌匀开吃"
    ],
    tips: "最简单的儿童快手餐",
    kidsFriendly: true,
    tags: ["孩子爱","快手","主食"],
  },
  {
    id: "zhen-zhu-wan-zi",
    name: "珍珠丸子",
    category: "meat",
    cuisine: "home",
    difficulty: 2,
    cookingTime: 30,
    mainIngredients: ["猪肉末","糯米","荸荠","生抽"],
    emoji: "🥩",
    allIngredients: [
      {
        "name": "猪肉末",
        "amount": "250g"
      },
      {
        "name": "糯米",
        "amount": "100g提前泡4小时"
      },
      {
        "name": "荸荠",
        "amount": "3个"
      },
      {
        "name": "生抽",
        "amount": "1勺"
      },
      {
        "name": "料酒",
        "amount": "1勺"
      },
      {
        "name": "姜末",
        "amount": "少许"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "葱",
        "amount": "1根"
      }
    ],
    steps: [
      "荸荠切碎和肉末调料搅打上劲",
      "团成丸子",
      "裹上泡好的糯米",
      "摆入盘中",
      "水开蒸20分钟",
      "撒葱花"
    ],
    tips: "糯米像珍珠一样裹在外面",
    kidsFriendly: true,
    tags: ["孩子爱","蒸菜","宴客"],
  },
];

export default recipes;
