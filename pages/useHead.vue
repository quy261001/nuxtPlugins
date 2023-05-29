<template>
    <h1>UseHead</h1>
</template>
<script setup>
 useHead(() => {
    return {
        title: 'useHeadtitle',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { hid: 'description', name: 'description', content: 'Trang chủ của website' }
        ],
        link: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
}
 })
</script>