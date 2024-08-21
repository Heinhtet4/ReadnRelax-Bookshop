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
        'title': '#15090c',
        'subtitle': '#3a1f1a',
        'body': '#5d3a35' ,
        'background': '#fcf8f8',
        'primary': '#c70035',
        'secondary': '#e88da5',
        'accent': '#e65b80',
        'lighbg': '#f9f5f6',
       },

    },
  },
  plugins: [],
}


