/**
 * Created by heben on 2017/4/27.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'

export default class Navigation extends React.Component{
    render(){
        return(
            <Menu mode="inline" theme="dark">
                <Menu.Item><Link to="/">我的博文</Link></Menu.Item>
                <Menu.Item><Link to="/create">新建博文</Link></Menu.Item>
                <Menu.Item><Link to="/tag">标签管理</Link></Menu.Item>
            </Menu>
        )
    }
}


