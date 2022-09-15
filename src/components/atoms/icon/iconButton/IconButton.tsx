import React from "react";
import * as S from "./IconButton.style";

interface Props {
  imgSrc: string;
  buttonTxt: string;
}

const IconButton: React.FC<Props> = ({ imgSrc, buttonTxt }) => {
  return (
    <>
      <S.Container>
        <S.CustomLink to="/">
          <S.Image src={imgSrc} />
          <S.Text>{buttonTxt}</S.Text>
        </S.CustomLink>
      </S.Container>
    </>
  );
};
export default IconButton;
