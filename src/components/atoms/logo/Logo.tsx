import React from "react";
import * as S from "./Logo.style";

const Logo: React.FC = () => {
  return (
    <S.Container>
      <S.Image src="https://cdn-icons-png.flaticon.com/512/805/805504.png" />
      <S.Title>BikeApp</S.Title>
    </S.Container>
  );
};
export default Logo;
