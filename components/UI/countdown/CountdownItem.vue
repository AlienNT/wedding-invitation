<script setup lang="ts">
import CountdownItemValue from "~/components/UI/countdown/CountdownItemValue.vue";
import CountdownItemTitle from "~/components/UI/countdown/CountdownItemTitle.vue";

withDefaults(defineProps<{
  tagName?: string,
  value: number,
  title: string
}>(), {
  tagName: 'li'
})
</script>

<template>
  <component
      :is="tagName"
      class="countdown-item"
  >
    <CountdownItemValue
        :value="value"
    />
    <CountdownItemTitle
        :title="title"
    />
  </component>
</template>

<style scoped>
.countdown-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>