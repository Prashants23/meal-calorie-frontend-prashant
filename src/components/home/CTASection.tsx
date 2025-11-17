"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

export function CTASection() {
  const router = useRouter();

  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-blue-600 dark:bg-blue-700 p-8 sm:p-12 text-center">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start tracking today
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Free calorie tracking powered by USDA data
            </p>
            <button
              onClick={() => router.push("/register")}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Get Started for Free
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Free to use</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

