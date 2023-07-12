<script setup>
  import SideBar from './components/SideBar.vue';
  import FormComponent from './components/FormComponent.vue';
  import Templates from './components/TemplatesBar.vue';
  import Button from 'primevue/button';
  import ScrollPanel from 'primevue/scrollpanel';
  import { provide, ref } from 'vue';
  import { useInformationStore } from './stores/information';
  import axios from 'axios';
  import { saveAs } from 'file-saver';

  const store = useInformationStore();

  const saveInfo = ref(false);
  provide('saveInfo', saveInfo);

  // async function postData(jsonData) {
  //     try {
  //       const response = await axios.post('http://localhost:8081/generate', jsonData);
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // }

  async function postData(jsonData) {
    try {
      const response = await axios.post('http://localhost:8081/generate', jsonData, {
        responseType: 'blob' // Set the response type to 'blob' to receive the response as a Blob
      });

      // Get the filename from the response headers or set a custom filename
      const contentDisposition = response.headers['content-disposition'];
      const filename = contentDisposition ? contentDisposition.split('filename=')[1] : 'document.pdf';

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Save the Blob as a file using FileSaver.js
      saveAs(blob, filename);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const download = () => {
    saveInfo.value = true;
    store.achievements = []
    store.education = []
    store.experience = []
    setTimeout(() => {
      saveInfo.value = false;
    }, 3000);
    
    // Get the JSON data from the store and send an api request to the server

    const jsonData = {
      template_id: store.template.id,
      personal_information: {
        name: store.firstName,
        last_name: store.lastName,
        email_address: store.email,
        phone_number: store.phone,
        linkedin_url: store.url,
      },
      job_title: store.jobTitle,
      career_objective: store.careerObjective,
      skills: store.skills,
      education: store.education,
      experience: store.experience,
      achievements: store.achievements,
    }
    setTimeout(() => {
      postData(jsonData);
    }, 3000);
}
</script>

<template>
  <div class="grid-container fixed w-full">
    <div class="gridItem">
      <SideBar></SideBar>
    </div>
    <div class="gridItem">
        <ScrollPanel style="height: 100%" class="custom-bar">
          <FormComponent></FormComponent>
        </ScrollPanel>
    </div>
    <div class="gridItem">
      <ScrollPanel style="height: 100%" class="custom-bar">
        <Templates></Templates>
        <div class="p-fluid mb-3 px-3">
          <Button label="Download" class="button p-my-3 p-mx-3" @click="download()"></Button>
        </div>
      </ScrollPanel>
    </div>
  </div>
</template>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 0.1fr 1fr 1fr;
  }
  .gridItem {
    height: 100vh;
  }

  .form {
    height: 100%;
    padding: 1rem;
  }

  ::v-deep(.p-scrollpanel.custom-bar .p-scrollpanel-wrapper) {
    border-right: 10px solid var(--surface-ground);
  }

  ::v-deep(.p-scrollpanel.custom-bar .p-scrollpanel-bar) {
    background-color: var(--primary-300);
    opacity: 1;
    transition: background-color 0.3s;
  }

  ::v-deep(.p-scrollpanel.custom-bar .p-scrollpanel-bar:hover) {
    background-color: var(--primary-400);
  }
</style>
