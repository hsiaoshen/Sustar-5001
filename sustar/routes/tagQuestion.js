var express = require('express');
var router = express.Router();
var tagdb = require('../db/tag.js');
var questions = require('../db/questions.js');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query);
  tagdb.tags.findOne({
      tag: req.query.tag
  }, function(err, doc) {
      if (err) console.log(err);
      if(doc){
          questions.qdb.find({
            tags:req.query.tag
          },function(err, data){
            if(err) console.log(err);
            if(data){
              // console.log(data);
              if (req.session.uid != undefined) {
                res.render('tagQuestion', {state: "true",tagName:doc.tag,describe:doc.describe,ans:data});
              }else {
                res.render('tagQuestion', {state: "false",tagName:doc.tag,describe:doc.describe,ans:data});
              }
            }
          });
      }
  });
});

module.exports = router;
