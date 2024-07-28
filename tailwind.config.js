/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#191920', // Custom primary color
        secondary: '#27292D', // Custom secondary background color
        button: '#4A96FF', // Custom button color
        borderColor: '#35373B'
      },
    },
  },
  plugins: [],
}

