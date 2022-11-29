<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">Inicio</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'pokemon-id', params: { id: 21 } }">Pokemon</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }">Acerca de</router-link>
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
    background-color: #dddddd;
}

a.router-link-exact-active {
    background-color: #cccccc;
    color: #42b983;
}
</style>