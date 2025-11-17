"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Mail, User as UserIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent } from "@/components/ui/card";
import { RegisterHeader } from "@/components/auth/RegisterHeader";
import { ErrorAlert } from "@/components/auth/ErrorAlert";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { PasswordStrengthIndicator } from "@/components/auth/PasswordStrengthIndicator";
import { useAuthStore } from "@/stores/authStore";
import { api } from "@/lib/api";
import { registerSchema } from "@/lib/validations";
import type { AuthResponse } from "@/types";

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated, _hasHydrated, user } = useAuthStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (_hasHydrated && isAuthenticated && user) {
      router.push("/dashboard");
    }
  }, [_hasHydrated, isAuthenticated, user, router]);

  const passwordRequirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = registerSchema.safeParse({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      acceptTerms,
    });

    if (!result.success) {
      const firstError = result.error.issues[0];
      setError(firstError.message);
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await api.post<AuthResponse>("/auth/register", {
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        password: result.data.password,
      });

      router.push("/login?registered=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
        <Card className="bg-bg-card backdrop-blur-2xl border border-ui-border shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-10">
            <RegisterHeader />
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <ErrorAlert message={error} />

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full pl-12 pr-4 py-4 bg-bg-secondary border border-ui-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all"
                    disabled={isLoading}
                    autoComplete="given-name"
                  />
                </div>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full pl-12 pr-4 py-4 bg-bg-secondary border border-ui-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all"
                    disabled={isLoading}
                    autoComplete="family-name"
                  />
                </div>
              </div>

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

              <div>
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  showPassword={showPassword}
                  onToggleShow={() => setShowPassword(!showPassword)}
                  placeholder="Password"
                  isLoading={isLoading}
                />
                <PasswordStrengthIndicator 
                  password={password}
                  requirements={passwordRequirements}
                />
              </div>

              <PasswordInput
                value={confirmPassword}
                onChange={setConfirmPassword}
                showPassword={showPassword}
                onToggleShow={() => setShowPassword(!showPassword)}
                placeholder="Confirm Password"
                isLoading={isLoading}
                confirmValue={password}
                showMatch={true}
              />

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-ui-border bg-bg-secondary checked:bg-brand-secondary checked:border-brand-secondary focus:ring-2 focus:ring-brand-secondary focus:ring-offset-0 transition-all cursor-pointer"
                  />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  I agree to the{" "}
                  <span className="text-brand-secondary font-medium">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-brand-secondary font-medium">
                    Privacy Policy
                  </span>
                </span>
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-sm text-text-secondary">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="text-brand-secondary hover:text-brand-secondary-hover font-semibold transition-colors hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

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
