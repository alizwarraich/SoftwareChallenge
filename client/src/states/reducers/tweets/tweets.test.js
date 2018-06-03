import {SEARCH_TWEETS, SearchTweets} from '../../actions/tweets';
import tweets, {initState} from './tweets';
import {expect} from 'chai';

describe('(reducer) tweets', () => {

  it('returns empty list as initial state', () => {
    const action = {};
    const state = undefined;

    const newState = tweets(state, action);

    expect(newState).to.deep.equal(initState);
  });

  describe('on SearchTweet action', () => {
    let action, searchString, state;
    beforeEach(() => {
      state = {
        isLoading: false,
        data: [],
        errors: [],
      };
      action = {type: SEARCH_TWEETS, searchString: 'searchString'};
    });

    it('should set isLoading to `true` and errors to empty list', () => {
      const newState = tweets(state, action);

      expect(newState.isLoading).to.be.true;
      expect(newState.errors)
        .to.be.an('array')
        .that.is.empty;
    });
  });
});