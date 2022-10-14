export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate is used to put page title + general title as router.beforeEach in Vue
    titleTemplate:"%s - Nuxt Blog",
    title: 'nuxt-new-features',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/global.css"
  ],
  loading: '~/components/loadingBar.vue',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // this baseURL:url ==> my api is always called it
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://jsonplaceholder.typicode.com',
  },
  //extendRoutes is in nuxt.config is used to create custome router in nuxt

  router:{
    extendRoutes(routes , resolve){
      routes.push({
        name:"extendfromblog",
        path:"/extendfromblog",
        component:resolve(__dirname,"customePages/customePage.vue")
      })
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // middleware in router ==> to check in all time when router change ==> make this middle(say-hello)
  router:{
    middleware:"say-hello"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS:true
  }
}
