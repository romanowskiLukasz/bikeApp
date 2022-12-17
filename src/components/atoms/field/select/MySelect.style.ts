import styled from "styled-components";

export const StyledSelect = styled.select`
  border: none;
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 5px 5px 0 5px;
  height: 28px;

  &:focus {
    background: rgba(0, 0, 0, 0.05);
    border-bottom: 2px solid #fc4c02;
  }
`;
