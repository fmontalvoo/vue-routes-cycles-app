import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/List.vue')
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/About.vue')
    },
    {
        path: '/:id',
        name: 'Pokemon',
        props: route => {
            const id = Number(route.params.id)
            return isNaN(id)
                ? { id: 1 }
                : { id }
        },
        component: () => import(/* webpackChunkName: "DetailPage" */ '@/modules/pokemon/pages/Detail.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "PageNotFound" */ '@/modules/error/pages/PageNotFound.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router