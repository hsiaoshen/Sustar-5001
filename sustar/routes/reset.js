var express = require('express');
var router = express.Router();
var db = require('../db/users.js');


/* GET home page. */
router.post('/', function(req, res) {
  db.udb.find({"uid": req.body.uid, "nick": req.body.nick}, function(err, data){
    if (err) {
      console.log(err);
    }else if( data[0] == null){
      res.render('find', {err: "err"});
    }else {
      req.session.uid = req.body.uid;
      res.render('reset');
    }
  });
});

module.exports = router;
