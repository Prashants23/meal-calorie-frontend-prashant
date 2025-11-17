import { create } from "zustand";
import { CalorieResult } from "@/types";

interface MealState {
  currentResult: CalorieResult | null;
  history: CalorieResult[];
  addToHistory: (result: CalorieResult) => void;
  clearHistory: () => void;
}

export const useMealStore = create<MealState>((set) => ({
  currentResult: null,
  history: [],
  addToHistory: (result) =>
    set((state) => ({
      currentResult: result,
      history: [result, ...state.history].slice(0, 20),
    })),
  clearHistory: () => set({ history: [], currentResult: null }),
}));
