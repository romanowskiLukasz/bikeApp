import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input`
  all: unset;
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-top: 5px;

  &:focus {
    background: rgba(0, 0, 0, 0.05);
    border-bottom: 2px solid #fc4c02;
  }
`;

export const Label = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  padding-bottom: 0;
`;
