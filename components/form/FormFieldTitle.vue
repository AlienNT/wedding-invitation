<script setup lang="ts">
withDefaults(defineProps<{
  value: string,
  tagName?: string,
}>(), {
  tagName: 'div'
})
</script>

<template>
  <component
      :is="tagName"
      class="title form-field-title"
  >
    {{ value }}
  </component>
</template>

<style scoped lang="scss">

</style>