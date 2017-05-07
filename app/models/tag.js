/**
 * Created by heben on 2017/4/29.
 */
let mongoose  = require('mongoose');
let Schema = mongoose.Schema;

let tagSchema = new Schema({
    name:String,
    createTime:Number,
    updateTime:Number
});

let Tag = mongoose.model("Tag",tagSchema);

exports.create = function(data,callback){
    Object.assign(data,{createTime:+new Date()});
    Tag.create(data,callback);
};

exports.edit = function(data,callback){
    Object.assign(data,{updateTime:+new Date()});
    Tag.findById(data._id,function(err,blog){
        Object.assign(blog,data);
        blog.save(callback);
    });
};
exports.getAll = function(callback){
    Tag.find(callback);
};

exports.delete = function(_id,callback){
    Tag.remove({_id},callback);
};

exports.getById = function(_id,callback){
    Tag.findById(_id,callback);
};


