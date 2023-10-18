import { cellNeighboursIds, randomIds } from "../utils/global";

const defaultState = {
  isFirstClick: false,
  cellsState: [],
};

interface IAction {
  type: ACTIONS;
  payload: any;
}

interface ICellState {
  id: string;
  isClicked: boolean;
  isBomb: boolean;
  nearestBombQuantity: number;
}

export interface IState {
  isFirstClick: boolean;
  cellsState: ICellState[];
}

export enum ACTIONS {
  ADD_CELL = "ADD_CELL",
  CELL_CLICK = "CELL_CLICK",
  FIRST_CLICK = "FIRST_CLICK",
}

export const reducer = (state: IState = defaultState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.ADD_CELL:
      return {
        ...state,
        cellsState: {
          ...state.cellsState,
          [action.payload.id]: {
            id: action.payload.id,
            isClicked: action.payload.isClicked,
            isBomb: false,
            nearestBombQuantity: 0,
          },
        },
      };

    case ACTIONS.CELL_CLICK:
      let acc: any = {};

      const clickedSet = new Set([action.payload.id]);

      for (let currentId of clickedSet) {
        if (state.cellsState[currentId]) {
          if (state.cellsState[currentId].nearestBombQuantity === 0) {
            const neighboursIds = cellNeighboursIds(currentId);
            neighboursIds.forEach((id) => clickedSet.add(id));
          }

          acc[currentId] = {
            ...state.cellsState[currentId],
            isClicked: true,
          };
        }
      }

      return {
        ...state,
        cellsState: {
          ...state.cellsState,
          ...acc,
        },
      };

    case ACTIONS.FIRST_CLICK:
      const bombsIndexes = randomIds(255, 40, action.payload.id);

      const cellStateIds = Object.keys(state.cellsState);
      let newCellsState: any = {};
      for (const cellStateId of cellStateIds) {
        let nearestBombQuantity = 0;

        const neighboursIds = cellNeighboursIds(cellStateId);

        for (const neighboursId of neighboursIds) {
          if (bombsIndexes[neighboursId]) {
            nearestBombQuantity++;
          }
        }

        newCellsState[cellStateId as any] = {
          ...state.cellsState[cellStateId as any],
          isClicked: action.payload.id === cellStateId,
          isBomb: bombsIndexes[cellStateId] ?? false,
          nearestBombQuantity,
        };
      }

      return {
        ...state,
        isFirstClick: true,
        cellsState: newCellsState,
      };

    default:
      return state;
  }
};
