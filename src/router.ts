import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import MyJX from './views/MyJX.vue';
import MyAddress from './views/MyAddress.vue';
import MyInfo from './views/MyInfo.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/myjx',
            name: 'MyJX',
            component: MyJX,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/myinfo',
            name: 'MyInfo',
            component: MyInfo,
        },
        {
            path: '/myaddress',
            name: 'MyAddress',
            component: MyAddress,
        },
    ],
});
