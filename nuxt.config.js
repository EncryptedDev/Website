export default {
  server: {
    host: "0.0.0.0",
    port: 7788,
  },
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
      { hid: "theme-color", name: "theme-color", content: "#A78BFA" },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "EncryptedDev",
      },
      {
        hid: "description",
        name: "description",
        content: "An aspiring developer. A developer's portfolio.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://encrypteddev.com/assets/img/logo.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
  },
  css: ["~/assets/css/style.css"],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
};
