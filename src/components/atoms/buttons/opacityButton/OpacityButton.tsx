import React from "react";
import * as S from "./OpacityButton.style";

interface Props {
  imgSrc: string;
  buttonTxt: string;
  link: string;
}

const SettingsButton: React.FC<Props> = ({ imgSrc, buttonTxt, link }) => {
  return (
    <S.CustomLink to={link}>
      <S.Image src={imgSrc} />
      <S.Text>{buttonTxt}</S.Text>
    </S.CustomLink>
  );
};
export default SettingsButton;
