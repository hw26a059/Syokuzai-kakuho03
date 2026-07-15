import { Ingredient, Recipe, QuizQuestion } from '../types';

export const INGREDIENTS: Record<string, Ingredient> = {
  // 肉類
  gyuniku: { id: 'gyuniku', name: '牛肉', category: 'meat' },
  butaniku: { id: 'butaniku', name: '豚肉', category: 'meat' },
  toriniku: { id: 'toriniku', name: '鶏肉', category: 'meat' },
  aibikiku: { id: 'aibikiku', name: '合挽き肉', category: 'meat' },
  butahikiku: { id: 'butahikiku', name: '豚挽き肉', category: 'meat' },
  torihikiku: { id: 'torihikiku', name: '鶏挽き肉', category: 'meat' },

  // 魚介類
  saba: { id: 'saba', name: 'サバ', category: 'fish' },
  ika: { id: 'ika', name: 'イカ', category: 'fish' },
  ebi: { id: 'ebi', name: 'エビ', category: 'fish' },
  shijimi: { id: 'shijimi', name: 'しじみ', category: 'fish' },
  kis: { id: 'kis', name: 'キス', category: 'fish' },

  // 野菜・キノコ類
  jagaimo: { id: 'jagaimo', name: 'じゃがいも', category: 'vegetable' },
  ninjin: { id: 'ninjin', name: 'にんじん', category: 'vegetable' },
  tamanegi: { id: 'tamanegi', name: '玉ねぎ', category: 'vegetable' },
  shimeji: { id: 'shimeji', name: 'しめじ', category: 'vegetable' },
  nasu: { id: 'nasu', name: 'なす', category: 'vegetable' },
  renkon: { id: 'renkon', name: '蓮根', category: 'vegetable' },
  shirataki: { id: 'shirataki', name: 'しらたき', category: 'other' },
  ingen: { id: 'ingen', name: 'いんげん', category: 'vegetable' },
  kyabetsi: { id: 'kyabetsi', name: 'キャベツ', category: 'vegetable' },
  moyashi: { id: 'moyashi', name: 'もやし', category: 'vegetable' },
  piman: { id: 'piman', name: 'ピーマン', category: 'vegetable' },
  ran: { id: 'ran', name: '卵', category: 'other' },
  negi: { id: 'negi', name: 'ネギ', category: 'vegetable' },
  chizu: { id: 'chizu', name: 'チーズ', category: 'other' },
  chikuwa: { id: 'chikuwa', name: 'ちくわ', category: 'other' },
  eringi: { id: 'eringi', name: 'エリンギ', category: 'vegetable' },
  daikon: { id: 'daikon', name: '大根', category: 'vegetable' },
  gobo: { id: 'gobo', name: 'ごぼう', category: 'vegetable' },
  tofu: { id: 'tofu', name: '豆腐', category: 'other' },
  satoimo: { id: 'satoimo', name: 'さといも', category: 'vegetable' },
  konnyaku: { id: 'konnyaku', name: 'こんにゃく', category: 'other' },
  nagaranege: { id: 'nagaranege', name: '長ねぎ', category: 'vegetable' },
  wakame: { id: 'wakame', name: 'わかめ', category: 'other' },
  aburaage: { id: 'aburaage', name: '油揚げ', category: 'other' },
  horenso: { id: 'horenso', name: 'ほうれん草', category: 'vegetable' },
  shoga: { id: 'shoga', name: '生姜', category: 'vegetable' },
  shiraganege: { id: 'shiraganege', name: '白髪ねぎ', category: 'vegetable' },
  shishito: { id: 'shishito', name: 'ししとう', category: 'vegetable' },
  ninniku: { id: 'ninniku', name: 'にんにく', category: 'vegetable' },
  remon: { id: 'remon', name: 'レモン', category: 'vegetable' },
  masshurumu: { id: 'masshurumu', name: 'マッシュルーム', category: 'vegetable' },
  gurinpiisu: { id: 'gurinpiisu', name: 'グリーンピース', category: 'vegetable' },
  hakusai: { id: 'hakusai', name: '白菜', category: 'vegetable' },
  uzuranoran: { id: 'uzuranoran', name: 'うずらの卵', category: 'other' },
  kikurage: { id: 'kikurage', name: 'きくらげ', category: 'vegetable' },
  chingensei: { id: 'chingensei', name: 'チンゲン菜', category: 'vegetable' },
  takenoko: { id: 'takenoko', name: 'タケノコ', category: 'vegetable' },
  satsuraimo: { id: 'satsuraimo', name: 'さつまいも', category: 'vegetable' },
  kabotsya: { id: 'kabotsya', name: 'かぼちゃ', category: 'vegetable' },
  oba: { id: 'oba', name: '大葉', category: 'vegetable' },
  maitake: { id: 'maitake', name: '舞茸', category: 'vegetable' },
};

export const RECIPES: Recipe[] = [
  {
    id: 'curry',
    name: 'カレーライス',
    baseCategory: 'カレー',
    requiredIngredients: ['jagaimo', 'ninjin', 'tamanegi', 'gyuniku'],
    optionalIngredients: ['butaniku', 'toriniku', 'shimeji', 'nasu', 'renkon', 'ika', 'ebi'],
    excludedIngredients: ['saba', 'shoga', 'hakusai', 'tofu', 'wakame', 'uzuranoran']
  },
  {
    id: 'nikujaga',
    name: '肉じゃが',
    baseCategory: '肉じゃが',
    requiredIngredients: ['gyuniku', 'jagaimo', 'ninjin', 'tamanegi'],
    optionalIngredients: ['butaniku', 'toriniku', 'shirataki', 'ingen'],
    excludedIngredients: ['saba', 'remon', 'piman', 'chingensei', 'takenoko', 'kikurage']
  },
  {
    id: 'yakisoba',
    name: '焼きそば',
    baseCategory: '焼きそば',
    requiredIngredients: ['butaniku', 'kyabetsi', 'ninjin', 'moyashi'],
    optionalIngredients: ['ika', 'ebi', 'tamanegi', 'piman'],
    excludedIngredients: ['saba', 'tofu', 'shijimi', 'satoimo', 'shirataki', 'uzuranoran']
  },
  {
    id: 'okonomiyaki',
    name: 'お好み焼き',
    baseCategory: 'お好み焼き',
    requiredIngredients: ['butaniku', 'kyabetsi', 'ran'],
    optionalIngredients: ['ika', 'ebi', 'negi', 'chizu', 'chikuwa'],
    excludedIngredients: ['saba', 'jagaimo', 'satoimo', 'daikon', 'gobo', 'takenoko']
  },
  {
    id: 'yasaiitame',
    name: '肉野菜炒め',
    baseCategory: '野菜炒め',
    requiredIngredients: ['butaniku', 'kyabetsi', 'moyashi', 'ninjin', 'piman'],
    optionalIngredients: ['gyuniku', 'toriniku', 'eringi', 'tamanegi'],
    excludedIngredients: ['saba', 'tofu', 'wakame', 'shijimi', 'uzuranoran', 'shirataki']
  },
  {
    id: 'tonjiru',
    name: '豚汁',
    baseCategory: '汁物',
    requiredIngredients: ['butaniku', 'daikon', 'ninjin', 'gobo', 'tofu'],
    optionalIngredients: ['satoimo', 'konnyaku', 'jagaimo', 'nagaranege'],
    excludedIngredients: ['saba', 'remon', 'piman', 'chizu', 'masshurumu', 'gurinpiisu']
  },
  {
    id: 'misoshiru',
    name: '味噌汁',
    baseCategory: '汁物',
    requiredIngredients: ['tofu', 'wakame', 'nagaranege'],
    optionalIngredients: ['aburaage', 'jagaimo', 'shimeji', 'nasu', 'horenso', 'shijimi'],
    excludedIngredients: ['saba', 'gyuniku', 'toriniku', 'uzuranoran', 'remon', 'chingensei']
  },
  {
    id: 'sabamiso',
    name: '鯖の味噌煮',
    baseCategory: '魚料理',
    requiredIngredients: ['saba', 'shoga'],
    optionalIngredients: ['shiraganege', 'shishito'],
    excludedIngredients: ['jagaimo', 'kyabetsi', 'uzuranoran', 'chizu', 'gurinpiisu', 'shirataki']
  },
  {
    id: 'karaage',
    name: '唐揚げ',
    baseCategory: '肉料理',
    requiredIngredients: ['toriniku', 'shoga', 'ninniku'],
    optionalIngredients: ['remon'],
    excludedIngredients: ['saba', 'tofu', 'daikon', 'hakusai', 'chingensei', 'shirataki']
  },
  {
    id: 'hamburg',
    name: 'ハンバーグ',
    baseCategory: '肉料理',
    requiredIngredients: ['aibikiku', 'tamanegi', 'ran'],
    optionalIngredients: ['chizu', 'shimeji'],
    excludedIngredients: ['saba', 'hakusai', 'chingensei', 'shijimi', 'shirataki', 'gobo']
  },
  {
    id: 'omurice',
    name: 'オムライス',
    baseCategory: 'オムライス',
    requiredIngredients: ['toriniku', 'tamanegi', 'ran'],
    optionalIngredients: ['piman', 'masshurumu', 'gurinpiisu'],
    excludedIngredients: ['saba', 'daikon', 'gobo', 'tofu', 'shijimi', 'shirataki', 'konnyaku']
  },
  {
    id: 'happosai',
    name: '八宝菜',
    baseCategory: '中華',
    requiredIngredients: ['butaniku', 'hakusai', 'ninjin', 'uzuranoran', 'ebi', 'ika', 'kikurage'],
    optionalIngredients: ['toriniku', 'chingensei', 'takenoko', 'masshurumu'],
    excludedIngredients: ['saba', 'satoimo', 'shirataki', 'konnyaku', 'aburaage', 'shijimi']
  },
  {
    id: 'shogayaki',
    name: '生姜焼き',
    baseCategory: '肉料理',
    requiredIngredients: ['butaniku', 'shoga', 'kyabetsi'],
    optionalIngredients: ['tamanegi'],
    excludedIngredients: ['saba', 'tofu', 'wakame', 'uzuranoran', 'shijimi', 'konnyaku']
  },
  {
    id: 'tempura',
    name: '天ぷら',
    baseCategory: '和食',
    requiredIngredients: ['ebi', 'nasu', 'satsuraimo', 'kabotsya', 'shishito'],
    optionalIngredients: ['ika', 'kis', 'oba', 'renkon', 'maitake'],
    excludedIngredients: ['gyuniku', 'butaniku', 'tofu', 'shirataki', 'konnyaku', 'uzuranoran']
  },
  {
    id: 'mabotofu',
    name: '麻婆豆腐',
    baseCategory: '中華',
    requiredIngredients: ['torihikiku', 'tofu', 'nagaranege'],
    optionalIngredients: ['butahikiku'],
    excludedIngredients: ['saba', 'satoimo', 'shirataki', 'konnyaku', 'aburaage', 'shijimi']
  },
  {
    id: 'mabonasu',
    name: '麻婆茄子',
    baseCategory: '中華',
    requiredIngredients: ['torihikiku', 'nasu', 'piman'],
    optionalIngredients: ['butahikiku', 'nagaranege'],
    excludedIngredients: ['saba', 'satoimo', 'shirataki', 'konnyaku', 'aburaage', 'shijimi']
  }
];

