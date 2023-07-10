<script setup>  
  import BasicInfo from './BasicInfo.vue';
  import ResumeForm from './ResumeForm.vue';
  import AcheivementsInfo from './AcheivementsInfo.vue';
</script>

<template>
  <div class="form flex flex-column gap-3">
    <BasicInfo></BasicInfo>
    <ResumeForm 
      title="Education" 
      subtitle="Enter your education details" 
      name="Institution Name" 
      text="Description"
    />
    <ResumeForm 
      title="Experience" 
      subtitle="Enter your experience details" 
      name="Company Name" 
      text="Responsibilities"
    />
    <AcheivementsInfo></AcheivementsInfo>
  </div>
</template>

<style scoped>
</style>