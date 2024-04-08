/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#42683d',
        'primary-hover': '#2a4e2a'
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px'
      }
    },
  },
  plugins: [],
}

