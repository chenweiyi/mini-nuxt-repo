// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: ['@element-plus/nuxt'],
  router: {
    options: {
      hashMode: true,
    },
  },
  vite: {
    vueJsx: {
      mergeProps: true,
    },
  }
});
