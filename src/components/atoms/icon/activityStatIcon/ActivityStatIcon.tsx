import React from "react";
import * as S from "./ActivityStatIcon.style";

interface Props {
  src: string;
  sideText: string;
}

const ActivityStatIcon: React.FC<Props> = ({ src, sideText }) => {
  return (
    <>
      <S.Container>
        <S.Image src={src} />
        <S.Text>{sideText}</S.Text>
      </S.Container>
    </>
  );
};
export default ActivityStatIcon;
