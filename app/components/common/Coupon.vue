<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QRCode from "~/components/common/QRCode.vue";

import {format} from "date-fns";

const emit = defineEmits<{
  (e: 'cancel'): void
}>()

// Create a template ref
const qrCodeRef = ref<HTMLElement | null>(null)

const config = useRuntimeConfig()
const endDate = config.public.endDate

const formatDate = (dateStr: string): string => {
  return format(new Date(dateStr), "MMMM do, yyyy"); // "do" adds the ordinal suffix automatically
};
const cancelModal = () => {
  emit('cancel');
};

onMounted(() => {
  if (qrCodeRef.value) {
    qrCodeRef.value.addEventListener('codeRendered', () => {
      if (qrCodeRef.value) {
        // Type assertion for the custom method
        (qrCodeRef.value as any).animateQRCode('MaterializeIn')
      }
    })
  }
})
</script>

<template>
  <div class="bg-gradient-to-br from-slate-900 to-slate-700 text-white text-center py-5 sm:py-10 px-0 sm:px-20 rounded-lg shadow-md relative">

<!--    <h3 class="text-2xl font-semibold mb-4">Save $3.00 off General Admission</h3>-->
    <div class="flex justify-between items-center pb-4 px-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
      <h3 class="text-lg font-semibold dark:text-white grow">Save $3.00 off General Admission</h3>
      <button @click="cancelModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white flex-none" data-modal-toggle="updateProductModal">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close modal</span>
      </button>
    </div>

    <div class="flex flex-row">
      <div class="basis-1/4"></div>
      <div class="basis-1/2">
        <QRCode
            contents="https://hauntedfarm.com/#tickets"
            module-color="#bf5b33"
            position-ring-color="#d71818"
            position-center-color="#bf5b33"
            width="300px"
            height="300px"
            margin="0 auto"
            animate
        />
      </div>
      <div class="basis-1/4"></div>
    </div>
    <p class="text-sm">Valid Till: {{ formatDate(endDate) }}</p>

    <div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
    <div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>

  </div>
</template>

<style scoped>

</style>
