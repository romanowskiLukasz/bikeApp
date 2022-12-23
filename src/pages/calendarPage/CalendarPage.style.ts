import styled from "styled-components";
import { Calendar } from "antd";
import { Link } from "react-router-dom";

export const StyledCalendar = styled(Calendar)`
  margin-top: 100px;
`;

export const ContentContainer = styled.div`
  max-width: 900px;
  margin-top: 50px;
  margin-left: max(250px, calc(50% - 330px));
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
