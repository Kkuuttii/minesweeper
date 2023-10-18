import { IobjectIds } from "../types";

export const formatTime = (time: number) => {
  if (time < 10) {
    return `00${time}`;
  } else if (time < 100) {
    return `0${time}`;
  } else return time;
};
export const getIndexById = (id: string): number => {
  let idArr = id.split("_");
  return +idArr[0] * 16 + +idArr[1];
};

export const getIdByIndex = (index: number): string => {
  const OYId = Math.trunc(index / 16);
  const OXId = index - OYId * 16;
  return `${OYId}_${OXId}`;
};

export const transformIdInArr = (id: string): number[] => {
  let newId = id.split("_");
  return [+newId[0], +newId[1]];
};

export const cellNeighboursIds = (cellId: string) => {
  const idArr: number[] = transformIdInArr(cellId);
  return [
    `${idArr[0] - 1}_${idArr[1]}`,
    `${idArr[0] - 1}_${idArr[1] + 1}`,
    `${idArr[0]}_${idArr[1] + 1}`,
    `${idArr[0] + 1}_${idArr[1] + 1}`,
    `${idArr[0] + 1}_${idArr[1]}`,
    `${idArr[0] + 1}_${idArr[1] - 1}`,
    `${idArr[0]}_${idArr[1] - 1}`,
    `${idArr[0] - 1}_${idArr[1] - 1}`,
  ];
};

export const randomIds = (
  to: number,
  numbersAmount: number,
  excludeId: string
): IobjectIds => {
  const allExcludeIds = cellNeighboursIds(excludeId);
  allExcludeIds.push(excludeId);

  const objExcludeIds: IobjectIds = {};
  for (let excludeId of allExcludeIds) {
    objExcludeIds[excludeId] = true;
  }

  const randomIds: IobjectIds = {};
  do {
    const randomIndex = Math.trunc(Math.random() * 1000);
    const randomId = getIdByIndex(randomIndex);
    if (randomIndex <= to && !randomIds[randomId] && !objExcludeIds[randomId]) {
      randomIds[randomId] = true;
    }
  } while (Object.keys(randomIds).length < numbersAmount);

  return randomIds;
};
