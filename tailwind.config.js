/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Urbanist Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: ["business"],
  },
  plugins: [require("daisyui")],
};
