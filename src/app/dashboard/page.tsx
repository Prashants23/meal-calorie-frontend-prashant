"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { CalorieSearchForm } from "@/components/dashboard/CalorieSearchForm";
import { NutritionResultCard } from "@/components/dashboard/NutritionResultCard";
import { MealHistoryList } from "@/components/dashboard/MealHistoryList";
import { EmptyHistoryState } from "@/components/dashboard/EmptyHistoryState";
import { useAuthStore } from "@/stores/authStore";
import { useMealStore } from "@/stores/mealStore";
import { calorieService } from "@/services/calorieService";
import { calorieSchema } from "@/lib/validations";
import { ApiError } from "@/lib/api";
import type { CalorieResult } from "@/types";

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, logout, _hasHydrated } = useAuthStore();
  const { history, addToHistory, clearHistory } = useMealStore();
  
  const [dishName, setDishName] = useState("");
  const [servings, setServings] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CalorieResult | null>(null);
  const [error, setError] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [savedNotification, setSavedNotification] = useState(false);

  useEffect(() => {
    if (_hasHydrated && !isAuthenticated) {
      router.push("/login");
    }
  }, [_hasHydrated, isAuthenticated, router]);

  const lookupFood = async (e: React.FormEvent) => {
    e.preventDefault();

    const servingsNum = parseFloat(servings);
    
    const validationResult = calorieSchema.safeParse({
      dish_name: dishName,
      servings: servingsNum,
    });

    if (!validationResult.success) {
      setError(validationResult.error.issues[0].message);
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const nutritionData = await calorieService.getCalories({
        dish_name: validationResult.data.dish_name,
        servings: validationResult.data.servings,
      });

      setResult(nutritionData);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        setError("Your session has expired. Please log in again.");
        setTimeout(() => {
          logout();
          router.push("/login");
        }, 2000);
      } else if (err instanceof ApiError && err.status === 404) {
        setError(`Couldn't find "${dishName}" in our database. Try a different food name.`);
      } else {
        setError(err instanceof Error ? err.message : "Failed to calculate calories");
      }
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const saveToHistory = () => {
    if (result) {
      addToHistory(result);
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 2000);
    }
  };

  const resetSearch = () => {
    setDishName("");
    setServings("1");
    setResult(null);
    setError("");
  };

  const signOut = () => {
    logout();
    router.push("/");
  };

  if (!_hasHydrated || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-purple-600 dark:text-purple-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <DashboardNav
        showHistory={showHistory}
        historyCount={history.length}
        onToggleView={setShowHistory}
        onSignOut={signOut}
      />

      <section className="relative pt-20 md:pt-28 pb-12 md:pb-20 px-4 md:px-6 min-h-screen">
        <div className="max-w-4xl mx-auto w-full">
          {!result && (
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                Welcome back
              </h1>
              <p className="text-sm md:text-base text-text-secondary">
                {showHistory
                  ? "View your meal history"
                  : "Calculate calories for your meals"}
              </p>
            </div>
          )}

          <div className="md:hidden flex gap-2 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            <button
              onClick={() => setShowHistory(false)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                !showHistory
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Calculator
            </button>
            <button
              onClick={() => setShowHistory(true)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                showHistory
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              History ({history.length})
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!showHistory ? (
              <div key="calculator">
                {!result ? (
                  <CalorieSearchForm
                    dishName={dishName}
                    servings={servings}
                    isLoading={isLoading}
                    error={error}
                    onDishNameChange={setDishName}
                    onServingsChange={setServings}
                    onSubmit={lookupFood}
                  />
                ) : (
                  <NutritionResultCard
                    result={result}
                    savedNotification={savedNotification}
                    onBack={resetSearch}
                    onSave={saveToHistory}
                  />
                )}
              </div>
            ) : (
              <div key="history" className="space-y-4">
                {history.length === 0 ? (
                  <EmptyHistoryState onStartCalculating={() => setShowHistory(false)} />
                ) : (
                  <MealHistoryList history={history} onClearHistory={clearHistory} />
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
