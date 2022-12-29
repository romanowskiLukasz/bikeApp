import styled from "styled-components";
import { DatePicker } from "antd";
import { Link } from "react-router-dom";

export const StyledDatePicker = styled(DatePicker)`
  &:hover {
    border: 1px solid #fc4c02;
  }
  &:focus {
    box-shadow: 5px 10px #fc4c02;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  margin-top: 50px;
  width: 80vw;
  margin-left: max(250px, calc(50% - 430px));
  margin-right: 20px;
  @media (max-width: 700px) {
    margin-left: 20px;

    margin-top: 100px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 55px;
`;

export const CustomLink = styled(Link)`
  all: inherit;
`;
