/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./node_modules/flowbite/**/*.{js,jsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
