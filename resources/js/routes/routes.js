import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../components/back_end/dashboard'
import profile from '../components/back_end/profile'

const routes = [

    {
        path: '/profile',
        name: 'profile',
        component: profile,
    },

    {
        path: '/admin',
        name: 'dashboard',
        component: dashboard,
    },

    {
        path: '/',
        name: 'index',
        component: dashboard,
    },
    {
        path: '/dashboard',
        name: 'index',
        component: dashboard,
    },

];

export default createRouter({
    history: createWebHistory(),
    routes : routes,
    linkActiveClass: 'active'

})
