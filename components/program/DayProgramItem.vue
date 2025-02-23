<script setup lang="ts">

import type {ProgramItemInterface} from "#shared/types";
import Observed from "~/layouts/observed.vue";

type DayProgramItemProps = Omit<ProgramItemInterface, '_id'>

const props = withDefaults(defineProps<DayProgramItemProps & {
  tagName?: string
  step?: number
}>(), {
  tagName: 'li',
  step: 1
})

const target = ref(undefined as unknown as HTMLElement)

const iconStyle = computed(() => {
  return [
    props.icon ? `mask-image: ${props.icon}` : ''
  ].join('; ')
})


</script>

<template>
  <component
      :is="tagName"
      class="program-list__item"
      ref="target"
  >
    <div
        class="item-field--icon"
        :class="className"
    >
      <div
          class="icon"
          :style="iconStyle"
      />
    </div>
    <div class="item-field item-field--time">
      <Observed transition-name="slide-right" :step="step + 1">
        {{ time }}
      </Observed>
    </div>
    <div class="item-field item-field--title">
      <Observed transition-name="slide-right" :step="step + 2">
        {{ title }}
      </Observed>
    </div>
    <div class="item-field item-field--description">
      <Observed transition-name="slide-right" :step="step + 3">
        {{ description }}
      </Observed>
    </div>
  </component>
</template>

<style scoped lang="scss">
@use 'assets/styles/variables';

$listPadding: 30px;
$verticalPadding: calc($listPadding / 2);

.program-list__item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: $verticalPadding;
}

.item-field--icon {
  width: $listPadding;
  height: $listPadding + calc($verticalPadding * 2);
  padding-top: $verticalPadding;
  padding-bottom: $verticalPadding;
  display: flex;
  position: absolute;
  left: 0;
  transform: translate(-50%, -$verticalPadding);
  background: #ffffff;

}

.icon {
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: variables.$designElementColor;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;

  .point & {
    mask-image: url('assets/icons/pointer.svg');
  }

  .ceremony & {
    mask-image: url('assets/icons/wedding.svg');
  }

  .banquet & {
    mask-image: url('assets/icons/wine.svg');
  }

  .end & {
    mask-image: url('assets/icons/fireworks.svg');
  }
}

.item-field--time,
.item-field--title {
  color: #686868;
}

.item-field--time {
  font-size: 20px;
}

.item-field--title {
  font-size: 18px;
}

.item-field--description {
  font-size: 14px;
}

</style>