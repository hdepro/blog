/**
 * Created by heben.hb on 2017/7/13.
 */

let mongoose  = require('mongoose');
let Schema = mongoose.Schema;

let recommendSchema = new Schema({
    name:{type:String,required:true},
    href:{type:String,required:true},
    description:String,
    createTime:Number,
    updateTime:Number
});

let Recommend = mongoose.model("Recommend",recommendSchema);

exports.create = function(data,callback){
    Object.assign(data,{createTime:+new Date()});
    Recommend.create(data,callback);
};

exports.getAll = function(callback){
    Recommend.find(callback);
};

exports.delete = function(_id,callback){
    Recommend.remove({_id},callback);
};



