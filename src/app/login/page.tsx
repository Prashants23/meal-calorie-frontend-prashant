"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Eye, EyeOff, AlertCircle, Mail, Lock, LogIn, CheckCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/stores/authStore";
import { api } from "@/lib/api";
import { loginSchema } from "@/lib/validations";
import type { AuthResponse } from "@/types";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isAuthenticated, _hasHydrated, user } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setSuccessMessage("Account created successfully! Please sign in.");
      
      router.replace("/login");
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (_hasHydrated && isAuthenticated && user) {
      router.push("/dashboard");
    }
  }, [_hasHydrated, isAuthenticated, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate with Zod
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const response = await api.post<AuthResponse>("/auth/login", {
        email: result.data.email,
        password: result.data.password,
      });
      
      login(response.user, response.token);
      
      setTimeout(() => {
        router.push("/dashboard");
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300 flex items-center justify-center px-4 py-8">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Login Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="bg-bg-card backdrop-blur-2xl border border-ui-border shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-bg-secondary shadow-lg flex items-center justify-center border border-ui-border">
                <LogIn className="h-7 w-7 text-text-primary" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-semibold text-text-primary mb-2">
                Sign in with email
              </h1>
              <p className="text-text-secondary text-sm">
                Track your calories and reach your health
                <br />
                goals together. For free
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">{successMessage}</p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                    <p className="text-sm font-medium text-red-800 dark:text-red-200">{error}</p>
                  </div>
                </motion.div>
              )}

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 bg-bg-secondary border border-ui-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all"
                  disabled={isLoading}
                  autoComplete="email"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-4 bg-bg-secondary border border-ui-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all"
                  disabled={isLoading}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors p-1 rounded-md hover:bg-bg-tertiary"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>


              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  "Get Started"
                )}
              </button>

              {/* Create Account Link */}
              <div className="text-center pt-2">
                <p className="text-sm text-text-secondary">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/register")}
                    className="text-brand-secondary hover:text-brand-secondary-hover font-semibold transition-colors hover:underline"
                  >
                    Create an account
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Back to Home */}
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
