const homeRouter = require('./home.router');
const courseRouter = require('./courses');
const meoRouter = require('./me');


function route(app){
    app.use('/courses', courseRouter);
    app.use('/me', meoRouter);
    app.use('/', homeRouter); 
}

module.exports = route;