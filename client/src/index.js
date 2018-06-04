import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './states/store';
import Header from './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import {history} from './states/middlewares/history/history';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header/>
        <Switch>
          <Route
            path='/'
            exact
            component={Search}
          />
          <Route
            path='/login'
            exact
            component={Login}
          />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
