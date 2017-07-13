/**
 * Created by heben on 2017/5/7.
 */

import Vue from 'vue'
import * as types from "./mutation-types"

const handleDate = (timestamp) => {
    return new Date(timestamp).getFullYear() + "年"+(new Date(timestamp).getUTCMonth()+1)+"月";
};

export default {
    [types.GET_ALL_ARTICLE.action](state,{data}){
        state.articles = data;
        /*data.forEach((art,index) => {
            Vue.set(state.articles,index,art);
        });*/
    },

    [types.GET_ALL_TAG.action](state,{data}){
        state.tags = data;
    },

    [types.GET_ARTICLE.action](state,{data}){
        state.currentArticle = data;
    },

    [types.GET_ALL_FILING_ARTICLE.action](state,{data}){
        const n = data.length;
        if(!n) return ;
        let date = handleDate(data[0].createTime),count=0,res=[{date,data:[data[0]]}];
        for(let i=1;i<n;i++){
            if(handleDate(data[i].createTime) === date){
                res[count].data.push(data[i]);
                continue;
            }
            date = handleDate(data[i].createTime);
            res[++count].push({date,data:[data[i]]});
        }
        state.articles = res;
        console.log("res",res);
    },

    [types.GET_ARTICLE_COMMENT.action](state,{data}){
        state.comments = data;
    },
}
