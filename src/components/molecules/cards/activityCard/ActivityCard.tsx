import React, { useEffect, useState } from "react";
import * as S from "./ActivityCard.style";
import ProfileImage from "../../../atoms/profileImage/ProfileImage";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import polyline from "@mapbox/polyline";
import ActivityStatIcon from "../../../atoms/icon/activityStatIcon/ActivityStatIcon";
import {
  calculateAvgSpeedFromMS,
  calculateDistance,
  calculateDuration,
  getDate,
} from "../../../../utils/calculations";
import { Space } from "antd";
import Spin from "antd/es/spin";

type stravaMap = {
  id: string;
  resource_state: number;
  summary_polyline: any;
};

type stravaActivity = {
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

interface Props {
  activity: stravaActivity;
}

const ActivityCard: React.FC<Props> = ({ activity }) => {
  const userName = "Lukasz Romanowski";

  const {
    sport_type,
    name,
    map,
    end_latlng = [0, 0],
    start_latlng = [0, 0],
    distance,
    moving_time,
    average_watts,
    average_speed,
    total_elevation_gain,
    start_date_local,
  } = activity || {};

  const { summary_polyline = "" } = map || {};
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
        distanceBetweenPoints(start_latlng, end_latlng) >=
        distanceBetweenPoints(start_latlng, activityPositions[middleIndex])
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
  }, [activity]);

  const getActivityTypeMessage = (sportType: string) => {
    let message;
    switch (sportType) {
      case "Ride":
        message = "was riding a bike ";
        break;
      case "Run":
        message = "was running";
        break;
      case "Walk":
        message = "was walking ";
        break;
    }

    return message;
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <ProfileImage
          src={
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/14592553/9923464/2/large.jpg"
          }
        />
        <section style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              color: "grey",
              justifyContent: "space-between",
            }}
          >
            <S.Header>
              <span style={{ color: "#242428" }}>
                <b>{userName}</b>{" "}
              </span>
              {getActivityTypeMessage(sport_type)}
            </S.Header>
            <S.Date>{getDate(start_date_local).toString().slice(4, 21)}</S.Date>
          </div>
          <S.Name>{name}</S.Name>
        </section>
      </S.HeaderContainer>

      <S.StatsContainer>
        <ActivityStatIcon
          src={"https://cdn-icons-png.flaticon.com/512/6532/6532028.png"}
          sideText={`${calculateDuration(moving_time)}`}
        />
        <ActivityStatIcon
          src="https://cdn-icons-png.flaticon.com/512/8160/8160375.png"
          sideText={`${calculateDistance(distance)}km`}
        />
        <ActivityStatIcon
          src="https://cdn-icons-png.flaticon.com/512/2786/2786465.png"
          sideText={`${calculateAvgSpeedFromMS(average_speed)}km/h`}
        />
        <ActivityStatIcon
          src="https://cdn-icons-png.flaticon.com/512/7693/7693575.png"
          sideText={`${average_watts}W`}
        />

        <ActivityStatIcon
          src="https://cdn-icons-png.flaticon.com/512/8227/8227036.png"
          sideText={`${total_elevation_gain}m`}
        />
      </S.StatsContainer>
      {furthestPoint.length > 0 && (
        <MapContainer
          bounds={[
            [start_latlng[0], start_latlng[1]],
            [furthestPoint[0], furthestPoint[1]],
          ]}
          boundsOptions={{ padding: [25, 25] }}
          scrollWheelZoom={false}
          style={{
            width: "580px",
            height: "250px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline positions={activityPositions}></Polyline>)
        </MapContainer>
      )}
      {furthestPoint.length <= 0 && (
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
    </S.Container>
  );
};
export default ActivityCard;
