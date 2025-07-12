<script setup lang="ts">

import AppTitle from "~/components/UI/AppTitle.vue";
import SectionBanner from "~/components/UI/SectionBanner.vue";
import FooterImage from "assets/images/bottom-bg.jpg"
import Observed from "~/layouts/observed.vue";

const {locale} = useLocale()

</script>

<template>
  <section class="section section-footer">
    <div class="container container--fluid">
      <div class="row">
        <div class="col title-col">
          <Observed :step="3">
            <AppTitle
                :value="locale.footer.title"
            />
          </Observed>
        </div>
      </div>
      <div class="row">
        <Observed :step="4">
          <SectionBanner
              class="footer-banner"
              :background-image="FooterImage"
          />
        </Observed>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-footer {
  padding-bottom: 0;
}

.description-col {
  text-align: center;
  margin-bottom: 25px;
}

.contacts-col {
  text-align: center;
  margin-bottom: 50px;
}

.footer-banner {
  min-height: 400px;
}

.title-col {
  margin-bottom: 50px;
}
</style>