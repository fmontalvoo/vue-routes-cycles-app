<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'dbz-characters' }">Personajes</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dbz-about' }">Acerca de DBZ</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'pokemon-list' }">Lista</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'pokemon-id', params: { id: 21 } }">Pokemon</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'pokemon-about' }">Acerca de Pokemon</router-link>
            </li>
            <!-- <li>
                <RouterLinkCustom v-for="route in routes" :key="route.to" :route="route" />
            </li> -->
        </ul>
    </nav>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        RouterLinkCustom: defineAsyncComponent(() => import('./RouterLinkCustom.vue'))
    },
    data() {
        return {
            routes: [
                { to: '/home', name: 'Home' },
                { to: '/pokemon/25', name: 'Pokemon' },
                { to: '/about', name: 'About' },
                { to: 'https://www.google.com/', name: 'Google' },
            ]
        }
    }
}
</script>

<style scoped>
ul {
    padding: 0 30px;
    list-style-type: none;
}

ul li {
    display: inline;
}

li a {
    padding: 8px;
    color: #354952;
    background-color: #dddddd;
}

a.router-link-exact-active {
    color: #41b883;
    background-color: #cccccc;
}
</style>