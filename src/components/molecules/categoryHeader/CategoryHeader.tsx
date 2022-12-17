import React, { useState } from "react";
import * as S from "./CategoryHeader.style";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface Props {
  title: string;
  src: string;
  handleClick: (category: string) => void;
}
const CategoryHeader: React.FC<Props> = ({ title, src, handleClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleArrow = () => {
    setIsOpen(!isOpen);
    handleClick(title);
  };
  return (
    <div style={{ display: "flex", marginTop: "25px", gap: "25px" }}>
      <img src={src} style={{ width: "40px", height: "40px" }} />
      <h1 style={{ color: "#fc4c02" }}>{title}</h1>
      {isOpen ? (
        <IoMdArrowDropdown
          color={"#fc4c02"}
          size={30}
          style={{ marginTop: "5px", cursor: "pointer" }}
          onClick={toggleArrow}
        />
      ) : (
        <IoMdArrowDropup
          color={"#fc4c02"}
          size={30}
          style={{ marginTop: "5px", cursor: "pointer" }}
          onClick={toggleArrow}
        />
      )}
    </div>
  );
};
export default CategoryHeader;
