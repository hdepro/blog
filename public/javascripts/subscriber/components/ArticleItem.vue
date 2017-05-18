<template>
    <div class="article-item">
        <div class="header">
            <span>{{new Date(article.createTime).toLocaleString()}}</span>
            <h2>{{article.title}}</h2>
        </div>
        <div class="content" v-html="article.contentHtml"></div>
        <div class="footer"><router-link :to="{path:'/article/'+article._id}">点击阅读更多>></router-link></div>
    </div>
</template>

<script>
    export default {
        //props:['article']
        props:{
            article:Object
        }
    }
</script>

<style scoped>
    .article-item{
        width:90%;
        margin:20px 0;
        border-radius: 10px;
        background:#f8f8f8;
    }
    .article-item>.header{
        padding:15px 20px;
        border-bottom:1px solid #ddd;
    }
    .header>h2{
        font-weight:500;
        width:85%;
    }
    .article-item>.header>span{
        float:right;
    }
    .article-item>.content{
        padding:10px 20px;
    }
    .article-item>.footer{
        padding:10px 20px;
        color:green;
    }
</style>