module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    darkSelector: ".dark-mode",
    extend: {
      fontFamily: {
        custom: ["BasierCircle"]
      },
      colors: {
        darkGrey: "#191919",
        lightGrey: "#1c1c1c",
        blurple: "#7289da",
        darkerblurple: "#6c82cf"
      }
    }
  },
};
