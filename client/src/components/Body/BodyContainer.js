import {connect} from 'react-redux';
import {SearchTweets} from '../../states/actions/tweets';

export const mapStateToProps = (state) => {
  const {tweets: {data, isLoading, errors}} = state;

  return {
    tweets: data,
    isLoading,
    errors,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    searchTweets: (searchString) => {
      dispatch(SearchTweets(searchString));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);