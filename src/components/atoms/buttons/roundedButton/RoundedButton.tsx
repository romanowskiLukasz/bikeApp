import React from "react";
import * as S from "./RoundedButton.style";

interface Props {
  value: string;
  style?: React.CSSProperties;
}

const RoundedButton: React.FC<Props> = ({ value, style = {}, ...props }) => {
  return (
    <S.AnimatedButton style={style} {...props}>
      {value}
    </S.AnimatedButton>
  );
};

export default RoundedButton;
