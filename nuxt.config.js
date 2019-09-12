import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  srcDir: 'src',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Middleware to apply Global
   */
  router: {
    middleware: 'authenticated'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/firebase',
    '~/plugins/filter',
    '~/plugins/fcm.client',
    '~/plugins/vuefire',
    { src: '~/plugins/audioRecorderPolyfill', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/device'
  ],

  buildModules: ['@nuxtjs/vuetify'],
  manifest: {
    name: 'Simple Chat',
    short_name: 'Simple Chat',
    description: 'Chat application that can talk with anyone!',
    lang: 'ja',
    theme_color: '#2994e9',
    background_color: '#f5fbff',
    display: 'standalone',
    gcm_sender_id: '103953800507'
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/style/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    analyze: true,

    vendor: ['audio-recorder-polyfill'],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
