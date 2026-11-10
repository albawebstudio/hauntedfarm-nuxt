<script setup lang="ts">
import { ref } from "vue"
import { useFaqData } from "~/composables/useFaqData"

const { faqSection, faqItems } = useFaqData()

const openIndex = ref(0)

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" class="w-full px-4 py-10 sm:px-6 lg:px-24 lg:py-14 mx-auto bg-gray-800">
    <!-- Grid -->
    <div class="grid md:grid-cols-5 gap-10">
      <div class="md:col-span-2">
        <div class="max-w-xs">
          <h2 class="font-wolves-vs-monster text-amber-700 text-2xl font-bold md:text-4xl md:leading-tight text-foreground uppercase">{{ faqSection.title }}</h2>
          <p class="text-secondary mt-1 hidden md:block text-muted-foreground-2">{{ faqSection.content }}</p>
        </div>
      </div>
      <!-- End Col -->

      <div class="md:col-span-3">
        <!-- Accordion -->
        <div class="hs-accordion-group divide-y divide-line-2">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="text-white pb-3"
            :class="{ 'pt-6': index > 0 }"
            :id="`faq-heading-${index}`"
          >
            <button
              type="button"
              class="font-oswald group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-foreground rounded-lg transition hover:text-muted-foreground-1 focus:outline-hidden"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-collapse-${index}`"
              @click="toggleFaq(index)"
            >
              {{ item.question }}
              <svg
                class="shrink-0 size-5 text-muted-foreground-2 group-hover:text-muted-foreground-1"
                :class="openIndex === index ? 'hidden' : 'block'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              ><path d="m6 9 6 6 6-6"/></svg>
              <svg
                class="shrink-0 size-5 text-muted-foreground-2 group-hover:text-muted-foreground-1"
                :class="openIndex === index ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              ><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div
              :id="`faq-collapse-${index}`"
              class="faq-answer-panel"
              :class="{ 'faq-answer-panel--open': openIndex === index }"
              role="region"
              :aria-labelledby="`faq-heading-${index}`"
              :aria-hidden="openIndex !== index"
            >
              <div class="faq-answer-panel__inner">
                <p class="text-muted-foreground-2 pb-1" v-html="item.answer" />
              </div>
            </div>
          </div>
        </div>
        <!-- End Accordion -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </section>
</template>

<style scoped>
.faq-answer-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease-in-out;
}

.faq-answer-panel--open {
  grid-template-rows: 1fr;
}

.faq-answer-panel__inner {
  min-height: 0;
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  .faq-answer-panel {
    transition: none;
  }
}
</style>
