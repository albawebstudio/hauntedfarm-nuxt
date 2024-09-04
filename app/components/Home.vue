<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const { site } = useSiteData()

const date = new Date()
const yrsHaunting = date.getFullYear() - site.value.established
</script>

<template>
  <section id="home" class="bg-center bg-no-repeat bg-black" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.4)),url('/images/main2.jpg')">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white font-american-frights md:text-5xl lg:text-6xl uppercase">Haunting for <span class="text-primary-600 font-unthinkers px-2">{{ yrsHaunting }}</span> Years</h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Welcome to <span class="text-white font-another-danger px-2">The Haunted Farm</span> and <span class="text-white font-another-danger px-2">The Walking Dead</span>!<br/>
        Come join us in 2024 for our most <span class="text-primary-600 font-wolves-vs-monster">chilling</span> season at The Haunted Farm
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <NuxtLink to="/#tickets" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Get started
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </NuxtLink>
        <NuxtLink to:="/#about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
          Learn more
        </NuxtLink>
      </div>
      <div class="flex mx-auto my-24 w-2/3">
        <NuxtLink v-for="social_link in site.social_links" :key="social_link.label" :to="social_link.href" external class="mx-auto flex" target="_blank">
          <div :class="social_link.bg_color" class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg">
            <NuxtImg :src="social_link.icon" :title="social_link.display_title" :class="social_link.color" width="30" height="30" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
