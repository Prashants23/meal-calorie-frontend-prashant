"use client";

import { LogOut, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

type Props = {
  showHistory: boolean;
  historyCount: number;
  onToggleView: (showHistory: boolean) => void;
  onSignOut: () => void;
};

export function DashboardNav({ showHistory, historyCount, onToggleView, onSignOut }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <div
            className="text-lg md:text-2xl font-bold text-text-primary cursor-pointer"
            onClick={() => onToggleView(false)}
          >
            CALCOUNT
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onToggleView(false)}
              className={`text-sm font-medium transition-colors ${
                !showHistory
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Calculator
            </button>
            <button
              onClick={() => onToggleView(true)}
              className={`text-sm font-medium transition-colors ${
                showHistory
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              History ({historyCount})
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <div className="hidden sm:flex items-center gap-2 text-text-primary">
            <User className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden md:inline text-sm">
              Hi There!
            </span>
          </div>
          <button
            onClick={onSignOut}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <LogOut className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden sm:inline text-xs md:text-sm">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

