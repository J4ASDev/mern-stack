import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
  
  input[type=date]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }
`;

export const FormInput = styled.input`
  width: calc(100% - 20px);
  height: 15px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  background: ${props => props.theme.gray};
  border: none;
  border-bottom: 3px solid ${props => props.theme.grayShadow};
  border-radius: 5px;
  outline: none;

  
`;

export const FormTextArea = styled.textarea`
  width: calc(100% - 20px);
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-bottom: 3px solid #e1e1e1;
  border-radius: 5px;
  outline: none;
  resize: none;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  background: ${props => props.theme.lightGreen};
  border-radius: 6px;
  border-bottom: 3px solid ${props => props.theme.darkGreen};
`;
