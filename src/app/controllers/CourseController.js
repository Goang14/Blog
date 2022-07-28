const Course = require('../models/course')
const {mongooseToObject} = require('../../util/mongoose')

class CourseCotroller {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)})  
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const course = new Course();
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)}))
            .catch(next);
        
    }

    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)
    }

    delete(req, res, next) {

        res.json(req.body)
        // Course.deleteOne({_id: req.params.id})
        //     .then(() => res.redirect('back'))
        //     .catch(next)
    }
}
module.exports = new CourseCotroller();