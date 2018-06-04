import React from 'react';
import {Route, Redirect} from 'react-router';

const ProtectedRoute = (props) => {

  const {isAuthorized} = props;

  return isAuthorized() ? (
    <Route {...props} />
  ) : (
    <Redirect to={{
      pathname: '/login',
      state: {from: props.location},
    }}/>
  );
};

export default ProtectedRoute;