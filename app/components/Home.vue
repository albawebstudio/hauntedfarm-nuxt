<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"
import { useHomeData } from "~/composables/useHomeData"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
const { site } = useSiteData()
const { home } = useHomeData()

const date = new Date()
const yrsHaunting = date.getFullYear() - site.value.established
</script>

<template>
  <section id="home" class="bg-center bg-no-repeat bg-black" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.4)),url('/images/main2.jpg')">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white font-american-frights md:text-5xl lg:text-6xl uppercase">Haunting for <span class="text-primary align-text-top tracking-uber-wide font-another-danger md:text-6xl lg:text-7xl pl-4">{{ yrsHaunting }}</span> Years</h1>
      <p v-for="content in home.content" class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48" v-html="content"></p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <template v-for="(cta, idx) in home.ctas" :key="idx">
          <NuxtLink
              :to="cta.href"
              :title="cta.label"
              :class="['inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg', cta.className]"
          >
            {{ cta.displayText }}
            <svg v-if="idx === 0" class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </NuxtLink>
        </template>
      </div>
      <div class="flex mx-auto my-24 w-full md:w-2/3">
        <NuxtLink
            v-for="social_link in site.social_links"
            :key="social_link.label"
            :to="social_link.href"
            external
            class="mx-auto flex"
            target="_blank">
          <div :class="social_link.bg_color" class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg">
              <client-only>
                <FontAwesomeIcon :icon="social_link.icon"
                                 :title="social_link.display_title"
                                 :class="social_link.color"
                                 class="text-2xl"/>
              </client-only>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
