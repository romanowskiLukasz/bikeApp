import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 900px;
  margin-left: max(250px, calc(50% - 360px));
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 700px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 100px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
`;
