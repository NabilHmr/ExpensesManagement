import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniDashboard, uniTransaction, uniLifeRing, uniCog, uniChartPie, uniLabelAlt, uniEdit, uniTrashAlt } from 'vue-unicons/dist/icons'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

Unicon.add([uniDashboard, uniTransaction, uniLifeRing, uniCog, uniChartPie, uniLabelAlt, uniEdit, uniTrashAlt])

createApp(App).use(createPinia()).use(router).use(Unicon).component('EasyDataTable', Vue3EasyDataTable).mount('#app')
