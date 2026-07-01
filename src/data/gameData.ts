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
    explanation: '牛肉は、パックの底に「ドリップ」と呼ばれる赤い汁が出ていないものを選びましょう。ドリップは旨味や水分が逃げ出している証拠です。色は鮮やかな赤紅色（またはやや濃い赤）で、ツヤのあるものが新鮮です。なお、肉が重なっている部分が黒っぽくなっているのは空気に触れていないためで、必ずしも傷んでいるわけではありませんが、全体に変色しているものは鮮度が落ちています。',
    hardQuestion: '牛肉のパックを究極に目利きします。一番旨味が保たれており、最高の品質を示す状態はどれ？',
    hardOptions: [
      {
        text: 'ドリップがなく、表面が濡れたようなテカリではなくしっとりとした自然なツヤがあり、脂肪が黄ばんでおらず、重なり合っている部分が暗い赤褐色をしているパック。',
        imageDesc: '表面にしっとりとした自然なツヤがあり、重なり部分が暗赤色の牛肉スライス。',
        isCorrect: true
      },
      {
        text: '全体が均一な明るい鮮紅色をしており、重なり合っている部分まで真っ赤で、ドリップが全くないパック。',
        imageDesc: '重なり部分まで完全に均一な真っ赤な牛肉スライス。',
        isCorrect: false
      },
      {
        text: '表面にオパールの光沢（青緑色の反射）が美しく輝いており、トレイの底が完全に乾いているパック。',
        imageDesc: '表面が青緑色に反射している牛肉スライス. (isCorrect: false)',
        isCorrect: false
      },
      {
        text: 'ドリップはほとんどないが、脂肪の繊維が細かくバラけていて、赤身全体にうっすらと霜が不規則に広がっているパック。',
        imageDesc: '脂肪繊維がバラけ、不規則に霜が入った牛肉スライス。',
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
    explanation: '美味しいじゃがいもは、皮にシワがなく「ハリがあって硬く、重みがあるもの」です。シワがあるものや柔らかいものは、水分が抜けて古くなっています。また、芽が出ているものや、皮が緑色（緑化）しているものは、ソラニンやチャコニンという天然の毒素が含まれているため避ける必要があります。',
    hardQuestion: '袋に入ったじゃがいも（男爵やメークイン）で、最もデンプン質が豊富で甘みのある状態はどれ？',
    hardOptions: [
      {
        text: '泥が適度について乾燥しており、皮のキメが粗く、指で押しても全く凹まないほど硬く締まり、ずっしりと重みがあるもの。',
        imageDesc: '適度に土がついて乾いており、皮がざらざらとして重いじゃがいも。',
        isCorrect: true
      },
      {
        text: '全体的に皮が非常に薄くてツルツルしており、芽のくぼみが非常に深く、軽く握ると少し弾力を感じるもの。',
        imageDesc: '皮が薄く、くぼみが深く、少し柔らかいじゃがいも。',
        isCorrect: false
      },
      {
        text: '表面が完全に水洗いされていてピカピカに輝き、皮が全体的に緑がかっているが、新芽が完全に除去されて平らになっているもの。',
        imageDesc: '皮が緑色に変わり、新芽の痕跡がないツルツルしたじゃがいも。',
        isCorrect: false
      },
      {
        text: '表面がゴツゴツと歪な形をしており、皮に部分的な黒い斑点（すす状）が広がっているが、乾燥して非常に硬いもの。',
        imageDesc: 'ゴツゴツして黒い斑点のある硬いじゃがいも。',
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
    explanation: 'にんじんは、葉の切り口（首の芯）が「小さいもの」を選びましょう。切り口が太いものは、芯まで硬くなっており、栄養が葉にとられて味が落ちています。全体に濃いオレンジ色（β-カロテンが豊富）で、表面がなめらかでハリがあるものが良質です。ひげ根が多いものはストレスがかかって繊維が硬くなっています。',
    hardQuestion: '袋入りのにんじんを選ぶ際、最も糖度が高く、芯まで柔らかく調理しやすいものはどれ？',
    hardOptions: [
      {
        text: '全体が濃いオレンジ色で、首元（葉の切り口）の直径が5mm〜1cm程度と細く、黒ずみがなく、肌がつるりとしているもの。',
        imageDesc: '全体が濃いオレンジ色で、葉の切り口が非常に小さく滑らかなにんじん。',
        isCorrect: true
      },
      {
        text: '首元（葉の切り口）が非常に太く（500円玉大）、そこから新しい緑色の葉の芽が勢いよく伸び出しているもの。',
        imageDesc: '首元が太く、新しい緑の芽が伸びてきているにんじん。',
        isCorrect: false
      },
      {
        text: '表面が非常に白っぽく洗われており、全体に細長いひげ根が一面に生えていて、持ったときに非常にしなやかに曲がるもの。',
        imageDesc: '白っぽく、ひげ根がびっしり生えてしなるにんじん。',
        isCorrect: false
      },
      {
        text: '全体が赤黒いほど濃い色をしており、皮の表面に多数の横方向の溝（亀裂）が入っているが、中身が硬く詰まっているもの。',
        imageDesc: '色が極端に濃く、表面に深い横溝がいくつも入ったにんじん。',
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
  }
};
