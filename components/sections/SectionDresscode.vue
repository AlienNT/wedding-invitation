<script setup lang="ts">

import Observed from "~/layouts/observed.vue";
import SectionBanner from "~/components/UI/SectionBanner.vue";
import AppTitle from "~/components/UI/AppTitle.vue";

import BackgroundImage from "~/assets/images/textile3.jpg"
</script>

<template>
  <div class="container container--fluid">
    <div class="row">
      <observed>
        <SectionBanner
            :background-image="BackgroundImage"
            background-color-scheme="light"
        >
          <template v-slot:title>
            <AppTitle value="Дрес-код"/>
          </template>
          <template v-slot:description>
            <DresscodeList/>
          </template>
        </SectionBanner>
      </observed>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>