"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-card border border-ui-border">
              <span className="text-sm text-text-secondary">USDA-Powered Nutrition Tracking</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-text-primary">Know Your</span>
              <br />
              <span className="">
                Meals, Own Your
              </span>
              <br />
              <span className="text-text-primary">Health</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-xl"
            >
              Instantly calculate calories and track what you eat — powered by verified USDA data. 
              Simple, fast, and accurate. No more guessing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => router.push("/register")}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Tracking Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => router.push("/login")}
                className="px-8 py-4 bg-bg-card hover:bg-bg-card-hover border border-ui-border text-text-primary rounded-full font-semibold transition-all"
              >
                Sign In
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative bg-bg-card border border-ui-border rounded-2xl p-8">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame className="h-32 w-32 text-brand-secondary" />
                  </div>
                  <motion.div
                    animate={{ y: [0, 320, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-500">280</div>
                    <div className="text-xs text-text-secondary">Calories</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-500">25g</div>
                    <div className="text-xs text-text-secondary">Protein</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-500">18g</div>
                    <div className="text-xs text-text-secondary">Carbs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

