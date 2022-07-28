const Course = require('../models/course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class MeController {

    storeCourses(req, res, next) {
        Course.find({})
            .then(course =>  res.render('me/storeCourses', {
                course: mutipleMongooseToObject(course)}))
            .catch(next)    
    }
}
module.exports = new MeController;