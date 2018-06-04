import {SEARCH_TWEETS, SEARCH_TWEETS_ERROR, SEARCH_TWEETS_SUCCESS, SearchTweets} from '../../actions/tweets';
import tweets, {initState} from './tweets';
import {expect} from 'chai';

describe('(reducer) tweets', () => {

  it('returns empty list as initial state', () => {
    const action = {};
    const state = undefined;

    const newState = tweets(state, action);

    expect(newState).to.deep.equal(initState);
  });

  describe('on `SEARCH_TWEETS` action', () => {
    let action, state;

    beforeEach(() => {
      state = {isLoading: false, data: ['someOldData'], errors: []};
      action = {type: SEARCH_TWEETS, searchString: 'searchString'};
    });

    it('should set isLoading to `true`', () => {
      const newState = tweets(state, action);
      expect(newState.isLoading).to.be.true;
    });

    it('should set errors to empty list', () => {
      const newState = tweets(state, action);
      expect(newState.errors).to.be.an('array').that.is.empty;
    });

    it('should set data same as old data', () => {
      const newState = tweets(state, action);
      expect(newState.data).to.deep.equal(state.data);
    });
  });

  describe('on `SEARCH_TWEETS_SUCCESS` action', () => {
    let action, state;

    beforeEach(() => {
      state = {isLoading: true, data: {statuses: ['someOldData']}, errors: []};
      action = {type: SEARCH_TWEETS_SUCCESS, data: {statuses: ['someNewData']}};
    });

    it('should set isLoading to `false`', () => {
      const newState = tweets(state, action);
      expect(newState.isLoading).to.be.false;
    });

    it('should set errors to empty list', () => {
      const newState = tweets(state, action);
      expect(newState.errors).to.be.an('array').that.is.empty;
    });

    it('should map to statuses from data from action', () => {
      const newState = tweets(state, action);
      expect(newState.data)
        .to.be.an('array')
        .that.is.deep.equal(action.data.statuses);
    });
  });

  describe('on `SEARCH_TWEETS_ERROR` action', () => {
    let action, state;

    beforeEach(() => {
      state = {isLoading: true, data: ['someOldData'], errors: []};
      action = {type: SEARCH_TWEETS_ERROR, data: ['someNewData'], errors: ['someError']};
    });

    it('should set isLoading to `false`', () => {
      const newState = tweets(state, action);
      expect(newState.isLoading).to.be.false;
    });

    it('should set errors to empty list', () => {
      const newState = tweets(state, action);
      expect(newState.errors)
        .to.be.an('array')
        .that.is.deep.equal(action.errors);
    });

    it('should set data to be same as old data', () => {
      const newState = tweets(state, action);
      expect(newState.data)
        .to.be.an('array')
        .that.is.deep.equal(state.data);
    });
  });
});