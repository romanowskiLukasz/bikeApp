import React, { SetStateAction, useEffect, useState } from "react";
import AnimatedTextButton from "../../atoms/buttons/animatedTextButton/AnimatedTextButton";
import * as S from "./MonthSelector.style";
import useCurrentWidth from "../../../hooks/UseCurrentWidth";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Props {
  setMonthNumber: (mNum: number) => void;
}

const MonthSelector: React.FC<Props> = ({ setMonthNumber }) => {
  const date = new Date();
  const [currentMonth, setCurrentMonth] = useState(months[date.getMonth()]);
  let width = useCurrentWidth();

  const onClick = (monthNumber: number) => {
    setCurrentMonth(months[monthNumber]);
    setMonthNumber(monthNumber);
  };

  return (
    <>
      <S.ButtonContainer>
        {months.map((month, index) => {
          if (index === 0 && width > 500) {
            return (
              <AnimatedTextButton
                value={month.slice(0, 3)}
                style={{ borderRadius: "20px 0 0 20px" }}
                // @ts-ignore
                onClick={() => onClick(index)}
              />
            );
          } else if (index === 11 && width > 500)
            return (
              <AnimatedTextButton
                value={month.slice(0, 3)}
                style={{ borderRadius: "0 20px 20px 0" }}
                // @ts-ignore
                onClick={() => onClick(index)}
              />
            );
          else
            return (
              <AnimatedTextButton
                value={month.slice(0, 3)}
                // @ts-ignore
                onClick={() => onClick(index)}
              />
            );
        })}
      </S.ButtonContainer>
      <h4 style={{ margin: "10px 0 20px 0" }}>Active Month: {currentMonth}</h4>
    </>
  );
};

export default MonthSelector;
