import React from 'react';
import { Wrapper } from './styles';

import Menu from '../Menu';
import Footer from '../Footer';

const WrapperLayout = ({ children }) => (
  <Wrapper>
    <Menu />
    <div>{ children }</div>
    <Footer />
  </Wrapper>
);

export default WrapperLayout;
