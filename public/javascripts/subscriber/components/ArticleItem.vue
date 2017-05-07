<template>
    <div id="article-item">
        <li>{{article.title}}</li>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        //props:['article']
        props:{
            article:Object
        }
    }
</script>

<style scoped>
    #article-item{
    }
</style>