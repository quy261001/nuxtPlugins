<template>
  <div
    class="notify__content animation"
    :style="{ width: `${width}px`, height: `${height}px` }"
    :class="`bg-${type}-100`"
  >
    <h2 class="font-semibold">{{ text }}</h2>
  
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    default: 360,
  },
  height: {
    type: Number,
    default: 100,
  },
  text: {
    type: String,
  },
  type: {
    type: String,
    default: "success",
  }
});
</script>

<style scoped>
.notify__content {
  @apply flex items-center justify-between p-4 fixed top-5 right-5 rounded-md border-neutral-600 border-solid text-white;
}
@keyframes transform-left {
  from {
    transform: translateX(8px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes circle-reveal {
  0% {
    opacity: 0;
    clip-path: circle(10px at 100% 50%);
  }
  75% {
    opacity: 1;
  }
  100% {
    clip-path: circle(250px at center);
  }
}
.animation {
  animation: transform-left 0.5s ease-in-out, circle-reveal 0.3s ease-in-out;
  transition: all;
}
</style>