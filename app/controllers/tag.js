/**
 * Created by heben on 2017/4/29.
 */


let Tag = require("../models").Tag;
let Message = require("../common/message");

exports.getAll = function(req,res,next){
    Tag.getAll(function(err,tags){
        if(err) console.log("Tag getAll error",err);
        else{
            console.log("getAll tags",tags);
            let obj = Object.assign(Message.success,{data:tags});
            res.json(obj);
        }
    })
};

exports.create = function(req,res,next){
    let data = req.body;
    console.log("data",data);
    Tag.create(data,function(err,tag){
        if(err) console.log("Tag create error",err);
        else{
            console.log("create tag",tag);
            res.json(Message.success);
        }
    })
};

exports.edit = function(req,res,next){
    let data = req.body;
    console.log("data",data);
    Tag.edit(data,function(err,tag){
        if(err) console.log("Tag edit error",err);
        else{
            console.log("edit tag",tag);
            res.json(Message.success);
        }
    })
};

exports.delete = function(req,res,next){
    let _id = req.params._id;
    Tag.delete(_id,function(err,tag){
        if(err) console.log("Tag delete error",err);
        else{
            console.log("delete tag",tag.result);
            res.json(Message.success);
        }
    });
};

exports.getById = function(req,res,next){
    let _id = req.params._id;
    Tag.getById(_id,function(err,tag){
        if(err) console.log("Tag getById error",err);
        else{
            console.log("getById tag",tag);
            let obj = Object.assign(Message.success,{data:tag});
            res.json(obj);
        }
    });
};