var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res) {
  req.session.uid = req.body.uid;
  res.redirect(req.body.url);
});

module.exports = router;
