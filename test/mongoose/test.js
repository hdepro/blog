/**
 * Created by heben on 2017/4/27.
 */

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connected!");
});

let Schema = mongoose.Schema;

let testSchema = new Schema({
    title:String,
    content:String,
    createTime:Number,
    updateTime:Number
});

let Blog = mongoose.model("test1",testSchema);

function create(data,callback){
    Blog.create(data,callback);
}

function getAll(callback){
    Blog.find(callback);
}

function deletes(callback){
    Blog.remove({},callback);
}

create({
    title:1000,
    content:"content",
    createTime:"123",
    updateTime:1
},function(err,doc){
    if(err) console.log(err);
    else {
        console.log(doc);
        doc.remove({},function(err,doc){
            console.log("remove");
        });
        console.log("remove finished");
    }
});

console.log("heha");