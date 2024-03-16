<template>
  <div class="bg-white px-6 pt-14 lg:px-8">
    <header class="mx-auto max-w-2xl pt-2 sm:pt-16 sticky top-0 bg-white">
      <div class="text-center">
        <h1 class="font-bold tracking-tight text-gray-900 transition"
          :class="[isSticky ? ['text-xl', 'sm:text-2xl', 'lg:text-3xl'] : ['text-2xl', 'sm:text-5xl', 'lg:text-6xl']]">
          Lettera aperta contro gli eccessi di
          Piracy Shield</h1>
        <section class="transition" :class="[isSticky ? ['py-4'] : ['py-8']]">
          <div class="mx-auto max-w-7xl transition px-4"
            :class="[isSticky ? ['sm:px-4', 'lg:px-6'] : ['sm:px-6', 'lg:px-8']]">
            <a href="#firma"
              class="text-white rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col"
              :class="[isSticky ? ['p-3', 'sm:py-5', 'lg:p-7', 'text-l', 'sm:text-xl', 'lg:text-2xl'] : ['p-5', 'sm:py-10', 'lg:p-15', 'text-xl', 'sm:text-2xl', 'lg:text-4xl']]">
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
        </section>
      </div>
    </header>
    <dl class="pt-2 sm:pt-16 flex items-center justify-center gap-x-6 py-8">
      <stats></stats>
    </dl>
    <lettera class="mx-auto max-w-2xl" id="lettera"></lettera>
    <firme class="mx-auto max-w-2xl" max-item="5"></firme>
  </div>
  <firma class="mx-auto max-w-2xl"></firma>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Lettera from '../components/Lettera.vue'
import Firma from '../components/Firma.vue'
import Firme from '../components/Firme.vue'
import Stats from '../components/Stats.vue'

const isSticky = ref(false)

onMounted(() => {
  let prev_prev_window_top = 0;
  let prev_window_top = 0;
  let prev_time = (new Date()).getTime();
  let prev_prev_time = (new Date()).getTime();
  let time = (new Date()).getTime();

  window.addEventListener('scroll', function () {
    const window_top = this.scrollY;
    time = (new Date()).getTime();
    if (window_top === 0) {
      isSticky.value = false;
    } else if ((prev_window_top - window_top) / (prev_time - time)  > 0 && (prev_prev_window_top - prev_window_top) / (prev_prev_time - prev_time) > 0) {
      isSticky.value = true;
    }
    prev_prev_window_top = prev_window_top;
    prev_window_top = window_top;
    prev_prev_time = prev_time;
    prev_time = time;
  })
});

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.transition {
  transition: font-size 150ms ease, padding 150ms ease, margin 150ms ease;
}
</style>
