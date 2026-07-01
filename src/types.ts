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
}

export interface QuizQuestion {
  ingredientId: string;
  ingredientName: string;
  question: string;
  options: {
    text: string;
    imageDesc: string; // Description of the image
    isCorrect: boolean;
  }[];
  explanation: string;
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
