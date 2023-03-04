/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        btnCol: '#18ffff',
        hovCol: '#00b8d4',
        actCol: '#00e5ff',
        bgCol: '#37474f',
        bodCol: '#69f0ae',
        icoCol: '#1de9b6',
        col: '#212121',
        col2: '#fafafa'
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin")
  ],
}