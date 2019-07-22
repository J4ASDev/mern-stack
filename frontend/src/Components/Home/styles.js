import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 45px;
  margin: 45px;
`;

export const NoteWrapper = styled.div`
  max-height: 230px;
  display: grid;
  gap: 10px;
  padding: 15px;
  border: 2px solid ${props => props.theme.grayShadow};
  border-style: dashed;
`;

export const NoteHead = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 50px);
  gap: 5px;
`;
