var express = require('express');

var expressHbs = require('express-handlebars');

var user = require('./user.js');


var mongoose = require('mongoose');

const uri = 'mongodb+srv://quantmph19466:ZehXhobhPJMbgUY7@cluster0.qiz9d1q.mongodb.net/user?retryWrites=true&w=majority'

const models = require('./sv_model')
var app = express();


app.get("/sinhvien", async (request, response) => {
   
    // Bước đầu kết nối db 
    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));

    // Thêm await vì kết nối  bất đồng bộ ==> cái này quan trọng (Chưa xử lý xong đã chuyển sang câuu lệnh tiếp)
    // Hướng xử lý là đặt vào hàm await hoặc try catch
    let sinhviens = await models.find();

    try {
        console.log(sinhviens);
        response.send(sinhviens);
    } catch (error) {
        response.status(500).send(error);
    }
        
   
});
app.post("/add_sv", async (request, response) => {

    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));

    let sv = new svModel({
        ten: 'Tran Van Anh',
        tuoi: 22
    });

    sv.diachi = 'HP';

    try {
        console.log(sv);
        await sv.save();
        response.send(sv);
    } catch (error) {
        response.status(500).send(error);
    }
});


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