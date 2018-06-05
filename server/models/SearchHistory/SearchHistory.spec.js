var expect = require('chai').expect;
var SearchHistory = require('./SearchHistory');
var User = require('../User');

describe('(Model) SearchHistory', () => {
  describe('instance', () => {
    it('should automatically have `created`', () => {
      const searchHistory = new SearchHistory({searchString: 'Trump'});
      expect(searchHistory.created).to.be.a('Date');
    });

    it('should have `searchHistory` as required', () => {

      const user = new User();

      user.save((err) => {
        const searchHistory = new SearchHistory({user: user._id});
        searchHistory.validate((err) => {

          expect(err.errors.searchString).to.be.an('object');
          expect(err.errors.user).to.be.undefined;

          User.deleteOne({_id: user._id});
        });
      });
    });

    it('should have `user` as required', () => {
      const searchHistory = new SearchHistory({searchString: 'covfefe'});
      searchHistory.validate((err) => {
        expect(err.errors.user).to.be.an('object');
        expect(err.errors.searchString).to.be.undefined;
      });
    });
  });
});