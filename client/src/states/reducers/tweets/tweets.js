import {SEARCH_TWEETS} from '../../actions/tweets';

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
    default:
      return initState;
  }
};

export default tweets;