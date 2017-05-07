/**
 * Created by heben on 2017/5/7.
 */

import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});

