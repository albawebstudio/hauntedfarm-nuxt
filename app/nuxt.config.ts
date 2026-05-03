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

  css: [
    '@/assets/css/main.css',
  ],

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
    '~/plugins/fontawesome',
  ],

  content: {
    database: {
      type: 'd1',
      binding: 'DB',
      bindingName: 'DB'
    },
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY ?? "",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",
    public: {
      startDate: process.env.START_DATE ?? "",
      endDate: process.env.END_DATE ?? "",
      resendTemplateId: process.env.RESEND_TEMPLATE_ID ?? "",
    }
  },

  gtag: {
    id: process.env.GTAG_ID
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

  nitro: {
    preset: 'cloudflare_pages',
  },

  vite: {
    build: {
      sourcemap: false,
    },
  },

})
