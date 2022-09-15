import React from "react";
import * as S from "./ActivityCardsColumn.style";
import ActivityCard from "../../molecules/cards/activityCard/ActivityCard";
import { Space } from "antd";
import Spin from "antd/es/spin";

interface Props {
  isLoading: boolean;
  activities: any;
}

const ActivityCardsColumn: React.FC<Props> = ({ activities, isLoading }) => {
  return (
    <S.CardsContainer>
      {!isLoading &&
        activities.map((activity: any) => {
          return <ActivityCard activity={activity} />;
        })}
      {isLoading && (
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
    </S.CardsContainer>
  );
};
export default ActivityCardsColumn;
