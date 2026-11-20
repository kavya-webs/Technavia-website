import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rb: {
          night: "#0B0D10",
          cloud: "#F8F8F5",
          brass: "#D4F542",
          pine: "#475B0D",
          stone: "#8C9088",
          bone: "#F2F3EE",
          bone2: "#E8E9E3",
          ink: "#14161A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        tight: ["var(--font-inter-tight)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        "rb-ping": {
          "0%": { opacity: "0.9", transform: "scale(0.5)" },
          "70%, 100%": { opacity: "0", transform: "scale(1.5)" },
        },
        "rb-glow": {
          "0%": { opacity: "0.7", transform: "scale(0.5)" },
          "100%": { opacity: "0", transform: "scale(1.5)" },
        },
        "rbpf-tick": {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "rb-ping": "rb-ping 2.6s ease-out infinite",
        "rb-glow": "rb-glow 2.6s ease-out infinite",
        "marquee": "rbpf-tick 36s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
