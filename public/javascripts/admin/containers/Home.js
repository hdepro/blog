/**
 * Created by heben on 2017/4/23.
 */

import React from 'react'
import {Link} from 'react-router-dom'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {GET_ALL_BLOG,GET_BLOG,DELETE_BLOG,EDIT_BLOG} from '../../constants/Actions'
import {Actions} from '../actions/index'

import {Card,Button,Icon} from 'antd'
import {Item} from '../../constants/components/Item'

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
    deleteBlog = (_id)=>{
        if(confirm("确认删除该博客吗")){
            this.props.dispatch(Actions.deleteById(DELETE_BLOG,_id));
        }
    }
    editBlog = (_id)=>{
        this.props.history.push("/edit/"+_id);
    }
    render(){
        let {c_list} = this.props;
        const buttonConf = [
            //{icon:'eye',name:'查看'},
            {icon:'edit',name:'编辑',onClick:this.editBlog},
            {icon:'delete',name:'删除',onClick:this.deleteBlog}
        ];
        return(
            <div id="home">
                <ul>
                    {c_list.map(blog=>{
                        return (
                            <Link to={"/blog/"+blog._id}>
                                <Item {...blog} extra={<OperateButton data={blog._id} buttonConf={buttonConf}/>}/>
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
        const {buttonConf} = this.props;
        return(
            <Button.Group onClick={this.handleClick}>
                {buttonConf.map((button,index) =>
                    <Button icon={button.icon} style={{marginRight:'10px'}} name={button.name}>{button.name}</Button>
                )}
            </Button.Group>
        )
    }
}