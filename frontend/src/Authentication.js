import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Wrapper from './Components/UI/Wrapper';
import Home from './Pages/Home';
import CreateNotes from './Pages/CreateNotes';
import LoginAndSignin from './Pages/LoginAndSignin';

const PrivateRoute = ({ component: Page, auth, ...rest }) => (
  <Route
    {...rest}
    render={
      props => auth ? (
        <Wrapper>
          <Page {...props} /> 
        </Wrapper>
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
      <PrivateRoute exact auth={auth} path='/create-note' component={CreateNotes} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = ({ loginAndSignin }) => ({
  auth: loginAndSignin.userId !== null
});

export default connect(mapStateToProps)(Authentication);
