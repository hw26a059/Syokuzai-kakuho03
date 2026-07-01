import React, { useState } from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface NicknameScreenProps {
  onRegister: (nickname: string) => void;
}

export default function NicknameScreen({ onRegister }: NicknameScreenProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('ニックネームを入力してください。');
      return;
    }
    if (trimmed.length > 10) {
      setError('10文字以内で入力してください。');
      return;
    }
    onRegister(trimmed);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gradient-to-b from-stone-50 to-stone-100">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 max-w-md w-full text-center"
      >
        <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-2xl mb-5 shadow-xs">
          <ChefHat size={32} />
        </div>

        <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
          食材目利きゲーム
        </h1>
        <p className="text-sm text-stone-500 mt-2 mb-8 leading-relaxed">
          新鮮な食材を見抜いて美味しい料理を完成させよう！まずはニックネームを登録して、ランキングに参加しましょう。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label htmlFor="nickname" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              ニックネーム（10文字以内）
            </label>
            <input
              id="nickname-input"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder="例：ゆうき"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-stone-800 transition-all font-medium placeholder-stone-300"
              maxLength={10}
            />
            {error && (
              <p id="nickname-error" className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                ⚠️ {error}
              </p>
            )}
          </div>

          <button
            id="register-btn"
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>ゲームを始める</span>
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
