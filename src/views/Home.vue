<template>
  <div class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl sm:py-32 lg:py-48">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Lettera aperta contro gli eccessi di
            Piracy Shield</h1>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#firma"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Firma
              anche tu</a>
            <a href="#lettera" class="text-sm font-semibold leading-6 text-gray-900">Leggi <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
        <dl class="mt-16 flex items-center justify-center gap-x-6">
          <stats></stats>
        </dl>
      </div>
      <lettera class="mx-auto max-w-2xl" id="lettera"></lettera>
      <firme class="mx-auto max-w-2xl" max-item="5"></firme>
      <firma class="mx-auto max-w-2xl"></firma>
    </div>
  </div>
</template>

<script setup>
import Lettera from '../components/Lettera.vue'
import Firma from '../components/Firma.vue'
import Firme from '../components/Firme.vue'
import Stats from '../components/Stats.vue'
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>