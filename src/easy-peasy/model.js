import { action } from "easy-peasy";

export default {
  isLoggedIn: false,
  loggedUserEmal: "",
  me: "",
  activities: {},
  userAccessToken: "",

  //============= ACTIONS =================
  setIsLoggedIn: action((state, email) => {
    state.isLoggedIn = true;
    state.loggedUserEmal = email;
  }),
  setMe: action((state, userInfo) => {
    state.me = userInfo;
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
