<script setup lang="ts">
defineProps<{
  value: number
}>()
</script>

<template>
  <div class="countdown-value" :key="value">
    {{ value || 0 }}
  </div>
</template>

<style scoped lang="scss">

.countdown-value {
  font-size: 32px;
  font-style: italic;
}
</style>