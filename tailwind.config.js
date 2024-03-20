/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkBlack': "#14171C",
        'lightBlack': "#2C343F",
        'text': "#556678",
        'lttrbxdGreen': "#00B021",
        'lttrbxdOrg': "#F27405"
      },
      fontFamily: {
        'karla': ["Karla", 'sans-serif']
      }
    },
  },
  plugins: [],
}

