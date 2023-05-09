// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
    plugins: [ { src: '~/plugins/notification', mode: 'client' }],
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
