<script setup lang="ts">

import AppTitle from "~/components/UI/AppTitle.vue";
import AppDescription from "~/components/UI/AppDescription.vue";
import FeedBackForm from "~/components/form/FeedBackForm.vue";
import Observed from "~/layouts/observed.vue";

const {locale} = useLocale()

</script>

<template>
  <section class="section section-form">
    <div class="container">
      <div class="row">
        <div class="col">
          <observed :step="1">
            <AppTitle
                :value="locale.presence.title"
            />
          </observed>
        </div>
      </div>
      <div class="row">
        <div class="col description-col">
          <observed :step="2">
            <AppDescription
                :value="locale.presence.description"
            />
          </observed>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <observed :step="3">
            <FeedBackForm/>
          </observed>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.description-col {
  text-align: center;
  margin-bottom: 30px;
}
</style>