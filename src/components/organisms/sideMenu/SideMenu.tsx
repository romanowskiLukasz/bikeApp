import React from "react";
import * as S from "./SideMenu.style";
import IconButton from "../../atoms/icon/iconButton/IconButton";
import Logo from "../../atoms/logo/Logo";
import SettingsButton from "../../atoms/buttons/settingsButton/SettingsButton";

const SideMenu = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/3187/3187707.png"
        buttonTxt="Activities"
        link={"/"}
      />
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/4772/4772067.png"
        buttonTxt="Workshop"
        link={"/workshop"}
      />
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/814/814906.png"
        buttonTxt="Activities Calendar"
        link={"/activityCalendar"}
      />
      <SettingsButton
        imgSrc={"https://cdn-icons-png.flaticon.com/512/595/595577.png"}
        buttonTxt={"Settings"}
      />
    </S.Container>
  );
};
export default SideMenu;
