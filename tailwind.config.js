const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary : '#F2E5D2',
      secondary : '#C09551',
      tertiary : '#F6D4B8',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
    },
    extend: {
      fontFamily: {
        'sans': ['Avenir', ...defaultTheme.fontFamily.sans],
        'serif': ['Chalkboard', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/img/tester.jpg')",
      }

    }
  },
  plugins: [],
}
