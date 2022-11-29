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
                component: () => import(/* webpackChunkName: "AboutPokemonPage" */ '@/modules/pokemon/pages/About.vue')
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
        name: 'dbz',
        path: '/dbz',
        component: () => import(/* webpackChunkName: "DBZ" */ '@/modules/dbz/layouts/DBZLayout.vue'),
        children: [
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "AboutDBZPage" */ '@/modules/dbz/pages/About.vue')
            },
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "CharactersPage" */ '@/modules/dbz/pages/Characters.vue')
            },
            {
                path: '',
                name: 'dbz-default',
                redirect: { name: 'dbz-characters' }
            },
        ]
    },
    {
        name: 'error',
        path: '/error',
        component: () => import(/* webpackChunkName: "Error" */ '@/modules/error/layouts/ErrorLayout.vue'),
        children: [
            {
                path: '404',
                name: 'error-404',
                component: () => import(/* webpackChunkName: "PageNotFound" */ '@/modules/error/pages/PageNotFound.vue')
            },
            {
                path: '',
                name: 'error-default',
                redirect: { name: 'error-404' }
            },
        ]
    },
    {
        path: '',
        name: 'default',
        redirect: { name: 'dbz-about' }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'error-404' }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router