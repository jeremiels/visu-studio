const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          middleware: "pages",
          base: "/visu-studio/"
        }
      }
    : {
        router: {
          middleware: "pages",
          base: "/"
        }
      };

module.exports = {
  ...routerBase,
  /*
   ** Headers of the page
   */
  head: {
    title: "VÏSÜ STUDIO",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Native-like Page Transitions with Vue and Nuxt, A Travel "
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"
      }
    ]
  },
  css: ["@/assets/css/style.css"],

  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {},
  /**
   * Generate static site
   */
  generate: {
    routes: [
      "/projects/luminoscope",
      "/projects/frequence",
      "/projects/crush_for_crash",
      "/projects/armistice"
    ]
  }
};
