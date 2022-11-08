import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  margin-left: 30px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

export const Title = styled.h2`
  font-weight: bolder;
`;
