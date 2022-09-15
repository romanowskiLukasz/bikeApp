import React from "react";
import * as S from "./SideMenu.style";
import IconButton from "../../atoms/icon/iconButton/IconButton";

const SideMenu = () => {
  return (
    <S.Container>
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/3187/3187707.png"
        buttonTxt="Activities"
      />
    </S.Container>
  );
};
export default SideMenu;
