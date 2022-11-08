import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 400px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  color: black;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 30px;
  margin-right: 10px;
`;

export const Text = styled.span`
  color: #939393;
  font-weight: 600;
  font-size: 20px;
`;

export const CustomLink = styled(Link)`
  all: inherit;
`;
