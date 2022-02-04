import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(AOS.init())
app.mount('#app')

