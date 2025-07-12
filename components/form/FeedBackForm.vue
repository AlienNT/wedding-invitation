<script setup lang="ts">

import FormRadioSelector from "~/components/form/FormRadioSelector.vue";
import AppButton from "~/components/UI/AppButton.vue";
import {useFeedback} from "~/store/feedback";
import {getKeys, isNotEmpty} from "#shared/utils";
import AppLoader from "~/components/UI/AppLoader.vue";
import {render} from "@vue-email/render";
import {FeedBackMail} from "#components";

const {feedbackFormData, sendFeedback, setSelectedOption, selectedOptionId, options} = useFeedback()
const {locale} = useLocale()

const isLoading = ref(false);
const isEdited = ref(false);
const isSend = ref(false);
const isError = ref(false);

const fieldTitles = {
  names: 'Прізвище та Ім\'я (перерахуйте всіх)',
  options: "Чи зможете ви бути присутнім",
  isNeedHotel: 'Необхідність у готелі'
}

const isValid = computed(() => {
  return getKeys(feedbackFormData.value).every(key => {
    if (key === 'isNeedHotel') {
      if (feedbackFormData.value.isCanBePresent.value === 'no' || feedbackFormData.value.isCanBePresent.value === 'unknown') {
        return true
      }
    }
    return isNotEmpty(feedbackFormData.value[key])
  })
})

const isDisabled = computed(() => {
  return (!isValid.value || (!isEdited.value && isSend.value)) || isLoading.value;
})

const buttonTitle = computed(() => {
  if (isSend.value) {
    return 'Відправлено'
  }
  if (isError.value) {
    return 'Помилка'
  }
  return locale.value.presence.buttonTitle
})

const buttonClass = computed(() => {
  if (isSend.value) {
    return 'success'
  }
  if (isError.value) {
    return 'error'
  }
})

async function onSubmit() {
  if (!isValid.value) return;

  isEdited.value = false;
  isLoading.value = true;

  await sendFeedback({
    message: await render(FeedBackMail, {
      names: feedbackFormData.value.names,
      isCanBePresent: feedbackFormData.value.isCanBePresent,
      isNeedHotel: feedbackFormData.value.isNeedHotel,
    })
  })
      .then(res => {
        console.log({res})
        isSend.value = true
        isError.value = false
      })
      .catch(error => {
        console.log({error})
        isError.value = true
      })
      .finally(() => {
        isLoading.value = false;
      })
}

function onInput(func: () => any) {
  isEdited.value = true
  isSend.value = false
  isError.value = false
  func()
}

</script>

<template>
  <form class="form" @submit.prevent="onSubmit">
    <FormTextField
        :title="fieldTitles.names"
        :value="feedbackFormData.names"
        placeholder="Прізвище Ім'я, Прізвище..."
        @on-input="e => onInput(() => feedbackFormData.names = e)"
    />
    <FormRadioSelector
        :options="options"
        :selected-option="selectedOptionId"
        :field-title="fieldTitles.options"
        @on-input="e => onInput(() => setSelectedOption(e))"
    />
    <FormTextField
        v-if="feedbackFormData.isCanBePresent?.value !== 'no' && feedbackFormData.isCanBePresent?.value !== 'unknown'"
        :title="fieldTitles.isNeedHotel"
        :value="feedbackFormData.isNeedHotel"
        placeholder="Вкажіть вимоги та побажання"
        @on-input="e => onInput(() => feedbackFormData.isNeedHotel = e)"
    />
    <AppButton
        :class="buttonClass"
        :title="buttonTitle"
        :disabled="isDisabled"
    />
    <transition
        appear
        name="fade"
    >
      <AppLoader
          v-if="isLoading"
          class="form-loader"
      />
    </transition>
  </form>
</template>

<style scoped lang="scss">
@use 'assets/styles/media';
@use 'assets/styles/transitions';

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 15px;
  position: relative;

  @media #{media.$mediaScreenMedium} {
    gap: 15px;
  }
}

.success {
  background: green;
}

.error {
  background: red;
}

.form-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 16px;
  top: 0;
  left: 0;
}

</style>