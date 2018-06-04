import React, { Component } from 'react';
import './App.css';
import Body from './components/Search';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Route
          key={i}
          path={path}
          component={Body(component)}
          exact={exact}
        />
      </div>
    );
  }
}

export default App;
