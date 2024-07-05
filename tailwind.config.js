/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans Thai','sans-serif'],
      },
      height: {
        'custom': '120px',
      },
      colors: {
        'custom-blue': '#1F4396',
        'custom-dark-blue': '#0A1530',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0A1530 0%, #1F4396 100%)',
      }
    },
  },
  plugins: [],
}