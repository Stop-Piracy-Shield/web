<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNotification } from 'vue-modern-notification';
import { sleep } from '../utils';
import router from '../router'

const toast = useNotification();

const route = useRoute()

const signature = ref({signature: { first_name: "", last_name: ""}})

const loading = ref(false)

const verifica = async (event) => {
  try {
    loading.value = true;
    const response = await fetch(`/api/signatures/${route.params.token}/revoke`, {
      method: "PUT",
      body: JSON.stringify({ "ok": "ok" }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    if(response.ok) {
      toast.success({title: "Abbiamo finito",text: "La firma correttamente è stata correttamente revocata", position: 'top-center', duration: 10000});
    } else {
      const error = await response.json();
      toast.error({title: "Errore",text: `La firma non è stata correttamente revocata (${error.error})`, position: 'top-center', duration: 10000});
    }

    loading.value = false;
    await sleep(1000);
    router.push('/');
  } catch (e) {
    toast.error({title: "Errore",text: "La firma non è stata correttamente revocata", position: 'top-center', duration: 10000});
    
    loading.value = false;
    await sleep(1000);
    router.push('/');
  }
}

async function getData() {
  try {
    const response = await fetch(`/api/signatures/${route.params.token}`);
    if(!response.ok) {
      const error = await response.json();
      toast.error({title: "Errore",text: `Token non valido (${error.error})`, position: 'top-center', duration: 10000});
      router.push('/');
    } else {
      const actualData = await response.json();
      signature.value = actualData;
    }
  } catch (e) {
    toast.error({title: "Errore",text: "Token non valido", position: 'top-center', duration: 10000});
    router.push('/');
  }
};

onMounted(() => getData());
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Ciao {{ signature.first_name }} {{ signature.last_name }}, premendo quì completerai revoca della tua firma</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="verifica">
        <div>
          <button type="submit" v-if="!loading"
            class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Revoca</button>
          <button type="submit" v-if="loading"
            class="flex w-full justify-center rounded-md bg-red-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm" disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
              </circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            Processing...
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>