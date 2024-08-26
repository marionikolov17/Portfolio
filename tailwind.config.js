/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#265077",
        darkBlue: "#022140",
        primaryPurple: "#494B68",
        secondaryBlue: "#1E4258",
        mainGreen: "2D5F5D"
      }
    },
    fontFamily: {
      montserrat: "'Montserrat', sans-serif",
      spartan: "'League Spartan', sans-serif"
    }
  },
  plugins: [],
}