"use client";

import { Search, Loader2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  dishName: string;
  servings: string;
  isLoading: boolean;
  error: string;
  onDishNameChange: (value: string) => void;
  onServingsChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function CalorieSearchForm({
  dishName,
  servings,
  isLoading,
  error,
  onDishNameChange,
  onServingsChange,
  onSubmit,
}: Props) {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl">
      <CardContent className="p-6 md:p-8 lg:p-12">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Find Nutrition Information
          </h2>
          <p className="text-sm md:text-base text-text-secondary">
            Enter a food name to get detailed calorie information
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted dark:text-purple-400" />
              <input
                type="text"
                value={dishName}
                onChange={(e) => onDishNameChange(e.target.value)}
                placeholder="Search food (e.g., Pizza)"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-all"
                disabled={isLoading}
                autoFocus
              />
            </div>
            <div className="w-full sm:w-32">
              <input
                type="number"
                value={servings}
                onChange={(e) => onServingsChange(e.target.value)}
                placeholder="Servings"
                min="0.1"
                step="0.1"
                className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-700 rounded-xl text-text-primary text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-all"
                disabled={isLoading}
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">{error}</p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !dishName.trim()}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Searching...
              </span>
            ) : (
              "Find Nutrition Info"
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-text-secondary dark:text-gray-400">
          Powered by <span className="font-semibold text-text-primary dark:text-purple-300">USDA FoodData Central</span>
        </div>
      </CardContent>
    </Card>
  );
}

