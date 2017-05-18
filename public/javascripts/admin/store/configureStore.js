/**
 * Created by heben on 2017/4/28.
 */

//import {createStore} from 'redux'
//import {applyMiddleware} from 'redux'

import {createStore} from '../../../src/redux/CreateStore'
import {applyMiddleware} from '../../../src/redux/ApplyMiddleware'

import {logger,Debugger} from '../../constants/Logger'
import {reduxThunk} from '../../../src/redux/ReduxThunk'

export function configureStore(rootReducer,initialState){
    let store;
    if(process.env.NODE_ENV === 'production'){
        store = createStore(rootReducer,initialState,applyMiddleware(reduxThunk));
    }else{
        window.Debugger = Debugger;
        store = createStore(rootReducer,initialState,applyMiddleware(logger,reduxThunk));
    }
    return store;
}
