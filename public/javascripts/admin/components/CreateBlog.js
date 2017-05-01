/**
 * Created by heben on 2017/4/27.
 */

import {markdown} from 'markdown'
import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {CREATE_BLOG,GET_ALL_TAG} from '../../constants/Actions'
import {Actions} from '../actions/index'
import './scss/style.scss'

import {Form, Select, Input, Button} from 'antd'
const FormItem = Form.Item;

class CreateBlog extends React.Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
    }
    componentWillMount(){
        this.props.dispatch(Actions.getAll(GET_ALL_TAG))
    }
    add(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received create blog values of form: ', values);
                values.content = markdown.toHTML(values.content);
                this.props.dispatch(Actions.create(CREATE_BLOG,values));
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 60 },
            wrapperCol: { span: 14 },
        };
        const {c_tag_list} = this.props;
        if(this.props.match.path == "/edit"){

        }
        return(
            <div>
                <Form onSubmit={this.add} className="create-blog-form">
                    <FormItem {...formItemLayout}>
                        <span className="ant-form-text">创建新博客</span>
                    </FormItem>
                    <FormItem label="标题">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input your title!' }],
                        })(
                            <Input placeholder="在此输入标题" />
                        )}
                    </FormItem>
                    <FormItem
                        label="标签"
                    >
                        {getFieldDecorator('tagId', {
                            rules: [{ required: true, message: 'Please select your tag!' }]
                        })(
                            <Select placeholder="Select a option and change input text above">
                                {
                                    c_tag_list.map(tag => <Option value={tag._id}>{tag.name}</Option>)
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="编辑内容">
                        {getFieldDecorator('content', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input rows={10} type="textarea" placeholder="" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            创建
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        c_tag_list:state.r_tag_list
    }
}

export default connect(mapStateToProps)(Form.create()(CreateBlog))