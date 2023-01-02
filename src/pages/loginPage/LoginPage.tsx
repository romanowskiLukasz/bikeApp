import React, { useState } from "react";
import * as S from "./LoginPage.style";
import RoundedButton from "../../components/atoms/buttons/roundedButton/RoundedButton";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const axios = require("axios").default;

const LoginPage: React.FC = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const setStoreUser = useStoreActions(
    // @ts-ignore
    (actions) => actions.setUser
  );
  const setStoreStravaAccessToken = useStoreActions(
    // @ts-ignore
    (actions) => actions.setStravaAccessToken
  );

  const setStoreEmail = useStoreActions(
    // @ts-ignore
    (actions) => actions.setLoggedUserEmail
  );
  const setStoreId = useStoreActions(
    // @ts-ignore
    (actions) => actions.setLoggedUserId
  );
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
  const stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/user/login", values)
      .then((resp: any) => {
        if (resp.status === 200) {
          axios
            .post(
              `https://www.strava.com/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&refresh_token=${resp.data.refreshToken}&grant_type=refresh_token`
            )
            .then((resp: any) => {
              setStoreStravaAccessToken(resp.data.access_token);
              setStoreEmail(values.email);
              setStoreId(resp.data.id);
              navigate("/");
            });
        }
      })
      .catch(() => {
        setLoginError(true);
      });
  };

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
        <RoundedButton
          value={"Log In"}
          //@ts-ignore
          onClick={() => handleLogin()}
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
        <S.CustomLink to={"/registration"}>
          {" "}
          Don't have account? Click here!
        </S.CustomLink>
      </S.Container>
    </>
  );
};

export default LoginPage;
