<script setup>
    import InputText from 'primevue/inputtext';
    import Calendar from 'primevue/calendar';
    import Textarea from 'primevue/textarea';

    const props = defineProps({
        name: String,
        text: String
    });
</script>

<template>
        <div class="p-fluid">
            <div class="field px-2 mb-2">
                <label for="school-name">{{ props.name }}</label>
                <InputText id="school-name" v-model="schoolName"/>
            </div>
            <div class="flex flex-column md:flex-row">
                <div class="field col-12 md:col-6 mb-2 py-0">
                    <label for="start-date">Start Date</label>
                    <Calendar id="start-date" v-model="startDate" showIcon />
                </div>
                <div class="field col-12 md:col-6 mb-2 py-0">
                    <label for="end-date">End Date</label>
                    <Calendar id="end-date" v-model="endDate" showIcon />
                </div>
            </div>
            <div class="field px-2 mb-2">
                <label for="description">{{ props.text }}</label>
                <Textarea id="description" v-model="description" rows="3"/>
            </div>
        </div>
</template>