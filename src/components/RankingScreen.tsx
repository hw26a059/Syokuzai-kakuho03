import React, { useState, useEffect } from 'react';
import { Trophy, RefreshCw, Award, Loader2 } from 'lucide-react';
import { RankingEntry } from '../types';

interface RankingScreenProps {
  currentNickname: string;
}

export default function RankingScreen({ currentNickname }: RankingScreenProps) {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRanking = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/ranking');
      if (!res.ok) {
        throw new Error('ランキングデータの取得に失敗しました。');
      }
      const data = await res.json();
      setRanking(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || '通信エラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Title & Refresh Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="text-amber-500 animate-bounce" />
          <h2 className="text-xl font-bold text-stone-800 tracking-tight">全国目利きランキング (上位50名)</h2>
        </div>
        <button
          id="refresh-ranking-btn"
          onClick={fetchRanking}
          disabled={isLoading}
          className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-all flex items-center justify-center cursor-pointer"
          title="ランキングを更新"
        >
          {isLoading ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
        </button>
      </div>

      {isLoading ? (
        <div className="bg-white border border-stone-150 rounded-2xl p-16 text-center text-stone-400 flex flex-col items-center justify-center gap-3">
          <Loader2 size={36} className="text-emerald-500 animate-spin" />
          <p className="text-sm font-medium">ランキングをロード中...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center text-red-600 space-y-3">
          <p className="text-sm font-medium">⚠️ {error}</p>
          <button
            onClick={fetchRanking}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl text-xs transition-all cursor-pointer"
          >
            再試行する
          </button>
        </div>
      ) : ranking.length === 0 ? (
        <div className="bg-white border border-stone-150 rounded-2xl p-12 text-center text-stone-400">
          <Trophy className="mx-auto text-stone-200 mb-2" size={48} />
          <p className="text-sm">ランキングにデータがありません。</p>
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xs">
          <div className="divide-y divide-stone-100">
            {ranking.map((entry, index) => {
              const isMe = entry.nickname === currentNickname;
              const rank = index + 1;

              // メダルの色分け
              let rankBadge = null;
              if (rank === 1) {
                rankBadge = (
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                    🥇
                  </span>
                );
              } else if (rank === 2) {
                rankBadge = (
                  <span className="w-6 h-6 rounded-full bg-stone-300 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                    🥈
                  </span>
                );
              } else if (rank === 3) {
                rankBadge = (
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                    🥉
                  </span>
                );
              } else {
                rankBadge = (
                  <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-500 font-bold flex items-center justify-center text-[10px] font-mono">
                    {rank}
                  </span>
                );
              }

              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 transition-all ${
                    isMe
                      ? 'bg-emerald-50/70 border-l-4 border-emerald-500 font-semibold'
                      : 'hover:bg-stone-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 flex justify-center shrink-0">{rankBadge}</div>
                    <div>
                      <span className={`text-sm ${isMe ? 'text-emerald-800' : 'text-stone-800'}`}>
                        {entry.nickname}
                      </span>
                      {isMe && (
                        <span className="ml-2 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                          あなた
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-bold font-mono ${isMe ? 'text-emerald-700' : 'text-stone-700'}`}>
                      {entry.score.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-stone-400">pts</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
