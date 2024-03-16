<template>
  <div class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sticky top-0 bg-white">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Lettera aperta contro gli eccessi di
            Piracy Shield</h1>
          <section class="py-8">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                class="py-8 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row">
                <div class="block text-center mb-5 lg:text-left lg:mb-0">
                  <a href="#firma" class="text-4xl text-white font-semibold mb-5 lg:mb-2">
                    <div class="flex justify-between items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>&nbsp;
                      Firma anche tu&nbsp;
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <dl class="mt-16 flex items-center justify-center gap-x-6 py-8">
        <stats></stats>
      </dl>
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