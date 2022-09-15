import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  width: 300px;
  height: 400px;
  border: 1px solid #e4e7ee;
  box-shadow: 5px 5px 15px 2px #e4e7ee;
  margin-bottom: 15px;
  transition: transform 0.2s;
`;

export const UserName = styled.h2`
  font-weight: bolder;
`;
