<template>
  <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
    <dt class="text-base leading-7">{{ stat.name }}</dt>
    <dd class="text-2xl font-bold leading-9 tracking-tight text-center">{{ stat.value }}</dd>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = ref([
  { name: 'Firme', value: '' },
])

async function getData() {
  try {
    const response = await fetch("/api/signatures");
    const count = [...await response.json()].length;
    stats.value = [
      { name: 'Firme', value: count },
    ];
  } catch (e) {
    console.error('Error: ', e)
  }
};

onMounted(() => getData());
</script>