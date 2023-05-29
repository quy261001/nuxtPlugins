<template>
    <h1>UseRequestHeaders</h1>
</template>
<script setup>
 const {data: dataHero} = await useFetch('https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/',{
    key:'hero',
})
console.log(dataHero.value)
// Get all request headers
const headers = useRequestHeaders()
// Get only cookie request header
const headerCookie = useRequestHeaders(['host'])
console.log('Headers',headers)
console.log('host',headerCookie)
console.log('headerCookie',headers['host'])
</script>