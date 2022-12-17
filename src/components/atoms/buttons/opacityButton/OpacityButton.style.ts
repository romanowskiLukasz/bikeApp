import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 370px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const Image = styled.img`
  transform: scale(1);
`;

export const Text = styled.h3`
  position: relative;
  top: -500px;
  left: -100px;
  z-index: 100;
  font-weight: 600;
  font-size: 60px;
  width: 90px;
  line-height: 1.2;
  color: inherit;
  //text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
  text-shadow: inherit;
`;

export const CustomLink = styled(Link)`
  all: inherit;
  overflow: hidden;
  width:400px;
  height:600px;
  opacity:20%;
  border-radius: 35px;
  border: 1px black solid;
  box-shadow: 5px 5px 15px 2px #e4e7ee; 
  color:white;
  text-shadow: 0 0 10px #000;
  
  &:hover { 
    transform: scale(1.02);
    cursor: pointer;
    color: black; !important;
    text-shadow: 0 0 10px white;
    opacity: 1;
    transition: opacity 0.7s ease-in-out,transform 0.7s ease-in-out, text-shadow 0.7s ease-in-out, color 0.7s ease-in-out;
  }
`;
