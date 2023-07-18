// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase', 'nuxt-icon','@nuxtjs/tailwindcss','@pinia/nuxt'],

    css: ['~/assets/css/main.css'],
    build: {
        transpile: ["vue-toastification"],
      },
})
