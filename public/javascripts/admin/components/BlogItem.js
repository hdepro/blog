/**
 * Created by heben on 2017/5/1.
 */

import React from 'react'

export class BlogItem extends React.Component{
    componentDidMount(){
        this.refs.content.innerHTML = this.props.contentHtml;
    }
    render(){
        const {title,createTime,extra} = this.props;
        return(
            <div className="item">
                <div className="header">
                    <div className="extra">
                        <p>发布于:&nbsp;&nbsp;{new Date(createTime).toLocaleString()}</p>
                        {extra}
                    </div>
                    <h3 className="title">{title}</h3>
                </div>
                <div className="content" ref="content">
                </div>
            </div>
        )
    }
}