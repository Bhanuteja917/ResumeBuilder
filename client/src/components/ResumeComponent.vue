<script setup>
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';
import { useInformationStore } from '../stores/information';
import { defineProps, ref, inject, watch } from 'vue';

const props = defineProps({
    name: String,
    text: String
});

const schoolName = ref('');
const startDate = ref('');
const endDate = ref('');
const description = ref('');

const save = inject('save');
const saveInfo = inject('saveInfo');


const store = useInformationStore();

watch([save, saveInfo], () => {
    if (save.value || saveInfo.value) {
        if (props.name === 'Institution Name') {
            store.education.push({
                school_name: schoolName.value,
                passing_year: `${startDate.value.getFullYear()}-${endDate.value.getFullYear()}`,
                description: description.value
            });
        } else if (props.name === 'Company Name') {
            store.experience.push({
                company_name: schoolName.value,
                passing_year: `${startDate.value.getFullYear()}-${endDate.value.getFullYear()}`,
                responsibilities: description.value
            });
        }
    }

});


</script>

<template>
    <div class="p-fluid">
        <div class="field px-2 mb-2">
            <label for="school-name">{{ props.name }}</label>
            <InputText id="school-name" v-model="schoolName" />
        </div>
        <div class="flex flex-column md:flex-row">
            <div class="field col-12 md:col-6 mb-2 py-0">
                <label for="start-date">Start Date</label>
                <Calendar id="start-date" v-model="startDate" showIcon view="year" dateFormat="yy"/>
            </div>
            <div class="field col-12 md:col-6 mb-2 py-0">
                <label for="end-date">End Date</label>
                <Calendar id="end-date" v-model="endDate" showIcon view="year" dateFormat="yy"/>
            </div>
        </div>
        <div class="field px-2 mb-2">
            <label for="description">{{ props.text }}</label>
            <Textarea id="description" v-model="description" rows="3" />
        </div>
    </div>
</template>