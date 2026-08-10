/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#fdf2f8',
        rose: '#f9a8d4',
        cocoa: '#8b5e3c',
        moss: '#4d7c3e',
        cream: '#fffaf5',
      },
      fontFamily: {
        display: ['"Trebuchet MS"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
