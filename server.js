var express = require('express');

var expressHbs = require('express-handlebars');
const Student = require('./user.js');

var user = require('./user.js');

let s1 = new user("quantmph19466@fpt.edu.vn", "ph19466","hi");


var app = express();

app.listen(3000);


app.engine('.handlebars', expressHbs.engine({
    extname: '.handlebars',
    defaultLayout: "main",
    layoutsDir: __dirname + '/views/layouts',
}));

app.set('view engine', '.handlebars');

app.get('/', function (req, res) {

    res.render('login', {
        layouts: 'main',
       
    });
});

app.post('/signup', function (req, res) {
    res.render('signup', {
        layouts: 'main',
    });
});

app.get('/signup', function (req, res) {
    res.render('signup', {
        layouts: 'main',
        
    });
});

app.get('/controller', function (req, res) {
        res.render('controller', {
            layouts: 'main',
        });
   
});