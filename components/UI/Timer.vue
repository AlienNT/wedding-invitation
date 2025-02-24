<script setup lang="ts">
import CountdownItem from "~/components/UI/countdown/CountdownItem.vue";
import eventConfig from "#shared/utils/eventConfig";

type DayTitle = 'дней' | 'день' | 'дня' | 'днів'
type HourTitle = 'часов' | 'час' | 'часа' | 'годин' | 'година' | 'години'
type MinuteTitle = 'минут' | 'минута' | 'минуты' | 'хвилин' | 'хвилина' | 'хвилини'
type SecondTitle = 'секунд' | 'секунда' | 'секунды' | 'секунди'


interface TimeTitles {
  day: DayTitle[],
  hour: HourTitle[],
  minute: MinuteTitle[],
  second: SecondTitle[]
}

const props = defineProps<{
  date: Date,
}>()

const state = reactive({
  titles: {
    ru: {
      day: ['дней', 'день', 'дня'],
      hour: ['часов', 'час', 'часа'],
      minute: ['минут', 'минута', 'минуты'],
      second: ['секунд', 'секунда', 'секунды'],
    } as TimeTitles,
    ua: {
      day: ['днів', 'день', 'дня'],
      hour: ['годин', 'година', 'години'],
      minute: ['хвилин', 'хвилина', 'хвилини'],
      second: ['секунд', 'секунда', 'секунди'],
    } as TimeTitles
  }
})

const displayDate = computed(() => {
  return props.date
})

function displayTitle(field: keyof TimeTitles, value: number) {
  return state.titles
      [eventConfig.LOCALE as keyof typeof state.titles]
      [field]
      [getTitleIndex(value)]
}

function getTitleIndex(number: number) {
  const value: string = number.toString()

  const lastSymbol = value[value.length - 1]

  if ((+lastSymbol >= 2 && +lastSymbol <= 4) && ((number >= 20) || (number <= 4 && number >= 2))) {
    return 2
  } else if ((+lastSymbol === 0) || (+lastSymbol >= 5)) {
    return 0
  } else if (number === 1 || ((number > 20) && +lastSymbol === 1)) {
    return 1
  }
  return 0
}

</script>

<template>
  <div class="timer">
    <Countdown
        :date="displayDate"
        v-slot="{days, hours, minutes, seconds}"
        class="countdown-component"
    >
      <ul class="time-fields">
        <CountdownItem
            :title="displayTitle('day', days)"
            :value="days"
        />
        <CountdownItem
            :title="displayTitle('hour', hours)"
            :value="hours"
        />
        <CountdownItem
            :title="displayTitle('minute', minutes)"
            :value="minutes"
        />
        <CountdownItem
            :title="displayTitle('second', seconds)"
            :value="seconds"
        />
      </ul>
    </Countdown>
  </div>
</template>

<style scoped lang="scss">
.time-fields {
  display: flex;
  width: 100%;
  gap: 5px;

  > * {
    flex: 0 0 25%;
  }
}

.countdown-component {
  width: 100%;
}
</style>