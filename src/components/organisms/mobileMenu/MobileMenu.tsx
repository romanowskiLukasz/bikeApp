import styled from "styled-components";
import React from "react";
import IconButton from "../../atoms/icon/iconButton/IconButton";
import SettingsButton from "../../atoms/buttons/settingsButton/SettingsButton";

interface Props {
  open: any;
}
const StyledMenu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 999999;

  @media (max-width: 576px) {
    width: 100vw;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }: any) => {
  return (
    <StyledMenu open={open}>
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/3601/3601647.png"
        buttonTxt="Activities"
        link={"/"}
        isMobile
      />
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/4772/4772067.png"
        buttonTxt="Workshop"
        link={"/workshop"}
        isMobile
      />
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/814/814906.png"
        buttonTxt="Activities Calendar"
        link={"/activityCalendar"}
        isMobile
      />
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/717/717498.png"
        buttonTxt="Activities Map"
        link={"/activitiesMap"}
        isMobile
      />
      <IconButton
        imgSrc="https://cdn-icons-png.flaticon.com/512/595/595577.png"
        buttonTxt="Settings"
        link={"/settings"}
        isMobile
      />
    </StyledMenu>
  );
};

const StyledBurger = styled.button<Props>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999999;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    //background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    background: ${({ open }) => (open ? "#0D0C1D" : "#0D0C1D")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      //@ts-ignore
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      //@ts-ignore
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }: any) => {
  return (
    <StyledBurger
      //@ts-ignore
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div
        //@ts-ignore
        ref={node}
      >
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default MobileMenu;
