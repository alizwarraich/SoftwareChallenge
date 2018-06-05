import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import auth from '../../utils/auth';

export const mapStateToProps = () => {
  return {
    isAuthorized: () => !!auth.getToken(),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      auth.removeToken();
      dispatch(push('/login'));
    },
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
