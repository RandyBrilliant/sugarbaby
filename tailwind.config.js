/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'primary' : '#F2E5D2',
      'secondary' : '#C09551',
      'tertiary' : '#F6D4B8',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
