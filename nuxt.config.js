import colors from 'vuetify/es5/util/colors';
import en from './locales/en.js';
import el from './locales/el.js';
import rs from './locales/rs.js';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Toulis Apartments',
    title: 'Toulis Apartments',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Toulis Apartments - Apartments located in Polychrono at the first peninsula of Halkidiki',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Toulis Apartments, apartments, halkidiki, polychrono, halkidiki apartments, polychrono apartments',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#409DCD',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Toulis Apartments',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Toulis Apartments',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Toulis Apartments - Apartments located in Polychrono at the first peninsula of Halkidiki',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.toulis-apartments.com/toulis-logo.jpg',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Toulis Apartments',
      },
      {
        hid: 'itemprop-title',
        itemprop: 'name',
        content: 'Toulis Apartments',
      },
      {
        hid: 'itemprop-description',
        itemprop: 'description',
        content:
          'Toulis Apartments - Apartments located in Polychrono at the first peninsula of Halkidiki',
      },
      {
        hid: 'itemprop-image',
        itemprop: 'image',
        content: 'https://www.toulis-apartments.com/toulis-logo.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#409DCD' },
  /*
   ** Global CSS
   */
  css: ['~/assets/font-icons.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/validation.js', '~/plugins/api.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'el', 'rs'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: { en, el, rs },
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
      },
    ],
    '@nuxtjs/sitemap',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Style resources module configuration
   ** See https://github.com/nuxt-community/style-resources-module/
   */
  styleResources: {
    scss: '~/assets/custom-variables.scss',
  },
  /*
   ** Robots module configuration
   ** See https://github.com/nuxt-community/robots-module
   */
  robots: [
    {
      UserAgent: '*',
      Allow: '/',
    },
  ],
  /*
   ** Sitemap module configuration
   ** See https://github.com/nuxt-community/sitemap-module#readme
   */
  sitemap: {
    hostname: 'https://www.toulis-apartments.com',
    gzip: true,
    routes: ['/apartments', '/halkidiki', '/contact'],
  },
  /*
   ** Google Tag Manager module configuration
   ** See https://github.com/nuxt-community/gtm-module
   */
  gtm: {
    id: 'GTM-57NXTCK',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#409DCD',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
