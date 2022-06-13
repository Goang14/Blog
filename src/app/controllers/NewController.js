class NewsController {
    new(req, res){
        res.render('news');
    }
}
module.exports = new NewsController;