import {API_CALL} from '../globalActionTypes';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const Login = (email, password) => {
  return {
    type: API_CALL,
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR],
    method: 'POST',
    endpoint: '/login',
    data: {email, password},
  };
};