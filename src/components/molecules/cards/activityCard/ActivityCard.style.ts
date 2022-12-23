import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
  all: inherit;
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 15px;
  height: fit-content;
  max-width: 700px;
  border: 1px solid #e4e7ee;
  box-shadow: 5px 5px 15px 2px #e4e7ee;
  margin-bottom: 15px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

export const Header = styled.p`
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 0;
`;

export const Date = styled.p`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 0;
`;

export const Name = styled.h2`
  margin-left: 10px;
  margin-top: 0;
  color: #242428;
  max-height: 35px;
  overflow: scroll;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;
