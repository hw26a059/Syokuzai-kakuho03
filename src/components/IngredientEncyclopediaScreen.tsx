import React, { useState } from 'react';
import { BookOpen, Lock, Sparkles, X, CheckCircle, Info, Calendar, Snowflake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INGREDIENTS, QUIZ_QUESTIONS } from '../data/gameData';
import { Ingredient } from '../types';

interface IngredientEncyclopediaScreenProps {
  unlockedIngredientIds: string[];
}

export default function IngredientEncyclopediaScreen({
  unlockedIngredientIds,
}: IngredientEncyclopediaScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'meat' | 'fish' | 'vegetable' | 'other'>('all');
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null);

  // 食材リスト（全食材）
  const allIngredients = Object.values(INGREDIENTS);

  // カテゴリフィルター
  const filteredIngredients = allIngredients.filter((ing) => {
    if (selectedCategory === 'all') return true;
    return ing.category === selectedCategory;
  });

  const totalCount = allIngredients.length;
  const unlockedCount = allIngredients.filter((ing) =>
    unlockedIngredientIds.includes(ing.id)
  ).length;
  const unlockPercentage = Math.round((unlockedCount / totalCount) * 100);

  // 食材ごとの詳細情報（クイズデータや解説の補完）
  const getIngredientDetails = (ing: Ingredient) => {
    const quiz = QUIZ_QUESTIONS[ing.id];
    const explanation =
      quiz?.explanation ||
      `${ing.name}は、変色や乾燥がなく、みずみずしくハリがあるものを選ぶのが基本です。パックの底にドリップ（水分）が出ていないものが新鮮です。`;

    // カテゴリごとの豆知識・保存・旬の目安
    let season = '通年（特に秋〜冬）';
    let preservation = '冷蔵（チルド室）保存で2〜3日以内。使い切れない場合はラップで密閉して冷凍保存。';
    if (ing.category === 'vegetable') {
      season = '春・秋・冬など品種による';
      preservation = '新聞紙やキッチンペーパーで包み、ポリ袋に入れて野菜室で保存。';
    } else if (ing.category === 'fish') {
      season = '秋〜冬が脂が乗り美味しい';
      preservation = 'ドリップを拭き取り、ラップでぴったり包んで冷蔵または冷凍保存。';
    }

    return {
      explanation,
      season,
      preservation,
    };
  };

  // 食材カードのクリックハンドラ（※解放済みのみ詳細を開く、未解放は何もしない）
  const handleCardClick = (ing: Ingredient) => {
    const isUnlocked = unlockedIngredientIds.includes(ing.id);
    if (!isUnlocked) {
      // 未解放の食材はクリックしても見れない
      return;
    }
    setActiveIngredient(ing);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Info */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm mb-6 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit mx-auto">
          <BookOpen size={14} />
          <span>食材図鑑（コレクション）</span>
        </div>
        <h2 className="text-xl font-black text-stone-800">
          目利きした食材の知識アーカイブ
        </h2>
        <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
          目利きクイズで正解した食材が解放され、詳しい特徴や保存方法を確認できます。
          （※未解放の食材はクリックしても見ることはできません）
        </p>

        {/* Progress Bar */}
        <div className="max-w-sm mx-auto pt-2 space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-stone-500">図鑑解放率</span>
            <span className="text-emerald-600 font-mono">
              {unlockedCount} / {totalCount} 品 ({unlockPercentage}%)
            </span>
          </div>
          <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
              style={{ width: `${unlockPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center gap-1.5 mb-6 flex-wrap">
        {[
          { id: 'all', label: 'すべて' },
          { id: 'meat', label: '肉類' },
          { id: 'fish', label: '魚介類' },
          { id: 'vegetable', label: '野菜類' },
          { id: 'other', label: 'その他' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Ingredient Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredIngredients.map((ing) => {
          const isUnlocked = unlockedIngredientIds.includes(ing.id);

          return (
            <div
              key={ing.id}
              onClick={() => handleCardClick(ing)}
              className={`p-4 rounded-2xl border transition-all text-center relative flex flex-col items-center justify-between min-h-[120px] ${
                isUnlocked
                  ? 'bg-white border-stone-200 hover:border-emerald-400 hover:shadow-md cursor-pointer group active:scale-98'
                  : 'bg-stone-100/70 border-stone-200 text-stone-400 cursor-not-allowed select-none opacity-75'
              }`}
            >
              {isUnlocked ? (
                <>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-2 group-hover:scale-110 transition-transform">
                    {ing.name.slice(0, 1)}
                  </div>
                  <h4 className="font-bold text-stone-800 text-sm">
                    {ing.name}
                  </h4>
                  <span className="text-[10px] text-emerald-600 font-semibold mt-1 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <CheckCircle size={10} />
                    解放済
                  </span>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-400 flex items-center justify-center mb-2">
                    <Lock size={18} />
                  </div>
                  <h4 className="font-medium text-stone-400 text-sm">
                    {ing.name}
                  </h4>
                  <span className="text-[10px] text-stone-400 font-medium mt-1">
                    未解放（クイズで正解）
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail Modal for Unlocked Ingredient */}
      <AnimatePresence>
        {activeIngredient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border border-stone-200 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-xl space-y-5 text-left relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveIngredient(null)}
                className="absolute top-5 right-5 text-stone-400 hover:text-stone-600 p-1 rounded-full hover:bg-stone-100 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Title Header */}
              <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl">
                  {activeIngredient.name.slice(0, 1)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-stone-800">
                      {activeIngredient.name}
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      図鑑登録済
                    </span>
                  </div>
                  <span className="text-xs text-stone-400">
                    カテゴリ: {activeIngredient.category === 'meat' ? '肉類' : activeIngredient.category === 'fish' ? '魚介類' : activeIngredient.category === 'vegetable' ? '野菜類' : 'その他'}
                  </span>
                </div>
              </div>

              {/* Details Body */}
              {(() => {
                const details = getIngredientDetails(activeIngredient);
                return (
                  <div className="space-y-4 text-xs">
                    {/* 目利きポイント */}
                    <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-2xl p-4 space-y-1.5">
                      <h4 className="font-bold text-emerald-800 flex items-center gap-1.5 text-xs">
                        <Sparkles size={14} className="text-emerald-600" />
                        <span>目利き・鮮度の見極めポイント</span>
                      </h4>
                      <p className="text-stone-700 leading-relaxed font-medium">
                        {details.explanation}
                      </p>
                    </div>

                    {/* 旬・季節 */}
                    <div className="bg-stone-50 border border-stone-150 rounded-2xl p-4 space-y-1">
                      <h4 className="font-bold text-stone-700 flex items-center gap-1.5">
                        <Calendar size={13} className="text-stone-500" />
                        <span>旬の時期・美味しい季節</span>
                      </h4>
                      <p className="text-stone-600 leading-relaxed font-medium">
                        {details.season}
                      </p>
                    </div>

                    {/* おすすめ保存方法 */}
                    <div className="bg-stone-50 border border-stone-150 rounded-2xl p-4 space-y-1">
                      <h4 className="font-bold text-stone-700 flex items-center gap-1.5">
                        <Snowflake size={13} className="text-stone-500" />
                        <span>長持ちさせる保存方法</span>
                      </h4>
                      <p className="text-stone-600 leading-relaxed font-medium">
                        {details.preservation}
                      </p>
                    </div>
                  </div>
                );
              })()}

              <button
                onClick={() => setActiveIngredient(null)}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-2.5 rounded-xl transition-all text-xs cursor-pointer"
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
