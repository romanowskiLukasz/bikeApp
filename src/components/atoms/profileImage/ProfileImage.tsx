import React from "react";
import * as S from "./ProfileImage.style";

interface Props {
  src: string;
  style?: object;
}

const ProfileImage: React.FC<Props> = (values) => {
  const { src, style } = values || {};
  return <S.Image src={src} style={style} />;
};
export default ProfileImage;
