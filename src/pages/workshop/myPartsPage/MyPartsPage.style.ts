import styled from "styled-components";

export const Container = styled.div`
  max-width: 950px;
  margin-top: 50px;
  margin-left: max(250px, calc(50% - 370px));
  margin-right: 20px;

  @media (max-width: 700px) {
    margin-left: 20px;
    margin-top: 100px;
  }
`;
