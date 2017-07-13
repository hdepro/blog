<template>
    <div id="article">
        <h2>{{article.title}}</h2>
        <div class="content" v-html="article.contentHtml"></div>
        <div class="footer" v-if="article.next">
            <router-link v-bind:to="article.next?article.next._id:''">
            {{article.next?article.next.title:""}}      >>
            </router-link>
        </div>
        <div class="create-comment">
            <form target="hide" method="post" action="/comment/create" onsubmit="">
                <input name="blogId" style="display:none" v-bind:value="article._id"/>
                <label class="required">昵称*</label>
                <input type="text" name="nickname"/><br/>
                <label class="required">联系方式*</label>
                <input type="text" name="contact"/><br/>
                <label class="required">评论*</label>
                <textarea rows="6" type="text" name="content"/><br/>
                <label>备注</label>
                <input type="text" name="remark"><br/><br/>
                <button @click="comment">发表评论</button>
            </form>
            <iframe name="hide"></iframe>
        </div>
        <ul class="comments">
            <li class="comment-item" v-for="comment in comments">
                <h5>{{comment.nickname}}</h5>
                <p>
                    {{comment.content}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props:['_id'],
        created(){
            this.$store.dispatch('getArticle',this._id);
            this.$store.dispatch('getArticleComment',this._id);
            this.prev_id = this._id;
        },
        beforeUpdate(){
            if(this._id !== this.prev_id) {
                this.$store.dispatch('getArticle',this._id);
                this.prev_id = this._id;
            }
        },
        comment(){
            console.log("comment");
        },
        computed: mapGetters({
            article:'getArticle',
            comments:'getArticleComment'
        }),
        methods: {
            ...mapActions([
                'getArticle'
            ]),
            comment(event){
                let blogId = document.querySelector("[name=blogId]").value;
                let contact = document.querySelector("[name=contact]").value;
                let nickname = document.querySelector("[name=nickname]").value;
                let content = document.querySelector("[name=content]").value;
                //event.preventDefault();
                console.log("methods comment");
            }
        },
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
        line-height:1.8em;
        font-size:15px;
        background-color:#f9f9f9;
    }
    #article>.footer{
        margin:20px 0;
        padding:15px 0;
        border-top :1px solid #ddd;
        border-bottom :1px solid #ddd;
    }
    iframe{
        display:none;
    }

    .comments{
        margin-top:20px;
    }
    .comment-item{
        padding:10px;
        border-top:1px solid #ddd;
        h5{
            line-height:1.5;
            color:#2973b7;
        }
        p{
            line-height:1.5;
        }
    }
</style>