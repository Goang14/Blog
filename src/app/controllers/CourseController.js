const Course = require('../models/course')
const {mongooseToObject} = require('../../util/mongoose')

class CourseCotroller {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('course/show', {course: mongooseToObject(course)})  
            })
            .catch(next);
    }
}
module.exports = new CourseCotroller();