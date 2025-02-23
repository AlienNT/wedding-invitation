<script setup lang="ts">
defineProps<{
  styles?: string
}>()
</script>

<template>
  <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="margin:0;
      padding:0"
      :style="styles"
  >
    <slot/>
  </table>
</template>