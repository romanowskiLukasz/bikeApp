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
import { useStoreState, useStoreActions } from "easy-peasy";
import {
  activitiesMockup,
  novemberActivities,
  octoberActivityList,
  septemberActivityList,
} from "../../activitiesMoc";
import MonthSelector from "../../components/molecules/monthSelector/MonthSelector";

const HomePage = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const date = new Date();
  const yearNumber = date.getFullYear();
  const [monthNumber, setMonthNumber] = useState(date.getMonth());

  const handleMonthChange = (mNum: number) => {
    setMonthNumber(mNum);
  };

  const beforeDate = new Date(yearNumber, monthNumber, 30);
  const afterDate = new Date(yearNumber, monthNumber, 1);

  const clientID = "79929";

  const clientSecret = "dce6f310a9ea3421dbaad9fe047b9c83ea5dca5f";
  const refreshToken = "4cf4fba02f788bd8729bedff461a4fab2b6af451";
  const auth_link = "https://www.strava.com/oauth/token";
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

  const setStoreActivities = useStoreActions(
    // @ts-ignore
    (actions) => actions.setActivities
  );
  const setStoreAccessToken = useStoreActions(
    // @ts-ignore
    (actions) => actions.setAccessToken
  );
  // @ts-ignore
  const userToken = useStoreState((state) => state.userAccessToken);

  // useEffect(() => {
  //   async function fetchData() {
  //     const stravaAuthResponse = await axios.all([
  //       axios.post(
  //         `${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
  //       ),
  //     ]);
  //
  //     const stravaActivityResponse = await axios.get(
  //       `${activities_link}?before=${beforeDate.getTime() / 1000}&after=${
  //         afterDate.getTime() / 1000
  //       }&access_token=${stravaAuthResponse[0].data.access_token}`
  //     );
  //     setActivities(stravaActivityResponse.data);
  //     setStoreActivities(stravaActivityResponse.data);
  //     axios
  //       .get(
  //         `https://www.strava.com/api/v3/athlete?access_token=${stravaAuthResponse[0].data.access_token}`
  //       )
  //       .then((resp: any) => {
  //         console.log(resp.data);
  //       });
  //
  //     setStoreAccessToken(stravaAuthResponse[0].data.access_token);
  //
  //     setIsLoading(false);
  //   }
  //
  //   fetchData();
  // }, []);
  //
  useEffect(() => {
    // if (userToken !== "") {
    //   axios
    //     .get(
    //       `${activities_link}?before=${beforeDate.getTime() / 1000}&after=${
    //         afterDate.getTime() / 1000
    //       }&access_token=${userToken}`
    //     )
    //     .then((response) => {
    //       setActivities(response.data);
    //       setStoreActivities(response.data);
    //     });
    // }

    if (monthNumber === 10) {
      // @ts-ignore
      setActivities(novemberActivities);
      setStoreActivities(novemberActivities);
    }
    if (monthNumber === 9) {
      // @ts-ignore
      setActivities(octoberActivityList);
      setStoreActivities(octoberActivityList);
    }
    if (monthNumber === 8) {
      // @ts-ignore
      setActivities(septemberActivityList);
      setStoreActivities(septemberActivityList);
    }
    setIsLoading(false);
  }, [userToken, monthNumber]);

  // useEffect(() => {
  //   // @ts-ignore
  //   setActivities(activitiesMockup);
  //   setStoreActivities(activitiesMockup);
  //   setIsLoading(false);
  // }, []);
  return (
    <>
      <SideMenu />
      <S.ContentContainer>
        <section>
          <MonthSelector setMonthNumber={handleMonthChange} />
          <ActivityCardsColumn isLoading={isLoading} activities={activities} />
        </section>
        <UserInfoCard />
      </S.ContentContainer>
    </>
  );
};

export default HomePage;
