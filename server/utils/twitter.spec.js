var nock = require('nock');
var expect = require('chai').expect;
var sinon = require('sinon');
var twitter = require('./twitter');

describe('(module) twitter', () => {

  it('should return on object', () => {
    const twitterClient = twitter();
    expect(twitterClient).to.be.an('object');
  });

  it('should have a function `search`', () => {
    const twitterClient = twitter();
    expect(twitterClient.search).to.be.a('function');
  });

  describe('search', () => {

    before(() => {
      nock('https://api.twitter.com/1.1')
        .post(`/search/tweets.json`)
        .reply(200, {results: []});
      nock('https://api.twitter.com')
        .post(`/oauth2/token`)
        .reply(200, {results: []});
    });

    after(() => {
      nock.cleanAll();
    });

    it('should return a promise', () => {
      const twitterClient = twitter();
      const returnedSearch = twitterClient.search('');

      expect(returnedSearch.then).to.be.a('function');
      expect(returnedSearch.catch).to.be.a('function');
    });
  });
});