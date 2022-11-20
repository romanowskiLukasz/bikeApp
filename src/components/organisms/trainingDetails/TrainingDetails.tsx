import React from "react";
import * as S from "./TrainingDetails.style";
import ProfileImage from "../../atoms/profileImage/ProfileImage";
import TrainingDetailStat from "../../atoms/trainingDetailStat/trainingDetailStat";
import {
  calculateAvgSpeedFromMS,
  calculateDuration,
} from "../../../utils/calculations";

// @ts-ignore
const TrainingDetails = ({ activityInfo }) => {
  return (
    <S.Container>
      <ProfileImage
        style={{
          width: "100px",
          height: "100px",
          position: "relative",
          top: "-50px",
        }}
        src={
          "https://dgalywyr863hv.cloudfront.net/pictures/athletes/14592553/9923464/2/large.jpg"
        }
      />
      <S.Title>Training Details</S.Title>
      <S.StatsRow>
        <TrainingDetailStat
          src={"https://cdn-icons-png.flaticon.com/512/3251/3251101.png"}
          unit={"KM/H"}
          value={{
            avg: calculateAvgSpeedFromMS(activityInfo.average_speed),
            max: calculateAvgSpeedFromMS(activityInfo.max_speed),
          }}
          width={160}
          height={60}
        />
        <TrainingDetailStat
          src={"https://cdn-icons-png.flaticon.com/512/1634/1634176.png"}
          unit={"KCAL"}
          value={{
            avg: "",
            max: (parseFloat(activityInfo.kilojoules) / 4.184).toFixed(0),
          }}
          width={120}
          height={60}
          isTwoLined={false}
        />
      </S.StatsRow>
      <S.StatsRow>
        <TrainingDetailStat
          src={"https://cdn-icons-png.flaticon.com/512/1289/1289927.png"}
          unit={"RPM"}
          value={{
            avg: "",
            max: parseFloat(activityInfo.average_cadence).toFixed(0),
          }}
          width={140}
          height={60}
          isTwoLined={false}
        />
        <TrainingDetailStat
          src={"https://cdn-icons-png.flaticon.com/512/8794/8794259.png"}
          unit={"W"}
          value={{
            avg: parseFloat(activityInfo.average_watts).toFixed(0),
            max: parseFloat(activityInfo.max_watts).toFixed(0),
          }}
          width={140}
          height={60}
        />
      </S.StatsRow>
      <S.StatsRow>
        <TrainingDetailStat
          src={"https://cdn-icons-png.flaticon.com/512/8794/8794259.png"}
          unit={""}
          value={{
            avg: "",
            max: calculateDuration(activityInfo.moving_time),
          }}
          width={292}
          height={60}
          text={"Elapsed Time"}
          isTwoLined={false}
        />
      </S.StatsRow>
      <S.Title>Trophies </S.Title>
      <S.StatsRow>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3113/3113049.png"
          style={{ width: "45px", height: "45px" }}
        />
        <S.Title style={{ color: "#656565" }}>
          {activityInfo.achievement_count}
        </S.Title>
      </S.StatsRow>
    </S.Container>
  );
};
export default TrainingDetails;
