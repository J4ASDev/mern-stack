import React from 'react';
import { Wrapper, Logo, FormWrapper, ToggleWrapper, FormInput, Button } from './styles';

const LoginAndSigninLayout = ({ singin, handleToggle, handleAuth }) => (
  <Wrapper>
    <Logo src='./images/logo.png' alt='logo-j4asdev' />
    <FormWrapper id='authForm'
      onSubmit={event => handleAuth(event, singin ? 'register' : 'login')}
    >
      { singin ? (
        <ToggleWrapper>
          <p>Do you have an account?</p>
          <span onClick={handleToggle}>Login</span>
        </ToggleWrapper>
        ) : (
        <ToggleWrapper>
          <p>You do not have an account?</p>
          <span onClick={handleToggle}>Register</span>
        </ToggleWrapper>
      )}
      
      <FormInput type='text' name='username' placeholder='Username' required />
      <FormInput type='password' name='password' placeholder='Password' required />
      
      <Button>{ singin ? 'Register' : 'Login' }</Button>
    </FormWrapper>
  </Wrapper>
);

export default LoginAndSigninLayout;
