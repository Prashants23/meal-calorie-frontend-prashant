"use client";

import { History, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  onStartCalculating: () => void;
};

export function EmptyHistoryState({ onStartCalculating }: Props) {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl">
      <CardContent className="p-8 md:p-12 text-center">
        <History className="h-12 w-12 text-text-muted mx-auto mb-4" />
        <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
          No history yet
        </h3>
        <p className="text-sm md:text-base text-text-secondary mb-6">
          Start calculating calories to build your history
        </p>
        <button
          onClick={onStartCalculating}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all"
        >
          Calculate Calories
          <ChevronRight className="h-4 w-4" />
        </button>
      </CardContent>
    </Card>
  );
}

