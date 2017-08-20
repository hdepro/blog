/**
 * Created by heben.hb on 2017/7/13.
 */

/**
 * Created by heben on 2017/4/29.
 */

import React from 'react'
//import {connect} from 'react-redux'
import {connect} from '../../../src/react-redux/Connect'
import {GET_ALL_RECOMMEND,CREATE_RECOMMEND,DELETE_RECOMMEND} from '../actions/action-types'
import {Actions} from '../actions/index'

import {Table,Input,Form,Button,message} from 'antd'
const FormItem = Form.Item;

class Recommend extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let {dispatch} = this.props;
        dispatch(Actions.getAll(GET_ALL_RECOMMEND));
    }
    showAdd(){
        document.getElementsByClassName("add-form").item(0).classList.add("show");
    }
    add = (e)=>{
        e.preventDefault();
        const callback = ()=>{
            message.success("添加推荐成功",2);
        };
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received create tag values of form: ', values);
                this.props.dispatch(Actions.create(CREATE_RECOMMEND,values,callback));
            }
        });
    };
    cancel = (e)=>{
        e.preventDefault();
        document.getElementsByClassName("add-form").item(0).classList.remove("show");
    };
    deleteRecommend(_id){
        this.props.dispatch(Actions.deleteById(DELETE_RECOMMEND,_id));
    };
    render(){
        let {c_recommend_list} = this.props;
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const columns = [
            {title: '标题', dataIndex: 'name', key: 'name'},
            {title: '地址', dataIndex: 'href', key: 'href'},
            {title: '操作', key: 'operation',render:(column,record,index)=>
                <Button type="danger" ghost onClick={this.deleteRecommend.bind(this,record._id)}>
                    删除
                </Button>
            },
        ];
        return(
            <div>
                <Button type="primary" icon="plus" onClick={this.showAdd}/>
                <Form layout="inline" ref="form" onSubmit={this.add} className="add-form">
                    <FormItem>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your tag name!' }],
                        })(
                            <Input type="text" placeholder="标签名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('href', {
                            rules: [{ required: true, message: 'Please input your href!' }],
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
                <Table
                    columns={columns}
                    dataSource={c_recommend_list}
                    pagination={false}
                />
            </div>
        )
    }
}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapStateToProps(state){
    return {
        c_recommend_list:state.r_recommend_list
    }
}

export default connect(mapStateToProps)(Form.create()(Recommend))
