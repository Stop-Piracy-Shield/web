<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['max-item']);

var singatures = ref([]);
var showLess = ref(true);

async function getData() {
  try {
    const response = await fetch('/api/signatures');
    const actualData = await response.json();
    var maxItem = 10;
    if (props.maxItem === '0') {
      maxItem = actualData.length;
    } else {
      maxItem = parseInt(props.maxItem);
    }
    singatures.value = actualData;
  } catch (e) {
    console.error('Error: ', e);
  }
}

onMounted(() => getData());
</script>

<template>
  <div>
    <h2 class="py-3 sm:py-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl" id="cofirmatori">
      Co-firmatari:
    </h2>
    <ul class="divide-y divide-gray-200">
      <li class="py-2 sm:py-3" v-for="signature in showLess ? singatures.slice(0, maxItem) : singatures">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ signature.first_name }} {{ signature.last_name }}
            </p>
            <p class="text-sm font-medium text-gray-500 truncate" v-if="signature.org">
              Affiliazione:
              {{ signature.org }}
            </p>
            <p class="text-sm text-gray-500 truncate" v-if="signature.message">
              Messaggio:
              {{ signature.message }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <button
      v-if="singatures.length > maxItem && showLess"
      class="text-sm font-semibold leading-6 text-gray-900"
      @click="showLess = !showLess"
    >
      Vedi tutte le firme <span aria-hidden="true">→</span>
    </button>
    <button
      v-else-if="singatures.length > maxItem"
      class="text-sm font-semibold leading-6 text-gray-900"
      @click="showLess = !showLess"
    >
      Vedi solo le ultime 5 firme <span aria-hidden="true">→</span>
    </button>
  </div>
</template>
