<script setup lang="ts">
import { useTicketData } from "~/composables/useTicketData";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const { ticket } = useTicketData();
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
function formatCurrency(price: number): string {
  return USDollar.format(price);
}
</script>

<template>
  <!-- component -->
  <section id="tickets" class="py-24 sm:py-32" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.4)),url('/images/tickets.jpg')">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="font-wolves-vs-monster text-4xl leading-relaxed font-bold tracking-tight text-orange-700">{{ ticket.title }}</h2>
        <p v-for="content in ticket.content" :key="content.id" class="mt-6 text-lg leading-8 text-gray-400" v-html="content"></p>
      </div>
      <div v-for="pass in ticket.passes" class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="font-another-danger text-2xl font-bold tracking-tight text-secondary">{{pass.admission.name }}</h3>
          <p v-for="content in pass.content" class="mt-6 text-base leading-7 text-secondary-500" v-html="content"></p>
          <div class="mt-10 flex items-center gap-x-4">
            <h4 class="flex-none text-sm font-semibold leading-6 text-orange-600">What’s included</h4>
            <div class="h-px flex-auto bg-gray-100"></div>
          </div>
          <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-secondary-600 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            <li v-for="attraction in pass.attractions" class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              {{ attraction }}
            </li>
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div class="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div class="mx-auto max-w-xs px-8">
              <p class="text-base font-semibold text-gray-300">{{ pass.admission.label }}</p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span class="font-american-frights text-orange-600 text-5xl font-bold tracking-tight">{{ formatCurrency(pass.admission.price) }}</span>
                <span class="text-sm font-semibold leading-6 tracking-wide text-gray-300">{{ pass.admission.currency }}</span>
              </p>
              <NuxtLink :to="ticket.cta.href" class="mt-10 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"><font-awesome-icon icon="fas fa-ticket"/> {{ ticket.cta.label }}</NuxtLink>
              <p class="mt-6 text-xs leading-5 text-gray-200">{{ pass.admission.terms }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
