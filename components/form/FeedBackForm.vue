<script setup lang="ts">

import FormRadioSelector from "~/components/form/FormRadioSelector.vue";
import AppButton from "~/components/UI/AppButton.vue";
import {useFeedback} from "~/store/feedback";
import {getKeys, isNotEmpty} from "#shared/utils";

const {feedbackFormData, sendFeedback, setSelectedOption, selectedOptionId, options} = useFeedback()
const {locale} = useLocale()

const isLoading = ref(false);

const fieldTitles = {
  names: 'Прізвище та Ім\'я (перерахуйте всіх)',
  options: "Чи зможете ви бути присутнім",
  isNeedHotel: 'Необхідність у готелі'
}

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
        :title="fieldTitles.names"
        :value="feedbackFormData.names"
        @on-input="e => feedbackFormData.names = e"
    />
    <FormRadioSelector
        :options="options"
        :selected-option="selectedOptionId"
        :field-title="fieldTitles.options"
        @on-input="setSelectedOption"
    />
    <FormTextField
        :title="fieldTitles.isNeedHotel"
        :value="feedbackFormData.isNeedHotel"
        @on-input="e => feedbackFormData.isNeedHotel = e"
    />
    <AppButton
        :title="locale.presence.buttonTitle"
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