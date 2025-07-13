<script setup lang="ts">
const props = withDefaults(defineProps<{
  backgroundImage?: string,
  backgroundAttachment?: 'fixed' | 'scroll' | 'unset',
  backgroundColorScheme?: 'light' | 'dark',
}>(), {
  backgroundColorScheme: 'dark',
})

const style = computed(() => [
  props.backgroundImage ? `background-image: url(${props.backgroundImage})` : '',
  props.backgroundAttachment ? `background-attachment:${props.backgroundAttachment}` : '',
].join(';'))

const slots = useSlots()
</script>

<template>
  <div
      class="banner"
      :style="style"
      :class="backgroundColorScheme"
  >
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
  background-position: center 30%;
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
  }

  &.light {
    &:before {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(2px);
    }
  }

  &.dark {
    &:before {
      background: rgba(0, 0, 0, 0.6);
    }
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
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>