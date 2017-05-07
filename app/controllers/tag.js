/**
 * Created by heben on 2017/4/29.
 */


let Tag = require("../models").Tag;
let Blog = require("../models").Blog;
let Message = require("../common/message");

let events = require("events");
let myEventEmitter = new events.EventEmitter();

// exports.getAll = function(req,res,next){
//     Tag.getAll(function(err,tags){
//         if(err) console.log("Tag getAll error",err);
//         else{
//             let data = [],obj = {};
//             myEventEmitter.on('next',addResult);
//             function addResult(){
//                 data.push(obj);
//                 console.log("res tag",data.length,tags.length);
//                 if(data.length == tags.length){
//                     let obj = Object.assign(Message.success,{data});
//                     res.json(obj);
//                 }
//             }
//             for(let tag of tags){
//                 Blog.count(tag._id,function(err,doc){
//                     if(err) console.log("getByTagId count is failed",tag._id,err);
//                     else {
//                         obj = {};
//                         obj._id = tag._id;
//                         obj.name = tag.name;
//                         obj.createTime = tag.createTime;
//                         obj.count = doc;
//                         console.log(obj);
//                         myEventEmitter.emit('next');
//                     }
//                 })
//             }
//         }
//     })
// };

exports.getAll = function(req,res,next){
    Tag.getAll(function(err,tags){
        if(err) console.log("Tag getAll error",err);
        else{
            console.log("getAll tags",tags);
            Promise.all(tags.map(tag => Blog.count(tag._id,function(err,doc){
                if(err) console.log("getByTagId count is failed",tag._id);
                else console.log("count",doc);
            }).exec())).then(counts => {
                let data = tags.map((tag,index) => {
                    return Object.assign({count:counts[index]},tag.toObject());
                });
                let obj = Object.assign(Message.success,{data});
                res.json(obj);
            })
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