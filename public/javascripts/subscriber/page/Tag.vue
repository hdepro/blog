<template>
    <div id="tag">
        <div class="tag-item">
            <router-link v-for="tag in tags" :to="{path:'/?tag='+tag.name}">{{tag.name+"("+tag.count+")"}}</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props:[],
        created(){
            this.$store.dispatch('getAllTag');
        },
        computed: mapGetters({
            tags:'getAllTag'
        }),
        methods: mapActions([
            'getAllTag'
        ]),
        components:{
        }
    }
</script>

<style scoped>
    #tag{
    }
    .tag-item>a{
        margin-right:20px;
        display:inline-block;
        padding:10px 20px;
        border:1px solid #42b983;
        border-radius:10px;
        color:#42b983;
    }
    .tag-item>a:hover{
        background:#42b983;
        color:#ddd;
    }
</style>