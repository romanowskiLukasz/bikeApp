import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  border-radius: 25px;
  background-color: #f3b299;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  min-width: 100px;
  width: fit-content;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 10%;
  background-color: #fc4c02;
  margin-bottom: 10px;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-top: -7px;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
