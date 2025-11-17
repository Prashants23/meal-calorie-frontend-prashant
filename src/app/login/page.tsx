"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LoginForm } from "@/components/auth/LoginForm";

function LoginContent() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-md flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-secondary" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300 flex items-center justify-center px-4 py-8">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <LoginContent />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => router.push("/")}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors px-4 py-2 rounded-lg hover:bg-bg-card inline-flex items-center gap-2"
          >
            ← Back to home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
