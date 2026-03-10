<script setup lang="ts">
import { useMediaData } from "~/composables/useMediaData";
const { media } = useMediaData();

</script>

<template>
  <section id="media" class="py-12 bg-gray-400" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.4)),url('/images/media.jpg')">
    <div class="mx-auto my-12 w-full text-center">
      <h2 class="font-wolves-vs-monster text-orange-600 text-3xl md:text-4xl leading-relaxed">{{ media.title }}</h2>
      <p v-for="content in media.content" class="text-lg w-full md:w-2/3 text-slate-100 my-8" v-html="content" />
    </div>
    <div class="flex min-h-screen w-full flex-wrap content-center justify-center p-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div v-for="el in media.mediaEl" class="w-80 bg-white p-3 pb-9">
          <NuxtLink :to="el.link.href" :title="el.title" external target="_blank">
            <NuxtImg :src="el.asset.src" :alt="el.asset.alt" class="h-52 w-full object-cover" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
