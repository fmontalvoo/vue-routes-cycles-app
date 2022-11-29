<template>
    <a v-if="isHttp" :href="route.to" class="s-inactive" target="_blank">{{ route.name
    }}</a>
    <router-link v-else :to="route.to" v-slot="{ href, isActive }">
        <a :class="isActive ? 'is-active' : 'is-inactive'" :href="href">{{ route.name }}</a>
    </router-link>
</template>

<script>
export default {
    props: {
        route: {
            type: Object,
            required: true,
        }
    },
    computed: {
        isHttp() {
            return this.route.to.startsWith('http')
        }
    }
}
</script>

<style scoped>
.is-active {
    color: #41b883;
}

.is-inactive {
    color: #35495e;
}
</style>