/**
 * Created by heben on 2017/4/29.
 */

import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {CREATE_TAG,GET_ALL_TAG} from '../../constants/Actions'
import {Actions} from '../actions/index'
import './scss/style.scss'

import {Tag,Input,Form,Button,Icon} from 'antd'
const FormItem = Form.Item;

class TagBox extends React.Component{
    constructor(props){
        super(props);
        this.content = undefined;
    }
    componentWillMount(){
        let {dispatch} = this.props;
        dispatch(Actions.getAll(GET_ALL_TAG));
    }
    showAdd(){
        document.getElementsByClassName("add-tag-form").item(0).classList.add("show");
    }
    add = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received create tag values of form: ', values);
                this.props.dispatch(Actions.create(CREATE_TAG,values));
            }
        });
    }
    cancel = (e)=>{
        e.preventDefault();
        document.getElementsByClassName("add-tag-form").item(0).classList.remove("show");
    }
    render(){
        let {c_tag_list} = this.props;
        const { getFieldDecorator, getFieldsError } = this.props.form;
        return(
            <div>
                <Button type="primary" icon="plus" onClick={this.showAdd}/>
                <Form layout="inline" ref="form" onSubmit={this.add} className="add-tag-form">
                    <FormItem>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your tag name!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                        >
                            确定
                        </Button>
                        <Button
                            htmlType="submit"
                            onClick={this.cancel}
                        >
                            取消
                        </Button>
                    </FormItem>
                </Form>
                {c_tag_list.map(tag => <Tag>{tag.name}</Tag>)}
            </div>
        )
    }
}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapStateToProps(state){
    return {
        c_tag_list:state.r_tag_list
    }
}

export default connect(mapStateToProps)(Form.create()(TagBox))
