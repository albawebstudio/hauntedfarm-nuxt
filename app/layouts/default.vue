<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-timberwolf dark:bg-black'
  }
})
</script>

<template>
  <CommonHeader />
  <slot></slot>
  <CommonFooter />
</template>

<style scoped>

</style>
