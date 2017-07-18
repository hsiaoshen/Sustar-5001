var express = require('express');
var router = express.Router();
var db = require('../db/users.js');

/* GET home page. */
router.post('/', function(req, res) {
  db.udb.update({"uid": req.session.uid}, {"password": req.body.password}, function(err, doc){
    if (err) {
      console.log(err);
    }
    console.log(doc);
  });
  res.redirect("/");
});

module.exports = router;
