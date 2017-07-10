/**
 * Created by heben on 2017/4/27.
 */

let mongoose  = require('mongoose');
let blogState = require('../common/constant').blogState;
let Schema = mongoose.Schema;

let blogSchema = new Schema({
    title:String,
    tagId:String,
    content:String,
    state:{type:String,default:blogState.close},
    createTime:Number,
    updateTime:Number
});

let Blog = mongoose.model("Blog",blogSchema);

exports.create = function(data,callback){
    Object.assign(data,{createTime:+new Date()});
    Blog.create(data,callback);
};

exports.edit = function(data,callback){
    data.updateTime = +new Date();
    Blog.findById(data._id,function(err,blog){
        //Object.assign(blog,data);
        //blog.save(callback);
        Blog.update({_id:blog._id},data,callback);
    });
};

exports.getAll = function(state,callback){
    //if(state) Blog.find({state},null,{sort:{createTime:-1}},callback);
    if(state) Blog.find({state}).sort({createTime:-1}).exec(callback);
    else Blog.find().sort({createTime:-1}).exec(callback);
};

exports.delete = function(_id,callback){
    Blog.remove({_id},callback);
};

exports.getById = function(_id,callback){
    Blog.findById(_id,callback);
};

exports.getByTagId = function(tagId,callback){
    Blog.find({tagId},callback);
};

exports.count = function(tagId,callback){
    return Blog.count({tagId},callback);
};

exports.changeState = function(_id,state,callback){
    Blog.update({_id},{state},callback)
};