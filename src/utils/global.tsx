export const formatTime = (time: number) => {
  if (time < 10) {
    return `00${time}`;
  } else if (time < 100) {
    return `0${time}`;
  } else return time;
};

export const randomIntegers = (to: number, numbersAmount: number) => {
  const arr: number[] = [];
  do {
    let num = Math.trunc(Math.random() * 1000);
    if (num <= to && !arr.includes(num)) {
      arr.push(num);
    }
  } while (arr.length < numbersAmount);

  return arr;
};
