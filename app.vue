<script setup lang="ts">
onMounted(() => {
  document.documentElement.style.setProperty("--vh", window.innerHeight + "px");
})

</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<style lang="scss">
@use 'assets/styles/main.scss';
</style>