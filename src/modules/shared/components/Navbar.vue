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
        </ul>
    </nav>
</template>

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