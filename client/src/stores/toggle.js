import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToggleStore = defineStore('toggle', () => {
    const saveAch = ref(false)
    const saveAch2 = ref(false)

    return {
        saveAch,
        saveAch2
    }
});