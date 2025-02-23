<script setup lang="ts">
import MailMessageRow from "~/components/mailMessage/MailMessageRow.vue";
import MailMessageTable from "~/components/mailMessage/MailMessageTable.vue";
import MailMessageHead from "~/components/mailMessage/MailMessageHead.vue";
import MailMessageBody from "~/components/mailMessage/MailMessageBody.vue";
import type {FeedbackMessageInterface, RadioSelectorOptionInterface} from "~/store/feedback";

type MailMessageProps = FeedbackMessageInterface & {
  option?: RadioSelectorOptionInterface;
}

const props = defineProps<MailMessageProps>()

const headColor = computed(() => {
  switch (props.isCanBePresent) {
    case 'yes':
      return 'green'
    case 'no':
      return 'red'
    case "unknown":
      return 'orange'
  }
})

const headStyles = computed(() => {
  return [
    `color: ${headColor.value}`,
    'font-size: 24px',
    'font-weight: bold',
  ].join('; ')
})

</script>

<template>
  <MailMessageTable
      styles="padding: 15px"
  >
    <MailMessageHead
        :value="`От: ${names}`"
        :styles="headStyles"
    />
  </MailMessageTable>
  <MailMessageBody>
    <MailMessageRow>
      <MailMessageCol
          value="Присутствие:"
      />
      <MailMessageCol
          :value="option?.title || 'Не указано'"
      />
    </MailMessageRow>
    <MailMessageRow>
      <MailMessageCol
          value="Надобность в отеле:"
      />
      <MailMessageCol
          v-if="isNeedHotel"
          :value="isNeedHotel"
      />
      <MailMessageCol
          v-else
          value="Нет"
      />
    </MailMessageRow>
  </MailMessageBody>
</template>