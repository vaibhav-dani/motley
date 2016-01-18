var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*
 * GET article.
 */
router.get('/api/article/:id', function(req, res) {
    var db = req.db;
    var articles = db.get('articles');
    var article_id = parseInt(req.params.id);
    console.log(article_id);
    articles.find({'article_id':article_id},function(e,docs){
        res.json(docs);
    });
});





module.exports = router;
