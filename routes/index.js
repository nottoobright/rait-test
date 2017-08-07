var express = require('express');
var router = express.Router();
var HackerRank = require('machinepack-hackerrank');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  HackerRank.submit({
    apiKey: "hackerrank|596228-1682|550a055169e976e9e2add65f5e36a0224e760ee1",
    source: 'console.log("Hello World!")',
    language: 20,
    testcases: ["Hello World!"],
    wait: true,
    callbackUrl: 'http://example.com/callback',
    format: 'json',
    }).exec({
    error: function (err) {
      console.log(err);
    },
    success: function (data) {
      console.log(data);
    },
  });

});


module.exports = router;
