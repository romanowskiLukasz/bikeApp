import React from "react";
import SideMenu from "../../../components/organisms/sideMenu/SideMenu";
import * as S from "./WorkshopHomePage.style";
import OpacityButton from "../../../components/atoms/buttons/opacityButton/OpacityButton";
import myBikesJpg from "./media/myBikes.jpeg";
import workshopJpg from "./media/workshop.jpg";
import useCurrentWidth from "../../../hooks/UseCurrentWidth";

const WorkshopHomePage = () => {
  return (
    <>
      <SideMenu />
      <S.ContentContainer>
        <h1 style={{ fontSize: "55px", marginLeft: "40px" }}> My workshop</h1>
        <S.ButtonContainer>
          <OpacityButton
            imgSrc={myBikesJpg}
            // imgSrc="https://www.firstbikeride.com/wp-content/uploads/2021/04/153951889_233394751827140_4638988504318771203_n-1024x682.jpeg"
            buttonTxt={"My bikes"}
            link={"/workshop/my-bikes"}
          />
          <OpacityButton
            imgSrc={workshopJpg}
            buttonTxt={"My parts"}
            link={"/workshop/my-parts"}
          />
        </S.ButtonContainer>
      </S.ContentContainer>
    </>
  );
};
export default WorkshopHomePage;
