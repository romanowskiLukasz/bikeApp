import React, { useState, useEffect } from "react";
import * as S from "./ActivitiesMapPage.style";
import type { Dayjs } from "dayjs";
import SideMenu from "../../components/organisms/sideMenu/SideMenu";
import "antd/dist/antd.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import dayjs from "dayjs";
import ActivityCardsColumn from "../../components/organisms/activityCardsColumn/ActivityCardsColumn";
import axios from "axios";
import { MapContainer, Polyline, Popup, TileLayer } from "react-leaflet";
import { DatePicker, DatePickerProps, Space } from "antd";
import Spin from "antd/es/spin";
import polyline from "@mapbox/polyline";
import { calculateDistance } from "../../utils/calculations";
import { StyledDatePicker } from "./ActivitiesMapPage.style";

const ActivitiesMapPage: React.FC = () => {
  // @ts-ignore
  const storeActivities = useStoreState((state) => state.activities);

  const [activities, setActivities] = useState(storeActivities);
  // @ts-ignore
  const stravaAccessToken = useStoreState((state) => state.stravaAccessToken);
  const setStoreActivities = useStoreActions(
    // @ts-ignore
    (actions) => actions.setActivities
  );

  const onChange = (date: Dayjs) => {
    const beforeTimestamp = new Date(date.year(), date.month(), 30);
    const afterTimestamp = new Date(date.year(), date.month(), 1);

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
        <S.PageTitle>Activities Map</S.PageTitle>
        <S.StyledDatePicker
          //@ts-ignore
          onChange={onChange}
          picker="month"
        />
        {activities?.map ? (
          <MapContainer
            center={polyline.decode(activities[0].map.summary_polyline)[0]}
            zoom={10}
            style={{
              width: "100%",
              height: "70vh",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {activities.map((activity: any) => {
              return (
                <Polyline
                  positions={polyline.decode(activity.map.summary_polyline)}
                  color={`#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`}
                >
                  <Popup>
                    <>
                      <h2>Name: {activity.name}</h2>
                      <p style={{ margin: "5px 0 " }}>
                        Distance: {calculateDistance(activity.distance)}km
                      </p>
                      <p style={{ margin: "5px 0 " }}>
                        Date: {dayjs(activity.start_date).format("DD/MM/YY")}
                      </p>
                    </>
                  </Popup>
                </Polyline>
              );
            })}
            )
          </MapContainer>
        ) : (
          <Space
            size="middle"
            style={{
              margin: "20px auto auto auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Spin size="large" />
          </Space>
        )}
      </S.ContentContainer>
    </div>
  );
};

export default ActivitiesMapPage;
