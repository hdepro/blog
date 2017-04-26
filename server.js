/**
 * Created by heben on 2017/4/26.
 */

let bodyParser = require('body-parser');
let hash = require('pbkdf2-password')();
let path = require('path');
let express = require('express');
let session = require('express-session');

let app = module.exports = express();

// config
//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'app/views/admin'));

//设置静态文件访问

app.use(express.static(path.join(__dirname, 'public')));

// middleware

//app.use(bodyParser.urlencoded({ extended: false }));
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

// dummy database

let users = {
    tj: { name: 'tj' }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

hash({ password: 'foobar' }, function (err, pass, salt, hash) {
    if (err) throw err;
    // store the salt & hash in the "db"
    users.tj.salt = salt;
    users.tj.hash = hash;
});


// Authenticate using our plain-object database of doom!

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    let user = users[name];
    // query the db for the given username
    if (!user) return fn(new Error('cannot find user'));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    hash({ password: pass, salt: user.salt }, function (err, pass, salt, hash) {
        if (err) return fn(err);
        if (hash == user.hash) return fn(null, user);
        fn(new Error('invalid password'));
    });
}

function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

app.get('/', function(req, res){
    console.log("/",req.session.user,req.session.success);
    if(req.session.user) {
        res.redirect('/home');
    }else{
        res.redirect('/login');
    }
});

app.get('/restricted', restrict, function(req, res){
    res.send('Wahoo! restricted area, click to <a href="/logout">logout</a>');
});

app.get('/logout', function(req, res){
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(function(){
        res.redirect('/');
    });
});

app.get('/login', function(req, res){
    res.render('login');
});

app.get('/home', function(req, res){
    res.render('home');
});

app.post('/login', function(req, res){
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
                res.redirect('/home');
            });
        } else {
            req.session.error = 'Authentication failed, please check your '
                + ' username and password.'
                + ' (use "tj" and "foobar")';
            console.log("req.session.error");
            res.redirect('/login');
        }
    });
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}