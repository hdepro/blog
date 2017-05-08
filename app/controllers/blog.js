/**
 * Created by heben on 2017/4/27.
 */
let markdown = require('markdown').markdown;

let Blog = require("../models").Blog;
let Tag = require("../models").Tag;
let Message = require("../common/message");

const mdToHtml = (content,length) => {
    return markdown.toHTML(content.split(/\n+/).slice(0,length).join("\n\n"));
};

exports.getAll = function(req,res,next){
    Blog.getAll(function(err,blogs){
        if(err) console.log("Blog getAll error",err);
        else{
            //console.log("getAll blogs",blogs);
            let data = blogs.map(blog => {
                let data = blog.toObject();
                data.contentHtml = mdToHtml(blog.content,6);
                //console.log(data.content);
                return data;
            });
            let obj = Object.assign(Message.success,{data});
            res.json(obj);
        }
    })
};

exports.create = function(req,res,next){
    let data = req.body;
    //console.log("data",data);
    Blog.create(data,function(err,blog){
        if(err) console.log("Blog create error",err);
        else{
            console.log("create blog",blog);
            // create blog { __v: 0,
            //     title: 'test',
            //     tagId: '5910746d4ba73d1290b58e5f',
            //     content: 'ssss',
            //     createTime: 1494251885343,
            //     _id: 5910796d98681a112c20dc19,
            //     state: 'close' }
            let data = blog.toObject();
            data.contentHtml = mdToHtml(blog.content);
            res.json(Object.assign(Message.success,{data}));
        }
    })
};

exports.edit = function(req,res,next){
    let data = req.body;
    console.log("data",data);
    Blog.edit(data,function(err,blog){
        if(err) console.log("Blog edit error",err);
        else{
            console.log("edit blog",blog);   //edit blog { n: 1, nModified: 1, ok: 1 }
            res.json(Message.success);
        }
    })
};

exports.delete = function(req,res,next){
    let _id = req.params._id;
    Blog.delete(_id,function(err,blog){
        if(err) console.log("Blog delete error",err);
        else{
            //console.log("delete blog",blog.result);
            res.json(Message.success);
        }
    });
};

exports.getById = function(req,res,next){
    let _id = req.params._id;
    Blog.getById(_id,function(err,blog){
        if(err) console.log("Blog getById error",err);
        else{
            console.log("getById blog",blog);
            Tag.getById(blog.tagId,function(err,tag){
                if(err) console.log("tag getById error",err);
                else{
                    //blog.tagName = tag.name;
                    let data = blog.toObject();
                    data.contentHtml = mdToHtml(blog.content);
                    data.tagName = tag.name;
                    let obj = Object.assign(Message.success,{data});
                    res.json(obj);
                }
            });
        }
    });
};

exports.getByTagId = function(req,res,next){
    let tagId = req.params.tagId;
    Blog.getByTagId(tagId,function(err,doc){
        if(err) console.log("Blog getByTagId error",err);
        else{
            let obj = Object.assign(Message.success,{data:doc});
            res.json(obj);
        }
    })
};
