<template>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
  </template>
<script setup>
    const appConfig = useAppConfig()
    console.log(appConfig.theme)
    const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
