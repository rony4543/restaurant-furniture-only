/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d'
        },
        accent: {
          DEFAULT: '#c49a6c',
          hover: '#b0895c'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        avenir: ['"Avenir Next"', 'Avenir', 'sans-serif'],
        chillax: ['Chillax', 'sans-serif']
      }
    },
  },
  plugins: [],
}
