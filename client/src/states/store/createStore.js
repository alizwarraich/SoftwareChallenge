import { createStore as _createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const createStore = (reducers, middlewares) => {
  return _createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};

const middlewares = [];

export default createStore(reducers, middlewares);
