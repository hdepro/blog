/**
 * Created by heben.hb on 2017/7/12.
 */

let mongoose  = require('mongoose');
let commentState = require('../common/constant').commentState;
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    blogId:{type:String,required:true},
    nickname:{type:String,required:true},
    contact:{type:String,required:true},
    content:{type:String,required:true},
    remark:String,
    reply:String,
    state:{type:String,default:commentState.close},
    createTime:Number,
    updateTime:Number
});

let Comment = mongoose.model("Comment",commentSchema);

exports.create = function(data,callback){
    let {blogId,nickname,contact,content,remark} = data;
    let obj = Object.assign({blogId,nickname,contact,content,remark},{createTime:+new Date()});
    Comment.create(obj,callback);
};

exports.getByBlogId = function(blogId,callback){
    if(blogId) Comment.find({blogId},null,{sort:{createTime:-1}},callback);
    else Comment.find().sort({createTime:-1}).exec(callback);
};

exports.delete = function(_id,callback){
    Comment.remove({_id},callback);
};

exports.getById = function(_id,callback){
    Comment.findById(_id,callback);
};

exports.count = function(blogId,callback){
    return Comment.count({blogId},callback);
};

exports.changeState = function(_id,state,callback){
    Comment.update({_id},{state},callback)
};