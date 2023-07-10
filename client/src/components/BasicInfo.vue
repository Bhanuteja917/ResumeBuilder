<script setup>
    import Card from 'primevue/card';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';
    import Chips from 'primevue/chips';

    import { ref } from 'vue';

    const skills = ref([]);
</script>

<template>
    <div class="form-content">
        <Card>
            <template v-slot:title>
                <h3 class="px-2 font-bold">Basic</h3>
            </template>
            <template v-slot:subtitle>
               <p class="px-2">Enter your basic information</p> 
            </template>
            <template v-slot:content>
                    <div class="p-fluid">
                        <div class="flex flex-column md:flex-row">
                            <div class="field col-12 md:col-6 mb-2 py-0">
                                <label for="firstname">Firstname</label>
                                <InputText id="firstname" v-model="firstname"></InputText>
                            </div>
                            <div class="field col-12 md:col-6 mb-2 py-0">
                                <label for="lastname">Lastname</label>
                                <InputText id="lastname" v-model="lastname"/>
                            </div>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="email">Email</label>
                            <InputText id="email" v-model="email"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="phone">Phone Number</label>
                            <InputText id="phone" v-model="phone"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="url">LinkedIn URL</label>
                            <InputText id="url" v-model="url"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="job-title">Job Title</label>
                            <InputText id="job-title" v-model="jobTitle"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="objective">Career Objective</label>
                            <Textarea id="objective" v-model="objective" rows="3"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="skills">Skills</label>
                            <Chips v-model="skills" separator=","  />
                        </div>
                    </div>
            </template>
        </Card>
    </div>
</template>