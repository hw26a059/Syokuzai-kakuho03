import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NicknameScreen from './components/NicknameScreen';
import RecipeSelectScreen from './components/RecipeSelectScreen';
import QuizScreen from './components/QuizScreen';
import CookingPuzzleScreen from './components/CookingPuzzleScreen';
import ResultScreen from './components/ResultScreen';
import RecipeBookScreen from './components/RecipeBookScreen';
import IngredientEncyclopediaScreen from './components/IngredientEncyclopediaScreen';
import { Recipe } from './types';

export default function App() {
  const [nickname, setNickname] = useState<string | null>(null);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [unlockedIngredientIds, setUnlockedIngredientIds] = useState<string[]>([]);
  const [currentTab, setTab] = useState<'game' | 'recipes' | 'encyclopedia'>('game');

  // ゲーム内のフェーズ（ゲームタブ選択時）
  const [gameState, setGameState] = useState<'select' | 'quiz' | 'cooking' | 'result'>('select');
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');
  const [quizAnswers, setQuizAnswers] = useState<{ ingredientId: string; isCorrect: boolean; score: number }[]>([]);
  const [cookingResult, setCookingResult] = useState<{
    correctCount: number;
    totalCount: number;
    score: number;
    isPassed: boolean;
  } | null>(null);

  // 起動時のローカルストレージ読み込み
  useEffect(() => {
    const savedName = localStorage.getItem('syokuzai_nickname');
    const savedScore = localStorage.getItem('syokuzai_total_score');
    const savedUnlocked = localStorage.getItem('syokuzai_unlocked_ingredients');

    if (savedName) setNickname(savedName);
    if (savedScore) setTotalScore(parseInt(savedScore, 10) || 0);
    if (savedUnlocked) {
      try {
        setUnlockedIngredientIds(JSON.parse(savedUnlocked));
      } catch (e) {
        console.error('Failed to parse unlocked ingredients:', e);
      }
    }
  }, []);

  // ニックネーム登録
  const handleRegisterNickname = (name: string) => {
    setNickname(name);
    localStorage.setItem('syokuzai_nickname', name);
  };

  // ニックネーム変更・リセット
  const handleResetNickname = () => {
    if (window.confirm('ニックネームを変更しますか？（スコアや図鑑データは保持されます）')) {
      setNickname(null);
      localStorage.removeItem('syokuzai_nickname');
    }
  };

  // 料理の開始
  const handleStartCooking = (recipe: Recipe, ingredients: string[], diff: 'easy' | 'hard') => {
    setCurrentRecipe(recipe);
    setSelectedIngredients(ingredients);
    setDifficulty(diff);
    setQuizAnswers([]);
    setCookingResult(null);
    setGameState('quiz');
  };

  // 食材図鑑の解放処理
  const unlockIngredientsFromAnswers = (answers: { ingredientId: string; isCorrect: boolean }[]) => {
    const correctIds = answers.filter((a) => a.isCorrect).map((a) => a.ingredientId);
    if (correctIds.length === 0) return;

    setUnlockedIngredientIds((prev) => {
      const merged = Array.from(new Set([...prev, ...correctIds]));
      localStorage.setItem('syokuzai_unlocked_ingredients', JSON.stringify(merged));
      return merged;
    });
  };

  // スコアの加算処理
  const addScore = (earnedScore: number) => {
    setTotalScore((prev) => {
      const updated = prev + earnedScore;
      localStorage.setItem('syokuzai_total_score', updated.toString());
      return updated;
    });
  };

  // クイズ回答完了（カレーライスの場合は調理パズルへ、それ以外は直接リザルトへ）
  const handleQuizComplete = (answers: { ingredientId: string; isCorrect: boolean; score: number }[]) => {
    setQuizAnswers(answers);
    unlockIngredientsFromAnswers(answers);

    if (currentRecipe?.id === 'curry') {
      setGameState('cooking');
    } else {
      setCookingResult(null);
      // カレーライス以外は目利きスコアを加算
      const correctCount = answers.filter((a) => a.isCorrect).length;
      const earned = answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0;
      addScore(earned);
      setGameState('result');
    }
  };

  // 調理パズル完了（カレーライス）
  const handleCookingComplete = (result: {
    correctCount: number;
    totalCount: number;
    score: number;
    isPassed: boolean;
  }) => {
    setCookingResult(result);

    // 目利き得点 + 調理得点を累計スコアに加算
    const quizCorrectCount = quizAnswers.filter((a) => a.isCorrect).length;
    const quizScore = quizAnswers.length > 0 ? Math.round((quizCorrectCount / quizAnswers.length) * 100) : 0;
    const totalEarned = quizScore + result.score;
    addScore(totalEarned);

    setGameState('result');
  };

  // もう一度遊ぶ（レシピ選択に戻る）
  const handleRestart = () => {
    setCurrentRecipe(null);
    setSelectedIngredients([]);
    setQuizAnswers([]);
    setCookingResult(null);
    setGameState('select');
    setTab('game');
  };

  // 未登録時は登録画面を表示
  if (!nickname) {
    return <NicknameScreen onRegister={handleRegisterNickname} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
      {/* Header Navigation */}
      <Header
        currentTab={currentTab}
        setTab={setTab}
        nickname={nickname}
        totalScore={totalScore}
        onResetNickname={handleResetNickname}
      />

      {/* Main Container */}
      <main className="flex-1 pb-16">
        {currentTab === 'game' && (
          <>
            {gameState === 'select' && (
              <RecipeSelectScreen onStartCooking={handleStartCooking} />
            )}
            {gameState === 'quiz' && (
              <QuizScreen
                ingredientIds={selectedIngredients}
                onQuizComplete={handleQuizComplete}
                difficulty={difficulty}
              />
            )}
            {gameState === 'cooking' && currentRecipe && (
              <CookingPuzzleScreen
                recipe={currentRecipe}
                onCookingComplete={handleCookingComplete}
              />
            )}
            {gameState === 'result' && currentRecipe && (
              <ResultScreen
                recipe={currentRecipe}
                selectedIngredients={selectedIngredients}
                answers={quizAnswers}
                cookingResult={cookingResult || undefined}
                onRestart={handleRestart}
                onViewEncyclopedia={() => setTab('encyclopedia')}
                onViewRecipes={() => setTab('recipes')}
              />
            )}
          </>
        )}

        {currentTab === 'recipes' && (
          <RecipeBookScreen />
        )}

        {currentTab === 'encyclopedia' && (
          <IngredientEncyclopediaScreen
            unlockedIngredientIds={unlockedIngredientIds}
          />
        )}
      </main>
    </div>
  );
}
