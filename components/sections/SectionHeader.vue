<script setup lang="ts">

import SectionBanner from "~/components/UI/SectionBanner.vue";
import BannerImage from 'assets/images/header_bg.webp'
import Observed from "~/layouts/observed.vue";
import eventConfig from "#shared/utils/eventConfig";
import {displayedDate} from "#shared/utils";

const {locale} = useLocale()

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
              {{ locale.newlyweds.husband.name }}
            </div>
          </Observed>
          <Observed transition-name="fade" :step="2">
            <div>{{locale.newlyweds.and}}</div>
          </Observed>
          <Observed transition-name="slide-right" :step="3">
            <div class="name">
              {{ locale.newlyweds.wife.name }}
            </div>
          </Observed>
        </div>
      </template>
      <template #description>
        <div class="wedding-invite-description">
          <Observed :step="4">
            <div class="invite-text">
              {{ locale.invite.title }}
            </div>
          </Observed>
          <Observed :step="5">
            <div class="invite-date">
              {{ displayedDate(eventConfig.DATE) }}
            </div>
          </Observed>
          <Observed :step="6">
            <div class="invite-time">
              {{ eventConfig.TIME }}
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