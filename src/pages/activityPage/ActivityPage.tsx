import React, { useEffect, useState } from "react";
import Header from "../../components/organisms/header/Header";
import SideMenu from "../../components/organisms/sideMenu/SideMenu";
import TrainingDetails from "../../components/organisms/trainingDetails/TrainingDetails";
import { useStoreState } from "easy-peasy";
import * as S from "./ActivityPage.style";
import {
  calculateDistance,
  calculateDuration,
  getDate,
} from "../../utils/calculations";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import polyline from "@mapbox/polyline";
import OnMapStatistic from "../../components/atoms/onMapStatistic/OnMapStatistic";

const axios = require("axios").default;

type stravaMap = {
  id: string;
  resource_state: number;
  summary_polyline: any;
};

type stravaActivity = {
  id: string;
  sport_type: string;
  name: string;
  map: stravaMap;
  end_latlng: [number, number];
  start_latlng: [number, number];
  distance: number;
  moving_time: number;
  average_watts: number;
  average_speed: number;
  total_elevation_gain: number;
  start_date_local: string;
};

const ActivityPage: React.FC = () => {
  let activityId = window.location.href.substring(
    31,
    window.location.href.length
  );
  // @ts-ignore
  const activitesFromStore = useStoreState((state) => state.activities);
  // @ts-ignore
  const userAccessToken = useStoreState((state) => state.userAccessToken);

  // console.log(activityId);
  // console.log(test);
  // console.log(test.find((x: any) => x.id == activityId));
  const [activityInfo, setActivityInfo] = useState({
    start_date_local: "",
    name: "",
    map: {},
    end_latlng: [],
    start_latlng: [],
    distance: "",
    moving_time: "",
    total_elevation_gain: "",
  });
  console.log(activityInfo);
  useEffect(() => {
    setActivityInfo(activitesFromStore.find((x: any) => x.id == activityId));

    // axios
    //   .get(
    //     `https://www.strava.com/api/v3/activities/${activityId}/streams?keys=watts&key_by_type=true&access_token=${userAccessToken}`
    //   )
    //   .then((resp: any) => {
    //     console.log(resp.data);
    //   });
  }, []);

  // @ts-ignore
  const { summary_polyline = "" } = activityInfo.map || {};
  const [activityPositions, setActivityPositions] = useState([]);
  const [furthestPoint, setFurthestPoint] = useState([]);

  const distanceBetweenPoints = (coor1: any, coor2: any) => {
    const x = coor2[0] - coor1[0];
    const y = coor2[1] - coor1[1];
    return Math.sqrt(x * x + y * y);
  };

  useEffect(() => {
    if (activityPositions.length !== 0) {
      const middleIndex = Math.floor(activityPositions.length / 2);
      if (
        distanceBetweenPoints(
          activityInfo.start_latlng,
          activityInfo.end_latlng
        ) >=
        distanceBetweenPoints(
          activityInfo.start_latlng,
          activityPositions[middleIndex]
        )
      ) {
        // @ts-ignore
        setFurthestPoint(end_latlng);
      } else {
        setFurthestPoint(activityPositions[middleIndex]);
      }
    }
  }, [activityPositions]);

  useEffect(() => {
    // @ts-ignore
    setActivityPositions(polyline.decode(summary_polyline));
  }, [activityInfo]);

  return (
    <S.PageLayout>
      <SideMenu />
      <S.ContentContainer>
        <S.Date>
          {getDate(activityInfo.start_date_local).toString().slice(4, 21)}
        </S.Date>
        <S.ActivityName>{activityInfo.name}</S.ActivityName>
        {furthestPoint.length > 0 && (
          <>
            <S.OpacityGradient>
              <OnMapStatistic
                title={"Distance"}
                value={calculateDistance(parseFloat(activityInfo.distance))}
                unit={"KM"}
              />

              <OnMapStatistic
                title={"Moving time"}
                value={calculateDuration(parseFloat(activityInfo.moving_time))}
                unit={""}
              />
              <OnMapStatistic
                title={"Distance"}
                value={activityInfo.total_elevation_gain}
                unit={"M"}
              />
            </S.OpacityGradient>
            <MapContainer
              bounds={[
                [activityInfo.start_latlng[0], activityInfo.start_latlng[1]],
                [furthestPoint[0], furthestPoint[1]],
              ]}
              boundsOptions={{ padding: [25, 25] }}
              scrollWheelZoom={false}
              zoomControl={false}
              style={{
                width: "100%",
                height: "600px",
                borderRadius: "0 0 30px 30px",
              }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polyline positions={activityPositions}></Polyline>)
            </MapContainer>
          </>
        )}
      </S.ContentContainer>
      <TrainingDetails activityInfo={activityInfo} />
    </S.PageLayout>
  );
};
export default ActivityPage;
