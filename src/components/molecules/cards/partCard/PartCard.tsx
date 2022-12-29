import React from "react";
import * as S from "./PartCard.style";
import RoundedButton from "../../../atoms/buttons/roundedButton/RoundedButton";

interface Props {
  title: string;
  src: string;
  model: string;
  distance: string;
  date: string;
  changeRecommended: boolean;
  warningText?: string;
  hasButton?: boolean;
  handleClick?: any;
  buttonTxt?: string;
}

const PartCard: React.FC<Props> = ({
  changeRecommended,
  title,
  src,
  model,
  distance,
  date,
  warningText,
  hasButton,
  handleClick,
  buttonTxt,
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
          <S.WarningText>
            {warningText ? warningText : "New part recommended"}
          </S.WarningText>
        </S.WarningContainer>
      )}
      {hasButton && (
        <S.StyledRoundedButton
          value={buttonTxt || "Done!"}
          //@ts-ignore
          onClick={handleClick}
        />
      )}
    </S.Container>
  );
};
export default PartCard;
