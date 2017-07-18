var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('find', {err: "123"});
});

module.exports = router;
