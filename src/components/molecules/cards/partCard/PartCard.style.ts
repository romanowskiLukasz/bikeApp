import styled from "styled-components";
import RoundedButton from "../../../atoms/buttons/roundedButton/RoundedButton";

export const Container = styled.div`
  width: 220px;
  height: fit-content;
  padding-bottom: 20px;
  border-radius: 35px;
  background-color: #f3b299;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const Icon = styled.img`
  margin: 15px;
  width: 40px;
`;
export const Title = styled.h3`
  margin-top: 15px;
`;
export const TextContainer = styled.span`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;
export const WarningText = styled.span`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 90%;
`;
export const Divider = styled.div`
  margin: -10px 5% 10px 5%;
  width: 90%;
  height: 2px;
  border-radius: 10%;
  background-color: #fc4c02;
`;

export const WarningContainer = styled.div`
  margin-left: 15px;
  display: flex;
`;
export const WarningIcon = styled.img`
  height: 30px;
`;

export const StyledRoundedButton = styled(RoundedButton)`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;
