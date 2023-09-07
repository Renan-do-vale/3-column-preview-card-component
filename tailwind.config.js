/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Bright-orange': 'hsl(31, 77%, 52%)',
      'Dark-cyan': 'hsl(184, 100%, 22%)',
      'Very-dark-cyan': 'hsl(179, 100%, 13%)',
      'Dark-transparent': 'rgba(0, 0, 0, 0.555)',
    },
    fontFamily: {
      'Lexend': ['Lexend Deca', 'sans-serif'],
      'Big-shoulders': ['Big Shoulders Display', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}

