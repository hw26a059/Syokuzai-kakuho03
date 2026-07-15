# スーパー目利きマスター ゲーム仕様書 - 食材データ仕様

## 1. 登録食材一覧
本ゲームで個別に独自のクイズデータ（通常クイズ・プロクイズ・解説）が定義されている全食材のIDと名称です。

| 食材ID | 食材名 | クイズ形式 | 画像アセットの有無 |
| :--- | :--- | :--- | :--- |
| **gyuniku** | 牛肉 | 3択 / プロ4択 | あり |
| **jagaimo** | じゃがいも | 2択 | あり |
| **ninjin** | にんじん | 2択 | あり |
| **ebi** | エビ | 3択 / プロ4択 | なし |
| **satsuraimo** | さつまいも | 3択 / プロ4択 | なし |
| **kabotsya** | かぼちゃ | 3択 / プロ4択 | なし |
| **shishito** | ししとう | 3択 / プロ4択 | なし |
| **ika** | イカ | 3択 / プロ4択 | なし |
| **kis** | キス | 3択 / プロ4択 | なし |
| **oba** | 大葉 | 3択 / プロ4択 | なし |
| **renkon** | 蓮根 | 3択 / プロ4択 | なし |
| **maitake** | 舞茸 | 3択 / プロ4択 | なし |
| **butahikiku** | 豚挽き肉 | 3択 / プロ4択 | なし |
| **nagaranege** | 長ねぎ | 3択 / プロ4択 | なし |
| **shimeji** | しめじ | 3択 / プロ4択 | なし |
| **shirataki** | しらたき | 3択 / プロ4択 | なし |
| **ingen** | いんげん | 3択 / プロ4択 | なし |
| **chizu** | チーズ | 3択 / プロ4択 | なし |
| **chikuwa** | ちくわ | 3択 / プロ4択 | なし |
| **negi** | ネギ | 3択 / プロ4択 | なし |
| **eringi** | エリンギ | 3択 / プロ4択 | なし |
| **saito** | さといも | 3択 / プロ4択 | なし |
| **konnyaku** | こんにゃく | 3択 / プロ4択 | なし |
| **wakame** | わかめ | 3択 / プロ4択 | なし |
| **aburaage** | 油揚げ | 3択 / プロ4択 | なし |
| **hourensou** | ほうれん草 | 3択 / プロ4択 | なし |
| **shijimi** | しじみ | 3択 / プロ4択 | なし |
| **shiraganegi** | 白髪ネギ | 3択 / プロ4[*] | なし |
| **ninniku** | にんにく | 3択 / プロ4択 | なし |
| **remon** | レモン | 3択 / プロ4択 | なし |
| **aibikyniku** | 合挽き肉 | 3択 / プロ4択 | なし |
| **masshurumu** | マッシュルーム | 3択 / プロ4択 | なし |
| **gurinpisu** | グリンピース | 3択 / プロ4択 | なし |
| **hakusai** | 白菜 | 3択 / プロ4択 | なし |
| **uzuranotamago**| うずらの卵 | 3択 / プロ4択 | なし |
| **kikurage** | きくらげ | 3 wilderness / プロ4択 | なし |
| **takenoko** | タケノコ | 3択 / プロ4択 | なし |
| **chingensai** | チンゲン菜 | 3択 / プロ4択 | なし |

---

## 2. データ構造の定義 (TypeScript)
各食材のクイズデータは以下の構造に従って定義・管理されます。

```typescript
interface Option {
  text: string;      // 選択肢の表示テキスト
  imageDesc: string; // 画像記述テキスト（ALT用）
  isCorrect: boolean;// 正解フラグ
}

interface QuizQuestion {
  ingredientId: string;   // 食材のユニークID
  ingredientName: string; // 食材の名前
  question: string;       // 通常モードのクイズ設問
  options: Option[];      // 通常モードの選択肢
  explanation: string;    // 回答後の目利き解説テキスト
  hardQuestion: string;   // プロモードのクイズ設問
  hardOptions: Option[];  // プロモードの選択肢 (4択)
}
```
