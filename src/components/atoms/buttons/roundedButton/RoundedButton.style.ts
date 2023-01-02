import styled from "styled-components";

export const AnimatedButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  padding: 0 20px 0 20px;
  height: 40px;
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
