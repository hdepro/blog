/**
 * Created by heben on 2017/4/29.
 */

import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {CREATE_TAG,GET_ALL_TAG,EDIT_TAG,DELETE_TAG} from '../../constants/Actions'
import {Actions} from '../actions/index'
import './scss/style.scss'

import {Tag,Input,Form,Button,Badge,message} from 'antd'
const FormItem = Form.Item;

class TagBox extends React.Component{
    constructor(props){
        super(props);
        this.input = document.createElement("input");
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
        const callback = ()=>{
            message.success("创建标签成功",2);
        };
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received create tag values of form: ', values);
                this.props.dispatch(Actions.create(CREATE_TAG,values,callback));
            }
        });
    };
    cancel = (e)=>{
        e.preventDefault();
        document.getElementsByClassName("add-tag-form").item(0).classList.remove("show");
    };
    onClose = (e) => {
        let target = e.target;
        while(target.dataset.id == undefined){
            target = target.parentNode;
        }
        if(confirm("确认删除吗")){
            this.props.dispatch(Actions.deleteById(DELETE_TAG,target.dataset.id));
        }
        e.stopPropagation();
    };
    handleClick = (e)=>{
        if(e.target.tagName == "INPUT") return;
        const target = Array.from(e.currentTarget.children).find(t => t.contains(e.target));
        // let children = e.currentTarget.children;
        // let len = children.length,target;
        // for(let i=0;i<len;i++){
        //     if(children[i].contains(e.target)){
        //         target = children[i];
        //         break;
        //     }
        // }
        console.log(e.currentTarget,e.target,target.dataset.id);
        this.input.defaultValue = target.dataset.name;
        this.input.onblur = () => {
            this.input.parentNode.replaceChild(target,this.input);
        };
        this.input.onkeydown = (e) => {
            if(e.keyCode == 13){
                this.input.blur();
                this.props.dispatch(Actions.edit(EDIT_TAG,{_id:target.dataset.id,name:this.input.value}));
            }
        };
        target.parentNode.replaceChild(this.input,target);
        this.input.focus();
    };
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
                            <Input type="text" placeholder="标签名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please input your tag description!' }],
                        })(
                            <Input type="text" placeholder="描述" />
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
                </Form><br/><br/>
                <div onClick={this.handleClick}>
                    {c_tag_list.map(tag => <Badge count={tag.count} data-id={tag._id} data-name={tag.name}>
                        <Tag closable={tag.count == 0} className="tag" onClose={this.onClose}>{tag.name}</Tag>
                    </Badge>)}
                </div>
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
