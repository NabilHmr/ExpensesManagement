import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import router from './router';
import App from './App.vue';
import Unicon from 'vue-unicons';
import { uniDashboard, uniTransaction, uniLifeRing, uniCog, uniChartPie } from 'vue-unicons/dist/icons';
import JwPagination from 'jw-vue-pagination';

Unicon.add([uniDashboard, uniTransaction, uniLifeRing, uniCog, uniChartPie]);

createApp(App)
    .use(createPinia())
    .use(router)
    .use(Unicon)
    .component('jw-pagination', JwPagination) // Ajoutez cette ligne pour enregistrer le composant jw-pagination
    .mount('#app');
