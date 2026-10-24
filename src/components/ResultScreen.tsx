import React, { useState, useEffect } from 'react';
import { ChefHat, RotateCcw, Award, Sparkles, BookOpen, Utensils, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Recipe } from '../types';
import { INGREDIENTS } from '../data/gameData';

interface ResultScreenProps {
  recipe: Recipe;
  selectedIngredients: string[];
  answers: { ingredientId: string; isCorrect: boolean; score: number }[];
  cookingResult?: {
    correctCount: number;
    totalCount: number;
    score: number;
    isPassed: boolean;
  };
  onRestart: () => void;
  onViewEncyclopedia: () => void;
  onViewRecipes: () => void;
}

export default function ResultScreen({
  recipe,
  selectedIngredients,
  answers,
  cookingResult,
  onRestart,
  onViewEncyclopedia,
  onViewRecipes
}: ResultScreenProps) {
  const isCurry = recipe.id === 'curry';
  // カレーライスはパズルを既に実施したため調理アニメーションは即時完了
  const [cookingPhase, setCookingPhase] = useState<'chopping' | 'boiling' | 'completed'>(
    isCurry ? 'completed' : 'chopping'
  );

  // 目利きパートの計算
  const correctAnswers = answers.filter((a) => a.isCorrect);
  const correctCount = correctAnswers.length;
  const quizAccuracy = answers.length > 0 ? correctCount / answers.length : 0;
  const quizScore = answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0;

  // 調理パートの計算（カレーライスの場合）
  const cookingAccuracy = cookingResult
    ? cookingResult.totalCount > 0
      ? cookingResult.correctCount / cookingResult.totalCount
      : 0
    : 1;
  const cookingScore = cookingResult ? cookingResult.score : 0;

  // 評価基準：目利きパート（正解率60%以上）、調理パート（得点率60%以上）両方達成で大成功
  const isQuizPassed = quizAccuracy >= 0.6;
  const isCookingPassed = cookingResult ? cookingAccuracy >= 0.6 : true;
  const isDelicious = isQuizPassed && isCookingPassed;

  // 合計獲得スコア：カレーライスは100+100の最大200点、それ以外は最大100点
  const totalEarnedScore = isCurry ? quizScore + cookingScore : quizScore;

  // 今回正解して食材図鑑に登録された食材リスト
  const newlyUnlockedIngredients = correctAnswers.map((a) => INGREDIENTS[a.ingredientId]).filter(Boolean);

  // 調理アニメーションの進行（カレーライス以外の場合）
  useEffect(() => {
    if (isCurry) return;

    const timer1 = setTimeout(() => {
      setCookingPhase('boiling');
    }, 1200);

    const timer2 = setTimeout(() => {
      setCookingPhase('completed');
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isCurry]);

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

        <div className="w-48 h-1.5 bg-stone-100 rounded-full overflow-hidden mt-6 mx-auto">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: cookingPhase === 'chopping' ? '50%' : '100%' }}
            transition={{ duration: 1.2 }}
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
            {isDelicious ? `${recipe.name}が美味しく完成しました！` : 'うーん... 味がちょっとイマイチです...'}
          </h2>
          <p className="text-xs text-stone-400 mt-2">
            {isDelicious
              ? '目利き・調理ともに基準（60%以上）をクリアしました！'
              : '合格の条件（目利き・調理の両方60%以上）に届きませんでした。'}
          </p>
        </div>

        {/* Score Breakdown Cards */}
        <div className="grid grid-cols-2 gap-3 text-left">
          <div className="bg-stone-50 border border-stone-150 rounded-2xl p-4">
            <span className="text-[11px] font-bold text-stone-400 block uppercase">
              目利きクイズ
            </span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-xl font-black text-stone-800 font-mono">
                {quizScore} <span className="text-xs font-normal">/ 100点</span>
              </span>
              <span className={`text-xs font-bold ${isQuizPassed ? 'text-emerald-600' : 'text-red-500'}`}>
                {Math.round(quizAccuracy * 100)}% {isQuizPassed ? '合格' : '不合格'}
              </span>
            </div>
            <span className="text-[10px] text-stone-400 block mt-1">
              正解数: {correctCount} / {answers.length}
            </span>
          </div>

          <div className="bg-stone-50 border border-stone-150 rounded-2xl p-4">
            <span className="text-[11px] font-bold text-stone-400 block uppercase">
              調理手順パズル
            </span>
            <div className="flex items-baseline justify-between mt-1">
              {cookingResult ? (
                <>
                  <span className="text-xl font-black text-stone-800 font-mono">
                    {cookingScore} <span className="text-xs font-normal">/ 100点</span>
                  </span>
                  <span className={`text-xs font-bold ${isCookingPassed ? 'text-emerald-600' : 'text-red-500'}`}>
                    {Math.round(cookingAccuracy * 100)}% {isCookingPassed ? '合格' : '不合格'}
                  </span>
                </>
              ) : (
                <span className="text-xs text-stone-400 font-medium">
                  自動調理（対象外）
                </span>
              )}
            </div>
            <span className="text-[10px] text-stone-400 block mt-1">
              {cookingResult
                ? `正解数: ${cookingResult.correctCount} / ${cookingResult.totalCount}`
                : '－'}
            </span>
          </div>
        </div>

        {/* Total Score Card */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-5 flex items-center justify-between">
          <div className="text-left">
            <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase block">
              今回の獲得スコア（最大{isCurry ? '200' : '100'}点）
            </span>
            <span className="text-2xl font-black text-emerald-700 font-mono">
              +{totalEarnedScore.toLocaleString()} <span className="text-xs">pts</span>
            </span>
          </div>
          <Award className="text-emerald-500" size={36} />
        </div>

        {/* 食材図鑑の解放通知 */}
        {newlyUnlockedIngredients.length > 0 && (
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 text-left space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
              <CheckCircle size={14} className="text-emerald-600" />
              <span>食材図鑑に登録されました！</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {newlyUnlockedIngredients.map((ing) => (
                <span
                  key={ing.id}
                  className="bg-white border border-emerald-300 text-emerald-800 font-semibold px-2.5 py-1 rounded-lg text-xs shadow-2xs"
                >
                  {ing.name}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-emerald-700">
              ※正解した食材は「食材図鑑」でいつでも詳しい特徴や保存方法をチェックできます。
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <button
            id="restart-game-btn"
            onClick={onRestart}
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <RotateCcw size={16} />
            <span>もう一度遊ぶ（レシピ選択）</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              id="view-encyclopedia-btn"
              onClick={onViewEncyclopedia}
              className="border border-stone-200 hover:bg-stone-50 text-stone-700 font-semibold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer"
            >
              <BookOpen size={14} />
              <span>食材図鑑を見る</span>
            </button>
            <button
              id="view-recipes-btn"
              onClick={onViewRecipes}
              className="border border-stone-200 hover:bg-stone-50 text-stone-700 font-semibold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer"
            >
              <Utensils size={14} />
              <span>調理レシピを見る</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
