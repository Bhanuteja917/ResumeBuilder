<script setup>
  import sideBar from './components/sideBar.vue'
  import formComponent from './components/formComponent.vue'
  import templates from './components/templates.vue';
</script>

<template>
  <div class="grid-container">
    <div class="gridItem">
      <sideBar></sideBar>
    </div>
    <div class="gridItem">
      <formComponent></formComponent>
    </div>
    <div class="gridItem">
      <templates></templates>
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
</style>
