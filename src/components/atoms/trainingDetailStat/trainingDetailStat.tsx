import React from "react";
import * as S from "./trainingDetailStat.style";

interface Props {
  src: string;
  unit: string;
  width: number;
  height: number;
  value: any;
  isTwoLined?: boolean;
  isHomePageStat?: boolean;
  text?: string;
}

const TrainingDetailStat: React.FC<Props> = ({
  src,
  value,
  unit,
  width,
  height,
  isTwoLined = true,
  isHomePageStat = false,
  text = "",
}) => {
  return (
    <S.Container style={{ width: width, height: height }}>
      <S.Icon src={src} />
      <S.ValuesContainer>
        {isTwoLined && (
          <>
            <S.Values>{`MAX: ${value.max} ${unit}`}</S.Values>
            <S.Values>{`AVG: ${value.avg} ${unit}`}</S.Values>
          </>
        )}
        {!isTwoLined && !isHomePageStat && (
          <S.Values>{`${text} ${value.max} ${unit}`}</S.Values>
        )}
        {isHomePageStat && (
          <>
            <S.Values>{text}</S.Values>
            <S.Values>{`${value} ${unit}`}</S.Values>
          </>
        )}
      </S.ValuesContainer>
    </S.Container>
  );
};
export default TrainingDetailStat;
