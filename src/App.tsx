import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NicknameScreen from './components/NicknameScreen';
import RecipeSelectScreen from './components/RecipeSelectScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import BookScreen from './components/BookScreen';
import RankingScreen from './components/RankingScreen';
import { Recipe, Dish } from './types';

export default function App() {
  const [nickname, setNickname] = useState<string | null>(null);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [currentTab, setTab] = useState<'game' | 'book' | 'ranking'>('game');

  // ゲーム内のフェーズ（ゲームタブ選択時）
  const [gameState, setGameState] = useState<'select' | 'quiz' | 'result'>('select');
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<{ ingredientId: string; isCorrect: boolean; score: number }[]>([]);

  // 起動時のローカルストレージ読み込み
  useEffect(() => {
    const savedName = localStorage.getItem('syokuzai_nickname');
    const savedScore = localStorage.getItem('syokuzai_total_score');
    const savedDishes = localStorage.getItem('syokuzai_dishes');

    if (savedName) setNickname(savedName);
    if (savedScore) setTotalScore(parseInt(savedScore, 10) || 0);
    if (savedDishes) {
      try {
        setDishes(JSON.parse(savedDishes));
      } catch (e) {
        console.error('Failed to parse saved dishes:', e);
      }
    }
  }, []);

  // ニックネーム登録
  const handleRegisterNickname = async (name: string) => {
    setNickname(name);
    localStorage.setItem('syokuzai_nickname', name);

    // サーバーに登録（または初期スコア0でランキングに名前を載せる）
    try {
      await fetch('/api/ranking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname: name, score: totalScore }),
      });
    } catch (e) {
      console.error('Failed to register score to server on init:', e);
    }
  };

  // ニックネーム変更・リセット
  const handleResetNickname = () => {
    if (window.confirm('ニックネームを変更しますか？（現在のデータは保持されます）')) {
      setNickname(null);
      localStorage.removeItem('syokuzai_nickname');
    }
  };

  // 料理の開始
  const handleStartCooking = (recipe: Recipe, ingredients: string[]) => {
    setCurrentRecipe(recipe);
    setSelectedIngredients(ingredients);
    setQuizAnswers([]);
    setGameState('quiz');
  };

  // クイズ回答完了
  const handleQuizComplete = (answers: { ingredientId: string; isCorrect: boolean; score: number }[]) => {
    setQuizAnswers(answers);
    setGameState('result');
  };

  // 料理の保存＆スコア送信
  const handleSaveDish = async (dish: Dish, addedScore: number) => {
    const newDishes = [dish, ...dishes];
    setDishes(newDishes);
    localStorage.setItem('syokuzai_dishes', JSON.stringify(newDishes));

    const newScore = totalScore + addedScore;
    setTotalScore(newScore);
    localStorage.setItem('syokuzai_total_score', newScore.toString());

    // サーバーに累計スコアを送信
    if (nickname) {
      try {
        await fetch('/api/ranking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nickname, score: newScore }),
        });
      } catch (e) {
        console.error('Failed to update score to server:', e);
      }
    }
  };

  // もう一度遊ぶ（レシピ選択に戻る）
  const handleRestart = () => {
    setCurrentRecipe(null);
    setSelectedIngredients([]);
    setQuizAnswers([]);
    setGameState('select');
    setTab('game');
  };

  // 図鑑を見に行く
  const handleViewBook = () => {
    setTab('book');
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
              />
            )}
            {gameState === 'result' && currentRecipe && (
              <ResultScreen
                recipe={currentRecipe}
                selectedIngredients={selectedIngredients}
                answers={quizAnswers}
                nickname={nickname}
                onSaveDish={handleSaveDish}
                onRestart={handleRestart}
                onViewBook={handleViewBook}
              />
            )}
          </>
        )}

        {currentTab === 'book' && (
          <BookScreen dishes={dishes} />
        )}

        {currentTab === 'ranking' && (
          <RankingScreen currentNickname={nickname} />
        )}
      </main>
    </div>
  );
}
