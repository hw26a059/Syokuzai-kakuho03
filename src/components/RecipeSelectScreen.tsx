import React, { useState } from 'react';
import { ChefHat, Check, Plus, AlertCircle, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Recipe } from '../types';
import { RECIPES, INGREDIENTS } from '../data/gameData';

interface RecipeSelectScreenProps {
  onStartCooking: (recipe: Recipe, selectedIngredients: string[], difficulty: 'easy' | 'hard') => void;
}

export default function RecipeSelectScreen({ onStartCooking }: RecipeSelectScreenProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');

  // レシピ選択時の処理
  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    // 初期選択食材を設定
    setSelectedIngredients([...recipe.requiredIngredients]);
  };

  // 食材のトグル処理（固定食材は外せない、その他は解除可能）
  const handleToggleIngredient = (ingredientId: string) => {
    if (!selectedRecipe) return;

    // 固定必須食材は解除不可
    if (selectedRecipe.fixedIngredients?.includes(ingredientId)) {
      return;
    }

    setSelectedIngredients((prev) => {
      if (prev.includes(ingredientId)) {
        return prev.filter((id) => id !== ingredientId);
      } else {
        return [...prev, ingredientId];
      }
    });
  };

  // クイズ開始可能条件のチェック
  const minIngredients = selectedRecipe?.minIngredients ?? 1;
  const currentCount = selectedIngredients.length;
  const isMinCountMet = currentCount >= minIngredients;

  // 固定食材がすべて含まれているか
  const isFixedMet = selectedRecipe?.fixedIngredients
    ? selectedRecipe.fixedIngredients.every((id) => selectedIngredients.includes(id))
    : true;

  // カテゴリ指定（例：肉類1個、ひき肉類1個）が満たされているか
  const isCategoryMet = selectedRecipe?.requiredCategory
    ? selectedRecipe.requiredCategory.ingredientIds.some((id) => selectedIngredients.includes(id))
    : true;

  const canStartCooking = Boolean(selectedRecipe && isMinCountMet && isFixedMet && isCategoryMet);

  // エラー/不足メッセージの生成
  const getValidationMessages = (): string[] => {
    if (!selectedRecipe) return [];
    const messages: string[] = [];
    if (!isMinCountMet) {
      messages.push(`食材をあと ${minIngredients - currentCount} 個選んでください（最低 ${minIngredients} 個必要）`);
    }
    if (!isFixedMet && selectedRecipe.fixedIngredients) {
      const missingFixed = selectedRecipe.fixedIngredients
        .filter((id) => !selectedIngredients.includes(id))
        .map((id) => INGREDIENTS[id]?.name || id);
      messages.push(`固定必須食材（${missingFixed.join('、')}）が必要です`);
    }
    if (!isCategoryMet && selectedRecipe.requiredCategory) {
      messages.push(`${selectedRecipe.requiredCategory.label}から1つ以上食材を選んでください`);
    }
    return messages;
  };

  const validationMessages = getValidationMessages();

  // 目利きクイズ開始
  const handleStart = () => {
    if (!selectedRecipe || !canStartCooking) return;
    onStartCooking(selectedRecipe, selectedIngredients, difficulty);
  };

  // レシピのグループ化（カテゴリ別）
  const categories = Array.from(new Set(RECIPES.map((r) => r.baseCategory)));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-stone-800 tracking-tight mb-6 flex items-center gap-2">
        <ChefHat className="text-emerald-500" />
        <span>作りたいレシピを選んで具材をカスタマイズ</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left / Middle: Recipe List */}
        <div className="md:col-span-2 space-y-6">
          {categories.map((category) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {RECIPES.filter((r) => r.baseCategory === category).map((recipe) => {
                  const isSelected = selectedRecipe?.id === recipe.id;
                  return (
                    <button
                      key={recipe.id}
                      id={`recipe-${recipe.id}`}
                      onClick={() => handleSelectRecipe(recipe)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/50 shadow-xs ring-1 ring-emerald-500/20'
                          : 'border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-stone-800 text-sm">
                          {recipe.name}
                        </h4>
                        <span className="text-[10px] bg-stone-100 text-stone-500 font-bold px-1.5 py-0.5 rounded">
                          最低 {recipe.minIngredients}個
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-1">
                        基本: {recipe.requiredIngredients.map((id) => INGREDIENTS[id]?.name).join(', ')}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Ingredient Customization & Start Panel */}
        <div className="md:col-span-1">
          <div className="bg-white border border-stone-200 rounded-2xl p-5 sticky top-6 shadow-sm">
            <AnimatePresence mode="wait">
              {selectedRecipe ? (
                <motion.div
                  key={selectedRecipe.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {selectedRecipe.baseCategory}
                    </span>
                    <h3 className="text-lg font-bold text-stone-800 mt-1.5">
                      {selectedRecipe.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      最低必要食材数: <span className="font-bold text-emerald-600">{selectedRecipe.minIngredients} 個</span>
                      {selectedRecipe.requiredCategory && (
                        <span className="block text-stone-400 mt-0.5">※{selectedRecipe.requiredCategory.label}から1個以上必須</span>
                      )}
                    </p>
                  </div>

                  {/* Ingredients Section */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-semibold text-stone-500">食材構成（タップして選択・解除）</h4>
                      <span className="text-xs font-bold text-stone-600">
                        選択中: {selectedIngredients.length} / 最低 {selectedRecipe.minIngredients}個
                      </span>
                    </div>
                    
                    <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
                      {/* 基本食材リスト（固定食材は外せない、その他は解除可能） */}
                      <div className="text-[11px] font-bold text-stone-400 px-1 pt-1">基本食材</div>
                      {selectedRecipe.requiredIngredients.map((id) => {
                        const ingredient = INGREDIENTS[id];
                        if (!ingredient) return null;
                        const isFixed = selectedRecipe.fixedIngredients?.includes(id);
                        const isChecked = selectedIngredients.includes(id);
                        return (
                          <button
                            key={id}
                            id={`ingredient-toggle-${id}`}
                            onClick={() => handleToggleIngredient(id)}
                            disabled={isFixed}
                            className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left ${
                              isFixed
                                ? 'border-amber-200 bg-amber-50/50 text-amber-900 cursor-not-allowed'
                                : isChecked
                                ? 'border-emerald-500 bg-emerald-50/20 text-emerald-700 font-medium cursor-pointer'
                                : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-400 cursor-pointer'
                            }`}
                          >
                            <span className="text-sm flex items-center gap-1.5">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isFixed ? 'bg-amber-500' : isChecked ? 'bg-emerald-500' : 'bg-stone-300'
                                }`}
                              />
                              {ingredient.name}
                            </span>
                            <div className="flex items-center gap-1.5">
                              {isFixed && (
                                <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                                  <Lock size={10} />
                                  固定
                                </span>
                              )}
                              <div
                                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                                  isFixed
                                    ? 'border-amber-400 bg-amber-400 text-white'
                                    : isChecked
                                    ? 'border-emerald-500 bg-emerald-500 text-white'
                                    : 'border-stone-300'
                                }`}
                              >
                                {isChecked || isFixed ? <Check size={14} /> : <Plus size={14} className="text-stone-400" />}
                              </div>
                            </div>
                          </button>
                        );
                      })}

                      {/* 追加・代替可能食材 */}
                      {selectedRecipe.optionalIngredients.length > 0 && (
                        <>
                          <div className="text-[11px] font-bold text-stone-400 px-1 pt-2">追加・変更可能食材</div>
                          {selectedRecipe.optionalIngredients.map((id) => {
                            const ingredient = INGREDIENTS[id];
                            if (!ingredient) return null;
                            const isChecked = selectedIngredients.includes(id);
                            return (
                              <button
                                key={id}
                                id={`ingredient-toggle-${id}`}
                                onClick={() => handleToggleIngredient(id)}
                                className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left cursor-pointer ${
                                  isChecked
                                    ? 'border-emerald-500 bg-emerald-50/20 text-emerald-700 font-medium'
                                    : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-600'
                                }`}
                              >
                                <span className="text-sm flex items-center gap-1.5">
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      isChecked ? 'bg-emerald-500' : 'bg-stone-300'
                                    }`}
                                  />
                                  {ingredient.name}
                                </span>
                                <div
                                  className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                                    isChecked
                                      ? 'border-emerald-500 bg-emerald-500 text-white'
                                      : 'border-stone-300'
                                  }`}
                                >
                                  {isChecked ? <Check size={14} /> : <Plus size={14} className="text-stone-400" />}
                                </div>
                              </button>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Summary / Game Start Button */}
                  <div className="border-t border-stone-200 pt-4 space-y-4">
                    <div className="flex justify-between items-center text-xs text-stone-500">
                      <span>クイズ総出題数</span>
                      <span className="font-bold text-stone-800">{selectedIngredients.length} 問</span>
                    </div>

                    {/* 難易度選択項目 */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-500 block">
                        難易度を選択
                      </label>
                      <div className="grid grid-cols-2 gap-2 bg-stone-100 p-1 rounded-xl">
                        <button
                          type="button"
                          id="diff-easy-btn"
                          onClick={() => setDifficulty('easy')}
                          className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                            difficulty === 'easy'
                              ? 'bg-white text-stone-800 shadow-xs'
                              : 'text-stone-400 hover:text-stone-600'
                          }`}
                        >
                          簡単
                        </button>
                        <button
                          type="button"
                          id="diff-hard-btn"
                          onClick={() => setDifficulty('hard')}
                          className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                            difficulty === 'hard'
                              ? 'bg-red-500 text-white shadow-xs'
                              : 'text-stone-400 hover:text-red-500'
                          }`}
                        >
                          難しい
                        </button>
                      </div>
                    </div>

                    {/* バリデーション警告メッセージ */}
                    {!canStartCooking && validationMessages.length > 0 && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs space-y-1">
                        <div className="flex items-center gap-1 font-bold text-amber-900">
                          <AlertCircle size={14} />
                          <span>開始条件を満たしていません</span>
                        </div>
                        {validationMessages.map((msg, i) => (
                          <div key={i} className="pl-4">・{msg}</div>
                        ))}
                      </div>
                    )}

                    <button
                      id="start-quiz-btn"
                      onClick={handleStart}
                      disabled={!canStartCooking}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2 ${
                        canStartCooking
                          ? 'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-emerald-500/10 cursor-pointer'
                          : 'bg-stone-200 text-stone-400 shadow-none cursor-not-allowed'
                      }`}
                    >
                      <span>目利きクイズを始める</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-12 text-stone-400">
                  <AlertCircle className="mx-auto text-stone-300 mb-2" size={36} />
                  <p className="text-sm">左側のリストから料理レシピを選択してください。</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
