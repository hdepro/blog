
<template>
    <div id="sidebar">
        <li><img src="/images/positive.jpg"/></li>
        <ul class="menu">
            <li>
                <router-link to="/">
                    <svg class="icon" aria-hidden="">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/filing">
                    <svg class="icon" aria-hidden="">
                        <use xlink:href="#icon-guidang"></use>
                    </svg>
                    归档
                </router-link>
            </li>
            <li>
                <router-link to="/tag">
                    <svg class="icon" aria-hidden="">
                        <use xlink:href="#icon-biaoqian"></use>
                    </svg>
                    标签
                </router-link>
            </li>
            <li>
                <router-link to="/recommend">
                    <svg class="icon" aria-hidden="">
                        <use xlink:href="#icon-tuijian1"></use>
                    </svg>
                    推荐
                </router-link>
            </li>
        </ul>
        <p>
            <a href="https://github.com/hdepro">
                <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-github"></use>
                </svg>
            </a>
            <router-link to="/search">
                <svg class="icon sousuo" aria-hidden="">
                    <use xlink:href="#icon-sousuo1"></use>
                </svg>
            </router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name:"sidebar"
    }
</script>

<style scoped>
    #sidebar{
        top:0;
        position:fixed;
        width:12%;
        height:100%;
        color:#fff;
        background:#333744;
        font-size:13px;
    }
    #sidebar>li{
        text-align:center;
        margin:30px 0px;
    }
    #sidebar>li>img{
        width:8vw;
        height:8vw;
        border-radius:50%;
    }

    .menu>li{
        line-height:48px;
        letter-spacing:8px;
    }
    .menu>li>a{
        display:block;
        padding-left:2vw;
        color:#fff;
        text-decoration: none;
    }
    .icon{
        margin-right:8px;
        width: 1.2em;
        height: 1.2em;
        vertical-align: -0.15em;
        fill: #fff;
        overflow: hidden;
    }
    .menu a.router-link-exact-active, li.router-link-exact-active a {
        background: #42485b;
    }
    .menu>li>a:hover{
        background:#42485b;
    }

    #sidebar>p{
        margin:30px 2vw;
    }
    #sidebar>p .icon{
        width: 1.5em;
        height: 1.5em;
    }
    #sidebar>p .icon.sousuo{
        margin-left:6px;
    }
</style>