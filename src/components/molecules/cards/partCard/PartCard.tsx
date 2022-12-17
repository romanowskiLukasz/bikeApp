import React from "react";
import * as S from "./PartCard.style";

interface Props {
  title: string;
  src: string;
  model: string;
  distance: string;
  date: string;
  changeRecommended: boolean;
}

const PartCard: React.FC<Props> = ({
  changeRecommended,
  title,
  src,
  model,
  distance,
  date,
}) => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Icon src={src} />
        <S.Title>{title}</S.Title>
      </S.HeaderContainer>
      <S.Divider />
      <S.TextContainer>Model: {model}</S.TextContainer>
      <S.TextContainer>Distance: {distance}</S.TextContainer>
      <S.TextContainer>Date: {date}</S.TextContainer>
      {changeRecommended && (
        <S.WarningContainer>
          <S.WarningIcon
            src={"https://cdn-icons-png.flaticon.com/512/752/752755.png"}
          />
          <S.WarningText>New part recommended</S.WarningText>
        </S.WarningContainer>
      )}
    </S.Container>
  );
};
export default PartCard;
