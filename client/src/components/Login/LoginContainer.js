import {connect} from 'react-redux';
import Login from '../../states/actions/login';

export const mapDispatchToProps = (dispatch) => {
  return {
    login(email, password) {
      dispatch(Login(email, password));
    }
  };
};

export default connect(
  () => ({}),
  mapDispatchToProps,
);