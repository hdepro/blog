/**
 * Created by heben on 2017/5/7.
 */

import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Tag from './components/Tag.vue'
import Filing from './components/Filing.vue'

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

