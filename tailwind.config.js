/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html, ./*css, ./*js, ./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

