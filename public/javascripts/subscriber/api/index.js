/**
 * Created by heben on 2017/5/7.
 */

import {fetchGet,fetchJsonPost} from '../../constants/Fetch'
import {Debugger} from '../../constants/Logger'

export const getAllArticle = (url,cb) => {
    fetchGet(url,json => cb(json.data))
};

export const getArticle = (url,_id,cb) => {
    fetchGet(url+"/"+_id,json => cb(json.data))
};

export const getAllTag = (url,cb) => {
    fetchGet(url,json => cb(json.data))
};

export const getArticleComment = (url,cb) => {
    fetchGet(url,json => cb(json.data))
};

window.Debugger = Debugger;