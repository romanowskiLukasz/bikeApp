import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  color: #939393;
  &:hover {
    cursor: pointer;
    transition: background-color 0.5s ease;
    background-color: #f5f5f5;
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
`;

export const CustomLink = styled(Link)`
  all: inherit; 
  &:hover {
    color: black; !important;
  }
`;
