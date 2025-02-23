<script setup lang="ts">
import type {LocationInterface} from "~/store/location";
import Observed from "~/layouts/observed.vue";

defineProps<LocationInterface>()
</script>

<template>
  <div class="location">
    <div class="location-name">
      <observed :step="1">
        {{ name }}
      </observed>
    </div>
    <div class="location-address">
      <observed :step="2">
        {{ address }}
      </observed>
    </div>
    <div class="location-map-link">
      <observed :step="3">
        <a :href="link">Перейти на карту</a>
      </observed>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/variables';

.location {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.location-map-link {
  padding-top: 15px;
  width: fit-content;

  a {
    display: flex;
    text-transform: uppercase;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid variables.$designElementColor;
    color: variables.$designElementColor;
  }
}
</style>