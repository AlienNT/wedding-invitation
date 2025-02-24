<script setup lang="ts">

import AppTitle from "~/components/UI/AppTitle.vue";
import DayProgram from "~/components/program/DayProgram.vue";
import Observed from "~/layouts/observed.vue";
import {useDayProgram} from "~/store/dayProgram";

const {programList} = useDayProgram()
const {locale} = useLocale()

</script>

<template>
  <section class="section section-program">
    <div class="container">
      <div class="row">
        <Observed :step="1" transition-name="slide-right">
          <AppTitle
              class="col"
              :value="locale.dayProgram.title"
          />
        </Observed>
      </div>
      <div class="row">
        <div class="col">
          <Observed :step="2" transition-name="slide-left">
            <DayProgram
                :step="3"
                :program-list="programList"
            />
          </Observed>
        </div>
      </div>
    </div>
  </section>
</template>