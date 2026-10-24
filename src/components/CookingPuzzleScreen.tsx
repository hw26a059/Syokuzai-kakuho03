import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, Check, X, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { Recipe } from '../types';

interface CookingPuzzleScreenProps {
  recipe: Recipe;
  onCookingComplete: (result: {
    correctCount: number;
    totalCount: number;
    score: number;
    isPassed: boolean;
  }) => void;
}

export default function CookingPuzzleScreen({
  recipe,
  onCookingComplete,
}: CookingPuzzleScreenProps) {
  // 正しい手順リスト（カレーライス等のレシピに設定された手順）
  const correctSteps = recipe.cookingSteps || [
    '野菜をそれぞれ切る',
    '肉を切る',
    '切った具材を炒める',
    '水を加え、沸騰したら灰汁をとる',
    'ルウを加えて溶かす',
    '煮込む',
  ];

  const totalCount = correctSteps.length;

  // 選択肢カードのリスト（シャッフルされた初期状態）
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  // スロットに配置されたカード（長さ totalCount、空は null）
  const [placedSteps, setPlacedSteps] = useState<(string | null)[]>(
    Array(totalCount).fill(null)
  );
  // 確定済みフラグ
  const [isConfirmed, setIsConfirmed] = useState(false);

  // 初期化時に選択肢をシャッフル
  useEffect(() => {
    const shuffled = [...correctSteps].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
    setPlacedSteps(Array(totalCount).fill(null));
    setIsConfirmed(false);
  }, [recipe]);

  // まだ配置されていない選択肢カードの一覧
  const usedSteps = placedSteps.filter(Boolean) as string[];

  // 選択肢カードをクリックして空きスロットへ配置
  const handleSelectOption = (stepText: string) => {
    if (isConfirmed) return;
    if (usedSteps.includes(stepText)) return; // 既に配置済み

    // 最初の空きスロットを探す
    const firstEmptyIndex = placedSteps.findIndex((s) => s === null);
    if (firstEmptyIndex === -1) return; // 空きがない

    setPlacedSteps((prev) => {
      const next = [...prev];
      next[firstEmptyIndex] = stepText;
      return next;
    });
  };

  // スロットのカードをクリックして解除（選択肢プールに戻す）
  const handleRemoveStep = (index: number) => {
    if (isConfirmed) return;
    if (placedSteps[index] === null) return;

    setPlacedSteps((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  };

  // すべてリセット
  const handleReset = () => {
    if (isConfirmed) return;
    setPlacedSteps(Array(totalCount).fill(null));
  };

  // すべてのスロットが埋まっているか
  const isAllFilled = placedSteps.every((s) => s !== null);

  // 確定ボタン押下
  const handleConfirm = () => {
    if (!isAllFilled || isConfirmed) return;
    setIsConfirmed(true);
  };

  // 正解数の計算
  const correctCount = placedSteps.filter(
    (step, idx) => step === correctSteps[idx]
  ).length;

  // 判定：正解数が半分以下だと失敗判定（半分より多ければ成功判定）
  const isPassed = correctCount > Math.floor(totalCount / 2);
  const score = Math.round((correctCount / totalCount) * 100);

  // 次へ（結果画面へ）
  const handleFinish = () => {
    onCookingComplete({
      correctCount,
      totalCount,
      score,
      isPassed,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header Panel */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm mb-6 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 w-fit mx-auto">
          <ChefHat size={14} />
          <span>調理フェーズ：手順並べ替えパズル</span>
        </div>

        <h2 className="text-xl font-black text-stone-800">
          {recipe.name}を作る正しい順番を完成させよう！
        </h2>
        <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
          下の選択肢をすべて使って、正しい順番になるようにスロットの穴を埋めてください。
          （※制限時間はありません。じっくり考えて配置しましょう）
        </p>

        <div className="flex justify-between items-center text-xs text-stone-500 pt-1 border-t border-stone-100">
          <span>
            配置状況: <strong className="text-amber-600 font-bold">{usedSteps.length}</strong> / {totalCount} 完了
          </span>
          {!isConfirmed && usedSteps.length > 0 && (
            <button
              onClick={handleReset}
              className="text-stone-400 hover:text-stone-600 text-xs flex items-center gap-1 cursor-pointer font-medium"
            >
              <RotateCcw size={12} />
              <span>最初からやり直す</span>
            </button>
          )}
        </div>
      </div>

      {/* Slots (穴埋めエリア) */}
      <div className="space-y-3 mb-8">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider px-1">
          調理手順の流れ（上から順に進みます）
        </h3>

        <div className="space-y-2">
          {placedSteps.map((step, idx) => {
            const isFilled = step !== null;
            const isCorrectPosition = isConfirmed && step === correctSteps[idx];
            const isWrongPosition = isConfirmed && step !== correctSteps[idx];

            return (
              <div key={idx} className="relative">
                <div
                  onClick={() => handleRemoveStep(idx)}
                  className={`w-full p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between text-left ${
                    !isConfirmed
                      ? isFilled
                        ? 'border-amber-400 bg-amber-50/60 shadow-xs cursor-pointer hover:border-amber-500'
                        : 'border-dashed border-stone-300 bg-stone-50/50 text-stone-400'
                      : isCorrectPosition
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                      : 'border-red-400 bg-red-50 text-red-900'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 pr-2">
                    {/* Step Number Circle */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${
                        isConfirmed
                          ? isCorrectPosition
                            ? 'bg-emerald-500 text-white'
                            : 'bg-red-500 text-white'
                          : isFilled
                          ? 'bg-amber-500 text-white'
                          : 'bg-stone-200 text-stone-500'
                      }`}
                    >
                      {idx + 1}
                    </div>

                    {/* Step Text or Empty Placeholder */}
                    <div className="flex-1">
                      {isFilled ? (
                        <p className="text-sm font-bold text-stone-800">
                          {step}
                        </p>
                      ) : (
                        <p className="text-xs text-stone-400 font-medium">
                          タップして手順 {idx + 1} を配置...
                        </p>
                      )}

                      {/* 答え合わせ時の正解表示 */}
                      {isWrongPosition && (
                        <p className="text-[11px] text-red-600 font-bold mt-1">
                          正解: 「{correctSteps[idx]}」
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Status / Action Icon */}
                  <div>
                    {!isConfirmed && isFilled && (
                      <span className="text-[11px] text-stone-400 hover:text-stone-600 bg-white/80 border border-stone-200 px-2 py-0.5 rounded-md font-semibold">
                        外す
                      </span>
                    )}
                    {isConfirmed && (
                      <div className="shrink-0">
                        {isCorrectPosition ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                            <Check size={14} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center">
                            <X size={14} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow connecting slots */}
                {idx < totalCount - 1 && (
                  <div className="flex justify-center -my-1 relative z-10">
                    <span className="text-stone-300 text-xs">▼</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Options Pool (選択肢カード群) */}
      {!isConfirmed && (
        <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              手順カード（タップして穴を埋める）
            </h4>
            <span className="text-xs text-stone-400">
              残り {totalCount - usedSteps.length} 個
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {shuffledOptions.map((option, idx) => {
              const isUsed = usedSteps.includes(option);

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  disabled={isUsed}
                  className={`p-3.5 rounded-xl border text-left font-bold text-xs transition-all flex items-center justify-between ${
                    isUsed
                      ? 'border-stone-200 bg-stone-100 text-stone-300 cursor-not-allowed opacity-60'
                      : 'border-stone-200 bg-white hover:border-amber-400 hover:bg-amber-50/30 text-stone-800 shadow-2xs cursor-pointer active:scale-98'
                  }`}
                >
                  <span className="flex-1">{option}</span>
                  {isUsed && (
                    <span className="text-[10px] text-stone-400 font-semibold ml-2 shrink-0">
                      配置済
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Confirm Button */}
          <div className="pt-2">
            <button
              onClick={handleConfirm}
              disabled={!isAllFilled}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                isAllFilled
                  ? 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white cursor-pointer shadow-amber-500/20'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'
              }`}
            >
              <span>{isAllFilled ? 'この手順で調理を開始する！' : 'すべての穴を埋めてください'}</span>
              {isAllFilled && <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      )}

      {/* Result Panel (確定後) */}
      {isConfirmed && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-5 text-center"
        >
          {isPassed ? (
            <div className="space-y-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check size={36} />
              </div>
              <h3 className="text-xl font-black text-stone-800">
                調理パズル成功！✨
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                正しい手順を組み立てることが断然できました！（正解数: {correctCount} / {totalCount}）
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                <X size={36} />
              </div>
              <h3 className="text-xl font-black text-stone-800">
                調理パズル失敗...💧
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                正解数が半分以下（{correctCount} / {totalCount}）だったため、調理失敗判定となりました。
              </p>
            </div>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between">
            <div className="text-left">
              <span className="text-xs font-bold text-amber-700 block uppercase">
                調理パート獲得スコア
              </span>
              <span className="text-2xl font-black text-amber-800 font-mono">
                {score} <span className="text-xs font-normal">/ 100点</span>
              </span>
            </div>
            <div className="text-right text-xs font-semibold text-amber-700">
              正解率: {Math.round((correctCount / totalCount) * 100)}%
            </div>
          </div>

          <button
            onClick={handleFinish}
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>完成した料理の結果を見る</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
