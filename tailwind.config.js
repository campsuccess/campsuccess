/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'camp-blue': '#1e3a8a',
        'camp-light-blue': '#3b82f6',
        'camp-bright-blue': '#003DCC',
        'camp-yellow': '#fbbf24',
        'camp-dark-blue': '#1e40af',
      },
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
