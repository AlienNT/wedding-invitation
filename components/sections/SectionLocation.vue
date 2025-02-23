<script setup lang="ts">

import ru from "~/locales/ru";
import AppTitle from "~/components/UI/AppTitle.vue";
import SectionBanner from "~/components/UI/SectionBanner.vue";
import BannerImage from 'assets/images/location.webp'
import Observed from "~/layouts/observed.vue";
import {useLocation} from "~/store/location";

const {name, address, link} = useLocation()
</script>

<template>
  <section class="section section-location">
    <div class="container">
      <div class="row">
        <div class="col">
         <observed :delay="500">
           <AppTitle
               :value="ru.location.title"
           />
         </observed>
        </div>
      </div>
      <div class="row">
        <div class="col location-banner-col">
          <observed :delay="500 * 2">
            <SectionBanner
                class="location-banner"
                :background-image="BannerImage"
            />
          </observed>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Location
              :name="name"
              :address="address"
              :link="link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.location-banner-col {
  min-height: calc(var(--vh) * 0.7);
  margin-bottom: 30px;
}
</style>