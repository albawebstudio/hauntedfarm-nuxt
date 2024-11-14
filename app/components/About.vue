<script setup lang="ts">
import { useAboutData } from "~/composables/useAboutData";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const { about } = useAboutData();
</script>

<template>
  <section id="about" class="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">

    <div class="text-center w-1/2 mx-auto mb-12">
      <h2 class="font-wolves-vs-monster text-amber-700 text-4xl leading-relaxed uppercase">{{ about.title }}</h2>
      <div class="text-secondary mt-8">{{ about.content }}</div>
    </div>

    <div class="w-full sm:w-2/3 mx-auto grid lg:grid-cols-2 lg:gap-5">
      <div v-for="item in about.items" class="rounded-xl bg-white p-6 pb-8 text-center shadow-xl mb-8">
        <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-700/40">
          <font-awesome-icon :icon="item.icon" class="text-secondary leading-10" />
        </div>
        <h3 class="font-wolves-vs-monster text-darken mb-3 text-xl font-bold uppercase lg:px-14">{{ item.title }}</h3>
        <p class="px-4 text-gray-500 tracking-tight">{{ item.content }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
