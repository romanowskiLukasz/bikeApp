export const calculateDistance = (distance: number) => {
  return Math.round((distance / 1000) * 100) / 100;
};

export const calculateDuration = (durationInSeconds: number) => {
  let date = new Date(0);
  date.setSeconds(durationInSeconds);
  let timeString = date.toISOString().substring(11, 19);
  return timeString;
};

export const calculateAvgSpeed = (duration: number, distance: number) => {
  return Math.round((distance / duration) * 3.6 * 100) / 100;
};

export const calculateAvgSpeedFromMS = (avgSpeedInMS: number) => {
  return Math.round(avgSpeedInMS * 3.6 * 100) / 100;
};

export const getDate = (ISODate: string) => {
  return new Date(ISODate);
};
