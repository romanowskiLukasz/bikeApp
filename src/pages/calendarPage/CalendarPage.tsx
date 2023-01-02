import React, { useState, useEffect } from "react";
import type { BadgeProps } from "antd";
import "./index.css";
import * as S from "./CalendarPage.style";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import SideMenu from "../../components/organisms/sideMenu/SideMenu";
import "antd/dist/antd.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { calculateDistance } from "../../utils/calculations";
import dayjs from "dayjs";
import ActivityCardsColumn from "../../components/organisms/activityCardsColumn/ActivityCardsColumn";
import axios from "axios";

const CalendarPage: React.FC = () => {
  // @ts-ignore
  const storeActivities = useStoreState((state) => state.activities);

  const [activities, setActivities] = useState(storeActivities);
  // const [activities, setActivities] = useState([]);
  const [selectedDayActivities, setSelectedDayActiviteis] = useState([{}]);
  const [
    shouldDisplayActivitiesOnSelectedDay,
    setShouldDisplayActivitiesOnSelectedDay,
  ] = useState(false);
  // @ts-ignore
  const stravaAccessToken = useStoreState((state) => state.stravaAccessToken);
  const setStoreActivities = useStoreActions(
    // @ts-ignore
    (actions) => actions.setActivities
  );
  useEffect(() => {
    handleChange(dayjs());
  }, []);

  const getCellDistance = (date: Dayjs) => {
    let distance = 0;
    const cellDate = date.format("DD/MM/YYYY");
    let activityDateTrimmed;
    let activityDate;
    if (activities && activities.length) {
      activities.forEach((activity: any) => {
        activityDateTrimmed = new Date(activity.start_date_local);

        dayjs(activity.start_date_local).format("DD/MM/YYYY");
        activityDate = dayjs(activity.start_date_local).format("DD/MM/YYYY");
        if (activityDate.toString() === cellDate.toString()) {
          distance += activity.distance;
        }
      });
    }
    return Math.round(calculateDistance(distance));
  };

  const dateCellRender = (value: Dayjs) => {
    const distance = getCellDistance(value);
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {distance != 0 && (
          <div
            style={{
              backgroundColor: "#ED6335",
              minWidth: "40px",
              maxWidth: "80px",
              minHeight: "40px",
              maxHeight: "80px",
              width: `${40 + 40 * (distance / 100)}px`,
              height: `${40 + 40 * (distance / 100)}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {distance}km
          </div>
        )}
      </div>
    );
  };
  const onDaySelect = (date: moment.Moment) => {
    setShouldDisplayActivitiesOnSelectedDay(false);
    setSelectedDayActiviteis([]);
    console.log("tstt");
    const cellDate = date.format("DD/MM/YYYY");
    let activityDateTrimmed;
    let activityDate;
    if (activities) {
      activities.forEach((activity: any) => {
        activityDateTrimmed = new Date(activity.start_date_local);

        dayjs(activity.start_date_local).format("DD/MM/YYYY");
        activityDate = dayjs(activity.start_date_local).format("DD/MM/YYYY");
        if (activityDate.toString() === cellDate.toString()) {
          setSelectedDayActiviteis((current) => [...current, activity]);
          setShouldDisplayActivitiesOnSelectedDay(true);
        }
      });
    }
  };

  const handleChange = (date: Dayjs) => {
    const beforeTimestamp = new Date(date.year(), date.month() + 1, 8);
    const afterTimestamp = new Date(date.year(), date.month() - 1, 28);
    if (stravaAccessToken.length > 0) {
      axios
        .get(
          `https://www.strava.com/api/v3/athlete/activities?before=${
            beforeTimestamp.getTime() / 1000
          }&per_page=60
          &after=${
            afterTimestamp.getTime() / 1000
          }&access_token=${stravaAccessToken}`
        )
        .then((resp: any) => {
          setActivities(resp.data);
          setStoreActivities(resp.data);
        });
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <S.ContentContainer>
        <S.PageTitle>Activities Calendar</S.PageTitle>
        <S.StyledCalendar
          // @ts-ignore
          dateCellRender={dateCellRender}
          // @ts-ignore
          onChange={(date) => handleChange(date)}
          onSelect={(date) => onDaySelect(date)}
        />
        <h1
          style={{ marginTop: "25px", marginBottom: "25px", color: "#ED6335" }}
        >
          Activites on selected day
        </h1>
        <section>
          {shouldDisplayActivitiesOnSelectedDay ? (
            <ActivityCardsColumn
              isLoading={false}
              activities={selectedDayActivities}
            />
          ) : (
            <span>No activities on selected day</span>
          )}
        </section>
      </S.ContentContainer>
    </div>
  );
};

export default CalendarPage;
