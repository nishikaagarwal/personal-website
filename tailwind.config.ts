import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        cream: "#FDF8F3",
        beige: "#F5EDE0",
        brown: "#8B6F47",
        terracotta: "#C4845A",
        dark: "#2C2416",
        muted: "#7C6A58",
      },
    },
  },
  plugins: [],
};
export default config;
