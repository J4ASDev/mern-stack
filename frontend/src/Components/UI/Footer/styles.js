import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 50px);
  gap: 10px;
  margin: 0 15px;
  border-top: 2px solid ${props => props.theme.grayShadow};
`;

export const Icon = styled.i`
  font-size: 30px;
  color: ${props => props.theme.lightGreen};

  :hover {
    color: ${props => props.theme.grayShadow};    
  }
`;
