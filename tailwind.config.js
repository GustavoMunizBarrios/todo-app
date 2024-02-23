/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "374px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      /* Primary */
      brightBlue: "hsl(220, 98%, 61%)",
      checkBackground:
        "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

      /* Light Theme */
      veryLightGray: "hsl(0, 0%, 98%)",
      veryLightGrayishBlue: "hsl(236, 33%, 92%)",
      lightGrayishBlue: "hsl(233, 11%, 84%)",
      darkGrayishBlue: "hsl(236, 9%, 61%)",
      veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

      /* Dark Theme */
      veryDarkBlue: "hsl(235, 21%, 11%)",
      veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      lightGrayishBlue: "hsl(234, 39%, 85%)",
      lightGrayishBlueHover: " hsl(236, 33%, 92%)",
      darkGrayishBlue: "hsl(234, 11%, 52%)",
      veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
    },
    fontFamily: {
      sans: ["Josefin Sans"],
    },
    extend: {},
  },
  plugins: [],
};
