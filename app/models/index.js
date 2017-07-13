/**
 * Created by heben on 2017/4/27.
 */

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog");
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connected!");
});

// require("./user");
// require("./blog");
// exports.User = mongoose.model("User");
// exports.Blog = mongoose.model("Blog");

exports.User = require("./user");
exports.Blog = require("./blog");
exports.Tag = require("./tag");
exports.Comment = require("./comment");