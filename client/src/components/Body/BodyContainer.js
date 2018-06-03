import {connect} from 'react-redux';
import {SearchTweets} from '../../states/actions/tweets';

export const mapStateToProps = (state) => {
  const {tweets: {data}} = state;

  return {
    tweets: data,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    searchTweets: (searchString) => {
      console.log('$$$$$$$$$$$$$444');
      console.log(searchString);
      console.log('$$$$$$$$$$$$$444');
      dispatch(SearchTweets(searchString));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);