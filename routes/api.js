var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("inside");
  res.send('respond with a resource');
});


/*
 * GET All phones.
 */
router.get('/phones', function(req, res) {
    console.log("inside");
    var db = req.db;
    var collection = db.get('phones');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});


/*
 * GET phone.
 */
router.get('/phone/:id', function(req, res) {
    var id = req.params.id;
    console.log("id inside "+id);
    
    try{
    	var db = req.db;
    	var collection = db.get('phones');
    }
    catch(err){
        res.statusCode = 404;
    	console.log ("Error while connecting to DB"+ err);
    	res.json({Error:'Error connecting to DB'});
    }
    
	if(collection!=null){
    	collection.find({'id':id},function(e,docs){
        	res.json(docs);
    	});
	} else{

		console.log ("Not Found: "+id);
        res.statusCode = 404;
		res.json("{Error:'ID Not found'}");
	}
});



/*
 * GET all articles.
 */
router.get('/articles', function(req, res) {
    console.log("inside");
    var db = req.db;
    var collection = db.get('articles');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});


/*
 * GET articles.
 */
router.get('/article/:id', function(req, res) {
    var id = req.params.id;
    console.log("id inside "+id);
    
    try{
        var db = req.db;
        var collection = db.get('articles');
    }
    catch(err){
        res.statusCode = 404;
        console.log ("Error while connecting to DB"+ err);
        res.json({Error:'Error connecting to DB'});
    }
    
    if(collection!=null){
        collection.find({'articleid':id},function(e,docs){
            res.json(docs);
        });
    } else{

        console.log ("Not Found: "+id);
        res.statusCode = 404;
        res.json("{Error:'ID Not found'}");
    }
});



module.exports = router;