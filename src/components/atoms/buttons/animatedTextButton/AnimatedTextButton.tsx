import React from "react";
import * as S from "./AnimatedTextButtonStyle";

interface Props {
  value: string;
  style?: React.CSSProperties;
}

const AnimatedTextButton: React.FC<Props> = ({
  value,
  style = {},
  ...props
}) => {
  return (
    <S.AnimatedButton style={style} {...props}>
      {value}
    </S.AnimatedButton>
  );
};

export default AnimatedTextButton;
