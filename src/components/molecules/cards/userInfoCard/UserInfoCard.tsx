import React from "react";
import * as S from "./UserInfoCard.style";
import ProfileImage from "../../../atoms/profileImage/ProfileImage";

const UserInfoCard: React.FC = () => {
  const userName = "Lukasz Romanowski";
  return (
    <S.Container>
      <ProfileImage
        style={{
          width: "80px",
          height: "80px",
          position: "relative",
          top: "-40px",
        }}
        src={
          "https://dgalywyr863hv.cloudfront.net/pictures/athletes/14592553/9923464/2/large.jpg"
        }
      />
      <S.UserName>{userName}</S.UserName>
    </S.Container>
  );
};
export default UserInfoCard;
