import React from 'react';
import { BookOpen, Star, Sparkles, Award } from 'lucide-react';
import { Dish } from '../types';

interface BookScreenProps {
  dishes: Dish[];
}

export default function BookScreen({ dishes }: BookScreenProps) {
  // ベースレシピ（タグ）ごとにグループ化する
  const groupedDishes = dishes.reduce((acc, dish) => {
    const key = dish.baseRecipeName;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(dish);
    return acc;
  }, {} as Record<string, Dish[]>);

  const baseRecipeNames = Object.keys(groupedDishes);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="text-emerald-500" />
        <h2 className="text-xl font-bold text-stone-800 tracking-tight">私のコレクション料理図鑑</h2>
      </div>

      {dishes.length === 0 ? (
        <div className="bg-white border border-stone-150 rounded-2xl p-12 text-center text-stone-400 space-y-3">
          <BookOpen className="mx-auto text-stone-300" size={48} />
          <h3 className="font-semibold text-stone-700">図鑑はまだ空っぽです</h3>
          <p className="text-xs text-stone-400 max-w-sm mx-auto leading-relaxed">
            目利きクイズに正解して、正解率50%以上の美味しい料理を完成させると、ここに自分好みに命名したオリジナル料理が登録されます！
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {baseRecipeNames.map((recipeName) => (
            <div key={recipeName} className="space-y-4">
              {/* Category Tag Header */}
              <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-2xs">
                  ベースレシピ：{recipeName}
                </span>
                <span className="text-xs text-stone-400 font-medium">
                  ({groupedDishes[recipeName].length} 品)
                </span>
              </div>

              {/* Grid of Dishes under this Recipe */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {groupedDishes[recipeName].map((dish) => {
                  const stars = Math.ceil(dish.accuracy * 5); // 0.5-1.0 -> 3-5 stars
                  return (
                    <div
                      key={dish.id}
                      className="bg-white border border-stone-200 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between gap-4"
                    >
                      <div className="space-y-2">
                        {/* Custom Name */}
                        <h4 className="font-bold text-stone-800 text-base flex items-center gap-1.5">
                          <Sparkles size={14} className="text-amber-500 shrink-0" />
                          <span className="truncate">{dish.customName}</span>
                        </h4>

                        {/* Stars rating based on accuracy */}
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              fill={i < stars ? 'currentColor' : 'none'}
                              className={i < stars ? '' : 'text-stone-200'}
                            />
                          ))}
                          <span className="text-[10px] text-stone-400 font-bold ml-1 font-mono">
                            {Math.round(dish.accuracy * 100)}%
                          </span>
                        </div>

                        {/* Ingredients List */}
                        <div className="pt-1">
                          <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider mb-1">
                            使用した目利き食材
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {dish.ingredients.map((ing, i) => (
                              <span
                                key={i}
                                className="bg-stone-50 text-stone-600 text-[10px] font-medium px-2 py-0.5 rounded border border-stone-100"
                              >
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Score Badge */}
                      <div className="border-t border-stone-100 pt-3 flex items-center justify-between text-xs">
                        <span className="text-stone-400 font-medium">獲得スコア</span>
                        <span className="font-bold text-emerald-600 flex items-center gap-1 font-mono">
                          <Award size={14} />
                          {dish.score.toLocaleString()} pts
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
