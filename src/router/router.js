import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'pokemon',
        path: '/pokemon',
        component: () => import(/* webpackChunkName: "Pokemon" */ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {
                path: 'list',
                name: 'pokemon-list',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/List.vue')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/About.vue')
            },
            {
                path: ':id',
                name: 'pokemon-id',
                props: route => {
                    const id = Number(route.params.id)
                    return isNaN(id)
                        ? { id: 1 }
                        : { id }
                },
                component: () => import(/* webpackChunkName: "DetailPage" */ '@/modules/pokemon/pages/Detail.vue')
            },
            {
                path: '',
                name: 'pokemon-default',
                redirect: { name: 'pokemon-list' }
            },
        ]
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