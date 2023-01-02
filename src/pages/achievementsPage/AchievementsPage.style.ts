import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 900px;
  margin-top: 50px;
  min-width: 700px;
  margin-left: max(250px, calc(50% - 330px));
  margin-right: 20px;

  @media (max-width: 1100px) {
    min-width: unset;
  }

  @media (max-width: 700px) {
    margin-left: 20px;

    margin-top: 100px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 55px;
  margin-bottom: 50px;
  @media (max-width: 700px) {
    font-size: 35px;
  }
`;

export const CategoryTitle = styled.h1`
  color: #fc4c02;
`;
