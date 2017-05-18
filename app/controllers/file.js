/**
 * Created by heben on 2017/5/14.
 */

let fs = require("fs");

exports.uploadImage = function(req,res,next){
    console.log("req.file = ",req.file,req.file.filename);
    res.json({name:req.file.originalname,url:"/multer/"+req.file.filename});
};


exports.uploadImageArrayBuffer = function(req,res,next){
    req.on("data",function(chunk){
        console.log("chunk",chunk.length,chunk);
        let bitmap = new Buffer(chunk);
        let filename = Math.random().toString(36).substring(2);
        fs.writeFileSync("uploads/buffer/"+filename+".png", bitmap);
    });
    res.json({});
};

exports.uploadImageDataUrl = function(req,res,next){
    let data = req.body.url;
    data = data.replace(/^data:image\/\w+;base64,/, "").replace(/\s/g,"+");
    console.log("data",data,typeof data);
    let bitmap = new Buffer(data, 'base64');
    let filename = Math.random().toString(36).substring(2);
    fs.writeFileSync("uploads/dataurl/"+filename+".png", bitmap);
    res.json({});
};



