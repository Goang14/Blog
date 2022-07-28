const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config()
const hbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./routes')(app);

app.use(methodOverride('_method'))

const morgan = require('morgan')
app.use(morgan('combined'))

const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')))

//view engine
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        sum:(a, b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));


app.listen(process.env.PORT ||5000, ()=>{
    console.log(`Sever running on port ${process.env.PORT ||5000}`)
})

