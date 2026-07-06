import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "var(--navy-50)",
          100: "var(--navy-100)",
          200: "var(--navy-200)",
          300: "var(--navy-300)",
          400: "var(--navy-400)",
          500: "var(--navy-500)",
          600: "var(--navy-600)",
          700: "var(--navy-700)",
          800: "var(--navy-800)",
          900: "var(--navy-900)"
        },
        gold: {
          50: "var(--gold-50)",
          100: "var(--gold-100)",
          200: "var(--gold-200)",
          300: "var(--gold-300)",
          400: "var(--gold-400)",
          500: "var(--gold-500)",
          600: "var(--gold-600)",
          700: "var(--gold-700)",
          800: "var(--gold-800)",
          900: "var(--gold-900)"
        },
        olive: {
          50: "var(--olive-50)",
          100: "var(--olive-100)",
          200: "var(--olive-200)",
          300: "var(--olive-300)",
          400: "var(--olive-400)",
          500: "var(--olive-500)",
          600: "var(--olive-600)",
          700: "var(--olive-700)",
          800: "var(--olive-800)",
          900: "var(--olive-900)"
        },
        slate: {
          50: "var(--slate-50)",
          100: "var(--slate-100)",
          200: "var(--slate-200)",
          300: "var(--slate-300)",
          400: "var(--slate-400)",
          500: "var(--slate-500)",
          600: "var(--slate-600)",
          700: "var(--slate-700)",
          800: "var(--slate-800)",
          900: "var(--slate-900)"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-serif-display)"]
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "var(--radius-pill)"
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        elevated: "var(--shadow-elevated)"
      },
      maxWidth: {
        container: "var(--container-max)",
        narrow: "var(--container-narrow)"
      }
    }
  },
  plugins: []
};

export default config;
