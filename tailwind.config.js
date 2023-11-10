/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      primary: '#ED7023',
      secondary: '#16345F',
      neutral: '#C0BDBC',
      }
      }
   
  },
  plugins: [],
}

