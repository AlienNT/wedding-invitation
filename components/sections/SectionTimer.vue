<script setup lang="ts">

import ru from "~/locales/ru";
import Timer from "~/components/UI/Timer.vue";
import AppTitle from "~/components/UI/AppTitle.vue";
import Observed from "~/layouts/observed.vue";

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
                  value="До свадьбы осталось"
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
                  :date="ru.countdown.date(ru.invite.date, ru.invite.time)"
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