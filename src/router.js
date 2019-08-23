import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import Host from './views/host.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'host',
      component: Host,
      children: [{
        path: '/',
        name: 'browsing',
        component: () => import('./views/browsing.vue')
      }, {
        path: '/info',
        name: 'info',
        meta: { auth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./views/info.vue')
      },
      {
        path: '/address',
        name: 'address',
        meta: { auth: true },
        component: () => import('./views/address/address.vue')
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    },

    {
      path: '/address/new',
      name: 'New',
      meta: { auth: true },
      component: () => import('./views/address/new.vue')
    },
    {
      path: '/address/edit',
      name: 'edit',
      meta: { auth: true },
      component: () => import('./views/address/edit.vue')
    }
  ]
})

  router.beforeEach((to, from, next) => {
   if (to.matched.some(m => m.meta.auth)) {
     // console.log("先判断是否登陆")；
    // if ('host' === to.name) {
     //  next()
     //} else {
       if (sessionStorage.getItem('getUserName')) {

        next()
      } else {
        alert('您的登陆已过期，请重新登陆。'+to.name)
         next('/login')
       }
     //}
   } else {
     //console.log('请先登陆')
     next()
   }
 })
