import {LOGIN_SUCCESS} from '../../actions/login/login';
import auth from "../../../utils/auth";

const persistToken = () => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {

    console.log('###############');
    console.log('persisting token!');
    console.log('###############');

    auth.saveToken(action.data.token);
  }
  return next(action);
};

export default persistToken;