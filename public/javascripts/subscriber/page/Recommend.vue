<template>
    <div>
        <ul>
            <li v-for="recommend in recommends">
                <a v-bind:href="recommend.href">{{recommend.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        created(){
            this.$store.dispatch('getAllRecommend');
        },
        computed: mapGetters({
            recommends:'getAllRecommend'
        }),
        methods: mapActions([
            'getAllRecommend'
        ])
    }
</script>

<style scoped>

</style>

