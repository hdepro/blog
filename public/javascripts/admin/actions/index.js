/**
 * Created by heben on 2017/4/23.
 */

import {fetchGet,fetchJsonPost} from '../../constants/Fetch'

class ActionClass{
    getAll(Action){
        return dispatch => {
            return fetchGet(Action.route, function (json) {
                console.log('json', json);
                dispatch({
                    type: Action,
                    data: json.data
                })
            })
        }
    }

    /**
     * @param {object} Action
     * @param {object} data
     * @return {object}
     */
    create(Action,data){
        return dispatch => {
            return fetchJsonPost(Action.route,data,function(json) {
                console.log('json', json);
                dispatch({
                    type: Action,
                    data: json.data
                })
            })
        }
    }

    edit(Action,data){
        return dispatch => {
            return fetchJsonPost(Action.route,data,function(json) {
                console.log('json', json);
                dispatch({
                    type: Action,
                    data: data
                })
            })
        }
    }

    getById(Action,_id){
        return dispatch => {
            return fetchGet(Action.route+`/${_id}`, function (json) {
                console.log('json', json);
                dispatch({
                    type: Action,
                    data: json.data
                })
            })
        }
    }
    deleteById(Action,_id){
        return dispatch => {
            return fetchGet(Action.route+`/${_id}`, function (json) {
                console.log('json', json);
                dispatch({
                    type: Action,
                    data: _id
                })
            })
        }
    }
}

export const Actions = new ActionClass();

