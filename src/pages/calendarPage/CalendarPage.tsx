import React from "react";
import type { BadgeProps } from "antd";
import "./index.css";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import SideMenu from "../../components/organisms/sideMenu/SideMenu";
import "antd/dist/antd.css";

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const CalendarPage: React.FC = () => {
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    console.log(value.format("l"));
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <SideMenu />

      <Calendar
        // @ts-ignore
        dateCellRender={dateCellRender}
        style={{ width: "70%", marginLeft: "350px" }}
      />
    </div>
  );
};

export default CalendarPage;
