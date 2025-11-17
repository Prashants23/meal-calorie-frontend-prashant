"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

type Props = {
  message: string;
};

export function ErrorAlert({ message }: Props) {
  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 rounded-lg"
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
        <p className="text-sm font-medium text-red-800 dark:text-red-200">{message}</p>
      </div>
    </motion.div>
  );
}

