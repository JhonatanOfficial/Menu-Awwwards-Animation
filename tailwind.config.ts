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
        "bg-color": "#140D0D",
        "primary-color": {
          "low-opacity": "#f1ebc9b5",
          "normal-opacity": "#F1EBC9"
        },
        "black-color": {
          "low-opacity": "#00000031",
          "normal-opacity": "#00000031"
        }
      },
      fontSize: {
        "big-text": "clamp(4rem, 9.5vw, 12rem)"
      },
      padding: {
        "desktop": "6rem",
        "mobile": "3rem"
      }

    },
  },
  plugins: [],
};
export default config;
