import styled from "styled-components";
import RoundedButton from "../../../atoms/buttons/roundedButton/RoundedButton";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: white;
  border-radius: 15px;
  height: 100px;
  border: 1px solid #e4e7ee;
  box-shadow: 5px 5px 15px 2px #e4e7ee;
  margin-bottom: 15px;
  transition: transform 0.2s;
  width: 100%;
  @media (max-width: 750px) {
    gap: 20px;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Icon = styled.img`
  margin: 15px 20px;
  width: 70px;
`;
export const Title = styled.h3`
  margin-top: 15px;
`;

export const Description = styled.p`
  flex-basis: 60%;
  font-size: 16px;
  margin-bottom: 0;
  color: #35343c;
`;
