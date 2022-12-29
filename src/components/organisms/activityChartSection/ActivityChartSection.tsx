import React, { useEffect, useState } from "react";
import * as S from "./ActivityChartSection.style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { ActivityStreamMocMedium } from "../../../activityStreamsMoc";
import { userMockup } from "../../../mockups/userMockup";
import { calculateAvgSpeedFromMS } from "../../../utils/calculations";
import ChartMenuButton from "../../atoms/buttons/chartMenuButton/ChartMenuButton";
import useZones from "./useZones";
import { Doughnut } from "react-chartjs-2";

interface Props {
  duration: number;
}
const ActivityChartSection: React.FC<Props> = ({ duration }) => {
  const [menuOption, setMenuOption] = useState("SingleChart");
  const { watts, distance, altitude, velocity_smooth } =
    ActivityStreamMocMedium;
  const { ftp } = userMockup;
  const powerData = watts.data;
  const { powerZonesInPercentage, durationInZones } = useZones({
    duration,
    ftp,
    powerData,
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement
  );

  const options = {
    responsive: true,
    options: {
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    radius: 1,
  };

  const convertDataToKMs = (data: number[]) => {
    return data.map((meters) => {
      return (meters / 1000).toFixed(0);
    });
  };
  const convertDataToKMH = (data: number[]) => {
    return data.map((speed) => {
      return calculateAvgSpeedFromMS(speed);
    });
  };

  const labels = convertDataToKMs(distance.data);
  const AltitudeData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Elevation",
        data: altitude.data,
        borderColor: "#D9D9D9",
        backgroundColor: "#D9D9D9",
      },
    ],
  };
  const PowerData = {
    labels,
    datasets: [
      {
        fill: false,
        label: "Power",
        data: watts.data,
        borderColor: "blue",
      },
    ],
  };
  const SpeedData = {
    labels,
    datasets: [
      {
        fill: false,
        label: "Speed",
        data: convertDataToKMH(velocity_smooth.data),
        borderColor: "red",
      },
    ],
  };

  const singleChartData = {
    labels,
    datasets: [
      {
        fill: false,
        label: "Speed",
        data: convertDataToKMH(velocity_smooth.data),
        borderColor: "red",
      },
      {
        fill: false,
        label: "Power",
        data: watts.data,
        borderColor: "blue",
      },
      {
        fill: true,
        label: "Elevation",
        data: altitude.data,
        borderColor: "#D9D9D9",
        backgroundColor: "#D9D9D9",
      },
    ],
  };

  const powerZonesInPercentageData = {
    labels: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6"],
    datasets: [
      {
        label: "% of time spent in zone",
        data: [
          powerZonesInPercentage[0],
          powerZonesInPercentage[1],
          powerZonesInPercentage[2],
          powerZonesInPercentage[3],
          powerZonesInPercentage[4],
          powerZonesInPercentage[5],
        ],
        backgroundColor: [
          "#7F7F7F",
          "#388AF6",
          "#58BE59",
          "#F7CB44",
          "#ED6335",
          "#EC3223",
        ],
      },
    ],
  };

  const HorizontalBarChartOptions = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels: ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6"],
    datasets: [
      {
        label: `Duration in zone 1: ${durationInZones[0].asString}`,
        data: [durationInZones[0].asNumber, 0, 0, 0, 0, 0],
        borderColor: "#7F7F7F",
        backgroundColor: "#7F7F7F",
      },
      {
        label: `Duration in zone 2: ${durationInZones[1].asString}`,
        data: [0, durationInZones[1].asNumber, 0, 0, 0, 0],
        borderColor: "#388AF6",
        backgroundColor: "#388AF6",
      },
      {
        label: `Duration in zone 3: ${durationInZones[2].asString}`,
        data: [0, 0, durationInZones[2].asNumber, 0, 0, 0],
        borderColor: "#58BE59",
        backgroundColor: "#58BE59",
      },
      {
        label: `Duration in zone 4: ${durationInZones[3].asString}`,
        data: [0, 0, 0, durationInZones[3].asNumber, 0, 0],
        borderColor: "#F7CB44",
        backgroundColor: "#F7CB44",
      },
      {
        label: `Duration in zone 5: ${durationInZones[4].asString}`,
        data: [0, 0, 0, 0, durationInZones[4].asNumber, 0],
        borderColor: "#ED6335",
        backgroundColor: "#ED6335",
      },
      {
        label: `Duration in zone 6: ${durationInZones[5].asString}`,
        data: [0, 0, 0, 0, 0, durationInZones[5].asNumber],
        borderColor: "#EC3223",
        backgroundColor: "#EC3223",
      },
    ],
  };

  return (
    <div style={{ minHeight: "450px" }}>
      <section style={{ margin: "15px auto 15px auto" }}>
        <div style={{ display: "flex" }}>
          <ChartMenuButton
            text={"Multiple Charts"}
            onClick={() => setMenuOption("MultipleCharts")}
          />
          <ChartMenuButton
            text={"Single Chart"}
            onClick={() => setMenuOption("SingleChart")}
          />
          <ChartMenuButton
            text={"Power Zones"}
            onClick={() => setMenuOption("PowerZones")}
          />
        </div>
        <S.Divider />
      </section>

      <section
        id={"multipleCharts"}
        style={menuOption === "MultipleCharts" ? {} : { display: "none" }}
      >
        <Line options={options} data={AltitudeData} />
        <Line options={options} data={PowerData} />
        <Line options={options} data={SpeedData} />
      </section>
      <section
        id={"singleChart"}
        style={
          menuOption === "SingleChart"
            ? { minHeight: "400px" }
            : { display: "none" }
        }
      >
        <Line options={options} data={singleChartData} />
      </section>

      <section
        id={"powerZones"}
        style={menuOption === "PowerZones" ? {} : { display: "none" }}
      >
        <S.PowerZonesContainer>
          <div style={{ width: "50%" }}>
            <Bar
              options={HorizontalBarChartOptions}
              data={data}
              // height={"400px"}
            />
          </div>
          <div style={{ minWidth: "300px", height: "300px" }}>
            <Doughnut data={powerZonesInPercentageData} />
          </div>
        </S.PowerZonesContainer>
      </section>
    </div>
  );
};
export default ActivityChartSection;
