import React, { useEffect, useState } from "react";

import "../../App.css";
import axios from "axios";
import polyline from "@mapbox/polyline";
import Header from "../../components/organisms/header/Header";
import SideMenu from "../../components/organisms/sideMenu/SideMenu";
import * as S from "./HomePage.style";
import ActivityCard from "../../components/molecules/cards/activityCard/ActivityCard";
import { Space } from "antd";
import Spin from "antd/es/spin";
import "antd/es/spin/style/css";
import ActivityCardsColumn from "../../components/organisms/activityCardsColumn/ActivityCardsColumn";
import UserInfoCard from "../../components/molecules/cards/userInfoCard/UserInfoCard";

const HomePage = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const clientID = "79929";

  const clientSecret = "dce6f310a9ea3421dbaad9fe047b9c83ea5dca5f";
  const refreshToken = "4cf4fba02f788bd8729bedff461a4fab2b6af451";
  const auth_link = "https://www.strava.com/oauth/token";
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(
          `${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
        ),
      ]);

      const stravaActivityResponse = await axios.get(
        `${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`
      );

      setActivities(stravaActivityResponse.data);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <SideMenu />
      <S.ContentContainer>
        <ActivityCardsColumn isLoading={isLoading} activities={activities} />
        <UserInfoCard />
      </S.ContentContainer>
    </>
  );
};

export default HomePage;
