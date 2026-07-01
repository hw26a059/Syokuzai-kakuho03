import React, { useState, useEffect, useRef } from 'react';
import { Timer, ArrowRight, CheckCircle, XCircle, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizQuestion, Ingredient } from '../types';
import { QUIZ_QUESTIONS, INGREDIENTS } from '../data/gameData';

interface QuizScreenProps {
  ingredientIds: string[];
  onQuizComplete: (answers: { ingredientId: string; isCorrect: boolean; score: number }[]) => void;
}

export default function QuizScreen({ ingredientIds, onQuizComplete }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<{ ingredientId: string; isCorrect: boolean; score: number }[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentIngredientId = ingredientIds[currentIndex];
  const ingredient = INGREDIENTS[currentIngredientId];

  // クイズ問題の取得。もし対応する詳細クイズがない場合はデフォルトの3択を生成
  const getQuestion = (ingId: string): QuizQuestion => {
    if (QUIZ_QUESTIONS[ingId]) {
      return QUIZ_QUESTIONS[ingId];
    }
    // 代替クイズ（定義されていない食材用）
    const ingName = INGREDIENTS[ingId]?.name || '食材';
    return {
      ingredientId: ingId,
      ingredientName: ingName,
      question: `${ingName}をスーパーの店頭で選ぶ際、最も新鮮で品質が良いものを示す特徴はどれ？`,
      options: [
        {
          text: `色鮮やかで全体的にハリがあり、みずみずしく、トレイの底に余分な水分が全く出ていないもの。`,
          imageDesc: `全体が均一に美しく、表面が乾燥せずに潤いと自然なツヤに溢れている新鮮な状態。`,
          isCorrect: true
        },
        {
          text: `少し色あせており、触るとわずかに柔らかく、パック内に結露や水滴が浮いているもの。`,
          imageDesc: `表面が少し乾き始めており、パック内に湿気がこもって水滴が付いている状態。`,
          isCorrect: false
        },
        {
          text: `端や角がうっすらと変色・乾燥し始めており、少ししなびているか、不快なドリップが出ているもの。`,
          imageDesc: `色がくすんでツヤがなくなり、容器の底に少し色のついた水分が溜まっている状態。`,
          isCorrect: false
        }
      ],
      explanation: `${ingName}は、変色や乾燥、そしてドリップ（水分）が容器に出ていないものを選ぶのが鉄則です。全体に色ツヤが良く、持ったときにしっかりと重みやハリがあるものが、みずみずしくて美味しい状態を保っています。`
    };
  };

  const currentQuestion = getQuestion(currentIngredientId);

  // シャッフルされた選択肢を問題ごとに保持する
  const [shuffledOptions, setShuffledOptions] = useState<typeof currentQuestion.options>([]);

  useEffect(() => {
    // 選択肢のシャッフル（問題が変わるたびに実行）
    const options = [...currentQuestion.options];
    // シンプルにランダムソート
    const shuffled = options.sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
    
    // タイマー初期化
    setTimeLeft(60);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
  }, [currentIndex, currentIngredientId]);

  // タイマー処理
  useEffect(() => {
    if (isAnswered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          // 時間切れ
          handleAnswerSelect(-1); // 特別なインデックス
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAnswered, currentIndex]);

  // 回答選択
  const handleAnswerSelect = (optionIndex: number) => {
    if (isAnswered) return;

    setSelectedOptionIndex(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex !== -1 && shuffledOptions[optionIndex]?.isCorrect;
    // スコア計算：正解なら残り秒数 * 10 + 基本点100点
    const score = isCorrect ? 100 + timeLeft * 10 : 0;

    setResults((prev) => [
      ...prev,
      {
        ingredientId: currentIngredientId,
        isCorrect,
        score
      }
    ]);
  };

  // 次へ進む
  const handleNext = () => {
    if (currentIndex < ingredientIds.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // すべて終了
      onQuizComplete(results);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Quiz Progress */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
          食材確保クイズ ({currentIndex + 1} / {ingredientIds.length})
        </span>
        <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-xl">
          <Timer size={14} className={timeLeft <= 10 ? 'text-red-500 animate-bounce' : 'text-stone-500'} />
          <span className={`text-sm font-bold font-mono ${timeLeft <= 10 ? 'text-red-500 font-extrabold' : 'text-stone-700'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden mb-6">
        <div
          className={`h-full transition-all duration-1000 ${timeLeft <= 10 ? 'bg-red-500' : 'bg-emerald-500'}`}
          style={{ width: `${(timeLeft / 60) * 100}%` }}
        />
      </div>

      {/* Ingredient Spotlight */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm mb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
          <span>{ingredient?.category === 'meat' ? '🍖 肉類' : ingredient?.category === 'fish' ? '🐟 魚介類' : '🥬 野菜・キノコ'}</span>
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          {currentQuestion.ingredientName} の目利き
        </h3>
        <p className="text-stone-600 text-sm mt-2 leading-relaxed">
          {currentQuestion.question}
        </p>
      </div>

      {/* 3 Choices */}
      <div className="space-y-4 mb-6">
        {shuffledOptions.map((option, idx) => {
          const isSelected = selectedOptionIndex === idx;
          const showSuccess = isAnswered && option.isCorrect;
          const showFailure = isAnswered && isSelected && !option.isCorrect;

          return (
            <button
              key={idx}
              id={`quiz-option-${idx}`}
              onClick={() => handleAnswerSelect(idx)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-2 relative ${
                isAnswered
                  ? option.isCorrect
                    ? 'border-emerald-500 bg-emerald-50/50'
                    : isSelected
                    ? 'border-red-500 bg-red-50/50'
                    : 'border-stone-150 bg-white opacity-60'
                  : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50 cursor-pointer'
              }`}
            >
              {/* Eye-catching badge representing "Observing state" */}
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 p-1 rounded-lg ${showSuccess ? 'bg-emerald-100 text-emerald-600' : showFailure ? 'bg-red-100 text-red-600' : 'bg-stone-100 text-stone-500'}`}>
                  <Eye size={16} />
                </div>
                <div>
                  <div className="text-stone-400 text-xs font-semibold flex items-center gap-1">
                    <span>パック／トレイの写真（状態）：</span>
                  </div>
                  <p className="text-stone-500 text-xs italic font-medium mt-0.5">
                    「{option.imageDesc}」
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-2 mt-1">
                <p className="text-stone-800 font-medium text-sm leading-relaxed">
                  {option.text}
                </p>
              </div>

              {/* Correct/Incorrect Mark */}
              {isAnswered && (
                <div className="absolute top-4 right-4">
                  {option.isCorrect ? (
                    <CheckCircle className="text-emerald-500" size={24} />
                  ) : isSelected ? (
                    <XCircle className="text-red-500" size={24} />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}

        {/* Time-out Indicator */}
        {isAnswered && selectedOptionIndex === -1 && (
          <div className="p-4 rounded-xl border border-red-200 bg-red-50/30 text-center text-red-600 font-semibold text-sm">
            ⏰ 時間切れになってしまいました！
          </div>
        )}
      </div>

      {/* Explanation & Mini Commentary Panel */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                <CheckCircle size={18} />
                <h4 className="text-sm">ミニ目利き解説（{currentQuestion.ingredientName}）</h4>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>

            <button
              id="next-quiz-btn"
              onClick={handleNext}
              className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>
                {currentIndex < ingredientIds.length - 1 ? '次の食材へ' : '料理フェーズへ'}
              </span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
