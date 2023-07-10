<script setup>
    import Card from 'primevue/card';
    import ResumeComponent from './ResumeComponent.vue';
    import Divider from 'primevue/divider';
    
    import { defineProps, ref } from 'vue';
import Button from 'primevue/button';
    
    const props = defineProps({
        title: String,
        subtitle: String,
        name: String,
        text: String
    });

    const componentList = ref([ResumeComponent])
</script>

<template>
    <div class="form-content p-fluid">
        <Card>
            <template v-slot:title>
                <h3 class="px-2 font-bold">{{ props.title }}</h3>
            </template>
            <template v-slot:subtitle>
               <p class="px-2">{{ props.subtitle }}</p> 
            </template>
            <template v-slot:content>
                <template v-for="(component, index) in componentList" :key=index>
                    <component :is="component" :name="props.name" :text="props.text" class="scalein animation-duration-400 animation-ease-in"/>
                    <Divider v-if="index !== componentList.length - 1" />
                </template>
                <Transition name="slide-down" mode="out-in">
                <div class="flex flex-column md:flex-row my-3">
                    <div class="col-12 md:col-6 mb-2 py-0">
                        <Button label="Add" @click="componentList.push(ResumeComponent)"/>
                    </div>
                    <div class="col-12 md:col-6 mb-2 py-0">
                        <Button label="Remove" severity="danger" @click="componentList.pop()"/>
                    </div>
                </div>
                </Transition>
            </template>
        </Card>
    </div>
</template>

<style scoped>
    .slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s;
}

.slide-down-enter {
  transform: translateY(-100%);
}

.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
