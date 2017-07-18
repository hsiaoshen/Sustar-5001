var express = require('express');
var router = express.Router();
var query = require('querystring');
var db= require('../db/users.js');

/* GET home page. */
router.get('/', function(req, res) {
  var state;
  if (req.session.uid != undefined) {
    state = true;
  }else {
    state = false;
  }
  var infos = req.query;
  console.log(infos);

  db.udb.update({'uid': req.session.uid},infos,
  {multi:true,upsert:true},
  function (err,docs) {
    if (err) {
      console.log(err);
    }else {
      console.log('修改');
      db.udb.findOne({'uid': req.session.uid}, function(err, data){
          // console.log(data+'```````````');
      res.render('info', {
        nick: data.nick,
        prestige:100,
        follow:99,
        Collection:99,
        Praise:99,
        state: state,
        // img:data.img,
        address:data.address,
        School:data.School,
        company:data.company,
        Website: data.Website,
        jianjie: data.jianjie,
        skill: '好懒，好不想写，就是全能',
        project: '好懒，好不想写'
      });
    });
    }
  });
})
module.exports = router;
