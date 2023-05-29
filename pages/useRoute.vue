<script setup>
const route = useRoute()
console.log(route)
const { data: mountain } = await useFetch(`https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/`)
onMounted(() => {
    console.log(route)
})
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
<template>
  <div>
    <h1>UseRoute</h1>
    
  </div>
</template>