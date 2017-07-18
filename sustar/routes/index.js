var express = require('express');
var router = express.Router();
var qdb = require('../db/questions.js');


/* GET home page. */
router.get('/', function(req, res) {
    var state;
    if (req.session.uid != undefined) {
        state = true;
    } else {
        state = false;
    };
    qdb.qdb.find({}, function(err, data){
      if (err) {
        console.log(err);
      }else {
        console.log(data);
        res.render('index', {
            state: state,
            data: data
        });
      }
    });
});

module.exports = router;
