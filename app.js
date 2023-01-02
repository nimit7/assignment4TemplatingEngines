const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const users = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', (req, res, next) => {
    console.log('form Get');
    res.render('form', {
        pageTitle: 'Form',
    })
})

app.post('/form', (req, res, next) => {
    console.log('form Post');
    console.log(req)
    users.push({ name: req.body.name });
    res.redirect('/users');
})

app.use('/users', (req, res, next) => {
    console.log('Users');

    res.render('users', {
        pageTitle: 'Users',
        users: users
    })
})



app.listen(3006);