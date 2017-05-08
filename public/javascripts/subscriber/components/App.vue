
<template>
    <div id="app">
        <sidebar></sidebar>
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
    #content{
        display:inline-block;
        vertical-align:top;
        margin-left:3%;
        margin-top:20px;
        width:84%;
    }
</style>