<script setup lang="ts">
const props = defineProps<{
  styles?: string
}>()

const style = computed(() => {
  return [
    props.styles,
    'padding-top: 15px',
    'padding-bottom: 15px',
    'padding-left: 15px',
    'padding-right: 15px',
  ].join('; ')
})
</script>

<template>
  <tbody :style="style">
  <slot/>
  </tbody>
</template>