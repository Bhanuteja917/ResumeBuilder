<script setup>
  import SideBar from './components/SideBar.vue';
  import FormComponent from './components/formComponent.vue';
  import Templates from './components/TemplatesBar.vue';
  import ScrollPanel from 'primevue/scrollpanel';
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
