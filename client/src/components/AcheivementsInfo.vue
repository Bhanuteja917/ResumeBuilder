<script setup>
    import Card from 'primevue/card';
    import AcheivementsComponent from './AcheivementsComponent.vue';
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';

    import { provide, ref } from 'vue';
    import { useInformationStore } from '../stores/information';

    const componentList = ref([AcheivementsComponent])
    const store = useInformationStore();

    const save = ref(false);
    provide('save', save);
    
    const saveData = () => {
        store.achievements = [];
        save.value = true;
        setTimeout(() => {
            save.value = false;
        }, 4000);
    }

    const addComponent = () => {
        componentList.value.push(AcheivementsComponent);
        saveData();
    }

    const removeComponent = () => {
        componentList.value.pop();
        saveData();
    }

</script>

<template>
    <div class="form-content p-fluid">
        <Card>
            <template v-slot:title>
                <h3 class="px-2 font-bold">Acheivements</h3>
            </template>
            <template v-slot:subtitle>
               <p class="px-2">Enter your acheivements</p> 
            </template>
            <template v-slot:content>
                <template v-for="(component, index) in componentList" :key=index>
                    <component :is="component" :saveData="saveData"/>
                    <Divider v-if="index !== componentList.length - 1" />
                </template>
                
                <div class="field px-2 mb-1 mt-2">
                    <Button label="Save" @click="saveData()"></Button>
                </div>
                <div class="flex flex-column md:flex-row my-4">
                    <div class="col-12 md:col-6 mb-2 py-0">
                        <Button label="Add" @click="addComponent()"/>
                    </div>
                    <div class="col-12 md:col-6 mb-2 py-0">
                        <Button label="Remove" severity="danger" @click="removeComponent()"/>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<style scoped>
</style>