import React from "react";
import * as S from "./Modal.style";

interface Props {
  onClick: () => void;
  title: string;
  children?: JSX.Element;
}
const Modal: React.FC<Props> = ({ onClick, title, children }) => {
  return (
    <S.ModalBackground>
      <S.Container className="modal-content">
        <S.Header>
          <h2>{title}</h2>
          <S.CloseButton onClick={onClick}> &times;</S.CloseButton>
        </S.Header>
        <S.Divider />

        {children}
      </S.Container>
    </S.ModalBackground>
  );
};
export default Modal;
