<script setup lang="ts">
defineProps<{
  title: string,
  value?: string,
  placeholder?: string,
}>()

const emit = defineEmits(['onInput'])
const isFocused = ref(false)

function onInput(e: Event) {
  const {value} = e.target as HTMLInputElement
  emit('onInput', value)
}

</script>

<template>
  <label :class="isFocused && 'focused'">
    <FormFieldTitle
        :value="title"
        tag-name="span"
    />
    <input
        type="text"
        name="text"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
        @focus="isFocused=true"
        @blur="isFocused=false"
    />
  </label>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';
@use 'assets/styles/variables';
@use 'sass:color';

label {
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: color.scale(variables.$designElementColor, $lightness: 60%);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: .2s ease;
    border-radius: 5px;
  }

  &.focused {
    &:after {
      background: variables.$designElementColor;
      height: 3px;
    }
  }
}

input {
  border: none;
  padding: 15px 0;
  transition: .2s ease;
  position: relative;

  &::placeholder {
    transition: .2s ease;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  @media #{media.$mediaScreenMedium} {
    padding: 10px 0;
  }
}
</style>