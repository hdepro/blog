/**
 * Created by heben on 2017/4/26.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {fetchJsonPost} from '../../constants/Fetch'
import {Debugger} from '../../constants/Logger'

class Login extends React.Component{
    confirm(){
        let [email,password] = [this.refs.email.value,this.refs.password.value];
        loginFetchPost({email,password});
    }
    render(){
        return(
            <div>
                <input type="email" ref="email" placeholder="请输入邮箱"/>
                <input type="password" ref="password" placeholder="请输入密码"/>
                <button onClick={this.confirm.bind(this)}>登录</button>
            </div>
        )
    }
}

ReactDOM.render(<Login />,document.getElementById("admin-login"));

window.Debugger = Debugger;

function loginFetchPost(data){
    fetchJsonPost("/login",data);
}



