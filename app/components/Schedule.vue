<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useSiteData } from "~/composables/useSiteData";
import { useScheduleData } from "~/composables/useScheduleData";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const { site } = useSiteData();
const { schedule } = useScheduleData();
const eventDate = (startDate: Date): number => {
  return startDate.getDate();
}
function getMonthAbbr(startDate: Date): string {
  return startDate.toLocaleString('default', { month: 'short' });
}
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const counter = ref(0);

const isEvenRow = computed(() => {
  return counter.value % 2 === 0;
});

onMounted(() => {
  counter.value++;
});
</script>

<template>
  <section id="schedule" class="py-12 bg-gray-800">
    <div class="mx-auto w-1/2 my-12">
      <h2 class="font-wolves-vs-monster text-amber-700 text-4xl leading-relaxed text-center uppercase">{{ schedule.title }}</h2>
      <div class="text-secondary text-center mt-8">{{ schedule.content }}</div>

      <!-- component -->
      <div v-for="(scheduleEvent, idx) in schedule.events" :key="scheduleEvent.name" itemscope itemtype="https://schema.org/Event" class="mt-8 lg:flex shadow rounded-lg border border-gray-400">
        <div :class="{ 'bg-black': (idx % 2 === 0) , 'bg-primary-600': (idx % 2 === 1) }" class="rounded-lg lg:w-4/12 py-4 block h-full shadow-inner">
          <div class="text-center tracking-wide">
            <div class="text-white font-bold text-4xl ">{{ eventDate(scheduleEvent.startDate) }}</div>
            <div class="text-white font-normal text-2xl">{{ getMonthAbbr(scheduleEvent.startDate) }}</div>
          </div>
        </div>
        <div class="w-full lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
          <div class="flex flex-row lg:justify-start justify-center">
            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              <i class="far fa-clock"></i> 7:00 - 11:00 PM
            </div>
            <client-only>
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                {{ scheduleEvent.tagLine }}
              </div>
            </client-only>
          </div>
          <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            The Big Show
          </div>

          <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
            {{ site.address.street1 }}, {{ site.address.city }}, {{ site.address.state }} {{ site.address.postal_code }}
          </div>
        </div>
        <div class="rounded-r-lg flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
          <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
            <font-awesome-icon icon="fas fa-ticket" /> {{ USDollar.format(scheduleEvent.offers.price) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
