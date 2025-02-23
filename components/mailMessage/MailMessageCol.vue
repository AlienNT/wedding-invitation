<script setup lang="ts">
const props = defineProps<{
  value: string,
  styles?: string
}>()

const style = computed(() => {
  return [
    props.styles,
    'padding-top: 5px',
    'padding-bottom: 5px',
    'padding-left: 15px',
    'padding-right: 15px',
    'font-size: 16px',
  ].join(';')
})
</script>

<template>
  <td :style="style">
    {{ value }}
  </td>
</template>