import {createStore as _createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import api from '../middlewares/api';

const createStore = (reducers, middlewares) => {
  return _createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};

const middlewares = [
  thunk,
  api,
];

export default createStore(reducers, middlewares);
