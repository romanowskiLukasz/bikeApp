import React from "react";
import * as S from "../Field.style";
import { StyledSelect } from "./MySelect.style";

interface Props {
  handleChange: (event: any) => void;
  label: string;
  value?: string | number;
  children: JSX.Element;
}

const MySelect: React.FC<Props> = ({
  handleChange,
  label,
  value,
  children,
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <StyledSelect onChange={handleChange} value={value || ""}>
        {children}
      </StyledSelect>
    </S.Container>
  );
};
export default MySelect;
