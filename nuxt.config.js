export default {
  head: {
    script: [
      {
        src: "https://kit.fontawesome.com/e904827701.js",
      },
    ],
    title: "EncryptedDev",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
  },
  css: ["~/assets/css/style.css"],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
};
