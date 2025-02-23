<script setup lang="ts">

import ru from "~/locales/ru";
import SectionBanner from "~/components/UI/SectionBanner.vue";
import BannerImage from 'assets/images/header_bg.webp'
import Observed from "~/layouts/observed.vue";

function displayedDate(date: string) {
  const toDate = new Date(date);

  return toDate.toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

</script>

<template>
  <section class="section-header">
    <SectionBanner
        class="col"
        background-attachment="unset"
        :background-image="BannerImage"
    >
      <template #title>
        <div class="names">
          <Observed transition-name="slide-left">
            <div class="name">
              {{ ru.newlyweds.husband.name }}
            </div>
          </Observed>
          <Observed transition-name="fade" :step="2">
            <div>и</div>
          </Observed>
          <Observed transition-name="slide-right" :step="3">
            <div class="name">
              {{ ru.newlyweds.wife.name }}
            </div>
          </Observed>
        </div>
      </template>
      <template #description>
        <div class="wedding-invite-description">
          <Observed :step="4">
            <div class="invite-text">
              {{ ru.invite.title }}
            </div>
          </Observed>
          <Observed :step="5">
            <div class="invite-date">
              {{ displayedDate(ru.invite.date) }}
            </div>
          </Observed>
          <Observed :step="6">
            <div class="invite-time">
              {{ ru.invite.time }}
            </div>
          </Observed>
        </div>
      </template>
    </SectionBanner>
  </section>
</template>

<style scoped lang="scss">
@use 'assets/styles/variables';
@use 'assets/styles/fonts';

.section-header {
  flex: 1;
  min-height: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

.names {
  margin-top: auto;

  * {
    font-size: 72px;
    text-align: center;
    color: white;
    font-weight: 300;
    font-family: fonts.$fontMain;
  }
}

.wedding-invite-description {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-transform: uppercase;
  align-items: unset;
  font-size: 18px;
  font-weight: 600;
}

.invite-date,
.invite-time,
.invite-text {
  text-align: center;
  flex: 0 0 calc(100% / 3);
}

.invite-text {
  color: #f4f4f4;
}

.invite-date,
.invite-time {
  color: rgb(186, 186, 186);
}
</style>