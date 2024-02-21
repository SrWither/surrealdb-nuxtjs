// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    },
    head: {
      bodyAttrs: {
        class: "bg-background text-text"
      }
    }
  },
  nitro: {
    plugins: ['~/server/db/index.ts']
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
