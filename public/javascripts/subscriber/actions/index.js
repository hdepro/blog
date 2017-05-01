/**
 * Created by heben on 2017/4/27.
 */

import {fetchGet,fetchJsonPost} from '../../constants/Fetch'

import {GET_ALL_BLOG} from '../../constants/Actions'


export function getAll(){
    return dispatch => {
        return fetchGet(GET_ALL_BLOG.route, function (json) {
            console.log('json', json);
            dispatch({
                type: GET_ALL_BLOG,
                data: json.data
            })
        })
    }
}