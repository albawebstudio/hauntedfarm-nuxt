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
    'nuxt-security',
    'nuxt-gtag',
    'nuxt-lodash',
    '@pinia/nuxt',
  ],

  plugins: [
    '~/plugins/vue3-google-map',
    '~/plugins/recaptcha',
  ],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome'
    ]
  },

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

  googleFonts: {
    families: {
      Oswald: {
        wght: [300, 500, 700, 800]
      },
      'Libre Baskerville': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 300, 500, 700, 900],
        ital: [100, 300, 500, 700, 900],
      },
    },
    display: 'swap',
    preload: true
  },

  gtag: {
    id: 'G-61QKTVDLHP'
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", "data:", "https://maps.gstatic.com/", "https://maps.googleapis.com/"],
        'script-src': [
          "'self'",
          "'unsafe-eval'",  // Required for the QR code library
          'https:',
          "'unsafe-inline'"
        ],
      }
    },
  },

  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      },
      rehypePlugins: [
        'rehype-external-links'
      ]
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['qr-code'].includes(tag)
    }
  },

})
