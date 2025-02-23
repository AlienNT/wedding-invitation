<script setup lang="ts">
const props = withDefaults(defineProps<{
  transitionName?: 'fade' | 'slide-left' | 'slide-right'
  delay?: number;
  step?: number;
  tagName?: string;
}>(), {
  transitionName: 'fade',
  delay: 350,
  step: 1,
  tagName: 'div',
})

const emit = defineEmits(['onIntersected'])
const {createObserver, observeTarget, entryByTarget} = useObserver()

const observed = ref(undefined as unknown as HTMLElement)
const isShow = ref(false)

const observeEntry = computed(() => {
  return entryByTarget(observed.value).value
})

const isIntersecting = computed(() => {
  return observeEntry.value ? observeEntry.value.isIntersecting : false
})

onMounted(() => {
  createObserver({
    rootMargin: '150px'
  })
  observeTarget(observed.value)
})

watch(() => isIntersecting.value, (value) => {
  if (value) {
    setTimeout(() => {
      isShow.value = value
      emit('onIntersected')
    }, props.delay * props.step)
  }
})

const className = computed(() => {
  return getClassName(props.transitionName)
})

function getClassName(name: string) {
  return !isShow.value ? name + '-before' : name + '-after'
}

</script>

<template>
  <component
      :is="tagName"
      ref="observed"
      class="observed-layout"
      :class="className"
  >
      <slot/>
  </component>
</template>

<style scoped lang="scss">
.observed-layout {
  height: 100%;
  width: 100%;
  transition: opacity .2s ease, .5s ease;
  opacity: 0;
}

.fade-after {
  opacity: 1;
}

.slide-left-before {
  transform: translateX(-20%);
}

.slide-left-after {
  opacity: 1;
  transform: translateX(0);
}

.slide-right-before {
  transform: translateX(20%);
}

.slide-right-after {
  opacity: 1;
  transform: translateX(0);
}
</style>