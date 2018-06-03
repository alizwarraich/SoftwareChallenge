import {API_CALL} from '../globalActionTypes';

export const SEARCH_TWEETS = 'SEARCH_TWEETS';
export const SEARCH_TWEETS_ERROR = 'SEARCH_TWEETS_ERROR';
export const SEARCH_TWEETS_SUCCESS = 'SEARCH_TWEETS_SUCCESS';

export const SearchTweets = (searchString) => {
  return {
    type: API_CALL,
    endpoint: `/tweets?q=${searchString}`,
    types: [SEARCH_TWEETS, SEARCH_TWEETS_SUCCESS, SEARCH_TWEETS_ERROR],
  };
};
