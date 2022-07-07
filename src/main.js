import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import './stylesheets/reset.css'
import './stylesheets/globalStyle.css'
import 'aos/dist/aos.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(AOS.init())
app.mount('#app')

