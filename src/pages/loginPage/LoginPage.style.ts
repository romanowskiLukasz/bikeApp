import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.img`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  width: 400px;
  height: 370px;
  background-color: #282828;
  opacity: 0.8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 15px;
`;

export const HeaderContainer = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #181818;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  color: white;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  background-color: black;
  border: 1px darkgrey solid;
  font-size: 16px;
  margin-left: 50px;
  margin-top: 20px;
  color: white;
  &:focus {
    background-color: #f5f5f5;
    color: black;
    outline: none;
  }
`;

export const Divider = styled.div`
  background-color: gray;
  width: 100%;
  height: 1px;
  margin: 20px 0;
`;

export const CustomLink = styled(Link)`
  all: unset;
  color: white;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
