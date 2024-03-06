/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      sans: ["FiraSans_400Regular", "sans-serif"],
    },
    colors: {
      black: "#0e0e0e",
      white: "#f5f5f5",
      "blue-dark": "#003553",
      "blue-light": "#56a3a6",
      red: "#d64933",
    },
    extend: {},
  },
  plugins: [],
  important: true,
};
