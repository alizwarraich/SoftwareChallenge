import {API_CALL} from '../globalActionTypes';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const Signup = (email, password, confirmPassword) => {
  return {
    type: API_CALL,
    types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR],
    method: 'POST',
    endpoint: '/signup',
    data: {email, password, confirmPassword},
  };
};