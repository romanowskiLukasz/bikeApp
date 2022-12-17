import styled from "styled-components";

export const AnimatedButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  padding: 0 15px 0 15px;
  height: 50px;
  background-color: #fc4c02;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 35px;
  font-weight: 500;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;
