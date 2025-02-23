<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
}>()
</script>

<template>
  <div class="app-image">
    <img
        :src="src"
        :alt="alt"
    >
  </div>
</template>

<style scoped lang="scss">
.app-image {
  width: 100%;
  height: 100%;
  background: #ccc;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>