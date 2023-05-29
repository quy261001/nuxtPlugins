<template>
    <h1>UseRuntimeConfig</h1>
</template>
<script setup>
    const config = useRuntimeConfig()
    const  {data: count }  = await useLazyAsyncData('count',() => $fetch(config.apiURL)) 
    console.log(count.value)
    console.log(config.app.cdnURL)
</script>