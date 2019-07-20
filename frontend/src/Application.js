import React , { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  whiteBackground: '#F4F7FC'
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800');

  body {
    padding: 0;
    margin: 0;
    line-heigth: 2;
    font-family: 'Nunito', sans-serif;
    background-color: ${props => props.theme.whiteBackground};
  }
`;

const Application = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <p>Application...</p>
    </Fragment>
  </ThemeProvider>
);


export default Application;
