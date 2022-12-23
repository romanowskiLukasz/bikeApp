import { action } from "easy-peasy";

export default {
  isLoggedIn: false,
  loggedUserEmal: "",
  user: {},
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
  setLoggedUserEmal: action((state, newEmail) => {
    state.loggedUserEmal = newEmail;
  }),
  setActivities: action((state, activities) => {
    state.activities = activities;
  }),
  setAccessToken: action((state, accessToken) => {
    state.userAccessToken = accessToken;
  }),
};
