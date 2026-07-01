import React, { useState } from 'react';
import { ChefHat, Check, Plus, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Recipe, Ingredient } from '../types';
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
    // 必須食材を最初から選択状態にする
    setSelectedIngredients([...recipe.requiredIngredients]);
  };

  // トッピング（追加具材）のトグル処理
  const handleToggleIngredient = (ingredientId: string) => {
    if (!selectedRecipe) return;

    // 必須食材は外せない
    if (selectedRecipe.requiredIngredients.includes(ingredientId)) {
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

  // 目利きクイズ開始
  const handleStart = () => {
    if (!selectedRecipe) return;
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
                      <h4 className="font-semibold text-stone-800 text-sm">
                        {recipe.name}
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-1">
                        具材: {recipe.requiredIngredients.map(id => INGREDIENTS[id]?.name).join(', ')}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Customizer Panel */}
        <div className="space-y-6">
          <div className="bg-stone-50 border border-stone-150 rounded-2xl p-5 sticky top-24">
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
                    <p className="text-xs text-stone-400 mt-1">
                      必要な食材を確保してクイズに挑戦します。
                    </p>
                  </div>

                  {/* Ingredients Section */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-stone-500">食材構成（タップして選択）</h4>
                    
                    <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
                      {/* Required Ingredients (Pre-selected and fixed) */}
                      {selectedRecipe.requiredIngredients.map((id) => {
                        const ingredient = INGREDIENTS[id];
                        if (!ingredient) return null;
                        return (
                          <div
                            key={id}
                            className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-100 shadow-xs"
                          >
                            <span className="text-stone-700 text-sm font-medium flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                              {ingredient.name}
                            </span>
                            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                              <Check size={12} />
                              必須
                            </span>
                          </div>
                        );
                      })}

                      {/* Optional Ingredients */}
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
                              <span className={`w-1.5 h-1.5 rounded-full ${isChecked ? 'bg-emerald-500' : 'bg-stone-300'}`} />
                              {ingredient.name}
                            </span>
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              isChecked ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-stone-300'
                            }`}>
                              {isChecked ? <Check size={14} /> : <Plus size={14} className="text-stone-400" />}
                            </div>
                          </button>
                        );
                      })}
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
                          簡単（標準）
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
                          難しい（30秒）
                        </button>
                      </div>
                    </div>

                    <button
                      id="start-quiz-btn"
                      onClick={handleStart}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer"
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
