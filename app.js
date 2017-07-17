/**
 * Created by heben on 2017/4/26.
 */

let bodyParser = require('body-parser');
let path = require('path');
let express = require('express');
let session = require('express-session');
let webRoute = require('./web_route');

let app = module.exports = express();

// config
//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'app/views'));
app.set('port', process.env.PORT || 3000);

//设置静态文件访问
app.use(express.static(path.join(__dirname, 'public'),{maxAge:50000}))   ;
app.use(express.static(path.join(__dirname, 'uploads'),{maxAge:50000}));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret'
}));

// Session-persisted message middleware
app.use(function(req, res, next){
    let err = req.session.error;
    let msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});

app.use("/",webRoute);

process.on('uncaughtException', function (err) {
    //打印出错误
    console.log(err);
    //打印出错误的调用栈方便调试
    console.log(err.stack);
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 80');
}