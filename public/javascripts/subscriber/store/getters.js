/**
 * Created by heben on 2017/5/7.
 */


export const getAllArticle = (state) => {
    return state.articles;
};

export const getArticle = (state) => {
    return state.currentArticle;
};

export const getAllTag = (state) => {
    return state.tags;
};