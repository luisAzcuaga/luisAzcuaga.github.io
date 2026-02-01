import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import icons and add them to the Library */
import { faMusic, faWater, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faGithubAlt, faLinkedin, faMusic, faWater, faLeaf)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
