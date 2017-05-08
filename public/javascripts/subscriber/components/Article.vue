<template>
    <div id="article">
        <h2>{{article.title}}</h2>
        <div class="content" v-html="article.content"></div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props:['_id'],
        created(){
            this.$store.dispatch('getArticle',this._id);
        },
        computed: mapGetters({
            article:'getArticle'
        }),
        methods: mapActions([
            'getArticle'
        ]),
        components:{
        }
    }
</script>

<style scoped>
    #article{
    }
    #article>h2{
        line-height:40px;
        text-align:center;
        font-weight:500;
    }
    #article>.content{
        line-height:2em;
        font-size:16px;
    }
</style>