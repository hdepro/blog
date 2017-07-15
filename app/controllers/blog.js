/**
 * Created by heben on 2017/4/27.
 */
let markdown = require('markdown').markdown;
let marked = require('marked');

// let str = "aaaaaaaaaa  \nbbbbbbbbbbbbbbbbb  \nccccccccccccccccc<br>ddddddd";
// console.log(marked(str));
// console.log(markdown.toHTML(str));

let Blog = require("../models").Blog;
let Tag = require("../models").Tag;
let Message = require("../common/message");
let blogState = require('../common/constant').blogState;

const mdToHtml = (content,length) => {
    return marked(content.split(/[\n]+/).slice(0,length).join("  \n"));
};

exports.getAll = function(req,res,next){
    let state;
    if(!req.session.user) state = blogState.open;
    let {tag,search} = req.query;
    console.log("tag",tag);
    Blog.getAll(state,function(err,blogs){
        if(err) console.log("Blog getAll error",err);
        else{
            //console.log("getAll blogs",blogs);
            if(tag){
                Tag.getByName(tag,function(err,oneTag){
                    let data = blogs.filter(blog => blog.tagId == oneTag._id);
                    if(search) data = data.filter(blog => blog.title.includes(search));
                    data = data.map(blog => {
                        let data = blog.toObject();
                        data.contentHtml = mdToHtml(blog.content,6);
                        //console.log(data.content);
                        return data;
                    });
                    let obj = Object.assign(Message.success,{data});
                    res.json(obj);
                });
            }else{
                    let data = blogs;
                    if(search) data = blogs.filter(blog => blog.title.includes(search));
                    data = data.map(blog => {
                        let data = blog.toObject();
                        data.contentHtml = mdToHtml(blog.content,6);
                        //console.log(data.content);
                        return data;
                    });
                    let obj = Object.assign(Message.success,{data});
                    res.json(obj);
            }
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
                    Blog.getAll(blogState.open,function(err,blogs){
                        let index = blogs.findIndex(b => b._id == _id);
                        console.log("blogs",blogs,index);
                        data.prev = blogs[index-1];
                        data.next = blogs[index+1];
                        let obj = Object.assign(Message.success,{data});
                        res.json(obj);
                    });
                }
            });
        }
    });
};


exports.changeState = function(req,res){
    let {_id,state} = req.query;
    Blog.changeState(_id,state,function(err,doc){
        if(err) console.log("Blog changeState err",err);
        else {
            res.json(Message.success)
        }
    })
};
