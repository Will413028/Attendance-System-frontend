import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
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
                component: () => import('../views/User/User.vue'),
                beforeEnter: () => {
                    let user = JSON.parse(localStorage.getItem('user'));

                    if (user.role !== "HR") {
                        return false;
                    }
                    return true;
                },
            },
            {
                path: '/edituser',
                name: 'edituser',
                component: () => import('../views/User/EditUser.vue')
            },
            {
                path: '/Calendar',
                name: 'Calendar',
                component: () => import('../views/Calendar.vue')
            },
            {
                path: '/AbsentUser/',
                name: 'AbsentUser',
                component: () => import('../views/User/AbsentUser.vue')
            }
        ]
    },
    {
        path: '/login',
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

    if (to.fullPath === '/login') return;

    if (!token || !user) {
        localStorage.removeItem('token');
        return '/login';
    }

    return true;
})
export default router