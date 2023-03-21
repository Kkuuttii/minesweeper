import styles from "./index.module.scss";
import { useState } from "react";

interface ICell {
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  id: string;
  isBomb: boolean;
}

function Cell({ onClick, onMouseDown, onMouseUp, id, isBomb }: ICell) {
  const [clicked, setClicked] = useState<boolean>(false);
  const handlerClick = () => {
    setClicked(true);
    onClick();
    console.log(isBomb);
  };
  return (
    <div
      className={clicked === false ? styles.cell : styles.clickedCell}
      onClick={handlerClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      id={id}
    >
      {isBomb && 1}
    </div>
  );
}

export default Cell;
