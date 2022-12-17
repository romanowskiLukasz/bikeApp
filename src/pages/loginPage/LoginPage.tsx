import React from "react";
import * as S from "./LoginPage.style";
import RoundedButton from "../../components/atoms/buttons/roundedButton/RoundedButton";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <>
      <S.Background
        src={
          "https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg"
        }
      />
      <S.Container>
        <S.HeaderContainer>
          <S.Title>Log In</S.Title>
        </S.HeaderContainer>
        <S.StyledInput placeholder={"Enter your email"} />
        <S.StyledInput placeholder={"Password"} type={"password"} />
        <Link to={"/"}>
          <RoundedButton
            value={"Log In"}
            style={{
              width: "300px",
              height: "35px",
              marginTop: "20px",
              marginLeft: "50px",
              fontSize: "15px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Link>
        <S.Divider />
        <S.CustomLink to={"/"}> Don't have account? Click here!</S.CustomLink>
      </S.Container>
    </>
  );
};

export default LoginPage;
