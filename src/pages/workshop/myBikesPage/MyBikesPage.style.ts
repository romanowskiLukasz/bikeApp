import styled from "styled-components";

export const Container = styled.div`
  max-width: 950px;
  margin-top: 50px;
  margin-left: max(250px, calc(50% - 370px));
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  overflow: hidden;
`;

export const Divider = styled.div`
  margin: 15px 0;
  width: 100%;
  height: 2px;
  border-radius: 10%;
  background-color: #fc4c02;
`;

export const BikeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SingleInfo = styled.span`
  margin-left: 20px;
  margin-bottom: 2px;
  font-size: 16px;
`;

export const BikeImg = styled.img`
  max-width: 450px;
  max-height: 300px;
  border-radius: 35px;
  border: 1px solid gray;
`;
