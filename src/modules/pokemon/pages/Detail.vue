<template>
    <h2>Detail</h2>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    created() {
        const { id } = this.$route.params
        // const id = this.$route.params['id']
        console.log(this.id, id)
    }
}
</script>

<style>

</style>