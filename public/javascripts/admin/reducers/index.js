/**
 * Created by heben on 2017/4/23.
 */

//import {combineReducers} from 'redux'
import {combineReducers} from '../../../src/redux/CombineReducers'
import {CREATE_BLOG,GET_ALL_BLOG,DELETE_BLOG,GET_BLOG,EDIT_BLOG} from '../../constants/Actions'
import {CREATE_TAG,GET_ALL_TAG,DELETE_TAG,GET_TAG,EDIT_TAG} from '../../constants/Actions'

function reducerBlogArray(state=[],action){
    switch(action.type){
        case GET_ALL_BLOG:
            return action.data;
        case CREATE_BLOG:
            return [...state,action.data];
        case EDIT_BLOG:
            let index = state.findIndex(b => b._id === action.data._id);
            return [...state.slice(0,index),Object.assign(state[index],action.data),...state.slice(index+1)];
        case DELETE_BLOG:
            index = state.findIndex(s => s._id === action.data);
            return [...state.slice(0,index),...state.slice(index+1)];
        default :
            return state;
    }
}

function reducerBlog(state={},action){
    switch(action.type){
        case GET_BLOG:
            return action.data;
        default :
            return state;
    }
}

function reducerTagArray(state=[],action){
    switch(action.type){
        case GET_ALL_TAG:
            return action.data;
        case CREATE_TAG:
            return [...state,action.data];
        case DELETE_TAG:
            let index = state.findIndex(s => s._id === action.data);
            return [...state.slice(0,index),...state.slice(index+1)];
        case EDIT_TAG:
            let tag = state.find(s => s._id === action.data._id);
            Object.assign(tag,action.data);
            return state;//[...state];
        default :
            return state;
    }
}

function reducerTag(state={},action){
    switch(action.type){
        case GET_TAG:
            return action.data;
        default :
            return state;
    }
}


export default combineReducers({
    r_blog_list:reducerBlogArray,
    r_blog:reducerBlog,
    r_tag_list:reducerTagArray,
    r_tag:reducerTag
})

