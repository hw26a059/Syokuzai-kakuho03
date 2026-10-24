import React, { useState } from 'react';
import { ChefHat, Clock, Flame, Sparkles, CheckCircle2, ChevronRight, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RecipeBookScreen() {
  const [isOpen, setIsOpen] = useState(false);

  // カレーライスの詳細レシピ情報
  const recipeDetails = {
    id: 'curry',
    name: '定番！絶品カレーライス',
    category: 'カレー',
    time: '約45分',
    servings: '4人分',
    shortDesc: '素材の旨味を最大限に引き出す家庭風カレー。玉ねぎの甘みと丁寧なアク取りが美味しさの秘訣。',
    ingredients: [
      { name: '牛肉（または豚・鶏肉）', amount: '250〜300g' },
      { name: '玉ねぎ', amount: '中2個' },
      { name: 'にんじん', amount: '中1本' },
      { name: 'じゃがいも', amount: '中2個' },
      { name: 'カレールウ', amount: '1/2箱（4〜5皿分）' },
      { name: '水', amount: '700〜800ml（ルウの表示に従う）' },
      { name: 'サラダ油', amount: '大さじ1' },
    ],
    steps: [
      {
        stepNum: 1,
        title: '野菜をそれぞれ切る',
        detail: '玉ねぎは繊維に沿って薄切り（またはくし形切り）にします。にんじんは一口大の乱切り、じゃがいもは一口大に切って水にサッとさらし、水気をよく切っておきます（煮崩れ防止）。',
        point: '切り口の大きさを揃えることで、火の通りが均一になります。',
      },
      {
        stepNum: 2,
        title: '肉を切る',
        detail: '肉を食べやすい一口大（約3〜4cm角）に切ります。冷蔵庫から出して10分ほど置き、室温に戻しておくと火が均一に入り柔らかく仕上がります。',
        point: 'ドリップ（肉汁）が出ている場合は、キッチンペーパーで軽く拭き取ると臭みが消えます。',
      },
      {
        stepNum: 3,
        title: '切った具材を炒める',
        detail: '厚手の鍋にサラダ油を熱し、中火で肉を炒めます。肉の色が変わったら玉ねぎを加え、しんなりときつね色に色づくまでじっくり炒めます。続いてにんじん・じゃがいもを加え、全体に油が回るよう炒め合わせます。',
        point: '玉ねぎをしっかり炒めることで、自然な甘みと深いコクがスープに溶け出します。',
      },
      {
        stepNum: 4,
        title: '水を加え、沸騰したら灰汁（アク）をとる',
        detail: '分量の水を鍋に注ぎ、強火にかけます。沸騰したら弱火〜中弱火に落とし、表面に浮いてくる灰汁（アク）をおたまやアク取りシートで丁寧に取り除きます。その後、具材が柔らかくなるまで約15〜20分コトコト煮込みます。',
        point: 'アクをこまめに取ることで、雑味がなく澄んだ味わいに仕上がります。',
      },
      {
        stepNum: 5,
        title: 'ルウを加えて溶かす',
        detail: '具材に竹串がスッと通るくらい柔らかくなったら、必ず「いったん火を止めます」。カレールウを割り入れ、おたまで優しく混ぜながら完全に溶かします。',
        point: '沸騰した状態でルウを入れるとダマになりやすいので、必ず火を止めてから溶かしましょう。',
      },
      {
        stepNum: 6,
        title: '煮込む（仕上げ）',
        detail: 'ルウが完全に溶けたら、再び弱火にかけます。底が焦げ付かないよう、木べらやおたまで時々鍋底をなぞるように混ぜながら、とろみがつくまで約10分弱火で煮込みます。全体につやが出てとろみがつけば完成です！',
        point: '煮込みすぎるとじゃがいもが崩れてしまうので、弱火で優しく混ぜるのがコツです。',
      },
    ],
    tips: [
      '★ 鮮度の良い食材を使うと、肉のパサつきがなくジューシーになり、野菜の甘みと香りが引き立ちます。',
      '★ 一晩寝かせると具材に味がより染み込みますが、粗熱が取れたらすぐに冷蔵保存しましょう。',
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm mb-6 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit mx-auto">
          <BookOpen size={14} />
          <span>調理レシピ集（全解放）</span>
        </div>
        <h2 className="text-xl font-black text-stone-800">
          プロ直伝の本格調理レシピ
        </h2>
        <p className="text-xs text-stone-500 max-w-md mx-auto">
          レシピカードをクリックすると、詳しい材料の分量や調理のコツを開いて確認できます。
        </p>
      </div>

      {/* Recipe List (Card) */}
      <div className="space-y-4">
        <div
          id="recipe-card-curry"
          onClick={() => setIsOpen(true)}
          className="bg-white border border-stone-200 hover:border-emerald-400 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group active:scale-[0.99]"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center font-bold text-2xl group-hover:scale-105 transition-transform shrink-0">
              🍛
            </div>
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {recipeDetails.category}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1 font-medium">
                  <Clock size={12} /> {recipeDetails.time}
                </span>
              </div>
              <h3 className="text-lg font-black text-stone-800 group-hover:text-emerald-700 transition-colors">
                {recipeDetails.name}
              </h3>
              <p className="text-xs text-stone-500 line-clamp-1">
                {recipeDetails.shortDesc}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto bg-emerald-50 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all shrink-0 cursor-pointer"
          >
            <span>レシピを見る</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Detailed Modal (開いた状態) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-stone-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-xl space-y-6 text-left relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-stone-400 hover:text-stone-600 p-1.5 rounded-full hover:bg-stone-100 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Title Header */}
              <div className="border-b border-stone-100 pb-4 pr-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {recipeDetails.category}
                  </span>
                  <span className="text-xs text-stone-400 flex items-center gap-1 font-medium">
                    <Clock size={13} /> {recipeDetails.time}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-stone-800">
                  {recipeDetails.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  {recipeDetails.shortDesc}
                </p>
              </div>

              {/* Ingredients Section */}
              <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>材料・分量（{recipeDetails.servings}）</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {recipeDetails.ingredients.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-white/80 border border-amber-100 font-medium text-stone-700"
                    >
                      <span>{item.name}</span>
                      <span className="font-bold text-amber-900">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Cooking Guide */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-stone-800 flex items-center gap-2">
                  <Flame size={16} className="text-amber-500" />
                  <span>詳しい調理手順（全6ステップ）</span>
                </h4>

                <div className="space-y-3">
                  {recipeDetails.steps.map((step) => (
                    <div
                      key={step.stepNum}
                      className="p-4 rounded-2xl border border-stone-150 bg-stone-50/40 space-y-2 text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                          {step.stepNum}
                        </div>
                        <h5 className="font-bold text-stone-800 text-sm">
                          {step.title}
                        </h5>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed pl-8">
                        {step.detail}
                      </p>
                      <div className="ml-8 p-2 rounded-xl bg-amber-50/70 border border-amber-200/50 text-[11px] text-amber-900 font-medium flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>コツ:</strong> {step.point}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/50 space-y-1 text-left">
                <h5 className="text-xs font-bold text-emerald-800">💡 美味しく仕上げるポイント</h5>
                {recipeDetails.tips.map((tip, i) => (
                  <p key={i} className="text-xs text-emerald-700 font-medium leading-relaxed">
                    {tip}
                  </p>
                ))}
              </div>

              {/* Bottom Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-3 rounded-xl transition-all text-xs cursor-pointer"
              >
                閉じる
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
