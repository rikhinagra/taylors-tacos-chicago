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
        // Taylor's Tacos Brand Colors
        brand: {
          red:        "#BB2423",
          "deep-red": "#7D1817",
          yellow:     "#FBAF1C",
          "deep-purple": "#551A3A",
          "light-purple": "#AF98CA",
          green:      "#BCDC9A",
        },
      },
      fontFamily: {
        hannik:   ["var(--font-hannik)", "serif"],
        bebas:    ["var(--font-bebas)", "sans-serif"],
        dm:       ["var(--font-dm-sans)", "sans-serif"],
        sans:     ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        marquee:    "marquee 25s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        float:      "float 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
