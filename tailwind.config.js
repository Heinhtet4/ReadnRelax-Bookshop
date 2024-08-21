/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "title" : ["Merriweather", 'serif'],
        "body" : ["Open Sans", 'sans-serif'],
        "mm" : ['"Noto Sans Myanmar"', 'sans-serif'],
      },
      colors: {
        'text': '#15090c',
        'background': '#fcf8f8',
        'primary': '#c70035',
        'secondary': '#e88da5',
        'accent': '#e65b80',
       },

    },
  },
  plugins: [],
}


