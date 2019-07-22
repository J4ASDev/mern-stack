import React, { Component } from 'react';
import LoginAndSigninLayout from '../Components/LoginAndSignin';

import { connect } from 'react-redux';
import { loginAndSignin } from '../actions/loginAndSignin';

import { withRouter } from 'react-router-dom';

class LoginAndSignin extends Component {
  state = {
    singin: false
  }

  handleToggle = () => {
    this.setState(prevState => ({ singin: !prevState.singin }));
  }

  handleAuth = (event, actionType) => {
    event.preventDefault();

    const form = document.getElementById('authForm');
    const data = new FormData(form);

    const username = data.get('username');
    const password = data.get('password');

    this.props.history.push('/');
    this.props.loginAndSignin({ username, password }, actionType);
  }

  render() {
    return (
      <LoginAndSigninLayout
        singin={this.state.singin}
        handleToggle={this.handleToggle}
        handleAuth={this.handleAuth}
      />
    );
  }
}

const mapDispatchToProps = {
  loginAndSignin
};

export default withRouter(connect(null, mapDispatchToProps)(LoginAndSignin));
