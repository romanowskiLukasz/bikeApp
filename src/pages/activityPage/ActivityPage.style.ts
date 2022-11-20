import styled from "styled-components";
import exp from "constants";

export const PageLayout = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  margin-top: 40px;
  margin-left: max(240px, calc(50% - 500px));
  //margin-left: max(240px, auto);
  //margin-right: auto;
  width: 800px;
`;

export const Date = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

export const ActivityName = styled.h2`
  font-weight: bolder;
`;

export const OpacityGradient = styled.div`
  display: flex;
  background: linear-gradient(
    0deg,
    rgba(169, 208, 113, 0),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 1)
  );
  position: relative;
  margin-top: -75px;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 999;
`;
