<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { useSiteData } from "~/composables/useSiteData";
import LogoSrc from "/public/images/logo-navigation.svg";

const { site } = useSiteData()

const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <header class="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-10 w-full shadow-md">
    <nav>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink to="/#home"
            external
            class="flex items-center space-x-3 rtl:space-x-reverse">
          <LogoSrc :alt="site.title"
                   :fontControlled="false"
                   class="h-16"/>
          <span class="self-center text-4xl font-semibold whitespace-nowrap text-primary dark:text-orange-700 font-another-danger">{{ site.title }}</span>
        </NuxtLink>
        <button @click="toggleNav"
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div :class="showMenu ? 'flex' : 'hidden'" id="navbar-default" class="w-full md:block md:w-auto lg:mr-3">
          <ul class="font-oswald font-medium lg:text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-full">
            <template v-for="link in site.links">
              <li>
                <NuxtLink :to="link.to"
                          :external="link.external"
                          :title="link.title"
                          class="block py-2 px-3 text-gray-800 dark:text-gray-100 rounded hover:text-orange-700 md:p-0">
                  {{ link.displayText }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
