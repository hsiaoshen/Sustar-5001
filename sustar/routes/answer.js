var express = require('express');
var router = express.Router();
var qdb = require('../db/questions.js')

/* GET home page. */
router.get('/:id', function(req, res) {
  var id = req.url.replace("/", "");
  var id = id.replace("?", "");
  var state;
  if (req.session.uid != undefined) {
      state = true;
  } else {
      state = false;
  };
  qdb.qdb.find({"_id": id}, function(err, data){
    res.render('answer', {state: state, data: data[0]});
  })
});

module.exports = router;
