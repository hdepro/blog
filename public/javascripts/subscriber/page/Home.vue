<template>
    <div id="home">
        <art-item v-for="blog in articles" v-bind:article="blog"></art-item>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ArtItem from '../components/ArticleItem.vue'

    export default {
        name:'home',
        created(){
            this.$store.dispatch('getAllArticle');
        },
        computed: mapGetters({
            articles:'getAllArticle'
        }),
        methods: mapActions([
            'getAllArticle'
        ]),
        components:{
            ArtItem
        }
    }
</script>

<style scoped>
    #home{
    }
</style>

