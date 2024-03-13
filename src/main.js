import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueModernNotification from 'vue-modern-notification';
import router from './router'

const app = createApp(App)

app.use(router).use(VueModernNotification).mount('#app')
