import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './states/store';
import {history} from './states/middlewares/history/history';
import Header from './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import Signup from './components/Signup';

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
          <Route
            path='/signup'
            exact
            component={Signup}
          />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
