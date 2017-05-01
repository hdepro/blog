/**
 * Created by heben on 2017/4/29.
 */

import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {GET_BLOG} from '../../constants/Actions'
import {Actions} from '../actions/index'

import {Card} from 'antd'

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.content = undefined;
    }
    componentWillMount(){
        let {dispatch} = this.props;
        let {params} = this.props.match;
        dispatch(Actions.getById(GET_BLOG,params._id));
    }
    componentDidMount(){
        this.content = document.getElementById("blog-content");
    }
    render(){
        let {c_blog} = this.props;
        if(c_blog.content) this.content.innerHTML=c_blog.content;
        return(
            <div id="blog">
                <h2 name="title">
                    {c_blog.title}
                    <span name="tag">{new Date(c_blog.createTime).toLocaleString()}</span>
                </h2>
                <div id="blog-content">
                </div>
                <h4>{c_blog.tagName}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        c_blog:state.r_blog
    }
}

export default connect(mapStateToProps)(Blog)