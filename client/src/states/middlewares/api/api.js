import {API_CALL} from '../../actions/globalActionTypes';
import apiClient from '../../../utils/apiClient';

export const createNormalAction = (type, data, errors) => {
  return {
    type,
    data,
    errors,
  };
};

export default () => (next) => (action) => {
  if (action.type !== API_CALL) {
    return next(action);
  }

  const { types, method, endpoint, data } = action;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('INVALID API ACTION TYPES: ' +
      'Api Action must have `types` as an array of length 3');
  }

  if (typeof endpoint !== 'string') {
    throw new Error('INVALID API ENDPOINT: ' +
      'Api Action must have `endpoint` of type string')
  }

  const [requestActionType, successActionType, errorActionType] = types;

  next(createNormalAction(requestActionType, action.data, []));

  const config = {data, method};

  console.log('API');

  return apiClient(endpoint, config)
    .then(response => {
      console.log('API_SUCCESS');
      return next(createNormalAction(successActionType, response.data, []));
    })
    .catch(response => {
      console.log('************8');
      console.log('API_ERROR');
      console.log(response);
      console.log('************8');
      if (response.data && response.data.errors) {
        return next(createNormalAction(errorActionType, {}, response.data.errors));
      } else if (response.error) {
        return next(createNormalAction(errorActionType, {}, [response.error]));
      }
      return next(createNormalAction(
        errorActionType,
        [
          'Error occurred but response does not provide specific error message',
          response,
        ]
      ));
    });
};