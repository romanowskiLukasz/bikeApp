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
import { userMockup } from "../../mockups/userMockup";
import { calculateDistance } from "../../utils/calculations";
import MobileMenu from "../../components/organisms/mobileMenu/MobileMenu";
import useCurrentWidth from "../../hooks/UseCurrentWidth";

const HomePage = () => {
  const [activities, setActivities] = useState([]);
  const [userInfo, setUserInfo] = useState(userMockup);
  const [isLoading, setIsLoading] = useState(true);

  const date = new Date();
  const yearNumber = date.getFullYear();
  const [monthNumber, setMonthNumber] = useState(date.getMonth());

  const handleMonthChange = (mNum: number) => {
    setMonthNumber(mNum);
  };

  const beforeDate = new Date(yearNumber, monthNumber, 30);
  const afterDate = new Date(yearNumber, monthNumber, 1);

  const setStoreActivities = useStoreActions(
    // @ts-ignore
    (actions) => actions.setActivities
  );
  const setStoreUser = useStoreActions(
    // @ts-ignore
    (actions) => actions.setUser
  );

  // @ts-ignore
  const userToken = useStoreState((state) => state.userAccessToken);
  // @ts-ignore
  const stravaAccessToken = useStoreState((state) => state.stravaAccessToken);

  setStoreUser(userMockup);
  useEffect(() => {
    if (stravaAccessToken.length > 0) {
      axios
        .get(
          `https://www.strava.com/api/v3/athlete/activities?before=${
            beforeDate.getTime() / 1000
          }&after=${
            afterDate.getTime() / 1000
          }&access_token=${stravaAccessToken}`
        )
        .then((resp: any) => {
          setActivities(resp.data);
          setStoreActivities(resp.data);
          setIsLoading(false);
        });
      axios
        .get(
          `https://www.strava.com/api/v3/athlete?access_token=${stravaAccessToken}`
        )
        .then((resp: any) => {
          setStoreUser(resp.data);
        });
    }
  }, [stravaAccessToken]);

  console.log(stravaAccessToken);
  useEffect(() => {
    if (stravaAccessToken.length > 0) {
      axios
        .get(
          `https://www.strava.com/api/v3/athlete/activities?before=${
            beforeDate.getTime() / 1000
          }&after=${
            afterDate.getTime() / 1000
          }&access_token=${stravaAccessToken}`
        )
        .then((resp: any) => {
          setActivities(resp.data);
          setStoreActivities(resp.data);
          setIsLoading(false);
        });
    }
  }, [monthNumber]);

  const getBikeName = (bikeId: string) => {
    const bike = userInfo.bikes.find((bike) => bike.id === bikeId);
    return bike?.name;
  };

  const postActivitiesValues = activities.map((activity: any) => {
    // console.log(activity);
    return {
      distance: Math.round(calculateDistance(activity.distance)),
      date: activity.start_date_local,
      bikeName: getBikeName(activity.gear_id),
    };
  });

  useEffect(() => {
    // if (monthNumber === 10) {
    //   // @ts-ignore
    //   setActivities(novemberActivities);
    //   setStoreActivities(novemberActivities);
    // }
    // if (monthNumber === 9) {
    //   // @ts-ignore
    //   setActivities(octoberActivityList);
    //   setStoreActivities(octoberActivityList);
    // }
    // if (monthNumber === 8) {
    //   // @ts-ignore
    //   setActivities(septemberActivityList);
    //   setStoreActivities(septemberActivityList);
    // }
    // setIsLoading(false);
    // console.log(postActivitiesValues);
    axios
      .post("http://localhost:8080/updatePartsDistance", {
        postActivitiesValues,
      })
      .then();
  }, [userToken]);

  return (
    <>
      <SideMenu />

      <S.ContentContainer>
        <UserInfoCard />
        <section>
          <MonthSelector setMonthNumber={handleMonthChange} />
          <ActivityCardsColumn isLoading={isLoading} activities={activities} />
        </section>
      </S.ContentContainer>
    </>
  );
};

export default HomePage;
