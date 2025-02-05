import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        BlackCustom: 'rgba(0, 0, 0, 0.8)',
        WhiteCustom: 'rgba(255,255,255,0.8)',
      },
      fontFamily: {
        custom: ['Roboto'],
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["business"],
  },
} satisfies Config;
