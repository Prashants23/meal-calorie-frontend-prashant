"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navigation() {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-secondary/80 border-b border-ui-border transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div
          className="text-xl sm:text-2xl font-bold text-text-primary cursor-pointer"
          onClick={() => router.push("/")}
        >
          CALCOUNT
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => router.push("/login")}
            className="text-text-primary hover:text-text-secondary transition-colors font-medium text-sm sm:text-base px-2 sm:px-3"
          >
            Log in
          </button>
          <button
            onClick={() => router.push("/register")}
            className="flex hidden sm:flex items-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all text-white font-medium text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Get Started</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 hidden sm:inline" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

