/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        primaryGreen: "#06a94d",
        primaryText: "#fff"
      }
    },
    fontFamily: {
      montserrat: "'Montserrat', sans-serif",
      spartan: "'League Spartan', sans-serif"
    }
  },
  plugins: [],
}