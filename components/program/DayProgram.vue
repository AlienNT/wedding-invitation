<script setup lang="ts">

import DayProgramItem from "~/components/program/DayProgramItem.vue";
import type {ProgramItemInterface} from "#shared/types";
import Observed from "~/layouts/observed.vue";

withDefaults(defineProps<{
      programList: ProgramItemInterface[],
      step: number
    }>(), {
      step: 0
    }
)
</script>

<template>
  <div class="program">
    <ul class="program-list">
      <template
          v-for="({title, time, description, icon, _id, className}, index) in programList"
      >
        <observed
            tag-name="li"
            transition-name="slide-right"
            :step="index + step"
        >
          <DayProgramItem
              tag-name="div"
              :key="_id"
              :title="title"
              :time="time"
              :description="description"
              :icon="icon"
              :class-name="className"
              :step="index + 1 + step"
          />
        </observed>
      </template>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/styles/variables.scss';

$listPadding: 30px;
.program {
  margin: 0 auto;
  max-width: 600px;
}

.program-list {
  padding-left: $listPadding;
  position: relative;
  display: flex;
  flex-direction: column;

  > * {
    &:not(:last-child) {
      border-left: 2px solid variables.$designElementColor;
      padding-bottom: 60px;
    }
  }
}

</style>