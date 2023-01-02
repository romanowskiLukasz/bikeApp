import { action } from "easy-peasy";
import { userMockup } from "../mockups/userMockup";

export default {
  isLoggedIn: false,
  loggedUserEmail: "",
  loggedUserId: "",
  user: userMockup,
  registrationData: {},
  stravaAccessToken: "",
  activities: {},
  userAccessToken: "",

  //============= ACTIONS =================
  setIsLoggedIn: action((state, email) => {
    state.isLoggedIn = true;
    state.loggedUserEmal = email;
  }),
  setUser: action((state, userInfo) => {
    state.user = userInfo;
  }),
  setStravaAccessToken: action((state, accessToken) => {
    state.stravaAccessToken = accessToken;
  }),
  setRegistrationData: action((state, registrationData) => {
    state.registrationData = registrationData;
  }),
  setLoggedUserEmail: action((state, newEmail) => {
    state.loggedUserEmal = newEmail;
  }),
  setLoggedUserId: action((state, id) => {
    state.loggedUserId = id;
  }),
  setActivities: action((state, activities) => {
    state.activities = activities;
  }),
  setAccessToken: action((state, accessToken) => {
    state.userAccessToken = accessToken;
  }),
};
