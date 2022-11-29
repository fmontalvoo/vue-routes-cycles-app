import { createRouter, createWebHashHistory } from 'vue-router'

import List from '@/modules/pokemon/pages/List.vue'
import About from '@/modules/pokemon/pages/About.vue'
import Detail from '@/modules/pokemon/pages/Detail.vue'

import PageNotFound from '@/modules/error/pages/PageNotFound.vue'

const routes = [
    { path: '/', component: List },
    { path: '/about', component: About },
    { path: '/id', component: Detail },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router