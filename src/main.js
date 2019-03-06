import Vue from 'vue'
import App from './App.vue'
import router from './import/router';
import Vuex from 'vuex'
import './import/plugins/element.js'
import http from './import/http/index'
import store from '../src/import/store/store'
import ApiConfig from './import/config/api-config'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$axios = http;
Vue.prototype.$api=ApiConfig;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
