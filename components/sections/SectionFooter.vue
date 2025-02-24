<script setup lang="ts">

import AppTitle from "~/components/UI/AppTitle.vue";
import AppDescription from "~/components/UI/AppDescription.vue";
import SectionBanner from "~/components/UI/SectionBanner.vue";
import FooterImage from "assets/images/location.webp"
import Observed from "~/layouts/observed.vue";
import {useContacts} from "~/store/contacts";

const {contacts} = useContacts()
const {locale} = useLocale()

</script>

<template>
  <section class="section section-footer">
    <div class="container container--fluid">
      <div class="row">
        <div class="col description-col">
          <Observed :step="1">
            <AppDescription
                :value="locale.footer.description"
            />
          </Observed>
        </div>
      </div>
      <div class="row">
        <div class="col contacts-col">
          <template v-for="({title, value}, index ) in contacts">
            <Observed :step="2 + index">
              <a
                  :href="value"
                  class="href"
              >
                {{ title }}
              </a>
            </Observed>
          </template>
        </div>
      </div>
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