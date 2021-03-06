/**
 * Created by heben on 2017/4/26.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {fetchJsonPost} from '../../../constants/Fetch'
import {Debugger} from '../../../constants/Logger'
import './scss/style.scss'

import {Form, Icon, Input, Button, Checkbox} from 'antd'
const FormItem = Form.Item;

class Login extends React.Component{
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received login values of form: ', values);
                loginFetchPost(values);
            }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        )
    }
}

const LoginForm = Form.create()(Login);

ReactDOM.render(<LoginForm />,document.getElementById("admin-login"));

window.Debugger = Debugger;

function loginFetchPost(data){
    fetchJsonPost("/admin/login",data,function(json){
        location.assign("/admin/page");
    });
}



