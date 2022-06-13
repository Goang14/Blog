
const newRouter = require('./news.route');
const homeRouter = require('./home.router');
const searchRouter = require('./search.router');
const courseRouter = require('./course');

function route(app){

    app.use('/news', newRouter)
    
    app.use('/search', searchRouter);

    app.use('/course', courseRouter);

    app.use('/', homeRouter);
    
}
module.exports = route;