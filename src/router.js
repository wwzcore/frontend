import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import Host from './views/Host.vue'

import MyJX from './views/MyJX.vue'

import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NewAdd from './views/address/newAdd.vue'
import EditAddress from './views/address/editAddress.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Host',
      meta: { auth: true },
      component: Host
    },
    {
      path: '/login',
      name: 'Login',
      meta: { auth: true },
      component: Login
    },
    {
      path: '/myJx',
      name: 'MyJX',
      meta: { auth: true },
      component: MyJX

    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/myInfo',
      name: 'MyInfo',
      meta: { auth: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "address" */ './views/MyInfo.vue')
    },
    {
      path: '/myAddress',
      name: 'MyaAddress',
      meta: { auth: true },
      component: () => import(/* webpackChunkName: "address" */ './views/address/myAddress.vue')
    },
    {
      path: '/address/newAdd',
      name: 'NewAdd',
      meta: { auth: true },
      component: NewAdd
    },
    {
      path: '/address/editAddress',
      name: 'EditAddress',
      meta: { auth: true },
      component: EditAddress
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    // console.log("先判断是否登陆")；
    if (to.name === 'Host') {
      next()
    } else {
      if (sessionStorage.getItem('getUserName')) {
        // 访问服务器缓存数据，判断当前data是否失效
        next()
      } else {
        alert('您的登陆已过期，请重新登陆。')
        next('/')
      }
    }
  } else {
    console.log('请先登陆')
    next()
  }
})
