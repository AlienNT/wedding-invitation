<script setup lang="ts">
import {Html, Row, Hr, Column, Container, Head, Text, Heading, Section} from '@vue-email/components'
import type {MailMessageInterface} from "#shared/types";

const props = withDefaults(defineProps<MailMessageInterface>(), {
  isNeedHotel: undefined,
})

const templateLabels = {
  guests: 'Гості',
  canBePresent: 'Присутність',
  needHotel: 'Необхідність у готелі'
}

const styleColor = computed(() => {
  switch (props.isCanBePresent.value) {
    case "yes":
      return '#63aa53'
    case "no":
      return '#d86666'
    case "unknown":
      return '#d6b166'
    default:
      return '#f6f6f6'
  }
})

const headerSectionStyle = computed(() => {
  return `background-color: ${styleColor.value}; padding: 20px; text-align: center;`
})

const labelStyle = computed(() => {
  return `font-size: 18px; font-weight: bold; color: #333;`
})

const valueStyle = computed(() => {
  return `border: 1px solid #ddd; padding: 15px; min-height: 20px; border-radius: 5px; font-size: 16px`
})

</script>

<template>
  <Html>
  <Head/>
  <Body style="font-family: sans-serif;">
  <Container style="background-color: #fdfdfd">
    <Section :style="headerSectionStyle">
      <Text style="font-size: 24px; font-weight: bold; color: #ffffff;">Відповідь на запрошення</Text>
    </Section>

    <Section style="padding: 20px;">
      <Row style="margin-top: 20px;">
        <Column>
          <Text :style="labelStyle">{{templateLabels.guests}}:</Text>
          <Text :style="`${valueStyle}; font-weight: bold;`">{{ names }}</Text>
        </Column>
      </Row>

      <Row style="margin-top: 15px;">
        <Column>
          <Text :style="labelStyle">{{templateLabels.canBePresent}}:</Text>
          <Text :style="`${valueStyle}; border-left: 5px solid ${styleColor};`">{{ isCanBePresent.title }}</Text>
        </Column>
      </Row>

      <Row style="margin-top: 15px;" v-if="isCanBePresent.value === 'yes'">
        <Column>
          <Text :style="labelStyle">{{templateLabels.needHotel}}:</Text>
          <Text :style="valueStyle">{{ isNeedHotel }}</Text>
        </Column>
      </Row>
    </Section>

    <Section style="background-color: #f6f6f6; padding: 15px; text-align: center;">
      <Text style="font-size: 12px; color: #777;">
        Це автоматичне повідомлення, будь ласка, не відповідайте на нього.
      </Text>
    </Section>
  </Container>
  </Body>
  </Html>
</template>