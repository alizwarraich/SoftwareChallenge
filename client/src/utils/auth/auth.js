import jwtDecode from 'jwt-decode';
import moment from 'moment';

export const AUTH_TOKEN = 'jwt';

const storage = window.localStorage;

export const saveToken = (token) => {
  storage.saveItem(AUTH_TOKEN, token);
};

export const getToken = () => {
  const token = storage.getItem(AUTH_TOKEN);
  if (token === undefined || token === 'undefined') {
    return null;
  }
  return token;
};

export const removeToken = () => {
  storage.removeItem(AUTH_TOKEN);
};

export const isExpired = (token) => {
  const decodedToken = jwtDecode(token);

  return moment.now() - decodedToken.exp > 0;
};