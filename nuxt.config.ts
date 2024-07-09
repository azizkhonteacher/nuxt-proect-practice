// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://dummyjson.com",
    },
  },
  modules: ["nuxt-swiper", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  devtools: { enabled: false },
  css: ["@/assets/scss/main.scss"],
  // ssr: false,
});
