import Vue from 'vue';
import Router from 'vue-router';

import MyJX from './views/MyJX.vue';

import Login from './views/Login.vue';
import Register from './views/Register.vue';
import NewAdd from './views/address/newAdd.vue';
import EditAddress from './views/address/editAddress.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
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
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "address" */ './views/MyInfo.vue')
        },
        {
            path: '/myAddress',
            name: 'MyaAddress',
            component: () => import(/* webpackChunkName: "address" */ './views/address/myAddress.vue')
        },
        {
            path: '/address/newAdd',
            name: 'NewAdd',
            component: NewAdd
        },
        {
            path: '/address/editAddress',
            name: 'EditAddress',
            component: EditAddress
        }
    ]
})
