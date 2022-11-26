import React from "react";
import * as S from "./ChartMenuButton.style";

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ChartMenuButton: React.FC<Props> = ({ text, onClick }) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
export default ChartMenuButton;
