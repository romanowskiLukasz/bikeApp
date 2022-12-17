import React from "react";
import SideMenu from "../../../components/organisms/sideMenu/SideMenu";
import * as S from "./WorkshopHomePage.style";
import OpacityButton from "../../../components/atoms/buttons/opacityButton/OpacityButton";
import jpg from "./media/myBikes.jpeg";
const WorkshopHomePage = () => {
  return (
    <>
      <SideMenu />
      <S.ContentContainer>
        <h1 style={{ fontSize: "55px", marginLeft: "40px" }}> My workshop</h1>
        <S.ButtonContainer>
          <OpacityButton
            imgSrc={jpg}
            // imgSrc="https://www.firstbikeride.com/wp-content/uploads/2021/04/153951889_233394751827140_4638988504318771203_n-1024x682.jpeg"
            buttonTxt={"My bikes"}
            link={"/workshop/my-bikes"}
          />
          <OpacityButton
            imgSrc={
              "https://www.tucsonbicycleservice.com/uploads/b/f72fca3864c42969b670ec5cf15372a122dc7cae7ba139f80c1abd74ac2adfab/Screen%20Shot%202021-10-20%20at%2012.17.15%20PM_1634758275.png"
            }
            buttonTxt={"My parts"}
            link={"/workshop/my-parts"}
          />
        </S.ButtonContainer>
      </S.ContentContainer>
    </>
  );
};
export default WorkshopHomePage;
