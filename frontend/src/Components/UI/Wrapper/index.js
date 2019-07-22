import React from 'react';
import { Wrapper, ContentWrapper } from './styles';

import Menu from '../Menu';
import Footer from '../Footer';

const WrapperLayout = ({ children }) => (
  <Wrapper>
    <Menu />
    <ContentWrapper>
      { children }
    </ContentWrapper>
    <Footer />
  </Wrapper>
);

export default WrapperLayout;
