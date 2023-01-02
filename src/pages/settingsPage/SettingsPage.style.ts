import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 50px;
  margin-top: 95px;
  margin-left: 240px;
  margin-right: 20px;
  //margin-left: max(250px, calc(50% - 560px));
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-left: 20px;
  }
`;

export const StravaDataContainer = styled.div`
  min-width: 450px;
`;

export const BikeappDataContainer = styled.div`
  max-width: 200px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoCat = styled.div`
  justify-content: center;
  flex-basis: 25%;
`;

export const InfoData = styled.div`
  justify-content: center;
  flex-basis: 75%;
  font-weight: bold;
`;

export const Divider = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 1px;
  background-color: #f3b299;
`;

export const EditDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorMessage = styled.p`
  margin: auto;
  color: red;
`;
