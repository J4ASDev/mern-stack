import React, { Component } from 'react';
import LoginAndSigninLayout from '../Components/LoginAndSignin';

import { connect } from 'react-redux';
import { loginAndSignin } from '../actions/loginAndSignin';

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

    this.props.loginAndSignin({ username, password }, actionType);
    window.location.replace('/');
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

  componentDidMount() {
    const { idUser } = this.props;
    const authenticated = idUser || localStorage.getItem('id');

    if(authenticated) window.location.replace('/');
  }
}

const mapStateToProps = ({ loginAndSignin }) => ({
  idUser: loginAndSignin.idUser
});

const mapDispatchToProps = {
  loginAndSignin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginAndSignin);
