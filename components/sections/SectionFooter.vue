<script setup lang="ts">

import AppTitle from "~/components/UI/AppTitle.vue";
import SectionBanner from "~/components/UI/SectionBanner.vue";
import FooterImage from "assets/images/bottom-bg.jpg"
import Observed from "~/layouts/observed.vue";
import AppDescription from "~/components/UI/AppDescription.vue";

const {locale} = useLocale()

const footerDescriptions = ref([
  'Ваші побажання в конвертах стануть для нас найкращими подарунками, які допоможуть здійснити наші мрії 💌',
  'А замість квітів ми будемо щасливі отримати пляшечку доброго алкоголю, який ми з радістю відкриємо разом з вами на нашу річницю 🥂'
])

</script>

<template>
  <section class="section section-footer">
    <div class="container container--fluid">
      <div
          class="row"
          v-for="(description, index) in footerDescriptions"
          :key="index"
      >
        <div class="col description-col">
          <Observed :step="1 + index - 1">
            <AppDescription
                :value="description"
            />
          </Observed>
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

.footer-banner {
  min-height: 400px;
}

.title-col {
  margin-bottom: 50px;
  padding-top: 20px;
}
</style>