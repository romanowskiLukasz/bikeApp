import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import model from "./easy-peasy/model";
import HomePage from "./pages/homePage/HomePage";
import ActivityPage from "./pages/activityPage/ActivityPage";
import CalendarPage from "./pages/calendarPage/CalendarPage";
import WorkshopHomePage from "./pages/workshop/homePage/WorkshopHomePage";
import MyBikesPage from "./pages/workshop/myBikesPage/MyBikesPage";
import MyPartsPage from "./pages/workshop/myPartsPage/MyPartsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import RedirectPage from "./pages/redirectPage/RedirectPage";
import ActivitiesMapPage from "./pages/activitiesMapPage/ActivitiesMapPage";

const store = createStore(model);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activityCalendar" element={<CalendarPage />} />
          <Route path="/activity/:activityId" element={<ActivityPage />} />
          <Route path="/workshop" element={<WorkshopHomePage />} />
          <Route path="/workshop/my-bikes" element={<MyBikesPage />} />
          <Route path="/workshop/my-parts" element={<MyPartsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/activitiesMap" element={<ActivitiesMapPage />} />
          <Route path="/redirect/*" element={<RedirectPage />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
