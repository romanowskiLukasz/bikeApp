import React, { useState } from "react";
import * as S from "../loginPage/LoginPage.style";
import RoundedButton from "../../components/atoms/buttons/roundedButton/RoundedButton";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

// const axios = require("axios").default;

const RegistrationPage: React.FC = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    profileImg: "",
  });
  // const setRegistrationData = useStoreActions(
  //   // @ts-ignore
  //   (actions) => actions.setRegistrationData
  // );
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;

  const handleRegistration = () => {
    localStorage.setItem("registrationData", JSON.stringify(values));
    const redirectUrl = "http://localhost:3000/redirect";
    const scope = "activity:read_all,profile:read_all";
    // @ts-ignore
    window.location = `http://www.strava.com/oauth/authorize?client_id=${stravaClientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  };

  return (
    <>
      <S.Background
        src={
          "https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg"
        }
      />
      <S.Container>
        <S.HeaderContainer style={{ alignItems: "center" }}>
          <S.Title style={{ fontSize: "30px" }}>Join BikeApp today</S.Title>
        </S.HeaderContainer>
        {loginError && (
          <S.ErrorContainer>
            <S.ErrorText>
              The username or password did not match. Please try again.
            </S.ErrorText>
          </S.ErrorContainer>
        )}

        <S.StyledInput
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          placeholder={"Enter your email"}
          style={{ marginTop: "50px" }}
        />
        <S.StyledInput
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          placeholder={"Password"}
          type={"password"}
        />
        <S.StyledInput
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          placeholder={"Name"}
        />
        <S.StyledInput
          value={values.profileImg}
          onChange={(e) => setValues({ ...values, profileImg: e.target.value })}
          placeholder={"Profile img src"}
        />
        <RoundedButton
          value={"Register"}
          //@ts-ignore
          onClick={() => handleRegistration()}
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
        <S.Divider />
        <S.CustomLink to={"/login"}> Do you have account? Log in!</S.CustomLink>
      </S.Container>
    </>
  );
};

export default RegistrationPage;
