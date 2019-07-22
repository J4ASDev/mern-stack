import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  justify-content: center;
  grid-template-rows: 5fr 6fr;
  gap: 25px;
`;
  
export const Logo = styled.img`
  width: 100%;
  max-width: 150px;
  display: grid;
  align-self: end;
  justify-self: center;
  filter: drop-shadow(5px 5px 5px #8a898966);
`;

export const FormWrapper = styled.form`
  width: 300px;
  height: 148px;
  display: grid;
  gap: 15px;
`;

export const ToggleWrapper = styled.div`
  font-size: 18px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 80px;
  gap: 5px;

  span {
    color: ${props => props.theme.lightGreen}
    font-weight: bold;
    cursor: pointer;
  }
`;
