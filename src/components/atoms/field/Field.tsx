import React from "react";
import * as S from "./Field.style";

interface Props {
  handleChange: (event: any) => void;
  label: string;
  value?: string;
}

const MyField: React.FC<Props> = ({ handleChange, label, value }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.StyledInput onChange={handleChange} value={value || ""} />
    </S.Container>
  );
};
export default MyField;
