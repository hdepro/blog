/**
 * Created by heben on 2017/4/27.
 */

import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {CREATE_BLOG,GET_ALL_TAG,GET_BLOG,EDIT_BLOG} from '../../constants/Actions'
import {Actions} from '../actions/index'
import './scss/style.scss'

import {Form, Select, Input, Button} from 'antd'
const FormItem = Form.Item;

class CreateBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {type:0};
        this.add=this.add.bind(this);
    }
    componentWillMount(){
        if(this.props.match.path == "/edit/:_id"){
            this.state.type = 1;
            this.props.dispatch(Actions.getById(GET_BLOG,this.props.match.params._id));
        }
        this.props.dispatch(Actions.getAll(GET_ALL_TAG));
    }
    componentDidMount(){
        //this.formArea.refs.text.reset();
        //document.getElementsByClassName("create-blog-form")[0].reset();
    }
    add(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received create blog values of form: ', values);
                if(this.state.type) {
                    values._id = this.props.match.params._id;
                    this.props.dispatch(Actions.edit(EDIT_BLOG,values));
                }
                else this.props.dispatch(Actions.create(CREATE_BLOG,values));
            }
        });
    }
    handleTextAreaChange= (e) =>{
        let refer = this.refer.refs.input;
        refer.value = e.target.value;
        console.log(e.target.offsetHeight,refer.scrollHeight,refer.offsetHeight);
        e.target.rows = parseInt((refer.scrollHeight - refer.offsetHeight)/17)+10;
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 60 },
            wrapperCol: { span: 14 },
        };
        let {c_tag_list,c_blog} = this.props;
        if(this.props.match.path == "/create"){c_blog={}}
        return(
            <div>
                <Form onSubmit={this.add} className="create-blog-form" ref={(text) => this.formArea = text}>
                    <FormItem {...formItemLayout}>
                        <span className="ant-form-text">{this.state.type?"编辑博客":"创建新博客"}</span>
                    </FormItem>
                    <FormItem label="标题">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input your title!' }],
                            initialValue:c_blog.title
                        })(
                            <Input placeholder="在此输入标题" ref={(input) => this.title = input}/>
                        )}
                    </FormItem>
                    <FormItem
                        label="标签"
                    >
                        {getFieldDecorator('tagId', {
                            rules: [{ required: true, message: 'Please select your tag!' }],
                            initialValue:c_blog.tagId
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
                            initialValue:c_blog.content,
                            onChange:this.handleTextAreaChange
                        })(
                            <Input rows={10} type="textarea" placeholder="" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            确定
                        </Button>
                    </FormItem>
                    <FormItem label="编辑内容" style={{visibility:'hidden11'}}>
                        <Input rows={1} type="textarea" ref={(input) => this.refer = input} />
                    </FormItem>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        c_tag_list:state.r_tag_list,
        c_blog:state.r_blog
    }
}

export default connect(mapStateToProps)(Form.create()(CreateBlog))