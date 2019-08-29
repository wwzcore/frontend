import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// 这里写我们后端接口的根路径
axios.defaults.baseURL = 'http://localhost:8082'
Vue.prototype.axios = axios

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
