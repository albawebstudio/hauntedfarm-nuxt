<script setup lang="ts">
import { useGoogleMapData } from "~/composables/useGoogleMapData"
import { useSiteData } from "~/composables/useSiteData"
import { useContactData } from "~/composables/useContactData";

const config = useRuntimeConfig()
const apiKey = config.public.googleMapsApiKey
const {
  mapOptions,
  markerOptions
} = useGoogleMapData()
const { contact } = useContactData()
const { getEmailByAccount, address, phone } = useSiteData()
const email = getEmailByAccount('support')
</script>

<template>
  <section id="contact" class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
      <div class="text-center w-2/3 mx-auto">
        <h2 class="font-wolves-vs-monster text-4xl leading-relaxed font-bold tracking-tight text-orange-700">{{ contact.title }}</h2>
        <p v-for="content in contact.content" class="mt-3 text-gray-500 dark:text-gray-400" v-html="content"></p>
        <address class="text-orange-700">{{ address.street1 }}, {{ address.city }}, {{ address.state }} {{ address.postal_code }}</address>
      </div>

      <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <span class="inline-block p-3 text-primary-500 rounded-full bg-blue-100/80 dark:bg-gray-800" aria-description="email">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
            </span>
<!--            <span class="mt-4 text-base font-medium text-gray-800 dark:text-white h-24 align-middle">Email</span>-->
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Summon our team with a spooky email</p>
            <p class="mt-2 text-sm text-primary-500 dark:text-primary-400">{{ email.account }}-dot-{{ email.domain}}</p>
          </div>

          <div>
            <span class="inline-block p-3 text-primary-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
            </span>
<!--            <span class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</span>-->
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Ring our haunted hotline for spine-chilling assistance.</p>
            <p class="mt-2 text-sm text-primary-500 dark:text-primary-400"><NuxtLink :to="'tel:' + phone.raw" external>{{ phone.formatted }}</NuxtLink></p>
          </div>
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.com" required>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>

        <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
          <GoogleMap
              :api-key="apiKey"
              :styles="mapOptions.styles"
              style="width: 100%; height: 100%"
              :center="mapOptions.center"
              :zoom="mapOptions.zoom"
          >
            <CustomMarker :options="markerOptions">
              <div style="text-align: center">
                <div style="font-size: 1.125rem">The Haunted Farm</div>
                <NuxtImg src="/images/logo.svg" width="74" height="108" />
              </div>
              <InfoWindow>
                <div id="content">
                  <div id="siteNotice"></div>
                  <h4>Haunted Farm</h4>
                  <p>Your destination for a frightening night.</p>
                </div>
              </InfoWindow>
            </CustomMarker>
          </GoogleMap>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
