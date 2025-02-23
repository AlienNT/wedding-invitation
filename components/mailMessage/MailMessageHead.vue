<script setup lang="ts">
defineProps<{
  value: string,
  styles?: string
}>()
</script>

<template>
  <thead
      :style="styles"
  >
  {{value}}
  </thead>
</template>