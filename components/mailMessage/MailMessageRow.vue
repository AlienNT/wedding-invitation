<script setup lang="ts">
defineProps<{
  styles?: string
}>()
</script>

<template>
<tr :style="styles">
  <slot/>
</tr>
</template>

<style scoped>

</style>