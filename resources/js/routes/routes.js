import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../components/back_end/dashboard'
const routes = [
    {
        path: '/template',
        name: 'dashboard',
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
    routes,
})
