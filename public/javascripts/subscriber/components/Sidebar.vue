
<template>
    <div id="sidebar">
        <li><img src="/images/positive.jpg"/></li>
        <ul class="menu">
            <li>
                <router-link to="/"><img src="/images/iconfont/主页.png"/>
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/filing"><img src="/images/iconfont/归档.png"/>
                    归档
                </router-link>
            </li>
            <li>
                <router-link to="tag"><img src="/images/iconfont/biaoqian.png"/>
                    标签
                </router-link>
            </li>
        </ul>
        <p>
            <a href="https://github.com/hdepro"><img src="/images/iconfont/github.png"/></a>
            <router-link to="/"><img src="/images/iconfont/search.png"/></router-link>
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
        display:inline-block;
        height:100%;
        width:12%;
        color:#ddd;
        background:#2a3542;
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
        color:#ddd;
        text-decoration: none;
    }
    a.router-link-exact-active, li.router-link-exact-active a {
        background: #35404d;
    }
    .menu>li>a:hover{
        background:#35404d;
    }
    .menu a>img{
        height:1.2em;
        vertical-align:middle;
    }

    #sidebar>p{
        margin:30px 2vw;
    }
    #sidebar>p>a{
        margin-right:15px;
    }
    #sidebar>p img{
        height:1.2em;
    }
</style>