import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInformationStore = defineStore('information', () => {
    const template = ref()
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const phone = ref('')
    const url = ref('')
    const jobTitle = ref('')
    const careerObjective = ref('')
    const skills = ref([])
    const education = ref([])
    const experience = ref([])
    const achievements = ref([])
    const saveEdu = ref(false)
    const saveExp = ref(false)
    const saveAch = ref(false)

    const toggleSaveAch = () => {
        saveAch.value = true
        // setTimeout(() => {  
        //     saveAch.value = false
        // }, 2000)
    }


    return { template, 
             firstName, 
             lastName, 
             email, 
             phone, 
             url, 
             jobTitle, 
             careerObjective, 
             skills, 
             education, 
             experience, 
             achievements,
             saveEdu,
             saveExp,
             saveAch,
             toggleSaveAch}
})