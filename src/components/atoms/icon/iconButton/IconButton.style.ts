import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #e4e7ee;
  &:hover {
    cursor: pointer;
    transition: background-color 0.5s ease;
    background-color: #fafafa;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 15px;
  margin-right: 25px;
`;

export const Text = styled.span`
  color: #00105e;
  font-weight: 600;
  font-size: 20px;
`;

export const CustomLink = styled(Link)`
  all: inherit;
`;
