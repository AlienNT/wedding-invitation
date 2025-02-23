<script setup lang="ts">
defineProps<{
  title: string
}>()

</script>

<template>
<div class="countdown-title">
  {{title}}
</div>
</template>

<style scoped>
.countdown-title {
  font-size: 14px;
}
</style>