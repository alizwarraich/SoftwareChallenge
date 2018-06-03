var express = require('express');
var router = express.Router();
var twitter = require('../utils/twitter');

const fullCovfefier = (q) => (word) => word.toLowerCase() === q.toLowerCase() ? 'covfefe' : word;

router.get('/', function(req, res) {
  var twitterClient = twitter();
  var q = req.query.q;

  twitterClient.search(q).then(function(response) {
    if (!response) {
      return res.send({statuses: [], search_metadata: {}});
    }

    res.send({
      statuses: response.statuses.map((status) => ({
        ...status,
        text: status.text
          .split(' ')
          .map(fullCovfefier(q))
          .join(' '),
      })),
      search_metadadata: {...response.search_metadadata},
    });
  });
});

module.exports = router;
