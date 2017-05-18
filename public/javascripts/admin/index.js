/**
 * Created by heben on 2017/4/23.
 */
import 'babel-polyfill'
import React from'react'
import ReactDOM from'react-dom'

//import {Provider} from 'react-redux'
import {Provider} from '../../src/react-redux/Provider'

import {configureStore} from './store/ConfigureStore'

import rootReducer from './reducers/index'
import {route} from './components/Router'

const store = configureStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>, document.getElementById("admin-home")
);

