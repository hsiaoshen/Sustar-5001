var express = require('express');
var router = express.Router();

var db = require('../db/questions.js');

/* GET home page. */
router.get('/', function(req, res) {
  var state;
  if (req.session.uid != undefined) {
    state = "true";
  }else {
    state = "false";
  }
  var result = [{"title": "请输入关键词！"}];
  var j = 0;
  if (req.query.searchtext != undefined) {
    if (req.query.searchtext == ("?" || "+" || "*" || "^" || "$" )) {
      req.query.searchtext = " " + req.query.searchtext;
    }
    var key = new RegExp(req.query.searchtext, "gi");
    //提取拿出数据库问题集合中的所有文档
    db.qdb.find({},function(err, data){
      for (var i = 0; i < data.length; i++) {
        if (key.test(data[i])) {
          //将数据与用户匹配的文档全部放入result中
          result[j] = data[i];
          j++;
        };
      };
      if (result[0] == "请输入关键词！") {
        result = [{"title":"没有匹配到问题！"}];
      }
      res.render('search', { state: state, result: result});
    });
  }else {
    res.render('search', { state: state, result: result});
  };
});

module.exports = router;
