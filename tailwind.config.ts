import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-teal": "#0F766E",
        "soft-sky-blue": "#38BDF8",
        "warm-green": "#22C55E",
        "sunrise-amber": "#F59E0B",
        "light-bg": "#F8FAFC",
        "dark-bg": "#020617",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(15, 118, 110, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(15, 118, 110, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
