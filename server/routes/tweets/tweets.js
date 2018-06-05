const
  express = require('express'),
  router = express.Router(),
  twitter = require('../../utils/twitter'),
  SearchHistory = require('../../models/SearchHistory');

const fullCovfefier = (q) => (word) => word.toLowerCase() === q.toLowerCase() ? 'covfefe' : word;

router.get('/', (req, res) => {
  const twitterClient = twitter();
  const q = req.query.q;
  const user = req.user;

  twitterClient.search(q)
    .then((response) => {
      if (!response) {
        return res.send({statuses: [], search_metadata: {}});
      }

      const history = new SearchHistory({
        user: user._id,
        searchString: q,
      });

      history.save((err) => {

        if (err) {return res.status(500).send(err);}

        return res.status(200).send({
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
    })
    .catch((error) => res.status(400).send({error: error}));
});

module.exports = router;
