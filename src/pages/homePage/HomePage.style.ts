import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 30px;
  margin-top: 95px;
  margin-left: 240px;
  margin-right: 20px;
  //margin-left: max(250px, calc(50% - 560px));
  justify-content: center;
  @media (max-width: 1210px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-left: 20px;
  }
`;
