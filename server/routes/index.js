var express = require('express');
var router = express.Router();
var ROOT = require('../config').ROOT;

/* GET home page. */
router.get('/', function(req, res) {
  res.send({
    title: "It's Summer So The Weather Is Supposed To Be Nice",
    resources: [
      ROOT + '/weather',
    ]
  });
});

module.exports = router;
