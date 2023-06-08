/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      margin: {
        '13': "30rem",
        '15':"35rem"
      },
      spacing: {
        '33': '25.5rem', 
        "42":'25.6rem'
      }
    },
  },
  plugins: [],
}

