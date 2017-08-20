/**
 * Created by heben on 2017/4/29.
 */

import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {GET_BLOG,GET_BLOG_COMMENT,REPLY_COMMENT,DELETE_COMMENT} from '../actions/action-types'
import {Actions} from '../actions/index'

import {Button,Input,message} from 'antd'

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.content = undefined;
    }
    componentWillMount(){
        let {dispatch} = this.props;
        let {params} = this.props.match;
        dispatch(Actions.getById(GET_BLOG,params._id));
        dispatch(Actions.getAllByQuery(GET_BLOG_COMMENT,{blogId:params._id}));
    }
    componentDidMount(){
        this.content = document.getElementById("blog-content");
    }
    showReply(index){
        document.getElementsByClassName("reply")[index].classList.toggle("hide");
    }
    reply(_id,index){
        let {dispatch} = this.props;
        let reply = document.querySelectorAll("[name=reply")[index].value;
        dispatch(Actions.edit(REPLY_COMMENT,{_id,reply},()=>{
            message.success("回复成功",2,this.showReply);
        }));
    }
    deleteComment(_id){
        let {dispatch} = this.props;
        dispatch(Actions.deleteById(DELETE_COMMENT,_id,()=>{
            message.success("删除评论成功",2);
        }));
    }
    render(){
        let {c_blog,c_comment_list} = this.props;
        if(c_blog.content && this.content) this.content.innerHTML=c_blog.contentHtml;
        return(
            <div id="blog">
                <h2 name="title">
                    <span name="tag">{new Date(c_blog.createTime).toLocaleString()}</span>
                    {c_blog.title}
                </h2>
                <div id="blog-content">
                </div>
                <div className="comment">
                    <h4>评论 ( {c_comment_list.length} 条 )</h4>
                    <ul className="comments">
                        {c_comment_list.map((comment,index) => {
                            return (<li key={comment._id} className="comment-item">
                                <h5>{comment.nickname}</h5>
                                <p>
                                    {comment.content}
                                </p>
                                <p className="operation">
                                    <Button type="primary" ghost onClick={this.showReply.bind(this,index)}>回复</Button>
                                    <Button type="danger" ghost onClick={this.deleteComment.bind(this,comment._id)}>删除</Button>
                                </p>
                                <div className="reply hide">
                                    <Input defaultValue={comment.reply} name="reply" rows={5} type="textarea" placeholder="请输入回复"/>
                                    <Button type="primary" onClick={this.reply.bind(this,comment._id,index)}>确定</Button>
                                </div>
                            </li>)
                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        c_blog:state.r_blog,
        c_comment_list:state.r_comment_list
    }
}

export default connect(mapStateToProps)(Blog)