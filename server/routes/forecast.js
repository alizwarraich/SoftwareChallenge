var express = require('express');
var router = express.Router();
var API_KEY = require('../config').API_KEY;
var rp = require('request-promise');

router.get('/', function(req, res, next) {
  var host = 'http://samples.openweathermap.org/data/2.5/';
  var endpoint = 'forecast';

  rp(host + endpoint + '?id=5128581&appid=' + API_KEY)
    .then(function (response) {
      console.log('^^^^^^^^^^^^');
      console.log(response);
      console.log('^^^^^^^^^^^^');
      res.send(JSON.parse(response));
    })
    .catch(function(error) {
      res.send({
        error: error
      });
    });
});

module.exports = router;