export const QUIZ_QUESTIONS: Record<string, QuizQuestion> = {
  gyuniku: {
    ingredientId: 'gyuniku',
    ingredientName: '牛肉',
    question: 'スーパーのトレイに入った牛肉をパック越しに目利きします。一番新鮮で美味しい状態のものはどれ？',
    options: [
      {
        text: '鮮やかな赤紅色で肉にツヤがあり、トレイの底に赤い汁が一切溜まっていないパック。',
        imageDesc: '全体が美しい鮮紅色で、パックの底が完全に乾いている牛肉スライス。',
        imagePath: '/image_beef_sinnsenn.jpg',
        isCorrect: true
      },
      {
        text: '全体的に赤みはあるが、トレイの底に少し薄赤い水分（ドリップ）が溜まっているパック。',
        imageDesc: 'トレイの隅に赤い水分がにじみ出ている, ややくすんだ赤色の牛肉。',
        imagePath: '/image_beef_medium.jpg',
        isCorrect: false
      },
      {
        text: '重なり合った部分が茶褐色や黒ずんで見え、表面が乾燥した牛肉。',
        imageDesc: '重なり合った部分が茶褐色や黒ずんで見え、表面が乾燥した牛肉。',
        imagePath: '/image_beef_not_sinnsenn.jpg',
        isCorrect: false
      }
    ],
    explanation: '牛肉は、パックの底に「ドリップ」と呼ばれる赤い汁が出ていないものを選びましょう。ドリップは旨味や水分が逃げ出している証拠です。色は鮮やかな赤紅色（またはやや濃い赤）で、ツヤのあるものが新鮮です。なお、肉が重なっている部分が黒っぽくなっているのは空気に触れていないためで、必ずしも傷んでいるわけではありませんが、全体に変色しているものは鮮度が落ちています。',
    hardQuestion: '牛肉のパックを究極に目利きします。一番旨味が保たれており、最高の品質を示す状態はどれ？',
    hardOptions: [
      {
        text: 'ドリップがなく、表面が濡れたようなテカリではなくしっとりとした自然なツヤがあり、脂肪が黄ばんでおらず、重なり合っている部分が暗い赤褐色をしているパック。',
        isCorrect: true
      },
      {
        text: '全体が均一な明るい鮮紅色をしており、重なり合っている部分まで真っ赤で、ドリップが全くないパック。',
        isCorrect: false
      },
      {
        text: '表面にオパールの光沢（青緑色の反射）が美しく輝いており、トレイの底が完全に乾いているパック。',
        isCorrect: false
      },
      {
        text: 'ドリップはほとんどないが、脂肪の繊維が細かくバラけていて、赤身全体にうっすらと霜が不規則に広がっているパック。',
        isCorrect: false
      }
    ]
  },
  butaniku: {
    ingredientId: 'butaniku',
    ingredientName: '豚肉',
    question: 'パックに入った豚肉の切り身を選ぶ際、最も新鮮な状態を示すものはどれ？',
    options: [
      {
        text: '肉質がみずみずしい淡いピンク色（淡紅色）で、脂肪の部分が白く硬く締まっていて、ドリップがないもの。',
        imageDesc: '綺麗な薄ピンク色の肉に、真っ白でくっきりした脂身があり、パック内が綺麗な状態。',
        imagePath: '/image-pig_sinnsenn.png',
        isCorrect: true
      },
      {
        text: '肉の色が少し濁った灰色がかったピンク色で、トレイの端に水滴や赤い水分がにじんでいるもの。',
        imageDesc: 'やや灰色を帯びたピンク色で、パックの底に水滴とドリップがたまっている豚肉。',
        imagePath: '/image-pig_old.png',
        isCorrect: false
      }
    ],
    explanation: '新鮮な豚肉は「淡いピンク色」をしており、脂肪（脂身）が「真っ白」で締まっているのが特徴です。脂身が黄色っぽくなっているものは酸化が進んでいます。また、牛肉と同様にトレイにドリップ（赤い汁）が溜まっていないものを選びましょう。',
    hardQuestion: 'パック入り豚肉を究極に目利きします。保水性と肉質の成熟度が高く、加熱しても縮みにくく最も美味しいとされる状態はどれ？',
    hardOptions: [
      {
        text: '肉に弾力があり、赤身が適度に濃い淡紅色（灰白色でない）で、脂肪に濁りがなく白く硬く締まっており、パックのドリップが皆無のもの。',
        isCorrect: true
      },
      {
        text: '肉の表面が濡れたように過剰にキラキラとテカっており、色が不自然に薄く（乳白色に近い）、パックのふちに結露がびっしりついているもの。',
        isCorrect: false
      },
      {
        text: '赤身部分が非常に濃い暗褐色（牛肉のような色）で、表面にぬめりがあり、脂身が少し軟らかくて押すと簡単に崩れるもの。',
        isCorrect: false
      },
      {
        text: '全体的に乾燥してツヤがなく、赤身全体にうっすらと白っぽい霜が不規則に広がっているもの。',
        isCorrect: false
      }
    ]
  },
  toriniku: {
    ingredientId: 'toriniku',
    ingredientName: '鶏肉',
    question: 'パックに入った鶏もも肉を目利きします。最も新鮮でジューシーな鶏肉はどれ？',
    options: [
      {
        text: '肉全体が透明感のある鮮やかなピンク色で、皮の毛穴が盛り上がって細かく縮れており、ドリップがないもの。',
        imageDesc: 'ツヤツヤした明るいピンク色の肉に、表面に細かいブツブツ（毛穴）がしっかり立った皮がついている状態。',
        imagePath: '/image_chicken_sinnsenn.png',
        isCorrect: true
      },
      {
        text: '肉の色が白っぽく退色しており、パック的底にピンク色の汁が溜まっているもの。',
        imageDesc: '全体的に色が抜けて白っぽく、底にピンクのドリップが溜まっているもも肉。',
        imagePath: '/image_chicken_Yellow.png',
        isCorrect: false
      }
    ],
    explanation: '鶏肉は水分が多いため傷みやすく、ドリップが最も出やすい肉です。新鮮なものは「透明感のあるピンク色」で、皮の毛穴がしっかり盛り上がってシワが寄っています。毛穴のブツブツがはっきりしているのは鮮度が良い証拠です。白っぽくダレてドリップが出ているものは鮮度が落ちています。',
    hardQuestion: 'パック入り鶏もも肉を究極に目利きします。最も旨味が強く、新鮮で加熱した際のジューシーさが最高レベルのものはどれ？',
    hardOptions: [
      {
        text: '肉全体が透明感のある引き締まった濃いピンク色で、皮の表面に細かなひだ（縮み）とツヤがあり、厚みがあり、皮下の脂肪が濁りのない薄黄色〜白色をしているもの。',
        isCorrect: true
      },
      {
        text: '肉質が全体に平坦で非常に薄く、皮全体が完全に真っ白で水っぽく、パックの角にわずかにピンク色の水分（ドリップ）がたまっているもの。',
        isCorrect: false
      },
      {
        text: '全体がどす黒い赤色をしており、皮のブツブツ（毛穴）が完全に平らになっており、パックのふちに多数の水滴が結露しているもの。',
        isCorrect: false
      },
      {
        text: '肉が非常に柔らかくダレており、全体に白っぽい粘り気のある膜が薄く張っているように見えるもの。',
        isCorrect: false
      }
    ]
  },
  torihikiku: {
    ingredientId: 'torihikiku',
    ingredientName: '鶏挽き肉',
    question: 'パックに入った鶏挽き肉を目利きします。最も新鮮で、料理が美味しく仕上がる状態のものはどれ？',

    options: [
      {
        text: '全体が透明感のある明るいピンク色（淡い赤色）で、ひき肉一粒一粒の輪郭がはっきりしており、ドリップがないもの。',
        imageDesc: '全体が綺麗な淡いピンク色で、粒が潰れずしっかり立ち、ドリップがない鶏挽き肉。',
        imagePath: '/image_chicken_hikiniku_sinnsen.png',
        isCorrect: true
      },
      {
        text: '全体的に白っぽく退色しており、パックの底にピンク色や黄色みを帯びた水分（ドリップ）がたまっているもの。',
        imageDesc: '白っぽくダレており、トレイの底に黄色みを帯びたドリップが溜まっている鶏挽き肉。',
        imagePath: '/image_chicken_hikiniku_Yellow.png',
        isCorrect: false
      }
    ],
    explanation: '鶏挽き肉は水分が多くて非常に傷みやすいため、パックの底に「ドリップ（水分）」が出ていないことが大前提です。新鮮なものは透明感のある「明るいピンク色」をしています。鮮度が落ちると全体的に白っぽく濁り、粒の輪郭が潰れてドロッとした状態になります。',
    hardQuestion: 'パック入りの鶏挽き肉を究極に目利きします。最も雑菌の繁殖が少なく、旨味と鮮度が最高峰のパックはどれ？',
    hardOptions: [
      {
        text: 'パックを傾けてもドリップが全く動かず、肉の表面に不自然なテカリがなく、ひき肉の繊維（一粒一粒の切り口）がしっかりとシャープに立っているもの。',
        isCorrect: true
      },
      {
        text: 'パックの底全体に極わずかに白濁したドリップが溜まっているが、肉自体は非常に明るい純白色をしているもの。',
        isCorrect: false
      },
      {
        text: '表面が非常に滑らかで、全体が粘土のように均一なペースト状になっており、油分が表面を膜のように覆っているもの. (isCorrect: false)',
        isCorrect: false
      },
      {
        text: '全体が非常に濃い赤色（濃紅色）をしており、パックのふちに薄い結露が生じているもの。',
        isCorrect: false
      }
    ]
  },
  saba: {
    ingredientId: 'saba',
    ingredientName: 'サバ',
    question: 'スーパーで売られているサバの切り身（パック入り）で、最も新鮮な状態なのはどれ？',
    options: [
      {
        text: '身に透明感と強い弾力があり、皮の青い模様がくっきり鮮やかで、血合いの部分が明るい赤色のもの。',
        imageDesc: '皮目がキラキラと輝き、銀色と青い模様が鮮明。肉厚で断面が盛り上がっている切り身。',
        isCorrect: true
      },
      {
        text: '皮の模様がぼやけており、血合いの部分がどす黒い茶色に変わっているもの。',
        imageDesc: '皮のツヤが鈍く、血合い（赤い筋の部分）が茶色く変色し、全体的にダレている切り身。',
        isCorrect: false
      },
      {
        text: 'パックの底に生臭い水が溜まっており、切り身の身割れ（割れ目）が起きているもの。',
        imageDesc: 'パック内に汁が浮き、身の繊維が割れて隙間ができているサバ。',
        isCorrect: false
      }
    ],
    explanation: '生のサバの切り身は、皮の青い模様と銀色の部分が「キラキラと輝いてくっきりしているもの」を選びます。血合い（身の赤い部分）が鮮やかな赤色のものが新鮮で、茶色や黒ずんでいるものは時間が経っています。また、身がしっかり盛り上がっており、身割れしていないものを選びましょう。',
    hardQuestion: '魚屋で売られているサバの切り身の鮮度を極限まで見極めます。最も身が引き締まっていて旨味がある状態はどれ？',
    hardOptions: [
      {
        text: '皮の銀色部分に青緑色の模様が鮮明に浮かび、血合い（赤い筋）が鮮やかな赤色で、断面の角が立ち、身にしっかりとした弾力がある切り身。',
        imageDesc: '模様が鮮明で、血合いが赤く、断面の角が立ったサバの切り身。',
        isCorrect: true
      },
      {
        text: '身の全体が真っ白く濁っていて柔らかく、血合いの部分が綺麗なピンク色で、水分が適度に全体を覆っている切り身。',
        imageDesc: '身が白く濁り、血合いがピンク色のサバの切り身。',
        isCorrect: false
      },
      {
        text: '皮にねねっとりとした独自のぬめりがあって輝いており、身の繊維が非常に柔らかく、押すと指の跡がそのまま残る切り身。',
        imageDesc: '皮にぬめりがあり、押すと跡が残るサバの切り身。',
        isCorrect: false
      },
      {
        text: '切り口が全体に平坦で、皮の青い縞模様が非常に細かく、ドリップ（汁）が僅かにパックの端で泡立っている切り身。',
        imageDesc: '切り口が平坦で、ドリップが泡立っているサバの切り身。',
        isCorrect: false
      }
    ]
  },
  jagaimo: {
    ingredientId: 'jagaimo',
    ingredientName: 'じゃがいも',
    question: '袋に入ったじゃがいも（男爵やメークイン）で、最も状態が良く美味しいものはどれ？',
    options: [
      {
        text: 'ふっくらと丸みがあり、皮にシワがなく、ずっしりと重みがあって硬く締まっているもの。',
        imageDesc: '皮がなめらかでハリがあり、芽が出ておらず、土が適度についた丸いじゃがいも。',
        imagePath: '/image_potato_sinnsenn.png',
        isCorrect: true
      },
      {
        text: '皮の表面全体に細かなシワが寄っており、触ると少し柔らかく弾力を感じるもの。',
        imageDesc: '表面の水分が抜けてシワシワになり、少ししなびて見えるじゃがいも。',
        imagePath: '/image_potato_out.png',
        isCorrect: false
      }
    ],
    explanation: '美味しいじゃがいもは、皮にシワがなく「ハリがあって硬く、重みがあるもの」です。シワがあるものや柔らかいものは、水分が抜けて古くなっています。また、芽が出ているものや、皮が緑色（緑化）しているものは、ソラニンやチャコニンという天然の毒素が含まれているため避ける必要があります。',
    hardQuestion: '袋に入ったじゃがいも（男爵やメークイン）で、最もデンプン質が豊富で甘みのある状態はどれ？',
    hardOptions: [
      {
        text: '泥が適度について乾燥しており、皮のキメが粗く、指で押しても全く凹まないほど硬く締まり、ずっしりと重みがあるもの。',
        isCorrect: true
      },
      {
        text: '全体的に皮が非常に薄くてツルツルしており、芽のくぼみが非常に深く、軽く握ると少し弾力を感じるもの。',
        isCorrect: false
      },
      {
        text: '表面が完全に水洗いされていてピカピカに輝き、皮が全体的に緑がかっているが、新芽が完全に除去されて平らになっているもの。',
        isCorrect: false
      },
      {
        text: '表面がゴツゴツと歪な形をしており、皮に部分的な黒い斑点（すす状）が広がっているが、乾燥して非常に硬いもの。',
        isCorrect: false
      }
    ]
  },
  ninjin: {
    ingredientId: 'ninjin',
    ingredientName: 'にんじん',
    question: '袋入りのにんじんを選ぶ際、最も甘みがあって新鮮な状態のものはどれ？',
    options: [
      {
        text: '全体が鮮やかなオレンジ色で、皮にハリがあり、葉の切り口（首の芯）が小さく細いもの。',
        imageDesc: '濃いオレンジ色で肌がつるりとしており、上の切り口の直径が小さくみずみずしいにんじん。',
        imagePath: '/image_carrot_sinnsenn.png',
        isCorrect: true
      },
      {
        text: '葉の切り口が大きく太いもので、首のあたりがうっすらと黒ずんでいるもの。',
        imageDesc: '上部の切り口（芯）が太く、その周辺が黒っぽく変色しているにんじん. 必要に応じて、毒素に気をつけましょう。',
        imagePath: '/image_carrot_not_sinnsenn.png',
        isCorrect: false
      }
    ],
    explanation: 'にんじんは、葉の切り口（首の芯）が「小さいもの」を選びましょう。切り口が太いものは、芯まで硬くなっており、栄養が葉にとられて味が落ちています。全体に濃いオレンジ色（β-カロテンが豊富）で、表面がなめらかでハリがあるものが良質です。ひげ根が多いものはストレスがかかって繊維が硬くなっています。',
    hardQuestion: '袋入りのにんじんを選ぶ際、最も糖度が高く、芯まで柔らかく調理しやすいものはどれ？',
    hardOptions: [
      {
        text: '全体が濃いオレンジ色で、首元（葉の切り口）の直径が5mm〜1cm程度と細く、黒ずみがなく、肌がつるりとしているもの。',
        isCorrect: true
      },
      {
        text: '首元（葉の切り口）が非常に太く（500円玉大）、そこから新しい緑色の葉の芽が勢いよく伸び出しているもの。',
        isCorrect: false
      },
      {
        text: '表面が非常に白っぽく洗われており、全体に細長いひげ根が一面に生えていて、持ったときに非常にしなやかに曲がるもの。',
        isCorrect: false
      },
      {
        text: '全体が赤黒いほど濃い色をしており、皮の表面に多数の横方向の溝（亀裂）が入っているが、中身が硬く詰まっているもの。',
        isCorrect: false
      }
    ]
  },
  tamanegi: {
    ingredientId: 'tamanegi',
    ingredientName: '玉ねぎ',
    question: 'ネットや袋に入った玉ねぎを上から見て目利きします。最も保存性が高く美味しいものはどれ？',
    options: [
      {
        text: '外皮が乾燥してツヤのある茶褐色で、頭部（首元）がキュッと硬く締まっていて、全体にずっしり重いもの。',
        imageDesc: '表面の皮がパリパリに乾いて光沢があり、上の芽が出る部分が細く固く閉じている玉ねぎ。',
        isCorrect: true
      },
      {
        text: '頭部を軽く押すと少し柔らかさを感じ、少し甘酸っぱいにおいが漂っているもの。',
        imageDesc: '首のまわりが少し緩んでおり、中心部が少し沈み込んでいる玉ねぎ。',
        isCorrect: false
      },
      {
        text: 'お尻の部分から白い根が長く伸びており、頭部からうっすらと緑色の芽が見えているもの。',
        imageDesc: '下部から根がフサフサと伸び、上部から新しい芽がツンと飛び出している玉ねぎ。',
        isCorrect: false
      }
    ],
    explanation: '玉ねぎの鮮度と状態を見るポイントは「首元（頭部）」です。ここがキュッと細く締まって硬いものは、中身が詰まっていて傷んでいません。ここが柔らかいものは、内部から腐敗が始まっている可能性が高いです。また、芽や根が伸び始めているものは、栄養がそちらに取られて味が落ちています。ずっしりと重みのあるものを選びましょう。',
    hardQuestion: 'ネットや袋に入った玉ねぎをプロの視点で見極めます。最も日持ちがし、中身がみっしり詰まったものはどれ？',
    hardOptions: [
      {
        text: '外皮がパリパリに乾いて光沢があり、首元が細く完全に閉じていて、お尻の根の生え際が固く凹んでいるもの。',
        imageDesc: '外皮が乾燥してツヤがあり、首元が細く閉じたお尻の凹んだ玉ねぎ。',
        isCorrect: true
      },
      {
        text: '首元が太くて柔らかく、軽く押すと内部に隙間（空洞）があるように感じられるが、外皮が非常に綺麗なオレンジ色のもの。',
        imageDesc: '首元が柔らかく、色が鮮やかなオレンジの玉ねぎ。',
        isCorrect: false
      },
      {
        text: 'お尻の根がフサフサと2cm以上伸びており、芽が出る部分が少し緑色に盛り上がっているもの。',
        imageDesc: '根がフサフサ伸び、上部が緑色を帯びて盛り上がった玉ねぎ。',
        isCorrect: false
      },
      {
        text: '外皮が湿ってしっとりとしており、首元から新しい白い芽がうっすらと覗いているもの。',
        imageDesc: '皮が湿り、首元から白い芽が少し見えている玉ねぎ。',
        isCorrect: false
      }
    ]
  },
  kyabetsi: {
    ingredientId: 'kyabetsi',
    ingredientName: 'キャベツ',
    question: '丸ごと1玉のキャベツ、または半分にカットされたキャベツを目利きします。最も新鮮で美味しいものはどれ？',
    options: [
      {
        text: '丸ごとの場合は外葉が濃い緑色で、カットの場合は芯の高さが全体の1/3以下で、断面が平らでみずみずしいもの。',
        imageDesc: 'カット断面がまっ平らで白と黄緑が美しく、芯が低くどっしりしているキャベツ。',
        isCorrect: true
      },
      {
        text: 'カットキャベツで、芯の高さが全体の半分近くあり、断面の中央が少し盛り上がって膨らんでいるもの。',
        imageDesc: 'カットされてから時間が経ち、断面が呼吸によってポコッと盛り上がっているキャベツ。',
        isCorrect: false
      },
      {
        text: '芯の切り口が茶色くひび割れて乾燥しており、外側の葉が黄色っぽく変色しているもの。',
        imageDesc: '底の芯のカット部分が真っ黒に乾燥して割れており、葉にハリがないキャベツ。',
        isCorrect: false
      }
    ],
    explanation: 'カットされたキャベツは「断面」が平らなものを選びましょう。カットされた後もキャベツは成長を続けるため、時間が経つと断面がポコッと盛り上がってきます。また、芯の高さが「全体の1/3以下」のものが、葉が詰まっていて柔らかく美味しいです。芯の切り口が白くみずみずしいものが新鮮です。',
    hardQuestion: '半分にカットされたキャベツで、最も新鮮で葉がぎっしり詰まっており、甘みが強いものはどれ？',
    hardOptions: [
      {
        text: 'カット断面が真っ平らで葉が隙間なくぎっしりと詰まっており、芯の高さが全体の1/3以下で、芯の切り口が白くてみずみずしいもの。',
        imageDesc: '断面が平らで隙間がなく、芯の高さが全体の1/3以下のキャベツ。',
        isCorrect: true
      },
      {
        text: 'カット断面の中央がポコッとドーム状に盛り上がっており、芯の高さが全体の半分以上に達しているもの。',
        imageDesc: 'カット断面の中心がドーム状に膨らみ、芯が長いキャベツ。',
        isCorrect: false
      },
      {
        text: '芯の切り口が茶色く乾燥してヒビが入っているが、全体の葉がふんわりとルーズに重なり、非常に軽いもの。',
        imageDesc: '芯が茶色くひび割れ、持った感じが非常に軽いキャベツ。',
        isCorrect: false
      },
      {
        text: '外側の葉がすべて綺麗に剥き取られて真っ白になっており、カット断面の縁の葉が薄い黄色に変色しているもの。',
        imageDesc: '外葉がなく全体が白っぽく、一部が黄色く変色したキャベツ。',
        isCorrect: false
      }
    ]
  },
  moyashi: {
    ingredientId: 'moyashi',
    ingredientName: 'もやし',
    question: 'パックや袋に入ったもやしを目利きします。シャキシャキして最も新鮮なもやしはどれ？',
    options: [
      {
        text: '軸が太くて透き通るような白さがあり、袋の中に水が一切溜まっておらず、全体にピンとハリがあるもの。',
        imageDesc: '一本一本が真っ白で太く、袋がピシッと締まっていて内部に余分な水分が浮いていないもやし。',
        isCorrect: true
      },
      {
        text: '全体的に少し黄ばんで見え、袋の底に茶色っぽい水分が少し溜まっているもの。',
        imageDesc: '根元や茎がうっすら黄色を帯び、袋の隅に水滴や濁った水が溜まっているもやし。',
        isCorrect: false
      },
      {
        text: '根や子葉の部分が黒ずんでおり、触ると全体的にしなしなと柔らかく潰れてしまうもの。',
        imageDesc: '豆の部分や根が茶色く変色し、全体が半透明にふやけてハリを失ったもやし。',
        isCorrect: false
      }
    ],
    explanation: 'もやしは非常に足が早い（傷みやすい）野菜です。新鮮なものは「濁りのない真っ白な色」をしており、袋の中に水が出ていません。袋の中に水が溜まっているものは、細胞が壊れて水分が流れ出し、シャキシャキ感が失われています。全体に黄ばみや黒ずみがないものを選びましょう。',
    hardQuestion: '袋に入ったもやしを目利きします。最もシャキシャキした食感が残り、風味が落ちていないものはどれ？',
    hardOptions: [
      {
        text: '軸が太くてしっかりとしたハリがあり、透明感のある真っ白な色をしていて、袋の中に結露やドリップ（濁った水）が一切ないもの。',
        imageDesc: '太くて真っ白な軸、袋の内部に水滴が一切ないもやし。',
        isCorrect: true
      },
      {
        text: '全体的にうっすらと黄色みを帯びており、袋の角に濁った水分が溜まっているが、軸が非常に細くて長いもの。',
        imageDesc: '全体が黄色みがかっていて、底に濁った水が溜まった細いもやし。',
        isCorrect: false
      },
      {
        text: '根元や豆の部分がすべて茶色に変色しており、袋を傾けると内部で水浸しになっているもの。',
        imageDesc: '豆が茶色く、袋全体に水がタプタプに溜まったもやし。',
        isCorrect: false
      },
      {
        text: '軸が半透明でふにゃふにゃと柔らかく、袋が真空パックのようにピタッと吸着して固まっているもの。',
        imageDesc: '袋にピッタリ密着しているが、軸が半透明で柔らかいもやし。',
        isCorrect: false
      }
    ]
  },
  piman: {
    ingredientId: 'piman',
    ingredientName: 'ピーマン',
    question: '袋に入ったピーマンで、肉厚で最も新鮮かつ苦味が少なくて美味しいものはどれ？',
    options: [
      {
        text: '全体に濃い緑色でツヤがあり、ヘタの形が「きれいな五角形や六角形」をしていて、ヘタの切り口がみずみずしいもの。',
        imageDesc: '表面がシリコンのようにピカピカに輝き、ヘタがピンとした緑色で多角形になっているピーマン。',
        isCorrect: true
      },
      {
        text: '表面に細かいシワが寄っており、ヘタの切り口が茶色く乾燥して縮んでいるもの。',
        imageDesc: '水分が抜けて表面がフカフカと波打ち、ヘタが茶色くカサカサに乾いたピーマン。',
        isCorrect: false
      },
      {
        text: '一部が赤色や茶色っぽく変色し始めており、ヘタの周りが少し黒ずんでいるもの。',
        imageDesc: '緑色の中に赤オレンジのグラデーションが混じり、ヘタの周囲が弱っているピーマン。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なピーマンは「全体にハリと強いツヤ」があります。また、ヘタの形に注目してください。ヘタの角の数が多い（5〜6角形）ものは、栄養が十分に行き届いて成長した証拠で、苦味が少なくて甘みがあります。表面にシワがあるものは水分が抜けています。赤みを帯びているものは完熟に近づいていますが、料理の見た目や鮮度を重視するなら鮮やかな濃い緑のものを選びましょう。',
    hardQuestion: '袋に入ったピーマンで、最も栄養が詰まっていて苦味が少なく甘みが強いプロの目利き品はどれ？',
    hardOptions: [
      {
        text: '表面全体にシリコンのような強い光沢とハリがあり、ヘタの断面が瑞々しい緑色で、ヘタの形が綺麗な六角形（または五角形）のもの。',
        imageDesc: '全体に光沢があり、ヘタの形が綺麗な多角形になっているピーマン。',
        isCorrect: true
      },
      {
        text: '表面に細かなシワ（縮み）があり、触るとフカフカと柔らかく、ヘタの角がはっきりしない丸型をしたもの。',
        imageDesc: '細かいシワがあり、ヘタが丸みを帯びたピーマン。',
        isCorrect: false
      },
      {
        text: '全体的にオレンジ色や赤色のグラデーションが広がっており、ヘタの周りが茶色くカサカサに乾いているもの。',
        imageDesc: '赤みがかっており、ヘタの周りが乾いて縮んだピーマン。',
        isCorrect: false
      },
      {
        text: '表面は硬いが、ヘタの切り口が完全に真っ黒に変色して陥没しており、全体のツヤが消えてマットなもの。',
        imageDesc: 'ツヤがなく、ヘタの断面が黒くへこんだピーマン。',
        isCorrect: false
      }
    ]
  },
  daikon: {
    ingredientId: 'daikon',
    ingredientName: '大根',
    question: 'カットされた大根、または1本の大根を選ぶ際、みずみずしくて最も甘い大根はどれ？',
    options: [
      {
        text: '皮に白く透明感のあるハリがあり、ずっしりと重く、葉の切り口に空洞（す）が入っていないもの。',
        imageDesc: '肌が白くきめ細やかで、カット断面のキメが細かく、葉のカット中央がみっしり詰まっている大根。',
        isCorrect: true
      },
      {
        text: '全体的に軽さを感じ、葉の切り口の中央に白くカサカサした空洞（す）が見えるもの。',
        imageDesc: '葉の付け根の切り口の中心に、小さな穴（す）が開いている大根。',
        isCorrect: false
      },
      {
        text: 'ひげ根の生えているくぼみが深く、ひげ根のラインがらせん状にうねって配置されているもの。',
        imageDesc: 'ひげ根の穴が不規則に曲がりくねって配置されており、皮がゴツゴツしている大根。',
        isCorrect: false
      }
    ],
    explanation: '大根は、持った時に「ずっしりと重みがあるもの」を選びます。軽いものは中に「す（細かい空洞）」が入っており、水分が抜けてススカサになっています。葉の切り口の中央に空洞がないかチェックしましょう。また、側面のひげ根の穴が「縦にまっすぐ一列に並んでいるもの」は、ストレスなく成長した証拠で、繊維が柔らかく甘みが強いです。らせん状にうねっているものは辛味が強い傾向があります。',
    hardQuestion: '大根をプロの技で見極めます。最も水分が詰まっており、辛味が少なく煮物にも最適な個体はどれ？',
    hardOptions: [
      {
        text: '皮が白くきめ細やかでハリがあり、手で持ったときにずっしりと重く、側面のひげ根の穴が縦に真っ直ぐ美しく並んでいるもの。',
        imageDesc: '白くハリがあり、ひげ根の穴が一列に真っ直ぐ並んだ重い大根。',
        isCorrect: true
      },
      {
        text: '葉の付け根の切り口の真ん中に小さな白い空洞（す）があり、持ったときに見た目より非常に軽く感じるもの。',
        imageDesc: '切り口の中心に白い穴が開き、軽い大根。',
        isCorrect: false
      },
      {
        text: '皮の表面がゴツゴツと毛穴のように荒れており、ひげ根が斜めに渦を巻くようにらせん状にうねって並んでいるもの。',
        imageDesc: '皮がゴツゴツし、ひげ根の穴が斜めにうねった大根。',
        isCorrect: false
      },
      {
        text: '表面全体が少し柔らかくしなり、皮に多数の細かい横シワが入っていて、葉の切り口が茶色く乾いているもの。',
        imageDesc: '全体が柔らかく、横シワが多く入った古い大根。',
        isCorrect: false
      }
    ]
  },
  gobo: {
    ingredientId: 'gobo',
    ingredientName: 'ごぼう',
    question: '袋に入ったごぼう（泥付き、または洗いごぼう）で、最も香りが良く柔らかいものはどれ？',
    options: [
      {
        text: '泥が付いたままで、太さが均一（10円玉の太さ程度）であり、先端までしっかり硬くてしならないもの。',
        imageDesc: '適度に湿った泥で覆われており、根元から先まで太さがほぼ同じで、真っ直ぐなごぼう。',
        isCorrect: true
      },
      {
        text: 'きれいに泥が洗い流されており、全体的にひび割れやシワがあり、触るとふにゃふにゃと曲がるもの。',
        imageDesc: '白く洗われているが、表面が乾燥してカサカサし、持ったときに弓なりに曲がってしまうごぼう。',
        isCorrect: false
      },
      {
        text: '根元が腕のように非常に太く（大人の親指以上）、表面にゴツゴツしたこぶが多数あるもの。',
        imageDesc: '極端に太く、触ると中がスカスカしているような感触のあるごぼう。',
        isCorrect: false
      }
    ],
    explanation: 'ごぼうは「泥付き」のものが、風味が飛びにくく圧倒的に長持ちします。また、太すぎるものは中に「す（空洞）」が入して硬くなっていることが多いため、10円玉程度の「均一な太さのもの」が最も柔らかく美味しいです。触ってふにゃふにゃと曲がるものは、水分が抜けて繊維が硬くなっています。',
    hardQuestion: '土付きごぼうの良品を極限まで見極めます。中身に空洞がなく、豊かな香りと柔らかい繊維を持つものはどれ？',
    hardOptions: [
      {
        text: '湿り気のある泥が付着しており、太さが10円玉程度で根元から先端までほぼ均一で、真っ直ぐで非常に硬いもの。',
        imageDesc: '泥が湿っており、10円玉大の太さで均一かつ真っ直ぐな硬いごぼう。',
        isCorrect: true
      },
      {
        text: 'きれいに泥が洗われて真っ白だが、皮の表面に細かなシワがあり、両端を持って軽く力を入れると弓なりに曲がるもの。',
        imageDesc: '白く洗われているが表面にシワがあり、簡単に曲がるごぼう。',
        isCorrect: false
      },
      {
        text: '大人の親指よりはるかに太く（3cm以上）、触ると内部に弾力（空洞があるような柔らかさ）を感じるもの。',
        imageDesc: '非常に太く、触ると柔らかい感触があるごぼう。',
        isCorrect: false
      },
      {
        text: '泥はついているが完全にカサカサに乾燥し、表面に多くの深い縦割れのひびが入っており、非常に軽いもの。',
        imageDesc: '乾燥して縦割れのヒビが無数に入り、軽いごぼう。',
        isCorrect: false
      }
    ]
  },
  tofu: {
    ingredientId: 'tofu',
    ingredientName: '豆腐',
    question: 'パックに入った豆腐（木綿や絹）を選ぶ際、最も新鮮で美味しい状態のものはどれ？',
    options: [
      {
        text: 'パック内の水が完全に透明で、豆腐が崩れておらず、パックのフィルムがピンと張っているもの。',
        imageDesc: '澄んだ水の中に真っ白な豆腐が美しい長方形を保っており、密閉されたパック。',
        isCorrect: true
      },
      {
        text: 'パックを傾けると中の水がうっすらと白く濁っており、角が少し崩れているもの。',
        imageDesc: '水が乳白色に濁っており、豆腐の角から細かい破片が水中に散っている豆腐パック。',
        isCorrect: false
      },
      {
        text: 'パックのフィルムが内側に大きくへこんでおり、豆腐の表面に黄色っぽい変色が見られるもの。',
        imageDesc: 'パック内の圧力が変わり、フィルムが押し潰され、豆腐の上面が少し黄ばんでいる豆腐。',
        isCorrect: false
      }
    ],
    explanation: '豆腐はパックに入っている「水」をチェックします。水が「完全に澄んで透明なもの」が新鮮です。豆腐が古くなると、タンパク質や水分が溶け出して、中の水が白く濁ってきます。また、水が濁ると雑菌が繁殖しやすくなり、酸味や異臭の原因になります。パックのフィルムが膨張したり、逆に潰れすぎているものも避けましょう。',
    hardQuestion: 'スーパーの冷蔵棚にある豆腐パックをプロレベルで目利きします。最も新鮮で風味を保っている状態はどれ？',
    hardOptions: [
      {
        text: 'パックの中の水が澄んで完全に無色透明であり、豆腐がきれいな直方体を保ち、フィルムが平らに密閉されているもの。',
        imageDesc: '澄んだ透明な水に、型崩れのない直方体の豆腐が入り、フィルムが平らに密閉されたもの。',
        isCorrect: true
      },
      {
        text: 'パックを軽く傾けると中の水が乳白色にぼやけて濁っており、豆腐の角から崩れた細かい粉末が水中を漂っているもの。',
        imageDesc: '水がうっすら白く濁り、豆腐の角から剥がれたカスが浮いているもの。',
        isCorrect: false
      },
      {
        text: '豆腐の上面がうっすらと黄色を帯びており、パックのフィルムがボコッと内側に押し潰されて変形しているもの。',
        imageDesc: '豆腐が一部黄ばみ、フィルムが凹んで変形したパック。',
        isCorrect: false
      },
      {
        text: '豆腐の表面に細かな気泡のような穴が無数に開いており、パック内の水が非常に少なくなっているもの。',
        imageDesc: '豆腐の表面に気泡の穴（す）が開き、水がほとんど入っていないもの。',
        isCorrect: false
      }
    ]
  },
  shoga: {
    ingredientId: 'shoga',
    ingredientName: '生姜',
    question: 'パックや袋に入った生姜（ひね生姜）で、みずみずしく香りが最も高いものはどれ？',
    options: [
      {
        text: '皮にツヤとハリがあり、黄金色（淡い褐色）をしていて、ふっくらと大きくて硬さがあるもの。',
        imageDesc: 'ふっくらとしたコブが大きく、皮がシワシワにならずピシッと張っていて全体が明るい小麦色の生姜。',
        isCorrect: true
      },
      {
        text: '表面がシワシワに乾燥しており、触ると少し柔らかく、切り口が黒ずんでいるもの。',
        imageDesc: '水分が抜けて小さくしぼみ、端のカット部分が真っ黒に乾いている生姜。',
        isCorrect: false
      },
      {
        text: 'コブの隙間や切り口にうっすらと白い綿のようなもの（カビ）が付着しているもの。',
        imageDesc: 'コブのくぼみに白いフワフワしたカビの胞子が見える生姜。',
        isCorrect: false
      }
    ],
    explanation: '新鮮な生姜は「ふっくらと大きく、皮にハリがあるもの」です。皮がシワシワになってしなびているものは、水分が抜けて香りが弱くなり、中が繊維質になって硬くなっています。また、生姜のくぼみ部分はカビが発生しやすいため、白いカビや黒い傷みがないかしっかりチェックしましょう。',
    hardQuestion: '生姜（ひね生姜）をプロとして目利きします。繊維が強すぎず、非常にジューシーで香りが高い極上品はどれ？',
    hardOptions: [
      {
        text: '全体が明るい黄金色（小麦色）でツヤがあり、コブが大きくてふっくらと盛り上がり、皮がピシッと張って硬いもの。',
        imageDesc: '全体が明るい小麦色で、大きなコブがふっくらとハリをもって硬く締まった生姜。',
        isCorrect: true
      },
      {
        text: '皮全体が薄暗い茶褐色で細かなシワが寄っており、軽く押すと少しふにゃっと沈む柔らかさがあるもの。',
        imageDesc: '全体に薄暗い茶褐色で、細かなシワがあり、少し柔らかい生姜。',
        isCorrect: false
      },
      {
        text: 'コブの継ぎ目やくぼみの奥の部分に、白い粉のようなもの（またはカビの初期胞子）がうっすらと付着しているもの。',
        imageDesc: '継ぎ目に白いカビのような粉がうっすら付着した生姜。',
        isCorrect: false
      },
      {
        text: '切り口の部分が全体的に炭のように真っ黒に乾燥して陥没しており、断面から酸っぱいにおいが微かに漂うもの。',
        imageDesc: '切り口が黒く乾燥し、微かに不快なにおいのする生姜。',
        isCorrect: false
      }
    ]
  },
  ran: {
    ingredientId: 'ran',
    ingredientName: '卵',
    question: 'パックに入った卵で、生食にも適した新鮮で栄養価の高い卵を見分けるポイントはどれ？',
    options: [
      {
        text: '殻の表面がざらざらとしていて光沢（ツヤ）がなく、持ったときにずっしりと重みを感じるもの。',
        imageDesc: '光に反射せず、表面がすりガラスのようにマットでざらつきがある卵。',
        isCorrect: true
      },
      {
        text: '殻の表面がツルツルと滑らかで光沢があり、パック内で軽くカサカサと音がするもの。',
        imageDesc: '表面がすべすべして光を反射してテカテカしており、軽く感じられる卵。',
        isCorrect: false
      },
      {
        text: '殻のあちこちに小さなひび割れ（ヘアライン）が入っており、うっすらとシミがあるもの。',
        imageDesc: 'よく見ると極細の線のようなひびがあり、表面に液体のシミがついている卵。',
        isCorrect: false
      }
    ],
    explanation: '産みたての新鮮な卵は、殻の表面が「ざらざらとしていてツヤがない」のが特徴です。これは卵の殻を保護するクチクラ層がしっかり残っているためです。時間が経つと、手の摩擦などで表面がツルツルと光ってきます。また、新鮮な卵は内部の水分が失われていないため、ずっしりと重みがあります。殻のひび割れは雑菌の侵入につながるため避けましょう。',
    hardQuestion: '卵の鮮度を完璧に見極めます。最も炭酸ガスが残っており、白身が盛り上がっている新鮮なものはどれ？',
    hardOptions: [
      {
        text: '殻の表面がざらざらとしてすりガラスのようにマット（艶消し）で、持ったときに殻の厚みとずっしりした重みを感じるもの。',
        imageDesc: '表面がすりガラス状にざらざらとし、手に取ると重みと殻の厚みを感じる卵。',
        isCorrect: true
      },
      {
        text: '殻全体がピカピカと光を反射して滑らかであり、振ると内部で「カタカタ」と中身が動くような軽い音がするもの。',
        imageDesc: '殻がツルツルして光を反射し、振ると中で音がする軽い卵。',
        isCorrect: false
      },
      {
        text: '殻に爪がかかるほどの非常に細いひび割れ（ヘアラインひび）が走っており、その周囲がうっすらと湿っているもの。',
        imageDesc: 'よく見ると細いひび割れがあり、少し湿っている卵。',
        isCorrect: false
      },
      {
        text: '殻の色が非常に白く均一だが、表面全体がオイリーにベタついており、指紋がつきやすいもの。',
        imageDesc: '殻が真っ白だが、表面が油っぽくベタついている卵。',
        isCorrect: false
      }
    ]
  },
  nasu: {
    ingredientId: 'nasu',
    ingredientName: 'なす',
    question: '袋に入ったなすを目利きします。皮が柔らかく最も新鮮で美味しいなすはどれ？',
    options: [
      {
        text: '全体が濃い漆黒に近い紫色でツヤツヤしており、ヘタのトゲがピンと尖って痛いほど鋭いもの。',
        imageDesc: '光を反射するほど黒光りしており、首の部分のトゲトゲがしっかり立っているなす。',
        isCorrect: true
      },
      {
        text: '皮のツヤが失われてマット（艶消し）な質感になっており、ヘタのトゲがしおれて丸くなっているもの。',
        imageDesc: '表面が曇ったような紫色になり（ボケナス）、トゲがふにゃふにゃになっているなす。',
        isCorrect: false
      },
      {
        text: '触ると全体がフカフカと柔らかく、お尻のあたりに茶色い斑点やシワが見えるもの。',
        imageDesc: '水分が抜けて弾力がなく、表面がややしなびて茶色い傷（こすれ傷など）が目立つなす。',
        isCorrect: false
      }
    ],
    explanation: 'なすの新鮮さを見分ける最大のポイントは「ヘタのトゲ」です。触ると痛いほど鋭く尖っているものが新鮮な証拠です。時間が経つとトゲが元気を失って丸くなります。また、皮の色は濃い紫色で「鏡のように光沢があるもの（ツヤ）」を選びましょう。ツヤが消えたものは「ボケナス」と呼ばれ、水分が抜けて種が硬くなっています。',
    hardQuestion: 'なすの目利きをプロ仕様で行います。水分が最も豊富で、種が柔らかく口当たりのよいものはどれ？',
    hardOptions: [
      {
        text: '皮が濃い濃紫色（ほぼ黒色）で、鏡のように光をはっきりと反射する強いツヤがあり、首元のトゲが非常に鋭く尖っているもの。',
        imageDesc: '鏡のように黒光りし、トゲが痛いほど鋭く尖った黒紫色のなす。',
        isCorrect: true
      },
      {
        text: '全体的に少し赤みがかった薄い紫色（ボケナス）をしており、触ると皮がゴムのようにふにゃふにゃと柔らかいもの。',
        imageDesc: '色が薄い紫色で、触るとふにゃふにゃしているなす。',
        isCorrect: false
      },
      {
        text: '表面全体に細かい横方向のシワがあり、お尻の部分に触ると凹みを感じるほどハリが失われているもの。',
        imageDesc: '細かいシワが多く、お尻が柔らかく凹むなす。',
        isCorrect: false
      },
      {
        text: 'ヘタのトゲが完全に平らになっており、ヘタの切り口が黒ずんでボロボロと崩れ、皮の一部に茶色いこすれ傷が広がっているもの。',
        imageDesc: 'トゲがなく、ヘタが黒ずんでボロボロで皮に傷のあるなす。',
        isCorrect: false
      }
    ]
  },
  ebi: {
    ingredientId: 'ebi',
    ingredientName: 'エビ',
    question: '殻付きのエビで、最も新鮮で美味しい状態のものはどれ？',
    options: [
      {
        text: '殻に透明感とツヤがあり、頭と胴体がしっかりと接続されていて、足や頭部に黒ずみがないもの。',
        imageDesc: '殻に透明感とツヤがあり、頭と胴体がしっかりと接続されていて、足や頭部に黒ずみがないエビ。',
        isCorrect: true
      },
      {
        text: '頭と胴体の接続部分が緩んでおり、全体的に赤みや黒ずみが広がっているもの。',
        imageDesc: '頭と胴体の接続部分が緩んでおり、全体的に赤みや黒ずみが広がっているエビ。',
        isCorrect: false
      },
      {
        text: '殻が白く不透明に濁っており、触ると身がフニャフニャと柔らかいもの。',
        imageDesc: '殻が白く不透明に濁っており、触ると身がフニャフニャと柔らかいエビ。',
        isCorrect: false
      }
    ],
    explanation: 'エビは鮮度が落ちると酵素の働きで頭部や足が黒ずんできます。また、殻にツヤと透明感があり、身が引き締まっていて頭と胴体が外れそうになっていないものを選びましょう。',
    hardQuestion: '殻付きエビをプロの視点で見極めます。最も旨味と鮮度が高い状態はどれ？',
    hardOptions: [
      {
        text: '背側の殻が青灰色から黒褐色で透明感があり、節の部分が固く締まり、頭部の殻の中に内臓がしっかり詰まって黒く変色していないもの。',
        imageDesc: '背側の殻が青灰色から黒褐色で透明感があり、節の部分が固く締まり、頭部の殻の中に内臓がしっかり詰まって黒く変色していないエビ。',
        isCorrect: true
      },
      {
        text: '殻は硬いが、背中が大きく曲がって全体的にピンク色（加熱前なのに）に変色しているもの。',
        imageDesc: '殻は硬いが、背中が大きく曲がって全体的にピンク色に変色しているエビ。',
        isCorrect: false
      },
      {
        text: '頭と胴体の隙間からドリップが出ており、殻の表面がベタベタと粘り気を帯びているもの. 必要に応じて、毒素に気をつけましょう。',
        imageDesc: '頭と胴体の隙間からドリップが出ており、殻の表面がベタベタと粘り気を帯びているエビ。',
        isCorrect: false
      },
      {
        text: '殻全体が白濁し、触ると弾力がなく簡単に潰れてしまうもの。',
        imageDesc: '殻全体が白濁し、触ると弾力がなく簡単に潰れてしまうエビ。',
        isCorrect: false
      }
    ]
  },
  satsuraimo: {
    ingredientId: 'satsuraimo',
    ingredientName: 'さつまいも',
    question: '最も甘みが強く美味しいさつまいもはどれ？',
    options: [
      {
        text: '皮の色が均一に濃く鮮やかでツヤがあり、両端の切り口から蜜の跡（黒い固まり）がにじみ出ているもの。',
        imageDesc: '皮の色が均一に濃く鮮やかでツヤがあり、両端の切り口から蜜の跡がにじみ出ているさつまいも。',
        isCorrect: true
      },
      {
        text: '全体的に細長く、表面に凸凹が多くてひげ根が太くて硬いもの。',
        imageDesc: '全体的に細長く、表面に凸凹が多くてひげ根が太くて硬いさつまいも。',
        isCorrect: false
      },
      {
        text: '皮にシワが寄っており、触ると少しふにゃふにゃしていて、所々に黒い斑点があるもの。',
        imageDesc: '皮にシワが寄っており、触ると少しふにゃふにゃしていて、所々に黒い斑点があるさつまいも。',
        isCorrect: false
      }
    ],
    explanation: '美味しいさつまいもは、皮の赤紫色が濃くツヤがあります。切り口付近にヤラピンという成分がしみ出て黒く固まっているものは、糖度が高い証拠（蜜芋）です。また、ふっくらと丸みがあるものが繊維が少なくて甘いです。',
    hardQuestion: 'さつまいもをプロレベルで見極めます。繊維が少なく最も甘みが凝縮されたものはどれ？',
    hardOptions: [
      {
        text: '全体がふっくらと紡錘形（ラグビーボール状）で、皮のツヤが良く、ひげ根の痕跡（穴）が浅くて小さく、切り口の周りに黒い蜜が固まっているもの。',
        imageDesc: '全体がふっくらと紡錘形で、皮のツヤが良く、ひげ根の痕跡が浅くて小さく、切り口の周りに黒い蜜が固まっているさつまいも。',
        isCorrect: true
      },
      {
        text: '全体が非常に細長く、ひげ根がピンと太く生え揃っており、皮の表面がゴツゴツと凹凸に富んでいるもの。',
        imageDesc: '全体が非常に細長く、ひげ根がピンと太く生え揃っており、皮の表面がゴツゴツと凹凸に富んでいるさつまいも。',
        isCorrect: false
      },
      {
        text: '皮全体に白っぽい粉が吹いており、お尻の切り口が完全に乾燥して陥没しているが、蜜の跡がないもの。',
        imageDesc: '皮全体に白っぽい粉が吹いており、お尻の切り口が完全に乾燥して陥没しているが、蜜の跡がないさつまいも。',
        isCorrect: false
      },
      {
        text: '表面に多数のひび割れがあり、皮の一部が黒く陥没して柔らかくなっているもの。',
        imageDesc: '表面に多数のひび割れがあり、皮の一部が黒く陥没して柔らかくなっているさつまいも。',
        isCorrect: false
      }
    ]
  },
  kabotsya: {
    ingredientId: 'kabotsya',
    ingredientName: 'かぼちゃ',
    question: 'カットされたかぼちゃで、最も完熟して甘いものはどれ？',
    options: [
      {
        text: '果肉が濃いオレンジ色で厚みがあり、種が大きくふっくらと丸みを帯びてぎっしり詰まっているもの。',
        imageDesc: '果肉が濃いオレンジ色で厚みがあり、種が大きくふっくらと丸みを帯びてぎっしり詰まっているかぼちゃ。',
        isCorrect: true
      },
      {
        text: '果肉が薄い黄色で、種とワタの間に大きな隙間があり、種がペタッと平らで小さいもの。',
        imageDesc: '果肉が薄い黄色で、種とワタの間に大きな隙間があり、種がペタッと平らで小さいかぼちゃ。',
        isCorrect: false
      },
      {
        text: '皮にハリがなくてシワがあり、果肉の端が乾燥して白っぽく粉を吹いたようになっているもの。',
        imageDesc: '皮にハリがなくてシワがあり、果肉の端が乾燥して白っぽく粉を吹いたようになっているかぼちゃ。',
        isCorrect: false
      }
    ],
    explanation: 'カットかぼちゃは「果肉の色」と「種」を見ます。色が濃いオレンジ色なのは、デンプンが糖に変わって完熟している証拠です。また、種がふっくらと丸く育ち、ワタの奥までぎっしり詰まっているものが美味しいです。',
    hardQuestion: 'カットかぼちゃをプロの目で見極めます。最も完熟し、ホクホクとした食感と強い甘みを持つものはどれ？',
    hardOptions: [
      {
        text: '果肉が非常に濃いオレンジ色で平ら、種が丸々として隙間なく詰まっており、皮の緑色が深く、カットされたヘタの断面が乾燥してコルク状にひび割れているもの。',
        imageDesc: '果肉が非常に濃いオレンジ色で平ら、種が丸々として隙間なく詰まっており、皮の緑色が深く、カットされたヘタの断面が乾燥してコルク状にひび割れているかぼちゃ。',
        isCorrect: true
      },
      {
        text: '果肉が明るい黄色で、種が極端に薄くて小さく、皮の表面に多数の鮮やかなオレンジ色の斑点があるもの。',
        imageDesc: '果肉が明るい黄色で、種が極端に薄くて小さく、皮の表面に多数の鮮やかなオレンジ色の斑点があるかぼちゃ. (isCorrect: false)',
        isCorrect: false
      },
      {
        text: '果肉が柔らかく、ワタの部分がドロッと溶けかかっており、皮が白っぽく退色しているもの。',
        imageDesc: '果肉が柔らかく、ワタの部分がドロッと溶けかかっており、皮が白っぽく退色しているかぼちゃ。',
        isCorrect: false
      },
      {
        text: '断面全体が波打っており、皮の一部がぬるぬると湿ってカビのような黒い斑点があるもの。',
        imageDesc: '断面全体が波打っており、皮の一部がぬるぬると湿ってカビのような黒い斑点があるかぼちゃ。',
        isCorrect: false
      }
    ]
  },
  shishito: {
    ingredientId: 'shishito',
    ingredientName: 'ししとう',
    question: '新鮮で辛味が少なく美味しいししとうはどれ？',
    options: [
      {
        text: '全体が鮮やかな明るい緑色でツヤとハリがあり、ヘタの切り口がみずみずしく、形があまりうねっていないもの。',
        imageDesc: '全体が鮮やかな明るい緑色でツヤとハリがあり、ヘタの切り口がみずみずしく、形があまりうねっていないししとう。',
        isCorrect: true
      },
      {
        text: '形が極端にくねくねと曲がっており、表面に縦のシワが多く、ツヤが失われているもの。',
        imageDesc: '形が極端にくねくねと曲がっており、表面に縦のシワが多く、ツヤが失われているししとう。',
        isCorrect: false
      },
      {
        text: '一部が赤色や黒色に変色しており、触ると全体がふにゃっと柔らかいもの。',
        imageDesc: '一部が赤色や黒色に変色しており、触ると全体がふにゃっと柔らかいししとう。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なししとうは鮮やかな緑色でハリがあります。ストレスを受けたししとうは辛味が強くなる傾向があり、その特徴は「形が極端に曲がっている」「表面にツヤがなくシワが多い」ことです。なるべく真っ直ぐでツヤのあるものを選びましょう。',
    hardQuestion: 'ししとうをプロとして目利きします。辛味が極めて少なく、肉厚でジューシーなものはどれ？',
    hardOptions: [
      {
        text: '全体が瑞々しい緑色で強いツヤがあり、ヘタの先端までピンと張っており、表面にシワがなく、形が比較的ストレートなもの。',
        imageDesc: '全体が瑞々しい緑色で強いツヤがあり、ヘタの先端までピンと張っており、表面にシワがなく、形が比較的ストレートなししとう。',
        isCorrect: true
      },
      {
        text: '極端にくねくねと弓なりに湾曲しており、触ると皮が硬く、全体がくすんだ暗緑色をしているもの。',
        imageDesc: '極端にくねくねと弓なりに湾曲しており、触ると皮が硬く、全体がくすんだ暗緑色をしているししとう。',
        isCorrect: false
      },
      {
        text: '全体が鮮やかな赤色に変色しており、種が内部でパラパラと乾いた音を立てて動くもの。',
        imageDesc: '全体が鮮やかな赤色に変色しており、種が内部でパラパラと乾いた音を立てて動くししとう。',
        isCorrect: false
      },
      {
        text: 'ヘタの周囲が真っ黒に変色して陥没しており、皮の表面が白っぽくカサカサに乾いているもの。',
        imageDesc: 'ヘタの周囲が真っ黒に変色して陥没しており、皮の表面が白っぽくカサカサに乾いているししとう。',
        isCorrect: false
      }
    ]
  },
  ika: {
    ingredientId: 'ika',
    ingredientName: 'イカ',
    question: 'パックに入った生イカで、最も新鮮なものはどれ？',
    options: [
      {
        text: '皮全体が濃いチョコレート色（暗褐色）をしていてツヤがあり、吸盤がピンと立っているもの。',
        imageDesc: '皮全体が濃いチョコレート色をしていてツヤがあり、吸盤がピンと立っているイカ。',
        isCorrect: true
      },
      {
        text: '全体が真っ白に退色しており、触ると身がふにゃふにゃと柔らかいもの。',
        imageDesc: '全体が真っ白に退色しており、触ると身がふにゃふにゃと柔らかいイカ。',
        isCorrect: false
      },
      {
        text: '全体がうっすらとピンク色や赤紫色に変色しており、パックに濁ったドリップがたまっているもの。',
        imageDesc: '全体がうっすらとピンク色や赤紫色に変色しており、パックに濁ったドリップがたまっているイカ。',
        isCorrect: false
      }
    ],
    explanation: 'イカは非常に鮮度変化が早い魚介類です。水揚げ直後は透明で、その後「濃いチョコレート色」になります。さらに時間が経つと「白」になり、最終的に「ピンク・赤」へと変化して傷んでいきます。スーパーでは濃い褐色でツヤがあるものが最も新鮮です。',
    hardQuestion: '生丸ごとイカを究極に目利きします。刺身で食べられるほどの抜群 of 鮮度を誇るものはどれ？',
    hardOptions: [
      {
        text: '胴体全体がツヤのある深いチョコレート色を保ち、目が黒く澄んで盛り上がっており、触ると身に弾力があり、吸盤が吸い付くようなハリがあるもの。',
        imageDesc: '胴体全体がツヤのある深いチョコレート色を保ち、目が黒く澄んで盛り上がっており、触ると身に弾力があり、吸盤が吸い付くようなハリがあるイカ。',
        isCorrect: true
      },
      {
        text: '胴体が半透明の乳白色をしており、目が平らで白く濁り、パックの底に白い粘り気のあるドリップが出ているもの。',
        imageDesc: '胴体が半透明の乳白色をしており、目が平らで白く濁り、パックの底に白い粘り気のあるドリップが出ているイカ。',
        isCorrect: false
      },
      {
        text: '全体が非常に鮮やかなピンク色を帯びており、皮の一部が自然にペロリと剥がれ落ちているもの。',
        imageDesc: '全体が非常に鮮やかなピンク色を帯びており、皮の一部が自然にペロリと剥がれ落ちているイカ。',
        isCorrect: false
      },
      {
        text: '胴体は茶色い部分が残っているが、頭部との接続部が大きく緩んで内臓がはみ出しかけているもの。',
        imageDesc: '胴体は茶色い部分が残っているが、頭部との接続部が大きく緩んで内臓がはみ出しかけているイカ。',
        isCorrect: false
      }
    ]
  },
  kis: {
    ingredientId: 'kis',
    ingredientName: 'キス',
    question: '天ぷらなどに最適な、新鮮なキスはどれ？',
    options: [
      {
        text: '背側が透き通った美しい淡い真珠色（銀白色）をしており、目が黒く澄んでいて、お腹にハリがあるもの。',
        imageDesc: '背側が透き通った美しい淡い真珠色をしており、目が黒く澄んでいて、お腹にハリがあるキス。',
        isCorrect: true
      },
      {
        text: '全体的に白っぽく濁っており、目が赤く充血して窪んでいるもの。',
        imageDesc: '全体的に白っぽく濁っており、目が赤く充血して窪んでいるキス。',
        isCorrect: false
      },
      {
        text: 'お腹のあたりが柔らかくダレており、全体に魚の生臭いにおいが強く漂っているもの。',
        imageDesc: 'お腹のあたりが柔らかくダレており、全体に魚の生臭いにおいが強く漂っているキス。',
        isCorrect: false
      }
    ],
    explanation: 'キスは海の貴婦人と呼ばれるほど美しい魚です。新鮮なものは、背側が透明感のある上品な真珠色（銀白色）をしていて、目がキラキラと澄んでいます。お腹が柔らかくなっているものは内臓が傷み始めているため避けましょう。',
    hardQuestion: '丸ごとのキスをプロの眼力で見極めます。身が引き締まり、最高の鮮度を示すものはどれ？',
    hardOptions: [
      {
        text: '背が淡い真珠色で上品な光沢を放ち、瞳孔がクリアに澄んでおり、エラ蓋がしっかりと閉じてお腹に触ると硬い弾力があるもの。',
        imageDesc: '背が淡い真珠色で上品な光沢を放ち、瞳孔がクリアに澄んでおり、エラ蓋がしっかりと閉じてお腹に触ると硬い弾力があるキス。',
        isCorrect: true
      },
      {
        text: 'ウロコがほとんど剥がれ落ちて皮が露出しており、全体が黄みがかった白色に変色しているもの。',
        imageDesc: 'ウロコがほとんど剥がれ落ちて皮が露出しており、全体が黄みがかった白色に変色しているキス。',
        isCorrect: false
      },
      {
        text: '目が白く濁ってへこみ、エラ蓋の隙間から茶色く濁った体液がにじみ出ているもの。',
        imageDesc: '目が白く濁ってへこみ、エラ蓋の隙間から茶色く濁った体液がにじみ出ているキス。',
        isCorrect: false
      },
      {
        text: 'お腹がぷっくりと膨らんで非常に柔らかく、持ち上げると頭と尾がだらりと真下に折れ曲がるもの。',
        imageDesc: 'お腹がぷっくりと膨らんで非常に柔らかく、持ち上げると頭と尾がだらりと真下に折れ曲がるキス。',
        isCorrect: false
      }
    ]
  },
  oba: {
    ingredientId: 'oba',
    ingredientName: '大葉',
    question: '新鮮で香りが良い大葉はどれ？',
    options: [
      {
        text: '葉の緑色が均一に濃く、表面にハリとみずみずしさがあり、茎の切り口が黒ずんでいないもの。',
        imageDesc: '葉の緑色が均一に濃く、表面にハリとみずみずしさがあり、茎の切り口が黒ずんでいない大葉。',
        isCorrect: true
      },
      {
        text: '葉の端が茶色く枯れたように変色しており、全体がしおれているもの。',
        imageDesc: '葉の端が茶色く枯れたように変色しており、全体がしおれている大葉。',
        isCorrect: false
      },
      {
        text: '葉の裏や表面に黒い斑点が多数あり、触るとカサカサに乾燥しているもの。',
        imageDesc: '葉の裏や表面に黒い斑点が多数あり、触るとカサカサに乾燥している大葉。',
        isCorrect: false
      }
    ],
    explanation: '大葉は乾燥に弱いデリケートなハーブです。新鮮なものは葉がピンと張っていて、変色や萎びがないものです。特に「茎の切り口」を見て、茶色や黒に変色していない緑色〜白色のものを選びましょう。',
    hardQuestion: '大葉をプロレベルで目利きします。香りの成分が豊富で、最も長持ちするものはどれ？',
    hardOptions: [
      {
        text: '葉全体の緑色が非常に濃く、葉脈が細かくて綺麗に対称に広がっており、茎の切り口が瑞々しい黄緑色で、トゲのような産毛がしっかり立っているもの。',
        imageDesc: '葉全体の緑色が非常に濃く、葉脈が細かくて綺麗に対称に広がっており、茎の切り口が瑞々しい黄緑色で、トゲのような産毛がしっかり立っている大葉。',
        isCorrect: true
      },
      {
        text: '葉全体が薄緑色で非常に大きく、茎の切り口が炭のように真っ黒に乾燥して、葉の周りがパリパリに割れているもの。',
        imageDesc: '葉全体が薄緑色で非常に大きく、茎の切り口が炭のように真っ黒に乾燥して、葉の周りがパリパリに割れている大葉。',
        isCorrect: false
      },
      {
        text: '袋の内側に水滴がびっしりついており、葉が水滴に張り付いて全体が茶色くジュクジュクに溶けかけているもの。',
        imageDesc: '袋の内側に水滴がびっしりついており、葉が水滴に張り付いて全体が茶色くジュクジュクに溶けかけている大葉。',
        isCorrect: false
      },
      {
        text: '葉の表面全体に白い粉をふいたような模様があり、触ると油っぽいベタつきを感じるもの。',
        imageDesc: '葉の表面全体に白い粉をふいたような模様があり、触ると油っぽいベタつきを感じる大葉。',
        isCorrect: false
      }
    ]
  },
  renkon: {
    ingredientId: 'renkon',
    ingredientName: '蓮根',
    question: 'シャキシャキして美味しい蓮根はどれ？',
    options: [
      {
        text: '全体にふっくらと丸みがあり、皮が明るい黄褐色で、ずっしりと重みがあって硬いもの。',
        imageDesc: '全体にふっくらと丸みがあり、皮が明るい黄褐色で、ずっしりと重みがあって硬いれんこん。',
        isCorrect: true
      },
      {
        text: '全体的に細長く、表面に黒いシミや傷が多くあり、皮が不自然に真っ白なもの。',
        imageDesc: '全体的に細長く、表面に黒いシミや傷が多くあり、皮が不自然に真っ白なれんこん。',
        isCorrect: false
      },
      {
        text: '穴の内側が真っ黒に変色しており、触ると少し柔らかくて軽いもの。',
        imageDesc: '穴の内側が真っ黒に変色しており、触ると少し柔らかくて軽いれんこん。',
        isCorrect: false
      }
    ],
    explanation: '美味しいれんこんは、肉厚で「丸々としていて重みがあるもの」です。皮が真っ白すぎるものは漂白されている可能性があるため、自然な黄褐色のものが安心です。カットされている場合は、穴の内側が黒ずんでいないものを選びましょう。',
    hardQuestion: 'カットれんこんをプロの視点で見極めます。アクが少なく、シャキシャキとした良質な繊維を持つものはどれ？',
    hardOptions: [
      {
        text: '一節がふっくらと麦俵のような丸みをおびて重く、皮が自然な明るい黄褐色で、カット断面の穴の内側が白く澄んで乾燥していないもの。',
        imageDesc: '一節がふっくらと麦俵のような丸みをおびて重く、皮が自然な明るい黄褐色で、カット断面の穴の内側が白く澄んで乾燥していないれんこん。',
        isCorrect: true
      },
      {
        text: '不自然なほど抜けるように真っ白で、断面を触るとヌルヌルとした粘り気があり、漂白剤のようなにおいが漂うもの。',
        imageDesc: '不自然なほど抜けるように真っ白で、断面を触るとヌルヌルとした粘り気があり、漂白剤のようなにおいが漂うれんこん。',
        isCorrect: false
      },
      {
        text: '全体に不規則な茶色や黒のシミ（赤渋）が深く広がっており、触るとスポンジのように柔らかいもの。',
        imageDesc: '全体に不規則な茶色や黒のシミが深く広がっており、触るとスポンジのように柔らかいれんこん。',
        isCorrect: false
      },
      {
        text: '一節が非常に細長く、穴の中に泥が詰まっており、断面の角が大きく丸みを帯びて茶色くカサカサに乾いているもの。',
        imageDesc: '一節が非常に細長く、穴の中に泥が詰まっており、断面の角が大きく丸みを帯びて茶色くカサカサに乾いているれんこん。',
        isCorrect: false
      }
    ]
  },
  maitake: {
    ingredientId: 'maitake',
    ingredientName: '舞茸',
    question: 'パックに入った舞茸で、最も新鮮で香りが高いものはどれ？',
    options: [
      {
        text: 'カサのフチが濃い黒褐色（深い茶色）で肉厚で、全体がシャキッと引き締まっていて湿っていないもの。',
        imageDesc: 'カサのフチが濃い黒褐色で肉厚で、全体がシャキッと引き締まっていて湿っていない舞茸。',
        isCorrect: true
      },
      {
        text: 'カサの色が白っぽく抜けており、パックの内側に水滴がつき、全体がしんなりとして水っぽいもの。',
        imageDesc: 'カサの色が白っぽく抜けており、パックの内側に水滴がつき、全体がしんなりとして水っぽい舞茸。',
        isCorrect: false
      },
      {
        text: '軸の部分がスカスカして柔らかく、フチがボロボロと細かく崩れているもの。',
        imageDesc: '軸の部分がスカスカして柔らかく、フチがボロボロと細かく崩れている舞茸。',
        isCorrect: false
      }
    ],
    explanation: '舞茸は水分に弱いキノコです。新鮮なものは、カサのフチが「濃い茶色や黒色」ではっきりしており、軸もカサもピンと硬さがあります。古くなると水分を吸って色が全体に薄くなり、軸がふにゃっとしてパック内に水滴がたまります。',
    hardQuestion: 'パック入りの舞茸をプロの眼力で目利きします。最も旨味が強く、シャキシャキの歯ごたえがあるものはどれ？',
    hardOptions: [
      {
        text: 'カサが肉厚でフチの縮れ（ウェーブ）が非常に細かく、色が濃い黒褐色でツヤがあり、軸の白い部分が固く締まっていて、パック内に結露が全くないもの。',
        imageDesc: 'カサが肉厚でフチの縮れが非常に細かく、色が濃い黒褐色でツヤがあり、軸の白い部分が固く締まっていて、パック内に結露が全くない舞茸。',
        isCorrect: true
      },
      {
        text: '全体的に明るい茶色からベージュ色をしており、触ると全体がふにゃっと柔らかく、パックの底に薄茶色の水分が溜まっているもの。',
        imageDesc: '全体的に明るい茶色からベージュ色をしており、触ると全体がふにゃっと柔らかく、パックの底に薄茶色の水分が溜まっている舞茸。',
        isCorrect: false
      },
      {
        text: 'カサのウェーブがなく真っ直ぐに伸びており、フチの部分が薄く透き通るような黄色に変色しているもの。',
        imageDesc: 'カサのウェーブがなく真っ直ぐに伸びており、フチの部分が薄く透き通るような黄色に変色している舞茸。',
        isCorrect: false
      },
      {
        text: 'カサのフチ全体に細かい白い粉（カビのように見える胞子）が大量に付着しており、酸っぱい発酵臭がするもの。',
        imageDesc: 'カサのフチ全体に細かい白い粉が大量に付着しており、酸っぱい発酵臭がする舞茸。',
        isCorrect: false
      }
    ]
  },
  butahikiku: {
    ingredientId: 'butahikiku',
    ingredientName: '豚挽き肉',
    question: '新鮮でジューシーな豚挽き肉はどれ？',
    options: [
      {
        text: '全体が透明感のある綺麗なピンク色（淡い赤色）で、一粒一粒がはっきりしており、ドリップがないもの。',
        imageDesc: '全体が透明感のある綺麗なピンク色で、一粒一粒がはっきりしており、ドリップがない豚挽き肉。',
        isCorrect: true
      },
      {
        text: '全体的に色がくすんで茶褐色やグレーっぽくなっており、トレイの底に赤い汁がにじみ出ているもの。',
        imageDesc: '全体的に色がくすんで茶褐色やグレーっぽくなっており、トレイの底に赤い汁がにじみ出ている豚挽き肉。',
        isCorrect: false
      },
      {
        text: '赤身部分が不自然に真っ赤で、脂身（白い部分）が黄色く変色してベタついているもの。',
        imageDesc: '赤身部分が不自然に真っ赤で、脂身が黄色く変色してベタついている豚挽き肉。',
        isCorrect: false
      }
    ],
    explanation: '豚挽き肉は非常に傷みやすいため、ドリップ（トレイの底の汁）が出ていないことが第一条件です。新鮮なものは明るいピンク色をしています。酸化が進むと茶褐色や灰色に変色し、臭みも出てきます。',
    hardQuestion: '豚挽き肉の鮮度を完璧に見極めます。雑菌が最も少なく、脂の乗りがベストなものはどれ？',
    hardOptions: [
      {
        text: '赤身が透明感のある明るいピンク色、脂身が濁りのない純白色をしており、ひき肉の粒同士がダレておらず、トレイの底に一切ドリップがないパック。',
        imageDesc: '赤身が透明感のある明るいピンク色、脂身が濁りのない純白色をしており、ひき肉の粒同士がダレておらず、トレイの底に一切ドリップがない豚挽き肉。',
        isCorrect: true
      },
      {
        text: '赤身は明るいピンク色だが、よく見ると脂身（白い粒）がうっすらと黄色みを帯びており、パックを傾けると中身が大きく崩れるもの。',
        imageDesc: '赤身は明るいピンク色だが、よく見ると脂身がうっすらと黄色みを帯びており、パックを傾けると中身が大きく崩れる豚挽き肉。',
        isCorrect: false
      },
      {
        text: '全体が非常に濃い赤色（牛肉のひき肉のよう）をしており、触ると表面に強い粘り気があり、トレイのふちに水滴がついているもの。',
        imageDesc: '全体が非常に濃い赤色をしており、触ると表面に強い粘り気があり、トレイのふちに水滴がついている豚挽き肉。',
        isCorrect: false
      },
      {
        text: 'パックの底全体に白濁したドリップが薄く広がっており、ひき肉同士が完全に一体化してペースト状（ねんど状）になっているもの。',
        imageDesc: 'パックの底全体に白濁したドリップが薄く広がっており、ひき肉同士が完全に一体化してペースト状になっている豚挽き肉。',
        isCorrect: false
      }
    ]
  },
  nagaranege: {
    ingredientId: 'nagaranege',
    ingredientName: '長ねぎ',
    question: '甘みがあって新鮮な長ねぎ（泥なし）はどれ？',
    options: [
      {
        text: '白い部分が長く、触ると硬くて弾力があり、緑色との境目がはっきりしていて、葉の先までピンと張っているもの。',
        imageDesc: '白い部分が長く、触ると硬くて弾力があり、緑色との境目がはっきりしていて、葉の先までピンと張っている長ねぎ。',
        isCorrect: true
      },
      {
        text: '白い部分を触るとフカフカと柔らかく、緑色の葉が黄色く変色してしおれているもの。',
        imageDesc: '白い部分を触るとフカフカと柔らかく、緑色の葉が黄色く変色してしおれている長ねぎ。',
        isCorrect: false
      },
      {
        text: '根元の切り口から新しい芽がツンと伸びており、全体に細くて軽いもの。',
        imageDesc: '根元の切り口から新しい芽がツンと伸びており、全体に細くて軽い長ねぎ。',
        isCorrect: false
      }
    ],
    explanation: '長ねぎは「白い部分の硬さ」が重要です。ここがしっかり硬く締まっているものは、中身が詰まっていてみずみずしく、甘みがあります。柔らかいものは、内部がスカスカ（すが入っている）か、古くなって乾燥しています。',
    hardQuestion: '長ねぎをプロレベルで見極めます。最もみずみずしく、繊維が柔らかくて甘みが強いものはどれ？',
    hardOptions: [
      {
        text: '白い部分に艶やかな光沢があり、指で軽くつまむとカチッと硬い弾力があり、青い葉の内部にある粘質物（ネバネバ）が乾燥せずにみずみずしく残っているもの。',
        imageDesc: '白い部分に艶やかな光沢があり、指で軽くつまむとカチッと硬い弾力があり、青い葉の内部にある粘質物が乾燥せずにみずみずしく残っている長ねぎ。',
        isCorrect: true
      },
      {
        text: '白い部分の一部が不自然に膨らんでおり、触ると柔らかく、根元から新しい中軸の葉が3cm以上飛び出しているもの。',
        imageDesc: '白い部分の一部が不自然に膨らんでおり、触ると柔らかく、根元から新しい中軸の葉が3cm以上飛び出している長ねぎ。',
        isCorrect: false
      },
      {
        text: '外皮がカサカサに乾いて全体がシワシワになっており、白い部分を握るとグニュッと潰れてしまうもの。',
        imageDesc: '外皮がカサカサに乾いて全体がシワシワになっており、白い部分を握るとグニュッと潰れてしまう長ねぎ。',
        isCorrect: false
      },
      {
        text: '全体的に青い葉の部分が茶色く枯れており、白い部分の皮をめくるとヌルヌルした酸っぱい粘液がにじみ出ているもの。',
        imageDesc: '全体的に青い葉の部分が茶色く枯れており、白い部分の皮をめくるとヌルヌルした酸っぱい粘液がにじみ出ている長ねぎ。',
        isCorrect: false
      }
    ]
  },
  shimeji: {
    ingredientId: 'shimeji',
    ingredientName: 'しめじ',
    question: 'パックに入ったしめじで、最も新鮮なものはどれ？',
    options: [
      {
        text: 'カサが小さめでふっくらと丸みがあり、色が濃い茶色で、株全体がキュッとまとまっているもの。',
        imageDesc: 'カサが小さめでふっくらと丸みがあり、色が濃い茶色で、株全体がキュッとまとまっているしめじ。',
        isCorrect: true
      },
      {
        text: 'カサが大きく開いて平らになっており、フチが反り返っていて、全体が柔らかいもの。',
        imageDesc: 'カサが大きく開いて平らになっており、フチが反り返っていて、全体が柔らかいしめじ。',
        isCorrect: false
      },
      {
        text: 'カサの表面がしっとり濡れており、パックの内側にたくさんの水滴がつき、株の根元がふにゃふにゃなもの。',
        imageDesc: 'カサの表面がしっとり濡れており、パックの内側にたくさんの水滴がつき、株の根元がふにゃふにゃなしめじ。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なしめじは、カサが「小さめで丸いドーム状」をしています。カサが大きく開いて平らになっているものは、胞子が放出されて味が落ちています。また、軸が太く、株全体が引き締まっていて湿っていないものを選びましょう。',
    hardQuestion: 'パック入りのぶなしめじをプロの目で見極めます。最も風味が良く、軸がシャキシャキとしているものはどれ？',
    hardOptions: [
      {
        text: 'カサが開ききらずに半球形（ドーム状）を保ち、色が濃い黒褐色でハリがあり、軸が太くて白く、株全体が固く密集していてパックに結露がないもの。',
        imageDesc: 'カサが開ききらずに半球形を保ち、色が濃い黒褐色でハリがあり、軸が太くて白く、株全体が固く密集していてパックに結露がないしめじ。',
        isCorrect: true
      },
      {
        text: 'カサが完全に平らに開き、縁が上に反り返っていて、触ると傘の表面がベタベタと粘り気を帯びているもの。',
        imageDesc: 'カサが完全に平らに開き、縁が上に反り返っていて、触ると傘の表面がベタベタと粘り気を帯びているしめじ。',
        isCorrect: false
      },
      {
        text: 'パックの底にしんなりしたカサの破片が多数落ちており、パックの内側に水滴がびっしりと付着して全体がふやけているもの。',
        imageDesc: 'パックの底にしんなりしたカサの破片が多数落ちており、パックの内側に水滴がびっしりと付着して全体がふやけているしめじ。',
        isCorrect: false
      },
      {
        text: 'カサ全体が白っぽくカサカサに乾燥しており、軸の真ん中に細い縦裂けのスジが無数に入っているもの。',
        imageDesc: 'カサ全体が白っぽくカサカサに乾燥しており、軸の真ん中に細い縦裂けのスジが無数に入っているしめじ。',
        isCorrect: false
      }
    ]
  },
  shirataki: {
    ingredientId: 'shirataki',
    ingredientName: 'しらたき',
    question: 'パックに入ったしらたきで、弾力があって美味しいものはどれ？',
    options: [
      {
        text: '太さが均一で、パック内の水が澄んで透明であり、しらたき自体が白く濁らずにしっかりとしたコシがあるもの。',
        imageDesc: '太さが均一で、パック内の水が澄んで透明であり、しらたき自体が白く濁らずにしっかりとしたコシがあるしらたき。',
        isCorrect: true
      },
      {
        text: 'パックの水がうっすらと白く濁っており、しらたきが全体的にふにゃふにゃと細く縮れているもの。',
        imageDesc: 'パックの水がうっすらと白く濁っており、しらたきが全体的にふにゃふにゃと細く縮れているしらたき。',
        isCorrect: false
      },
      {
        text: 'しらたきの一部が黄色っぽく変色しており、触ると簡単にちぎれてしまうもの。',
        imageDesc: 'しらたきの一部が黄色っぽく変色しており、触ると簡単にちぎれてしまうしらたき。',
        isCorrect: false
      }
    ],
    explanation: 'しらたきは保存水と一緒に密閉されています。新鮮なものは「保存水が完全に透明」で、濁りがありません。水が白く濁っているものは、しらたきが劣化して成分が溶け出している証拠です。また、しっかりとコシ（太さと弾力）があるものを選びましょう。',
    hardQuestion: 'パック入りのしらたきを極限まで目利きします。味が染み込みやすく、コリコリとした最高の食感を持つものはどれ？',
    hardOptions: [
      {
        text: 'しらたきの表面に細かなザラザラ（縮れ）があり、パック内のアルカリ保存水が完全に澄んで無色透明で、束全体が適度にほぐれてピンと張っているもの。',
        imageDesc: 'しらたきの表面に細かなザラザラがあり、パック内のアルカリ保存水が完全に澄んで無色透明で、束全体が適度にほぐれてピンと張っているしらたき。',
        isCorrect: true
      },
      {
        text: 'パック内の水が白く乳化して濁っており、しらたきを触るとぬるぬるとした粘り気があり、ちぎれやすいもの。',
        imageDesc: 'パック内の水が白く乳化して濁っており、しらたきを触るとぬるぬるとした粘り気があり、ちぎれやすいしらたき。',
        isCorrect: false
      },
      {
        text: '全体的に不自然なほど極細で、色が真っ白ではなく、一部が灰色や茶色に変色してパックの底に沈殿しているもの。',
        imageDesc: '全体的に不自然なほど極細で、色が真っ白ではなく、一部が灰色や茶色に変色してパックの底に沈殿しているしらたき。',
        isCorrect: false
      },
      {
        text: 'パックのフィルムがガスで大きく膨らんでおり、開封しなくてもツンとした不快な酸発酵臭が漂っているもの。',
        imageDesc: 'パックのフィルムがガスで大きく膨らんでおり、開封しなくてもツンとした不快な酸発酵臭が漂っているしらたき。',
        isCorrect: false
      }
    ]
  },
  ingen: {
    ingredientId: 'ingen',
    ingredientName: 'いんげん',
    question: '新鮮でスジが柔らかくいんげんはどれ？',
    options: [
      {
        text: '全体が鮮やかな明るい緑色で、触ると太さが均一でハリがあり、ポキッと簡単に折れそうなもの。',
        imageDesc: '全体が鮮やかな明るい緑色で、触ると太さが均一でハリがあり、ポキッと簡単に折れそうないんげん。',
        isCorrect: true
      },
      {
        text: '中の豆が大きくボコボコと膨らんでおり、全体が弓なりにくねくねと曲がっているもの。',
        imageDesc: '中の豆が大きくボコボコと膨らんでおり、全体が弓なりにくねくねと曲がっているいんげん。',
        isCorrect: false
      },
      {
        text: '端の切り口が黒ずんでおり、全体に茶色いシミや黒い斑点があり、触るとふにゃふにゃとしなるもの。',
        imageDesc: '端の切り口が黒ずんでおり、全体に茶色いシミや黒い斑点があり、触るとふにゃふにゃとしなるいんげん。',
        isCorrect: false
      }
    ],
    explanation: 'いんげんは「豆が育ちすぎていないもの」が柔らかくて美味しいです。豆の部分が大きく膨らんでボコボコしているものは、皮が硬くなって繊維（スジ）も強くなっています。全体にハリがあり、きれいな緑色のものを選びましょう。',
    hardQuestion: '袋に入ったさやいんげんをプロの視点で見極めます。最も柔らかく、甘みがあってジューシーなものはどれ？',
    hardOptions: [
      {
        text: 'さや全体の緑色が均一でツヤがあり、中の豆の膨らみがほとんど目立たず平らで、さやの先端（ヒゲ）まで黒ずまずに瑞々しいもの。',
        imageDesc: 'さや全体の緑色が均一でツヤがあり、中の豆の膨らみがほとんど目立たず平らで、さやの先端まで黒ずまずに瑞々しいいんげん。',
        isCorrect: true
      },
      {
        text: 'さやの表面にたくさんの茶色い小さなシミ（赤渋）があり、豆の部分がアズキのように大きくボコボコと丸く突き出ているもの。',
        imageDesc: 'さやの表面にたくさんの茶色い小さなシミがあり、豆の部分がアズキのように大きくボコボコと丸く突き出ているいんげん。',
        isCorrect: false
      },
      {
        text: 'さや全体が黄色っぽく退色しており、両端を持って曲げても折れずに、ゴムのようにぐにゃりと曲がってしまうもの。',
        imageDesc: 'さや全体が黄色っぽく退色しており、両端を持って曲げても折れずに、ゴムのようにぐにゃりと曲がってしまういんげん。',
        isCorrect: false
      },
      {
        text: 'ヘタの切り口が真っ黒に乾燥して陥没しており、さやの表面が白っぽくカサカサに乾いているもの。',
        imageDesc: 'ヘタの切り口が真っ黒に乾燥して陥没しており、さやの表面が白っぽくカサカサに乾いているいんげん。',
        isCorrect: false
      }
    ]
  },
  chizu: {
    ingredientId: 'chizu',
    ingredientName: 'チーズ',
    question: 'ブロックやシュレッドのチーズで、品質が良いものはどれ？',
    options: [
      {
        text: '表面に不自然な結露や油浮きがなく、色が均一で、カビ（ブルーチーズなどを除く）が全く生えていないもの。',
        imageDesc: '表面に不自然な結露や油浮きがなく、色が均一で、カビが全く生えていないチーズ。',
        isCorrect: true
      },
      {
        text: 'パッケージの内側に油分や水分（水分分離）がにじみ出ており、塊が互いにベタベタとくっついているもの。',
        imageDesc: 'パッケージの内側に油分や水分がにじみ出ており、塊が互いにベタベタとくっついているチーズ。',
        isCorrect: false
      },
      {
        text: 'チーズのフチが乾燥してカサカサに硬くなっており、うっすらと白や緑のフワフワした点が見えるもの。',
        imageDesc: 'チーズのフチが乾燥してカサカサに硬くなっており、うっすらと白や緑のフワフワした点が見えるチーズ。',
        isCorrect: false
      }
    ],
    explanation: 'チーズは乾燥や温度変化に敏感です。新鮮で保存状態が良いものは、パッケージ内で「油分や水分の分離」が起きておらず、さらっとしています。また、未開封でもフチが黄色く硬く乾いているものや、カビの兆候があるものは避けましょう。',
    hardQuestion: 'シュレッドチーズをプロレベルで目利きします。ダマにならず、風味ととろけ具合が完璧な状態はどれ？',
    hardOptions: [
      {
        text: '袋の中でチーズの一粒一粒がサラサラとほぐれて独立しており、袋の内側に結露が全くなく、チーズ自体の色がクリアなクリーム色で均一なもの。',
        imageDesc: '袋の中でチーズの一粒一粒がサラサラとほぐれて独立しており、袋の内側に結露が全くなく、チーズ自体の色がクリアなクリーム色で均一なチーズ。',
        isCorrect: true
      },
      {
        text: '温度管理が甘かったためか、袋の中でチーズ同士が合体して大きな塊になっており、袋の底に透明な液体がたまっているもの。',
        imageDesc: '温度管理が甘かったためか、袋の中でチーズ同士が合体して大きな塊になっており、袋の底に透明な液体がたまっているチーズ。',
        isCorrect: false
      },
      {
        text: 'チーズの角が全体的に乾燥して茶色く変色し、表面に不自然な白いカビの粉が吹いているもの。',
        imageDesc: 'チーズの角が全体的に乾燥して茶色く変色し、表面に不自然な白いカビの粉が吹いているチーズ。',
        isCorrect: false
      },
      {
        text: '袋の内側全体が油で白く曇っており、チーズ全体がべっとりしたペースト状になって袋の壁に張り付いているもの。',
        imageDesc: '袋の内側全体が油で白く曇っており、チーズ全体がべっとりしたペースト状になって袋の壁に張り付いているチーズ。',
        isCorrect: false
      }
    ]
  },
  chikuwa: {
    ingredientId: 'chikuwa',
    ingredientName: 'ちくわ',
    question: 'パックに入ったちくわで、ぷりぷりして最も美味しいものはどれ？',
    options: [
      {
        text: '焼き色がきれいなキツネ色でツヤがあり、触るとしっかりとした弾力（硬さ）があり、パック内に余分な水滴がないもの。',
        imageDesc: '焼き色がきれいなキツネ色でツヤがあり、触るとしっかりとした弾力があり、パック内に余分な水滴がないちくわ。',
        isCorrect: true
      },
      {
        text: '表面が濡れてぬるぬるした感じがあり、パックの中に白い濁った水滴がびっしりついているもの。',
        imageDesc: '表面が濡れてぬるぬるした感じがあり、パックの中に白い濁った水滴がびっしりついているちくわ。',
        isCorrect: false
      },
      {
        text: '焼き色が非常に薄く、触るとふにゃふにゃと柔らかく、全体的にしぼんでいるもの。',
        imageDesc: '焼き色が非常に薄く、触るとふにゃふにゃと柔らかく、全体的にしぼんでいるちくわ。',
        isCorrect: false
      }
    ],
    explanation: 'ちくわなどの練り製品は、時間の経過とともに水分が抜けて「弾力」が失われます。新鮮なものは、触ったときに指を押し返すような「強い弾力（ハリ）」があります。また、パッケージ内に水滴が出ているものは、旨味が水分と一緒に逃げ出している証拠です。',
    hardQuestion: 'ちくわのパックをプロの視点で見極めます。最も魚の旨味が詰まり、最高の歯ごたえを持つものはどれ？',
    hardOptions: [
      {
        text: '表面のちりめん状の焼き模様が立体的で美しく、皮に艶やかなツヤがあり、指で押すと跳ね返すような強い弾力があり、パックの内側がドライに密閉されているもの。',
        imageDesc: '表面のちりめん状の焼き模様が立体的で美しく、皮に艶やかなツヤがあり、指で押すと跳ね返すような強い弾力があり、パックの内側がドライに密閉されているちくわ。',
        isCorrect: true
      },
      {
        text: '焼き模様が完全に平坦で、パックを傾けるとちくわの穴の内部から薄い黄色の水分がにじみ出て、ちくわ全体が白っぽくふやけているもの。',
        imageDesc: '焼き模様が完全に平坦で、パックを傾けるとちくわの穴の内部から薄い黄色の水分がにじみ出て、ちくわ全体が白っぽくふやけているちくわ。',
        isCorrect: false
      },
      {
        text: 'ちくわの両端のカット断面が茶色く乾燥してヒビが入っており、表面全体がオイリーにテカテカと光っているもの。',
        imageDesc: 'ちくわの両端のカット断面が茶色く乾燥してヒビが入っており、表面全体がオイリーにテカテカと光っているちくわ。',
        isCorrect: false
      },
      {
        text: '触ると驚くほど柔らかく、ちくわの一部がパックのフィルムにべったりと張り付いて破れてしまうもの。',
        imageDesc: '触ると驚くほど柔らかく、ちくわの一部がパックのフィルムにべったりと張り付いて破れてしまうちくわ。',
        isCorrect: false
      }
    ]
  },
  negi: {
    ingredientId: 'negi',
    ingredientName: 'ネギ',
    question: '新鮮で香りと薬味に最適なねぎはどれ？',
    options: [
      {
        text: '葉先までピンと真っ直ぐに立っていて張りがあり、緑色が濃く、根元の切り口が白いもの。',
        imageDesc: '葉先までピンと真っ直ぐに立っていて張りがあり、緑色が濃く、根元の切り口が白いねぎ。',
        isCorrect: true
      },
      {
        text: '葉先が黄色から茶色く枯れてダラリと垂れ下がっており、全体的にしおれているもの. 必要に応じて、毒素に気をつけましょう。',
        imageDesc: '葉先が黄色から茶色く枯れてダラリと垂れ下がっており、全体的にしおれているねぎ。',
        isCorrect: false
      },
      {
        text: '袋の中に水滴が大量に溜まっており、ネギの表面が少しぬるぬるして半透明になっているもの。',
        imageDesc: '袋の中に水滴が大量に溜まっており、ネギの表面が少しぬるぬるして半透明になっているねぎ。',
        isCorrect: false
      }
    ],
    explanation: '小ねぎなどの葉ねぎは乾燥と蒸れに弱いです。新鮮なものは「葉先までピンと張って」立ち上がっています。葉先が黄色くなっているものは古くなって栄養が失われています。また、袋の中が蒸れてぬるぬるしているものは傷み始めているため避けましょう。',
    hardQuestion: '小ねぎの袋をプロの目で見極めます。薬味としての香りが最も高く、瑞々しさが長持ちするものはどれ？',
    hardOptions: [
      {
        text: '根元から葉先まで太さがほぼ均一で、色が濃い深緑色をしており、外皮にシワがなく、根元のカット部が瑞々しい純白色で乾燥していないもの。',
        imageDesc: '根元から葉先まで太さがほぼ均一で、色が濃い深緑色をしており、外皮にシワがなく、根元のカット部が瑞々しい純白色で乾燥していないねぎ。',
        isCorrect: true
      },
      {
        text: '葉先は緑色だが、根元の白い部分がドロドロに溶けかかっており、袋の底に茶色い汁がたまっているもの。',
        imageDesc: '葉先は緑色だが、根元の白い部分がドロドロに溶けかかっており、袋の底に茶色い汁がたまっているねぎ。',
        isCorrect: false
      },
      {
        text: '全体的に非常に細長く、葉の表面に細かい白い虫食いの跡が無数に入り、ツヤがないもの。',
        imageDesc: '全体的に非常に細長く、葉の表面に細かい白い虫食いの跡が無数に入り、ツヤがないねぎ。',
        isCorrect: false
      },
      {
        text: '袋の内側が結露でビショビショになっており、ネギの葉が袋に張り付いて、その部分が半透明の茶色に変色しているもの。',
        imageDesc: '袋の内側が結露でビショビショになっており、ネギの葉が袋に張り付いて、その部分が半透明の茶色に変色しているねぎ。',
        isCorrect: false
      }
    ]
  },
  eringi: {
    ingredientId: 'eringi',
    ingredientName: 'エリンギ',
    question: 'パックに入ったエリンギで、最も食感が良くて新鮮なものはどれ？',
    options: [
      {
        text: '軸が白くて太く、触ると硬くて弾力があり、カサが開いておらず、フチが内側に巻き込んでいるもの。',
        imageDesc: '軸が白くて太く、触ると硬くて弾力があり、カサが開いておらず、フチが内側に巻き込んでいるエリンギ。',
        isCorrect: true
      },
      {
        text: '軸が黄色っぽく変色して柔らかく、カサが完全に平らに開いてフチが薄くなっているもの。',
        imageDesc: '軸が黄色っぽく変色して柔らかく、カサが完全に平らに開いてフチが薄くなっているエリンギ。',
        isCorrect: false
      },
      {
        text: 'パックの内側に水滴がびっしりついており、全体的に触るとふにゃふにゃして水っぽいもの。',
        imageDesc: 'パックの内側に水滴がびっしりついており、全体的に触るとふにゃふにゃして水っぽいエリンギ。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なエリンギは「軸が白くて硬い」のが特徴です。また、カサは開きすぎておらず、フチが下向きに丸く巻き込んでいるものが若くて美味しい状態です。湿気に弱いため、パック内に水滴がないものを選びましょう。',
    hardQuestion: 'パック入りのエリンギをプロ仕様で目利きします。最も歯ごたえが良く、香りが良好なものはどれ？',
    hardOptions: [
      {
        text: 'カサが肉厚なドーム状でフチがしっかりと内側に巻き、軸が太く雪のように真っ白で、指でつまむと硬いハリがあるもの。',
        imageDesc: 'カサが肉厚なドーム状でフチがしっかりと内側に巻き、軸が太く雪のように真っ白で、指でつまむと硬いハリがあるエリンギ。',
        isCorrect: true
      },
      {
        text: '軸が細長く全体的に柔らかく、カサの裏側のヒダ（白い部分）が茶色く変色してドロドロと湿っているもの。',
        imageDesc: '軸が細長く全体的に柔らかく、カサの裏側のヒダが茶色く変色してドロドロと湿っているエリンギ。',
        isCorrect: false
      },
      {
        text: '全体がカサカサに乾いており、カサの表面に細かいひび割れが多数走り、軸の真ん中にスジ状の空洞があるもの。',
        imageDesc: '全体がカサカサに乾いており、カサの表面に細かいひび割れが多数走り、軸の真ん中にスジ状の空洞があるエリンギ。',
        isCorrect: false
      },
      {
        text: 'パックの内側に水滴が溜まっており、エリンギの表面が全体的に黄色みを帯びて、触ると粘り気があるもの。',
        imageDesc: 'パックの内側に水滴が溜まっており、エリンギの表面が全体的に黄色みを帯びて、触ると粘り気があるエリンギ。',
        isCorrect: false
      }
    ]
  },
  saito: {
    ingredientId: 'saito',
    ingredientName: 'さといも',
    question: '泥付きのさといもで、最も新鮮で美味しいものはどれ？',
    options: [
      {
        text: '全体に丸みがあり、泥が湿っていて、縞模様が等間隔でくっきりと綺麗に見えるもの。',
        imageDesc: '全体に丸みがあり、泥が湿っていて、縞模様が等間隔でくっきりと綺麗に見えるさといも。',
        isCorrect: true
      },
      {
        text: '縞模様が歪んでいて、表面がカサカサに乾いており、芽の先端が大きく伸びているもの。',
        imageDesc: '縞模様が歪んでいて、表面がカサカサに乾いており、芽の先端が大きく伸びているさといも。',
        isCorrect: false
      },
      {
        text: '形が細長く、押すと柔らかい部分があり、表面に緑色のカビが生えているもの。',
        imageDesc: '形が細長く、押すと柔らかい部分があり、表面に緑色のカビが生えているさとも。',
        isCorrect: false
      }
    ],
    explanation: 'さといもは「丸みがあり、泥が湿っているもの」が新鮮です。皮の縞模様が平行に等間隔で走っているものは、健康に良く育った証拠です。芽が伸びているものや、柔らかくなっているものは傷み始めているため避けましょう。',
    hardQuestion: '泥付きさといもをプロが目利きします。最もホクホクとして粘り気があり、傷みのないものはどれ？',
    hardOptions: [
      {
        text: 'ラグビーボールのような丸みがあり、お尻（親芋との接合部）が硬く締まっていて、泥が乾ききっておらず、縞模様がはっきりと均等に現れているもの。',
        imageDesc: '丸みがあり、お尻が硬く締まり、泥が湿っていて、縞模様が均等なさといも。',
        isCorrect: true
      },
      {
        text: 'お尻のあたりが少しフカフカと柔らかく、押すと簡単に沈み込み、表面の皮が一部剥がれて乾燥しているもの。',
        imageDesc: 'お尻が柔らかく、皮が剥がれて乾燥したさといも。',
        isCorrect: false
      },
      {
        text: '非常に細長く、頭部から鮮やかな緑色の太い芽が5cm以上伸びているもの。',
        imageDesc: '細長く、頭部から緑色の芽が伸びたさといも。',
        isCorrect: false
      },
      {
        text: '全体に黒い斑点があり、カビのような発酵臭が漂い、お尻が茶色くジュクジュクに溶けかかっているもの。',
        imageDesc: '全体に黒い斑点があり、お尻が茶色く溶けかかったさといも。',
        isCorrect: false
      }
    ]
  },
  konnyaku: {
    ingredientId: 'konnyaku',
    ingredientName: 'こんにゃく',
    question: 'パックに入った板こんにゃくで、味が染み込みやすく状態が良いものはどれ？',
    options: [
      {
        text: '表面にシワや不自然な凹凸がなく、触ると弾力があり、パック内の水が透明で濁っていないもの。',
        imageDesc: '表面にシワがなく、弾力があり、パック内の水が透明なこんにゃく。',
        isCorrect: true
      },
      {
        text: 'パック内の水が白く乳白色に濁っており、こんにゃくの表面がふにゃふにゃと崩れているもの。',
        imageDesc: '水が白く濁り、表面がふにゃふにゃなこんにゃく。',
        isCorrect: false
      },
      {
        text: 'こんにゃくの四隅が茶色く乾燥して縮んでおり、表面がベタベタしているもの。',
        imageDesc: '四隅が乾燥して縮み、ベタついているこんにゃく。',
        isCorrect: false
      }
    ],
    explanation: 'こんにゃくは水分とアルカリ性の保存水で満たされています。水が濁っているものは、こんにゃく自体が傷んで崩れ出している証拠です。また、ハリと弾力があり、さらっとしているものが美味しいです。',
    hardQuestion: '板こんにゃくをプロの眼力で見極めます。最も弾力が良く味が染み込みやすい上質な状態はどれ？',
    hardOptions: [
      {
        text: '指で押すと跳ね返るような強い弾力があり、保存水がクリアで、表面に細かな気泡（アク抜きの際にできる凹凸）が適度にあって、きめが細かいもの。',
        imageDesc: '弾力があり、保存水が澄んでいて、表面に細かい気泡のあるこんにゃく。',
        isCorrect: true
      },
      {
        text: '表面全体が完全に平滑（ツルツル）で、パックの底に白いオリ（沈殿物）がたまり、触るとゴムのように硬すぎるもの。',
        imageDesc: '表面がツルツルで、底に白い沈殿物があり、硬すぎるこんにゃく。',
        isCorrect: false
      },
      {
        text: '角が大きく丸みを帯びて退色しており、開封時に酸っぱい不快な腐敗臭がするもの。',
        imageDesc: '角が丸く退色し、腐敗臭がするこんにゃく。',
        isCorrect: false
      },
      {
        text: 'パックが異常に膨らんでおり、こんにゃくの表面に多数のひび割れが生じてボロボロと崩れているもの。',
        imageDesc: 'パックが膨らみ、ひび割れてボロボロになったこんにゃく。',
        isCorrect: false
      }
    ]
  },
  wakame: {
    ingredientId: 'wakame',
    ingredientName: 'わかめ',
    question: '塩蔵（または生）わかめで、最も美味しく品質が良いものはどれ？',
    options: [
      {
        text: '肉厚で、色が鮮やかな濃い緑色（または黒褐色）をしており、触るとしっかりとした弾力があるもの。',
        imageDesc: '肉厚で、色が鮮やかな濃い緑色をしており、しっかりした弾力があるわかめ。',
        isCorrect: true
      },
      {
        text: '全体的に色が薄い黄色や茶色に変色しており、触るとドロドロと柔らかく崩れるもの。',
        imageDesc: '薄い黄色や茶色に変色し、ドロドロと柔らかいわかめ。',
        isCorrect: false
      },
      {
        text: '全体が白っぽく乾燥しており、塩の結晶が固まって表面がガサガサに荒れているもの。',
        imageDesc: '白っぽく乾燥し、塩の結晶が固まりガサガサなわかめ。',
        isCorrect: false
      }
    ],
    explanation: '良質なわかめは、肉厚で「濃い緑色（黒に近い緑）」をしています。古くなって劣化すると黄色や茶色に変色し、葉が薄くなってドロドロに溶け出します。触ったときに弾力があり、しっかりとしたコシがあるものが美味しいです。',
    hardQuestion: '三陸産などの塩蔵わかめをプロの目で見極めます。磯の香りが豊かで、最も歯ごたえが良いものはどれ？',
    hardOptions: [
      {
        text: '広げたときに中軸の茎が細く、葉が肉厚で深い暗緑色をしており、塩が均一にまぶされ、触ると硬い弾力を感じるもの。',
        imageDesc: '茎が細く、葉が肉厚で深い暗緑色をし、塩が適度にまぶされたわかめ。',
        isCorrect: true
      },
      {
        text: '全体が薄い黄緑色で、所々に赤黒いシミがあり、水で戻したときに粘り気が強すぎて表面がぬるぬると溶け出すもの。',
        imageDesc: '薄い黄緑色で赤黒いシミがあり、水で戻すと溶け出すわかめ。',
        isCorrect: false
      },
      {
        text: '塩の量が不十分で、パックの底に水が溜まっており、磯の香りではなく、生臭い酸っぱいにおいが発生しているもの。',
        imageDesc: '塩が少なく、水が溜まって生臭いにおいがするわかめ。',
        isCorrect: false
      },
      {
        text: '全体がカラカラに乾ききっており、広げると葉のあちこちに不規則な虫食い穴や破れが多数あるもの。',
        imageDesc: 'カラカラに乾き、葉に多数の穴や破れがあるわかめ。',
        isCorrect: false
      }
    ]
  },
  aburaage: {
    ingredientId: 'aburaage',
    ingredientName: '油揚げ',
    question: 'パックに入った油揚げで、最も美味しく品質が良いものはどれ？',
    options: [
      {
        text: '全体がふっくらと厚みがあり、きれいな黄金色で、油が酸化した臭いがしないもの。',
        imageDesc: 'ふっくらと厚みがあり、きれいな黄金色で、油が酸化した臭いがしない油揚げ。',
        isCorrect: true
      },
      {
        text: '全体的にシワシワで薄く、表面がテカテカとベタついており、ツンとする油臭さがあるもの。',
        imageDesc: 'シワシワで薄く、表面がベタついて、油臭い油揚げ。',
        isCorrect: false
      },
      {
        text: 'フチの部分が茶色く乾燥してカチカチに硬くなっており、カビのような斑点があるもの。',
        imageDesc: 'フチが乾燥して硬く、斑点がある油揚げ。',
        isCorrect: false
      }
    ],
    explanation: '油揚げは揚げて作られているため、油の鮮度が重要です。新鮮なものは、ふっくらとしていて綺麗な黄金色（きつね色）をしており、嫌なにおいがしません。古くなると油が酸化し、色が変わってベタつき、すっぱい油臭さが出ます。',
    hardQuestion: '油揚げをプロとして目利きします。袋状に開きやすく、煮汁をたっぷり含む最良の状態はどれ？',
    hardOptions: [
      {
        text: '皮の表面の気泡（あばた）が細かく均一に広がっており、中央部がふっくらと肉厚に盛り上がり、油が澄んだ明るい黄金色を保っているもの。',
        imageDesc: '表面の気泡が細かく均一で、中央がふっくらと肉厚な黄金色の油揚げ。',
        isCorrect: true
      },
      {
        text: '全体がペラペラに薄くて硬く、表面に巨大な空気の泡（破れ）が多数あり、皮が不自然に白っぽいもの。',
        imageDesc: 'ペラペラに薄くて硬く、巨大な泡のある白っぽい油揚げ。',
        isCorrect: false
      },
      {
        text: 'パッケージの内側に黄色い油汁がにじみ出ており、触るとスポンジのように油を吸い込んで重たくベタベタしているもの。',
        imageDesc: '黄色い油汁がにじみ、ベタベタと重い油揚げ。',
        isCorrect: false
      },
      {
        text: '一部が灰色や茶色に変色しており、鼻を近づけると古い機械油のような酸っぱい酸化臭が鼻を突くもの。',
        imageDesc: '一部が変色し、強い酸化臭がする油揚げ。',
        isCorrect: false
      }
    ]
  },
  hourensou: {
    ingredientId: 'hourensou',
    ingredientName: 'ほうれん草',
    question: '甘みがあって最も新鮮なほうれん草はどれ？',
    options: [
      {
        text: '葉が肉厚で濃い深緑色をしており、根元の切り口がみずみずしく、赤色（ピンク色）が鮮やかなもの。',
        imageDesc: '葉が肉厚で濃い深緑色、根元がピンク色のほうれん草。',
        isCorrect: true
      },
      {
        text: '全体的に葉が薄くて淡い黄緑色をしており、根元が白っぽく乾燥しているもの。',
        imageDesc: '葉が薄くて淡い黄緑色、根元が白いほうれん草。',
        isCorrect: false
      },
      {
        text: '葉先が茶色くしおれていて、下の方の葉が黄色く変色し、全体にしんなりしているもの。',
        imageDesc: '葉先が茶色くしおれ、下が黄色いほうれん草。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なほうれん草は「葉が肉厚で濃い深緑色」です。そして、最も重要なのは「根元の赤さ（ピンク色）」です。この赤い部分にはマンガンなどの栄養や甘み（骨を丈夫にするミネラル）が詰まっています。根元の切り口がしっかりしているものを選びましょう。',
    hardQuestion: 'ほうれん草をプロレベルで見極めます。アクが適度で最も甘く、栄養価が高いものはどれ？',
    hardOptions: [
      {
        text: '葉が肉厚でピンと上を向いており、葉脈が深くはっきりしていて、根元の株が太く、カットされた切り口が新鮮で赤い部分が非常に大きいもの。',
        imageDesc: '葉が上を向き、葉脈がはっきりし、根元が太く赤いほうれん草。',
        isCorrect: true
      },
      {
        text: '茎が非常に長くて細く、葉が小さく弱々しく、根元のピンク色の部分がほとんどなく全体が真っ白なもの。',
        imageDesc: '茎が細長く、葉が小さく、根元が白いほうれん草。',
        isCorrect: false
      },
      {
        text: '葉全体に斑点上の黄色いシミが多数走り、お尻の切り口からドロドロした茶色い水がにじみ出ているもの。',
        imageDesc: '葉に黄色い斑点があり、切り口から茶色い水が出るほうれん草。',
        isCorrect: false
      },
      {
        text: '袋の内側が結露で濡れ、葉が袋に張り付いて不自然に半透明に透き通っているもの。',
        imageDesc: '葉が袋に張り付いて半透明になったほうれん草。',
        isCorrect: false
      }
    ]
  },
  shijimi: {
    ingredientId: 'shijimi',
    ingredientName: 'しじみ',
    question: 'パックに入ったしじみで、最も新鮮で美味しいものはどれ？',
    options: [
      {
        text: '殻に艶やかな黒いツヤがあり、口がしっかり閉じていて、少し触るとすぐに殻を閉じるもの。',
        imageDesc: '殻にツヤがあり、口がしっかり閉じているしじみ。',
        isCorrect: true
      },
      {
        text: '殻のツヤが失われて白っぽくなっており、多くの貝が口を開けたまま動かないもの。',
        imageDesc: '殻が白っぽく、口を開けたまま動かないしじみ。',
        isCorrect: false
      },
      {
        text: 'パックの底に濁ったドリップ（体液）が溜まっており、鼻を近づけると生臭いにおいがするもの。',
        imageDesc: '濁ったドリップが溜まり、生臭いにおいがするしじみ。',
        isCorrect: false
      }
    ],
    explanation: 'しじみは貝類ですので、生きていることが新鮮さの証拠です。殻に「黒いツヤ」があり、口がキュッと閉まっているものを選びましょう。口を開け放したまま動かないものや、殻が白く傷ついているものは死んでいるか劣化しています。',
    hardQuestion: 'しじみをプロの眼力で見極めます。最も肉厚で旨味成分が豊富に含まれているものはどれ？',
    hardOptions: [
      {
        text: '殻全体の幅よりも厚み（高さ）があり、ふっくらと丸っこい形状をしており、殻の黒い漆皮に強い光沢があり、水が澄んでいるもの。',
        imageDesc: '厚みがあり、ふっくらと丸く、黒い殻に強い光沢があるしじみ。',
        isCorrect: true
      },
      {
        text: '全体的に平べったく薄い形をしており、殻の一部が大きく削れて白い貝殻のカルシウム層が剥き出しになっているもの。',
        imageDesc: '平べったく薄い形で、殻の白い部分が剥き出したしじみ。',
        isCorrect: false
      },
      {
        text: 'パックを動かすと「カタカタ」と軽くて乾いた音がし、貝の口の隙間から茶色い泥がにじみ出ているもの。',
        imageDesc: 'カタカタと軽い音がし、口から泥がにじみ出たしじみ。',
        isCorrect: false
      },
      {
        text: 'パック内のわずかな水が真っ白に乳化しており、貝全体が滑りを帯びて、ツンとした不快な硫黄臭が漂うもの。',
        imageDesc: '水が白く濁り、硫黄臭がするしじみ。',
        isCorrect: false
      }
    ]
  },
  shiraganegi: {
    ingredientId: 'shiraganegi',
    ingredientName: '白髪ネギ',
    question: 'パック売りの白髪ネギで、最もシャキシャキして新鮮なものはどれ？',
    options: [
      {
        text: 'ネギの繊維がまっすぐ細く通っており、色が真っ白で、触るとピンとした張りがあるもの。',
        imageDesc: '繊維が細く通っており、真っ白で、ピンと張りがある白髪ネギ。',
        isCorrect: true
      },
      {
        text: '繊維がヨレヨレに曲がっており、全体的に黄色っぽく退色し、水分が抜けて乾燥しているもの。',
        imageDesc: 'ヨレヨレに曲がり、黄色っぽく乾燥した白髪ネギ。',
        isCorrect: false
      },
      {
        text: 'パックの底にネギの粘り気のある水がたまり、全体がジュクジュクとしんなりして塊になっているもの。',
        imageDesc: '底に粘り気のある水がたまり、しんなり固まった白髪ネギ。',
        isCorrect: false
      }
    ],
    explanation: '白髪ネギはカットされているため劣化が早いです。新鮮なものは、ネギの「白い部分」がきれいに均一にカットされ、ピンと立ち上がるようなハリを持っています。黄色く変色したものや、水分が出てパックに張り付いているものは避けましょう。',
    hardQuestion: '市販の白髪ネギをプロの目で目利きします。苦味が少なく、極めて口当たりの良いものはどれ？',
    hardOptions: [
      {
        text: '極細（1mm以下）に等幅で美しくカットされており、ネギの中心の芯（青い部分や黄色い芯）が混ざっておらず、純白でフワッと空気を含んでパックに収まっているもの。',
        imageDesc: '極細で等幅にカットされ、純白でフワッとパックに収まった白髪ネギ。',
        isCorrect: true
      },
      {
        text: '太さが3mm以上とまばらで、辛味の強い黄色いネギの芯の部分が半分以上混入しており、触るとゴワゴワと硬いもの。',
        imageDesc: '太さがまばらで、黄色い芯が混ざりゴワゴワした白髪ネギ。',
        isCorrect: false
      },
      {
        text: 'カットの端が茶色く焦げたように褐変しており、パックの内壁に黄色っぽいネギの脂（精油成分）がびっしり付着しているもの。',
        imageDesc: 'カットの端が茶色く焦げたように褐変しており、パックの内壁に黄色っぽいネギの脂（精油成分）がびっしり付着している白髪ネギ。',
        isCorrect: false
      },
      {
        text: 'パックがネギの呼吸ガスでパンパンに膨らんでおり、開封するとネギ特有のツンとする発酵した臭気が強く漂うもの。',
        imageDesc: 'パックがガスで膨らみ、発酵臭がする白髪ネギ。',
        isCorrect: false
      }
    ]
  },
  ninniku: {
    ingredientId: 'ninniku',
    ingredientName: 'にんにく',
    question: '最も身が引き締まっていて美味しいにんにくはどれ？',
    options: [
      {
        text: '全体が丸くふっくらとしていて、手で持つとずっしりと重みがあり、一粒一粒が硬く締まっているもの。',
        imageDesc: '丸くふっくらとし、ずっしり重く、一粒一粒が硬いにんにく。',
        isCorrect: true
      },
      {
        text: '外皮がカサカサに乾ききってシワがあり、持つと驚くほど軽くて、触ると中身がフカフカと柔らかいもの。',
        imageDesc: '外皮が乾燥しシワがあり、軽く、柔らかいにんにく。',
        isCorrect: false
      },
      {
        text: '頭部から緑色の芽がツンと長く伸びており、皮のあちこちに黒い斑点やカビが見られるもの。',
        imageDesc: '頭部から緑色の芽が伸び、黒い斑点やカビがあるにんにく。',
        isCorrect: false
      }
    ],
    explanation: '美味しいにんにくは、身が詰まっていて「ずっしりと重いもの」です。軽いものは、内部が乾燥して干からびている可能性があります。また、芽が出ているものはそちらに栄養を奪われているため、風味が落ちています。',
    hardQuestion: 'にんにくをプロの眼力で見極めます。最も風味が豊かで、中身が傷んでいないものはどれ？',
    hardOptions: [
      {
        text: '外皮が真っ白（または淡い紫色）で何層もしっかり包まれており、頂部がギュッと閉じていて、お尻の根元の切り口が白く、芽が内部から伸びていないもの。',
        imageDesc: '外皮がしっかり包まれ、頂部が閉じ、切り口が白いにんにく。',
        isCorrect: true
      },
      {
        text: '皮の一部をめくると中の身（鱗片）が黄色く透き通っており、触ると粘り気があり、少しブヨブヨしているもの。',
        imageDesc: '鱗片が黄色く透き通って、ブヨブヨしたにんにく。',
        isCorrect: false
      },
      {
        text: 'お尻の根元を触るとスポンジのように柔らかく、軽く爪を立てると黒い粉（アスペルギルス黒カビ）がにじみ出るもの。',
        imageDesc: '根元が柔らかく、黒い粉がにじみ出るにんにく。',
        isCorrect: false
      },
      {
        text: '頂部の中心から太い黄緑色の芽が螺旋状に5cm以上飛び出しており、全体にシワが深く寄っているもの。',
        imageDesc: '黄緑色の芽が大きく飛び出し、全体にシワがあるにんにく。',
        isCorrect: false
      }
    ]
  },
  remon: {
    ingredientId: 'remon',
    ingredientName: 'レモン',
    question: '果汁がたっぷり詰まっていて美味しいレモンはどれ？',
    options: [
      {
        text: '皮全体の黄色が鮮やかでムラがなく、ツヤとハリがあり、手で持つとずっしりと重みを感じるもの。',
        imageDesc: '黄色が鮮やかでツヤがあり、ずっしり重いレモン。',
        isCorrect: true
      },
      {
        text: '皮が非常に分厚くてゴツゴツしており、触るとゴワゴワして硬く、サイズの割に軽いもの。',
        imageDesc: '皮が分厚くゴツゴツし、サイズの割に軽いレモン。',
        isCorrect: false
      },
      {
        text: '皮全体に緑色の部分が多く残っており、触ると一部がグニュッと極端に柔らかいもの。',
        imageDesc: '緑色が多く残り、一部が極端に柔らかいレモン。',
        isCorrect: false
      }
    ],
    explanation: '果汁がたっぷりなレモンは「皮が薄く、手で持つとずっしり重みがあるもの」です。皮がゴツゴツして硬いものは、皮が厚くて果肉（果汁）が少ない傾向があります。また、鮮やかな黄色でハリとツヤがあるものが完熟して美味しいです。',
    hardQuestion: 'レモンをプロの視点で見極めます。最も果汁が多く、香りが爽やかで新鮮なものはどれ？',
    hardOptions: [
      {
        text: '皮全体のキメ（油胞）が非常に細かく滑らかで、ヘタが緑色を保ち、両端が少し丸みを帯び、指で軽く押すと弾力のある柔らかさを感じる重いもの。',
        imageDesc: '皮のキメが細かく、ヘタが緑色で、弾力のある重いレモン。',
        isCorrect: true
      },
      {
        text: '全体が洋ナシのように極端に細長く、ヘタが真っ黒に乾燥して脱落しており、皮の表面がカサカサに乾いているもの。',
        imageDesc: '細長く、ヘタが黒く乾燥して脱落したレモン。',
        isCorrect: false
      },
      {
        text: '皮全体に白い粉のような付着物があり、ヘタの周りから白いカビがじわじわと広がっているもの。',
        imageDesc: '皮全体に白い粉があり、カビが広がっているレモン。',
        isCorrect: false
      },
      {
        text: '皮が非常に分厚く、握ってもビクともしないほど硬く、柑橘特有 of 香りが全く漂わないもの。',
        imageDesc: '皮が分厚く、非常に硬く、香りがしないレモン。',
        isCorrect: false
      }
    ]
  },
  aibikyniku: {
    ingredientId: 'aibikyniku',
    ingredientName: 'aibikyniku',
    question: 'トレイに入った合挽き肉（牛・豚）で、最も新鮮なものはどれ？',
    options: [
      {
        text: '赤身が鮮やかな明るい赤色（またはチェリー赤）をしており、脂身が白く、トレイの底にドリップが全くないもの。',
        imageDesc: '赤身が鮮やかな明るい赤色で、脂身が白く、ドリップがない合挽き肉。',
        isCorrect: true
      },
      {
        text: '全体的に色がくすんだ茶褐色や灰色に変色しており、パックの端に濁った赤い汁がにじみ出ているもの。',
        imageDesc: '色がくすんだ茶褐色で、赤い汁がにじみ出た合挽き肉。',
        isCorrect: false
      },
      {
        text: '赤身部分がどす黒い紫色をしており、脂身（白い部分）が黄色っぽく変色してベタベタしているもの。',
        imageDesc: '赤身がどす黒い紫色をし、脂身が黄色っぽくベタついた合挽き肉。',
        isCorrect: false
      }
    ],
    explanation: '合挽き肉は空기에触れる面積が広いため傷みやすいです。新鮮なものは「鮮やかな明るい赤色」をしています。パックの底に「ドリップ（赤い汁）」が出ているものは、肉の旨味や水分が流出して劣化しているため、避けましょう。',
    hardQuestion: '合挽き肉の品質と鮮度をプロの視点で見極めます。酸化が最も少なく、ベストなブレンド状態はどれ？',
    hardOptions: [
      {
        text: '赤身がくすみのないチェリーレッド色、脂身がクリアな純白色で細かく均一に混ざり合っており、ひき肉の糸状の輪郭がしっかり立ち、ドリップがないもの。',
        imageDesc: '赤身がチェリーレッド、脂身が純白で均一に混ざり、輪郭がはっきりした合挽き肉。',
        isCorrect: true
      },
      {
        text: '表面はチェリーレッドだが、中心部をめくると完全に茶褐色に酸化しており、ひき肉が互いに潰れてねんど状に固まっているもの。',
        imageDesc: '表面は赤いが、中心が茶褐色に酸化し、ねんど状になった合挽き肉。',
        isCorrect: false
      },
      {
        text: '脂身の部分が黄色みがかって油分が溶け出しており、パックの底に白い濁った脂ドリップが大量に沈殿しているもの。',
        imageDesc: '脂身が黄色く、底に白い脂ドリップが大量に沈殿した合挽き肉。',
        isCorrect: false
      },
      {
        text: '全体的に不自然なほど色が真っ赤（牛肉100%に近い色）だが、豚肉特有の生臭い酸っぱいにおいが漂うもの。',
        imageDesc: '不自然に真っ赤で、生臭いにおいがする合挽き肉。',
        isCorrect: false
      }
    ]
  },
  masshurumu: {
    ingredientId: 'masshurumu',
    ingredientName: 'マッシュルーム',
    question: '新鮮で香りが豊かなマッシュルーム（ホワイト）はどれ？',
    options: [
      {
        text: 'カサがきれいな純白色で、表面がすべすべしており、カサがしっかり閉じて軸との隙間がないもの。',
        imageDesc: 'カサが純白色で、しっかり閉じて軸との隙間がないマッシュルーム。',
        isCorrect: true
      },
      {
        text: 'カサが完全に開いており、裏側の黒いヒダが丸見えになっていて、表面に黒いシミが多くあるもの。',
        imageDesc: 'カサが完全に開き、裏の黒いヒダが見え、黒いシミがあるマッシュルーム。',
        isCorrect: false
      },
      {
        text: '表面全体が茶色く変色しており、触ると弾力がなくふにゃふにゃしていて、酸っぱい臭いがするもの。',
        imageDesc: '表面が茶色く変色し、ふにゃふにゃで、酸っぱい臭いのマッシュルーム。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なマッシュルーム（ホワイト）は、カサが「真っ白で、しっかり閉じている」ものです。カサが開いて裏側の黒いヒダが見えているものは、熟して香りは強いですが鮮度が落ちています。シミがなく、触ると硬さがあるものを選びましょう。',
    hardQuestion: 'マッシュルームをプロレベルで見極めます。最も身が引き締まり、傷みのない最良の状態はどれ？',
    hardOptions: [
      {
        text: 'カサの表面に傷や黒ずみがなくツヤのあるホワイト色を保ち、カサが軸にピタッと密着して隙間がなく、全体を触るとカチッと硬い弾力があるもの。',
        imageDesc: 'カサ表面に傷がなくホワイト色で、軸に密着し、硬い弾力があるマッシュルーム。',
        isCorrect: true
      },
      {
        text: 'カサの表面が全体的に黄色からベージュ色に変色し、触ると指の跡が凹んだまま戻らないほど柔らかいもの。',
        imageDesc: '表面が黄色く変色し、指の跡が戻らないほど柔らかいマッシュルーム。',
        isCorrect: false
      },
      {
        text: 'カサが完全に反り返っており、裏側の真っ黒なヒダから胞子がパック全体に飛び散って湿っているもの。',
        imageDesc: 'カサが完全に反り返り、裏の黒いヒダから胞子が散ったマッシュルーム。',
        isCorrect: false
      },
      {
        text: '軸の切り口が真っ黒に空洞化してカビが生えており、表面を触るとヌルヌルとした粘り気を感じるもの。',
        imageDesc: '軸の切り口が黒く空洞化してカビが生え、ヌルヌルしたマッシュルーム。',
        isCorrect: false
      }
    ]
  },
  gurinpisu: {
    ingredientId: 'gurinpisu',
    ingredientName: 'グリンピース',
    question: 'さや付きのグリンピースで、最も新鮮で甘いものはどれ？',
    options: [
      {
        text: 'さや全体が鮮やかな明るい緑色で、ふっくらと丸みがあり、表面にシワがなく、うっすらと白いうぶ毛があるもの。',
        imageDesc: 'さや全体が鮮やかな緑色で、丸みがあり、シワのないグリンピース。',
        isCorrect: true
      },
      {
        text: 'さやの表面全体が黄色っぽく変色してシワシワになっており、中の豆がスカスカに軽いもの。',
        imageDesc: 'さや全体が黄色っぽく変色してシワシワになったグリンピース。',
        isCorrect: false
      },
      {
        text: 'さやが茶色く変色して黒い斑点があり、触るとブヨブヨと柔らかくて湿っているもの。',
        imageDesc: 'さやが茶色く変色して黒い斑点があり、ブヨブヨなグリンピース。',
        isCorrect: false
      }
    ],
    explanation: 'グリンピースはさや付きのものが圧倒的に新鮮です。美味しいものは「さやが鮮やかな緑色でハリがあり、ふっくらと膨らんでいるもの」です。さやが黄色くなっているものは古くなってデンプン質が失われ、味が落ちています。',
    hardQuestion: 'さや付きグリンピースをプロの眼力で見極めます。最も豆が甘く、皮が柔らかい状態はどれ？',
    hardOptions: [
      {
        text: 'さやが鮮やかな緑色で、表面に白い粉（ブルーム）が薄くのっており、豆の形に合わせてさやがぽこぽことふっくら波打って、ヘタの切り口が瑞々しいもの。',
        imageDesc: 'さやが鮮やかな緑色で、ブルームがあり、ふっくら波打ったグリンピース。',
        isCorrect: true
      },
      {
        text: '中の豆が育ちすぎて、さやの外から触ると石のようにカチカチに硬く、さやの繊維がガサガサに荒れて黄色くなっているもの。',
        imageDesc: 'さやの繊維が荒れて黄色く、豆がカチカチに硬いグリンピース。',
        isCorrect: false
      },
      {
        text: 'さやの表面に無数の細かい茶色い斑点（低温障害によるシミ）があり、触るとしなって弾力がないもの。',
        imageDesc: 'さやに茶色い斑点があり、しなって弾力がないグリンピース。',
        isCorrect: false
      },
      {
        text: 'さやが湿ってベタベタしており、中の豆の一部がさやを突き破って発芽し、白い芽が伸び出しているもの。',
        imageDesc: 'さやが湿ってベタベタし、豆が発芽したグリンピース。',
        isCorrect: false
      }
    ]
  },
  hakusai: {
    ingredientId: 'hakusai',
    ingredientName: '白菜',
    question: 'カットされた白菜で、最も新鮮で美味しいものはどれ？',
    options: [
      {
        text: '断面の芯の高さが全体の3分の1以下であり、芯の切り口が白くてみずみずしく、葉がギッシギシに詰まっているもの。',
        imageDesc: '断面の芯の高さが全体の3分の1以下で、葉がぎっしり詰まった白菜。',
        isCorrect: true
      },
      {
        text: '断面の芯が全体の半分近くまで大きく伸びており、葉の間に大きな隙間が空いているもの。',
        imageDesc: '断面の芯が半分近くまで大きく伸びて、葉の間に隙間がある白菜。',
        isCorrect: false
      },
      {
        text: '葉全体が黄色く変色してシワシワになっており、芯のカット部が茶色くカサカサに乾いているもの。',
        imageDesc: '葉が黄色く変色しシワシワで、芯が茶色く乾いた白菜。',
        isCorrect: false
      }
    ],
    explanation: '白菜は「カット後の芯の伸び方」で鮮度を見ます。白菜は収穫後も成長するため、古いものは断面の「芯」がモコモコと盛り上がって上に伸びていきます。新鮮なものは、芯の高さが全体の3分の1以下で平らな状態です。また、葉が詰まっているものを選びましょう。',
    hardQuestion: 'カット白菜をプロとして完璧に見極めます。甘みが凝縮され、最高の状態を持つものはどれ？',
    hardOptions: [
      {
        text: '断面の芯の高さが全体の4分の1程度と低く、芯の切り口が平らで純白であり、葉が隙間なくみっちり重なり、外側の葉が濃い緑色で内側が鮮やかな黄色なもの。',
        imageDesc: '断面の芯が低く平らで、葉がみっちり重なり、内側が鮮やかな黄色の白菜。',
        isCorrect: true
      },
      {
        text: 'カット断面の中央（成長点）が不自然にモコモコと盛り上がって盛り高さが全体の半分以上に達しているもの。',
        imageDesc: 'カット断面の中央がモコモコと大きく盛り上がった白菜。',
        isCorrect: false
      },
      {
        text: '葉の白い軸の部分に、黒い小さな斑点（ゴマ症と呼ばれるポリフェノールの斑点）ではなく、全体がドロドロに溶け出した茶色い腐敗シミがあるもの。',
        imageDesc: '葉の白い軸の部分に、茶色い腐敗シミが溶け出した白菜。',
        isCorrect: false
      },
      {
        text: '葉全体がカサカサに乾ききっており、触ると簡単にボロボロとちぎれ、葉の内側が灰色に変色しているもの。',
        imageDesc: '葉全体が乾ききり、内側が灰色に変色した白菜。',
        isCorrect: false
      }
    ]
  },
  uzuranotamago: {
    ingredientId: 'uzuranotamago',
    ingredientName: 'うずらの卵',
    question: '生うずらの卵で、最も新鮮なものはどれ？',
    options: [
      {
        text: '殻が硬く、まだらに広がる黒や茶色の斑点（模様）がはっきりしており、表面がザラザラと粉を吹いたようになっているもの。',
        imageDesc: '殻が硬く、まだら模様がはっきりして、表面がザラザラしたうずらの卵。',
        isCorrect: true
      },
      {
        text: '殻の表面がツルツルとテカテカ光っており、斑点模様が全体的に白く色あせているもの。',
        imageDesc: '表面がツルツルとテカテカ光り、模様が色あせているうずらの卵。',
        isCorrect: false
      },
      {
        text: '殻にたくさんの細かいヒビが入っており、軽く振ると中でコトコトと液体が大きく揺れるもの。',
        imageDesc: '殻にヒビがあり、振ると中で液体が大きく揺れるうずらの卵。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なうずらの卵は、殻の「まだら模様（斑点）」が非常にくっきりしています。また、生まれたての卵は殻の表面が「ザラザラとした白い粉（クチクラ層）」で覆われています。古くなると、手垢や摩擦でこの粉が剥がれてツルツルテカテカになります。',
    hardQuestion: 'パック入りの生うずらの卵をプロレベルで目利きします。黄身がふっくらと盛り上がり、最高の品質はどれ？',
    hardOptions: [
      {
        text: '殻の斑点模様のコントラストが非常に鮮明で、殻全体にカサカサとした不透明な質感（ザラつき）があり、パックの底に液体の漏れがないもの。',
        imageDesc: '斑点模様が鮮明で、全体にザラつきがあり、液漏れのないうずらの卵。',
        isCorrect: true
      },
      {
        text: '卵の殻が不自然に薄く半透明に見え、指先で軽く触るだけでペコペコとへこむほど柔らかいもの。',
        imageDesc: '殻が薄く半透明で、軽く触るとへこむうずらの卵。',
        isCorrect: false
      },
      {
        text: '殻の模様が完全に消えて全体が真っ白（色抜け）になっており、触ると全体がぬるぬるとした油分を帯びているもの。',
        imageDesc: '殻の模様が消えて真っ白になり、ぬるぬるしたうずらの卵。',
        isCorrect: false
      },
      {
        text: '水に浮かべたときに、お尻を上にしてプカプカと完全に水面に浮き上がってしまうもの（気室が大きくなりすぎている）。',
        imageDesc: '水面にお尻を上にして完全に浮かび上がったうずらの卵。',
        isCorrect: false
      }
    ]
  },
  kikurage: {
    ingredientId: 'kikurage',
    ingredientName: 'きくらげ',
    question: '生きくらげで、最も新鮮でコリコリして美味しいものはどれ？',
    options: [
      {
        text: '肉厚で色が濃い黒褐色をしており、表面がビロードのような細かい産毛（白っぽい粉）で覆われていてハリがあるもの。',
        imageDesc: '肉厚で色が濃く、表面に細かい産毛（白っぽい粉）があるきくらげ。',
        isCorrect: true
      },
      {
        text: '全体が薄くてペラペラしており、表面に不自然なツヤ（水濡れ）があり、触るとフニャフニャに柔らかいもの。',
        imageDesc: '薄くてペラペラし、水濡れがあり、柔らかいきくらげ。',
        isCorrect: false
      },
      {
        text: '全体が茶色っぽく透き通っており、パックの内側に水滴がつき、触るとネバネバしているもの。',
        imageDesc: '茶色っぽく透き通って、水滴がつき、ネバネバしたきくらげ。',
        isCorrect: false
      }
    ],
    explanation: '生きくらげは「肉厚で、裏面に白っぽい細かい産毛があるもの」が新鮮です。この白っぽい粉はカビではなく、きくらげの胞子や健康な産毛です。古くなると水分を吸って薄くなり、不自然にテカテカしてふにゃっと柔らかくなり、粘り気が出てきます。',
    hardQuestion: '生きくらげをプロの眼力で見極めます。最も歯ごたえが良く、品質の高いものはどれ？',
    hardOptions: [
      {
        text: '厚みがしっかりあり、裏面全体が綺麗な灰白色（微細な産毛）で覆われ、触ると弾力があり、耳のような形がしっかりと自立して張っているもの。',
        imageDesc: '厚みがあり、裏面が灰白色で、弾力があり自立したきくらげ。',
        isCorrect: true
      },
      {
        text: '全体が極端に薄く、縮れてシワシワになっており、触るとゴムシートのように硬くて伸縮性がないもの。',
        imageDesc: '極端に薄くシワシワで、ゴムシートのように硬いきくらげ。',
        isCorrect: false
      },
      {
        text: 'パックの底全体が茶色くドロドロした液体で濡れており、きくらげのフチが破れて溶け落ちているもの。',
        imageDesc: 'パックの底全体が茶色くドロドロした液体で濡れており、きくらげのフチが破れて溶け落ちているきくらげ。',
        isCorrect: false
      },
      {
        text: 'カビのようなツンとした酸っぱい発酵臭が立ち込めており、表面全体に不自然な緑や黄色のカビの斑点が広がっているもの。',
        imageDesc: 'カビ臭があり、緑や黄色の斑点があるきくらげ。',
        isCorrect: false
      }
    ]
  },
  takenoko: {
    ingredientId: 'takenoko',
    ingredientName: 'タケノコ',
    question: 'えぐみが少なくて柔らかい美味しいタケノコはどれ？',
    options: [
      {
        text: '全体が太くて短いずんぐりした形をしており、皮が薄茶色で、先端の葉（姫皮）が緑色ではなく黄色いもの。',
        imageDesc: 'ずんぐりした形で、皮が薄茶色、先端が黄色いタケノコ。',
        isCorrect: true
      },
      {
        text: '全体が細長く、先端の葉が濃い深緑色（または黒）をしており、皮にたくさんの泥やひび割れがあるもの。',
        imageDesc: '細長く、先端が深緑色をしたタケノコ。',
        isCorrect: false
      },
      {
        text: 'お尻の切り口が黒ずんで完全に乾燥しており、皮の一部が自然にペロペロと剥がれ落ちて身がカサカサなもの。',
        imageDesc: 'お尻が黒ずんで乾燥し、皮が剥がれ落ちたタケノコ。',
        isCorrect: false
      }
    ],
    explanation: '美味しいタケノコは「先端が黄色いもの（まだ土の中にあった証拠）」です。先端が緑色なのは、土から飛び出して日光を浴びたためで、えぐみ（アク）が非常に強くて硬いです。形はずんぐりとした太いものが柔らかくて美味しいです。',
    hardQuestion: 'タケノコをプロレベルで見極めます。アクが極めて少なく、繊維がとても柔らかい極上品はどれ？',
    hardOptions: [
      {
        text: 'ずんぐりとした釣鐘型で重みがあり、皮にツヤのある薄茶色の細毛が密生し、先端の芽が完全に鮮やかな黄色で、お尻の切り口のイボが赤くなく薄い紫色のもの。',
        imageDesc: 'ずんぐりした釣鐘型で重みがあり、先端が黄色く、お尻のイボが薄い紫色のタケノコ。',
        isCorrect: true
      },
      {
        text: 'ひょろひょろと細長く、先端の芽が10cm以上濃い緑色の葉として伸びきっており、お尻のイボが真っ黒に変色して硬いもの。',
        imageDesc: '細長く、先端が伸びて緑色になり、お尻のイボが黒いタケノコ。',
        isCorrect: false
      },
      {
        text: 'お尻の切り口全体がスポンジのように柔らかく、軽く握ると泡のような濁った水がしみ出し、カビ臭いにおいがするもの。',
        imageDesc: '切り口が柔らかく、濁った水がしみ出たタケノコ。',
        isCorrect: false
      },
      {
        text: '全体的に皮が剥がれて不自然に身が剥き出しになっており、その部分がカサカサに乾燥して真っ黄色に変色しているもの。',
        imageDesc: '身が剥き出しで、真っ黄色に乾燥したタケノコ。',
        isCorrect: false
      }
    ]
  },
  chingensai: {
    ingredientId: 'chingensai',
    ingredientName: 'チンゲン菜',
    question: 'シャキシャキして甘みがある新鮮なチンゲン菜はどれ？',
    options: [
      {
        text: '葉の緑色が鮮やかで、茎（軸）の部分が幅広くて厚みがあり、根元がふっくらと丸く重みがあるもの。',
        imageDesc: '葉の緑が鮮やかで、茎が幅広く肉厚、根元が丸いチンゲン菜。',
        isCorrect: true
      },
      {
        text: '全体的に葉が薄くて黄色っぽく、茎の部分が細長く平らで、根元がスカスカに軽いもの。',
        imageDesc: '葉が薄く黄色っぽく、茎が細長く平らなチンゲン菜。',
        isCorrect: false
      },
      {
        text: '葉先が茶色く枯れており、茎に無数のひび割れ（縦裂け）があり、触ると全体がふにゃふにゃとしなるもの。',
        imageDesc: '葉先が茶色く、茎にひび割れがあり、ふにゃふにゃしたチンゲン菜。',
        isCorrect: false
      }
    ],
    explanation: '新鮮なチンゲン菜は「根元のふくらみ」が大切です。ここがふっくらとラグビーボールのように丸く育っているものは、水分と甘みをたっぷり蓄えていて、シャキシャキした食感が楽しめます。葉先がみずみずしく、緑色が綺麗なものを選びましょう。',
    hardQuestion: 'チンゲン菜をプロの眼力で目利きします。アクが少なく、繊維が柔らかくて抜群に美味しいものはどれ？',
    hardOptions: [
      {
        text: '葉全体の緑が濃く艶やかで、茎（軸）の下部が非常に幅広くスプーン状に内側に丸く湾曲し、根元がカチッと硬く太く盛り上がっているもの。',
        imageDesc: '葉の緑が濃く、茎が幅広く丸く湾曲し、根元が太く盛り上がったチンゲン菜。',
        isCorrect: true
      },
      {
        text: '茎が白っぽく非常に長くて細く、全体が長方形に近いスマートな形をしており、葉の周りが黄色く縮れているもの。',
        imageDesc: '茎が細長く、全体が長方形で、葉が黄色く縮れたチンゲン菜。',
        isCorrect: false
      },
      {
        text: '根元の切り口から茶色くドロドロした体液がにじみ出ており、葉脈に沿って黒い線（腐敗線）が何本も走っているもの。',
        imageDesc: '切り口から茶色い液がにじみ、葉脈に沿って黒い線の走るチンゲン菜。',
        isCorrect: false
      },
      {
        text: '袋の中で強く押し潰されていて、葉のあちこちが水にふやけたように半透明に変色してしまっているもの。',
        imageDesc: '袋の中で強く押し潰されていて、葉のあちこちが水にふやけたように半透明に変色してしまっているチンゲン菜。',
        isCorrect: false
      }
    ]
  }
};


