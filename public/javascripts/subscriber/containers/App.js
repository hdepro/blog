/**
 * Created by heben on 2017/4/23.
 */

import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'

import {getAll} from '../actions/index'

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(getAll());
    }
    render(){
        let {blog_list} = this.props;
        return(
            <div>
                <ul>
                    {blog_list.map(li=><li>{li.title}</li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        blog_list:state.r_blog_list
    }
}

export default connect(mapStateToProps)(App)