var express = require('express');
var router = express.Router();
// var db = require('../db/tag.js');


router.get('/', function(req, res) {
  var state ;
  if(req.session.uid != undefined){
      state = true;
  }
  else{
    state = false;
  }
  res.render('tag', { title: 'Sustar', state: state});
});

module.exports = router;
