<script setup lang="ts">

import {getDate} from "#shared/utils";
import Timer from "~/components/UI/Timer.vue";
import AppTitle from "~/components/UI/AppTitle.vue";
import Observed from "~/layouts/observed.vue";
import eventConfig from "#shared/utils/eventConfig";

const {locale} = useLocale()

</script>

<template>
  <section class="section section-timer">
    <observed>
      <div class="container">
        <div class="row">
          <div class="col">
            <Observed
                transition-name="slide-left"
                :step="2"
            >
              <AppTitle
                  :value="locale.countdown.title"
              />
            </Observed>
          </div>
        </div>
        <div class="row">
          <div class="col wedding-countdown">
            <Observed
                transition-name="slide-right"
                :step="3"
            >
              <Timer
                  :date="getDate(eventConfig.DATE, eventConfig.TIME)"
              />
            </Observed>
          </div>
        </div>
      </div>
    </observed>
  </section>
</template>

<style scoped lang="scss">
.section-timer {
  align-items: center;
  display: flex;
}

.wedding-countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  max-width: 400px;
  margin: auto;
}
</style>