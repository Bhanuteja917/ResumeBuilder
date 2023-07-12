<script setup>
    import InputText from 'primevue/inputtext';
    import { ref, inject, watch } from 'vue';
    import { useInformationStore } from '../stores/information';

    const field = ref('');
    const award = ref('');

    const save = inject('save');
    const saveInfo = inject('saveInfo');
    
    const store = useInformationStore();

    watch([save, saveInfo], () => {
        if (save.value || saveInfo.value) {
            store.achievements.push({
                field: field.value,
                award: award.value
            });
        }
    });
</script>

<template>
    <div class="p-fluid">
        <div class="field px-2 mb-2">
            <label for="field">Field</label>
            <InputText id="field" v-model="field"></InputText>
        </div>
        <div class="field px-2 mb-3">
            <label for="award">Award</label>
            <InputText id="award" v-model="award"/>
        </div>
    </div>
</template>