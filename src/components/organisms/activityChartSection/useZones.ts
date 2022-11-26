import React, { useState, useEffect } from "react";
import { am } from "chart.js/dist/chunks/helpers.core";
import { calculateDuration } from "../../../utils/calculations";

interface Props {
  duration: number;
  ftp: number;
  powerData: number[];
}

const useZones = ({ duration, ftp, powerData }: Props) => {
  // const [userZones, setUserZones] = useState([]);
  const userZones = [
    { min: 0, max: ftp * 0.6 },
    { min: ftp * 0.601, max: ftp * 0.8 },
    { min: ftp * 0.801, max: ftp * 0.905 },
    { min: ftp * 0.906, max: ftp * 1.1 },
    { min: ftp * 1.101, max: ftp * 2 },
    { min: ftp * 2.01, max: ftp * 10 },
  ];
  const calculatePercentInZones = (
    userZones: { min: number; max: number }[],
    powerData: number[]
  ) => {
    let samplesInZones = [0, 0, 0, 0, 0, 0];
    powerData.forEach((sample) => {
      for (let i = 0; i < 6; i++) {
        if (sample > userZones[i].min && sample < userZones[i].max)
          samplesInZones[i] = samplesInZones[i] + 1;
      }
    });

    samplesInZones.forEach(function (amountOfSamples, index) {
      samplesInZones[index] = Math.round(amountOfSamples / 10);
    });
    return samplesInZones;
  };

  const powerZonesInPercentage = calculatePercentInZones(userZones, powerData);
  const calculateDurationInZones = (
    powerZonesInPercentage: number[],
    duration: number
  ) => {
    let durationInZones = [
      { asString: "", asNumber: 0 },
      { asString: "", asNumber: 0 },
      { asString: "", asNumber: 0 },
      { asString: "", asNumber: 0 },
      { asString: "", asNumber: 0 },
      { asString: "", asNumber: 0 },
    ];
    powerZonesInPercentage.forEach((percentage, index) => {
      durationInZones[index] = {
        asString: calculateDuration((percentage * duration) / 100),
        asNumber: Math.round((percentage * duration) / 60) / 100,
      };
    });
    return durationInZones;
  };
  const durationInZones = calculateDurationInZones(
    powerZonesInPercentage,
    duration
  );
  return { powerZonesInPercentage, durationInZones };
};
export default useZones;
