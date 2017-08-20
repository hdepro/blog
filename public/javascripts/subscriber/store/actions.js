/**
 * Created by heben on 2017/5/7.
 */
import * as types from "./mutation-types"
import * as api from '../api/index'

export const getAllArticle = ({commit},{search,tag}) =>{   //只能接受两个参数，第三个参数会被忽略
    let url = types.GET_ALL_ARTICLE.route;
    if(tag) url += `?tag=${tag}`;
    if(search) url += `?search=${search}`;
    api.getAllArticle(url,(data) => {
        commit(types.GET_ALL_ARTICLE.action,{data})
    });
};


export const getArticle = ({commit},id) =>
    api.getArticle(types.GET_ARTICLE.route,id,(data) => {
        commit(types.GET_ARTICLE.action,{data})
    });

export const getAllTag = ({commit}) =>
    api.getAllTag(types.GET_ALL_TAG.route,(data) => {
        commit(types.GET_ALL_TAG.action,{data})
    });

export const getAllFilingArticle = ({commit,state}) => {
    console.log("getAllFilingArticle",state);
    api.getAllArticle(types.GET_ALL_ARTICLE.route,(data) => {
        commit(types.GET_ALL_FILING_ARTICLE.action,{data})
    });
};

export const getArticleComment = ({commit,state},blogId) => {
    api.getArticleComment(types.GET_ARTICLE_COMMENT.route+"?blogId="+blogId,(data) => {
        commit(types.GET_ARTICLE_COMMENT.action,{data})
    });
};

export const getAllRecommend = ({commit,state}) => {
    api.getAllRecommend(types.GET_ALL_RECOMMEND.route,(data) => {
        commit(types.GET_ALL_RECOMMEND.action,{data})
    });
};