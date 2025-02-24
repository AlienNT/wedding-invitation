<script setup lang="ts">
import SectionHeader from "~/components/sections/SectionHeader.vue";
import SectionProgram from "~/components/sections/SectionProgram.vue";
import SectionLocation from "~/components/sections/SectionLocation.vue";
import SectionForm from "~/components/sections/SectionForm.vue";
import SectionFooter from "~/components/sections/SectionFooter.vue";
import SectionTimer from "~/components/sections/SectionTimer.vue";
import eventConfig from "#shared/utils/eventConfig";

definePageMeta({
  name: 'Home',
})
useHead({
  title: 'Wedding Invitation',
})
useSeoMeta({
  title: `Запрошення на весілля`,
  author: 'Nick Tristen, Никита Тристень',
  description: 'Електронне запрошення на весілля Андрія та Аліни',
  mobileWebAppCapable: 'yes',
  charset: 'utf-8',
  appleMobileWebAppStatusBarStyle: 'black',
  appleMobileWebAppTitle: 'Wedding Invitation',
  creator: 'Nick Tristen',
  colorScheme: 'light dark',
  publisher: 'Nick Tristen',
  ogImage: 'https://instagram.fdnk1-4.fna.fbcdn.net/v/t51.29350-15/461582854_1044108934015208_5954933052319876378_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE2NjUuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdnk1-4.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2AEuZUqJXisdXwkrigPaBh9zQTFw9NY9M8rh-94gjtHWzCrWnzyDygeUngrXRe20_TI&_nc_ohc=G61byehPhNoQ7kNvgGjqUar&_nc_gid=a18574f589bc43ceb4251da907410005&edm=AA5fTDYBAAAA&ccb=7-5&ig_cache_key=MzQ2ODU4MDA0MDE2NjQ1MDYzMg%3D%3D.3-ccb7-5&oh=00_AYDn3BHyCYRa5V_v0DI9A26B9RhOUfjTMJyX-vaD1QENnQ&oe=67C14EFB&_nc_sid=7edfe2'
})

</script>

<template>
  <Html :lang="eventConfig.LOCALE">
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