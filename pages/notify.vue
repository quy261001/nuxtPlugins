<template>
    <main class="w-screen h-screen flex justify-center items-center">
      <section class="w-3/4 h-3/4 flex justify-center items-center space-x-5">
        <button class="bg-success-100 !p-5" @click="success">ADD SUCCESS</button>
        <button class="bg-warning-100 !p-5" @click="warning">ADD WARNING</button>
        <button class="bg-error-100 !p-5" @click="error">ADD ERROR</button>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  
  const { $notify } = useNuxtApp();
  
  const success = () => {
    $notify({
      text: `This is success`,
      type: `success`
    });
  };
  const warning = () => {
    $notify({
      text: `This is warning`,
      type: `warning`
    });
  };
  const error = () => {
    $notify({
      text: `This is Error`,
      type: `error`
    });
  };
  </script>
  
  <style scoped>
  button {
    @apply rounded p-2 border-secondary-nav-100 border-solid min-w-[80px] font-semibold;
  }
  </style>