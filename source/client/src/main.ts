import Vue from 'vue';
import axios from 'axios';
import SuiVue from 'semantic-ui-vue';
import Moment from 'vue-moment';

import App from './views/App.vue';
import router from './router';
import store from './store';
import chatHub from './hubs/chat-hub';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://localhost:5001';

Vue.prototype.$http = axios;

Vue.use(Moment);
Vue.use(SuiVue);
Vue.use(chatHub);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
