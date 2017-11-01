var express = require('express');
var router = express.Router();
var db= require('../db.js')
var url= require('url')

var user= require('../models/user.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Real Time Multiplayer Game' });
});

router.post('/login',function (req, res) {


    user.getAllByUser(req.body.name, function(err, row){
      console.log(err+" ");
      if(err===null&&row.length==1){
        res.redirect(url.format({
           pathname:"/home",
           query: {
              "title": 'Real Time Multiplayer Game'
            }
         }));
      }else{

        user.create(req.body.name,function(error, data){
            if(error===null&&typeof data !== 'undefined'){
              res.redirect(url.format({
                 pathname:"/home",
                 query: {
                    "title": 'Real Time Multiplayer Game'
                  }
               }));
             }else{
              res.send({error: true, message: err});
            }
        })

      }
    })
/*
    user.create(req.body.name,function(error, data){
        if(error===null&&typeof data !== 'undefined'){
          res.render('home', { title: 'Real Time Multiplayer Game' });
        }else{
          res.send({error: true, message: err});
        }
    })
*/


});


module.exports = router;
