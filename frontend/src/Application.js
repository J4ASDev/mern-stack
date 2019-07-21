import React , { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Authentication from './Authentication';

const theme = {
  whiteBackground: '#F4F7FC',
  lightGreen: '#00d35b',
  darkGreen: '#00bf52',
  grayShadow: '#e1e1e1'
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800');

  body {
    padding: 0;
    margin: 0;
    line-heigth: 2;
    background-color: ${props => props.theme.whiteBackground};
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }
`;

const Application = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Authentication />
    </Fragment>
  </ThemeProvider>
);

export default Application;
