import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2F6B36",
        deep: "#173A20",
        cream: "#FFFDF7",
        gold: "#E6A93A",
      },
      boxShadow: { soft: "0 18px 50px rgba(23,58,32,.12)" },
    },
  },
  plugins: [],
};
export default config;
