import colors from 'tailwindcss/colors'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxthq/ui'
  ],

  googleFonts: {
    families: {
      Montserrat: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      'Fira+Mono': {
        wght: [400, 500, 700]
      }
    }
  },

  tailwindcss: {
    config: {
      content: [],
      plugins: [require('@tailwindcss/typography')],
      theme: {
        extend: {
          colors: {
            success: colors.green,
            info: colors.sky,
            alert: colors.yellow,
            warning: colors.red,
            customNeutral: {
              50: '#FAFAFA',
              100: '#F1F1F1',
              200: '#D4D4D4',
              300: '#B8B8B8',
              400: '#9C9C9C',
              500: '#808080',
              600: '#636363',
              700: '#474747',
              800: '#2A2A2A',
              900: '#0E0E0E',
              950: '#050505'
            }
          },
          fontFamily: {
            sans: ['Montserrat'],
            mono: ['Fira Mono']
          }
        }
      }
    }
  },

  ui: {
    safelistColors: ['primary', 'success', 'info', 'alert', 'warning'],
    icons: ['ri', 'simple-icons']
  },

  app: {
    head: {
      htmlAttrs: {
        // lang: 'it-IT'
        // lang: 'en-US'
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml',
          sizes: 'any'
        }
      ]
    }
  },

  $production: {
    nitro: {
      compressPublicAssets: true
    },
    routeRules: {
      '/**': { swr: 60 * 10 } // 10m cache, as per Docs https://nitro.unjs.io/guide/cache#route-rules
    }
  },

  devtools: { enabled: true },
  $development: {
    typescript: {
      shim: false
    }
  }
})
