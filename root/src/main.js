import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniDashboard, uniTransaction, uniLifeRing, uniCog, uniChartPie } from 'vue-unicons/dist/icons'

Unicon.add([uniDashboard, uniTransaction, uniLifeRing, uniCog, uniChartPie])

createApp(App).use(createPinia()).use(router).use(Unicon).mount('#app')
