import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import model from "./easy-peasy/model";
import HomePage from "./pages/homePage/HomePage";
import ActivityPage from "./pages/activityPage/ActivityPage";
import CalendarPage from "./pages/calendarPage/CalendarPage";
import SideMenu from "./components/organisms/sideMenu/SideMenu";

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
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
