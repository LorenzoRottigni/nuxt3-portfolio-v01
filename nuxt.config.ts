import { defineNuxtConfig } from 'nuxt3'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  meta: {
    title: 'LR Portfolio',
  },
  css: [
    '~/assets/sass/app.sass',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css'
  ],
  plugins: [
    //{src: '~/plugins/bootstrap.js', mode: 'client'}
    {src: '~/plugins/primevue.js', mode: 'client'}
  ],
  buildModules: [
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    [
      '@intlify/nuxt3',
      {
        localeDir: 'locales',
        vueI18n: {
          locale: 'en'
        }
      }
    ]
  ],
  build: {
    //transpile: ['primevue']
  },
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: true,
      }),
    ],
  },
})
