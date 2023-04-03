const express = require('express');

const expressHbs = require('express-handlebars');

const mongoose = require('mongoose');

const methodOverride = require('method-override');

const uri = 'mongodb+srv://quantmph19466:ZehXhobhPJMbgUY7@cluster0.qiz9d1q.mongodb.net/user?retryWrites=true&w=majority'

const Models = require('./sv_model')

const app = express();

app.listen(3000);

app.use(express.json());

// thành phần trung gian xử lý form thành dạng object 
app.use(express.urlencoded());

app.use(methodOverride('_method'));

mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));

// Lay danh sach Get
app.get('/', (req, res) => {
    Models.find({})
        .then(sinhvien => {
            sinhvien = sinhvien.map(sinhvien => sinhvien.toObject())
            res.render('controller', {
                sinhvien: sinhvien
            })
        })
});

// render den man hinh Them
app.get('/mhthem', (req, res) => {
    res.render('signup', {
    });
});

// Them
app.post('/saveSv', (req, res) => {
    const model = new Models(req.body);
    model.save()
        .then(res.redirect('/'))
})

// render ra sua form
app.get('/:id/edit', (req, res) => {

    Models.findById(req.params.id)
        .then(sinhvien => {
            sinhvien = sinhvien.toObject()
            res.render('login', {
                sinhvien: sinhvien
            })
        });
})

// chuc namg sua 
app.post('/:id', async (req, res) => {
    Models.findByIdAndUpdate(req.params.id, req.body).
    then(res.redirect('/'));
})

app.get('/:id/delete', (req, res) => {
    Models.findOneAndRemove({_id: req.params.id})
    .then(res.redirect('/'))

});



app.engine('.handlebars', expressHbs.engine({
    extname: '.handlebars',
    defaultLayout: "main",
    layoutsDir: __dirname + '/views/layouts',
}));

app.set('view engine', '.handlebars');
