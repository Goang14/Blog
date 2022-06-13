const path = require('path');
const express = require('express')
const morgan = require('morgan')
const app = express()
const hbs  = require('express-handlebars');
const { route } = require('./routes/news.route');

require('./routes')(app);

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))
app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

const db = require('./config/db');
db.connect();

app.listen(3000)