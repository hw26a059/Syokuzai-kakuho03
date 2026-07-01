import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

interface RankingEntry {
  nickname: string;
  score: number;
  timestamp: number;
}

const app = express();
const PORT = 3000;

app.use(express.json());

// ランキングデータの保存先ファイル
const RANKING_FILE = path.join(process.cwd(), "ranking.json");

// 初期ランキングデータ
const DEFAULT_RANKING: RankingEntry[] = [
  { nickname: "目利きマスター", score: 4500, timestamp: Date.now() - 86400000 * 3 },
  { nickname: "カリスマ主婦さくら", score: 3800, timestamp: Date.now() - 86400000 * 2 },
  { nickname: "一人暮らしビギナー", score: 2500, timestamp: Date.now() - 86400000 },
  { nickname: "プロの八百屋", score: 4200, timestamp: Date.now() - 86400000 * 4 },
  { nickname: "クッキングパパ", score: 3100, timestamp: Date.now() - 86400000 * 5 },
];

function loadRanking(): RankingEntry[] {
  try {
    if (fs.existsSync(RANKING_FILE)) {
      const data = fs.readFileSync(RANKING_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to load ranking:", e);
  }
  return [...DEFAULT_RANKING];
}

function saveRanking(ranking: RankingEntry[]) {
  try {
    fs.writeFileSync(RANKING_FILE, JSON.stringify(ranking, null, 2), "utf-8");
  } catch (e) {
    console.error("Failed to save ranking:", e);
  }
}

// API: ランキング取得 (上位50名)
app.get("/api/ranking", (req, res) => {
  const ranking = loadRanking();
  // スコア順（降順）、同点の場合はタイムスタンプが古い（先に達成した）順
  const sorted = ranking.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.timestamp - b.timestamp;
  });
  res.json(sorted.slice(0, 50));
});

// API: スコア登録
app.post("/api/ranking", (req, res) => {
  const { nickname, score } = req.body;
  if (!nickname || typeof score !== "number") {
    res.status(400).json({ error: "Invalid parameters" });
    return;
  }

  const ranking = loadRanking();
  
  // 同一ニックネームのプレイヤーが存在するか確認
  const existingIndex = ranking.findIndex(entry => entry.nickname === nickname);
  if (existingIndex !== -1) {
    // 既存のハイスコアを更新する場合のみ更新
    if (score > ranking[existingIndex].score) {
      ranking[existingIndex].score = score;
      ranking[existingIndex].timestamp = Date.now();
    }
  } else {
    // 新規登録
    ranking.push({
      nickname,
      score,
      timestamp: Date.now()
    });
  }

  saveRanking(ranking);

  const sorted = ranking.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.timestamp - b.timestamp;
  });

  res.json({ success: true, ranking: sorted.slice(0, 50) });
});

// Vite開発サーバーミドルウェアまたは静的ファイルサービングのセットアップ
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

start();
