/**
 * Created by heben on 2017/4/26.
 */

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connected!");
});

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

function createUser(data,callback){
    User.create(data,callback);
}

function getAllUser(callback){
    User.find(callback);
}

createUser({
    id:1,
    email:"test1@test1",
    name:"test1",
    password:"test1",
    createTime:1,
    updateTime:1
},function(err,doc){
    if(err) console.log(err);
    else console.log(doc);
});