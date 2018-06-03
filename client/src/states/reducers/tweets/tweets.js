import {SEARCH_TWEETS, SEARCH_TWEETS_ERROR, SEARCH_TWEETS_SUCCESS} from '../../actions/tweets';

export const initState = {
  data: [],
  isLoading: false,
  errors: [],
};

const tweets = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_TWEETS:
      return {
        ...state,
        errors: [],
        isLoading: true,
      };
    case SEARCH_TWEETS_SUCCESS:
      return {
        data: [...action.data],
        errors: [],
        isLoading: false,
      };
    case SEARCH_TWEETS_ERROR:
      return {
        data: [...state.data],
        errors: [...action.errors],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default tweets;