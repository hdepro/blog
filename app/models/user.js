/**
 * Created by heben on 2017/4/26.
 */

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    id:Number,
    email:String,
    name:String,
    password:String,
    createTime:Number,
    updateTime:Number
});

let User = mongoose.model("User",userSchema);

exports.create = function(data,callback){
    User.create(data,callback);
};

exports.getAll = function(callback){
    User.find(callback);
};
