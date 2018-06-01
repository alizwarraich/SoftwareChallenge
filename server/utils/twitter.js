var rp = require('request-promise');
var config = require('../config');

var token = Buffer.from(''
  .concat(config.CONSUMER_KEY)
  .concat(':')
  .concat(config.CONSUMER_SECRET)
).toString('base64');

var options = {
  method: 'POST',
  uri: 'https://api.twitter.com/oauth2/token',
  headers: {
    'Authorization': 'Basic '.concat(token),
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  body: 'grant_type=client_credentials',
};

function _search(token, searchString) {

  var options = {
    uri: 'https://api.twitter.com/1.1/search/tweets.json',
    qs: {q: searchString},
    headers: {'Authorization': 'Bearer '.concat(token)}
  };

  return rp(options)
    .then(function(response) {
      return Promise.resolve(JSON.parse(response));
    })
    .catch(function(error) {
      return Promise.reject(error);
    });
}

var twitter = function() {
  var bearer_token = null;
  return {
    search: function (searchString) {
      if (!bearer_token) {
        return rp(options)
          .then(function(response) {
            bearer_token = JSON.parse(response).access_token;
            return _search(bearer_token, searchString);
          })
          .catch(function(err) {
            throw Error(err);
          });
      }

      return _search(bearer_token, searchString);
    },
  };
};

module.exports = twitter;