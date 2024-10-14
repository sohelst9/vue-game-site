import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'
import axiosInstance from './axios'

const app = createApp(App);

// Make the Axios instance available globally via app.config.globalProperties
app.config.globalProperties.$axios = axiosInstance;

app.use(router);
app.mount('#app');
