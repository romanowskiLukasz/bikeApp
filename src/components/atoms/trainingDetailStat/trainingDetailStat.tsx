import React from "react";
import * as S from "./trainingDetailStat.style";

interface Props {
  src: string;
  unit: string;
  width: number;
  height: number;
  value: { max: string | number; avg: string | number };
  isTwoLined?: boolean;
  text?: string;
}

const TrainingDetailStat: React.FC<Props> = ({
  src,
  value,
  unit,
  width,
  height,
  isTwoLined = true,
  text = "",
}) => {
  return (
    <S.Container style={{ width: width, height: height }}>
      <S.Icon src={src} />
      <S.ValuesContainer>
        {isTwoLined ? (
          <>
            <S.Values>{`MAX: ${value.max} ${unit}`}</S.Values>
            <S.Values>{`AVG: ${value.avg} ${unit}`}</S.Values>
          </>
        ) : (
          <S.Values>{`${text} ${value.max} ${unit}`}</S.Values>
        )}
      </S.ValuesContainer>
    </S.Container>
  );
};
export default TrainingDetailStat;
