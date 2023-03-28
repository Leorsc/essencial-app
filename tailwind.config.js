/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'essencial-blue': '#8ccccc',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ["Cormorant Garamond", "serif"]
      },
    },
    plugins: [],
  }
}
