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
    Object.assign(data,{updateTime:+new Date()});
    Blog.findById(data._id,function(err,blog){
        data.save(callback);
    });
};

exports.getAll = function(callback){
    Blog.find(callback);
};

exports.delete = function(_id,callback){
    Blog.remove({_id},callback);
};

exports.getById = function(_id,callback){
    Blog.findById(_id,callback);
};
