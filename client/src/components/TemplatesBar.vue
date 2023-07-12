<script setup>
import Image from 'primevue/image';
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';

import { PhotoService } from '../services/PhotoService';
import { useInformationStore } from '../stores/information'

import { ref, onMounted } from 'vue';

const images = ref([]);
const store = useInformationStore();

onMounted(() => {
  PhotoService.getImages().then(data => images.value = data);
  store.template = {
    id: '1',
    title: 'Basic Template',
    src: './src/assets/templates/1.png',
  }
});
</script>

<template>
  <div class="p-fluid m-3">
    <Card>
      <template v-slot:title>
        <h3 class="px-2 font-bold">Templates</h3>
      </template>
      <template v-slot:subtitle>
        <p class="px-2">Select a template and scroll down to submit and download your resume</p>
      </template>
      <template v-slot:content>
        <div class="card flex flex-column md:align-items-center m-0 p-0">
          <div class="mb-3 p-fluid w-full">
            <Dropdown v-model="store.template" :options="images" optionLabel="id" placeholder="Select a template"
              class="w-full" />
          </div>
          <div>
            <Image :src="store?.template?.src" alt="Image" class="card" width="350" preview />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 1rem;
}

:deep .p-card-content {
  padding-top: 1rem;
}
</style>