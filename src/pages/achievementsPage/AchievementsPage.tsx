import React, { useEffect, useState } from "react";
import SideMenu from "../../components/organisms/sideMenu/SideMenu";
import * as S from "./AchievementsPage.style";
import AchievementCard from "../../components/molecules/cards/achievementsCard/AchievementCard";
import axios from "axios";
import * as http from "http";

interface achievment {
  category: string;
  img: string;
  name: string;
  isCompleted: boolean;
}

const AchievementsPage: React.FC = () => {
  const [achievements, setAchevements] = useState([]);

  // // @ts-ignore
  // const userId = useStoreState((state) => state.loggedUserId);
  const userId = 1;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getUserAchievements/${userId}`)
      .then((resp: any) => {
        console.log(resp.data);
        setAchevements(resp.data);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <S.ContentContainer>
        <S.PageTitle>Achievements</S.PageTitle>

        <S.CategoryTitle>Total Distance</S.CategoryTitle>
        {achievements.map((achievement: achievment) => {
          if (achievement.category === "totalDistance") {
            return (
              <AchievementCard
                iconSrc={achievement.img}
                description={achievement.name}
                completed={achievement.isCompleted}
              />
            );
          }
        })}
        <S.CategoryTitle>Total Elevation</S.CategoryTitle>
        {achievements.map((achievement: achievment) => {
          if (achievement.category === "totalElevation") {
            return (
              <AchievementCard
                iconSrc={achievement.img}
                description={achievement.name}
                completed={achievement.isCompleted}
              />
            );
          }
        })}

        <S.CategoryTitle>Workshop</S.CategoryTitle>
        {achievements.map((achievement: achievment) => {
          if (achievement.category === "workshop") {
            return (
              <AchievementCard
                iconSrc={achievement.img}
                description={achievement.name}
                completed={achievement.isCompleted}
              />
            );
          }
        })}
      </S.ContentContainer>
    </div>
  );
};

export default AchievementsPage;
