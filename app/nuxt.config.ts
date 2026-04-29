// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  compatibilityDate: '2026-03-09',
  devtools: { enabled: true },

  colorMode: {
    fallback: 'dark',
    classSuffix: "",
  },

  css: [
    '@/assets/css/main.css',
    /*'@fortawesome/fontawesome-svg-core/styles.css'*/
  ],

  ui: {
    theme: {
      colors: ['thunderbird', 'timberwolf', 'cod-gray', 'japonica', 'jape','merlin','tiktok'],
    }
  },

  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-svgo",
    'nuxt-security',
    'nuxt-gtag',
  ],

  plugins: [
    '~/plugins/vue3-google-map',
    '~/plugins/recaptcha',
    '~/plugins/fontawesome',
  ],

  runtimeConfig: {
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    public: {
      startDate: process.env.START_DATE,
      endDate: process.env.END_DATE,
      apiUrl: process.env.API_URL,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    }
  },

  gtag: {
    id: 'G-61QKTVDLHP'
  },

  svgo: {
    defaultImport: 'component',
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", "data:", "https://maps.gstatic.com/", "https://maps.googleapis.com/"],
        'script-src': [
          "'self'",
          "'unsafe-eval'",  // Required for the QR code library
          'https:',
          "'unsafe-inline'",
          "https://maps.googleapis.com/"
        ],
      }
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['qr-code'].includes(tag)
    }
  },

})
