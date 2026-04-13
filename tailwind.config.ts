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
        "jeani-cream":        "#FAF7F2",
        "jeani-cream-dark":   "#F0EBE1",
        "jeani-dark":         "#1A1A18",
        "jeani-mid":          "#4A4A45",
        "jeani-muted":        "#9A9A90",
        "jeani-border":       "#E0DAD0",
        "jeani-accent":       "#2D5016",
        "jeani-accent-light": "#4A7A28",
      },
      fontFamily: {
        grotesk: ["var(--font-host-grotesk)", "system-ui", "sans-serif"],
        geist:   ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1.0",  letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
      },
      spacing: {
        "section":    "6rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "card": "1.25rem",
        "pill": "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
