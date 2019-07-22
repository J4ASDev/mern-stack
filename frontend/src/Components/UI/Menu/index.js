import React from 'react';
import { MenuWrapper, LogOut } from './styles';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { logOut } from '../../../actions/loginAndSignin';

const MenuLayout = ({ logOut, history }) => (
  <MenuWrapper>
    <p>Image</p>
    <NavLink to='/'>Notes</NavLink>
    <NavLink to='/create-note'>Create note</NavLink>
    <LogOut onClick={() => logOut(history)}>Log Out</LogOut>
  </MenuWrapper>
);

const mapDispatchToProps = {
  logOut
};

export default withRouter(connect(null, mapDispatchToProps)(MenuLayout));
