// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  colorMode: {
    fallback: 'dark',
    classSuffix: "",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "nuxt-svgo",
  ],

  plugins: [
    '~/plugins/vue3-google-map',
  ],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome'
    ]
  },

  runtimeConfig: {
    public: {
      startDate: process.env.START_DATE,
      endDate: process.env.END_DATE,
      apiUrl: process.env.API_URL,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    }
  },

  googleFonts: {
    families: {
      "Creepster": true
    },
    preload: true
  },

})
