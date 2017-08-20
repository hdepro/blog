<template>
    <div id="home">
        <art-item v-for="blog in articles" v-bind:article="blog"></art-item>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ArtItem from '../components/ArticleItem.vue'
    import {Util} from '../../constants/Util'

    export default {
        name:'home',
        created(){
            let tag = Util.parseUrl(location.search).get("tag");
            this.$store.dispatch('getAllArticle',{tag});
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

