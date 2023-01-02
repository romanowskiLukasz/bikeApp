import React from "react";
import * as S from "./AchievementCard.style";
import { Description } from "./AchievementCard.style";

interface Props {
  completed: boolean;
  description: string;
  iconSrc: string;
}

const AchievementCard: React.FC<Props> = ({
  completed,
  iconSrc,
  description,
}) => {
  return (
    <S.Container style={{ opacity: `${completed ? "100%" : "60%"}` }}>
      <S.Icon src={iconSrc} />
      <S.Description>{description}</S.Description>
      {completed && (
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexBasis: "10%",
          }}
        >
          <S.Description>completed</S.Description>
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      )}
    </S.Container>
  );
};
export default AchievementCard;
