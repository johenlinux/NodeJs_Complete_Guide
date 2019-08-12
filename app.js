const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Add Product'});
});

// app.get('/users', (req, res, next) => {

// });

// app.post('/add-user', (req, res, next) => {

// });

app.listen(8000);