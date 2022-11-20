import React from "react";
import * as S from "./OnMapStatistic.style";

interface Props {
  title: string;
  unit: string;
  value: string | number;
}

const OnMapStatistic: React.FC<Props> = ({ title, value, unit }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Value>{`${value} ${unit}`}</S.Value>
    </S.Container>
  );
};
export default OnMapStatistic;
