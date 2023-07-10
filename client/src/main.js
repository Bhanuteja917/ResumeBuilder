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
 
const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')


