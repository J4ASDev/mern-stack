import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 50px;
  margin: 50px;
  border: 2px solid ${props => props.theme.grayShadow};
  border-style: dashed;
`;

export const FormWrapper = styled.form`
  width: 500px;
  display: grid;
  justify-items: center;
  gap: 15px;
`;
