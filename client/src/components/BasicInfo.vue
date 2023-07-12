<script setup>
    import Card from 'primevue/card';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';
    import Chips from 'primevue/chips';
    import Button from 'primevue/button';
    import { useInformationStore } from '../stores/information';

    const store = useInformationStore();
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
                                <InputText id="firstname" v-model="store.firstName"></InputText>
                            </div>
                            <div class="field col-12 md:col-6 mb-2 py-0">
                                <label for="lastname">Lastname</label>
                                <InputText id="lastname" v-model="store.lastName"/>
                            </div>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="email">Email</label>
                            <InputText id="email" v-model="store.email"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="phone">Phone Number</label>
                            <InputText id="phone" v-model="store.phone"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="url">LinkedIn URL</label>
                            <InputText id="url" v-model="store.url"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="job-title">Job Title</label>
                            <InputText id="job-title" v-model="store.jobTitle"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="objective">Career Objective</label>
                            <Textarea id="objective" v-model="store.careerObjective" rows="3"/>
                        </div>
                        <div class="field px-2 mb-2">
                            <label for="skills">Skills</label>
                            <Chips v-model="store.skills" separator=","  />
                        </div>
                        <div class="field px-2 mb-2 mt-4">
                            <Button label="Save" @click="saveInfo"></Button>
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
</style>