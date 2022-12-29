import styled from "styled-components";
import ProfileImage from "../../../atoms/profileImage/ProfileImage";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  width: 300px;
  height: 600px;
  border: 1px solid #e4e7ee;
  box-shadow: 5px 5px 15px 2px #e4e7ee;
  margin-bottom: 15px;
  transition: transform 0.2s;

  @media (max-width: 1210px) {
    width: 100%;
    height: fit-content;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const StyledProfileImage = styled(ProfileImage)`
  width: 80px;
  height: 80px;
  position: relative;
  top: -40px;
`;

export const UserName = styled.h2`
  margin-top: -20px;
  font-weight: bolder;
  @media (max-width: 1210px) {
    margin-top: 10px;
  }
`;

export const StatsRow = styled.div`
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
`;

export const Divider = styled.div`
  background-color: #fc4c02;
  height: 1px;
  width: 90%;
  margin: 10px 0;
`;
