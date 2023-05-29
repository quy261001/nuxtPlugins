<template>
    <h1>UseSeoMeta</h1>
    <button @click="clickHe">Click</button>
</template>
<script setup lang="ts">
const title = ref('my Title')
const clickHe = () => {
    title.value = 'Change title '
}
// useSeoMeta({
//   title: () => `${title.value}`,
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })
useServerSeoMeta({
title: () => `${title.value}12321321`,
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>