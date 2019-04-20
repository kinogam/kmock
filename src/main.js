import Vue from 'vue';
import App from './App.vue';

import { MdButton, MdContent, MdTabs, MdIcon } from 'vue-material/dist/components';

import './assets/css/material.design.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
