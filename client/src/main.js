import './assets/main.css'
//theme
import "primevue/resources/themes/lara-light-blue/theme.css"; 
    
//core
import "primevue/resources/primevue.min.css";
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
 
const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(PrimeVue)
app.use(pinia)

app.mount('#app')


