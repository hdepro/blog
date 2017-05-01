/**
 * Created by heben on 2017/5/1.
 */

let express = require('express');

let app = module.exports = express();

app.get(function(req, res, next) {
    console.log("get not /");
});

app.get('/', function(req, res, next) {
    console.log("get /");
    next();
});

app.use(function(req, res, next) {
    console.log("use not /");
    next();
});

app.use('/',function(req, res, next) {
    console.log("use /");
    next();
});

app.get('/a', function(req, res, next) {
    console.log("get /a");
    //res.send('/a');
    next();
});

app.use('/a', function(req, res, next) {
    console.log("use /a");
    //res.send('/a');
    next();
});

app.use('/a/b',function(req, res, next) {
    console.log("use /a/b");
    next();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(404);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
    res.send(err);
});

if (!module.parent) {
    app.listen(4000);
    console.log('Express started on port 4000');
}