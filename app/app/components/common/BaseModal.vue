<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <ClientOnly>
    <Teleport to="#modals">
      <div v-if="show" class="">
        <div class="fixed inset-0 bg-gray-900 opacity-60"></div>

        <div class="fixed inset-0 flex items-center justify-center">
          <div class="w-full md:w-1/2 h-auto max-h-4/5 overflow-scroll bg-white text-black p-4 rounded-lg shadow-md">
            <slot></slot>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>

</style>
