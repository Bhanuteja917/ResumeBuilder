<script setup>
    import Card from 'primevue/card';
    import AcheivementsComponent from './AcheivementsComponent.vue';
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';

    import { ref } from 'vue';

    const componentList = ref([AcheivementsComponent])
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
                    <component :is="component"/>
                    <Divider v-if="index !== componentList.length - 1" />
                </template>

                <div class="flex flex-column md:flex-row my-4">
                    <div class="col-12 md:col-6 mb-2 py-0">
                        <Button label="Add" @click="componentList.push(AcheivementsComponent)"/>
                    </div>
                    <div class="col-12 md:col-6 mb-2 py-0">
                        <Button label="Remove" severity="danger" @click="componentList.pop()"/>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>