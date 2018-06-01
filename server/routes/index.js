var express = require('express');
var router = express.Router();
var ROOT = require('../config').ROOT;

/* GET home page. */
router.get('/', function(req, res) {
  res.send({
    title: "",
    resources: [
      ROOT + '/tweets',
      ROOT + '/hello',
    ]
  });
});

module.exports = router;
