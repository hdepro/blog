<template>
    <div id="search">
        <form onsubmit="return false">
            <input type="text" id="search-input" v-on:focus="focus" v-on:blur="blur"/>
            <button @click="handleSearch">搜索</button>
        </form>
        <div class="search-result" v-if="display">
            <h3>本次共搜到<span class="count">{{articles.length}}</span>篇博客</h3>
            <div class="articles">
                <router-link v-for="article in articles"
                             :to="{path:'/article/'+article._id}">
                    <h4 class="title">{{article.title}}</h4>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data(){
          return {
              display:false
          }
        },
        computed:mapGetters({
            articles:'getAllArticle'
        }),
        methods: {
            ...mapActions([
                'getAllArticle'
            ]),
            focus(){
                console.log("focus");
                this.handleKeyup = (e)=>{
                    //console.log(e,e.keyCode);
                    if(e.keyCode === 13) this.handleSearch();
                };
                document.addEventListener("keyup",this.handleKeyup);
            },
            blur(){
                console.log("blur");
                document.removeEventListener("keyup",this.handleKeyup);
            },
            handleSearch(){
                let {value} = document.getElementById("search-input");
                if(value) {
                    this.display = true;
                    this.$store.dispatch("getAllArticle",{search:value})
                }
            }
        }
    }
</script>

<style scope>
    .search-result{
        margin-top:20px;
    }
    .count{
        margin:10px;
        font-size:20px;
        color:#e96900;
    }
    .articles{
        margin-top:10px;
    }
    .title{
        padding:4px 10px;
        color:#42b983;
    }
</style>