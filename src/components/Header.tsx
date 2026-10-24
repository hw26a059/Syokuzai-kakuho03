import React from 'react';
import { ChefHat, BookOpen, Utensils, User } from 'lucide-react';

interface HeaderProps {
  currentTab: 'game' | 'recipes' | 'encyclopedia';
  setTab: (tab: 'game' | 'recipes' | 'encyclopedia') => void;
  nickname: string;
  totalScore: number;
  onResetNickname: () => void;
}

export default function Header({
  currentTab,
  setTab,
  nickname,
  totalScore,
  onResetNickname
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-stone-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left Side: App Brand / Title */}
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 text-white p-2 rounded-xl shadow-xs">
            <ChefHat size={22} className="animate-pulse" />
          </div>
          <div>
            <span className="font-semibold text-stone-800 tracking-tight block">食材目利きゲーム</span>
            <span className="text-xs text-stone-400 block -mt-1">鮮度と旬を学び、料理を作ろう</span>
          </div>
        </div>

        {/* Center: Tabs */}
        <nav className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
          <button
            id="nav-game"
            onClick={() => setTab('game')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentTab === 'game'
                ? 'bg-white text-emerald-600 shadow-xs font-bold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <ChefHat size={16} />
            <span>目利き＆調理</span>
          </button>
          <button
            id="nav-recipes"
            onClick={() => setTab('recipes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentTab === 'recipes'
                ? 'bg-white text-emerald-600 shadow-xs font-bold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Utensils size={16} />
            <span>調理レシピ</span>
          </button>
          <button
            id="nav-encyclopedia"
            onClick={() => setTab('encyclopedia')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentTab === 'encyclopedia'
                ? 'bg-white text-emerald-600 shadow-xs font-bold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <BookOpen size={16} />
            <span>食材図鑑</span>
          </button>
        </nav>

        {/* Right Side: User Profile & Total Score */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="flex items-center justify-end gap-1 text-xs text-stone-500">
              <User size={12} />
              <button 
                onClick={onResetNickname} 
                className="hover:underline font-medium text-stone-600 max-w-[100px] truncate cursor-pointer"
                title="ニックネームを変更"
              >
                {nickname}
              </button>
            </div>
            <div className="text-xs font-semibold text-emerald-600">
              累計: {totalScore.toLocaleString()} pts
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
