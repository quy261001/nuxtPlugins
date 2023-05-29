<template>
    <p>URL is: {{ url }}</p>
    <p>Path is: {{ url.pathname }}</p>
  </template>
<script setup>
    const url = useRequestURL()
    // console.log(url)
</script>
