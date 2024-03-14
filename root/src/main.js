import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const app = createApp(App)

app.use(createPinia())
app.use(Vueform, vueformConfig)
app.mount('#app')
