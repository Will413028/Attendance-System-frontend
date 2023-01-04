import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/Home.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/User/User.vue')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/Page1.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/Page2.vue')
            }
        ]
    },
    {
        path: '/',
        name: 'login',
        component: () => import('../views/Login.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach(to => {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');

    if (to.fullPath === '/') return;

    if (!token || !user) {
        localStorage.removeItem('token');
        return '/';
    }

    return true;
})
export default router