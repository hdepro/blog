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

    create(Action,data,cb){
        return dispatch => {
            return fetchJsonPost(Action.route,data,function(json) {
                console.log('create', json);
                cb && cb();
                dispatch({
                    type: Action,
                    data: json.data
                })
            })
        }
    }

    edit(Action,data,cb){
        return dispatch => {
            return fetchJsonPost(Action.route,data,function(json) {
                console.log('edit', json);
                cb && cb();
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
    changeState(Action,_id,state){
        return dispatch => {
            return fetchGet(Action.route+`?_id=${_id}&state=${state}`, function (json) {
                console.log('json', json);
                dispatch({
                    type: Action,
                    data: {_id,state}
                })
            })
        }
    }
}

export const Actions = new ActionClass();

