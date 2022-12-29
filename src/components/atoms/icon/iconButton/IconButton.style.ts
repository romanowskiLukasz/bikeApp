import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: #939393;
  width: 100%;
  height: 60px;
  background-color: white;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  line-height: 2em;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fc4c02;
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
    color: gray;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 30px;
  margin-right: 10px;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 20px;
  max-width: 200px;
`;

export const CustomLink = styled(Link)`
  all: inherit; 
  background-color: transparent;
  &:hover {
    color: white; !important;
  }
`;
