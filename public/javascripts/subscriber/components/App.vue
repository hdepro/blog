
<template>
    <div id="app">
        <div id="side">
            <sidebar></sidebar>
        </div>
        <div id="content">
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
    }
    #side{
        display:inline-block;
        width:12%;
        height:100%;
    }
    #content{
        display:inline-block;
        width:82%;
        margin-left:3%;
        margin-top:20px;
        vertical-align:top;
    }
</style>