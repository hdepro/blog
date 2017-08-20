/**
 * Created by heben on 2017/4/27.
 */

import React from 'react'
import Navigation  from './Navigation'
import {Layout} from 'antd'
const { Header,Sider,Content } = Layout;

export default class App extends React.Component{
    render(){
        return(
            <Layout>
                <Sider width={200}>
                    <Navigation/>
                </Sider>
                <Content style={{padding:'20px',minHeight:'1000px',fontSize:'16px'}}>
                    {this.props.children}
                </Content>
            </Layout>
        )
    }
}

