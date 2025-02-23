<script setup lang="ts">
withDefaults(defineProps<{
  title: string,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
}>(), {
  title: 'Button',
})
</script>

<template>
  <button
      :type="type"
      :disabled="disabled"
      class="app-button"
  >
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
@use 'assets/styles/variables';
@use 'sass:color';

.app-button {
  padding: 15px;
  border-radius: 50px;
  background-color: variables.$designElementColor;
  color: variables.$colorFontLight;
  cursor: pointer;
  transition: .2s ease;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not([disabled]):hover {
    background-color: color.scale(variables.$designElementColor, $lightness: -20%);
  }
}
</style>