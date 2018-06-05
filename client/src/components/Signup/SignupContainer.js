import {connect} from 'react-redux';
import Signup from '../../states/actions/signup';

export const mapDispatchToProps = (dispatch) => {
  return {
    signup(email, password, confirmPassword) {
      dispatch(Signup(email, password, confirmPassword));
    }
  };
};

export default connect(
  () => ({}),
  mapDispatchToProps,
);