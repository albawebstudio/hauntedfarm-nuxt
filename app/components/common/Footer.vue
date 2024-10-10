<script setup lang="ts">
import {useSiteData} from "~/composables/useSiteData";
import {useColorMode} from "@vueuse/core";
import {onMounted, ref} from "vue";
const { site } = useSiteData()

const logoSrc = ref('/images/logo-navigation.svg')

const date = new Date();
const currentYear = date.getFullYear();
</script>

<template>
  <footer class="bg-white rounded-lg shadow dark:bg-black m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <NuxtLink :to="site.url" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <NuxtImg :src="logoSrc" :alt="site.title" class="h-8" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-primary dark:text-orange-700 font-another-danger">{{ site.title }}</span>
        </NuxtLink>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li v-for="link in site.footer_links">
            <NuxtLink :to="link.to" :title="link.title" :external="link.external" class="hover:underline me-4 md:me-6">{{ link.displayText }}</NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {{ site.copyright }} - {{ currentYear }} <NuxtLink :to="site.url" :title="site.title" class="hover:underline">{{ site.legalName }}</NuxtLink>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<style scoped>

</style>
