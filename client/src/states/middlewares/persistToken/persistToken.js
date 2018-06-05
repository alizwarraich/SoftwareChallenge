import {push} from 'react-router-redux';
import {LOGIN_SUCCESS} from '../../actions/login/login';
import auth from '../../../utils/auth';
import {SIGNUP_SUCCESS} from '../../actions/signup/signup';

const persistToken = ({dispatch}) => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS || action.type === SIGNUP_SUCCESS) {
    auth.saveToken(action.data.token);
    dispatch(push('/'));
  }
  return next(action);
};

export default persistToken;