import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import {library, config} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon, FontAwesomeLayers} from '@fortawesome/vue-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import vSelect from 'vue-select'
import VueScrollactive from 'vue-scrollactive';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-select/dist/vue-select.css';
import './app.css'


config.autoAddCss = true;
library.add(fas, fab, far);
Vue.component('fa-layer', FontAwesomeLayers);
Vue.component('fa', FontAwesomeIcon);
Vue.component('v-select', vSelect)
Vue.use(BootstrapVue)
Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
