<script setup lang="ts">
interface DressCode {
  title: string,
  description: string,
  colors: string[]
}

const state = reactive({
  dressCodeList: [
    {
      title: 'Леді,',
      description: 'ми будуємо дуже раді Вас бачити у вечірніх сукнях пастельних відтінків',
      colors: [
        '#f5e1e0',
        '#fcc5c6',
        '#d39998',
        '#bd9d86',
        '#c1aa9c'
      ],
    },
    {
      title: 'Джентельмени,',
      description: 'просимо дотримуватись дрес-коду: біла сорочка та костюм.',
      colors: [
        '#000000',
        '#6c6c6a',
        '#fdfdfd',
      ]
    }
  ] as DressCode[],
})
</script>

<template>
  <ul class="dress-code-list">
    <li
        v-for="(dressCode, index) in state.dressCodeList"
        :key="index"
        class="dress-code-list__item"
    >
      <div class="dress-code__title">
        {{ dressCode.title }}
      </div>
      <div class="dress-code__description">
        {{ dressCode.description }}
      </div>
      <div class="dress-code__colors">
        <div
            v-for="(color, index) in dressCode.colors"
            class="color"
            :key="index"
            :style="`background-color: ${color};`"
        >
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/styles/fonts';

.dress-code-list__item {
  text-align: center;
  padding: 15px 0;
}

.dress-code__title,
.dress-code__description {
  font-family: fonts.$fontMain;
  line-height: 1.8;
  font-weight: 300;
}

.dress-code__title {
  font-size: 28px;
}

.dress-code__description {
  font-size: 22px;
}

.dress-code__colors {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px 0;
  flex-wrap: wrap;

  .color {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    transition: .2s ease;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.15);

    @media all and (max-width: 700px) {
      width: 40px;
      height: 40px;
    }

    @media (pointer: fine) {
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

</style>