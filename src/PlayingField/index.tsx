import styles from "./index.module.scss";
import { useMemo } from "react";
import Cell from "../Cell";
import { getIdByIndex } from "../utils/global";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../store/reducer";

interface IPlayingField {
  onCellClick: () => void;
  onCellMouseDown: () => void;
  onCellMouseUp: () => void;
}

function PlayingField({
  onCellClick,
  onCellMouseDown,
  onCellMouseUp,
}: IPlayingField) {
  const dispatch = useDispatch();

  const getCells: JSX.Element[] = useMemo(() => {
    const newCells = [];

    for (let i = 0; i < 256; i++) {
      let id = getIdByIndex(i);

      newCells.push(
        <Cell
          onClick={cellClickHandler}
          onMouseDown={onCellMouseDown}
          onMouseUp={onCellMouseUp}
          id={id}
          key={id}
        />
      );
      dispatch({
        type: ACTIONS.ADD_CELL,
        payload: { id: id, isClicked: false },
      });
    }

    return newCells;
  }, [onCellMouseDown, onCellMouseUp, dispatch]);

  function cellClickHandler() {
    // onCellClick();
  }

  return <div className={styles.PlayingField}>{getCells}</div>;
}

export default PlayingField;
