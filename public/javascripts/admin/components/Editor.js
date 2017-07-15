/**
 * Created by heben on 2017/5/13.
 */

import React from 'react'

export class Editor extends React.Component{
    handleTextAreaChange= (e) =>{
        let refer = this.refs.input;
        refer.value = e.target.value;
        console.log(e.target.offsetHeight,refer.scrollHeight,refer.offsetHeight);
        e.target.rows = parseInt((refer.scrollHeight - refer.offsetHeight)/27)+15;
    };
    handleHeader = (str) =>{
        let node = document.querySelector("textarea");
        console.log(node.selectionStart,node.selectionEnd,str,node.value);
        let start = node.selectionStart;
        let index = node.value.lastIndexOf("\n",start);
        let value = node.value;
        node.value = value.slice(0,index+1)+str+value.slice(index+1);
    };
    handleShortCut(str){
        let node = document.querySelector("textarea");
        let start = node.selectionStart;
        let value = node.value;
        node.value = value.slice(0,start+1)+str+value.slice(start+1);
    }
    getData(){
        let value = this.refs.content.value;
        return value;
    }
    render(){
        const {defaultValue} = this.props;
        let textarea;
        if(defaultValue){
            textarea = <textarea key="defaultValue" className="editor" ref="content" rows="15" defaultValue={defaultValue}
                      onChange={this.handleTextAreaChange}/>;
        }else{
            textarea = <textarea key="not-defaultValue" className="editor" ref="content" rows="15"
                                 onChange={this.handleTextAreaChange}/>;
        }
        return(
            <div className="editor">
                <Header click={this.handleHeader}/>
                <ShortCut click={this.handleShortCut}/>
                {textarea}
                {/*ref={(input) => this.refer = input}*/}
                <textarea rows={1} ref="input"  style={{visibility:'hidden'}} />
            </div>
        )
    }
}

export class Header extends React.Component{
    handleClick = (e) => {
        e.preventDefault();
        let number = +e.target.textContent.replace("h","");
        let value = new Array(number).fill("#").join("")+" ";
        this.props.click(value);
    };
    render(){
        return(
            <div onClick={this.handleClick} className="header">
                <button>h1</button>
                <button>h2</button>
                <button>h3</button>
                <button>h4</button>
                <button>h5</button>
                <button>h6</button>
            </div>
        )
    }
}

export class ShortCut extends React.Component{
    handleClick = (e) => {
        e.preventDefault();
        let {name} = e.target;
        switch(name){
            case "code":
                let value = "```js\n\n```";
                this.props.click(value);
                break;
            case "link":
                value = "[]()";
                this.props.click(value);
                break;
            case "image":
                document.getElementsByName("article-image")[0].click();
                break;
            default :return ;
        }
    };
    handleInputChange = (e)=>{
        //document.getElementsByName("image-submit")[0].click();
        document.getElementsByName("image-form")[0].submit();
        document.getElementsByName("blank")[0].addEventListener("load",this.handleLoad);
    };
    handleLoad = (e)=>{
        console.log("e.target",e.target.contentWindow,e.target.contentDocument,e.target.contentDocument.body);
        let res = JSON.parse(e.target.contentDocument.body.innerText);
        let {name,url} = res;
        this.props.click(`![${name}](${url})`);
    };
    handleDataUrl(e){
        let input = e.target;
        let reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = function(){
            let url = reader.result;
            console.log("url",url);
            fetch('/uploadImageDataUrl',
                {
                    credentials:'include',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method:'POST',
                    body:'url='+url
                })
                .then(response =>response.json())
                .then(function(json){
                    console.log("josn",json);
                })
                .catch(e => console.log('error = ' + e))
        }
    }
    handleArrayBuffer(e){
        let input = e.target;
        let reader = new FileReader();
        reader.readAsArrayBuffer(input.files[0]);
        reader.onload = function(){
            let buffer = reader.result;
            console.log("buffer",buffer);
            fetch('/uploadImageArrayBuffer',
                {
                    credentials:'include',
                    headers:{
                        'Accept': 'application/json'
                    },
                    method:'POST',
                    body:buffer
                })
                .then(response =>response.json())
                .then(function(json){
                    console.log("json",json);
                })
                .catch(e => console.log('error = ' + e))
        }
    }
    render(){
        return(
            <div className="shortcut">
                <div onClick={this.handleClick} >
                    <img src="/images/iconfont/code.png" name="code"/>
                    <img src="/images/iconfont/链接.png" name="link"/>
                    <img src="/images/iconfont/图片.png" name="image"/>
                </div>
                <form action="/uploadImage" method="post" encType="multipart/form-data" style={{display:'none'}} name="image-form" target="blank">
                    <input type="file" name="article-image" onChange={this.handleInputChange}/>
                    <input type="submit" name="image-submit"/>
                </form>
                <iframe name="blank" style={{display:'none'}}/>
                {/*<input type="file" onChange={this.handleDataUrl}/>
                 <input type="file" onChange={this.handleArrayBuffer}/>*/}
            </div>
        )
    }
}