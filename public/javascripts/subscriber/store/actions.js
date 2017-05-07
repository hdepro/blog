/**
 * Created by heben on 2017/5/7.
 */
import * as types from "./mutation-types"
import * as api from '../api/index'

export const getAllArticle = ({commit}) =>
    api.getAllArticle(types.GET_ALL_ARTICLE.route,(data) => {
        commit(types.GET_ALL_ARTICLE.action,{data})
    });

export const getArticle = ({commit},id) =>
    api.getArticle(types.GET_ARTICLE.route,id,(data) => {
        commit(types.GET_ARTICLE.action,{data})
    });

export const getAllTag = ({commit}) =>
    api.getAllTag(types.GET_ALL_TAG.route,(data) => {
        commit(types.GET_ALL_TAG.action,{data})
    });

