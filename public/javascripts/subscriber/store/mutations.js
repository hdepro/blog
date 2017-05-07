/**
 * Created by heben on 2017/5/7.
 */

import Vue from 'vue'
import * as types from "./mutation-types"

export default {
    [types.GET_ALL_ARTICLE.action](state,{data}){
        console.log("data",data,state.articles);
        //state.articles = data;
        data.forEach((art,index) => {
            Vue.set(state.articles,index,art);
        });
        console.log(state.articles);
    },

    [types.GET_ALL_TAG.action](state,{data}){
        state.tags = data;
    },

    [types.GET_ARTICLE.action](state,{data}){
        state.currentArticle = data;
    }
}
