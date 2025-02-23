<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
  <div class="title">
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/fonts.scss';
@use 'assets/styles/variables';

.title {
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  font-family: fonts.$fontMain;
  color: variables.$colorFontPrimary;
  font-size: 36px;
  font-weight: 500;
}
</style>