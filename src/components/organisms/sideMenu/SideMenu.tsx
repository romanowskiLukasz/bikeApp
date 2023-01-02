import React from "react";
import * as S from "./SideMenu.style";
import IconButton from "../../atoms/icon/iconButton/IconButton";
import Logo from "../../atoms/logo/Logo";
import SettingsButton from "../../atoms/buttons/settingsButton/SettingsButton";
import useCurrentWidth from "../../../hooks/UseCurrentWidth";
import MobileMenu from "../mobileMenu/MobileMenu";

const SideMenu = () => {
  let width = useCurrentWidth();
  return (
    <>
      {width > 700 ? (
        <S.Container>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
          <IconButton
            imgSrc="https://cdn-icons-png.flaticon.com/512/3601/3601647.png"
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
          <IconButton
            imgSrc="https://cdn-icons-png.flaticon.com/512/717/717498.png"
            buttonTxt="Activities Map"
            link={"/activitiesMap"}
          />
          <IconButton
            imgSrc="https://cdn-icons-png.flaticon.com/512/3113/3113028.png"
            buttonTxt="Achievements"
            link={"/achievements"}
          />
          <SettingsButton
            imgSrc={"https://cdn-icons-png.flaticon.com/512/595/595577.png"}
            buttonTxt={"Settings"}
          />
        </S.Container>
      ) : (
        <MobileMenu />
      )}
    </>
  );
};
export default SideMenu;
