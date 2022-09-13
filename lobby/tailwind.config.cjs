/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        landing: "url('/assets/background.png')",
        'duo-gradient':
          'linear-gradient(89.86deg, #9572FC 6.7%, #43E7AD 82.82%, #E1D55D 10.48%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    }
  },
  plugins: []
}
