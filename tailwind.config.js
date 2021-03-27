module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    darkSelector: ".dark-mode",
    // colors: {
    //   bgdark: "16171b",
    //   textHeaderDark: "f5f5f5",
    //   textBodyDark: "f8f8f8",
    //   textSubHeaderDark: "f2f2f2",

    //   bglight: "f5f5f5",
    //   textHeaderLight: "1c1c1c",
    //   textBodyDark: "2c2c2c",
    //   textSubHeaderDark: "1d1d1d",
    // },
  },
  variants: {
    // backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    // borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    // textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
