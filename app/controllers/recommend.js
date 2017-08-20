/**
 * Created by heben.hb on 2017/7/13.
 */


let Recommend = require("../models").Recommend;
let Message = require("../common/message");


exports.getAll = function(req,res,next){
    Recommend.getAll(function(err,recommends){
        if(err) console.log("Recommend getAll error",err);
        else{
            let obj = Object.assign(Message.success,{data:recommends});
            res.json(obj);
        }
    })
};

exports.create = function(req,res,next){
    let data = req.body;
    Recommend.create(data,function(err,recommend){
        if(err) console.log("Recommend create error",err);
        else{
            console.log("create recommend",recommend);
            res.json(Object.assign(Message.success,{data:recommend}));
        }
    })
};

exports.delete = function(req,res,next){
    let _id = req.params._id;
    Recommend.delete(_id,function(err,recommend){
        if(err) console.log("Recommend delete error",err);
        else{
            console.log("delete recommend",recommend.result);
            res.json(Message.success);
        }
    });
};
