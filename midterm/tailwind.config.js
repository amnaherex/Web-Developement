/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './product.html'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a46c',
        bronze: '#a6895a',
        soft: '#f5f5f5',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
