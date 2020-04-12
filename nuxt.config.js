import colors from 'vuetify/es5/util/colors';
import en from './locales/en.js';
import el from './locales/el.js';
import rs from './locales/rs.js';
import head from './utils/websiteHeadTags.js';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head,
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
    autoInit: false,
    respectDoNotTrack: true,
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
