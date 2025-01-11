/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#f3f3f3",
        tertiary: "#000000",
"black-100": "#040e21",
"black-200": "#01070f",

        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15pxrgb(0, 0, 0)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/da.jpeg')",
      },
    },
  },
  plugins: [],
};