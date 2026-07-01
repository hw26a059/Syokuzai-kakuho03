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
    requiredIngredients: ['butahikiku', 'tofu', 'nagaranege'],
    optionalIngredients: ['torihikiku'],
    excludedIngredients: ['saba', 'satoimo', 'shirataki', 'konnyaku', 'aburaage', 'shijimi']
  },
  {
    id: 'mabonasu',
    name: '麻婆茄子',
    baseCategory: '中華',
    requiredIngredients: ['butahikiku', 'nasu', 'piman'],
    optionalIngredients: ['torihikiku', 'nagaranege'],
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
        isCorrect: true
      },
      {
        text: '全体的に赤みはあるが、トレイの底に少し薄赤い水分（ドリップ）が溜まっているパック。',
        imageDesc: 'トレイの隅に赤い水分がにじみ出ている、ややくすんだ赤色の牛肉。',
        isCorrect: false
      },
      {
        text: '肉が重なっている部分や端が黒っぽく変色しており、ツヤが失われているパック。',
        imageDesc: '重なり合った部分が茶褐色や黒ずんで見え、表面が乾燥した牛肉。',
        isCorrect: false
      }
    ],
    explanation: '牛肉は、パックの底に「ドリップ」と呼ばれる赤い汁が出ていないものを選びましょう。ドリップは旨味や水分が逃げ出している証拠です。色は鮮やかな赤紅色（またはやや濃い赤）で、ツヤのあるものが新鮮です。なお、肉が重なっている部分が黒っぽくなっているのは空気に触れていないためで、必ずしも傷んでいるわけではありませんが、全体に変色しているものは鮮度が落ちています。'
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
    explanation: '新鮮な豚肉は「淡いピンク色」をしており、脂肪（脂身）が「真っ白」で締まっているのが特徴です。脂身が黄色っぽくなっているものは酸化が進んでいます。また、牛肉と同様にトレイにドリップ（赤い汁）が溜まっていないものを選びましょう。'
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
    explanation: '鶏肉は水分が多いため傷みやすく、ドリップが最も出やすい肉です。新鮮なものは「透明感のあるピンク色」で、皮の毛穴がしっかり盛り上がってシワが寄っています。毛穴のブツブツがはっきりしているのは鮮度が良い証拠です。白っぽくダレてドリップが出ているものは鮮度が落ちています。'
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
    explanation: '生のサバの切り身は、皮の青い模様と銀色の部分が「キラキラと輝いてくっきりしているもの」を選びます。血合い（身の赤い部分）が鮮やかな赤色のものが新鮮で、茶色や黒ずんでいるものは時間が経っています。また、身がしっかり盛り上がっており、身割れしていないものを選びましょう。'
  },
  jagaimo: {
    ingredientId: 'jagaimo',
    ingredientName: 'じゃがいも',
    question: '袋に入ったじゃがいも（男爵やメークイン）で、最も状態が良く美味しいものはどれ？',
    options: [
      {
        text: 'ふっくらと丸みがあり、皮にシワがなく、ずっしりと重みがあって硬く締まっているもの。',
        imageDesc: '皮がなめらかでハリがあり、芽が出ておらず、土が適度についた丸いじゃがいも。',
        isCorrect: true
      },
      {
        text: '皮の表面全体に細かなシワが寄っており、触ると少し柔らかく弾力を感じるもの。',
        imageDesc: '表面の水分が抜けてシワシワになり、少ししなびて見えるじゃがいも。',
        isCorrect: false
      },
      {
        text: '芽の部分が少し伸び始めていたり、皮の一部がうっすらと緑色に変色しているもの。',
        imageDesc: 'くぼみから小さな芽が顔を出しており、日光に当たったためか皮が緑がかっているもの。',
        isCorrect: false
      }
    ],
    explanation: '美味しいじゃがいもは、皮にシワがなく「ハリがあって硬く、重みがあるもの」です。シワがあるものや柔らかいものは、水分が抜けて古くなっています。また、芽が出ているものや、皮が緑色（緑化）しているものは、ソラニンやチャコニンという天然の毒素が含まれているため避ける必要があります。'
  },
  ninjin: {
    ingredientId: 'ninjin',
    ingredientName: 'にんじん',
    question: '袋入りのにんじんを選ぶ際、最も甘みがあって新鮮な状態のものはどれ？',
    options: [
      {
        text: '全体が鮮やかなオレンジ色で、皮にハリがあり、葉の切り口（首の芯）が小さく細いもの。',
        imageDesc: '濃いオレンジ色で肌がつるりとしており、上の切り口の直径が小さくみずみずしいにんじん。',
        isCorrect: true
      },
      {
        text: '葉の切り口が大きく太いもので、首のあたりがうっすらと黒ずんでいるもの。',
        imageDesc: '上部の切り口（芯）が太く、その周辺が黒っぽく変色しているにんじん。',
        isCorrect: false
      },
      {
        text: '全体的に色が薄く、表面に細いひげ根がたくさん生えていて、触ると少ししなるもの。',
        imageDesc: '表面に無数の細かい根が生えており、先端がしなびて曲がりやすくなっているにんじん。',
        isCorrect: false
      }
    ],
    explanation: 'にんじんは、葉の切り口（首の芯）が「小さいもの」を選びましょう。切り口が太いものは、芯まで硬くなっており、栄養が葉にとられて味が落ちています。全体に濃いオレンジ色（β-カロテンが豊富）で、表面がなめらかでハリがあるものが良質です。ひげ根が多いものはストレスがかかって繊維が硬くなっています。'
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
    explanation: '玉ねぎの鮮度と状態を見るポイントは「首元（頭部）」です。ここがキュッと細く締まって硬いものは、中身が詰まっていて傷んでいません。ここが柔らかいものは、内部から腐敗が始まっている可能性が高いです。また、芽や根が伸び始めているものは、栄養がそちらに取られて味が落ちています。ずっしりと重みのあるものを選びましょう。'
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
    explanation: 'カットされたキャベツは「断面」が平らなものを選びましょう。カットされた後もキャベツは成長を続けるため、時間が経つと断面がポコッと盛り上がってきます。また、芯の高さが「全体の1/3以下」のものが、葉が詰まっていて柔らかく美味しいです。芯の切り口が白くみずみずしいものが新鮮です。'
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
    explanation: 'もやしは非常に足が早い（傷みやすい）野菜です。新鮮なものは「濁りのない真っ白な色」をしており、袋の中に水が出ていません。袋の中に水が溜まっているものは、細胞が壊れて水分が流れ出し、シャキシャキ感が失われています。全体に黄ばみや黒ずみがないものを選びましょう。'
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
    explanation: '新鮮なピーマンは「全体にハリと強いツヤ」があります。また、ヘタの形に注目してください。ヘタの角の数が多い（5〜6角形）ものは、栄養が十分に行き届いて成長した証拠で、苦味が少なくて甘みがあります。表面にシワがあるものは水分が抜けています。赤みを帯びているものは完熟に近づいていますが、料理の見た目や鮮度を重視するなら鮮やかな濃い緑のものを選びましょう。'
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
    explanation: '大根は、持った時に「ずっしりと重みがあるもの」を選びます。軽いものは中に「す（細かい空洞）」が入っており、水分が抜けてススカサになっています。葉の切り口の中央に空洞がないかチェックしましょう。また、側面のひげ根の穴が「縦にまっすぐ一列に並んでいるもの」は、ストレスなく成長した証拠で、繊維が柔らかく甘みが強いです。らせん状にうねっているものは辛味が強い傾向があります。'
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
    explanation: 'ごぼうは「泥付き」のものが、風味が飛びにくく圧倒的に長持ちします。また、太すぎるものは中に「す（空洞）」が入って硬くなっていることが多いため、10円玉程度の「均一な太さのもの」が最も柔らかく美味しいです。触ってふにゃふにゃと曲がるものは、水分が抜けて繊維が硬くなっています。'
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
    explanation: '豆腐はパックに入っている「水」をチェックします。水が「完全に澄んで透明なもの」が新鮮です。豆腐が古くなると、タンパク質や水分が溶け出して、中の水が白く濁ってきます。また、水が濁ると雑菌が繁殖しやすくなり、酸味や異臭の原因になります。パックのフィルムが膨張したり、逆に潰れすぎているものも避けましょう。'
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
    explanation: '新鮮な生姜は「ふっくらと大きく、皮にハリがあるもの」です。皮がシワシワになってしなびているものは、水分が抜けて香りが弱くなり、中が繊維質になって硬くなっています。また、生姜のくぼみ部分はカビが発生しやすいため、白いカビや黒い傷みがないかしっかりチェックしましょう。'
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
    explanation: '産みたての新鮮な卵は、殻の表面が「ざらざらとしていてツヤがない」のが特徴です。これは卵の殻を保護するクチクラ層がしっかり残っているためです。時間が経つと、手の摩擦などで表面がツルツルと光ってきます。また、新鮮な卵は内部の水分が失われていないため、ずっしりと重みがあります。殻のひび割れは雑菌の侵入につながるため避けましょう。'
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
    explanation: 'なすの新鮮さを見分ける最大のポイントは「ヘタのトゲ」です。触ると痛いほど鋭く尖っているものが新鮮な証拠です。時間が経つとトゲが元気を失って丸くなります。また、皮の色は濃い紫色で「鏡のように光沢があるもの（ツヤ）」を選びましょう。ツヤが消えたものは「ボケナス」と呼ばれ、水分が抜けて種が硬くなっています。'
  }
};
