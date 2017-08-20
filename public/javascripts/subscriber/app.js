/**
 * Created by heben on 2017/5/7.
 */

import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import './styles/style.scss'

import App from './components/App.vue'
import Home from './page/Home.vue'
import Article from './page/Article.vue'
import Tag from './page/Tag.vue'
import Recommend from './page/Recommend.vue'
import Filing from './page/Filing.vue'
import Search from './page/Search.vue'

import store from './store'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/article/:_id', component: Article,props:true },
        { path: '/filing', component: Filing },
        { path: '/tag', component: Tag },
        { path: '/recommend', component: Recommend },
        { path: '/search', component: Search },
        { path: '/logout',
            beforeEnter (to, from, next) {
                next('/')
            }
        }
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#subscriber');

