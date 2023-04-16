import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)
app.use(VueAxios, axios)

app.mount('#app')
