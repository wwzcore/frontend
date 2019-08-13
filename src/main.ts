import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:5000';    //这里写我们后端接口的根路径
Vue.prototype.axios = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

