/**
 * Created by heben on 2017/4/23.
 */

//import {combineReducers} from 'redux'
import {combineReducers} from '../../../src/redux/CombineReducers'
import {GET_ALL_BLOG} from '../../constants/Actions'

function reducer(state=[],action){
    switch(action.type){
        case GET_ALL_BLOG:
            return action.data;
        default :
            return state;
    }
}

export default combineReducers({
    r_blog_list:reducer
})

