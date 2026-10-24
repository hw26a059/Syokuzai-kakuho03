export interface Ingredient {
  id: string;
  name: string;
  category: 'meat' | 'fish' | 'vegetable' | 'other';
}

export interface Recipe {
  id: string;
  name: string;
  baseCategory: string;
  requiredIngredients: string[]; // Ingredient IDs that are pre-selected
  optionalIngredients: string[]; // Ingredient IDs that can be added
  excludedIngredients: string[]; // Ingredient IDs that MUST NOT appear
  minIngredients: number; // 最低必要食材数
  fixedIngredients?: string[]; // 外せない固定必須食材ID一覧
  requiredCategory?: {
    label: string;
    ingredientIds: string[];
  };
  cookingSteps?: string[]; // 正しい調理手順の並び順
}

export type Difficulty = 'easy' | 'hard';

export interface QuizQuestion {
  ingredientId: string;
  ingredientName: string;
  question: string;
  options: {
    text: string;
    imageDesc?: string; // Description of the image
    imagePath?: string; // Path to the image
    isCorrect: boolean;
  }[];
  explanation: string;
  hardQuestion?: string;
  hardOptions?: {
    text: string;
    imageDesc?: string;
    imagePath?: string;
    isCorrect: boolean;
  }[];
}

export interface Dish {
  id: string;
  recipeId: string;
  baseRecipeName: string;
  customName: string;
  ingredients: string[]; // Ingredient names used
  score: number;
  accuracy: number; // e.g. 0.75
  timestamp: number;
}

export interface RankingEntry {
  nickname: string;
  score: number;
  timestamp: number;
}
