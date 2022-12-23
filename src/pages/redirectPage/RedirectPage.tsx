import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useStoreState } from "easy-peasy";
import * as S from "../loginPage/LoginPage.style";
import RoundedButton from "../../components/atoms/buttons/roundedButton/RoundedButton";

const RedirectPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [newRefreshToken, setNewRefreshToken] = useState("");
  const registrationData = JSON.parse(
    localStorage.getItem("registrationData") || ""
  );
  const navigate = useNavigate();
  const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
  const stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;

  useEffect(() => {
    axios
      .post(
        `https://www.strava.com/api/v3/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&code=${searchParams.get(
          "code"
        )}&grant_type=authorization_code`
      )
      .then((resp: any) => {
        setNewRefreshToken(resp.data.refresh_token);
      });
  }, []);
  useEffect(() => {
    if (newRefreshToken.length > 0) {
      axios
        .post("http://localhost:8080/user/register", {
          name: registrationData.name,
          email: registrationData.email,
          password: registrationData.password,
          profileImg: registrationData.profileImg,
          refreshToken: newRefreshToken,
        })
        .then();
    }
  }, [newRefreshToken]);

  return (
    <>
      <S.Background
        src={
          "https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg"
        }
      />
      <S.Container>
        <S.HeaderContainer style={{ alignItems: "center" }}>
          <S.Title style={{ fontSize: "30px" }}>
            Registered successfully
          </S.Title>
        </S.HeaderContainer>

        <RoundedButton
          value={"Go back to log in"}
          //@ts-ignore
          onClick={() => navigate("/login")}
          style={{
            width: "300px",
            height: "35px",
            marginBottom: "20px",
            marginLeft: "50px",
            fontSize: "15px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </S.Container>
    </>
  );
};
export default RedirectPage;
