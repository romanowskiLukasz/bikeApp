import styled from "styled-components";

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  color: #939393;
  background-color: #f5f5f5;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    transition: background-color 0.5s ease;
    background-color: white;
  }
`;
