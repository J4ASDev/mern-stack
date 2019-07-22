import React , { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './libs/globalStyles';
import Authentication from './Authentication';

const theme = {
  whiteBackground: '#F4F7FC',
  lightGreen: '#00d35b',
  darkGreen: '#00bf52',
  grayShadow: '#e1e1e1'
};

const Application = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Authentication />
    </Fragment>
  </ThemeProvider>
);

export default Application;
