"use client";

import { ArrowLeft, Utensils, Zap, Target, Divide, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CalorieResult } from "@/types";

type Props = {
  result: CalorieResult;
  savedNotification: boolean;
  onBack: () => void;
  onSave: () => void;
};

export function NutritionResultCard({ result, savedNotification, onBack, onSave }: Props) {
  return (
    <div className="space-y-4 md:space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors px-3 md:px-4 py-2 rounded-lg hover:bg-bg-card"
      >
        <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
        <span className="text-sm md:text-base font-medium">Back</span>
      </button>

      {savedNotification && (
        <div className="px-4 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">✓ Saved to history</p>
        </div>
      )}

      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
          Nutrition Results
        </h1>
        <p className="text-sm md:text-base text-text-secondary px-4">
          for {result.servings} serving{result.servings !== 1 ? 's' : ''} of {result.dish_name.toUpperCase()}
        </p>
      </div>

      <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden">
        <CardContent className="p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-text-primary uppercase">
                {result.dish_name}
              </h2>
              <p className="text-sm md:text-base text-brand-secondary font-medium">
                Nutritional Information
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-4 md:p-6 text-center">
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500 shadow-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {result.total_calories}
              </div>
              <div className="text-xs md:text-sm text-orange-700 dark:text-orange-300 font-medium">
                Total Calories
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-4 md:p-6 text-center">
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 shadow-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {result.servings}
              </div>
              <div className="text-xs md:text-sm text-blue-700 dark:text-blue-300 font-medium">
                Servings
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-2xl p-4 md:p-6 text-center">
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500 shadow-lg flex items-center justify-center">
                  <Divide className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-1">
                {result.calories_per_serving}
              </div>
              <div className="text-xs md:text-sm text-teal-700 dark:text-teal-300 font-medium">
                Per Serving
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-text-primary">
                {((result.total_calories / 2000) * 100).toFixed(1)}%
              </div>
              <div className="text-xs md:text-sm text-text-secondary">
                Daily calorie intake
              </div>
              <div className="text-xs text-text-muted">
                Based on 2000 cal
              </div>
            </div>
            <div className="sm:text-right">
              <div className="text-xs md:text-sm text-text-secondary mb-1">
                Data Source
              </div>
              <div className="text-xs md:text-sm font-semibold text-text-primary">
                {result.source}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-4">
            <button
              onClick={onSave}
              className="flex-1 px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm md:text-base font-semibold transition-all flex items-center justify-center gap-2"
            >
              Save to History
            </button>
            <button
              className="flex-1 px-4 md:px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-text-primary rounded-lg text-sm md:text-base font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share Results
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

