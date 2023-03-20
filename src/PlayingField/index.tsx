import styles from "./index.module.scss";
import { useState } from "react";
import Cell from "../Cell";

interface IPlayingField {
  onCellClick: () => void;
  cellMouseDownHandler: () => void;
  cellMouseUpHandler: () => void;
}

function PlayingField({
  onCellClick,
  cellMouseDownHandler,
  cellMouseUpHandler,
}: IPlayingField) {
  const cellClickHandler = () => {
    onCellClick();
  };

  const idMaker = (index: number) => {
    const OYId = Math.trunc(index / 16);
    const OXId = index - OYId * 16;
    return `${OYId}_${OXId}`;
  };
  const cells = [];
  for (let i = 0; i < 256; i++) {
    cells.push(
      <Cell
        onClick={cellClickHandler}
        onMouseDown={cellMouseDownHandler}
        onMouseUp={cellMouseUpHandler}
        id={idMaker(i)}
      />
    );
  }

  return <div className={styles.PlayingField}>{cells}</div>;
}

export default PlayingField;
