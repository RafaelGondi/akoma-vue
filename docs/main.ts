import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '@akoma/styles/index.css'
import './styles/docs.css'

createApp(App).use(router).mount('#app')
