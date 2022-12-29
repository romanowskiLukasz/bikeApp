import React from "react";
import * as S from "./IconButton.style";

interface Props {
  imgSrc: string;
  buttonTxt: string;
  link: string;
  isMobile?: boolean;
}

const IconButton: React.FC<Props> = ({ imgSrc, buttonTxt, link, isMobile }) => {
  return (
    <S.Container
      style={
        isMobile
          ? {
              justifyContent: "center",
              height: "90px",
              backgroundColor: "transparent",
            }
          : {}
      }
    >
      <S.CustomLink to={link}>
        <S.Image src={imgSrc} />
        <S.Text>{buttonTxt}</S.Text>
      </S.CustomLink>
    </S.Container>
  );
};
export default IconButton;
