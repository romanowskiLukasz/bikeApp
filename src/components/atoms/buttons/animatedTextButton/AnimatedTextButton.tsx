import React from "react";
import * as S from "./AnimatedTextButtonStyle";

interface Props {
  value: string;
  borderRadius?: string;
}

const AnimatedTextButton: React.FC<Props> = ({
  value,
  borderRadius,
  ...props
}) => {
  return (
    <S.AnimatedButton
      style={{ borderRadius: `${borderRadius ? borderRadius : ""}` }}
      {...props}
    >
      {value}
    </S.AnimatedButton>
  );
};

export default AnimatedTextButton;
