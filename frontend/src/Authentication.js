import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Home from './Pages/Home';
import LoginAndSignin from './Pages/LoginAndSignin';

const PrivateRoute = ({ component: Page, auth, ...rest }) => (
  <Route
    {...rest}
    render={
      props => auth ? (
        <Page {...props} /> 
      ) : (
        <Redirect to={{ pathname: '/auth' }} />
      )
    }
  />
);

const Authentication = ({ auth }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/auth' component={LoginAndSignin} />
      <PrivateRoute exact auth={auth} path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = ({ loginAndSignin }) => ({
  auth: loginAndSignin.userId !== null
});

export default connect(mapStateToProps)(Authentication);
