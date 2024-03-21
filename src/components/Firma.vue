<script setup>
import { ref } from 'vue';
import { useNotification } from 'vue-modern-notification';

const toast = useNotification();

const loading = ref(false);

const privacy = ref(false);

const signature = async (event) => {
  const formData = new FormData(event.target);
  try {
    loading.value = true;
    const response = await fetch('/api/signatures', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      toast.success({
        title: 'Abbiamo quasi finito',
        text: 'Per completare la tua firma, controlla la tua casella email e clicca sul link',
        position: 'top-center',
        duration: 10000,
      });
    } else {
      const error = await response.json();
      toast.error({
        title: 'Errore',
        text: `Controlla i tuoi dati, c'è qualcosa che non va (${error.error})`,
        position: 'top-center',
        duration: 10000,
      });
    }
    loading.value = false;
  } catch (e) {
    loading.value = false;
    toast.error({
      title: 'Errore',
      text: "Controlla i tuoi dati, c'è qualcosa che non va",
      position: 'top-center',
      duration: 10000,
    });
  }
};
</script>

<template>
  <div class="bg-white px-6 pb-24 sm:pb-32 lg:px-8">
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="py-3 sm:py-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="firma">
        Firma anche tu
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Bastano nome, cognome ed una email.</p>
    </div>
    <div class="mx-auto max-w-2xl">
      <p class="text-gray-600 px-4">
        Per firmare a nome di una azienda, associazione, organizzazione, istituzione inviare una mail a
        <a class="font-medium text-blue-600 hover:underline" href="mailto:info@stop-piracy-shield.it"
          >info@stop-piracy-shield.it</a
        >.
      </p>
    </div>
    <form @submit.prevent="signature" method="POST" class="mx-auto max-w-2xl mt-8 sm:mt-10">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Nome</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="first_name"
              id="first_name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Cognome</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="last_name"
              id="last_name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="org" class="block text-sm font-semibold leading-6 text-gray-900">Affiliazione (opzionale)</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="org"
              id="org"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="relative flex gap-x-3 sm:col-span-2">
          <div class="flex h-6 items-center">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              class="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
              v-model="privacy"
            />
          </div>
          <div class="text-sm leading-6">
            <label for="privacy" class="font-medium text-gray-900">Privacy</label>
            <p class="text-gray-500">
              Accetto l'<a class="font-medium text-blue-600 hover:underline" href="/privacy.pdf"
                >Informativa sulla privacy</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          v-if="!privacy"
          class="flex w-full justify-center rounded-md bg-indigo-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
          disabled
        >
          Conferma
        </button>
        <button
          type="submit"
          v-else-if="!loading"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Conferma
        </button>
        <button
          type="submit"
          v-else-if="loading"
          class="flex w-full justify-center rounded-md bg-indigo-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
          disabled
        >
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Elaborazione in corso...
        </button>
      </div>
    </form>
  </div>
</template>
