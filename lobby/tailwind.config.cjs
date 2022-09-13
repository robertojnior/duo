/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/assets/background.png')"
      }
    }
  },
  plugins: []
}
