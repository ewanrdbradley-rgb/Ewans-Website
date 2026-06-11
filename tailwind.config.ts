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
        // Editorial studio palette — cream paper, electric Klein blue, ink
        "paper":       "#F4F2E9",
        "card":        "#FFFFFF",
        "card-2":      "#EBE8DC",
        "line":        "#D8D5C5",
        "ink":         "#141419",
        "mid":         "#50515C",
        "faint":       "#8E8F98",
        "blue":        "#2526DF",
        "blue-light":  "#5F60FF",
        "blue-dim":    "#DEDEF9",
        "coral":       "#FF4D21",
        "coral-light": "#FF7A55",
        "sun":         "#F59E2D",
      },
      fontFamily: {
        grotesk: ["var(--font-host-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        geist:   ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(4.5rem, 16.5vw, 16rem)", { lineHeight: "0.86", letterSpacing: "-0.01em" }],
        "display-xl":  ["clamp(3rem, 8vw, 7rem)",      { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(2rem, 5vw, 4.5rem)",    { lineHeight: "1.0",  letterSpacing: "-0.015em" }],
        "display-md":  ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section":    "7rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "card": "1rem",
        "pill": "9999px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.35" },
        },
      },
      animation: {
        marquee:     "marquee 28s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
