/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./product.html"],
  theme: {
    extend: {
      // TASK 1: my personal breakpoint BP = 600 + N = 600 + 17 = 617px.
      // "bp:" classes apply from 617px and wider (e.g. bp:flex, bp:hidden).
      screens: {
        bp: "617px",
      },
      colors: {
        gold: "#c9a46c",
        bronze: "#a6895a",
        soft: "#f5f5f5",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
