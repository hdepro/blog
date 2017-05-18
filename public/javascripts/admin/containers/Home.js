/**
 * Created by heben on 2017/4/23.
 */

import React from 'react'
import {Link} from 'react-router-dom'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {GET_ALL_BLOG,DELETE_BLOG,CHANGE_BLOG_STATE} from '../actions/action-types'
import {Actions} from '../actions/index'

import {Button} from 'antd'
import {BlogItem} from '../components/BlogItem'

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log("Home componentWillMount");
        this.props.dispatch(Actions.getAll(GET_ALL_BLOG));
    }
    componentDidMount(){
        console.log("Home componentDidMount ",this.context.store,this.props,this.state);
    }
    deleteBlog = ({_id})=>{
        if(confirm("确认删除该博客吗")){
            this.props.dispatch(Actions.deleteById(DELETE_BLOG,_id));
        }
    };
    editBlog = ({_id})=>{
        this.props.history.push("/edit/"+_id);
    };
    changeState = ({_id,state}) => {
        let newState = {close:'open',open:'close'}[state];
        this.props.dispatch(Actions.changeState(CHANGE_BLOG_STATE,_id,newState));
    };
    render(){
        let {c_list} = this.props;
        const buttonConf = [
            {icon:'edit',name:'编辑',onClick:this.editBlog},
            {icon:'delete',name:'删除',onClick:this.deleteBlog},
            {icon:'lock',name:'私有',onClick:this.changeState,display:(data)=>data.state === "close"},
            {icon:'unlock',name:'公开',onClick:this.changeState,display:(data)=>data.state === "open"},
        ];
        return(
            <div id="home">
                <ul>
                    {c_list.map(blog=>{
                        return (
                            <Link to={"/blog/"+blog._id}>
                                <BlogItem {...blog} extra={<OperateButton data={blog} buttonConf={buttonConf}/>}/>
                                <br/>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        c_list:state.r_blog_list
    }
}

export default connect(mapStateToProps)(Home)


class OperateButton extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick = (e) => {
        const {buttonConf,data} = this.props;
        let target = e.target;
        while(target.tagName.toLowerCase() != "button"){
           target = target.parentNode;
        }
        target = buttonConf.find(b => b.name === target.name);
        const {onClick} = target;
        e.preventDefault();
        onClick && onClick(data);
    };
    render(){
        const {buttonConf,data} = this.props;
        return(
            <Button.Group onClick={this.handleClick}>
                {buttonConf.map((button,index) =>
                    !button.display || button.display(data)?<Button icon={button.icon} style={{marginRight:'10px'}} name={button.name}>{button.name}</Button>:null
                )}
            </Button.Group>
        )
    }
}