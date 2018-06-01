var express = require('express');
var router = express.Router();
var twitter = require('../utils/twitter');

router.get('/', function(req, res) {
  var twitterClient = twitter();
  var q = req.query.q;

  twitterClient.search(q).then(function(response) {
    res.send(response);
  });
});

module.exports = router;
