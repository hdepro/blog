<template>
    <div id="filing">
        <div class="filing-item" v-for="file in files">
            <h4>{{file.date+" ("+file.data.length+")"}}</h4>
            <ol>
                <li v-for="art in file.data">
                    <router-link :to="{path:'/article/'+art._id}">
                        {{art.title}}<i>{{new Date(art.createTime).toLocaleDateString()}}</i>
                    </router-link>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        created(){
            this.$store.dispatch('getAllFilingArticle');
        },
        computed: mapGetters({
            files:'getAllArticle'
        })
    }
</script>

<style scoped>
    #filing{

    }
    .filing-item li{
       line-height:25px;
    }
    .filing-item a{
        color:#42b983;
    }
    .filing-item i{
        color:#585858;
        margin-left:30px;
    }
</style>