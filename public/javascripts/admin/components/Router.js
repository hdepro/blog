/**
 * Created by heben on 2017/4/27.
 */

import React from 'react'
//import {Router,Route} from 'react-router'
import {BrowserRouter,Router,Route} from 'react-router-dom'

import App from './App'
import CreateBlog from './CreateBlog'
import Blog from '../containers/Blog'
import Tag from '../containers/Tag'
import Home from '../containers/Home'

// export const route =(
//     <Router history={browserHistory}>
//         <Route path="/admin/home" compo  nent={App}>
//             <IndexRoute component={Blogs}/>
//             <Route path="create" component={CreateBlog}/>
//         </Route>
//     </Router>
// );

export const route =(
    <BrowserRouter basename="/admin/home">
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/blog/:_id" component={Blog}/>
            <Route path="/create" component={CreateBlog}/>
            <Route path="/edit/:_id" component={CreateBlog}/>
            <Route path="/tag" component={Tag}/>
        </App>
    </BrowserRouter>
);