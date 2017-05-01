/**
 * Created by heben on 2017/4/27.
 */

import 'babel-polyfill'
import React from'react'
import ReactDOM from'react-dom'

//import {Provider} from 'react-redux'
import {Provider} from '../../src/react-redux/Provider'

import {configureStore} from '../constants/ConfigureStore'
import rootReducer from './reducers/index'

import App from './containers/App'

const store = configureStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("subscriber")
);
