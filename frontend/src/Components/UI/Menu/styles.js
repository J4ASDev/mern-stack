import styled from 'styled-components';

export const MenuWrapper = styled.menu`
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: grid;
  align-content: center;
  grid-template-columns: 100px repeat(2, 1fr) 100px;
  gap: 20px;
  padding: 0 20px;
  margin: 0;
  background-color: ${props => props.theme.lightGreen};
  border-bottom: 3px solid ${props => props.theme.darkGreen};
 
  a {
    color: white;
    text-decoration: none;
    display: grid;
    align-items: center
  }

  a:nth-child(2) {
    display: grid;
    justify-self: end;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 70px;
  display: grid;
  align-self: end;
  justify-self: center;
  filter: drop-shadow(5px 5px 5px #0e0e0e5e);
`;

export const LogOut = styled.button`
  height: 35px;
  width: 105px;
  font-size: 17px;
  color: #00d35c;
  display: grid;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 0;
  border: none;
  border-bottom: 3px solid ${props => props.theme.grayShadow};
  border-radius: 5px;
  background: white;
  cursor: pointer;
`;
