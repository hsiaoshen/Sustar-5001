var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session.uid);
  if (req.session.uid != undefined) {
    var uid = req.session.uid;
    res.render('question', {state: "true", uid: uid});
  }else {
    res.render('question', {state: "false", uid: ""});
  }
});

module.exports = router;
