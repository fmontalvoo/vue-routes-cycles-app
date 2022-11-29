import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/home',
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/List.vue')
    },
    {
        name: 'about',
        path: '/about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/About.vue')
    },
    {
        name: 'pokemon-id',
        path: '/pokemon/:id',
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