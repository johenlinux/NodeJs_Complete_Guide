const express = require('express');
const bodyParser = require('body-parser');
const expresshbs = require('express-handlebars');
var users = [];
const app = express();

//app.engine('hbs', expresshbs({ defaultLayout: 'main-layout', extname: 'hbs' }));

app.use(bodyParser.urlencoded( {extended: false} ));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Users', 
        users: users,
        hasUsers: users.length >0
    });
});

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Add Users'})
});

app.post('/add-users', (req, res, next) => {
    users.push({name: req.body.title});
    res.redirect('/');
});

app.listen(8000);