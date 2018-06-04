import {createStore as _createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import api from '../middlewares/api';
import history from '../middlewares/history';
import persistToken from '../middlewares/persistToken';

const createStore = (reducers, middlewares) => {
  return _createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};

const middlewares = [
  thunk,
  api,
  persistToken,
  history,
];

export default createStore(reducers, middlewares);
