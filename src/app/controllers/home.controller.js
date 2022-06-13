const Course = require('../models/course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class HomeController {
    home(req, res, next) {
        Course.find({})
            .then(courses => {
               res.render('home', {
                   courses: mutipleMongooseToObject(courses)
                }) 
            })
            .catch(next);
    }
}
module.exports = new HomeController;