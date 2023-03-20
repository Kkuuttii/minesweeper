import styles from "./index.module.scss";
import { useState } from "react";

interface ICell {
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  id: string;
}

function Cell({ onClick, onMouseDown, onMouseUp, id }: ICell) {
  const [clicked, setClicked] = useState<boolean>(false);
  const handlerClick = () => {
    setClicked(true);
    onClick();
  };
  return (
    <div
      className={clicked === false ? styles.cell : styles.clickedCell}
      onClick={handlerClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {id}
    </div>
  );
}

export default Cell;
