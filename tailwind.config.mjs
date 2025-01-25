/** @type {import('tailwindcss').Config} */
import theme from "./src/lib/theme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        Green: {
          "e-green-50": "#fffef9",
          "e-green-100": "#fdfdee",
          "e-green-200": "#fdfbe5",
          "e-green-300": "#fcfad9",
          "e-green-400": "#fbf9d2",
          "e-green-500": "#faf7c7",
          "e-green-600": "#e4e1b5",
          "e-green-700": "#b2af8d",
          "e-green-800": "#8a886d",
          "e-green-900": "#696854",
        },
        Blue: {
          "e-blue-50": "#e6e6e6",
          "e-blue-100": "#b2b2b3",
          "e-blue-200": "#8c8d8e",
          "e-blue-300": "#58595a",
          "e-blue-400": "#38393a",
          "e-blue-500": "#060709",
          "e-blue-600": "#050608",
          "e-blue-700": "#040506",
          "e-blue-800": "#030405",
          "e-blue-900": "#030304",
        },
        Black: {
          "e-black-50": "#e6e6e6",
          "e-black-100": "#b2b2b3",
          "e-black-200": "#8c8d8e",
          "e-black-300": "#58595a",
          "e-black-400": "#38393a",
          "e-black-500": "#060709",
          "e-black-600": "#050608",
          "e-black-700": "#040506",
          "e-black-800": "#030405",
          "e-black-900": "#030304",
        },
        Red: {
          "e-red-50": "#fde9ea",
          "e-red-100": "#f9babd",
          "e-red-200": "#f6989d",
          "e-red-300": "#f26a70",
          "e-red-400": "#f04d54",
          "e-red-500": "#ec2029",
          "e-red-600": "#d71d25",
          "e-red-700": "#a8171d",
          "e-red-800": "#821217",
          "e-red-900": "#630d11",
        },
        others: {
          "purple-1": "#B467FF",
          "text-dark": "#e6e6e6",
        },
      },
      fontSize: {
        "e-xs": "0.75rem",
        "e-sm": "0.875rem",
        "e-base": "1rem",
        "e-lg": "1.125rem",
        "e-xl": "1.25rem",
        "e-2xl": "1.375rem",
        "e-3xl": "1.4375rem",
        "e-4xl": "1.5rem",
        "e-5xl": "1.625rem",
        "e-6xl": "1.75rem",
        "e-7xl": "1.875rem",
        "e-8xl": "2rem",
        "e-9xl": "2.25rem",
        "e-10xl": "3rem",
        "e-11xl": "4rem",
        "e-12xl": "4.5rem",
        "e-13xl": "6rem",
        "e-14xl": "7.5rem",
        "e-15xl": "9rem",
        "e-16xl": "11rem",
      },
      fontFamily: {
        helvetica: "Helvetica",
        "bdo-grotesk": "BDO Grotesk",
        inter: "Inter",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        scrollX: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
