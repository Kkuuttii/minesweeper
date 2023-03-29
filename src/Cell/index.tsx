import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { IState, ACTIONS } from "../store/reducer";

interface ICell {
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  key: string;
  id: string;
}

function Cell({ onClick, onMouseDown, onMouseUp, id }: ICell) {
  const dispatch = useDispatch();

  const cellState = useSelector((state: IState) => {
    return state.cellsState[id as any];
  });

  const isFirstClick = useSelector((state: IState) => state.isFirstClick);

  const handlerClick = () => {
    if (!isFirstClick) {
      dispatch({
        type: ACTIONS.FIRST_CLICK,
        payload: { id },
      });
    }
    dispatch({
      type: ACTIONS.CELL_CLICK,
      payload: { isClicked: true, id },
    });

    onClick();
  };

  return (
    <div
      // className={
      //   cellState?.isClicked === false ? styles.cell : styles.clickedCell
      // }

      className={`${
        cellState?.isBomb === true
          ? styles.cellBombed
          : cellState?.isClicked === false
          ? styles.cell
          : styles.clickedCell
      }`}
      onClick={handlerClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {/* {cellState?.isBomb && 1} */}
      <div>{cellState?.nearestBombQuantity}</div>
    </div>
  );
}

export default Cell;
