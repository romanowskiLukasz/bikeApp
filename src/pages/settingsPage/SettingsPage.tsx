import React, { useState } from "react";
import SideMenu from "../../components/organisms/sideMenu/SideMenu";
import * as S from "./SettingsPage.style";
import ProfileImage from "../../components/atoms/profileImage/ProfileImage";
import { useStoreState } from "easy-peasy";
import RoundedButton from "../../components/atoms/buttons/roundedButton/RoundedButton";
import MyField from "../../components/atoms/field/Field";
import stravaIcon from "./media/stravaIcon.jpeg";
import axios from "axios";

const SettingsPage: React.FC = () => {
  const [showModal, setShowModal] = useState({
    changeEmail: false,
    changePassword: false,
  });
  const [showErrorMessage, setShowErrorMessage] = useState({
    changeEmail: false,
    changePassword: false,
  });
  const [changeEmailValues, setChageEmailValues] = useState({
    email: "",
    password: "",
  });
  const [changePasswordValues, setChagePasswordValues] = useState({
    newPassword: "",
    oldPassword: "",
  });
  // @ts-ignore
  const userInfo = useStoreState((state) => state.user);

  // // @ts-ignore
  // const userEmail = useStoreState((state) => state.loggedUserEmail);

  // // @ts-ignore
  // const userId = useStoreState((state) => state.loggedUserId);

  const [userEmail, setUserEmail] = useState("lukas.r200@gmail.com");
  const userId = "1";
  console.log(userInfo);

  const handleChangeEmail = () => {
    axios
      .put("http://localhost:8080/changeUserEmail", {
        id: userId,
        email: changeEmailValues.email,
        password: changeEmailValues.password,
      })
      .then(() => {
        setUserEmail(changeEmailValues.email);
        setShowModal({ ...showModal, changeEmail: false });
        setShowErrorMessage({ ...showErrorMessage, changeEmail: false });
      })
      .catch(() => {
        setShowErrorMessage({ ...showErrorMessage, changeEmail: true });
      });
  };

  const handleChangePassword = () => {
    axios
      .put("http://localhost:8080/changeUserPassword", {
        id: userId,
        newPassword: changePasswordValues.newPassword,
        oldPassword: changePasswordValues.oldPassword,
      })
      .then(() => {
        setShowModal({ ...showModal, changePassword: false });
        setShowErrorMessage({ ...showErrorMessage, changePassword: false });
      })
      .catch(() => {
        setShowErrorMessage({ ...showErrorMessage, changePassword: true });
      });
  };
  return (
    <>
      <SideMenu />

      <S.ContentContainer>
        <S.BikeappDataContainer>
          <h1>My Account</h1>
          <p style={{ marginBottom: "0" }}>Username</p>
          <p>{userInfo.username}</p>
          <p style={{ marginBottom: "0" }}>Email</p>
          <p>{userEmail}</p>
          {!showModal.changeEmail ? (
            <RoundedButton
              value={"Change Email"}
              //@ts-ignore
              onClick={() => setShowModal({ ...showModal, changeEmail: true })}
            />
          ) : (
            <S.EditDataContainer>
              <MyField
                value={changeEmailValues.email}
                handleChange={(e) =>
                  setChageEmailValues({
                    ...changeEmailValues,
                    email: e.target.value,
                  })
                }
                label={"New Email"}
              />
              <MyField
                value={changeEmailValues.password}
                type={"password"}
                handleChange={(e) =>
                  setChageEmailValues({
                    ...changeEmailValues,
                    password: e.target.value,
                  })
                }
                label={"Password"}
              />
              <RoundedButton
                value={"Confirm"}
                style={{
                  justifyContent: "center",
                }}
                //@ts-ignore
                onClick={() => handleChangeEmail()}
              />
              {showErrorMessage.changeEmail && (
                <S.ErrorMessage>Password is incorrect</S.ErrorMessage>
              )}
            </S.EditDataContainer>
          )}
          <S.Divider />
          {!showModal.changePassword ? (
            <RoundedButton
              value={"Change Password"}
              //@ts-ignore
              onClick={() =>
                setShowModal({ ...showModal, changePassword: true })
              }
            />
          ) : (
            <S.EditDataContainer>
              <MyField
                value={changePasswordValues.oldPassword}
                handleChange={(e) =>
                  setChagePasswordValues({
                    ...changePasswordValues,
                    oldPassword: e.target.value,
                  })
                }
                label={"Old Password"}
                type={"password"}
              />
              <MyField
                value={changePasswordValues.newPassword}
                type={"password"}
                handleChange={(e) =>
                  setChagePasswordValues({
                    ...changePasswordValues,
                    newPassword: e.target.value,
                  })
                }
                label={"New Password"}
              />
              <RoundedButton
                value={"Confirm"}
                style={{
                  justifyContent: "center",
                }}
                //@ts-ignore
                onClick={() => handleChangePassword()}
              />
              {showErrorMessage.changePassword && (
                <S.ErrorMessage>Password is incorrect</S.ErrorMessage>
              )}
            </S.EditDataContainer>
          )}
          <h1 style={{ marginTop: "40px", lineHeight: "1.2em" }}>
            Social Connections
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontWeight: "bold",
            }}
          >
            <img
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
              src={stravaIcon}
              alt="stravaIcon"
            />
            <span>Connected</span>
          </div>
        </S.BikeappDataContainer>

        <S.StravaDataContainer>
          <h1 style={{ fontSize: "45px" }}>My Profile</h1>
          <S.Divider />
          <S.InfoRow>
            <S.InfoCat>Profile Picture</S.InfoCat>
            <S.InfoData>
              <ProfileImage
                src={userInfo.profile}
                style={{ width: "150px", height: "150px" }}
              />
            </S.InfoData>
          </S.InfoRow>
          <S.Divider />
          <S.InfoRow>
            <S.InfoCat>Name</S.InfoCat>
            <S.InfoData>
              {userInfo.firstname} {userInfo.lastname}
            </S.InfoData>
          </S.InfoRow>

          <S.Divider />
          <S.InfoRow>
            <S.InfoCat>Gender</S.InfoCat>
            <S.InfoData>{userInfo.sex}</S.InfoData>
          </S.InfoRow>

          <S.Divider />
          <S.InfoRow>
            <S.InfoCat>Location</S.InfoCat>
            <S.InfoData>
              {" "}
              {userInfo.city}, {userInfo.state}
            </S.InfoData>
          </S.InfoRow>

          <S.Divider />
          <S.InfoRow>
            <S.InfoCat>Weight</S.InfoCat>
            <S.InfoData> {userInfo.weight}</S.InfoData>
          </S.InfoRow>
        </S.StravaDataContainer>
      </S.ContentContainer>
    </>
  );
};

export default SettingsPage;
