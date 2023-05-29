<template>
    <h1>UseRouter</h1>
    <button @click="handleBack">back</button>
</template>
<script setup>
    const route = useRouter()
    const handleBack = () => {
        route.back()
    }
    // console.log(route.addRoute('useRoute'))
    console.log(route.isReady('useRouter'))
</script>