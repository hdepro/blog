/**
 * Created by heben on 2017/4/27.
 */

let secure = require('pbkdf2-password')();
let Message = require("../common/message");

// dummy database

let users = [
    {name:"heben",password:"123"}
];

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)


// Authenticate using our plain-object database of doom!

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    let user = users.find(u => u.name === name);
    // query the db for the given username
    if (!user) return fn(new Error('cannot find user'));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    // secure({ password: pass, salt: key }, function (err, pass, salt, hash) {
    //     if (err) return fn(err);
    //     if (hash == hashKey) return fn(null, user);
    //     fn(new Error('invalid password'));
    // });
    if(pass === user.password) return fn(null,user);
    fn(new Error('invalid password'));
}

function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/admin/login');
    }
}

exports.index = function(req, res){
    console.log("/",req.session.user,req.session.success);
    if(req.session.user) {
        res.redirect('/admin/home');
    }else{
        res.redirect('/admin/login');
    }
};

exports.restrict = restrict;
exports.restrictCallback = function(req, res){
    res.send('Wahoo! restricted area, click to <a href="/logout">logout</a>');
};

exports.logout = function(req, res){
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(function(){
        res.redirect('/admin');
    });
};

exports.login = function(req, res){
    res.render('admin/login');
};

exports.home = function(req, res){
    res.render('admin/home');
};

exports.loginSubmit = function(req, res){
    console.log(req.body.email, req.body.password);
    authenticate(req.body.email, req.body.password, function(err, user){
        if (user) {
            // Regenerate session when signing in
            // to prevent fixation
            req.session.regenerate(function(){
                // Store the user's primary key
                // in the session store to be retrieved,
                // or in this case the entire user object
                req.session.user = user;
                req.session.success = 'Authenticated as ' + user.name
                    + ' click to <a href="/logout">logout</a>. '
                    + ' You may now access <a href="/restricted">/restricted</a>.';
                //console.log("referer",res.header("referer"));
                //res.redirect('back');
                //res.redirect('/home');    //fetch请求无法重定向
                res.json(Message.success);
            });
        } else {
            req.session.error = 'Authentication failed, please check your '
                + ' username and password.'
                + ' (use "tj" and "foobar")';
            console.log("req.session.error");
            res.redirect('/admin/login');
        }
    });
};

exports.subscriber = function(req,res){
    res.render("subscriber/home");
};
