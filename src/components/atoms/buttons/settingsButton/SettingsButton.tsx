import React from "react";
import * as S from "./SettingsButton.style";

interface Props {
  imgSrc: string;
  buttonTxt: string;
}

const SettingsButton: React.FC<Props> = ({ imgSrc, buttonTxt }) => {
  return (
    <S.Container>
      <S.CustomLink to="/settings">
        <S.Image src={imgSrc} />
        <S.Text>{buttonTxt}</S.Text>
      </S.CustomLink>
    </S.Container>
  );
};
export default SettingsButton;
