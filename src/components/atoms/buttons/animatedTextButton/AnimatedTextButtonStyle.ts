import styled from "styled-components";

export const AnimatedButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  max-width: 70px;
  height: 60px;
  background-color: #fc4c02;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f5f5f5;
    z-index: -1;
    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
  }
  transition: color 300ms ease-in-out;
  z-index: 1;
  &:hover,
  &:focus {
    color: black;
  }
`;
