// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-12',
  devtools: { enabled: false },
  modules: ['@nuxt/image'],
  image: {
    inject: true,
    providers: {
      custom: {
        provider: '~/providers/custom',
        options: {
          unsplashBaseURL: 'https://images.unsplash.com'
        },
      }
    }
  },
})