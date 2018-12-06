import Vue from 'vue';

import './bootstrap.js';
import App from './App.vue';
import { store } from './store/index';
import { router } from './routes/router';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
