import React, { useState, useEffect } from 'react';
import { ChefHat, ArrowRight, Save, RotateCcw, Award, Sparkles, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Recipe, Dish } from '../types';
import { INGREDIENTS } from '../data/gameData';

interface ResultScreenProps {
  recipe: Recipe;
  selectedIngredients: string[];
  answers: { ingredientId: string; isCorrect: boolean; score: number }[];
  nickname: string;
  onSaveDish: (dish: Dish, addedScore: number) => void;
  onRestart: () => void;
  onViewBook: () => void;
}

export default function ResultScreen({
  recipe,
  selectedIngredients,
  answers,
  nickname,
  onSaveDish,
  onRestart,
  onViewBook
}: ResultScreenProps) {
  const [cookingPhase, setCookingPhase] = useState<'chopping' | 'boiling' | 'completed'>('chopping');
  const [customName, setCustomName] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // 正解数と合計スコアの計算
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const accuracy = correctCount / answers.length;
  const isDelicious = accuracy >= 0.5;
  const totalEarnedScore = answers.reduce((acc, curr) => acc + curr.score, 0);

  // 調理アニメーションの進行
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCookingPhase('boiling');
    }, 1500);

    const timer2 = setTimeout(() => {
      setCookingPhase('completed');
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // 初期カスタム料理名の決定（例：ベースレシピ名を初期値に、トッピングなどを加味できるがシンプルにベース名）
  useEffect(() => {
    if (cookingPhase === 'completed') {
      setCustomName(recipe.name);
    }
  }, [cookingPhase, recipe]);

  const handleSave = () => {
    const trimmed = customName.trim();
    if (!trimmed) return;

    const newDish: Dish = {
      id: Math.random().toString(36).substring(2, 11),
      recipeId: recipe.id,
      baseRecipeName: recipe.name,
      customName: trimmed,
      ingredients: selectedIngredients.map((id) => INGREDIENTS[id]?.name || ''),
      score: totalEarnedScore,
      accuracy,
      timestamp: Date.now()
    };

    onSaveDish(newDish, totalEarnedScore);
    setIsSaved(true);
  };

  if (cookingPhase !== 'completed') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: cookingPhase === 'chopping' ? [-2, 2, -2] : [0, 5, -5, 0],
          }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="w-24 h-24 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-full mb-6 shadow-md"
        >
          <ChefHat size={48} />
        </motion.div>

        <h3 className="text-lg font-bold text-stone-800">
          {cookingPhase === 'chopping' ? '🥕 食材をトントン下ごしらえ中...' : '🔥 お鍋でコトコト調理中...'}
        </h3>
        <p className="text-xs text-stone-400 mt-2 max-w-xs mx-auto">
          新鮮な目利き食材たちが、絶品の料理に仕上がっていきます。少々お待ちください。
        </p>

        {/* Cooking progress visualizer */}
        <div className="w-48 h-1.5 bg-stone-100 rounded-full overflow-hidden mt-6 mx-auto">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: cookingPhase === 'chopping' ? '50%' : '100%' }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-center"
      >
        {/* Header Ribbon */}
        <div className="flex justify-center">
          {isDelicious ? (
            <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-xs border border-amber-200">
              <Sparkles size={14} className="text-amber-500 animate-spin" />
              <span>料理大成功！絶品完成</span>
            </div>
          ) : (
            <div className="bg-stone-100 text-stone-600 px-4 py-1.5 rounded-full text-xs font-bold border border-stone-200">
              💧 失敗... 不味くなってしまった
            </div>
          )}
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl font-black text-stone-800 tracking-tight">
            {isDelicious ? 'お見事！最高の仕上がりです！' : 'うーん... 味がちょっとイマイチです...'}
          </h2>
          <p className="text-xs text-stone-400 mt-2">
            お肉、お魚、野菜のクイズ正解率は {Math.round(accuracy * 100)}% ({correctCount}/{answers.length}) でした。
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-5 flex items-center justify-between">
          <div className="text-left">
            <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase block">獲得スコア</span>
            <span className="text-2xl font-black text-emerald-700 font-mono">+{totalEarnedScore.toLocaleString()} <span className="text-xs">pts</span></span>
          </div>
          <Award className="text-emerald-500" size={36} />
        </div>

        {/* Interactive naming section (If delicious) */}
        {isDelicious ? (
          <div className="bg-stone-50 border border-stone-150 rounded-2xl p-5 text-left space-y-4">
            <div>
              <label htmlFor="dish-name" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                この料理に自由に名前を付けよう（料理図鑑に登録されます）
              </label>
              <div className="flex gap-2">
                <input
                  id="dish-name-input"
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="例：ウルトラ具だくさんカレー"
                  disabled={isSaved}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-stone-800 transition-all font-semibold bg-white disabled:bg-stone-100 disabled:text-stone-400 text-sm"
                  maxLength={20}
                />
                <button
                  id="save-dish-btn"
                  onClick={handleSave}
                  disabled={isSaved || !customName.trim()}
                  className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-stone-200 text-white font-semibold px-4 rounded-xl transition-all shadow-sm flex items-center gap-1.5 text-sm cursor-pointer"
                >
                  <Save size={16} />
                  <span>{isSaved ? '登録済' : '図鑑に登録'}</span>
                </button>
              </div>
            </div>
            <p className="text-[11px] text-stone-400">
              ※食材: {selectedIngredients.map((id) => INGREDIENTS[id]?.name || '').join(', ')}
            </p>
          </div>
        ) : (
          <div className="bg-stone-50 border border-stone-150 rounded-2xl p-5 text-left text-stone-500 text-xs leading-relaxed space-y-2">
            <p className="font-semibold text-stone-700">❌ 図鑑登録の条件に満たしませんでした</p>
            <p>
              クイズの正解率が50%未満（今回は {Math.round(accuracy * 100)}%）だったため、傷んだ食材や旬を過ぎた食材の割合が多くなり、料理が失敗に終わりました。
            </p>
            <p className="text-emerald-600 font-medium">
              ★目利きクイズで正しい食材を選ぶほど、料理の美味しさがアップし、高スコアが狙えます！
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {isDelicious && isSaved && (
            <button
              id="view-book-btn"
              onClick={onViewBook}
              className="flex-1 border border-stone-200 hover:border-stone-300 text-stone-700 font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <BookOpen size={16} />
              <span>料理図鑑を見に行く</span>
            </button>
          )}
          <button
            id="restart-game-btn"
            onClick={onRestart}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <RotateCcw size={16} />
            <span>もう一度遊ぶ（レシピ選択）</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
