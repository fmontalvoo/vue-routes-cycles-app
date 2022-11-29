<template>
    <h2>Pokemon: {{ id }}</h2>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <h3>{{ pokemon.name }}</h3>
    </div>
</template>

<script>
const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            pokemon: null
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    },
    created() {
        this.getPokemon()

        const { id } = this.$route.params
        // const id = this.$route.params['id']
        console.log(this.id, id)
    },
    methods: {
        async getPokemon() {
            try {
                this.pokemon = await fetch(`${apiUrl}/${this.id}`)
                    .then(res => res.json())
            } catch (e) {
                console.error('No existe un pokemon con el id:', this.id)
                this.$router.push('/')
            }
        }
    },
}
</script>

<style>

</style>