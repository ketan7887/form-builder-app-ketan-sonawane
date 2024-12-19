/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables manual dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {screens: {
      'sm': '360px',
    }},
  },
  plugins: [],
};

