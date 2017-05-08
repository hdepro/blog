/**
 * Created by heben on 2017/4/27.
 */

let express = require("express");
let Auth = require("./app/controllers/auth");
let Blog = require("./app/controllers/blog");
let Tag = require("./app/controllers/tag");
let User = require("./app/controllers/user");

let route = express.Router();

route.get('/admin/home*',Auth.home);

route.get("/admin",Auth.index);
route.get('/admin/logout',Auth.logout);
route.get('/admin/login', Auth.login);
route.post('/admin/login',Auth.loginSubmit);
route.get('/admin/restricted', Auth.restrict, Auth.restrictCallback);

route.get("/blog/getAll",Blog.getAll);
route.post("/blog/create",Blog.create);
route.get("/blog/getById/:_id",Blog.getById);
route.get("/blog/delete/:_id",Blog.delete);
route.post("/blog/edit",Blog.edit);

route.get("/tag/getAll",Tag.getAll);
route.post("/tag/create",Tag.create);
route.get("/tag/getById/:_id",Tag.getById);
route.get("/tag/delete/:_id",Tag.delete);
route.post("/tag/edit",Tag.edit);

route.use("/",Auth.subscriber);

module.exports = route;
