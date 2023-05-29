<template>
</template>
<script setup lang="ts">

  // https://63ee0cf4d466e0c18ba84d91.mockapi.io/api/shopxp/Api/
  // const  data  = await $fetch('/api/data')
  const  {data: count }  = await useLazyAsyncData('count',() => $fetch('/api/data')) 
  // const {data: dataUseFetch, pending} = await useFetch('/api/data')

  // console.log('dataFetch:',count.value)
  // console.log('dataUseFetch', dataUseFetch.value)
  watch(count, (newCount) => {
    console.log(newCount)
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})

</script>