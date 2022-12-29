import React, { useEffect, useState } from "react";
import * as S from "./UserInfoCard.style";
import ProfileImage from "../../../atoms/profileImage/ProfileImage";
import { useStoreState } from "easy-peasy";
import axios from "axios";
import { userStatsMockup } from "../../../../mockups/userStatsMockup";
import TrainingDetailStat from "../../../atoms/trainingDetailStat/trainingDetailStat";
import {
  calculateDistance,
  calculateDuration,
} from "../../../../utils/calculations";
import useCurrentWidth from "../../../../hooks/UseCurrentWidth";

const UserInfoCard: React.FC = () => {
  const [userStats, setUserStats] = useState(userStatsMockup);
  // @ts-ignore
  const userInfo = useStoreState((state) => state.user);
  // @ts-ignore
  const stravaAccessToken = useStoreState((state) => state.stravaAccessToken);
  let width = useCurrentWidth();
  useEffect(() => {
    if (stravaAccessToken.length > 0) {
      // axios
      //   .get(
      //     `https://www.strava.com/api/v3//athletes/${userInfo.id}/stats?access_token=${stravaAccessToken}`
      //   )
      //   .then((resp: any) => {
      //     setUserStats(resp.data);
      //   });
    }
  }, [stravaAccessToken]);

  return (
    <S.Container>
      <ProfileImage
        style={{
          width: "80px",
          height: "80px",
          position: "relative",
          top: `${width < 1210 ? "5px" : "-40px"}`,
        }}
        src={
          "https://dgalywyr863hv.cloudfront.net/pictures/athletes/14592553/9923464/2/large.jpg"
        }
      />
      <S.UserName>
        {userInfo.firstname} {userInfo.lastname}
      </S.UserName>
      <S.Divider />
      <section>
        <h3>Recent stats</h3>
        <S.StatsRow>
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/567/567019.png"}
            unit={"h"}
            value={Math.round(userStats.recent_ride_totals.moving_time / 3600)}
            width={140}
            height={60}
            text={"Moving Time"}
            isTwoLined={false}
            isHomePageStat={true}
          />
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/3754/3754499.png"}
            unit={"km"}
            value={Math.round(
              calculateDistance(userStats.recent_ride_totals.distance)
            )}
            width={130}
            height={60}
            text={"Distance"}
            isTwoLined={false}
            isHomePageStat={true}
          />
        </S.StatsRow>
        <S.StatsRow>
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/619/619010.png"}
            unit={"m"}
            value={userStats.recent_ride_totals.elevation_gain}
            width={130}
            height={60}
            text={"Elevation gain"}
            isTwoLined={false}
            isHomePageStat={true}
          />
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/6134/6134688.png"}
            unit={""}
            value={userStats.recent_ride_totals.count}
            width={140}
            height={60}
            text={"Number of activities"}
            isTwoLined={false}
            isHomePageStat={true}
          />
        </S.StatsRow>
      </section>
      <section>
        <h3>All time stats</h3>
        <S.StatsRow>
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/567/567019.png"}
            unit={"h"}
            value={Math.round(userStats.all_ride_totals.moving_time / 3600)}
            width={140}
            height={60}
            text={"Moving Time"}
            isTwoLined={false}
            isHomePageStat={true}
          />
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/3754/3754499.png"}
            unit={"km"}
            value={Math.round(
              calculateDistance(userStats.all_ride_totals.distance)
            )}
            width={130}
            height={60}
            text={"Distance"}
            isTwoLined={false}
            isHomePageStat={true}
          />
        </S.StatsRow>
        <S.StatsRow>
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/619/619010.png"}
            unit={"m"}
            value={userStats.all_ride_totals.elevation_gain}
            width={130}
            height={60}
            text={"Elevation gain"}
            isTwoLined={false}
            isHomePageStat={true}
          />
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/6134/6134688.png"}
            unit={""}
            value={userStats.all_ride_totals.count}
            width={140}
            height={60}
            text={"Number of activities"}
            isTwoLined={false}
            isHomePageStat={true}
          />
        </S.StatsRow>
      </section>
      <section>
        <h3>Biggest ride and elevation</h3>
        <S.StatsRow>
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/619/619010.png"}
            unit={"m"}
            value={Math.round(userStats.biggest_climb_elevation_gain)}
            width={150}
            height={60}
            text={"Elevation gain"}
            isTwoLined={false}
            isHomePageStat={true}
          />
          <TrainingDetailStat
            src={"https://cdn-icons-png.flaticon.com/512/3754/3754499.png"}
            unit={"km"}
            value={Math.round(
              calculateDistance(userStats.biggest_ride_distance)
            )}
            width={125}
            height={60}
            text={"Distance"}
            isTwoLined={false}
            isHomePageStat={true}
          />
        </S.StatsRow>
      </section>
    </S.Container>
  );
};
export default UserInfoCard;
