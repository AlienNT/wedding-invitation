<script setup lang="ts">
import type {LocationInterface} from "~/store/location";
import Observed from "~/layouts/observed.vue";

defineProps<LocationInterface & {
  buttonTitle?: string
}>()

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
        <a
            :href="link"
            class="location-link"
            target="_blank"
        >
          {{ buttonTitle || 'Перейти' }}
        </a>
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
  text-align: center;
}

.location-map-link {
  padding-top: 15px;
  width: fit-content;

  @media (pointer: fine) {
    a {
      transition: .2s ease;

      &:hover {
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }

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