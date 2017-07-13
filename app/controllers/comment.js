/**
 * Created by heben.hb on 2017/7/12.
 */


let Comment = require("../models").Comment;
let Message = require("../common/message");
let commentState = require('../common/constant').commentState;

exports.getByBlogId = function(req,res,next){
    let {blogId} = req.query;
    Comment.getByBlogId(blogId,function(err,comments){
        if(err) console.log("Comment getByBlogId error",err);
        else{
            let obj = Object.assign(Message.success,{data:comments});
            res.json(obj);
        }
    })
};

exports.create = function(req,res,next){
    let data = req.body;
    Comment.create(data,function(err,comment){
        if(err) {
            console.log("Comment create error",err);
            res.json(Message.error(err.message));
        }
        else{
            console.log("create comment",comment);
            res.json(Message.success);
        }
    })
};


exports.delete = function(req,res,next){
    let _id = req.params._id;
    Comment.delete(_id,function(err,comment){
        if(err) {
            console.log("Comment delete error",err);
            res.json(Message.error(err.message));
        }else{
            console.log("delete comment",comment);
            res.json(Message.success);
        }
    });
};

exports.getById = function(req,res,next){
    let _id = req.params._id;
    Comment.getById(_id,function(err,comment){
        if(err) console.log("Comment getById error",err);
        else{
        }
    });
};


exports.changeState = function(req,res){
    let {_id,state} = req.query;
    Comment.changeState(_id,state,function(err,doc){
        if(err) console.log("Comment changeState err",err);
        else {
            res.json(Message.success)
        }
    })
};
