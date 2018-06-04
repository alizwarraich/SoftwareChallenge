import jwtDecode from 'jwt-decode';
import moment from 'moment';

const AUTH_TOKEN = 'jwt';

const storage = window.localStorage;

const saveToken = (token) => {
  storage.saveItem(AUTH_TOKEN, token);
};

const getToken = () => {
  const token = storage.getItem(AUTH_TOKEN);
  if (token === undefined || token === 'undefined') {
    return null;
  }
  return token;
};

const removeToken = () => {
  storage.removeItem(AUTH_TOKEN);
};

const isExpired = (token) => {
  const decodedToken = jwtDecode(token);

  return moment.now() - decodedToken.exp > 0;
};

export default {
  AUTH_TOKEN,
  saveToken,
  getToken,
  removeToken,
  isExpired,
}