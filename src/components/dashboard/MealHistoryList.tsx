"use client";

import { Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CalorieResult } from "@/types";

type Props = {
  history: CalorieResult[];
  onClearHistory: () => void;
};

export function MealHistoryList({ history, onClearHistory }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-text-primary">
          Meal History ({history.length})
        </h2>
        <button
          onClick={onClearHistory}
          className="flex items-center gap-2 text-status-error-icon hover:text-status-error-text transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          <span className="text-xs md:text-sm">Clear All</span>
        </button>
      </div>

      {history.map((meal, index) => (
        <div key={index}>
          <Card className="bg-white dark:bg-gray-800 hover:shadow-md transition-all rounded-xl border-l-4 border-blue-500">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-text-primary dark:text-cyan-200 mb-1 truncate">
                    {meal.dish_name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary dark:text-gray-400">
                    {meal.servings} {meal.servings === 1 ? "serving" : "servings"} •{" "}
                    {meal.calories_per_serving} cal/serving
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl md:text-3xl font-bold text-text-primary dark:text-cyan-300">
                    {meal.total_calories}
                  </div>
                  <div className="text-xs md:text-sm text-text-secondary dark:text-gray-500">calories</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

