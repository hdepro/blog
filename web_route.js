/**
 * Created by heben on 2017/4/27.
 */

let express = require("express");
let Auth = require("./app/controllers/auth");
let Blog = require("./app/controllers/blog");
let Tag = require("./app/controllers/tag");
let File = require("./app/controllers/file");
let User = require("./app/controllers/user");

let route = express.Router();

route.get('/admin/page*',Auth.index);

route.get('/admin/logout',Auth.logout);
route.get('/admin/login', Auth.login);
route.post('/admin/login',Auth.loginSubmit);

route.post("/blog/create",Auth.restrict,Blog.create);
route.get("/blog/delete/:_id",Auth.restrict,Blog.delete);
route.post("/blog/edit",Auth.restrict,Blog.edit);
route.post("/blog/changeState",Auth.restrict,Blog.changeState);
route.get("/blog/getAll",Blog.getAll);
route.get("/blog/getById/:_id",Blog.getById);

route.post("/tag/create",Auth.restrict,Tag.create);
route.get("/tag/delete/:_id",Auth.restrict,Tag.delete);
route.post("/tag/edit",Auth.restrict,Tag.edit);
route.get("/tag/getAll",Tag.getAll);
route.get("/tag/getById/:_id",Tag.getById);


let multer = require('multer');
let upload = multer({ dest: 'uploads/multer'});
route.post("/uploadImage",upload.single("article-image"),File.uploadImage);
route.post("/uploadImageDataUrl",File.uploadImageDataUrl);
route.post("/uploadImageArrayBuffer",File.uploadImageArrayBuffer);

route.use("/",Auth.subscriber);

module.exports = route;
