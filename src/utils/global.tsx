export const formatTime = (time: number) => {
  if (time < 10) {
    return `00${time}`;
  } else if (time < 100) {
    return `0${time}`;
  } else return time;
};
