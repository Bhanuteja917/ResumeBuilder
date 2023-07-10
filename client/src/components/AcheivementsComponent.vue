<script setup>
    import InputText from 'primevue/inputtext';
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