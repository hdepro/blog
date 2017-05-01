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
    render(){
        let {c_list} = this.props;
        const buttonConf = [
            {icon:'eye',name:'查看'},
            {icon:'edit',name:'编辑'},
            {icon:'delete',name:'删除'}
        ];
        return(
            <div id="home">
                <ul>
                    {c_list.map(blog=>{
                        return (
                            <Link to={"/blog/"+blog._id}>
                                <Item {...blog} extra={<OperateButton buttonConf={buttonConf}/>}/>
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


const OperateButton = ({buttonConf}) => {
    return(
        <Button.Group>
            {buttonConf.map(button =>
                <Button icon={button.icon} style={{marginRight:'10px'}}>{button.name}</Button>
            )}
        </Button.Group>
    )
};