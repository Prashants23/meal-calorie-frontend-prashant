import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        bg: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
          card: "var(--background-card)",
          "card-hover": "var(--background-card-hover)",
        },
        // Text colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)",
        },
        // Brand colors
        brand: {
          primary: "var(--brand-primary)",
          "primary-hover": "var(--brand-primary-hover)",
          secondary: "var(--brand-secondary)",
          "secondary-hover": "var(--brand-secondary-hover)",
          accent: "var(--brand-accent)",
          "gradient-from": "var(--brand-gradient-from)",
          "gradient-to": "var(--brand-gradient-to)",
        },
        // UI colors
        ui: {
          border: "var(--ui-border)",
          "border-focus": "var(--ui-border-focus)",
          ring: "var(--ui-ring)",
          shadow: "var(--ui-shadow)",
          "shadow-hover": "var(--ui-shadow-hover)",
        },
        // Status colors
        status: {
          "success-bg": "var(--status-success-bg)",
          "success-text": "var(--status-success-text)",
          "success-icon": "var(--status-success-icon)",
          "error-bg": "var(--status-error-bg)",
          "error-text": "var(--status-error-text)",
          "error-icon": "var(--status-error-icon)",
          "info-bg": "var(--status-info-bg)",
          "info-text": "var(--status-info-text)",
          "info-icon": "var(--status-info-icon)",
          "warning-bg": "var(--status-warning-bg)",
          "warning-text": "var(--status-warning-text)",
          "warning-icon": "var(--status-warning-icon)",
        },
        // Feature colors
        feature: {
          "trending-bg": "var(--feature-trending-bg)",
          "trending-icon": "var(--feature-trending-icon)",
          "database-bg": "var(--feature-database-bg)",
          "database-icon": "var(--feature-database-icon)",
          "history-bg": "var(--feature-history-bg)",
          "history-icon": "var(--feature-history-icon)",
        },
        // Progress colors
        progress: {
          protein: "var(--progress-protein)",
          fat: "var(--progress-fat)",
          carbs: "var(--progress-carbs)",
          track: "var(--progress-track)",
        },
        // Calorie colors
        calorie: {
          "gradient-from": "var(--calorie-gradient-from)",
          "gradient-to": "var(--calorie-gradient-to)",
        },
        // Rainbow button colors
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
    },
  },
};

export default config;
