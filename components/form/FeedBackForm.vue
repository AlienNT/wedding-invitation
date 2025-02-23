<script setup lang="ts">

import FormRadioSelector from "~/components/form/FormRadioSelector.vue";
import AppButton from "~/components/UI/AppButton.vue";
import {useFeedback} from "~/store/feedback";
import {getKeys, isNotEmpty} from "#shared/utils";

const {feedbackFormData, sendFeedback, setSelectedOption, selectedOptionId, options} = useFeedback()

const isLoading = ref(false);

const isValid = computed(() => {
  return getKeys(feedbackFormData.value).every(key => isNotEmpty(feedbackFormData.value[key]))
})

const isDisabled = computed(() => {
  return !isValid.value || isLoading.value;
})


async function onSubmit() {
  if (!isValid.value) return;

  isLoading.value = true;

  await sendFeedback({})
      .then(res => {
        console.log({res})
      })
      .catch(error => {
        console.log({error})
      })
      .finally(() => {
        isLoading.value = false;
      })
}

</script>

<template>
  <form class="form" @submit.prevent="onSubmit">
    <FormTextField
        title="Фамилия и Имя (перечислите всех)"
        :value="feedbackFormData.names"
        @on-input="e => feedbackFormData.names = e"
    />
    <FormRadioSelector
        :options="options"
        :selected-option="selectedOptionId"
        field-title="Сможете ли вы присутствовать"
        @on-input="setSelectedOption"
    />
    <FormTextField
        title="Необходимость в отеле"
        :value="feedbackFormData.isNeedHotel"
        @on-input="e => feedbackFormData.isNeedHotel = e"
    />
    <AppButton
        title="Отправить"
        :disabled="isDisabled"
    />
  </form>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 15px;

  @media #{media.$mediaScreenMedium} {
    gap: 15px;
  }
}

</style>