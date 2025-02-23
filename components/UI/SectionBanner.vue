<script setup lang="ts">
const props = defineProps<{
  backgroundImage?: string,
  backgroundAttachment?: 'fixed' | 'scroll' | 'unset',
}>()

const style = computed(() => [
  props.backgroundImage ? `background-image: url(${props.backgroundImage})` : '',
  props.backgroundAttachment ? `background-attachment:${props.backgroundAttachment}` : '',
].join(';'))

const slots = useSlots()
</script>

<template>
  <div class="banner" :style="style">
    <div
        v-if="slots.description || slots.title"
        class="banner-content"
    >
      <div
          v-if="slots.title"
          class="banner-title"
      >
        <slot name="title"/>
      </div>
      <div
          v-if="slots.description"
          class="banner-description"
      >
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.banner {
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: rgba(0, 0, 0, 0.6);
  }
}

.banner-content {
  max-width: 600px;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 1;
  min-height: 100%;
  height: 100%;
  padding: 50px 15px;
  display: flex;
  flex-direction: column;
}

.banner-title,
.banner-description {
  height: 50%;
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>