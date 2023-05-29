// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
    plugins: [ { src: '~/plugins/notification', mode: 'client' }],
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
    ],
    runtimeConfig: {
        apiURL: process.env.API_URL
    }
})
