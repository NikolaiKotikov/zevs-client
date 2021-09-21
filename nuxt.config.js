import getLocalIdent from './utils/getLocalIndent'
const isDev = process.env.NODE_ENV !== 'production'
export default {
  ...(!isDev && { modern: 'client' }),
  publicRuntimeConfig: {
    strapiURL: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zeus',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/scss/scaffold/scaffold.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/global.js' },
    { src: '~/plugins/vue-awesome-swiper' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/nuxt-gsap-module
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://strapi.nuxtjs.org/setup
    '@nuxtjs/strapi',
  ],

  strapi: {
    entities: ['settings', 'content', 'feedbacks'],
  },

  // Style Resources module configuration: https://github.com/nuxt-community/style-resources-module/
  styleResources: {
    scss: ['./assets/scss/resources/**/*.scss'],
    hoistUseStatements: true,
  },

  // nuxt-gsap module configuration: https://www.npmjs.com/package/nuxt-gsap-module
  gsap: {
    extraPlugins: {
      /**
       * After activation, plugins are automatically
       * registered and available globally
       */
      scrollTo: true,
      scrollTrigger: true,
    },
  },

  router: {
    trailingSlash: false,
    linkActiveClass: '-a',
    linkExactActiveClass: '-e',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[name]-[local]_[hash:base64:2]',
          ...(!isDev && { getLocalIdent }),
        },
      },
    },
  },
}
