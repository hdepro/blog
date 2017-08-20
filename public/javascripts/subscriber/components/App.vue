
<template>
    <div id="app">
        <div id="side">
            <sidebar></sidebar>
        </div>
        <div id="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import sidebar from './Sidebar.vue'

    export default {
        components:{
            sidebar
        }
    }
</script>

<style>
    #app{
        background:#eaedf1;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    }
    #side{
        display:inline-block;
        width:12%;
        height:100%;
    }
    #main{
        display:inline-block;
        width:82%;
        margin-left:3%;
        margin-top:20px;
        vertical-align:top;
    }
</style>