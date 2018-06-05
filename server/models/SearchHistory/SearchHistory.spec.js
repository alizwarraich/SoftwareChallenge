var expect = require('chai').expect;
var SearchHistory = require('./SearchHistory');

describe('(Model) SearchHistory', () => {
  describe('instance', () => {
    it('should automatically have `created`', () => {
      const searchHistory = new SearchHistory({searchString: 'Trump'});
      expect(searchHistory.created).to.be.a('Date');
    });

    it('should have `searchHistory` as required', () => {
      const searchHistory = new SearchHistory();
      searchHistory.validate((err) => {
        expect(err).to.not.be.undefined;
      });
    })
  });
});