/**
 * Created by heben on 2017/4/27.
 */

import React from 'react'
//import {connect} from 'react-redux'

import {connect} from '../../../src/react-redux/Connect'
import {CREATE_BLOG,GET_ALL_TAG,GET_BLOG,EDIT_BLOG} from '../actions/action-types'
import {Actions} from '../actions/index'

import {Form, Select, Input, Button,message} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;
import {Editor} from '../components/Editor'

class CreateBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {type:0};
        this.create=this.create.bind(this);
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
    create(e){
        e.preventDefault();
        const callback = ()=>{
            Debugger.log("创建博客成功");
            message.success("创建博客成功",2,()=>{
                //this.props.history.push("/");
            });
        };
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received create blog values of form: ', values);
                if(this.state.type) {
                    values._id = this.props.match.params._id;
                    values.content = this.refs.editor.getData();
                    this.props.dispatch(Actions.edit(EDIT_BLOG,values,callback));
                }
                else {
                    values.content = this.refs.editor.getData();
                    this.props.dispatch(Actions.create(CREATE_BLOG,values,callback));
                }
            }
        });
    }
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
                <Form onSubmit={this.create} className="create-blog-form" ref={(text) => this.formArea = text}>
                    <FormItem {...formItemLayout}>
                        <span className="ant-form-text">{this.state.type?"编辑博客":"创建新博客"}</span>
                    </FormItem>
                    <FormItem label="标题">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input your title!' }],
                            initialValue:c_blog.title
                        })(
                            <Input placeholder="在此输入标题" ref={(input) => this.title = input} size="large"/>
                        )}
                    </FormItem>
                    <FormItem
                        label="标签"
                    >
                        {getFieldDecorator('tagId', {
                            rules: [{ required: true, message: 'Please select your tag!' }],
                            initialValue:c_blog.tagId
                        })(
                            <Select placeholder="Select a tag">
                                {
                                    c_tag_list.map(tag => <Option value={tag._id}>{tag.name}</Option>)
                                }
                            </Select>
                        )}
                    </FormItem>
                    <h5>编辑内容</h5>
                    <Editor ref="editor" defaultValue={c_blog.content}/>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            确定
                        </Button>
                    </FormItem>
                    <FormItem label="编辑内容" style={{visibility:'hidden'}}>
                        <Input rows={1} type="textarea" ref={(input) => this.refer = input} />
                    </FormItem>
                </Form>
                {/*<iframe name="richedit" style={{height:'200px',width:'200px'}} src="">
                </iframe>*/}
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