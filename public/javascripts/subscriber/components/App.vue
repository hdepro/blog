
<template>
 <div id="app">
  <sidebar></sidebar>
  <home></home>
 </div>
</template>

<script>
    import sidebar from './Sidebar.vue'
    import home from './Home.vue'

    export default {
        components:{
            sidebar,
            home
        }
    }
</script>