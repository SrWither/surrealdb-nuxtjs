// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
    plugins:['~/server/db/index.ts']
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
