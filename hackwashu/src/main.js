import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import './stylesheets/reset.css'
import './stylesheets/globalStyle.css'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(AOS.init())
app.mount('#app')

