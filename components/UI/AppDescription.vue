<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
<div class="description">{{value}}</div>
</template>

<style scoped>
.description {
  max-width: 600px;
  margin: 0 auto;
}
</style>