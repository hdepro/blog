<template>
    <div id="article">
        <h2>{{article.title}}</h2>
        <div class="content" v-html="article.contentHtml"></div>
        <div class="footer" v-if="article.next">
            <router-link v-bind:to="article.next?article.next._id:''">
            {{article.next?article.next.title:""}}      >>
            </router-link>
        </div>
        <div class="comment">
            <form>
                <label class="required">昵称*</label>
                <input type="text"/><br/>
                <label class="required">联系方式*</label>
                <input type="text"/><br/>
                <label class="required">评论*</label>
                <textarea rows="6" type="text"/><br/>
                <label>备注</label>
                <input type="text"/><br/><br/>
                <button>发表评论</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props:['_id'],
        created(){
            this.$store.dispatch('getArticle',this._id);
            this.prev_id = this._id;
        },
        beforeUpdate(){
            if(this._id !== this.prev_id) {
                this.$store.dispatch('getArticle',this._id);
                this.prev_id = this._id;
            }
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

<style lang="scss" scoped>
    #article{
    }
    #article>h2{
        margin-bottom:20px;
        text-align:center;
        font-weight:500;
    }
    #article>.content{
        padding:20px;
        line-height:2.4em;
        font-size:16px;
        background-color:#f9f9f9;
    }
    #article>.footer{
        margin:20px 0;
        padding:15px 0;
        border-top :1px solid #ddd;
        border-bottom :1px solid #ddd;
    }
</style>