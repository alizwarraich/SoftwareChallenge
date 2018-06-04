import {LOGIN_SUCCESS} from '../../actions/login/login';
import auth from "../../../utils/auth";

const persistToken = () => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    auth.saveToken(action.data.token);
  }
  return next(action);
};

export default persistToken;