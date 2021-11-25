const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.js",
    "./pages/**/*.jsx",
    "./components/**/*.js",
    "./components/**/*.jsx",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "desktop-black": "#0B0B0C",
        "dark-red": "#551621",
      },
      opacity: {
        35: "0.35",
      },
      backgroundImage: {
        "landing-page": "url('/assets/images/landing-page.png')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      teal: colors.teal,
      orange: colors.orange,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: "auto",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
