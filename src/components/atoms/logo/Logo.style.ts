import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 65px;
  height: 65px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Title = styled.h1`
  font-weight: bolder;
`;
