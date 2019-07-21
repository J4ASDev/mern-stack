import React from 'react';
import { MenuWrapper, LogOut } from './styles';
import { withRouter, NavLink } from 'react-router-dom';

const MenuLayout = () => (
  <MenuWrapper>
    <p>Image</p>
    <NavLink to='/'>Notes</NavLink>
    <NavLink to='/create-note'>Create note</NavLink>
    <LogOut>Log Out</LogOut>
  </MenuWrapper>
);

export default withRouter(MenuLayout);
