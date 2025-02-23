<script setup lang="ts">
import SectionHeader from "~/components/sections/SectionHeader.vue";
import SectionProgram from "~/components/sections/SectionProgram.vue";
import SectionLocation from "~/components/sections/SectionLocation.vue";
import SectionForm from "~/components/sections/SectionForm.vue";
import SectionFooter from "~/components/sections/SectionFooter.vue";
import SectionTimer from "~/components/sections/SectionTimer.vue";

definePageMeta({
  name: 'Home',
})
useHead({
  title: 'Wedding Invitation',
})
useSeoMeta({
  title: `Пришлашение на свадьбу`,
  author: 'Nick Tristen, Никита Тристень',
  description: 'Электронное приглашение на свадьбу Андрея и Алины',
  appleMobileWebAppCapable: 'yes',
  charset: 'utf-8',
  appleMobileWebAppStatusBarStyle: 'black',
  appleMobileWebAppTitle: 'Wedding Invitation',
  creator: 'Nick Tristen',
  colorScheme: 'light dark',
  publisher: 'Nick Tristen',
})

</script>

<template>
  <Html lang="ru">
  <div class="main">
    <SectionHeader/>
    <SectionTimer/>
    <SectionProgram/>
    <SectionLocation/>
    <SectionForm/>
    <SectionFooter/>
  </div>
  </Html>
</template>

<style scoped>
.main {
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>