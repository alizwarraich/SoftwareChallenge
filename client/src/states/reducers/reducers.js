import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tweets from './tweets';

export default combineReducers({
  tweets,
  router: routerReducer,
});