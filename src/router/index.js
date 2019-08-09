import Vue from 'vue'
import Router from 'vue-router'
import MyJX from '@/components/MyJX'
import MyAddress from '@/components/MyAddress'
import MyInfo from '@/components/MyInfo'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/myjx',
      name: 'MyJX',
      component: MyJX
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/myinfo',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/myaddress',
      name: 'MyAddress',
      component: MyAddress
    }
  ]
})
