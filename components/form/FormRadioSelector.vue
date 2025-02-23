<script setup lang="ts">
import type {RadioSelectorInterface} from "~/store/feedback";

defineProps<RadioSelectorInterface & {
  fieldTitle: string
}>()

defineEmits(['onInput'])
</script>

<template>
  <div class="radio-list">
    <div class="radio-title">
      {{ fieldTitle }}
    </div>
    <label
        class="radio-label"
        v-for="({value, title, _id}, index) in options"
        :key="_id || index"
    >
      <input
          :value="value"
          :checked="_id === selectedOption"
          name="radio"
          type="radio"
          @input="$emit('onInput', _id)"
      />
      <span class="title">
        {{ title }}
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/variables';

.radio-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radio-label {
  display: flex;
  gap: 10px;

}

.title {
  display: flex;
  align-items: center;
}

input {
  all: unset;
  border-radius: 100%;
  border: 2px solid variables.$designElementColor;
  width: 15px;
  height: 15px;
  display: flex;
  position: relative;
  padding: 5px;
  flex: none;

  &:after {
    content: "";
    transition: .2s ease;
    flex: 1;
    display: block;
    border-radius: 50%;
    background: variables.$designElementColor;
    opacity: 0;
  }

  &:checked {
    &:after {
      opacity: 1;
    }
  }
}

</style>