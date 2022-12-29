import styled from "styled-components";

export const Container = styled.div`
  //position: fixed;
  width: 320px;
  height: 550px;
  background-color: white;
  border-radius: 35px 35px 35px 35px;
  right: 25px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 35px;
`;

export const StatsRow = styled.div`
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
`;
